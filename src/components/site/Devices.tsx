import { MonitorSmartphone, Server, TabletSmartphone } from "lucide-react";

const deviceModes = [
  {
    title: "Control room",
    body: "Wall-scale operations view with event timelines, heatmaps, and scenario health.",
    icon: MonitorSmartphone,
  },
  {
    title: "Field tablet",
    body: "Touch-first review mode for inspections, drills, and mobile response teams.",
    icon: TabletSmartphone,
  },
  {
    title: "Secure cloud",
    body: "Region-aware deployment with private data connectors and staged model updates.",
    icon: Server,
  },
];

export function Devices() {
  return (
    <section className="border-y border-border bg-muted/25 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-secondary">Responsive by design</p>
          <h2 className="mt-3 text-3xl font-black leading-tight sm:text-5xl">From control rooms to field teams.</h2>
          <p className="mt-5 text-base leading-7 text-muted-foreground">
            The experience scales from wide command displays to laptops and tablets without burying the important controls.
          </p>
        </div>
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {deviceModes.map(({ title, body, icon: Icon }) => (
            <article key={title} className="rounded-md border border-border bg-card p-6">
              <Icon className="size-7 text-primary" />
              <h3 className="mt-5 text-xl font-black">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
