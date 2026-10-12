// src/components/sections/Architecture.tsx
import { useEffect, useRef } from "react";
import { Shell, Eyebrow } from "./Section";
import { images } from "@/data/projects";
import { loadGsap, prefersReducedMotion } from "@/lib/animations/gsap";

const steps = [
  {
    title: "Façade",
    lead: "An elevation that reads from the street.",
    body: "Deep reveals and screened openings that cut glare without closing the view.",
    image: images.bazaarA,
  },
  {
    title: "Interiors",
    lead: "Detail carried into the room.",
    body: "Warm stone, fluted timber and quiet metal detailing throughout.",
    image: images.interiorDetail,
  },
  {
    title: "Daylight",
    lead: "Light from more than one side.",
    body: "Plans arranged so habitable rooms receive light from more than one side.",
    image: images.lounge,
  },
];

/** Pinned story: text left, image right; scroll swaps both in sequence. */
export function Architecture() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    let cancelled = false;
    let cleanup = () => {};
    loadGsap().then(({ gsap }) => {
      const root = sectionRef.current;
      if (cancelled || !root) return;
      const mm = gsap.matchMedia();
      mm.add("(min-width: 1024px)", () => {
        const texts = gsap.utils.toArray<HTMLElement>("[data-story-text]", root);
        const imgs = gsap.utils.toArray<HTMLElement>("[data-story-img]", root);
        const dots = gsap.utils.toArray<HTMLElement>("[data-story-dot]", root);
        gsap.set(texts.slice(1), { autoAlpha: 0, yPercent: 30 });
        gsap.set(imgs.slice(1), { clipPath: "inset(100% 0% 0% 0%)" });
        gsap.set(imgs.map((i) => i.querySelector("img")), { scale: 1.15 });
        gsap.set(dots.slice(1), { opacity: 0.25 });

        const tl = gsap.timeline({
          defaults: { ease: "power2.inOut" },
          scrollTrigger: {
            trigger: root,
            start: "top top",
            end: () => `+=${window.innerHeight * 2.4}`,
            pin: true,
            scrub: 1,
            anticipatePin: 1,
            refreshPriority: 1,
            invalidateOnRefresh: true,
          },
        });
        tl.to(imgs[0]!.querySelector("img"), { scale: 1, duration: 1 }, 0);
        for (let i = 1; i < steps.length; i++) {
          const at = i * 1.2;
          tl.to(texts[i - 1]!, { autoAlpha: 0, yPercent: -30, duration: 0.6 }, at)
            .to(texts[i]!, { autoAlpha: 1, yPercent: 0, duration: 0.6 }, at + 0.35)
            .to(imgs[i]!, { clipPath: "inset(0% 0% 0% 0%)", duration: 1 }, at)
            .to(imgs[i]!.querySelector("img"), { scale: 1, duration: 1.4 }, at)
            .to(imgs[i - 1]!.querySelector("img"), { scale: 0.92, yPercent: -6, duration: 1 }, at)
            .to(dots[i - 1]!, { opacity: 0.25, duration: 0.3 }, at)
            .to(dots[i]!, { opacity: 1, duration: 0.3 }, at + 0.3);
        }
        tl.to({}, { duration: 0.6 });
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
      id="architecture"
      ref={sectionRef}
      className="relative w-full overflow-hidden surface-dark py-28 md:py-36 lg:motion:flex lg:motion:h-[100svh] lg:motion:items-center lg:motion:py-0"
    >
      <Shell>
        <Eyebrow index="08">Architecture & design</Eyebrow>

        {/* Desktop pinned story */}
        <div className="mt-10 hidden gap-16 lg:motion:grid lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <div className="relative flex flex-col justify-center">
            <div className="relative h-[22rem]">
              {steps.map((s, i) => (
                <div key={s.title} data-story-text className="absolute inset-0 flex flex-col justify-center">
                  <span className="eyebrow">0{i + 1} — {s.title}</span>
                  <h2 className="display mt-6 max-w-[14ch] text-[clamp(2.2rem,4.4vw,4.2rem)] text-ivory">
                    {s.lead}
                  </h2>
                  <p className="mt-6 max-w-sm text-sm leading-relaxed text-ivory/55">{s.body}</p>
                </div>
              ))}
            </div>
            <div className="mt-10 flex gap-3">
              {steps.map((s) => (
                <span key={s.title} data-story-dot className="h-px w-14 bg-gold" />
              ))}
            </div>
          </div>
          <div className="relative h-[72svh] overflow-hidden">
            {steps.map((s) => (
              <div key={s.title} data-story-img className="absolute inset-0 overflow-hidden">
                <img src={s.image} alt={s.title} loading="lazy" className="h-full w-full object-cover" />
              </div>
            ))}
          </div>
        </div>

        {/* Mobile / tablet: stacked */}
        <div className="mt-12 flex flex-col gap-14 md:grid md:grid-cols-3 md:gap-8 lg:motion:hidden">
          {steps.map((s, i) => (
            <div key={s.title} data-reveal>
              <div className="aspect-[4/3] overflow-hidden" data-clip>
                <img src={s.image} alt={s.title} loading="lazy" className="h-full w-full object-cover" />
              </div>
              <span className="eyebrow mt-6 block">0{i + 1} — {s.title}</span>
              <h3 className="display mt-3 text-3xl text-ivory">{s.lead}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ivory/55">{s.body}</p>
            </div>
          ))}
        </div>
      </Shell>
    </section>
  );
}
