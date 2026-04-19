"use client";

import Link from "next/link";
import { useCallback, useState } from "react";
import { BRAND_WORDMARK } from "@/lib/constants";
import { cn } from "@/lib/utils";

const LOGO_SRC = "/brand/noor-insight-logo-nav-transparent.png";

/**
 * Home link: logo in a fixed-height box (native img so layout never honors intrinsic 583px width).
 * Falls back to typographic wordmark if the asset fails to load.
 */
export function NavbarBrand({ className }: { className?: string }) {
  const [useWordmark, setUseWordmark] = useState(false);
  const onImgError = useCallback(() => setUseWordmark(true), []);

  const [a, b] = BRAND_WORDMARK.split(/\s+/);

  return (
    <Link
      href="/"
      aria-label={`${BRAND_WORDMARK}, home`}
      className={cn(
        "flex shrink-0 items-center text-navy no-underline outline-none focus-visible:ring-2 focus-visible:ring-navy/25 focus-visible:ring-offset-2 focus-visible:ring-offset-white",
        "pl-0.5 pr-1 sm:pl-0",
        className
      )}
    >
      {!useWordmark ? (
        <span className="relative inline-block h-9 w-[96px] max-w-[40vw] shrink-0 overflow-hidden md:h-[36px] md:w-[102px] md:max-w-[120px]">
          {/* Native img: avoids Next/Image layout edge cases in constrained nav bars */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={LOGO_SRC}
            alt=""
            width={583}
            height={233}
            loading="eager"
            decoding="async"
            fetchPriority="high"
            onError={onImgError}
            className="pointer-events-none absolute left-0 top-0 h-full w-full object-contain object-left"
          />
        </span>
      ) : (
        <span className="flex flex-col leading-[1.05] antialiased [text-rendering:geometricPrecision]">
          <span className="text-[1.05rem] font-bold tracking-[-0.04em] text-navy sm:text-[1.125rem]">
            {a}
          </span>
          <span className="text-[0.6rem] font-semibold uppercase tracking-[0.3em] text-gold sm:text-[0.625rem]">
            {b}
          </span>
        </span>
      )}
    </Link>
  );
}
