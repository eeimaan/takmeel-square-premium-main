// src/components/contact/BookVisit.tsx
import { useEffect, useMemo, useState, type FormEvent } from "react";
import { Building2, CalendarDays, Check, Clock, MessageCircle, Phone } from "lucide-react";
import { Shell, Eyebrow } from "@/components/sections/Section";
import { Calendar } from "@/components/ui/calendar";
import { site } from "@/data/navigation";

type Kind = "visit" | "call";

const KINDS: { id: Kind; label: string; note: string; icon: typeof Building2 }[] = [
  { id: "visit", label: "Site visit", note: "Tour Takmeel Square in DHA Bahawalpur with our team.", icon: Building2 },
  { id: "call", label: "Phone call", note: "A sales advisor calls you at your chosen time.", icon: Phone },
];

const SLOTS = ["10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM"];

const INTERESTS = [
  "Commercial Unit (4 Marla)",
  "Commercial Unit (6 Marla)",
  "Takmeel Bazaar Shop",
  "Takmeel Homes",
  "Rooftop Restaurant / Food Court",
  "Investment",
];

const WHATSAPP = site.phone.replace(/[^\d]/g, "");

const fieldClass =
  "w-full border-b border-border bg-transparent py-4 text-base outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-gold";

/** Converts "3:00 PM" to 24-hour hours for the chosen date. */
const slotHour = (slot: string) => {
  const [hm, ap] = slot.split(" ");
  const h = parseInt(hm ?? "0", 10) % 12;
  return ap === "PM" ? h + 12 : h;
};

const fmtDate = (d: Date) =>
  d.toLocaleDateString("en-GB", { weekday: "long", day: "numeric", month: "long", year: "numeric" });

export function BookVisit() {
  const [kind, setKind] = useState<Kind>("visit");
  const [date, setDate] = useState<Date | undefined>();
  const [slot, setSlot] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [done, setDone] = useState<{ text: string; summary: string } | null>(null);

  // /book#call or /book#visit preselects the booking type.
  useEffect(() => {
    const sync = () => {
      const h = window.location.hash.replace("#", "");
      if (h === "call" || h === "visit") setKind(h);
    };
    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, []);

  const today = useMemo(() => {
    const t = new Date();
    t.setHours(0, 0, 0, 0);
    return t;
  }, []);

  const isPastSlot = (s: string) => {
    if (!date) return false;
    const now = new Date();
    if (date.toDateString() !== now.toDateString()) return false;
    return slotHour(s) <= now.getHours();
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!date) return setError("Please choose a date.");
    if (!slot) return setError("Please choose a time.");
    setError(null);
    const f = new FormData(e.currentTarget);
    const label = kind === "visit" ? "Site visit" : "Phone call";
    const summary = `${label} · ${fmtDate(date)} · ${slot}`;
    const lines = [
      `Booking request — ${label}`,
      `Date: ${fmtDate(date)}`,
      `Time: ${slot}`,
      `Name: ${f.get("name")}`,
      `Phone: ${f.get("phone")}`,
      f.get("email") ? `Email: ${f.get("email")}` : "",
      f.get("interest") ? `Interested in: ${f.get("interest")}` : "",
      f.get("notes") ? `Notes: ${f.get("notes")}` : "",
    ].filter(Boolean);
    const text = lines.join("\n");
    setDone({ text, summary });
    window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`, "_blank", "noopener");
  };

  const reset = () => {
    setDone(null);
    setDate(undefined);
    setSlot(null);
  };

  return (
    <>
      <section className="surface-dark pb-20 pt-40 md:pt-48">
        <Shell>
          <span className="eyebrow text-gold">Book a visit · Schedule a call</span>
          <h1 className="display mt-6 max-w-4xl text-[clamp(2.6rem,7vw,6rem)]">
            Choose a day. <em className="text-gold">We'll take it from there.</em>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-ivory/65">
            Pick a site visit at Takmeel Square, DHA Bahawalpur, or a phone call with our sales team — select a date and
            time that suits you and we'll confirm.
          </p>
        </Shell>
      </section>

      <section id="schedule" className="py-20 md:py-28">
        <Shell>
          {done ? (
            <div className="mx-auto flex max-w-2xl flex-col items-start border border-gold/40 bg-secondary/50 p-10 md:p-14">
              <span className="flex h-14 w-14 items-center justify-center rounded-full border border-gold text-gold">
                <Check className="h-6 w-6" strokeWidth={1.25} />
              </span>
              <h2 className="display mt-8 text-4xl md:text-5xl">Request received.</h2>
              <p className="mt-4 text-sm uppercase tracking-[0.18em] text-gold-deep">{done.summary}</p>
              <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
                Your booking details have opened in WhatsApp — press send to share them with our team. We'll confirm your
                appointment shortly. You can also reach us on UAN {site.phone}.
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <a
                  href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(done.text)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="brand-hover inline-flex items-center gap-3 rounded-full bg-forest px-7 py-4 text-[0.68rem] uppercase tracking-[0.24em] text-ivory"
                >
                  <MessageCircle size={16} /> Send on WhatsApp
                </a>
                <a
                  href={`mailto:${site.email}?subject=${encodeURIComponent("Booking request — Takmeel Square")}&body=${encodeURIComponent(done.text)}`}
                  className="brand-hover inline-flex items-center gap-3 rounded-full border border-forest px-7 py-4 text-[0.68rem] uppercase tracking-[0.24em] text-forest"
                >
                  Send by email
                </a>
                <button
                  type="button"
                  onClick={reset}
                  className="link-underline px-2 py-4 text-[0.68rem] uppercase tracking-[0.24em] text-gold-deep"
                >
                  Book another
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="grid gap-16 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-20">
              {/* ── Left: type, date, time ── */}
              <div className="flex flex-col gap-12">
                <div>
                  <Eyebrow index="01">What would you like?</Eyebrow>
                  <div className="mt-6 grid gap-3 sm:grid-cols-2" role="radiogroup">
                    {KINDS.map(({ id, label, note, icon: Icon }) => (
                      <button
                        key={id}
                        type="button"
                        role="radio"
                        aria-checked={kind === id}
                        onClick={() => setKind(id)}
                        className={`flex items-start gap-4 border p-5 text-left transition-colors duration-500 ${
                          kind === id ? "border-forest bg-forest text-ivory" : "border-border hover:border-forest"
                        }`}
                      >
                        <Icon size={20} strokeWidth={1.4} className={kind === id ? "mt-0.5 text-gold" : "mt-0.5 text-gold-deep"} />
                        <span>
                          <span className="display block text-2xl">{label}</span>
                          <span className={`mt-1 block text-xs leading-relaxed ${kind === id ? "text-ivory/65" : "text-muted-foreground"}`}>
                            {note}
                          </span>
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid gap-10 md:grid-cols-[auto_minmax(0,1fr)] md:gap-12">
                  <div>
                    <Eyebrow index="02">Choose a date</Eyebrow>
                    <div className="mt-6 inline-block border border-border">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={(d) => {
                          setDate(d);
                          setSlot(null);
                        }}
                        disabled={{ before: today }}
                        startMonth={today}
                        className="bg-transparent p-3 [--cell-size:2.35rem] sm:p-4 sm:[--cell-size:2.6rem]"
                      />
                    </div>
                  </div>

                  <div>
                    <Eyebrow index="03">Choose a time</Eyebrow>
                    <p className="mt-6 flex items-center gap-2 text-xs text-muted-foreground">
                      <CalendarDays size={14} className="text-gold-deep" />
                      {date ? fmtDate(date) : "Select a date first"}
                    </p>
                    <div className="mt-4 grid grid-cols-3 gap-2">
                      {SLOTS.map((s) => {
                        const off = !date || isPastSlot(s);
                        return (
                          <button
                            key={s}
                            type="button"
                            disabled={off}
                            onClick={() => setSlot(s)}
                            className={`whitespace-nowrap border px-1 py-3 text-[0.7rem] tracking-[0.04em] transition-colors duration-300 disabled:cursor-not-allowed disabled:opacity-35 ${
                              slot === s ? "border-gold bg-gold text-onyx" : "border-border hover:border-forest"
                            }`}
                          >
                            {s}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>

              {/* ── Right: details ── */}
              <div>
                <Eyebrow index="04">Your details</Eyebrow>
                <div className="mt-6 flex flex-col gap-8">
                  <label className="block">
                    <span className="eyebrow">Full name</span>
                    <input required name="name" autoComplete="name" placeholder="Your full name" className={fieldClass} />
                  </label>
                  <div className="grid gap-8 sm:grid-cols-2">
                    <label className="block">
                      <span className="eyebrow">Phone / WhatsApp</span>
                      <input required name="phone" type="tel" autoComplete="tel" placeholder="+92 300 0000000" className={fieldClass} />
                    </label>
                    <label className="block">
                      <span className="eyebrow">Email (optional)</span>
                      <input name="email" type="email" autoComplete="email" placeholder="you@example.com" className={fieldClass} />
                    </label>
                  </div>
                  <label className="block">
                    <span className="eyebrow">Interested in</span>
                    <select name="interest" className={fieldClass} defaultValue="">
                      <option value="">Select an option</option>
                      {INTERESTS.map((i) => (
                        <option key={i} value={i}>
                          {i}
                        </option>
                      ))}
                    </select>
                  </label>
                  <label className="block">
                    <span className="eyebrow">Notes (optional)</span>
                    <textarea name="notes" rows={3} placeholder="Anything we should know before your visit or call" className={`${fieldClass} resize-none`} />
                  </label>

                  <div className="border-t border-border pt-6">
                    <p className="flex items-center gap-2 text-sm text-foreground/80">
                      <Clock size={15} className="text-gold-deep" />
                      {date && slot
                        ? `${kind === "visit" ? "Site visit" : "Phone call"} · ${fmtDate(date)} · ${slot}`
                        : "Choose a date and time to continue."}
                    </p>
                    {error && <p className="mt-3 text-sm text-destructive">{error}</p>}
                    <button
                      type="submit"
                      className="brand-hover mt-8 border border-foreground px-10 py-5 text-[0.68rem] uppercase tracking-[0.28em] transition-colors duration-500 hover:border-gold hover:bg-gold hover:text-onyx"
                    >
                      {kind === "visit" ? "Book site visit" : "Schedule call"}
                    </button>
                  </div>
                </div>
              </div>
            </form>
          )}
        </Shell>
      </section>
    </>
  );
}
