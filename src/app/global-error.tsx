"use client";

import { Inter } from "next/font/google";
import { useEffect } from "react";
import { cn } from "@/lib/utils";
import "@/styles/tokens.css";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  adjustFontFallback: true,
});

/**
 * Replaces the root layout when active — it must import the same design CSS as `layout.tsx`
 * or the app can render with class names but no Tailwind/tokens (looks “raw”).
 */
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html lang="en" className={inter.variable}>
      <body
        className={cn(
          "antialiased",
          inter.className,
          "flex min-h-dvh items-center justify-center bg-lgray p-8 text-dgray"
        )}
      >
        <div className="max-w-md text-center">
          <h1 className="text-xl font-semibold tracking-tight text-navy">Application error</h1>
          <p className="mt-3 text-sm leading-relaxed text-dgray/80">
            Noor Insight hit a critical error while rendering. Please reload the page.
          </p>
          <button
            type="button"
            onClick={() => reset()}
            className="mt-6 inline-flex rounded-lg border border-navy/20 bg-navy px-5 py-2.5 text-sm font-semibold text-lgray shadow-sm transition hover:bg-navy/95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy/35"
          >
            Reload
          </button>
        </div>
      </body>
    </html>
  );
}
