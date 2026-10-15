// src/components/sections/Testimonials.tsx
import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Play } from "lucide-react";
import { Section, Shell, Eyebrow } from "./Section";
import { testimonials, type Testimonial } from "@/data/testimonials";
import { VideoModal } from "@/components/ui/VideoModal";

/** A single video testimonial: poster + play button, opens the video on click. */
function VideoCard({ t, onPlay }: { t: Testimonial; onPlay: (url: string) => void }) {
  return (
    <figure className="flex h-full flex-col" data-reveal>
      <button
        type="button"
        onClick={() => onPlay(t.video)}
        aria-label={`Play video testimonial from ${t.name}`}
        className="group relative block aspect-[4/3] w-full overflow-hidden bg-forest"
      >
        <img
          src={t.poster}
          alt={`${t.name}, ${t.context}`}
          loading="lazy"
          className="h-full w-full object-cover opacity-90 transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
        />
        <span className="absolute inset-0 bg-onyx/25 transition-colors duration-500 group-hover:bg-onyx/10" />
        <span className="absolute left-0 top-0 bg-onyx/80 px-4 py-2 text-[0.58rem] uppercase tracking-[0.24em] text-gold">
          {t.category}
        </span>
        <span className="absolute inset-0 flex items-center justify-center">
          <span className="flex h-16 w-16 items-center justify-center rounded-full border border-ivory/60 bg-forest/50 text-ivory backdrop-blur-md transition-all duration-500 group-hover:scale-110 group-hover:border-gold group-hover:bg-gold group-hover:text-forest">
            <Play size={22} className="ml-0.5" fill="currentColor" strokeWidth={0} />
          </span>
        </span>
      </button>
      <figcaption className="mt-5">
        <span className="display block text-xl text-forest">{t.name}</span>
        <span className="mt-1 block text-[0.62rem] uppercase tracking-[0.2em] text-muted-foreground">
          {t.context} · {t.date}
        </span>
      </figcaption>
    </figure>
  );
}

/**
 * `preview` (home): first three video testimonials + a "View more" link to /testimonials.
 * Otherwise: the full list.
 */
export function Testimonials({ preview = false }: { preview?: boolean }) {
  const [active, setActive] = useState<string | null>(null);
  const list = preview ? testimonials.slice(0, 3) : testimonials;

  return (
    <Section id="testimonials" className="py-16 md:py-24">
      <Shell>
        <div className="grid gap-8 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
          <div>
            <Eyebrow {...(preview ? { index: "08" } : {})}>Testimonials</Eyebrow>
            <h2 className="display mt-8 max-w-[18ch] text-[clamp(2rem,4.4vw,3.8rem)]" data-reveal>
              Hear it from our clients.
            </h2>
          </div>
          {preview && (
            <Link
              to="/testimonials"
              className="brand-hover inline-flex w-fit items-center gap-3 rounded-full border border-forest px-7 py-4 text-[0.68rem] uppercase tracking-[0.24em] text-forest transition-colors hover:border-gold"
            >
              View more <ArrowUpRight className="h-4 w-4" />
            </Link>
          )}
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {list.map((t) => (
            <VideoCard key={t.name + t.date} t={t} onPlay={setActive} />
          ))}
        </div>
      </Shell>

      <VideoModal url={active} onClose={() => setActive(null)} />
    </Section>
  );
}
