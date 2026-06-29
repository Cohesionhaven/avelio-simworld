import { Hono } from "hono";

type WaitlistStore = {
  get(key: string): Promise<string | null>;
  put(key: string, value: string): Promise<void>;
};

type WorkerEnv = {
  WAITLIST_KV?: WaitlistStore;
};

type WaitlistEntry = {
  email?: string;
};

const app = new Hono<{ Bindings: WorkerEnv }>();

const fallbackEmails = new Set<string>();

const jsonHeaders = {
  "Cache-Control": "no-store",
};

function normalizeEmail(email: unknown) {
  return typeof email === "string" ? email.trim().toLowerCase() : "";
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

async function hashEmail(email: string) {
  const input = new TextEncoder().encode(email);
  const digest = await crypto.subtle.digest("SHA-256", input);
  return Array.from(new Uint8Array(digest))
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
}

async function getWaitlistCount(kv?: WaitlistStore) {
  if (!kv) {
    return fallbackEmails.size;
  }

  const stored = await kv.get("waitlist:count");
  const parsed = stored ? Number.parseInt(stored, 10) : 0;
  return Number.isFinite(parsed) ? parsed : 0;
}

app.get("/api/", (c) => c.json({ name: "Avelio Simworld", status: "online" }, 200, jsonHeaders));

app.get("/api/waitlist/count", async (c) => {
  const count = await getWaitlistCount(c.env.WAITLIST_KV);
  return c.json(
    {
      count,
      storage: c.env.WAITLIST_KV ? "cloudflare-kv" : "memory",
    },
    200,
    jsonHeaders,
  );
});

app.post("/api/waitlist", async (c) => {
  let payload: WaitlistEntry;

  try {
    payload = await c.req.json<WaitlistEntry>();
  } catch {
    return c.json({ error: "Send a valid JSON body." }, 400, jsonHeaders);
  }

  const email = normalizeEmail(payload.email);

  if (!isValidEmail(email)) {
    return c.json({ error: "Enter a valid email address." }, 400, jsonHeaders);
  }

  const key = `waitlist:email:${await hashEmail(email)}`;

  if (!c.env.WAITLIST_KV) {
    fallbackEmails.add(email);
    return c.json(
      {
        count: fallbackEmails.size,
        joined: true,
        storage: "memory",
      },
      200,
      jsonHeaders,
    );
  }

  const existing = await c.env.WAITLIST_KV.get(key);
  let count = await getWaitlistCount(c.env.WAITLIST_KV);

  if (!existing) {
    count += 1;
    await c.env.WAITLIST_KV.put(
      key,
      JSON.stringify({
        email,
        joinedAt: new Date().toISOString(),
      }),
    );
    await c.env.WAITLIST_KV.put("waitlist:count", String(count));
  }

  return c.json(
    {
      count,
      joined: !existing,
      storage: "cloudflare-kv",
    },
    200,
    jsonHeaders,
  );
});

export default app;
