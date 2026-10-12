// src/components/tour/VirtualTour.tsx
import { useCallback, useEffect, useRef, useState } from "react";
import { Expand, Minimize, Move, ChevronLeft, ChevronRight } from "lucide-react";
import { Section, Shell, Eyebrow } from "@/components/sections/Section";
import { tours } from "@/data/tours";
import { Button } from "@/components/ui/button";

/**
 * Immersive "look around" tour built from flat renders:
 * drag / arrow keys pan the view with perspective tilt, hotspots walk between scenes.
 */
export function VirtualTour({ headingAs: Heading = "h2" }: { headingAs?: "h1" | "h2" } = {}) {
  const [propIdx, setPropIdx] = useState(0);
  const property = tours[propIdx]!;
  const [sceneId, setSceneId] = useState(property.scenes[0]!.id);
  const [prevImg, setPrevImg] = useState<string | null>(null);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [full, setFull] = useState(false);
  const [imageRatio, setImageRatio] = useState(4 / 3);
  const frame = useRef<HTMLDivElement>(null);
  const drag = useRef<{ x: number; y: number; px: number; py: number } | null>(null);

  useEffect(() => {
    const syncCategory = () => {
      const category = window.location.hash.replace("#tour-", "").toLowerCase();
      const found = tours.findIndex((tour) => tour.id === category);
      const selected = tours[found];
      if (window.location.hash.startsWith("#tour-") && selected) {
        setPropIdx(found);
        setSceneId(selected.scenes[0]?.id ?? "");
        setPrevImg(null);
        setPan({ x: 0, y: 0 });
      }
    };
    syncCategory();
    window.addEventListener("hashchange", syncCategory);
    return () => window.removeEventListener("hashchange", syncCategory);
  }, []);

  const scene = property.scenes.find((s) => s.id === sceneId) ?? property.scenes[0]!;
  const idx = property.scenes.indexOf(scene);

  const goTo = useCallback(
    (id: string) => {
      if (id === scene.id) return;
      setPrevImg(scene.image);
      setSceneId(id);
      setPan({ x: 0, y: 0 });
      window.setTimeout(() => setPrevImg(null), 900);
    },
    [scene],
  );

  const selectProperty = (i: number) => {
    const selected = tours[i];
    if (!selected) return;
    setPropIdx(i);
    setSceneId(selected.scenes[0]?.id ?? "");
    setPrevImg(null);
    setPan({ x: 0, y: 0 });
  };

  const step = (d: number) => {
    const n = property.scenes.length;
    goTo(property.scenes[(idx + d + n) % n]!.id);
  };

  const onDown = (e: React.PointerEvent) => {
    drag.current = { x: e.clientX, y: e.clientY, px: pan.x, py: pan.y };
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
  };
  const onMove = (e: React.PointerEvent) => {
    if (!drag.current || !frame.current) return;
    const r = frame.current.getBoundingClientRect();
    const clamp = (v: number) => Math.max(-1, Math.min(1, v));
    setPan({
      x: clamp(drag.current.px - ((e.clientX - drag.current.x) / r.width) * 2.2),
      y: clamp(drag.current.py - ((e.clientY - drag.current.y) / r.height) * 1.6),
    });
  };
  const onUp = () => (drag.current = null);

  useEffect(() => {
    if (!full) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setFull(false);
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [full]);

  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") setPan((p) => ({ ...p, x: Math.max(-1, p.x - 0.15) }));
    if (e.key === "ArrowRight") setPan((p) => ({ ...p, x: Math.min(1, p.x + 0.15) }));
  };

  // Keep the complete uploaded composition visible at its natural aspect ratio.
  const transform = `translate3d(${pan.x * -2}%, ${pan.y * -2}%, 0)`;

  const viewer = (
    <div
      ref={frame}
      tabIndex={0}
      onKeyDown={onKey}
      onPointerDown={onDown}
      onPointerMove={onMove}
      onPointerUp={onUp}
      onPointerLeave={onUp}
      className={`relative cursor-grab touch-none select-none overflow-hidden bg-forest active:cursor-grabbing ${
         full ? "h-full w-full" : "mx-auto max-w-full"
      }`}
      style={full ? undefined : { aspectRatio: imageRatio, width: "100%", maxHeight: "min(76svh, 850px)" }}
    >
      {prevImg && (
        <img
          src={prevImg}
          alt=""
          className="pointer-events-none absolute inset-0 z-10 h-full w-full object-contain"
          style={{ animation: "tour-out 0.9s cubic-bezier(.65,0,.35,1) forwards" }}
        />
      )}
      <img
        key={scene.id}
        src={scene.image}
        alt={scene.title}
        draggable={false}
        onLoad={(event) => {
          const image = event.currentTarget;
          if (image.naturalHeight) setImageRatio(image.naturalWidth / image.naturalHeight);
        }}
        className="pointer-events-none absolute inset-0 h-full w-full object-contain transition-transform duration-300 ease-out"
        style={{ transform }}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-forest/80 via-transparent to-forest/30" />

      {scene.links.map((l) => (
        <Button
          key={l.to + l.x}
          type="button"
          onPointerDown={(e) => e.stopPropagation()}
          onClick={() => goTo(l.to)}
          variant="ghost"
          className="group absolute z-20 flex h-auto -translate-x-1/2 -translate-y-1/2 items-center gap-3 p-0 hover:bg-transparent"
          style={{ left: `${l.x - pan.x * 12}%`, top: `${l.y - pan.y * 8}%` }}
        >
          <span className="relative flex h-12 w-12 items-center justify-center">
            <span className="absolute inset-0 animate-ping rounded-full bg-gold/40" />
            <span className="relative h-12 w-12 rounded-full border border-ivory/80 bg-forest/50 backdrop-blur-sm transition-colors group-hover:bg-gold" />
            <span className="absolute h-2 w-2 rounded-full bg-ivory" />
          </span>
          <span className="whitespace-nowrap rounded-full bg-forest/80 px-4 py-2 text-[0.65rem] uppercase tracking-[0.22em] text-ivory backdrop-blur-sm">
            {l.label}
          </span>
        </Button>
      ))}

      <div className="absolute left-4 top-4 z-20 flex items-center gap-2 rounded-full bg-forest/70 px-4 py-2 text-[0.62rem] uppercase tracking-[0.22em] text-ivory backdrop-blur-sm">
        <Move className="h-3.5 w-3.5" /> Drag to look around
      </div>
      
      {/* FIXED: Full screen button is now always in the top-right corner */}
      <Button
        type="button"
        onPointerDown={(e) => e.stopPropagation()}
        onClick={() => setFull((f) => !f)}
        aria-label={full ? "Exit full screen" : "Full screen"}
        className="brand-hover absolute left-5 top-16 z-30 flex h-11 w-11 items-center justify-center rounded-full border border-ivory/20 bg-forest/70 p-0 text-ivory backdrop-blur-sm hover:bg-gold hover:text-forest"
      >
        {full ? <Minimize className="h-4 w-4" /> : <Expand className="h-4 w-4" />}
      </Button>

      <div className="absolute inset-x-4 bottom-4 z-20 flex items-end justify-between gap-4">
        <div>
          <span className="eyebrow text-gold">
            {String(idx + 1).padStart(2, "0")} / {String(property.scenes.length).padStart(2, "0")}
          </span>
          <p className="display mt-2 text-3xl text-ivory md:text-4xl">{scene.title}</p>
        </div>
        <div className="flex gap-2">
          {[-1, 1].map((d) => (
            <Button
              key={d}
              type="button"
              onPointerDown={(e) => e.stopPropagation()}
              onClick={() => step(d)}
              aria-label={d < 0 ? "Previous view" : "Next view"}
              variant="outline"
              className="brand-hover flex h-12 w-12 items-center justify-center rounded-full border border-ivory/40 bg-transparent p-0 text-ivory hover:border-gold hover:bg-gold hover:text-forest"
            >
              {d < 0 ? <ChevronLeft className="h-5 w-5" /> : <ChevronRight className="h-5 w-5" />}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <Section id="tour" className="bg-secondary py-28 md:py-36">
      <style>{`@keyframes tour-out{0%{opacity:1;transform:scale(1);filter:blur(0)}100%{opacity:0;transform:scale(1.35);filter:blur(6px)}}`}</style>
      <Shell>
        <Eyebrow index="—">Virtual tour</Eyebrow>
        <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
          <Heading className="display text-[clamp(2.4rem,5vw,4.5rem)]" data-reveal>
            Walk through before <em className="text-gold-deep">it's built.</em>
          </Heading>
          <div className="flex flex-wrap gap-2" role="tablist">
            {tours.map((t, i) => (
              <Button
                key={t.id}
                type="button"
                role="tab"
                aria-selected={i === propIdx}
                onClick={() => selectProperty(i)}
                variant="ghost"
                className={`brand-hover h-auto rounded-full px-5 py-2.5 text-[0.7rem] uppercase tracking-[0.22em] transition-colors duration-500 ${
                  i === propIdx ? "bg-forest text-ivory" : "border border-forest/20 text-forest hover:border-forest"
                }`}
              >
                {t.category}
              </Button>
            ))}
          </div>
        </div>
        <p className="mt-4 text-sm text-muted-foreground">
          {property.name} · {property.location}
        </p>
      </Shell>

      <div className="mx-auto mt-8 w-full max-w-[96rem] px-3 sm:px-6 lg:px-8">
        {full ? <div className="fixed inset-0 z-[80]">{viewer}</div> : viewer}
      </div>

      <Shell>
        <div className="no-scrollbar mt-4 flex gap-3 overflow-x-auto pb-2">
          {property.scenes.map((s) => (
            <Button
              key={s.id}
              type="button"
              onClick={() => goTo(s.id)}
              variant="ghost"
              className={`relative h-28 w-36 shrink-0 overflow-hidden rounded-none p-0 transition-all duration-500 ${
                s.id === scene.id ? "ring-2 ring-gold ring-offset-2 ring-offset-secondary" : "opacity-60 hover:opacity-100"
              }`}
            >
              <img src={s.image} alt={s.title} loading="lazy" className="h-full w-full object-contain bg-forest" />
            </Button>
          ))}
        </div>
      </Shell>
    </Section>
  );
}