// src/components/footer/Footer.tsx
import { useState, type FormEvent } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Facebook, Instagram, Linkedin, Youtube, MessageCircle, Phone, Mail } from "lucide-react";
import { Shell } from "@/components/sections/Section";
import { Logo } from "@/components/brand/Logo";
import { offices, site } from "@/data/navigation";
import { projects } from "@/data/projects";

const socialIcons: Record<string, typeof Instagram> = {
  Instagram,
  LinkedIn: Linkedin,
  Facebook,
  YouTube: Youtube,
};

/** Column groups — Damac-style multi-column footer, Takmeel content. */
const columns: { title: string; links: { label: string; to: string; hash?: string }[] }[] = [
  {
    title: "Why Takmeel",
    links: [
      { label: "About Takmeel Square", to: "/about" },
      { label: "Our Leadership", to: "/about", hash: "leadership" },
      { label: "Location", to: "/location" },
      { label: "Contact Us", to: "/contact" },
    ],
  },
  {
    title: "Takmeel Bazaar",
    links: [
      { label: "New Rangeela Bazaar", to: "/tour", hash: "tour-bazaar" },
      { label: "New Sarafa Bazaar", to: "/tour", hash: "tour-bazaar" },
      { label: "New Tech Bazaar", to: "/tour", hash: "tour-bazaar" },
      { label: "Rooftop Restaurants", to: "/tour", hash: "tour-restaurants" },
    ],
  },
  {
    title: "Featured Projects",
    links: projects.map((p) => ({ label: p.name, to: "/projects", hash: p.id })),
  },
  {
    title: "Experience",
    links: [
      { label: "Virtual Tour", to: "/tour" },
      { label: "Takmeel Homes Tour", to: "/tour", hash: "tour-house" },
      { label: "Location", to: "/location" },
      { label: "Book a Visit", to: "/book", hash: "visit" },
    ],
  },
  {
    title: "Takmeel Assist",
    links: [
      { label: "Contact Us", to: "/contact" },
      { label: "Schedule Call", to: "/book", hash: "call" },
    ],
  },
];

const legal = [
  { label: "Privacy Policy", to: "/privacy-policy" },
  { label: "Terms & Conditions", to: "/terms" },
  { label: "Disclaimer", to: "/disclaimer" },
];

export function Footer() {
  const [subscribed, setSubscribed] = useState(false);

  const onSubscribe = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubscribed(true);
  };

  const tel = `tel:${site.phone.replace(/[^\d+]/g, "")}`;

  return (
    <footer className="relative overflow-hidden surface-dark">
      {/* faint vertical rules, matches site's grid motif */}
      <div aria-hidden className="pointer-events-none absolute inset-0 opacity-[0.05]">
        {[20, 40, 60, 80].map((x) => (
          <span key={x} className="absolute top-0 h-full w-px bg-ivory" style={{ left: `${x}%` }} />
        ))}
      </div>

      {/* ── Top strip: logo + socials + newsletter ─────────────────────── */}
      <Shell className="relative border-b border-ivory/15 py-12 md:py-14">
        <div className="grid gap-10 lg:grid-cols-[auto_1fr_minmax(0,32rem)] lg:items-center lg:gap-16">
          <Link to="/" aria-label="Takmeel Square home" className="flex items-center gap-3">
            <Logo size={56} />
            <span className="display text-2xl tracking-[0.06em] text-ivory">
              TAKMEEL <span className="text-gold">SQUARE</span>
            </span>
          </Link>

          <div className="flex flex-wrap gap-3 lg:justify-start">
            {site.socials.map((s) => {
              const Icon = socialIcons[s.label] ?? Instagram;
              return (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-ivory/25 text-ivory/70 transition-colors hover:border-gold hover:text-gold"
                >
                  <Icon size={17} />
                </a>
              );
            })}
            <a
              href="https://wa.me/923111555559"
              aria-label="WhatsApp"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-ivory/25 text-ivory/70 transition-colors hover:border-gold hover:text-gold"
            >
              <MessageCircle size={17} />
            </a>
          </div>

          <div>
            <p className="text-sm text-ivory/80">Sign up for our exclusive newsletter</p>
            {subscribed ? (
              <p className="mt-4 text-sm text-gold">Thank you — you're on the list.</p>
            ) : (
              <form onSubmit={onSubscribe} className="mt-4">
                <div className="flex items-center rounded-full border border-ivory/25 bg-ivory/5 focus-within:border-gold">
                  <input
                    required
                    type="email"
                    name="email"
                    placeholder="Email"
                    aria-label="Email"
                    className="w-full bg-transparent px-5 py-3 text-sm text-ivory placeholder:text-ivory/45 outline-none"
                  />
                  <button
                    type="submit"
                    className="brand-hover m-1 rounded-full bg-gold px-5 py-2.5 text-[0.65rem] uppercase tracking-[0.22em] text-forest"
                  >
                    Submit
                  </button>
                </div>
                <p className="mt-3 text-[0.68rem] text-ivory/45">
                  By signing up you accept our{" "}
                  <Link to="/terms" className="link-underline text-ivory/70">
                    terms and conditions
                  </Link>
                  .
                </p>
              </form>
            )}
          </div>
        </div>
      </Shell>

      {/* ── Middle: multi-column link groups ───────────────────────────── */}
      <Shell className="relative border-b border-ivory/15 py-14 md:py-16">
        <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-6">
          {columns.map((col) => (
            <div key={col.title}>
              <p className="eyebrow mb-6 text-gold">{col.title}</p>
              <nav className="flex flex-col gap-3" aria-label={col.title}>
                {col.links.map((l, i) => (
                  <Link
                    key={`${col.title}-${l.label}-${i}`}
                    to={l.to}
                    {...(l.hash ? { hash: l.hash } : {})}
                    className="link-underline w-fit text-sm text-ivory/70 transition-colors hover:text-gold"
                  >
                    {l.label}
                  </Link>
                ))}
              </nav>
            </div>
          ))}

          {/* right-most column: offices */}
          <div className="flex flex-col">
            <p className="eyebrow mb-6 text-gold">Our Offices</p>
            <div className="flex flex-col gap-4">
              {offices.map((o) => (
                <div key={o.label}>
                  <p className="text-[0.62rem] uppercase tracking-[0.18em] text-ivory/45">{o.label}</p>
                  <p className="mt-1 max-w-[16rem] text-sm leading-relaxed text-ivory/70">{o.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Shell>

      {/* ── Contact strip ──────────────────────────────────────────────── */}
      <Shell className="relative border-b border-ivory/15 py-8">
        <div className="flex flex-col gap-5 text-sm text-ivory/70 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
            <a href={`mailto:${site.email}`} className="inline-flex items-center gap-2 hover:text-gold">
              <Mail size={15} /> {site.email}
            </a>
            <a href={tel} className="inline-flex items-center gap-2 hover:text-gold">
              <Phone size={15} /> {site.phone}
            </a>
          </div>
          <a
            href={site.locationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gold"
          >
            Directions <ArrowUpRight size={14} />
          </a>
        </div>
      </Shell>

      {/* ── Legal row ──────────────────────────────────────────────────── */}
      <Shell className="relative">
        <div className="flex flex-col justify-between gap-4 py-7 text-[0.68rem] uppercase tracking-[0.12em] text-ivory/45 md:flex-row md:items-center">
          <nav className="flex flex-wrap gap-x-6 gap-y-2" aria-label="Legal">
            {legal.map((l) => (
              <Link key={l.to} to={l.to} className="transition-colors hover:text-gold">
                {l.label}
              </Link>
            ))}
          </nav>
          <span>© {new Date().getFullYear()} Takmeel Square. All rights reserved.</span>
        </div>
      </Shell>

      {/* ── Big wordmark ───────────────────────────────────────────────── */}
      {/* <div aria-hidden className="overflow-hidden border-t border-ivory/10 py-5">
        <p className="display whitespace-nowrap text-center text-[clamp(2.2rem,10vw,10rem)] leading-none tracking-[0.04em]">
          TAKMEEL <span className="text-gold">SQUARE</span>
        </p>
      </div> */}
    </footer>
  );
}