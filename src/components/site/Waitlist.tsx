import { Mail, Send } from "lucide-react";

import { Button } from "../ui/button";
import { Input } from "../ui/input";

export function Waitlist() {
  return (
    <section className="bg-muted/25 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-md border border-border bg-card shadow-glow">
          <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[0.9fr_1.1fr] lg:p-10">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Early access</p>
              <h2 className="mt-3 text-3xl font-black leading-tight sm:text-4xl">Bring a real scenario to the simulator.</h2>
              <p className="mt-4 text-base leading-7 text-muted-foreground">
                Join the waitlist for pilots across mobility, climate resilience, emergency response, and infrastructure planning.
              </p>
            </div>
            <form className="grid content-center gap-3 sm:grid-cols-[1fr_auto]">
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
                  className="h-12 pl-10"
                />
              </div>
              <Button type="submit" size="lg" className="h-12">
                <Send />
                Join
              </Button>
              <p className="text-xs leading-5 text-muted-foreground sm:col-span-2">
                No spam. We will only contact you about Avelio pilot availability.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
