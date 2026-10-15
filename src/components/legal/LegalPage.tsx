// src/components/legal/LegalPage.tsx
import { Link } from "@tanstack/react-router";
import { Shell } from "@/components/sections/Section";
import { LAST_UPDATED, legalDocs, type LegalDoc } from "@/data/legal";

const others: { slug: LegalDoc["slug"]; to: string }[] = [
  { slug: "privacy-policy", to: "/privacy-policy" },
  { slug: "terms", to: "/terms" },
  { slug: "disclaimer", to: "/disclaimer" },
];

/** Shared layout for Privacy Policy, Terms and Disclaimer, same header and type scale as the rest of the site. */
/** Renders **bold** spans inside legal copy. */
function renderInline(text: string) {
  return text.split("**").map((part, i) =>
    i % 2 === 1 ? <strong key={i} className="font-medium text-foreground">{part}</strong> : part,
  );
}

export function LegalPage({ doc }: { doc: LegalDoc }) {
  return (
    <>
      <section className="surface-dark pb-16 pt-20 md:pb-20 md:pt-48">
        <Shell>
          <span className="eyebrow text-gold">Legal · Last updated {LAST_UPDATED}</span>
          <h1 className="display mt-6 text-[clamp(2.6rem,7vw,6rem)]">{doc.title}</h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-ivory/65">{doc.intro}</p>
        </Shell>
      </section>

      <section className="py-20 md:py-28">
        <Shell className="grid gap-14 lg:grid-cols-[minmax(0,0.35fr)_minmax(0,1fr)] lg:gap-20">
          <nav aria-label="Legal" className="lg:sticky lg:top-32 lg:self-start">
            <ul className="flex flex-wrap gap-2 lg:flex-col lg:gap-0">
              {others.map((o) => (
                <li key={o.slug} className="lg:border-t lg:border-border lg:last:border-b">
                  <Link
                    to={o.to}
                    className={`block rounded-full border px-5 py-2.5 text-[0.68rem] uppercase tracking-[0.2em] transition-colors lg:rounded-none lg:border-0 lg:px-0 lg:py-4 ${
                      o.slug === doc.slug
                        ? "border-forest bg-forest text-ivory lg:bg-transparent lg:text-gold-deep"
                        : "border-border text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {legalDocs[o.slug].title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <article className="max-w-3xl">
            {doc.sections.map((s, i) => (
              <section key={s.heading} className="border-t border-border py-8 first:border-t-0 first:pt-0">
                <h2 className="display text-2xl md:text-3xl">
                  <span className="eyebrow mr-4 align-middle text-gold-deep">{String(i + 1).padStart(2, "0")}</span>
                  {s.heading}
                </h2>
                {s.body.map((p) => (
                  <p key={p.slice(0, 32)} className="mt-4 text-base leading-relaxed text-muted-foreground">
                    {renderInline(p)}
                  </p>
                ))}
              </section>
            ))}
          </article>
        </Shell>
      </section>
    </>
  );
}
