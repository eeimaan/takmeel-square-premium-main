// src/components/projects/ProjectSpecs.tsx
import { useState } from "react";
import { Section, Shell, Eyebrow } from "@/components/sections/Section";
import { projectSpecs } from "@/data/specs";

/**
 * Specifications, one compact panel per project, switched with tabs.
 * Same visual language as "Project details": hairline rows, small labels, display values.
 * Every panel is server-rendered (inactive ones are `hidden`) so search engines read all of them.
 */
export function ProjectSpecs() {
  const [active, setActive] = useState(projectSpecs[0]!.id);

  return (
    <Section id="specifications" dark className="py-16 md:py-24">
      <Shell>
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
          <div>
            <Eyebrow>Specifications</Eyebrow>
            <h2 className="display mt-8 text-[clamp(2rem,4.4vw,3.8rem)] text-ivory" data-reveal>
              Facts at a glance.
            </h2>
          </div>
          <div className="flex flex-wrap gap-2" role="tablist" aria-label="Projects">
            {projectSpecs.map((p) => (
              <button
                key={p.id}
                type="button"
                role="tab"
                id={`spec-tab-${p.id}`}
                aria-controls={`spec-${p.id}`}
                aria-selected={active === p.id}
                onClick={() => setActive(p.id)}
                className={`brand-hover rounded-full px-5 py-2.5 text-[0.68rem] uppercase tracking-[0.22em] transition-colors duration-500 ${
                  active === p.id ? "bg-gold text-onyx" : "border border-ivory/25 text-ivory/80 hover:border-gold"
                }`}
              >
                {p.name}
              </button>
            ))}
          </div>
        </div>

        {projectSpecs.map((p) => (
          <div
            key={p.id}
            id={`spec-${p.id}`}
            role="tabpanel"
            aria-labelledby={`spec-tab-${p.id}`}
            hidden={active !== p.id}
            className="mt-14 grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-20"
          >
            <div className="animate-fade-in">
              <h3 className="display text-3xl text-ivory md:text-4xl">{p.name}</h3>
              <p className="mt-5 max-w-md text-base leading-relaxed text-ivory/65">{p.summary}</p>
              <ul className="mt-8 flex flex-wrap gap-2" aria-label={`${p.name} amenities`}>
                {p.amenities.map((a) => (
                  <li
                    key={a}
                    className="rounded-full border border-ivory/15 px-4 py-2 text-[0.62rem] uppercase tracking-[0.18em] text-ivory/70"
                  >
                    {a}
                  </li>
                ))}
              </ul>
            </div>

            <dl className="grid animate-fade-in grid-cols-1 sm:grid-cols-2">
              {p.rows.map((r) => (
                <div key={r.label} className="border-t border-ivory/12 py-5 sm:pr-8">
                  <dt className="text-[0.62rem] uppercase tracking-[0.24em] text-ivory/45">{r.label}</dt>
                  <dd className="display mt-2 text-xl text-ivory md:text-2xl">{r.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        ))}
      </Shell>
    </Section>
  );
}
