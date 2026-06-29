import { Cpu, DatabaseZap, Layers3, Network } from "lucide-react";

const systems = [
  {
    title: "Spatial engine",
    body: "Stream terrain, roads, buildings, sensors, and moving agents into one synchronized scene.",
    icon: Layers3,
  },
  {
    title: "Causal graph",
    body: "Trace why a metric changed, not just that it changed, with explainable dependency paths.",
    icon: Network,
  },
  {
    title: "Realtime compute",
    body: "Run adaptive tick rates for high-density zones without freezing the rest of the world.",
    icon: Cpu,
  },
  {
    title: "Data fusion",
    body: "Merge static GIS, live feeds, surveys, and synthetic data with provenance on every layer.",
    icon: DatabaseZap,
  },
];

export function Technology() {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Technology</p>
            <h2 className="mt-3 text-3xl font-black leading-tight sm:text-5xl">A stack built for messy, moving reality.</h2>
            <p className="mt-5 text-base leading-7 text-muted-foreground">
              The interface stays calm while the engine handles thousands of simultaneous variables underneath.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {systems.map(({ title, body, icon: Icon }) => (
              <article key={title} className="rounded-md border border-border bg-card p-6">
                <Icon className="size-6 text-accent" />
                <h3 className="mt-5 text-xl font-black">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
