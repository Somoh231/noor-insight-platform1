"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { NavbarBrand } from "@/components/layout/navbar-brand";
import {
  EnterpriseMegaNavDesktop,
  EnterpriseMegaNavMobileAccordion,
} from "@/components/layout/enterprise-mega-nav";
import { EMAIL_BRIEFING } from "@/lib/constants";
import { cn } from "@/lib/utils";

const briefingMailto = `mailto:${EMAIL_BRIEFING}?subject=${encodeURIComponent("Noor Insight: briefing request")}`;

/** 80px — within 76–84px enterprise nav band */
const BAR_HEIGHT = "h-20";

const contactLinkClass = cn(
  "hidden items-center rounded-md px-2.5 py-2 text-[13px] font-medium no-underline transition-colors md:inline-flex",
  "text-dgray/90 hover:bg-navy/[0.04] hover:text-navy",
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy/25"
);

const platformAccessClass = cn(
  "hidden items-center justify-center rounded-lg px-3 py-2 text-[13px] font-semibold no-underline transition-[background-color,box-shadow,transform,colors] motion-safe:duration-200 motion-safe:ease-out md:inline-flex",
  "bg-navy text-lgray shadow-sm shadow-navy/15 ring-1 ring-inset ring-white/[0.12]",
  "hover:bg-navy/[0.92] hover:shadow-md hover:ring-white/15",
  "active:scale-[0.98] motion-reduce:active:scale-100",
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy/35"
);

const requestBriefingClass = cn(
  "hidden items-center justify-center rounded-lg border border-navy/15 bg-lgray px-3 py-2 text-[13px] font-semibold text-navy no-underline transition-colors motion-safe:duration-200 md:inline-flex",
  "hover:border-navy/25 hover:bg-panel",
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy/25"
);

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [menuOpen]);

  const contactActive = pathname === "/contact";

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full overflow-visible bg-white text-navy",
        BAR_HEIGHT,
        "border-b border-navy/10",
        scrolled && "shadow-card"
      )}
    >
      <div
        className={cn(
          "mx-auto flex h-full w-full max-w-6xl items-stretch px-3 sm:px-6 lg:px-8",
          "justify-between gap-2 sm:gap-3 md:gap-4"
        )}
      >
        <div className="flex min-w-0 shrink-0 items-center">
          <NavbarBrand />
        </div>

        <nav
          className="mx-1 hidden min-w-0 flex-1 items-center justify-center gap-0 md:flex lg:mx-2 lg:gap-0.5"
          aria-label="Primary"
        >
          <EnterpriseMegaNavDesktop variant="solutions" pathname={pathname} />
          <EnterpriseMegaNavDesktop variant="useCases" pathname={pathname} />
          <EnterpriseMegaNavDesktop variant="about" pathname={pathname} />
        </nav>

        <div className="flex shrink-0 items-center gap-1.5 sm:gap-2 md:gap-2.5">
          <Link
            href="/contact"
            aria-current={contactActive ? "page" : undefined}
            className={cn(contactLinkClass, contactActive && "text-navy")}
          >
            Contact
          </Link>
          <Link href="/platform/login" className={platformAccessClass}>
            Platform Access
          </Link>
          <a href={briefingMailto} className={requestBriefingClass}>
            Request briefing
          </a>

          <button
            type="button"
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-navy/12 bg-white text-navy transition-colors hover:bg-navy/[0.03] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy/25 md:hidden"
            aria-expanded={menuOpen}
            aria-controls="site-mobile-nav"
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span className="sr-only">{menuOpen ? "Close menu" : "Open menu"}</span>
            <span className="flex flex-col gap-1.5" aria-hidden>
              <span
                className={cn(
                  "h-0.5 w-5 rounded-full bg-navy transition-transform",
                  menuOpen && "translate-y-2 rotate-45"
                )}
              />
              <span
                className={cn(
                  "h-0.5 w-5 rounded-full bg-navy transition-opacity",
                  menuOpen && "opacity-0"
                )}
              />
              <span
                className={cn(
                  "h-0.5 w-5 rounded-full bg-navy transition-transform",
                  menuOpen && "-translate-y-2 -rotate-45"
                )}
              />
            </span>
          </button>
        </div>
      </div>

      <div
        className={cn(
          "fixed inset-0 top-20 z-40 bg-navy/35 transition-opacity md:hidden",
          menuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        )}
        aria-hidden={!menuOpen}
        onClick={() => setMenuOpen(false)}
      />

      <div
        id="site-mobile-nav"
        className={cn(
          "fixed inset-x-0 top-20 z-50 max-h-[calc(100dvh-5rem)] overflow-y-auto border-b border-navy/10 bg-white shadow-lg transition-[opacity,visibility] md:hidden",
          menuOpen ? "visible opacity-100" : "pointer-events-none invisible opacity-0"
        )}
        aria-hidden={!menuOpen}
      >
        <nav className="mx-auto max-w-6xl px-4 py-4" aria-label="Mobile primary">
          <ul className="m-0 flex list-none flex-col gap-0.5 p-0">
            <EnterpriseMegaNavMobileAccordion
              variant="solutions"
              pathname={pathname}
              onNavigate={() => setMenuOpen(false)}
            />
            <EnterpriseMegaNavMobileAccordion
              variant="useCases"
              pathname={pathname}
              onNavigate={() => setMenuOpen(false)}
            />
            <EnterpriseMegaNavMobileAccordion
              variant="about"
              pathname={pathname}
              onNavigate={() => setMenuOpen(false)}
            />
            <li>
              <Link
                href="/contact"
                aria-current={contactActive ? "page" : undefined}
                className={cn(
                  "block rounded-lg px-3 py-3 text-[15px] font-semibold no-underline transition-colors",
                  "text-navy hover:bg-navy/[0.04]",
                  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy/25",
                  contactActive && "bg-navy/[0.04]"
                )}
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>

          <div className="mt-4 flex flex-col gap-2 border-t border-navy/[0.08] pt-4">
            <Link
              href="/platform/login"
              className={cn(
                "flex w-full items-center justify-center rounded-lg px-4 py-3 text-[15px] font-semibold no-underline",
                "bg-navy text-lgray shadow-md ring-1 ring-inset ring-white/[0.12]",
                "transition-[background-color,box-shadow] hover:bg-navy/[0.92] hover:shadow-lg",
                "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy/35"
              )}
              onClick={() => setMenuOpen(false)}
            >
              Platform Access
            </Link>
            <a
              href={briefingMailto}
              className={cn(
                "flex w-full items-center justify-center rounded-lg border border-navy/15 bg-lgray px-4 py-3 text-[15px] font-semibold text-navy no-underline",
                "transition-colors hover:border-navy/25 hover:bg-panel",
                "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy/30"
              )}
              onClick={() => setMenuOpen(false)}
            >
              Request briefing
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
