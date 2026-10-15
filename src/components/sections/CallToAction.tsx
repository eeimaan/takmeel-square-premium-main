// src/components/sections/CallToAction.tsx
import { Section, Shell } from "./Section";
import { images } from "@/data/projects";
import { scrollToSection } from "@/lib/animations/useSmoothScroll";

export function CallToAction() {
  return (
    <Section id="cta" className="relative py-20 md:py-48">
      <img
        src={images.pool}
        alt=""
        aria-hidden
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-onyx/72" />

      <Shell className="relative">
        <div className="max-w-3xl">
          <span className="eyebrow text-gold">Register interest</span>
          <h2
            className="display mt-6 text-[clamp(2.2rem,6vw,5.4rem)] text-ivory"
            data-reveal
          >
            Arrange a private walkthrough.
          </h2>
          <p
            className="mt-6 max-w-lg text-base leading-relaxed text-ivory/65"
            data-reveal
            data-reveal-delay="120"
          >
            Our team will share the current plan set, availability and payment
            structure for the release you're interested in.
          </p>
          <button
            type="button"
            onClick={() => scrollToSection("contact")}
            className="brand-hover brand-hover-invert mt-12 border border-gold bg-gold px-10 py-5 text-[0.68rem] uppercase tracking-[0.28em] text-onyx"
          >
            Speak with our team
          </button>
        </div>
      </Shell>
    </Section>
  );
}
