// src/components/brand/IntroCurtain.tsx
import { Logo } from "./Logo";

const WORD = "TAKMEEL";

/** ~2.4s cinematic brand opening: logo, letter reveal, then layered panels lift. */
export function IntroCurtain() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-[100]">
      <div className="ts-intro-gold absolute inset-0 bg-gold" />
      <div className="ts-intro absolute inset-0 flex items-center justify-center surface-dark">
        <div className="flex flex-col items-center">
          <div className="ts-logo">
            <Logo size={88} />
          </div>
          <div className="ts-words mt-8 flex flex-col items-center">
            <div className="overflow-hidden">
              {WORD.split("").map((c, i) => (
                <span
                  key={i}
                  className="ts-letter display text-4xl tracking-[0.35em] text-ivory md:text-5xl"
                  style={{ animationDelay: `${0.25 + i * 0.06}s` }}
                >
                  {c}
                </span>
              ))}
            </div>
            <span
              className="ts-letter mt-3 text-[0.65rem] tracking-[0.6em] text-gold"
              style={{ animationDelay: "0.8s" }}
            >
              SQUARE
            </span>
            <span className="ts-bar mt-8 block h-px w-40 bg-gold/70" />
          </div>
        </div>
      </div>
    </div>
  );
}
