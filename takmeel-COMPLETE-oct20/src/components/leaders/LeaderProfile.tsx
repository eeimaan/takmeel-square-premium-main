// src/components/leaders/LeaderProfile.tsx
import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { Section, Shell, Eyebrow } from "@/components/sections/Section";
import { leaders } from "@/content/site";

export function LeaderProfile({ leaderId }: { leaderId: string }) {
  const leader = leaders.find((l) => l.id === leaderId);

  if (!leader) {
    return (
      <section className="surface-dark flex min-h-[70vh] items-center">
        <Shell>
          <h1 className="display text-4xl text-ivory md:text-5xl">Profile not found.</h1>
          <Link to="/about" hash="leadership" className="brand-hover mt-8 inline-flex items-center gap-2 text-gold">
            <ArrowLeft size={16} /> Back to leadership
          </Link>
        </Shell>
      </section>
    );
  }

  return (
    <>
      {/* ---------- Hero ---------- */}
      <section className="surface-dark pb-12 pt-40 md:pb-16 md:pt-48">
        <Shell>
          <Link
            to="/about"
            hash="leadership"
            className="brand-hover inline-flex items-center gap-2 text-[0.66rem] uppercase tracking-[0.24em] text-ivory/70 hover:text-gold"
          >
            <ArrowLeft size={14} /> Leadership
          </Link>
          <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center lg:gap-16">
            <div className="relative aspect-[4/4.6] overflow-hidden bg-forest">
              <img src={leader.image} alt={leader.name} className="h-full w-full object-cover" />
              <span className="pointer-events-none absolute inset-4 z-10 border border-gold/30" />
            </div>
            <div>
              <span className="eyebrow text-gold">{leader.role} · Takmeel Square</span>
              <h1 className="display mt-5 text-[clamp(2.4rem,5.5vw,4.5rem)] leading-[1.02] text-ivory">{leader.name}</h1>
              {leader.headline && (
                <p className="mt-6 max-w-xl text-sm leading-relaxed text-ivory/70 md:text-base">{leader.headline}</p>
              )}
              {leader.tagline && (
                <p className="display mt-5 max-w-xl text-xl text-gold md:text-2xl">{leader.tagline}</p>
              )}
            </div>
          </div>
        </Shell>
      </section>

      {/* ---------- Full profile ---------- */}
      {leader.profile && leader.profile.length > 0 ? (
        <Section className="py-16 md:py-24">
          <Shell className="max-w-4xl">
            <div className="flex flex-col gap-14">
              {leader.profile.map((s) => (
                <div key={s.heading} data-reveal>
                  <Eyebrow>{s.heading}</Eyebrow>
                  {s.paragraphs?.map((p, i) => (
                    <p key={i} className="mt-5 text-base leading-relaxed text-foreground/85">{p}</p>
                  ))}
                  {s.items && (
                    <ul className="mt-5 flex flex-col gap-3">
                      {s.items.map((it) => (
                        <li key={it} className="flex gap-3 text-base leading-relaxed text-foreground/85">
                          <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-gold-deep" />
                          {it}
                        </li>
                      ))}
                    </ul>
                  )}
                  {s.groups?.map((g) => (
                    <div key={g.subheading} className="mt-7">
                      <h3 className="display text-xl text-forest md:text-2xl">{g.subheading}</h3>
                      <ul className="mt-4 flex flex-col gap-3">
                        {g.items.map((it) => (
                          <li key={it} className="flex gap-3 text-base leading-relaxed text-foreground/85">
                            <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-gold-deep" />
                            {it}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </Shell>
        </Section>
      ) : (
        <Section className="py-20 md:py-28">
          <Shell>
            <p className="max-w-xl text-base leading-relaxed text-muted-foreground">
              A detailed profile for {leader.name} will be published here soon.
            </p>
          </Shell>
        </Section>
      )}
    </>
  );
}
