// src/components/sections/ProjectDetails.tsx
import { useEffect, useRef, type PointerEvent } from "react";
import { Section, Shell, Eyebrow } from "./Section";
import { projectDetails } from "@/data/amenities";
import sitePlan from "@/assets/takmeel/site-plan-3d.webp";

/**
 * Site plan floating on the section's own green, tilted like a model on a table.
 * Mouse: the plan straightens and follows the pointer, with a gold light under the cursor.
 * Touch / reduced motion: stays in its resting 3D pose. Click opens the lightbox.
 */
function SitePlan3D() {
  const frame = useRef<HTMLDivElement>(null);
  const raf = useRef(0);

  useEffect(() => () => cancelAnimationFrame(raf.current), []);

  const onMove = (e: PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const el = frame.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width;
    const y = (e.clientY - r.top) / r.height;
    cancelAnimationFrame(raf.current);
    raf.current = requestAnimationFrame(() => {
      el.style.setProperty("--rx", `${(0.5 - y) * 12}deg`);
      el.style.setProperty("--ry", `${(x - 0.5) * 14}deg`);
      el.style.setProperty("--mx", `${(x * 100).toFixed(1)}%`);
      el.style.setProperty("--my", `${(y * 100).toFixed(1)}%`);
      el.dataset["active"] = "true";
    });
  };

  const onLeave = () => {
    cancelAnimationFrame(raf.current);
    const el = frame.current;
    if (!el) return;
    ["--rx", "--ry", "--mx", "--my"].forEach((p) => el.style.removeProperty(p));
    delete el.dataset["active"];
  };

  return (
    <div
      ref={frame}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      data-lightbox-image
      data-reveal
      className="site-plan relative aspect-square cursor-zoom-in overflow-hidden lg:aspect-auto lg:h-full lg:min-h-[42rem]"
    >
      <style>{`
        .site-plan .sp-grid{background-image:linear-gradient(rgba(244,238,232,.08) 1px,transparent 1px),linear-gradient(90deg,rgba(244,238,232,.08) 1px,transparent 1px);background-size:44px 44px;mask-image:radial-gradient(ellipse 80% 75% at 50% 50%,#000 35%,transparent 100%)}
        .site-plan .sp-glow{background:radial-gradient(520px circle at var(--mx,50%) var(--my,45%),rgba(212,175,55,.16),transparent 62%);opacity:0;transition:opacity .6s ease}
        .site-plan[data-active] .sp-glow{opacity:1}
        .site-plan .sp-tilt{transform:rotateX(var(--rx,24deg)) rotateY(var(--ry,0deg)) rotateZ(var(--rz,-7deg)) scale(var(--s,1));transform-style:preserve-3d;transition:transform 1.1s cubic-bezier(.22,1,.36,1);will-change:transform}
        .site-plan[data-active] .sp-tilt{--rz:0deg;--s:1.04;transition:transform .35s cubic-bezier(.22,1,.36,1)}
        .site-plan .sp-map{transform:translateZ(40px);filter:drop-shadow(0 34px 38px rgba(0,0,0,.55)) drop-shadow(0 2px 2px rgba(0,0,0,.35))}
        .site-plan .sp-floor{transform:translateZ(-30px) translateY(6%) scale(.86);background:radial-gradient(closest-side,rgba(0,0,0,.45),transparent);filter:blur(10px);transition:opacity .6s ease}
        .site-plan[data-active] .sp-floor{opacity:.5}
        @media (prefers-reduced-motion: reduce){.site-plan .sp-tilt{transition:none}}
      `}</style>

      {/* Blueprint grid (always) + gold cursor light (hover only) */}
      <div className="sp-grid pointer-events-none absolute inset-0" />
      <div className="sp-glow pointer-events-none absolute inset-0" />

      {/* The plan */}
      <div className="absolute inset-0 flex items-center justify-center [perspective:1600px]">
        <div className="sp-tilt relative w-[92%]">
          <div className="sp-floor pointer-events-none absolute inset-0" />
          <img
            src={sitePlan}
            alt="Takmeel Square site plan — A & B Blocks, Takmeel Bazaar markets and Glow Park"
            loading="lazy"
            draggable={false}
            className="sp-map relative block h-auto w-full select-none"
          />
        </div>
      </div>

      {/* Chips */}
      <div className="pointer-events-none absolute left-5 top-5 z-10 flex items-center gap-3 rounded-full border border-gold/40 bg-forest/50 px-4 py-2 backdrop-blur-md">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-gold" />
        </span>
        <span className="text-[0.6rem] uppercase tracking-[0.28em] text-gold">Site plan</span>
      </div>
      <p className="pointer-events-none z-10 absolute bottom-5 right-5 hidden text-[0.58rem] uppercase tracking-[0.26em] text-ivory/45 md:block">
        Hover to explore · Click to enlarge
      </p>
    </div>
  );
}

export function ProjectDetails() {
  return (
    <Section id="details" dark className="py-28 md:py-40">
      <Shell>
        <Eyebrow index="11">Project details</Eyebrow>

        <div className="mt-12 grid gap-14 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-14">
          <dl className="grid grid-cols-1 sm:grid-cols-2">
            {projectDetails.map((d, i) => (
              <div
                key={d.label}
                className="border-t border-ivory/12 py-6 sm:pr-8"
                data-reveal
                data-reveal-delay={`${i * 60}`}
              >
                <dt className="text-[0.62rem] uppercase tracking-[0.24em] text-ivory/45">
                  {d.label}
                </dt>
                <dd className="display mt-2 text-2xl text-ivory">{d.value}</dd>
              </div>
            ))}
          </dl>

          <SitePlan3D />
        </div>
      </Shell>
    </Section>
  );
}
