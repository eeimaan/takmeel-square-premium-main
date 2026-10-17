// src/components/sections/Leadership.tsx
import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Section, Shell, Eyebrow } from "./Section";
import { leaders, copy } from "@/content/site";

export function Leadership() {
  return (
    <Section id="leadership" className="py-14 md:py-24">
      <Shell>
        <Eyebrow>{copy.leadership.eyebrow}</Eyebrow>
        <h2 className="display mt-8 text-[clamp(2.5rem,5vw,4.8rem)] text-forest">{copy.leadership.heading}</h2>
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {leaders.map((person) => (
            <article key={person.id} data-reveal>
              <div className="relative aspect-[4/4.5] overflow-hidden bg-forest">
                <img
                  src={person.image}
                  alt={person.name}
                  loading="lazy"
                  style={person.position ? { objectPosition: person.position } : undefined}
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <span className="pointer-events-none absolute inset-3 z-10 border border-gold/30" />
              </div>
              <p className="eyebrow mt-6">{person.role} · Takmeel Square</p>
              <h3 className="display mt-2 text-3xl text-forest">{person.name}</h3>
              <Link
                to="/leadership/$leaderId"
                params={{ leaderId: person.id }}
                className="group/more mt-4 inline-flex w-fit items-center gap-2 text-[0.66rem] uppercase tracking-[0.22em] text-gold-deep transition-colors duration-300 hover:text-gold"
              >
                <span className="link-underline">{copy.leadership.learnMore}</span>
                <ArrowUpRight
                  size={13}
                  className="transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/more:translate-x-0.5 group-hover/more:-translate-y-0.5"
                />
              </Link>
            </article>
          ))}
        </div>
      </Shell>
    </Section>
  );
}
