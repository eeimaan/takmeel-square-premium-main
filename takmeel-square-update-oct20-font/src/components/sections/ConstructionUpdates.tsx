// src/components/sections/ConstructionUpdates.tsx
import { useState } from "react";
import { Play } from "lucide-react";
import { Section, Shell, Eyebrow } from "./Section";
import { constructionUpdates } from "@/data/updates";
import { VideoModal } from "@/components/ui/VideoModal";
import { copy } from "@/content/site";

/** Development updates, newest first, video-based: each poster plays its update video. */
export function ConstructionUpdates() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <Section id="construction-updates" className="py-14 md:py-20">
      <Shell>
        <div className="grid gap-8 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
          <div>
            <Eyebrow>{copy.construction.eyebrow}</Eyebrow>
            <h2 className="display mt-8 max-w-[16ch] text-[clamp(2rem,4.4vw,3.8rem)]" data-reveal>
              {copy.construction.heading}
            </h2>
          </div>
          <p className="max-w-xs text-base leading-relaxed text-muted-foreground" data-reveal data-reveal-delay="140">
            {copy.construction.subtitle}
          </p>
        </div>

        <div className="mt-16 flex flex-col">
          {constructionUpdates.map((u, i) => (
            <article
              key={u.id}
              className="group grid gap-8 border-t border-border py-10 md:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] md:gap-16"
              data-reveal
              data-reveal-delay={`${Math.min(i, 5) * 60}`}
            >
              {/* video poster + play */}
              <button
                type="button"
                onClick={() => setActive(u.video)}
                aria-label={`Play construction update, ${u.date}`}
                className={`group/vid relative aspect-[4/3] overflow-hidden md:aspect-[16/11] ${i % 2 ? "md:order-2" : ""}`}
              >
                <img
                  src={u.image}
                  alt={`${u.title}, ${u.date}`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/vid:scale-[1.03]"
                />
                <span className="absolute inset-0 bg-onyx/25 transition-colors duration-500 group-hover/vid:bg-onyx/10" />
                <span className="absolute left-0 top-0 bg-onyx/80 px-4 py-2 text-[0.6rem] uppercase tracking-[0.28em] text-gold">
                  {u.date}
                </span>
                <span className="absolute inset-0 flex items-center justify-center">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full border border-ivory/60 bg-forest/50 text-ivory backdrop-blur-md transition-all duration-500 group-hover/vid:scale-110 group-hover/vid:border-gold group-hover/vid:bg-gold group-hover/vid:text-forest">
                    <Play size={22} className="ml-0.5" fill="currentColor" strokeWidth={0} />
                  </span>
                </span>
              </button>

              {/* text + progress */}
              <div className="flex min-w-0 flex-col justify-center">
                <h3 className="display text-[clamp(1.6rem,3vw,2.6rem)]">{u.title}</h3>
                <p className="mt-5 max-w-md text-base leading-relaxed text-foreground/80">{u.summary}</p>

                <div className="mt-8 max-w-md">
                  <div className="flex items-baseline justify-between">
                    <span className="text-[0.6rem] uppercase tracking-[0.24em] text-muted-foreground">
                      Overall progress
                    </span>
                    <span className="display text-xl text-forest">{u.progress}%</span>
                  </div>
                  <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-border">
                    <span className="block h-full rounded-full bg-gold-deep" style={{ width: `${u.progress}%` }} />
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setActive(u.video)}
                  className="brand-hover mt-8 inline-flex w-fit items-center gap-2.5 rounded-full border border-forest px-6 py-3 text-[0.66rem] uppercase tracking-[0.22em] text-forest transition-colors hover:border-gold"
                >
                  <Play size={14} className="text-gold-deep" fill="currentColor" strokeWidth={0} /> Watch update
                </button>
              </div>
            </article>
          ))}
        </div>
      </Shell>

      <VideoModal url={active} onClose={() => setActive(null)} />
    </Section>
  );
}
