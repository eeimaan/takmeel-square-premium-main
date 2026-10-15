// src/components/sections/About.tsx
import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Section, Shell, Eyebrow } from "./Section";
import { images } from "@/data/projects";

export function About({ headingAs: Heading = "h2" }: { headingAs?: "h1" | "h2" } = {}) {
  return (
    <Section id="about" className="pt-20 md:pt-28">
      <Shell>
        <Eyebrow index="01">About Takmeel Square</Eyebrow>

        <div className="mt-12 grid gap-16 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:gap-24">
          <Heading
            className="display text-[clamp(2rem,5.2vw,4.6rem)]"
            data-reveal
            data-reveal-delay="80"
          >
            South Punjab's premier commercial hub.
          </Heading>

          <div className="flex flex-col gap-8 self-end" data-reveal data-reveal-delay="200">
            <p className="text-base leading-relaxed text-muted-foreground">
              Takmeel Square, encompassing 1.2 million square feet, is the largest
              commercial hub of Southern Punjab, an inclusive integrated retail and
              open market model, empowering investors and business owners to become
              the architects of their future success.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground">
              Set within DHA Bahawalpur's sustainable, master planned community,
              Takmeel Square brings together Takmeel Bazaar, Takmeel Homes and the
              4 acre Glow Park, fostering business, elevating lifestyles and
              shaping South Punjab's economic future.
            </p>
            <dl className="hidden grid-cols-3 gap-6 border-t border-border pt-8">
              {[
                { k: "Sq ft", v: "1.2M" },
                { k: "Shops", v: "260" },
                { k: "Acres park", v: "4" },
              ].map((s) => (
                <div key={s.k}>
                  <dt className="eyebrow">{s.k}</dt>
                  <dd className="display mt-2 text-4xl">{s.v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </Shell>

      <div className="mt-12 md:mt-16" data-reveal data-reveal-delay="120">
        <figure
          data-lightbox-image
          className="group relative h-[85svh] w-full cursor-zoom-in overflow-hidden md:h-[100svh]"
        >
          <img
            src={images.squareSunsetGlass}
            alt="Takmeel Square at sunset, DHA Bahawalpur"
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-[2400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-onyx/90 via-onyx/15 to-onyx/25" />
          <span className="pointer-events-none absolute inset-4 border border-gold/30 md:inset-8" />
          <figcaption className="pointer-events-none absolute inset-x-0 bottom-10 md:bottom-16">
            <Shell className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
              <span className="block">
                <span className="eyebrow text-gold">Takmeel Square · DHA Bahawalpur</span>
                <span className="display mt-3 block max-w-2xl text-[clamp(2rem,4.6vw,4.6rem)] leading-[1.02] text-ivory">
                  Largest commercial hub of Southern Punjab.
                </span>
                <Link
                  to="/project/$projectId"
                  params={{ projectId: "takmeel-square" }}
                  className="brand-hover pointer-events-auto mt-6 inline-flex items-center gap-2.5 border border-gold px-7 py-3.5 text-[0.66rem] uppercase tracking-[0.24em] text-gold transition-colors hover:bg-gold hover:text-forest"
                >
                  Discover Takmeel Square <ArrowUpRight size={14} />
                </Link>
              </span>
              <span className="grid grid-cols-2 gap-x-8 gap-y-4 border-t border-ivory/20 pt-5 sm:grid-cols-4 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
                {[
                  { k: "Sq ft", v: "1.2M" },
                  { k: "Shops", v: "260" },
                  { k: "Parking", v: "1,100" },
                  { k: "Acre park", v: "4" },
                ].map((s) => (
                  <span key={s.k} className="block">
                    <span className="display block text-3xl text-ivory md:text-5xl">{s.v}</span>
                    <span className="mt-1 block text-[0.6rem] uppercase tracking-[0.24em] text-ivory/60">
                      {s.k}
                    </span>
                  </span>
                ))}
              </span>
            </Shell>
          </figcaption>
        </figure>
      </div>
    </Section>
  );
}
