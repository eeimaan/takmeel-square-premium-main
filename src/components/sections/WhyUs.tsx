// src/components/sections/WhyUs.tsx
import { Section, Shell, Eyebrow } from "./Section";
import { whyPoints } from "@/data/amenities";

export function WhyUs() {
  return (
    <Section id="why" className="py-16 md:py-24">
      <Shell>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-20">
          <div>
            <Eyebrow index="10">Why Takmeel Square</Eyebrow>
            <h2 className="display mt-8 text-[clamp(2rem,4.4vw,3.8rem)]" data-reveal>
              Four reasons people choose us.
            </h2>
          </div>

          <ul className="grid gap-px bg-border sm:grid-cols-2">
            {whyPoints.map((p, i) => (
              <li
                key={p.title}
                className="bg-background p-8 md:p-10"
                data-reveal
                data-reveal-delay={`${i * 100}`}
              >
                <span className="eyebrow">0{i + 1}</span>
                <h3 className="display mt-5 text-3xl">{p.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                  {p.body}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </Shell>
    </Section>
  );
}
