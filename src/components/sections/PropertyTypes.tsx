// src/components/sections/PropertyTypes.tsx
import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Section, Shell, Eyebrow } from "./Section";
import { propertyTypes } from "@/data/projects";

export function PropertyTypes() {
  const [active, setActive] = useState(0);
  const current = propertyTypes[active] ?? propertyTypes[0]!;

  return (
    <Section id="residences" className="py-28 md:py-40">
      <Shell>
        <Eyebrow index="05">Spaces at Takmeel Square</Eyebrow>

        <div className="mt-12 grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-20">
          <div>
          <ul className="flex flex-col">
            {propertyTypes.map((t, i) => (
              <li key={t.id} className="border-t border-border last:border-b">
                <button
                  type="button"
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onClick={() => setActive(i)}
                  className="grid w-full grid-cols-[auto_minmax(0,1fr)] items-center gap-6 py-6 text-left"
                >
                  <span className="eyebrow">0{i + 1}</span>
                  <span className="min-w-0">
                    <span
                      className={`display block text-[clamp(1.6rem,3.4vw,2.8rem)] transition-colors duration-500 ${
                        active === i ? "text-foreground" : "text-foreground/35"
                      }`}
                    >
                      {t.title}
                    </span>
                    <span
                      className={`mt-1 block text-sm text-muted-foreground transition-all duration-500 ${
                        active === i ? "max-h-16 opacity-100" : "max-h-0 overflow-hidden opacity-0"
                      }`}
                    >
                      {t.blurb}
                    </span>
                  </span>
                </button>
              </li>
            ))}
          </ul>
          <Link
            to="/tour"
            className="brand-hover mt-10 inline-flex w-fit items-center gap-3 rounded-full bg-forest px-8 py-4 text-[0.7rem] uppercase tracking-[0.26em] text-ivory transition-colors hover:bg-gold hover:text-forest"
          >
            Take the virtual tour <ArrowUpRight className="h-4 w-4" />
          </Link>
          </div>

           <div data-lightbox-image className="relative aspect-[4/5] cursor-zoom-in overflow-hidden bg-forest lg:aspect-auto lg:h-full lg:min-h-[34rem]">
            {propertyTypes.map((t, i) => (
              <img
                key={t.id}
                src={t.image}
                alt={t.title}
                 data-lightbox-current={active === i ? "true" : undefined}
                loading="lazy"
                className={`absolute inset-0 h-full w-full object-cover transition-all duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  active === i ? "scale-100 opacity-100" : "scale-105 opacity-0"
                }`}
              />
            ))}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-onyx/85 via-onyx/10 to-transparent" />
            <span className="pointer-events-none absolute inset-4 border border-gold/35 md:inset-5" />
            <div key={current.id} className="pointer-events-none absolute inset-x-8 bottom-8 animate-fade-in md:inset-x-10 md:bottom-10">
              <span className="eyebrow text-gold">
                {String(active + 1).padStart(2, "0")} / {String(propertyTypes.length).padStart(2, "0")}
              </span>
              <span className="display mt-2 block text-3xl text-ivory md:text-4xl">{current.title}</span>
            </div>
          </div>
        </div>
      </Shell>
    </Section>
  );
}
