// src/components/sections/AreaGuide.tsx
import { MapPin } from "lucide-react";
import { Section, Shell, Eyebrow } from "./Section";
import { areaSummary, landmarks } from "@/data/specs";
import locationMap from "@/assets/takmeel/location-map-theme.webp";

/** DHA Bahawalpur area guide — landmarks around Takmeel Square, from the official location map. */
export function AreaGuide() {
  return (
    <Section id="area-guide" className="pb-28 md:pb-40">
      <Shell>
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-end lg:gap-20">
          <div>
            <Eyebrow>Around Takmeel Square</Eyebrow>
            <h2 className="display mt-8 text-[clamp(2rem,4.4vw,3.8rem)]" data-reveal>
              DHA Bahawalpur, at a glance.
            </h2>
          </div>
          <p className="max-w-md text-base leading-relaxed text-muted-foreground lg:justify-self-end" data-reveal>
            {areaSummary}
          </p>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-14">
          <dl className="border-b border-border">
            {landmarks.map((l) => (
              <div key={l.name} className="flex items-baseline justify-between gap-6 border-t border-border py-3.5">
                <dt className="flex items-baseline gap-3 text-sm text-foreground/85 md:text-base">
                  <MapPin size={13} className="shrink-0 translate-y-0.5 text-gold-deep" />
                  {l.name}
                </dt>
                <dd className="shrink-0 text-right text-[0.62rem] uppercase tracking-[0.2em] text-muted-foreground">
                  {l.detail}
                </dd>
              </div>
            ))}
          </dl>

          <figure
            className="group relative flex items-center overflow-hidden bg-forest p-5 md:p-8 lg:h-full"
            data-reveal
          >
            {/* Blueprint grid + soft gold light, same language as the site plan */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-70"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(244,238,232,.06) 1px,transparent 1px),linear-gradient(90deg,rgba(244,238,232,.06) 1px,transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100"
              style={{ background: "radial-gradient(60% 55% at 62% 45%, rgba(212,175,55,.14), transparent 70%)" }}
            />
            <img
              src={locationMap}
              alt="Location map of Takmeel Square, DHA Bahawalpur — Main Gate, Southern Bypass, DHA Club, CMH Institute of Medical Sciences, Bahawalpur Airport and Cantt"
              loading="lazy"
              className="relative mx-auto h-auto w-full drop-shadow-[0_24px_30px_rgba(0,0,0,0.35)] transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
            />
            <div className="pointer-events-none absolute left-5 top-5 flex items-center gap-3 rounded-full border border-gold/40 bg-forest/60 px-4 py-2 backdrop-blur-md md:left-8 md:top-8">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-gold" />
              </span>
              <span className="text-[0.6rem] uppercase tracking-[0.28em] text-gold">Location map</span>
            </div>
            <figcaption className="sr-only">Location map of Takmeel Square and surrounding landmarks in DHA Bahawalpur.</figcaption>
          </figure>
        </div>
      </Shell>
    </Section>
  );
}
