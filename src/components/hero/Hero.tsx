// src/components/hero/Hero.tsx
import { useEffect, useRef, useState } from "react";
import { images } from "@/data/projects";
import heroVideo from "@/../public/hero-video.mp4";
import { Logo } from "@/components/brand/Logo";
import { copy } from "@/content/site";
import { scrollToSection } from "@/lib/animations/useSmoothScroll";
import { loadGsap, prefersReducedMotion } from "@/lib/animations/gsap";

export function Hero() {
  const [ready, setReady] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);
  const imageRef = useRef<HTMLDivElement | null>(null);
  const shadeRef = useRef<HTMLDivElement | null>(null);
  const logoRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLDivElement | null>(null);
  const metaRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const t = window.setTimeout(() => setReady(true), prefersReducedMotion() ? 0 : 750);
    return () => window.clearTimeout(t);
  }, []);

  // Scroll: layered depth, image, logo, title and meta each move at their own speed.
  useEffect(() => {
    if (prefersReducedMotion()) return;
    let cancelled = false;
    let cleanup = () => {};
    loadGsap().then(({ gsap }) => {
      if (cancelled || !sectionRef.current) return;
      const ctx = gsap.context(() => {
        const st = {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 0.8,
        };
        gsap.to(imageRef.current, { scale: 1.22, yPercent: 14, ease: "none", scrollTrigger: st });
        gsap.to(shadeRef.current, { opacity: 1, ease: "none", scrollTrigger: st });
        gsap.to(logoRef.current, { yPercent: -260, opacity: 0, ease: "none", scrollTrigger: st });
        gsap.to(titleRef.current, { yPercent: -45, ease: "none", scrollTrigger: st });
        gsap.to(metaRef.current, {
          yPercent: -120,
          opacity: 0,
          ease: "none",
          scrollTrigger: { ...st, end: "60% top" },
        });
      }, sectionRef);
      cleanup = () => ctx.revert();
    });
    return () => {
      cancelled = true;
      cleanup();
    };
  }, []);

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative h-[100svh] w-full overflow-hidden surface-dark"
    >
      <div ref={imageRef} className="absolute inset-0 will-change-transform">
        <video autoPlay muted loop playsInline poster={images.exteriorDusk} aria-label="Takmeel Square architecture film" className="absolute inset-0 h-full w-full object-cover">
          <source src="https://res.cloudinary.com/dloxfvl80/video/upload/v1790952916/hero-video.mp4" type="video/mp4" />
        </video>

      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-onyx/55 via-onyx/20 to-onyx/95" />
      <div ref={shadeRef} className="absolute inset-0 bg-onyx opacity-0" />

      <div className="relative z-10 mx-auto flex h-full w-full max-w-[86rem] flex-col justify-end px-6 pb-16 md:px-10 lg:px-16 lg:pb-20">
        <div ref={logoRef}>
          <div
            className={`transition-all duration-1000 ${ready ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`}
            style={{ transitionDelay: "450ms" }}
          >
            <Logo size={72} />
          </div>
        </div>

        <div ref={titleRef}>
          <h1 className="display mt-8 max-w-[18ch] text-[clamp(2.75rem,9vw,8.5rem)] text-ivory">
            {copy.hero.titleWords.map((word, i) => (
              <span key={word} className="block overflow-hidden">
                <span
                  className={`block transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    ready ? "translate-y-0" : "translate-y-full"
                  }`}
                  style={{ transitionDelay: `${650 + i * 150}ms` }}
                >
                  {word}
                </span>
              </span>
            ))}
          </h1>
        </div>

        <div ref={metaRef}>
          <div
            className={`mt-8 grid gap-8 border-t border-ivory/15 pt-8 transition-all duration-1000 md:grid-cols-[minmax(0,1fr)_auto] md:items-end ${
              ready ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
            style={{ transitionDelay: "1100ms" }}
          >
            <p className="max-w-md text-base leading-relaxed text-ivory/65">
              {copy.hero.blurb}
            </p>
            <button
              type="button"
              onClick={() => scrollToSection("projects")}
              className="brand-hover brand-hover-outline justify-self-start border border-gold/60 px-8 py-4 text-[0.68rem] uppercase tracking-[0.28em] text-gold hover:border-gold md:justify-self-end"
            >
              {copy.hero.cta}
            </button>
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={() => scrollToSection("about")}
        aria-label="Scroll to about"
        className={`absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-3 transition-opacity duration-1000 lg:flex ${
          ready ? "opacity-100" : "opacity-0"
        }`}
        style={{ transitionDelay: "1500ms" }}
      >
        <span className="text-[0.6rem] uppercase tracking-[0.35em] text-ivory/50">
          Scroll
        </span>
        <span className="relative block h-12 w-px overflow-hidden bg-ivory/20">
          <span className="absolute inset-x-0 top-0 h-4 animate-[scrollcue_2.2s_ease-in-out_infinite] bg-gold" />
        </span>
      </button>

      <style>{`@keyframes scrollcue{0%{transform:translateY(-100%)}60%,100%{transform:translateY(300%)}}`}</style>
    </section>
  );
}
