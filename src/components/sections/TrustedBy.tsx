// src/components/sections/TrustedBy.tsx
import { useEffect, useRef } from "react";
import { Section, Shell, Eyebrow } from "./Section";

// Takmeel Square family of brands (public/brands)
const logos = [
  { src: "/brands/takmeel-square.jpg", alt: "Takmeel Square" },
  { src: "/brands/dha-bahawalpur.jpg", alt: "DHA Bahawalpur" },
  { src: "/brands/takmeel-bazaar.jpg", alt: "Takmeel Bazaar" },
  { src: "/brands/takmeel-homes.jpg", alt: "Takmeel Homes" },
];
const LOOP = logos.length * 160;

export function TrustedBy() {
  const rail = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let previous = window.scrollY;
    let position = 0;
    let scheduled = false;

    const update = () => {
      if (scheduled) return;
      scheduled = true;
      requestAnimationFrame(() => {
        const current = window.scrollY;
        position += (current - previous) * 0.32;
        previous = current;
        if (rail.current) {
          rail.current.style.transform = `translate3d(${-((position % LOOP + LOOP) % LOOP)}px,0,0)`;
        }
        scheduled = false;
      });
    };

    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <Section className="border-y border-gold/20 bg-forest py-20 text-ivory">
      <Shell>
        <Eyebrow>Our family of brands</Eyebrow>
        <h2 className="display mt-6 text-4xl md:text-5xl">Built on relationships.</h2>
        {/* <p className="mt-3 text-xs text-ivory/55">
          Illustrative partner placeholders — approved names and marks coming soon.
        </p> */}
      </Shell>
      
      <div className="mt-12 overflow-hidden border-y border-ivory/10 py-7">
        <div ref={rail} className="flex w-max items-center will-change-transform">
          {Array.from({ length: 8 }, (_, group) => (
            logos.map((logo, i) => (
              <span
                key={`${group}-${i}`}
                aria-hidden={group > 0}
                className="flex w-40 shrink-0 items-center justify-center border-r border-ivory/20 px-4 text-center"
              >
                {/* Render the logo image */}
                <img 
                  src={logo.src} 
                  alt={logo.alt} 
                  className="max-h-30 w-auto object-contain opacity-70 transition-opacity duration-300 hover:opacity-100" 
                />
              </span>
            ))
          ))}
        </div>
      </div>
    </Section>
  );
}