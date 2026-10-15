// src/components/sections/TrustedBy.tsx
import { useEffect, useRef, useState } from "react";
import { Section, Shell, Eyebrow } from "./Section";

// Takmeel Square family of brands (public/brands). All logos are normalised to the
// same content height, so they appear at one uniform size in the row below.
const logos = [
  { src: "/brands/takmeel-square.jpg", alt: "Takmeel Square" },
  { src: "/brands/dha-bahawalpur.jpg", alt: "DHA Bahawalpur" },
  { src: "/brands/takmeel-bazaar.jpg", alt: "Takmeel Bazaar" },
  { src: "/brands/takmeel-homes.jpg", alt: "Takmeel Homes" },
];
const GROUPS = 6;

export function TrustedBy() {
  const rail = useRef<HTMLDivElement>(null);
  const loop = useRef(0);
  const [loaded, setLoaded] = useState(0);

  const measure = () => {
    if (rail.current) loop.current = rail.current.scrollWidth / GROUPS;
  };

  useEffect(() => {
    measure();
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
        const L = loop.current;
        if (rail.current && L > 0) {
          rail.current.style.transform = `translate3d(${-(((position % L) + L) % L)}px,0,0)`;
        }
        scheduled = false;
      });
    };

    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", measure);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", measure);
    };
  }, []);

  // Re-measure as images finish loading (their widths change the set width).
  useEffect(() => {
    measure();
  }, [loaded]);

  return (
    <Section className="border-y border-gold/20 bg-forest py-20 text-ivory">
      <Shell>
        <Eyebrow>Our family of brands</Eyebrow>
        <h2 className="display mt-6 text-4xl md:text-5xl">Built on relationships.</h2>
      </Shell>

      <div className="mt-12 overflow-hidden border-y border-ivory/10 py-7">
        <div ref={rail} className="flex w-max items-center will-change-transform">
          {Array.from({ length: GROUPS }, (_, group) =>
            logos.map((logo, i) => (
              <span
                key={`${group}-${i}`}
                aria-hidden={group > 0}
                className="flex shrink-0 items-center justify-center px-10 md:px-14"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  onLoad={() => setLoaded((v) => v + 1)}
                  className="h-12 w-auto object-contain opacity-70 transition-opacity duration-300 hover:opacity-100 md:h-16"
                />
              </span>
            )),
          )}
        </div>
      </div>
    </Section>
  );
}
