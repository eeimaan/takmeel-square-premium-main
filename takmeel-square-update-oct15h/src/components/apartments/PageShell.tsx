// src/components/apartments/PageShell.tsx
import type { ReactNode } from "react";
import { Navbar } from "@/components/navigation/Navbar";
import { ChatWidget } from "@/components/contact/ChatWidget";
import { Footer } from "@/components/footer/Footer";
import { useSmoothScroll } from "@/lib/animations/useSmoothScroll";

export function PageShell({ children }: { children: ReactNode }) {
  useSmoothScroll();
  return (
    <div className="w-full overflow-x-hidden">
      <Navbar />
      <main>{children}</main>
      <Footer />
      <ChatWidget />
    </div>
  );
}
