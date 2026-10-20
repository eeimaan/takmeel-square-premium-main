// src/components/sections/Location.tsx
import { Section, Shell, Eyebrow } from "./Section";
import { connectivity } from "@/data/amenities";
import { site } from "@/data/navigation";
import { copy } from "@/content/site";
import { ArrowUpRight, MapPin, Navigation } from "lucide-react";

export function Location({ headingAs: Heading = "h2" }: { headingAs?: "h1" | "h2" } = {}) {
  return (
    <Section id="location" className="relative pb-20 pt-6 md:pb-28 md:pt-10">
      <Shell>
        {/* ---------- Header row ---------- */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <Eyebrow index="07">{copy.location.eyebrow}</Eyebrow>
            <Heading
              className="display mt-6 text-[clamp(1.75rem,3.4vw,3rem)] leading-[1.05]"
              data-reveal
            >
              {copy.location.heading[0]}
              <br />
              {copy.location.heading[1]}
            </Heading>
          </div>
          <p
            className="max-w-xs text-base leading-relaxed text-muted-foreground md:text-right"
            data-reveal
            data-reveal-delay="120"
          >
            {copy.location.note}
          </p>
        </div>
      </Shell>

      {/* ---------- Cinematic map (full-screen width) ---------- */}
      <div className="px-4 md:px-0">
        <div
          className="group relative mt-8 aspect-[4/3] w-full overflow-hidden bg-forest sm:aspect-[16/9] md:mt-10 md:aspect-auto md:h-[58vh] md:min-h-[460px]"
          data-reveal
          data-reveal-delay="200"
        >
          {/* Corner rules, blueprint framing */}
          <span className="pointer-events-none absolute left-0 top-0 z-30 h-px w-16 bg-gold/60" />
          <span className="pointer-events-none absolute left-0 top-0 z-30 h-16 w-px bg-gold/60" />
          <span className="pointer-events-none absolute right-0 top-0 z-30 h-px w-16 bg-gold/60" />
          <span className="pointer-events-none absolute right-0 top-0 z-30 h-16 w-px bg-gold/60" />
          <span className="pointer-events-none absolute bottom-0 left-0 z-30 h-px w-16 bg-gold/60" />
          <span className="pointer-events-none absolute bottom-0 left-0 z-30 h-16 w-px bg-gold/60" />
          <span className="pointer-events-none absolute bottom-0 right-0 z-30 h-px w-16 bg-gold/60" />
          <span className="pointer-events-none absolute bottom-0 right-0 z-30 h-16 w-px bg-gold/60" />

          {/* Embedded Google Map, themed */}
          <iframe
            title={`${site.name}, ${site.address}`}
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d55655.95822842423!2d71.6792491!3d29.3264156!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x393b9300455118a1%3A0x485eadcb98cce44f!2sTakmeel%20Square%20(Pvt)%20Ltd.!5e0!3m2!1sen!2s!4v1790969324225!5m2!1sen!2s"
            loading="lazy"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
            className="absolute inset-0 z-0 h-full w-full border-0 grayscale-[.6] sepia-[.32] contrast-[1.06] brightness-[.9] saturate-[.8] transition-[filter] duration-[1200ms] ease-out group-hover:grayscale-0 group-hover:sepia-0 group-hover:brightness-100 group-hover:saturate-100"
          />

          {/* Forest multiply tint */}
          <div className="pointer-events-none absolute inset-0 z-10 bg-forest/30 mix-blend-multiply" />

          {/* Radial gold vignette, warms the center, darkens the edges */}
          <div
            className="pointer-events-none absolute inset-0 z-10"
            style={{
              background:
                "radial-gradient(120% 80% at 50% 45%, rgba(212,175,55,0.10) 0%, rgba(20,35,25,0.35) 55%, rgba(15,25,18,0.85) 100%)",
            }}
          />

          {/* Film grain, subtle noise overlay */}
          <div
            className="pointer-events-none absolute inset-0 z-10 opacity-[0.12] mix-blend-overlay"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
            }}
          />

          {/* -------- Top-left: index chip -------- */}
          <div className="absolute left-6 top-6 z-30 flex items-center gap-3 rounded-full border border-gold/40 bg-forest/40 px-4 py-2 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-gold" />
            </span>
            <span className="text-[0.62rem] uppercase tracking-[0.28em] text-gold">
              Flagship Site
            </span>
          </div>

          {/* -------- Top-right: coordinates plate -------- */}
          <div className="absolute right-6 top-6 z-30 hidden items-center gap-4 border border-ivory/20 bg-forest/40 px-4 py-2 backdrop-blur-md md:flex">
            <Navigation size={14} className="text-gold" />
            <span className="font-mono text-[0.68rem] tracking-[0.14em] text-ivory/80">
              29.3264° N&nbsp;&nbsp;71.6792° E
            </span>
          </div>

          {/* -------- Center pin, custom animated marker -------- */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
            <span className="absolute inset-0 -m-8 animate-ping rounded-full border border-gold/40" />
            <span className="absolute inset-0 -m-4 rounded-full border border-gold/60" />
            <span className="relative flex h-3 w-3 items-center justify-center rounded-full bg-gold shadow-[0_0_24px_6px_rgba(212,175,55,0.45)]" />
          </div>

          {/* -------- Bottom: frosted info card -------- */}
          <div className="absolute inset-x-6 bottom-6 z-30 md:inset-x-10 md:bottom-10">
            <div className="flex flex-col gap-6 border border-ivory/15 bg-forest/55 p-6 backdrop-blur-xl md:flex-row md:items-center md:justify-between md:gap-10 md:p-8">
              {/* Left: pin + address */}
              <div className="flex items-start gap-4">
                <span className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center border border-gold/60 text-gold">
                  <MapPin size={16} />
                </span>
                <div>
                  <p className="text-[0.62rem] uppercase tracking-[0.28em] text-gold">
                    Head Office
                  </p>
                  <p className="display mt-2 text-xl leading-tight text-ivory md:text-2xl">
                    {site.name}
                  </p>
                  <p className="mt-1 text-sm text-ivory/70">{site.address}</p>
                </div>
              </div>

              {/* Right: travel stats + CTA */}
              <div className="flex flex-col gap-4 md:items-end">
                <dl className="flex flex-wrap gap-x-8 gap-y-2">
                  {connectivity.slice(0, 3).map((c) => (
                    <div key={c.label} className="text-left md:text-right">
                      <dt className="text-[0.55rem] uppercase tracking-[0.22em] text-ivory/50">
                        {c.label}
                      </dt>
                      <dd className="display mt-0.5 text-lg text-ivory">
                        {c.value}
                      </dd>
                    </div>
                  ))}
                </dl>

                <a
                  href={site.locationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="brand-hover inline-flex items-center gap-3 border border-gold px-6 py-3 text-xs uppercase tracking-[0.18em] text-gold transition-colors hover:bg-gold hover:text-forest"
                >
                  Open in Maps <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}