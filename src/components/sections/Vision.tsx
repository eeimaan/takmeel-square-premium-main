// src/components/sections/Vision.tsx
import { Section, Shell, Eyebrow } from "./Section";
import { images } from "@/data/projects";

const pillars = [
  {
    title: "What we believe in",
    body: "Redefining commercial real estate in Pakistan with innovation, client trust and timely delivery.",
  },
  {
    title: "Economic growth",
    body: "Addressing the gap in commercial spaces, creating job opportunities and a vibrant business community.",
  },
  {
    title: "Sustainability",
    body: "Eco-friendly practices that minimise environmental impact, for long-term success.",
  },
];

export function Vision() {
  return (
    <Section id="vision" dark className="py-28 md:py-40">
      <Shell>
        <Eyebrow index="02">Our vision</Eyebrow>

        <div className="mt-12 grid gap-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-24">
          <figure
            data-lightbox-image
            className="group relative aspect-[4/5] overflow-hidden lg:aspect-auto lg:h-full lg:min-h-[40rem]"
            data-clip
          >
            <img
              src={images.squarePlazaLogo}
              alt="Takmeel Square signature plaza, DHA Bahawalpur"
              loading="lazy"
              data-parallax="0.06"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-onyx/85 via-onyx/5 to-onyx/20" />
            <span className="pointer-events-none absolute inset-4 border border-gold/40 md:inset-6" />
            <figcaption className="pointer-events-none absolute inset-x-8 bottom-8 md:inset-x-12 md:bottom-12">
              <span className="eyebrow text-gold">Takmeel Square · DHA Bahawalpur</span>
              <span className="display mt-3 block text-[clamp(1.6rem,2.6vw,2.4rem)] leading-tight text-ivory">
                Gateway to your ultimate dreams.
              </span>
            </figcaption>
          </figure>

          <div className="flex flex-col justify-center">
            <p
              className="display text-[clamp(1.75rem,3.6vw,3.1rem)] text-ivory"
              data-reveal
            >
              Takmeel Square seeks to revolutionise Pakistan's commercial real estate
              with unmatched innovation and meticulous attention to detail.
            </p>

            <ul className="mt-14 flex flex-col">
              {pillars.map((p, i) => (
                <li
                  key={p.title}
                  className="grid grid-cols-[auto_minmax(0,1fr)] gap-6 border-t border-ivory/12 py-7"
                  data-reveal
                  data-reveal-delay={`${120 + i * 100}`}
                >
                  <span className="eyebrow pt-1">0{i + 1}</span>
                  <div className="min-w-0">
                    <h3 className="display text-2xl text-ivory">{p.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ivory/55">
                      {p.body}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Shell>
    </Section>
  );
}
