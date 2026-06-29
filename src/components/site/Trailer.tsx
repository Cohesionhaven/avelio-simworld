import { Activity, Maximize2, PlayCircle } from "lucide-react";

import trailerVideo from "../../assets/video.mp4";

export function Trailer() {
  return (
    <section className="bg-background py-16 sm:py-20 lg:py-24">
      <div className="site-container grid gap-8 lg:grid-cols-[1.35fr_0.65fr]">
        <div className="overflow-hidden rounded-md border border-border bg-card shadow-elegant">
          <div className="flex items-center justify-between border-b border-border px-4 py-3">
            <div className="flex items-center gap-2 text-sm font-semibold text-muted-foreground">
              <PlayCircle className="size-4 text-primary" />
              Simulation preview
            </div>
            <Maximize2 className="size-4 text-muted-foreground" />
          </div>
          <video
            className="aspect-video w-full bg-muted object-cover"
            src={trailerVideo}
            controls
            muted
            playsInline
          />
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">What it feels like</p>
          <h2 className="mt-3 text-3xl font-black leading-tight sm:text-4xl">Run a whole world without losing the thread.</h2>
          <p className="mt-5 text-base leading-7 text-muted-foreground">
            Avelio turns dense telemetry into readable cause and effect, so teams can rehearse critical decisions before the real world demands them.
          </p>
          <div className="mt-7 grid gap-3">
            {["Branch scenarios instantly", "Compare interventions side by side", "Replay decisions frame by frame"].map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-md border border-border bg-card/70 p-3">
                <Activity className="size-4 text-accent" />
                <span className="text-sm font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
