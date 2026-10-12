// src/components/projects/HorizontalShowcase.tsx
import { useEffect, useRef } from "react";
import { Shell, Eyebrow } from "@/components/sections/Section";
import { RevealText } from "@/lib/animations/RevealText";
import { galleryImages, projects } from "@/data/projects";

const slides = projects.map((p, i) => ({
  title: p.name,
  caption: p.type,
  image: galleryImages[i % galleryImages.length] ?? p.image,
}));

/** Pinned horizontal scroll showcase driven by GSAP ScrollTrigger. */
export function HorizontalShowcase() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.matchMedia("(max-width: 1023px)").matches) return;

    let cleanup = () => {};
    let cancelled = false;

    (async () => {
      const [{ gsap }, { ScrollTrigger }] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);
      if (cancelled) return;
      gsap.registerPlugin(ScrollTrigger);

      const ctx = gsap.context(() => {
        const distance = () => track.scrollWidth - window.innerWidth;
        const tween = gsap.to(track, {
          x: () => -distance(),
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: () => `+=${distance()}`,
            pin: true,
            scrub: 1.2,
            invalidateOnRefresh: true,
            anticipatePin: 1,
            refreshPriority: 3,
          },
        });
        gsap.utils.toArray<HTMLElement>("[data-card]", track).forEach((card) => {
          const img = card.querySelector("img");
          gsap.fromTo(card, { opacity: 0.45, scale: 0.96 }, {
            opacity: 1, scale: 1, ease: "none",
            scrollTrigger: { trigger: card, containerAnimation: tween, start: "left right", end: "center 60%", scrub: true },
          });
          gsap.fromTo(img, { xPercent: -4, scale: 1.1 }, {
            xPercent: 4, scale: 1.1, ease: "none",
            scrollTrigger: { trigger: card, containerAnimation: tween, start: "left right", end: "right left", scrub: true },
          });
        });
      }, section);

      cleanup = () => ctx.revert();
    })();

    return () => {
      cancelled = true;
      cleanup();
    };
  }, []);

  return (
    <section
      id="showcase"
      ref={sectionRef}
      className="relative w-full overflow-hidden surface-dark py-24 lg:h-[100svh] lg:py-0"
    >
      <div className="lg:flex lg:h-full lg:flex-col lg:justify-center lg:pb-6 lg:pt-32">
        <Shell className="lg:shrink-0 lg:pb-8">
          <div className="lg:flex lg:items-end lg:justify-between lg:gap-10">
            <div>
              <Eyebrow index="04">Showcase</Eyebrow>
              <RevealText
                text="A continuous view across Takmeel Square"
                className="display mt-6 max-w-[16ch] text-[clamp(1.9rem,4.2vw,3.6rem)] text-ivory lg:mt-4 lg:max-w-none lg:text-[clamp(1.8rem,2.6vw,2.8rem)]"
              />
            </div>
            <span className="mt-4 hidden text-[0.62rem] uppercase tracking-[0.28em] text-ivory/45 lg:block">
              Scroll to explore →
            </span>
          </div>
        </Shell>

        <div className="mt-12 snap-x snap-mandatory overflow-x-auto no-scrollbar lg:mt-0 lg:snap-none lg:overflow-visible">
          <div
            ref={trackRef}
            className="flex w-max gap-6 px-6 md:px-10 lg:gap-10 lg:px-16"
          >
            {slides.map((s, i) => (
              <figure
                key={`${s.title}-${i}`}
                data-card
                className="w-[86vw] shrink-0 snap-center sm:w-[64vw] lg:w-[calc((100svh-24rem)*0.8)]"
              >
                <div className="relative aspect-[4/5] overflow-hidden lg:aspect-auto lg:h-[calc(100svh-24rem)]">
                  <img
                    src={s.image}
                    alt={s.title}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <span className="pointer-events-none absolute inset-3 border border-ivory/15" />
                </div>
                <figcaption className="mt-5 grid shrink-0 grid-cols-[auto_minmax(0,1fr)] items-baseline gap-4">
                  <span className="eyebrow">0{i + 1}</span>
                  <span className="min-w-0">
                    <span className="display block truncate text-2xl text-ivory">
                      {s.title}
                    </span>
                    <span className="mt-1 block text-xs tracking-[0.2em] text-ivory/45 uppercase">
                      {s.caption}
                    </span>
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
