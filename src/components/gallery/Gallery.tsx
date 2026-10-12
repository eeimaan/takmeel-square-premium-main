// src/components/gallery/Gallery.tsx
import { useEffect, useRef } from "react";
import { Section, Shell, Eyebrow } from "@/components/sections/Section";
import { lifestyleReel } from "@/data/projects";
import { RevealText } from "@/lib/animations/RevealText";
import { loadGsap, prefersReducedMotion } from "@/lib/animations/gsap";

type Frame = (typeof lifestyleReel)[number];

/**
 * Full-bleed floating wall — edge to edge, hairline gutters, no empty space.
 * Desktop: five columns that each drift at their own speed (some rise, some sink) while you scroll,
 * so frames float past each other like bubbles. Every frame pops in, breathes slowly,
 * zooms on hover and opens in the lightbox. Columns are taller than the stage, so edges never show.
 */
const COLS = 5;
const drift = [-14, 10, -20, 8, -12]; // % of column height, scrubbed with scroll
const grow = [1.25, 0.9, 1.1, 1, 0.85, 1.15]; // varied frame heights inside each column

function Tile({ f, i, mobile = false }: { f: Frame; i: number; mobile?: boolean }) {
  return (
    <figure
      data-tile
      data-lightbox-image
      className={`group relative min-h-0 cursor-zoom-in overflow-hidden bg-forest ${mobile ? "aspect-[4/5]" : ""}`}
      style={mobile ? undefined : { flexGrow: grow[i % grow.length], flexBasis: 0 }}
    >
      <img
        src={f.image}
        alt={`${f.title} — ${f.place}`}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.08]"
        style={{ animation: `wall-breathe ${9 + (i % 5)}s ease-in-out ${(i % 7) * 0.7}s infinite` }}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-onyx/75 via-transparent to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
      <span className="pointer-events-none absolute inset-2 border border-gold/0 transition-colors duration-700 group-hover:border-gold/50" />
      <figcaption className="pointer-events-none absolute inset-x-4 bottom-3 translate-y-3 opacity-0 transition-all duration-700 group-hover:translate-y-0 group-hover:opacity-100">
        <span className="eyebrow block text-gold">{f.place}</span>
        <span className="display mt-1 block text-lg text-ivory md:text-xl">{f.title}</span>
      </figcaption>
    </figure>
  );
}

export function Gallery() {
  const wallRef = useRef<HTMLDivElement | null>(null);

  const columns: { f: Frame; i: number }[][] = Array.from({ length: COLS }, () => []);
  lifestyleReel.forEach((f, i) => columns[i % COLS]!.push({ f, i }));

  useEffect(() => {
    if (prefersReducedMotion()) return;
    let cancelled = false;
    let cleanup = () => {};
    loadGsap().then(({ gsap }) => {
      const wall = wallRef.current;
      if (cancelled || !wall) return;
      const ctx = gsap.context(() => {
        // Columns drift at different speeds / directions.
        gsap.utils.toArray<HTMLElement>("[data-col]", wall).forEach((col, c) => {
          const d = drift[c % drift.length]!;
          gsap.fromTo(
            col,
            { yPercent: -d / 2 },
            {
              yPercent: d / 2,
              ease: "none",
              scrollTrigger: { trigger: wall, start: "top bottom", end: "bottom top", scrub: 1.2 },
            },
          );
        });
        // Frames surface like bubbles as the wall enters.
        gsap.utils.toArray<HTMLElement>("[data-tile]", wall).forEach((tile, i) => {
          gsap.fromTo(
            tile,
            { opacity: 0, scale: 0.9 },
            {
              opacity: 1,
              scale: 1,
              duration: 1.3,
              delay: (i % COLS) * 0.08,
              ease: "expo.out",
              scrollTrigger: { trigger: tile, start: "top 98%", once: true },
            },
          );
        });
      }, wall);
      cleanup = () => ctx.revert();
    });
    return () => {
      cancelled = true;
      cleanup();
    };
  }, []);

  return (
    <Section id="lifestyle" className="pt-28 md:pt-40">
      <style>{`
        @keyframes wall-breathe{0%,100%{transform:scale(1)}50%{transform:scale(1.045)}}
        #lifestyle [data-tile]:hover img{animation-play-state:paused}
        @media (prefers-reduced-motion: reduce){#lifestyle [data-tile] img{animation:none!important}}
      `}</style>
      <Shell className="pb-12 md:pb-16">
        <Eyebrow index="09">Lifestyle</Eyebrow>
        <RevealText
          text="The everyday, made a little better."
          className="display mt-8 max-w-[16ch] text-[clamp(2rem,5vw,4.4rem)]"
        />
      </Shell>

      {/* Mobile: tight two-column wall */}
      <div className="grid grid-cols-2 gap-1.5 px-1.5 md:hidden">
        {lifestyleReel.map((f, i) => (
          <Tile key={f.title} f={f} i={i} mobile />
        ))}
      </div>

      {/* Desktop: full-bleed floating columns */}
      <div ref={wallRef} className="relative hidden h-[150svh] w-full overflow-hidden md:block">
        <div className="absolute inset-x-0 -bottom-[14%] -top-[14%] grid grid-cols-5 gap-2 px-2">
          {columns.map((col, c) => (
            <div
              key={c}
              data-col
              className="flex h-full flex-col gap-2 will-change-transform"
              style={{ marginTop: c % 2 ? "-6%" : "0", marginBottom: c % 2 ? "0" : "-6%" }}
            >
              {col.map(({ f, i }) => (
                <Tile key={f.title} f={f} i={i} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
