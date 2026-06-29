const roadmap = [
  ["Alpha", "Scenario composer, live telemetry layers, and baseline city models."],
  ["Beta", "Collaborative review rooms, model marketplace, and intervention comparison."],
  ["Launch", "Enterprise governance, simulation audits, and deployment playbooks."],
];

export function Roadmap() {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Roadmap</p>
            <h2 className="mt-3 text-3xl font-black leading-tight sm:text-5xl">Built in public with serious operators.</h2>
          </div>
          <div className="grid gap-4">
            {roadmap.map(([phase, detail], index) => (
              <article key={phase} className="grid gap-4 rounded-md border border-border bg-card p-5 sm:grid-cols-[120px_1fr] sm:p-6">
                <div className="flex items-center gap-3">
                  <span className="grid size-9 place-items-center rounded-md bg-accent text-sm font-black text-accent-foreground">
                    {index + 1}
                  </span>
                  <h3 className="text-lg font-black">{phase}</h3>
                </div>
                <p className="text-sm leading-6 text-muted-foreground">{detail}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
