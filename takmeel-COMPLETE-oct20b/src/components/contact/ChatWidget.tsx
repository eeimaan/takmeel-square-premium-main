// src/components/contact/ChatWidget.tsx
import { useEffect, useState } from "react";
import { MessageCircle, X, ArrowLeft, Check } from "lucide-react";

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [topic, setTopic] = useState<"Sales" | "Customer Relations" | null>(null);
  const [sent, setSent] = useState(false);
  useEffect(() => { if (!open) return; const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); }; window.addEventListener("keydown", onKey); return () => window.removeEventListener("keydown", onKey); }, [open]);
  return <div className="fixed bottom-5 right-5 z-[65] sm:bottom-7 sm:right-7">
    {open && <div role="dialog" aria-label="Chat with Takmeel" className="modal-in mb-3 flex max-h-[min(76vh,600px)] w-[min(88vw,390px)] flex-col overflow-hidden border border-gold/30 bg-forest text-ivory shadow-2xl">
      <div className="flex items-center justify-between border-b border-ivory/15 px-6 py-5"><span className="display text-2xl">Takmeel Square</span><button type="button" aria-label="Close chat" onClick={() => setOpen(false)}><X size={20}/></button></div>
      <div className="overflow-y-auto p-6">
        {sent ? <div className="py-10 text-center"><Check className="mx-auto mb-5 text-gold" size={32}/><h3 className="display text-3xl">Thank you.</h3><p className="mt-3 text-sm text-ivory/70">This is a preview form. No message was sent.</p><button type="button" onClick={() => { setSent(false); setTopic(null); }} className="mt-5 text-sm text-gold">Start again</button></div>
        : topic ? <><button type="button" onClick={() => setTopic(null)} className="mb-5 flex items-center gap-2 text-xs text-gold"><ArrowLeft size={14}/> Back</button><h3 className="display text-3xl">{topic}</h3><p className="mt-2 text-sm text-ivory/65">Tell us how we can help.</p><form className="mt-5 space-y-3" onSubmit={(e) => { e.preventDefault(); setSent(true); }}><input required name="name" placeholder="Full name" aria-label="Full name" className="w-full border border-ivory/25 bg-transparent px-4 py-3 text-sm text-ivory placeholder:text-ivory/55"/><input required name="phone" type="tel" placeholder="Phone number" aria-label="Phone number" className="w-full border border-ivory/25 bg-transparent px-4 py-3 text-sm text-ivory placeholder:text-ivory/55"/><input name="email" type="email" placeholder="Email" aria-label="Email" className="w-full border border-ivory/25 bg-transparent px-4 py-3 text-sm text-ivory placeholder:text-ivory/55"/><textarea name="message" placeholder="Your message" aria-label="Your message" rows={3} className="w-full resize-none border border-ivory/25 bg-transparent px-4 py-3 text-sm text-ivory placeholder:text-ivory/55"/><button type="submit" className="brand-hover w-full rounded-full bg-gold py-3 text-xs uppercase tracking-[0.18em] text-forest">Submit</button></form></>
        : <><span className="eyebrow text-gold">Welcome to Takmeel</span><h3 className="display mt-3 text-3xl">The largest commercial hub of South Punjab</h3><p className="mt-6 text-sm text-ivory/70">Please choose a topic to get started</p><div className="mt-5 grid gap-2">{(["Sales", "Customer Relations"] as const).map((t) => <button key={t} type="button" onClick={() => setTopic(t)} className="brand-hover border border-gold/40 px-5 py-4 text-left text-sm text-gold">{t} →</button>)}</div></>}
      </div>
    </div>}
    <button type="button" onClick={() => setOpen(!open)} aria-label={open ? "Close chat" : "Open chat"} className="brand-hover ml-auto flex h-14 w-14 items-center justify-center rounded-full bg-gold text-forest shadow-xl">{open ? <X size={22}/> : <MessageCircle size={24}/>}</button>
  </div>;
}
