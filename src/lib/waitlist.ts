export type WaitlistCountResponse = {
  count: number;
  storage?: "cloudflare-kv" | "memory";
};

export type WaitlistJoinResponse = WaitlistCountResponse & {
  joined: boolean;
  error?: string;
};

export async function fetchWaitlistCount(signal?: AbortSignal): Promise<WaitlistCountResponse> {
  const response = await fetch("/api/waitlist/count", {
    headers: { Accept: "application/json" },
    signal,
  });

  if (!response.ok) {
    throw new Error("Unable to load the waitlist count.");
  }

  return response.json();
}

export async function joinWaitlist(email: string): Promise<WaitlistJoinResponse> {
  const response = await fetch("/api/waitlist", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email }),
  });
  const data = (await response.json()) as WaitlistJoinResponse;

  if (!response.ok) {
    throw new Error(data.error || "Unable to join the waitlist.");
  }

  return data;
}
