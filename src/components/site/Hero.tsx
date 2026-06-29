import { ArrowRight, Gauge, Globe2, Play, RadioTower } from "lucide-react";

import heroVideo from "../../assets/video.mp4";
import { Button } from "../ui/button";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <video
        className="absolute inset-0 -z-20 h-full w-full object-cover"
        src={heroVideo}
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,hsl(var(--background)/0.96),hsl(var(--background)/0.74)_48%,hsl(var(--background)/0.46)),linear-gradient(180deg,hsl(var(--background)/0.12),hsl(var(--background)))]" />

      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 md:py-16 lg:min-h-[calc(84svh-65px)] lg:grid-cols-[1.04fr_0.96fr] lg:px-8 lg:py-16">
        <div className="max-w-3xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-md border border-primary/25 bg-primary/10 px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            <RadioTower className="size-4" />
            Live world simulation platform
          </div>
          <h1 className="max-w-4xl text-balance text-5xl font-black leading-[0.95] text-foreground sm:text-6xl lg:text-7xl">
            Avelio Simworld
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
            Build, observe, and tune city-scale digital twins where traffic, weather, energy, and people react as one living system.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button size="xl" asChild>
              <a href="#waitlist">
                Request access
                <ArrowRight />
              </a>
            </Button>
            <Button size="xl" variant="glass" asChild>
              <a href="#trailer">
                <Play />
                Watch preview
              </a>
            </Button>
          </div>
          <dl className="mt-10 grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3">
            {[
              ["12 ms", "agent tick"],
              ["4.8M", "active entities"],
              ["99.98%", "scenario uptime"],
            ].map(([value, label]) => (
              <div key={label} className="glass rounded-md p-4">
                <dt className="text-2xl font-black text-foreground">{value}</dt>
                <dd className="mt-1 text-xs uppercase tracking-[0.16em] text-muted-foreground">{label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="glass-strong relative mx-auto hidden w-full max-w-xl rounded-md p-4 shadow-glow md:block lg:mr-0">
          <div className="mb-4 flex items-center justify-between border-b border-border pb-3">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Scenario control</p>
              <h2 className="mt-1 text-lg font-bold">Mumbai coastal surge</h2>
            </div>
            <span className="rounded-md bg-primary px-2.5 py-1 text-xs font-bold text-primary-foreground">Live</span>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              ["Transit load", "84%", "bg-primary"],
              ["Grid reserve", "31%", "bg-accent"],
              ["Response ETA", "06:42", "bg-secondary"],
              ["Air quality", "Good", "bg-emerald-400"],
            ].map(([label, value, color]) => (
              <div key={label} className="rounded-md border border-border bg-background/55 p-4">
                <div className="mb-4 flex items-center justify-between gap-3">
                  <span className="text-sm text-muted-foreground">{label}</span>
                  <Gauge className="size-4 text-primary" />
                </div>
                <div className="text-2xl font-black">{value}</div>
                <div className="mt-3 h-1.5 rounded-full bg-muted">
                  <div className={`h-full w-2/3 rounded-full ${color}`} />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-3 rounded-md border border-border bg-background/55 p-4">
            <div className="flex items-center gap-3">
              <Globe2 className="size-5 text-accent" />
              <p className="text-sm leading-6 text-muted-foreground">
                26 interventions queued across mobility, flood routing, emergency services, and local energy markets.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
