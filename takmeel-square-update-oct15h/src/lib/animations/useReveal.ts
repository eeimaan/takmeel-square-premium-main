// src/lib/animations/useReveal.ts
import { useEffect, useRef } from "react";

/**
 * Reveals every [data-reveal] descendant once it enters (or has already passed)
 * the viewport. Uses a rAF-throttled scroll check so that jump navigation
 * never leaves a section stuck at opacity 0.
 */
export function useReveal<T extends HTMLElement = HTMLElement>() {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    const pending = new Set(
      Array.from(root.querySelectorAll<HTMLElement>("[data-reveal]")),
    );
    if (pending.size === 0) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduced) {
      pending.forEach((el) => el.classList.add("reveal-in"));
      return;
    }

    pending.forEach((el) => el.classList.add("reveal"));

    let frame = 0;
    let running = true;
    const timers: number[] = [];

    // A rAF loop keeps this independent of how scrolling is driven
    // (native scroll, Lenis smooth scroll, or programmatic jumps).
    const tick = () => {
      if (!running) return;
      const threshold = window.innerHeight * 0.92;
      pending.forEach((el) => {
        const top = el.getBoundingClientRect().top;
        if (top > threshold) return;
        pending.delete(el);
        const delay = top < 0 ? 0 : Number(el.dataset["revealDelay"] ?? 0);
        timers.push(window.setTimeout(() => el.classList.add("reveal-in"), delay));
      });
      if (pending.size === 0) {
        running = false;
        return;
      }
      frame = window.requestAnimationFrame(tick);
    };

    tick();

    return () => {
      running = false;
      if (frame) window.cancelAnimationFrame(frame);
      timers.forEach((t) => window.clearTimeout(t));
    };
  }, []);

  return ref;
}
