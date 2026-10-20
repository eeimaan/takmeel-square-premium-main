// src/components/gallery/ImageLightbox.tsx
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

type Photo = { src: string; alt: string };

export function ImageLightbox({ photo, onClose }: { photo: Photo | null; onClose: () => void }) {
  const [displayed, setDisplayed] = useState<Photo | null>(null);
  const [visible, setVisible] = useState(false);
  const previousFocus = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!photo) return;
    previousFocus.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    setDisplayed(photo);
    const frame = requestAnimationFrame(() => setVisible(true));
    return () => cancelAnimationFrame(frame);
  }, [photo]);

  useEffect(() => {
    if (!displayed) return;
    const oldOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = oldOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [displayed, onClose]);

  useEffect(() => {
    if (photo || !displayed) return;
    setVisible(false);
    const timer = window.setTimeout(() => {
      setDisplayed(null);
      previousFocus.current?.focus();
    }, 360);
    return () => window.clearTimeout(timer);
  }, [photo, displayed]);

  if (!displayed || typeof document === "undefined") return null;
  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label={displayed.alt ? `Enlarged image: ${displayed.alt}` : "Enlarged image"}
      className={`image-lightbox fixed inset-0 z-[100] flex items-center justify-center bg-forest/95 p-4 transition-opacity duration-[360ms] md:p-10 ${visible ? "opacity-100" : "opacity-0"}`}
      onClick={onClose}
    >
      <Button
        type="button"
        variant="ghost"
        onClick={onClose}
        aria-label="Close image"
        autoFocus
        className="absolute right-4 top-4 z-10 flex h-12 w-12 rounded-full border border-ivory/50 bg-forest/60 p-0 text-ivory hover:bg-gold hover:text-forest md:right-8 md:top-8"
      >
        <X className="h-5 w-5" />
      </Button>
      <img
        src={displayed.src}
        alt={displayed.alt}
        onClick={(event) => event.stopPropagation()}
        className={`max-h-[88svh] max-w-full object-contain transition-[transform,opacity] duration-[420ms] ease-[cubic-bezier(.22,1,.36,1)] ${visible ? "scale-100 opacity-100" : "scale-90 opacity-0"}`}
      />
    </div>,
    document.body,
  );
}