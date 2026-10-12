// src/components/contact/Contact.tsx
import { useState, type FormEvent } from "react";
import { Check } from "lucide-react";
import { Section, Shell, Eyebrow } from "@/components/sections/Section";
import { offices, site } from "@/data/navigation";

const interests = [
  "Commercial Unit (4 Marla)",
  "Commercial Unit (6 Marla)",
  "Takmeel Bazaar Shop",
  "Takmeel Homes",
  "Rooftop Restaurant / Food Court",
  "Investment",
];

const fieldClass =
  "w-full border-b border-border bg-transparent py-4 text-base outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-gold";

export function Contact({ headingAs: Heading = "h2" }: { headingAs?: "h1" | "h2" } = {}) {
  const [sent, setSent] = useState(false);

  // Frontend only — nothing is submitted anywhere.
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <Section id="contact" className="py-28 md:py-40">
      <Shell>
        <div className="grid gap-16 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-24">
          <div>
            <Eyebrow index="12">Contact</Eyebrow>
            <Heading className="display mt-8 text-[clamp(2rem,4.6vw,4rem)]" data-reveal>
              Let's talk about what you're looking for.
            </Heading>

            <dl className="mt-14 flex flex-col gap-7">
              {[
                ...offices.map((o) => ({ k: o.label, v: o.value })),
                { k: "UAN", v: site.phone },
                { k: "Email", v: site.email },
              ].map((c) => (
                <div key={c.k} className="border-t border-border pt-5">
                  <dt className="eyebrow">{c.k}</dt>
                  <dd className="mt-2 text-base text-foreground/85">{c.v}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative">
            {sent ? (
              <div className="flex min-h-[26rem] flex-col items-start justify-center border border-gold/40 bg-secondary/50 p-10">
                <span className="flex h-14 w-14 items-center justify-center rounded-full border border-gold text-gold">
                  <Check className="h-6 w-6" strokeWidth={1.25} />
                </span>
                <h3 className="display mt-8 text-4xl">Thank you.</h3>
                <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
                  Your enquiry has been received. A member of the Takmeel Square team
                  will be in touch shortly.
                </p>
                <button
                  type="button"
                  onClick={() => setSent(false)}
                  className="link-underline mt-10 text-[0.68rem] uppercase tracking-[0.26em] text-gold-deep"
                >
                  Send another enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="flex flex-col gap-8">
                <div className="grid gap-8 sm:grid-cols-2">
                  <label className="block">
                    <span className="eyebrow">Name</span>
                    <input required name="name" placeholder="Your full name" className={fieldClass} />
                  </label>
                  <label className="block">
                    <span className="eyebrow">Email</span>
                    <input
                      required
                      type="email"
                      name="email"
                      placeholder="you@example.com"
                      className={fieldClass}
                    />
                  </label>
                  <label className="block">
                    <span className="eyebrow">Phone</span>
                    <input name="phone" placeholder="+92 300 0000000" className={fieldClass} />
                  </label>
                  <label className="block">
                    <span className="eyebrow">Interest</span>
                    <select name="interest" className={fieldClass} defaultValue="">
                      <option value="" disabled>
                        Select an interest
                      </option>
                      {interests.map((i) => (
                        <option key={i} value={i}>
                          {i}
                        </option>
                      ))}
                    </select>
                  </label>
                </div>

                <label className="block">
                  <span className="eyebrow">Message</span>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Tell us what you have in mind"
                    className={`${fieldClass} resize-none`}
                  />
                </label>

                <button
                  type="submit"
                  className="brand-hover self-start border border-foreground px-10 py-5 text-[0.68rem] uppercase tracking-[0.28em] transition-colors duration-500 hover:border-gold hover:bg-gold hover:text-onyx"
                >
                  Send enquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </Shell>
    </Section>
  );
}
