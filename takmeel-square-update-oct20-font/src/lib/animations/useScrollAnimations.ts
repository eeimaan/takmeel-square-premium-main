// src/lib/animations/useScrollAnimations.ts
import { useEffect } from "react";
import { loadGsap, prefersReducedMotion } from "./gsap";

/**
 * Page-wide declarative scroll effects, driven by data attributes:
 *  - [data-words]      word stagger reveal (see RevealText)
 *  - [data-mask]       masked (clip-path) heading reveal
 *  - [data-clip]       image clip-path expand reveal (scrubbed)
 *  - [data-parallax=n] image drifts inside its frame (md+)
 *  - [data-speed=n]    element moves at a different speed (md+)
 *  - [data-project]    becomes .is-active while centred in the viewport
 */
export function useScrollAnimations() {
  useEffect(() => {
    if (prefersReducedMotion()) return;
    // Added synchronously so pinned sections measure their motion layout.
    document.documentElement.classList.add("motion");
    let cancelled = false;
    let cleanup = () => {};

    loadGsap().then(({ gsap, ScrollTrigger }) => {
      if (cancelled) return;
      const mm = gsap.matchMedia();

      const ctx = gsap.context(() => {
        gsap.utils.toArray<HTMLElement>("[data-words]").forEach((el) => {
          gsap.from(el.querySelectorAll("[data-word]"), {
            yPercent: 115,
            rotate: 2,
            duration: 1.3,
            ease: "expo.out",
            stagger: 0.055,
            scrollTrigger: { trigger: el, start: "top 88%", once: true },
          });
        });

        gsap.utils.toArray<HTMLElement>("[data-mask]").forEach((el) => {
          gsap.fromTo(
            el,
            { clipPath: "inset(0% 0% 100% 0%)", yPercent: 20 },
            {
              clipPath: "inset(0% 0% 0% 0%)",
              yPercent: 0,
              duration: 1.4,
              ease: "expo.out",
              scrollTrigger: { trigger: el, start: "top 88%", once: true },
            },
          );
        });

        gsap.utils.toArray<HTMLElement>("[data-clip]").forEach((el) => {
          gsap.fromTo(
            el,
            { clipPath: "inset(14% 10% 14% 10%)" },
            {
              clipPath: "inset(0% 0% 0% 0%)",
              ease: "none",
              scrollTrigger: { trigger: el, start: "top 95%", end: "top 30%", scrub: 1 },
            },
          );
        });

        gsap.utils.toArray<HTMLElement>("[data-project]").forEach((el) => {
          ScrollTrigger.create({
            trigger: el,
            start: "top 62%",
            end: "bottom 38%",
            toggleClass: "is-active",
          });
        });
      });

      mm.add("(min-width: 768px)", () => {
        gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((el) => {
          const s = parseFloat(el.dataset["parallax"] || "0.12");
          gsap.fromTo(
            el,
            { yPercent: -s * 50, scale: 1 + s * 1.3 },
            {
              yPercent: s * 50,
              scale: 1 + s * 1.3,
              ease: "none",
              scrollTrigger: {
                trigger: el.parentElement ?? el,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
              },
            },
          );
        });
        gsap.utils.toArray<HTMLElement>("[data-speed]").forEach((el) => {
          const s = parseFloat(el.dataset["speed"] || "0.1");
          gsap.fromTo(
            el,
            { y: s * 300 },
            {
              y: -s * 300,
              ease: "none",
              scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: true },
            },
          );
        });
      });

      const refresh = () => {
        ScrollTrigger.sort();
        ScrollTrigger.refresh();
      };
      window.addEventListener("load", refresh);
      const t = window.setTimeout(refresh, 1200);

      cleanup = () => {
        window.removeEventListener("load", refresh);
        window.clearTimeout(t);
        ctx.revert();
        mm.revert();
        document.documentElement.classList.remove("motion");
      };
    });

    return () => {
      cancelled = true;
      cleanup();
    };
  }, []);
}
