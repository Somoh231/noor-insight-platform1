"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { BrandLogo } from "@/components/brand/brand-logo";
import { cn } from "@/lib/utils";

const primaryLinks = [
  { href: "/solutions", label: "Programmes" },
  { href: "/publications", label: "Publications", accent: true },
  { href: "/use-cases", label: "Methodology" },
  { href: "/about", label: "About" },
] as const;

function isActive(pathname: string | null, href: string) {
  if (!pathname) return false;
  if (pathname === href) return true;
  return pathname.startsWith(`${href}/`);
}

/**
 * v2 nav: thin paper-toned strip with 92% paper background and a backdrop
 * blur — sticky from the top. Hairline bottom rule. Publications is the
 * single ember-coloured primary link (the firm's most active register).
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
    <header
      className="sticky top-0 z-50 w-full border-b border-rule"
      style={{
        backgroundColor: "rgba(250, 247, 240, 0.92)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
      }}
    >
      <div className="mx-auto flex h-[68px] w-full max-w-content items-center gap-6 px-6 sm:px-8 lg:px-outer">
        <BrandLogo size="md" />
        <div className="flex-1" />

        <nav
          className="hidden items-center gap-8 md:flex"
          aria-label="Primary"
        >
          {primaryLinks.map((item) => {
            const active = isActive(pathname, item.href);
            // "Publications" is a placeholder route we haven't built yet —
            // skip the Link and render as a non-interactive muted label with
            // a forthcoming cue. Others get regular navigation.
            if (item.label === "Publications") {
              return (
                <span
                  key={item.href}
                  className="inline-flex items-center gap-2 text-sm font-medium text-ember"
                  aria-disabled
                >
                  {item.label}
                  <span className="font-mono text-[10px] uppercase tracking-kicker text-muted">
                    Forthcoming
                  </span>
                </span>
              );
            }
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "text-sm font-medium transition-colors duration-fast",
                  active ? "text-ink" : "text-ink-soft hover:text-ink"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <Link
          href="/contact"
          className="hidden items-center gap-[6px] rounded-xs border border-rule-strong px-[14px] py-2 text-sm font-medium text-ink transition-colors duration-fast hover:border-ink md:inline-flex"
        >
          Request briefing
          <span aria-hidden className="font-mono text-xs">→</span>
        </Link>

        <button
          type="button"
          aria-expanded={menuOpen}
          aria-controls="site-mobile-nav"
          className="inline-flex h-10 w-10 items-center justify-center rounded-xs border border-rule-strong text-ink transition-colors hover:border-ink focus-visible:outline-none focus-visible:shadow-[inset_0_0_0_1px_rgb(var(--color-ember-rgb))] md:hidden"
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

      <div
        id="site-mobile-nav"
        className={cn(
          "fixed inset-x-0 top-[68px] z-40 border-b border-rule bg-paper transition-opacity duration-fast md:hidden",
          menuOpen ? "opacity-100" : "pointer-events-none opacity-0"
        )}
        aria-hidden={!menuOpen}
      >
        <nav className="mx-auto max-w-content px-6 py-6 sm:px-8" aria-label="Mobile primary">
          <ul className="flex flex-col divide-y divide-rule">
            {primaryLinks.map((item) => (
              <li key={item.href}>
                {item.label === "Publications" ? (
                  <div className="flex items-center justify-between py-4 text-base">
                    <span className="text-ember">{item.label}</span>
                    <span className="font-mono text-[10px] uppercase tracking-kicker text-muted">
                      Forthcoming
                    </span>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="flex items-center justify-between py-4 text-base text-ink"
                    onClick={closeMenu}
                  >
                    {item.label}
                    <span aria-hidden className="font-mono text-muted">→</span>
                  </Link>
                )}
              </li>
            ))}
            <li>
              <Link
                href="/contact"
                className="flex items-center justify-between py-4 text-base font-medium text-ink"
                onClick={closeMenu}
              >
                Request briefing
                <span aria-hidden className="font-mono text-ember">→</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
