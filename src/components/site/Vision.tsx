import { BrainCircuit, GitBranch, ShieldCheck } from "lucide-react";

const pillars = [
  {
    icon: BrainCircuit,
    title: "Agent intelligence",
    body: "Population, logistics, policy, and infrastructure models negotiate through shared constraints instead of isolated dashboards.",
  },
  {
    icon: GitBranch,
    title: "Scenario branching",
    body: "Fork a live state, test an intervention, and preserve every decision trail for audit, training, and review.",
  },
  {
    icon: ShieldCheck,
    title: "Operational trust",
    body: "Role controls, provenance, and confidence markers keep high-stakes simulations understandable to technical and civic teams.",
  },
];

export function Vision() {
  return (
    <section className="border-y border-border bg-muted/25 py-16 sm:py-20 lg:py-24">
      <div className="site-container">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-secondary">Vision</p>
          <h2 className="mt-3 text-3xl font-black leading-tight sm:text-5xl">
            Digital twins that behave less like charts and more like places.
          </h2>
          <p className="mt-5 text-lg leading-8 text-muted-foreground">
            Designed for planners, operators, researchers, and emergency teams who need to see how a decision travels through a living system.
          </p>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {pillars.map(({ icon: Icon, title, body }) => (
            <article key={title} className="rounded-md border border-border bg-card p-6 shadow-elegant">
              <div className="mb-5 grid size-11 place-items-center rounded-md bg-primary/10 text-primary">
                <Icon className="size-5" />
              </div>
              <h3 className="text-xl font-black">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
