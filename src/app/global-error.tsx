"use client";

import { Inter, JetBrains_Mono, Source_Serif_4 } from "next/font/google";
import { useEffect } from "react";
import { cn } from "@/lib/utils";
import "@/styles/tokens.css";
import "./globals.css";

const sans = Inter({ subsets: ["latin"], display: "swap", variable: "--font-sans" });
const serif = Source_Serif_4({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-serif",
  weight: ["400", "500"],
});
const mono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
  weight: ["400", "500"],
});

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.error(error);
  }, [error]);

  return (
    <html
      lang="en"
      className={cn(sans.variable, serif.variable, mono.variable)}
    >
      <body className="flex min-h-dvh items-center justify-center bg-page p-8 text-ink">
        <div className="max-w-md text-center">
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-3">
            Application error
          </p>
          <h1 className="mt-3 font-serif text-2xl font-normal leading-[1.25] tracking-[-0.005em] text-ink">
            Noor Insight hit an error while rendering.
          </h1>
          <p className="mt-4 text-body leading-[1.7] text-ink-2">
            Please reload the page. If the error persists, contact us.
          </p>
          <button
            type="button"
            onClick={() => reset()}
            className="mt-8 inline-flex items-center gap-2 rounded-control border border-ink bg-ink px-5 py-3 text-[14px] font-medium text-page transition-colors hover:bg-ink-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            Reload
          </button>
        </div>
      </body>
    </html>
  );
}
