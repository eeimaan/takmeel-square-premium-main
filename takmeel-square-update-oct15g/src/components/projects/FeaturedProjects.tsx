// src/components/projects/FeaturedProjects.tsx
import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Section, Shell, Eyebrow } from "@/components/sections/Section";
import { RevealText } from "@/lib/animations/RevealText";
import { projects } from "@/data/projects";

export function FeaturedProjects({ headingAs: Heading = "h2", omitId }: { headingAs?: "h1" | "h2"; omitId?: string } = {}) {
  return (
    <Section id="projects" className="py-16 md:py-24">
      <Shell>
        <div className="grid gap-8 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
          <div>
            <Eyebrow index="03">Featured projects</Eyebrow>
            <RevealText
              as={Heading}
              text="Three destinations, one address"
              className="display mt-8 max-w-[14ch] text-[clamp(2rem,5vw,4.4rem)]"
            />
          </div>
          <p
            className="max-w-xs text-base leading-relaxed text-muted-foreground"
            data-reveal
            data-reveal-delay="140"
          >
            Commerce, retail and homes, brought together in one address at the
            heart of DHA Bahawalpur.
          </p>
        </div>

        <div className="mt-16 flex flex-col">
          {projects.filter((p) => p.id !== omitId).map((p, i) => (
            <article
              key={p.id}
              id={p.id}
              className="group grid scroll-mt-32 gap-8 border-t border-border py-10 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:gap-16"
              data-project
            >
              <div className="relative aspect-[4/3] overflow-hidden border border-gold/30 md:aspect-[5/4]">
                <img
                  src={p.image}
                  alt={p.name}
                  loading="lazy"
                  className="project-img h-full w-full object-cover"
                />
                <span className="absolute left-0 top-0 bg-onyx/80 px-4 py-2 text-[0.6rem] uppercase tracking-[0.28em] text-gold">
                  {p.status}
                </span>
              </div>

              <div className="flex min-w-0 flex-col justify-center">
                <span className="eyebrow">{p.type}</span>
                <h3 className="display mt-4 text-[clamp(1.9rem,4vw,3.4rem)]">
                  {p.name}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground">{p.location}</p>
                <p className="mt-6 max-w-md text-base leading-relaxed text-foreground/80">
                  {p.description}
                </p>

                <dl className="project-meta mt-10 grid grid-cols-3 gap-4 border-t border-border pt-6">
                  {p.stats.map((s) => (
                    <div key={s.label}>
                      <dt className="text-[0.6rem] uppercase tracking-[0.24em] text-muted-foreground">
                        {s.label}
                      </dt>
                      <dd className="display mt-2 text-2xl">{s.value}</dd>
                    </div>
                  ))}
                </dl>

                <Link
                  to="/project/$projectId"
                  params={{ projectId: p.id }}
                  className="brand-hover mt-8 inline-flex w-fit items-center gap-2.5 rounded-full border border-forest px-6 py-3 text-[0.66rem] uppercase tracking-[0.22em] text-forest transition-colors hover:border-gold"
                >
                  Learn more <ArrowUpRight size={14} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Shell>
    </Section>
  );
}
