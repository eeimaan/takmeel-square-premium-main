// src/components/sections/Faq.tsx
import { Plus } from "lucide-react";
import { Section, Shell, Eyebrow } from "./Section";
import { faqs } from "@/data/faqs";

/** Frequently asked questions — same two-column layout and type scale as "Why Takmeel Square". */
export function Faq() {
  return (
    <Section id="faq" className="py-28 md:py-40">
      <Shell>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-20">
          <div>
            <Eyebrow>FAQs</Eyebrow>
            <h2 className="display mt-8 text-[clamp(2rem,4.4vw,3.8rem)]" data-reveal>
              Questions buyers and investors ask.
            </h2>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted-foreground" data-reveal>
              Can't find what you're looking for? Call UAN +92 311 1555559 or email info@takmeel.pk.
            </p>
          </div>

          <div className="border-b border-border">
            {faqs.map((f, i) => (
              <details key={f.q} className="group border-t border-border" data-reveal data-reveal-delay={`${Math.min(i, 5) * 60}`}>
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-6 [&::-webkit-details-marker]:hidden">
                  <h3 className="display text-xl leading-snug md:text-2xl">{f.q}</h3>
                  <Plus
                    size={20}
                    strokeWidth={1.4}
                    className="mt-1 shrink-0 text-gold-deep transition-transform duration-500 group-open:rotate-45"
                  />
                </summary>
                <p className="max-w-2xl pb-7 pr-10 text-sm leading-relaxed text-muted-foreground md:text-base">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </Shell>
    </Section>
  );
}
