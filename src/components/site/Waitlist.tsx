import { Mail, Send } from "lucide-react";
import { FormEvent, useEffect, useState } from "react";

import { fetchWaitlistCount, joinWaitlist } from "../../lib/waitlist";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export function Waitlist() {
  const [email, setEmail] = useState("");
  const [count, setCount] = useState<number | null>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("Live count syncing from the edge.");

  useEffect(() => {
    const controller = new AbortController();

    fetchWaitlistCount(controller.signal)
      .then((data) => {
        setCount(data.count);
        setMessage(data.storage === "memory" ? "Local preview count. Add Cloudflare KV for persistent deploys." : "Live Cloudflare count.");
      })
      .catch(() => {
        setMessage("Count will reconnect when the API is available.");
      });

    return () => controller.abort();
  }, []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("Securing your place in the simulation queue...");

    try {
      const data = await joinWaitlist(email);
      setCount(data.count);
      setStatus("success");
      setMessage(data.joined ? "You are on the waitlist. Welcome to the signal." : "You are already on the waitlist.");
      setEmail("");
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Something went wrong. Try again.");
    }
  }

  return (
    <section className="relative overflow-hidden bg-muted/25 py-16 sm:py-20 lg:py-24">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
      <div className="site-container max-w-5xl">
        <div className="neon-frame overflow-hidden rounded-md bg-card shadow-glow">
          <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[0.9fr_1.1fr] lg:p-10">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Early access</p>
              <h2 className="mt-3 text-3xl font-black leading-tight sm:text-4xl">Join the first Simworld signal.</h2>
              <p className="mt-4 text-base leading-7 text-muted-foreground">
                Get pilot access for AI metahuman demos, cross-reality scenes, creator tools, and early world-simulation tests.
              </p>
              <div className="mt-6 inline-flex items-end gap-3 rounded-md border border-primary/25 bg-background/60 px-4 py-3">
                <span className="text-4xl font-black text-primary tabular-nums">{count ?? "--"}</span>
                <span className="pb-1 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  live waitlist
                </span>
              </div>
            </div>
            <form className="grid content-center gap-3 sm:grid-cols-[minmax(0,1fr)_auto]" onSubmit={handleSubmit}>
              <label className="sr-only" htmlFor="waitlist-email">
                Email address
              </label>
              <div className="relative">
                <Mail className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  id="waitlist-email"
                  type="email"
                  required
                  placeholder="team@company.com"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  className="h-12 pl-10"
                />
              </div>
              <Button type="submit" size="lg" className="h-12" disabled={status === "loading"}>
                <Send />
                {status === "loading" ? "Joining" : "Join"}
              </Button>
              <p
                className={`text-xs leading-5 sm:col-span-2 ${
                  status === "error" ? "text-secondary" : status === "success" ? "text-primary" : "text-muted-foreground"
                }`}
                role="status"
              >
                {message}
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
