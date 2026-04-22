"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { BrandLogo } from "@/components/brand/brand-logo";
import { cn } from "@/lib/utils";

const primaryLinks = [
  { href: "/solutions", label: "Solutions" },
  { href: "/use-cases", label: "Use cases" },
  { href: "/about", label: "About" },
] as const;

function isActive(pathname: string | null, href: string) {
  if (!pathname) return false;
  if (pathname === href) return true;
  return pathname.startsWith(`${href}/`);
}

/**
 * Thin, page-colored nav. 72px tall, hairline bottom rule. No blur,
 * no shadow-on-scroll, no mega menus. Becomes sticky after the first
 * few hundred pixels of scroll per the design brief.
 */
export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  useEffect(() => {
    closeMenu();
  }, [pathname, closeMenu]);

  useEffect(() => {
    if (!menuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-line bg-page">
      <div className="mx-auto flex h-[72px] w-full max-w-content items-center justify-between gap-6 px-6 sm:px-8 lg:px-outer">
        <BrandLogo size="md" />

        <nav
          className="hidden items-center gap-8 md:flex"
          aria-label="Primary"
        >
          {primaryLinks.map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "text-small no-underline transition-colors duration-quick",
                  active ? "text-ink" : "text-ink-2 hover:text-ink"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="/contact"
            className="hidden text-small font-medium text-ink no-underline underline-offset-[6px] decoration-accent decoration-1 hover:underline md:inline-flex"
          >
            Request briefing <span aria-hidden className="ml-1">→</span>
          </Link>
          <button
            type="button"
            aria-expanded={menuOpen}
            aria-controls="site-mobile-nav"
            className="inline-flex h-10 w-10 items-center justify-center rounded-control border border-line text-ink hover:border-line-strong focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent md:hidden"
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span className="sr-only">{menuOpen ? "Close menu" : "Open menu"}</span>
            <span aria-hidden className="flex flex-col gap-[5px]">
              <span
                className={cn(
                  "h-px w-5 bg-ink transition-transform",
                  menuOpen && "translate-y-[6px] rotate-45"
                )}
              />
              <span
                className={cn(
                  "h-px w-5 bg-ink transition-opacity",
                  menuOpen && "opacity-0"
                )}
              />
              <span
                className={cn(
                  "h-px w-5 bg-ink transition-transform",
                  menuOpen && "-translate-y-[6px] -rotate-45"
                )}
              />
            </span>
          </button>
        </div>
      </div>

      <div
        id="site-mobile-nav"
        className={cn(
          "fixed inset-x-0 top-[72px] z-40 border-b border-line bg-page transition-opacity duration-quick md:hidden",
          menuOpen ? "opacity-100" : "pointer-events-none opacity-0"
        )}
        aria-hidden={!menuOpen}
      >
        <nav className="mx-auto max-w-content px-6 py-6 sm:px-8" aria-label="Mobile primary">
          <ul className="flex flex-col divide-y divide-line-soft">
            {primaryLinks.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="flex items-center justify-between py-4 text-body text-ink no-underline"
                  onClick={closeMenu}
                >
                  {item.label}
                  <span aria-hidden className="text-ink-3">→</span>
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/contact"
                className="flex items-center justify-between py-4 text-body font-medium text-ink no-underline"
                onClick={closeMenu}
              >
                Request briefing
                <span aria-hidden className="text-accent">→</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
