// src/lib/animations/RevealText.tsx
import { Fragment, type ElementType } from "react";

/**
 * Word-by-word masked reveal. Words are wrapped in overflow masks and
 * animated by useScrollAnimations ([data-words] → [data-word]).
 */
export function RevealText({
  text,
  as: Tag = "h2",
  className = "",
}: {
  text: string;
  as?: ElementType;
  className?: string;
}) {
  const words = text.split(" ");
  return (
    <Tag className={className} data-words aria-label={text}>
      {words.map((w, i) => (
        <Fragment key={`${w}-${i}`}>
          <span aria-hidden className="inline-block overflow-hidden pb-[0.12em] -mb-[0.12em] align-bottom">
            <span data-word className="inline-block will-change-transform">
              {w}
            </span>
          </span>
          {i < words.length - 1 ? " " : null}
        </Fragment>
      ))}
    </Tag>
  );
}
