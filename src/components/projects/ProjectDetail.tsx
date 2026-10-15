// src/components/projects/ProjectDetail.tsx
import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight, Check } from "lucide-react";
import { Section, Shell, Eyebrow } from "@/components/sections/Section";
import { projects, projectGalleries, images } from "@/data/projects";
import { projectSpecs } from "@/data/specs";

/** The three markets inside Takmeel Bazaar, shown on its detail page. */
const bazaars = [
  {
    name: "New Rangeela Bazaar",
    tag: "Cloth & Apparel",
    image: images.renRangeela,
    detail:
      "A dedicated cloth and apparel market bringing Bahawalpur's historic Rangeela Bazaar under one roof, with arched promenades lined by fabric, fashion and tailoring shops.",
  },
  {
    name: "New Sarafa Bazaar",
    tag: "Gold & Jewellery",
    image: images.renSarafa,
    detail:
      "A secure, purpose-built gold and jewellery market continuing the legacy of Bahawalpur's Sarafa Bazaar, with display-ready storefronts along a bright central corridor.",
  },
  {
    name: "New Tech Bazaar",
    tag: "Mobile & Technology",
    image: images.renTech,
    detail:
      "A modern mobile and technology market with glass storefronts and wide corridors, home to the latest electronics, gadgets and accessories in one connected destination.",
  },
];

export function ProjectDetail({ projectId }: { projectId: string }) {
  const project = projects.find((p) => p.id === projectId);
  const spec = projectSpecs.find((p) => p.id === projectId);
  const gallery = projectGalleries[projectId] ?? [];

  // Unknown id, gentle fallback back to the projects page.
  if (!project) {
    return (
      <section className="surface-dark flex min-h-[70vh] items-center">
        <Shell>
          <h1 className="display text-4xl text-ivory md:text-5xl">Project not found.</h1>
          <Link to="/projects" className="brand-hover mt-8 inline-flex items-center gap-2 text-gold">
            <ArrowLeft size={16} /> Back to all projects
          </Link>
        </Shell>
      </section>
    );
  }

  return (
    <>
      {/* ---------- Hero with the project image ---------- */}
      <section className="relative flex min-h-[72vh] items-end overflow-hidden pt-20">
        <img src={project.image} alt={project.name} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-onyx/90 via-onyx/45 to-onyx/55" />
        <Shell className="relative pb-14 md:pb-20">
          <Link
            to="/projects"
            className="brand-hover inline-flex items-center gap-2 text-[0.66rem] uppercase tracking-[0.24em] text-ivory/80 hover:text-gold"
          >
            <ArrowLeft size={14} /> All projects
          </Link>
          <span className="eyebrow mt-6 block text-gold">{project.type}</span>
          <h1 className="display mt-4 max-w-4xl text-[clamp(2.6rem,7vw,6rem)] text-ivory">{project.name}</h1>
          <p className="mt-4 text-sm uppercase tracking-[0.2em] text-ivory/60">{project.location}</p>
        </Shell>
      </section>

      {/* ---------- Overview + stats ---------- */}
      <Section className="py-14 md:py-20">
        <Shell>
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-20">
            <div>
              <Eyebrow>Overview</Eyebrow>
              <p className="mt-8 text-[clamp(1.25rem,2.2vw,1.9rem)] font-light leading-[1.4] text-foreground/90" data-reveal>
                {project.description}
              </p>
              {spec && (
                <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground" data-reveal>
                  {spec.summary}
                </p>
              )}
            </div>

            <dl className="grid grid-cols-2 gap-y-2 self-start border-t border-border">
              {project.stats.map((s) => (
                <div key={s.label} className="border-b border-border py-6 pr-6">
                  <dt className="text-[0.6rem] uppercase tracking-[0.24em] text-muted-foreground">{s.label}</dt>
                  <dd className="display mt-2 text-3xl">{s.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Shell>
      </Section>

      {/* ---------- Specifications + amenities ---------- */}
      {spec && (
        <Section dark className="py-14 md:py-20">
          <Shell>
            <div className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-20">
              <div>
                <Eyebrow>Specifications</Eyebrow>
                <h2 className="display mt-8 text-[clamp(1.8rem,3.4vw,3rem)] text-ivory" data-reveal>
                  The details.
                </h2>
                {spec.amenities.length > 0 && (
                  <ul className="mt-10 flex flex-col gap-3" aria-label={`${project.name} features`}>
                    {spec.amenities.map((a) => (
                      <li key={a} className="flex items-center gap-3 text-sm text-ivory/80">
                        <Check size={15} className="shrink-0 text-gold-deep" /> {a}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <dl className="grid grid-cols-1 self-start sm:grid-cols-2">
                {spec.rows.map((r) => (
                  <div key={r.label} className="border-t border-ivory/12 py-5 sm:pr-8">
                    <dt className="text-[0.62rem] uppercase tracking-[0.24em] text-ivory/45">{r.label}</dt>
                    <dd className="display mt-2 text-xl text-ivory md:text-2xl">{r.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Shell>
        </Section>
      )}

      {/* ---------- Takmeel Bazaar: the three markets ---------- */}
      {project.id === "takmeel-bazaar" && (
        <Section className="py-14 md:py-20">
          <Shell>
            <Eyebrow>Three markets, one roof</Eyebrow>
            <h2 className="display mt-8 max-w-[20ch] text-[clamp(1.8rem,3.4vw,3rem)]" data-reveal>
              New Rangeela, New Sarafa and New Tech Bazaar.
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground" data-reveal>
              Takmeel Bazaar brings three of Bahawalpur's historic markets together in one 7-floor building of 260
              shops, topped with rooftop restaurants.
            </p>

            <div className="mt-14 flex flex-col gap-12 md:gap-16">
              {bazaars.map((b, i) => (
                <article
                  key={b.name}
                  className="grid gap-8 border-t border-border pt-10 md:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] md:gap-14"
                  data-reveal
                >
                  <div className={`relative aspect-[16/10] overflow-hidden ${i % 2 ? "md:order-2" : ""}`}>
                    <img
                      src={b.image}
                      alt={b.name}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.03]"
                    />
                    <span className="absolute left-0 top-0 bg-onyx/80 px-4 py-2 text-[0.6rem] uppercase tracking-[0.24em] text-gold">
                      {b.tag}
                    </span>
                  </div>
                  <div className="flex min-w-0 flex-col justify-center">
                    <h3 className="display text-[clamp(1.6rem,3vw,2.4rem)]">{b.name}</h3>
                    <p className="mt-5 max-w-md text-base leading-relaxed text-foreground/80">{b.detail}</p>
                  </div>
                </article>
              ))}
            </div>
          </Shell>
        </Section>
      )}

      {/* ---------- Gallery ---------- */}
      {gallery.length > 0 && (
        <Section className="py-14 md:py-20">
          <Shell>
            <Eyebrow>Gallery</Eyebrow>
            <h2 className="display mt-8 text-[clamp(1.8rem,3.4vw,3rem)]" data-reveal>
              A closer look.
            </h2>
            <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {gallery.map((src, i) => (
                <div
                  key={src}
                  className="relative aspect-[4/3] overflow-hidden"
                  data-reveal
                  data-reveal-delay={`${Math.min(i, 5) * 60}`}
                >
                  <img
                    src={src}
                    alt={`${project.name}, view ${i + 1}`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.04]"
                  />
                </div>
              ))}
            </div>
          </Shell>
        </Section>
      )}

      {/* ---------- CTA ---------- */}
      <Section dark className="py-14 md:py-20">
        <Shell>
          <div className="flex flex-col items-start justify-between gap-10 border-t border-ivory/15 pt-14 md:flex-row md:items-center">
            <div>
              <h2 className="display max-w-xl text-[clamp(1.8rem,3.6vw,3.2rem)] text-ivory">
                Interested in {project.name}?
              </h2>
              <p className="mt-4 max-w-md text-base leading-relaxed text-ivory/60">
                Book a visit or speak with our team to explore availability, pricing and payment plans.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/book"
                hash="visit"
                className="brand-hover inline-flex items-center gap-2.5 rounded-full bg-gold px-8 py-4 text-[0.68rem] uppercase tracking-[0.24em] text-forest"
              >
                Book a visit <ArrowUpRight size={15} />
              </Link>
              <Link
                to="/contact"
                className="brand-hover inline-flex items-center gap-2.5 rounded-full border border-ivory/30 px-8 py-4 text-[0.68rem] uppercase tracking-[0.24em] text-ivory transition-colors hover:border-gold hover:text-gold"
              >
                Get in touch
              </Link>
            </div>
          </div>
        </Shell>
      </Section>
    </>
  );
}
