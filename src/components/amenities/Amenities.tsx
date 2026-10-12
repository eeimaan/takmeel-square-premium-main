// src/components/amenities/Amenities.tsx
import { useEffect, useRef, useState } from "react";
import { Shell, Eyebrow } from "@/components/sections/Section";
import { amenities } from "@/data/amenities";
import { loadGsap, prefersReducedMotion } from "@/lib/animations/gsap";

/**
 * One main visual. On desktop the section pins and scroll progress steps
 * through each amenity; on touch/mobile the list is tappable.
 */
export function Amenities() {
  const [active, setActive] = useState(0);
  const sectionRef = useRef<HTMLElement | null>(null);
  const barRef = useRef<HTMLSpanElement | null>(null);
  const current = amenities[active] ?? amenities[0]!;

  useEffect(() => {
    if (prefersReducedMotion()) return;
    let cancelled = false;
    let cleanup = () => {};
    loadGsap().then(({ gsap, ScrollTrigger }) => {
      if (cancelled || !sectionRef.current) return;
      const mm = gsap.matchMedia();
      mm.add("(min-width: 1024px)", () => {
        let last = -1;
        const n = amenities.length;
        const st = ScrollTrigger.create({
          trigger: sectionRef.current,
          start: "top top",
          end: () => `+=${window.innerHeight * n * 0.55}`,
          pin: true,
          scrub: true,
          anticipatePin: 1,
          refreshPriority: 2,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const idx = Math.min(n - 1, Math.floor(self.progress * n));
            if (idx !== last) {
              last = idx;
              setActive(idx);
            }
            if (barRef.current) barRef.current.style.transform = `scaleY(${self.progress})`;
          },
        });
        return () => st.kill();
      });
      cleanup = () => mm.revert();
    });
    return () => {
      cancelled = true;
      cleanup();
    };
  }, []);

  return (
    <section
      id="amenities"
      ref={sectionRef}
      className="relative w-full overflow-hidden surface-dark py-28 md:py-36 lg:flex lg:h-[100svh] lg:items-center lg:py-0"
    >
      <Shell>
        <Eyebrow index="06">Amenities</Eyebrow>

        <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] lg:gap-20">
           <div data-lightbox-image className="relative aspect-[16/11] overflow-hidden lg:aspect-auto lg:h-[68svh]">
            {amenities.map((a, i) => (
              <img
                key={a.id}
                src={a.image}
                alt={a.title}
                 data-lightbox-current={active === i ? "true" : undefined}
                loading="lazy"
                className={`absolute inset-0 h-full w-full object-cover transition-[opacity,transform,clip-path] duration-[1300ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  active === i
                    ? "scale-100 opacity-100 [clip-path:inset(0%_0%_0%_0%)]"
                    : i < active
                      ? "scale-[1.04] opacity-0 [clip-path:inset(0%_0%_0%_0%)]"
                      : "scale-[1.12] opacity-100 [clip-path:inset(100%_0%_0%_0%)]"
                }`}
              />
            ))}
            <div className="absolute inset-0 bg-gradient-to-t from-onyx/80 via-onyx/10 to-transparent" />
            <div key={current.id} className="absolute inset-x-0 bottom-0 p-6 md:p-10">
              <span className="eyebrow animate-fade-in">
                {String(active + 1).padStart(2, "0")} / {String(amenities.length).padStart(2, "0")}
              </span>
              <h3 className="display mt-3 animate-fade-in text-3xl text-ivory md:text-5xl">
                {current.title}
              </h3>
              <p className="mt-3 max-w-md animate-fade-in text-sm text-ivory/70">
                {current.description}
              </p>
            </div>
          </div>

          <div className="relative flex flex-wrap gap-3 lg:flex-col lg:flex-nowrap lg:gap-0 lg:self-center lg:pl-8">
            <span className="absolute left-0 top-0 hidden h-full w-px bg-ivory/12 lg:block" />
            <span
              ref={barRef}
              className="absolute left-0 top-0 hidden h-full w-px origin-top scale-y-0 bg-gold lg:block"
            />
            {amenities.map((a, i) => (
              <button
                key={a.id}
                type="button"
                onClick={() => setActive(i)}
                className={`border px-5 py-3 text-left text-[0.68rem] uppercase tracking-[0.22em] transition-all duration-700 lg:border-0 lg:px-0 lg:py-2.5 lg:text-[clamp(1.1rem,1.6vw,1.6rem)] lg:normal-case lg:tracking-normal lg:font-display ${
                  active === i
                    ? "border-gold bg-gold text-onyx lg:bg-transparent lg:text-ivory lg:translate-x-3"
                    : "border-ivory/20 text-ivory/65 lg:text-ivory/30"
                }`}
              >
                {a.title}
              </button>
            ))}
          </div>
        </div>
      </Shell>
    </section>
  );
}
