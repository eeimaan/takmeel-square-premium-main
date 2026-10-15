// src/components/sections/AreaGuide.tsx
import { ArrowUpRight, MapPin } from "lucide-react";
import { Section, Shell, Eyebrow } from "./Section";
import { areaSummary, landmarks } from "@/data/specs";
import { site } from "@/data/navigation";
import locationMap from "@/assets/takmeel/location-map-theme.webp";

/**
 * Location page layout:
 *   top    : the large themed location map, full width and centered,
 *   below  : the area text on one side and the Google map box on the other.
 */
export function AreaGuide() {
  return (
    <Section id="area-guide" className="pb-16 md:pb-24">
      {/* ---------- TOP: big themed map, full-screen width, merged with the header ---------- */}
      <figure className="group relative w-full overflow-hidden bg-forest p-5 md:p-10" data-reveal>
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
            style={{ background: "radial-gradient(55% 60% at 50% 45%, rgba(212,175,55,.14), transparent 70%)" }}
          />
          <img
            src={locationMap}
            alt="Location map of Takmeel Square, DHA Bahawalpur, Main Gate, Southern Bypass, DHA Club, CMH Institute of Medical Sciences, Bahawalpur Airport and Cantt"
            loading="lazy"
            className="relative mx-auto h-auto w-full max-w-6xl drop-shadow-[0_24px_30px_rgba(0,0,0,0.35)] transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.01]"
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

      {/* ---------- BELOW: text on one side, Google map box on the other ---------- */}
      <Shell>
        <div className="mt-14 grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-16">
          {/* text */}
          <div className="flex flex-col">
            <Eyebrow>Around Takmeel Square</Eyebrow>
            <h2 className="display mt-6 text-[clamp(1.7rem,3vw,2.6rem)] leading-[1.1]" data-reveal>
              DHA Bahawalpur, at a glance.
            </h2>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground md:text-base" data-reveal>
              {areaSummary}
            </p>

            <dl className="mt-8 border-b border-border">
              {landmarks.map((l) => (
                <div key={l.name} className="flex items-baseline justify-between gap-5 border-t border-border py-3">
                  <dt className="flex items-baseline gap-2.5 text-sm text-foreground/85">
                    <MapPin size={12} className="shrink-0 translate-y-0.5 text-gold-deep" />
                    {l.name}
                  </dt>
                  <dd className="shrink-0 text-right text-[0.58rem] uppercase tracking-[0.18em] text-muted-foreground">
                    {l.detail}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Google map box, beside the text (stretches to match the text height) */}
          <div className="group relative aspect-[4/3] overflow-hidden bg-forest lg:aspect-auto lg:h-full lg:min-h-[28rem]" data-reveal>
            <iframe
              title={`${site.name}, ${site.address}`}
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d55655.95822842423!2d71.6792491!3d29.3264156!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x393b9300455118a1%3A0x485eadcb98cce44f!2sTakmeel%20Square%20(Pvt)%20Ltd.!5e0!3m2!1sen!2s!4v1790969324225!5m2!1sen!2s"
              loading="lazy"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
              className="absolute inset-0 h-full w-full border-0 grayscale-[.5] sepia-[.28] contrast-[1.05] brightness-[.92] saturate-[.85] transition-[filter] duration-[1000ms] ease-out group-hover:grayscale-0 group-hover:sepia-0 group-hover:brightness-100 group-hover:saturate-100"
            />
            <div className="pointer-events-none absolute inset-0 bg-forest/20 mix-blend-multiply" />
            <span className="pointer-events-none absolute inset-3 border border-gold/30" />
            <a
              href={site.locationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="brand-hover absolute bottom-4 left-4 inline-flex items-center gap-2 border border-gold bg-forest/70 px-5 py-2.5 text-[0.62rem] uppercase tracking-[0.18em] text-gold backdrop-blur-md transition-colors hover:bg-gold hover:text-forest"
            >
              Open in Google Maps <ArrowUpRight size={13} />
            </a>
          </div>
        </div>
      </Shell>
    </Section>
  );
}
