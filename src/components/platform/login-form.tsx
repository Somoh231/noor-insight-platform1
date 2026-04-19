"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { buttonClassName } from "@/lib/button-classes";
import { cn } from "@/lib/utils";

/**
 * Prototype: credentials auth is disabled so the app does not depend on NextAuth,
 * SessionProvider, or env secrets for the public marketing site.
 */
export function LoginForm() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") ?? "/platform/dashboard";

  return (
    <div className="mx-auto w-full max-w-md">
      <div className="rounded-2xl border border-navy/[0.08] bg-panel/90 p-8 shadow-soft ring-1 ring-navy/[0.04] motion-safe:transition-shadow motion-safe:duration-300 sm:p-9">
        <div className="flex items-center gap-3">
          <span className="h-px w-10 bg-gold/70" aria-hidden />
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-gold">
            Prototype mode
          </p>
        </div>
        <h1 className="mt-5 text-2xl font-semibold tracking-tight text-navy">
          Sign-in is temporarily disabled
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-dgray/75">
          The operations console is open without authentication for this build. Use the button
          below to continue; credentials and NextAuth can be turned back on later for production.
        </p>
        <Link
          href={callbackUrl}
          className={cn(buttonClassName("primary"), "mt-8 inline-flex w-full")}
        >
          Open operations console
        </Link>
      </div>
    </div>
  );
}
