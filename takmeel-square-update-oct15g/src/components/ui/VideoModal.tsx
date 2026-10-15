// src/components/ui/VideoModal.tsx
import { useEffect } from "react";
import { X } from "lucide-react";
import { youTubeEmbed } from "@/lib/youtube";

/** Full-screen YouTube player. Controlled by the parent: pass a url to open, null to close. */
export function VideoModal({ url, onClose }: { url: string | null; onClose: () => void }) {
  useEffect(() => {
    if (!url) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [url, onClose]);

  if (!url) return null;

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center bg-onyx/92 p-4 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Video player"
    >
      <button
        type="button"
        aria-label="Close video"
        onClick={onClose}
        className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-ivory/30 text-ivory transition-colors hover:border-gold hover:text-gold"
      >
        <X size={20} />
      </button>
      <div className="relative w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
        <div className="relative aspect-video w-full overflow-hidden border border-gold/30 bg-black shadow-2xl">
          <iframe
            src={youTubeEmbed(url)}
            title="Video"
            className="absolute inset-0 h-full w-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}
