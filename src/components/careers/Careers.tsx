// src/components/careers/Careers.tsx
import { useRef, useState, type FormEvent } from "react";
import { Briefcase, Check, MapPin, Plus, Users } from "lucide-react";
import { Shell, Section, Eyebrow } from "@/components/sections/Section";
import { CAREERS_EMAIL, roles } from "@/data/careers";

const fieldClass =
  "w-full border-b border-border bg-transparent py-4 text-base outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-gold";

export function Careers() {
  const [role, setRole] = useState<string>("");
  const [sent, setSent] = useState<{ subject: string } | null>(null);
  const formRef = useRef<HTMLDivElement>(null);

  const applyFor = (title: string) => {
    setRole(title);
    setSent(null);
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const name = String(f.get("name") || "").trim();
    const selected = String(f.get("role") || "").trim();
    // Subject:  Website applicant - {Role} - {Name}
    const subject = `Website applicant - ${selected} - ${name}`;
    const body = [
      `Position: ${selected}`,
      `Name: ${name}`,
      `Email: ${f.get("email")}`,
      `Phone: ${f.get("phone")}`,
      "",
      "Message:",
      String(f.get("message") || ""),
      "",
      "(Please attach your CV to this email.)",
    ].join("\n");
    window.location.href = `mailto:${CAREERS_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent({ subject });
  };

  return (
    <>
      {/* ---------- Hero ---------- */}
      <section className="surface-dark pb-16 pt-20 md:pb-20 md:pt-48">
        <Shell>
          <span className="eyebrow text-gold">Careers</span>
          <h1 className="display mt-6 max-w-4xl text-[clamp(2.6rem,7vw,6rem)]">
            Build the future of <em className="text-gold">South Punjab.</em>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-ivory/65 md:text-lg">
            Join the team behind Takmeel Square, DHA Bahawalpur. Explore our open roles and apply, your application
            reaches our team directly.
          </p>
        </Shell>
      </section>

      {/* ---------- Open roles ---------- */}
      <Section id="openings" className="py-20 md:py-28">
        <Shell>
          <Eyebrow>Open positions</Eyebrow>
          <div className="mt-10 border-b border-border">
            {roles.map((r, i) => (
              <details key={r.id} className="group border-t border-border" data-reveal data-reveal-delay={`${Math.min(i, 5) * 60}`}>
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-7 [&::-webkit-details-marker]:hidden">
                  <div>
                    <h2 className="display text-2xl text-forest md:text-3xl">{r.title}</h2>
                    <div className="mt-3 flex flex-wrap gap-x-6 gap-y-1 text-[0.62rem] uppercase tracking-[0.18em] text-muted-foreground">
                      <span className="inline-flex items-center gap-1.5"><Briefcase size={12} className="text-gold-deep" />{r.type}</span>
                      <span className="inline-flex items-center gap-1.5"><MapPin size={12} className="text-gold-deep" />{r.location}</span>
                      <span className="inline-flex items-center gap-1.5"><Users size={12} className="text-gold-deep" />{r.positions}</span>
                    </div>
                  </div>
                  <Plus size={22} strokeWidth={1.4} className="mt-1 shrink-0 text-gold-deep transition-transform duration-500 group-open:rotate-45" />
                </summary>

                <div className="grid gap-10 pb-10 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
                  <div>
                    <p className="max-w-md text-base leading-relaxed text-muted-foreground">{r.overview}</p>
                    <h3 className="eyebrow mt-8">Responsibilities</h3>
                    <ul className="mt-4 flex flex-col gap-2.5">
                      {r.responsibilities.map((x) => (
                        <li key={x} className="flex gap-3 text-sm text-foreground/80"><span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold-deep" />{x}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="eyebrow">Requirements</h3>
                    <ul className="mt-4 flex flex-col gap-2.5">
                      {r.requirements.map((x) => (
                        <li key={x} className="flex gap-3 text-sm text-foreground/80"><span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold-deep" />{x}</li>
                      ))}
                    </ul>
                    <button
                      type="button"
                      onClick={() => applyFor(r.title)}
                      className="brand-hover mt-8 inline-flex items-center gap-3 rounded-full bg-forest px-7 py-3.5 text-[0.66rem] uppercase tracking-[0.24em] text-ivory transition-colors hover:bg-gold hover:text-forest"
                    >
                      Apply for this role
                    </button>
                  </div>
                </div>
              </details>
            ))}
          </div>
        </Shell>
      </Section>

      {/* ---------- Application form ---------- */}
      <Section id="apply" dark className="py-14 md:py-20">
        <Shell>
          <div ref={formRef} className="grid gap-16 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-24">
            <div>
              <Eyebrow>Apply now</Eyebrow>
              <h2 className="display mt-8 text-[clamp(2rem,4.4vw,3.6rem)] text-ivory" data-reveal>
                Send us your application.
              </h2>
              <p className="mt-6 max-w-sm text-base leading-relaxed text-ivory/60">
                Fill in your details, choose the role, and your email app will open with everything pre filled. Attach
                your CV before sending.
              </p>
            </div>

            {sent ? (
              <div className="flex flex-col items-start border border-gold/40 bg-forest/40 p-10">
                <span className="flex h-14 w-14 items-center justify-center rounded-full border border-gold text-gold">
                  <Check className="h-6 w-6" strokeWidth={1.25} />
                </span>
                <h3 className="display mt-8 text-4xl text-ivory">Almost there.</h3>
                <p className="mt-4 max-w-sm text-sm leading-relaxed text-ivory/65">
                  Your email app has opened with the subject <span className="text-gold">“{sent.subject}”</span>. Attach
                  your CV and press send, that is it.
                </p>
                <button type="button" onClick={() => setSent(null)} className="link-underline mt-8 text-[0.68rem] uppercase tracking-[0.24em] text-gold-deep">
                  Apply for another role
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="flex flex-col gap-8">
                <div className="grid gap-8 sm:grid-cols-2">
                  <label className="block">
                    <span className="eyebrow text-ivory/70">Full name</span>
                    <input required name="name" autoComplete="name" placeholder="Your full name" className={`${fieldClass} text-ivory placeholder:text-ivory/40`} />
                  </label>
                  <label className="block">
                    <span className="eyebrow text-ivory/70">Role</span>
                    <select required name="role" value={role} onChange={(e) => setRole(e.target.value)} className={`${fieldClass} text-ivory`}>
                      <option value="" disabled>Select a role</option>
                      {roles.map((r) => (
                        <option key={r.id} value={r.title} className="text-forest">{r.title}</option>
                      ))}
                    </select>
                  </label>
                  <label className="block">
                    <span className="eyebrow text-ivory/70">Email</span>
                    <input required type="email" name="email" autoComplete="email" placeholder="you@example.com" className={`${fieldClass} text-ivory placeholder:text-ivory/40`} />
                  </label>
                  <label className="block">
                    <span className="eyebrow text-ivory/70">Phone</span>
                    <input required name="phone" type="tel" autoComplete="tel" placeholder="+92 300 0000000" className={`${fieldClass} text-ivory placeholder:text-ivory/40`} />
                  </label>
                </div>
                <label className="block">
                  <span className="eyebrow text-ivory/70">Cover note</span>
                  <textarea name="message" rows={4} placeholder="Tell us briefly why you're a good fit" className={`${fieldClass} resize-none text-ivory placeholder:text-ivory/40`} />
                </label>
                <button
                  type="submit"
                  className="brand-hover self-start border border-gold bg-gold px-10 py-5 text-[0.68rem] uppercase tracking-[0.28em] text-onyx transition-colors duration-500"
                >
                  Submit application
                </button>
              </form>
            )}
          </div>
        </Shell>
      </Section>
    </>
  );
}
