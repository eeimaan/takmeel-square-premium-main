// src/routes/__root.tsx
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
  type ErrorComponentProps,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="surface-dark flex min-h-screen items-center px-6 md:px-10 lg:px-16">
      <div className="mx-auto w-full max-w-[86rem]">
        <span className="eyebrow text-gold">Error 404 · Page not found</span>
        <h1 className="display mt-6 max-w-3xl text-[clamp(2.8rem,8vw,7rem)] leading-[1.02]">
          This address <em className="text-gold">isn't on the map.</em>
        </h1>
        <p className="mt-6 max-w-md text-base leading-relaxed text-ivory/65">
          The page you're looking for may have moved or no longer exists. Explore Takmeel Square from one of these instead.
        </p>
        <div className="mt-12 flex flex-wrap gap-3">
          <Link to="/" className="brand-hover rounded-full bg-gold px-8 py-4 text-[0.68rem] uppercase tracking-[0.26em] text-onyx">
            Back to home
          </Link>
          {[
            { to: "/projects", label: "Projects" },
            { to: "/tour", label: "Virtual tour" },
            { to: "/contact", label: "Contact" },
          ].map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="brand-hover brand-hover-outline rounded-full border border-ivory/30 px-8 py-4 text-[0.68rem] uppercase tracking-[0.26em] text-ivory hover:border-gold"
            >
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: ErrorComponentProps) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error instanceof Error ? error : new Error(String(error)), { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Takmeel Square — DHA Bahawalpur" },
      { name: "author", content: "Takmeel Square" },
      { name: "theme-color", content: "#15322d" },
      { name: "format-detection", content: "telephone=yes" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500&family=Jost:wght@300;400;500&display=swap",
      },
      { rel: "icon", href: "/favicon.png", type: "image/png" },
      { rel: "apple-touch-icon", href: "/favicon.png" },
      { rel: "preconnect", href: "https://res.cloudinary.com", crossOrigin: "anonymous" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en-PK">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  useEffect(() => {
    const origin = (event: PointerEvent) => {
      if (!(event.target instanceof Element)) return;
      const button = event.target.closest<HTMLElement>(".brand-hover");
      if (!button) return;
      const rect = button.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      button.style.setProperty("--hover-x", `${x}px`);
      button.style.setProperty("--hover-y", `${y}px`);
      button.style.setProperty("--hover-reach", `${Math.ceil(Math.hypot(Math.max(x, rect.width - x), Math.max(y, rect.height - y))) + 2}px`);
    };
    document.addEventListener("pointerover", origin);
    return () => document.removeEventListener("pointerover", origin);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
