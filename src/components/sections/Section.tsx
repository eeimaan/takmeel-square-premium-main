// src/components/sections/Section.tsx
import type { ReactNode } from "react";

export function Section({
  id,
  children,
  className = "",
  dark = false,
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  dark?: boolean;
}) {
  return (
    <section
      id={id}
      className={`relative w-full overflow-hidden ${dark ? "surface-dark" : ""} ${className}`}
    >
      {children}
    </section>
  );
}

export function Shell({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-[86rem] px-6 md:px-10 lg:px-16 ${className}`}>
      {children}
    </div>
  );
}

export function Eyebrow({ index, children }: { index?: string; children: ReactNode }) {
  return (
    <div className="flex items-center gap-4" data-reveal>
      {index ? (
        <span className="eyebrow text-gold-deep" style={{ fontSize: "0.8rem" }}>
          {index}
        </span>
      ) : null}
      <span className="h-px w-12 bg-gold/60" />
      <span className="eyebrow" style={{ fontSize: "0.8rem" }}>
        {children}
      </span>
    </div>
  );
}
