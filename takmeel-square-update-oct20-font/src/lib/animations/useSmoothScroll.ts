// src/lib/animations/useSmoothScroll.ts
import { useEffect } from "react";

/** Lenis smooth scrolling, wired to GSAP ScrollTrigger. Client only. */
export function useSmoothScroll() {
  useEffect(() => {
    let destroy = () => {};
    let cancelled = false;

    (async () => {
      const [{ default: Lenis }, { gsap }, { ScrollTrigger }] = await Promise.all([
        import("lenis"),
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);
      if (cancelled) return;

      gsap.registerPlugin(ScrollTrigger);

      const lenis = new Lenis({
        duration: 1.4,
        smoothWheel: true,
        wheelMultiplier: 0.85,
      });

      lenis.on("scroll", ScrollTrigger.update);

      const raf = (time: number) => lenis.raf(time * 1000);
      gsap.ticker.add(raf);
      gsap.ticker.lagSmoothing(0);

      // Expose for anchor navigation.
      (window as unknown as { __lenis?: unknown }).__lenis = lenis;

      destroy = () => {
        gsap.ticker.remove(raf);
        lenis.destroy();
        delete (window as unknown as { __lenis?: unknown }).__lenis;
      };
    })();

    return () => {
      cancelled = true;
      destroy();
    };
  }, []);
}

export function scrollToSection(id: string, immediate = false) {
  const el = document.getElementById(id);
  if (!el) return;
  const lenis = (window as unknown as { __lenis?: { scrollTo: (t: Element, options?: { immediate: boolean }) => void } })
    .__lenis;
  if (lenis) lenis.scrollTo(el, { immediate });
  else el.scrollIntoView({ behavior: immediate ? "instant" : "smooth" });
}
