// src/components/navigation/Navbar.tsx
import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { ChevronDown, Menu, X, Phone, MessageCircle, CalendarDays, Mail } from "lucide-react";
import { navItems, site } from "@/data/navigation";
import logo from "@/../public/logo.jpg";

/** Split "/path#hash" into router Link props. */
function linkTarget(href: string): { to: string; hash?: string } {
  const [to = "/", hash] = href.split("#");
  return hash ? { to, hash } : { to };
}

export function Navbar() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // 1. SCROLL HANDLING: Just detect if we are scrolled down
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 100);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  // 2. MOBILE MENU: Prevent body scroll when open
  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  // 3. ACTIVE TAB LOGIC: Pure and simple
  // If on "/" -> Home. If on "/contact" -> Contact. Otherwise match navItems.
  const activeTab = 
    pathname === "/" || pathname === "" ? "hero" 
    : pathname.startsWith("/contact") ? "contact" 
    : navItems.find((n) => pathname === n.href || pathname.startsWith(n.href + "/"))?.target ?? "";

  const tel = `tel:${site.phone.replace(/[^\d+]/g, "")}`;
  
  const actions = [
    { label: "WhatsApp", href: "https://wa.me/923111555559", icon: MessageCircle, external: true },
    { label: "Call us", href: tel, icon: Phone, external: true },
    { label: "Get in touch", href: "/contact", icon: Mail, external: false },
    { label: "Schedule call", href: "/book#call", icon: CalendarDays, external: false },
  ];

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-[100] text-ivory">
        
        {/* TOP BAR: Contact Actions */}
        <div className={`border-b border-ivory/10 bg-forest/90 backdrop-blur-xl transition-all duration-500 ${scrolled ? "py-1" : "py-2"}`}>
          <div className="mx-auto flex max-w-[86rem] items-center justify-between gap-3 px-4 text-[0.6rem] uppercase tracking-[0.14em] md:px-10">
            <span className="hidden text-gold lg:block">Takmeel Square · DHA Bahawalpur · UAN +92 311 1555559</span>
            <div className="flex w-full items-center justify-between gap-2 lg:w-auto lg:justify-end lg:gap-6">
              {actions.map((action) => {
                const Icon = action.icon;
                if (action.external) {
                  return (
                    <a key={action.label} href={action.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:text-gold">
                      <Icon size={13}/><span className="hidden sm:inline">{action.label}</span>
                    </a>
                  );
                }
                return (
                  <Link key={action.label} {...linkTarget(action.href)} className="inline-flex items-center gap-1.5 hover:text-gold">
                    <Icon size={13}/><span className="hidden sm:inline">{action.label}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        {/* MAIN NAVBAR */}
        <div className={`px-3 transition-all duration-500 ${scrolled ? "pt-2" : "pt-4"}`}>
          <div className="mx-auto flex w-full max-w-[82rem] items-center justify-between gap-2 rounded-full border border-ivory/20 bg-forest/45 p-2 shadow-2xl backdrop-blur-md">
            
            {/* Logo */}
            <Link to="/" onClick={() => setOpen(false)} className="flex shrink-0 items-center gap-2" aria-label="Home">
              <img src={logo} alt="Takmeel Square" className="h-12 w-12 rounded-full object-cover"/>
              <span className="hidden text-xs uppercase tracking-[0.18em] text-gold sm:block xl:hidden">Takmeel Square</span>
            </Link>
            
            {/* Desktop Navigation */}
            <nav className="relative hidden items-center lg:flex" aria-label="Primary">
              {navItems.map((item) => {
                const isActive = activeTab === item.target;
                return (
                  <div key={item.target} className="group relative">
                    <Link 
                      to={item.href} 
                      activeOptions={{ exact: true }} 
                      className={`relative flex items-center gap-1 rounded-full px-4 py-3 text-sm transition-colors duration-300 ${
                        isActive ? "text-gold font-medium" : "text-ivory hover:text-gold"
                      }`}
                    >
                      {item.label}
                      {item.children && <ChevronDown size={12} className={`transition-transform ${isActive ? "text-gold" : ""} group-hover:rotate-180`}/>}
                      
                      {/* Active Underline Indicator */}
                      {isActive && (
                        <span className="absolute bottom-1 left-4 right-4 h-0.5 rounded-full bg-gold" />
                      )}
                    </Link>
                    
                    {/* Dropdown Menu */}
                    {item.children && (
                      <div className="invisible absolute left-1/2 top-[100%] min-w-48 -translate-x-1/2 translate-y-2 rounded-md border border-gold/20 bg-forest/75 p-2 opacity-0 shadow-xl backdrop-blur-xl transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                        {item.children.map((sub) => (
                          <Link key={sub.label} {...linkTarget(sub.href)} className="block rounded px-4 py-3 text-xs tracking-[0.08em] text-ivory/80 hover:bg-gold/15 hover:text-gold">
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>
            
            {/* Action Button */}
            <Link to="/contact" className="brand-hover hidden rounded-full border border-gold px-5 py-3 text-sm uppercase tracking-[0.14em] text-gold lg:inline-flex">
              Enquire now
            </Link>
            
            {/* Mobile Menu Toggle */}
            <button type="button" onClick={() => setOpen(true)} aria-label="Open menu" className="flex h-11 w-11 items-center justify-center rounded-full border border-ivory/20 lg:hidden">
              <Menu size={20}/>
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE MENU OVERLAY */}
      <div className={`fixed inset-0 z-[110] overflow-y-auto bg-forest p-6 text-ivory transition-[opacity,visibility] duration-300 lg:hidden ${open ? "visible opacity-100" : "invisible opacity-0"}`}>
        <div className="flex items-center justify-between">
          <img src={logo} alt="Takmeel Square" className="h-16 w-16 object-cover"/>
          <button onClick={() => setOpen(false)} aria-label="Close menu"><X size={28}/></button>
        </div>
        
        <nav className="mt-10 flex flex-col gap-1" aria-label="Mobile navigation">
          {navItems.map((item) => {
            const isActive = activeTab === item.target;
            return (
              <div key={item.target} className="border-b border-ivory/15 py-3">
                <Link 
                  to={item.href} 
                  onClick={() => setOpen(false)} 
                  className={`display block text-3xl ${isActive ? "text-gold" : "text-ivory"}`}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="mt-2 flex flex-wrap gap-x-5 gap-y-2">
                    {item.children.map((sub) => (
                      <Link key={sub.label} {...linkTarget(sub.href)} onClick={() => setOpen(false)} className="text-xs uppercase tracking-[0.1em] text-ivory/60">
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </nav>
      </div>
    </>
  );
}