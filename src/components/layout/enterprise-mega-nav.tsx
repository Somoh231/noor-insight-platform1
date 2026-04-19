"use client";

import Link from "next/link";
import { useId, useState } from "react";
import { aboutMegaMenuItems } from "@/lib/about-mega-menu";
import { solutionsMegaMenuItems } from "@/lib/solutions-mega-menu";
import { useCasesMegaMenuItems } from "@/lib/use-cases-mega-menu";
import { cn } from "@/lib/utils";

type MegaVariant = "solutions" | "useCases" | "about";

type MegaItem = {
  id: string;
  title: string;
  description: string;
  href: string;
};

const VARIANT_CONFIG: Record<
  MegaVariant,
  {
    triggerLabel: string;
    triggerHref: string;
    pathPrefix: string;
    items: readonly MegaItem[];
    regionAriaLabel: string;
    footerLabel: string;
    /** Tailwind named groups — must be static strings for JIT */
    group: "nav-sol" | "nav-use" | "nav-ab";
  }
> = {
  solutions: {
    triggerLabel: "Solutions",
    triggerHref: "/solutions",
    pathPrefix: "/solutions",
    items: solutionsMegaMenuItems,
    regionAriaLabel: "Solutions areas",
    footerLabel: "View all solutions →",
    group: "nav-sol",
  },
  useCases: {
    triggerLabel: "Use cases",
    triggerHref: "/use-cases",
    pathPrefix: "/use-cases",
    items: useCasesMegaMenuItems,
    regionAriaLabel: "Use case audiences",
    footerLabel: "Use cases overview →",
    group: "nav-use",
  },
  about: {
    triggerLabel: "About",
    triggerHref: "/about",
    pathPrefix: "/about",
    items: aboutMegaMenuItems,
    regionAriaLabel: "About Noor Insight",
    footerLabel: "About overview →",
    group: "nav-ab",
  },
};

function MegaNavIcon({ variant, itemId }: { variant: MegaVariant; itemId: string }) {
  const stroke = "currentColor";
  const c = {
    fill: "none" as const,
    stroke,
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  if (variant === "solutions") {
    switch (itemId) {
      case "revenue-protection":
        return (
          <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" aria-hidden>
            <path {...c} d="M12 3 4 7v5c0 5 3.5 9 8 10 4.5-1 8-5 8-10V7l-8-4Z" />
            <path {...c} d="m9 12 2 2 4-4" />
          </svg>
        );
      case "grid-intelligence":
        return (
          <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" aria-hidden>
            <path {...c} d="M4 14c2-4 6-6 8-8 2 2 6 4 8 8" />
            <path {...c} d="M8 22h8M12 14v8" />
            <circle {...c} cx="12" cy="10" r="2" />
          </svg>
        );
      case "field-operations":
        return (
          <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" aria-hidden>
            <path {...c} d="M14.7 6.3a4 4 0 0 0-5.4 0L4 11.6V20h4v-4h8v4h4v-8.4l-5.3-5.3Z" />
            <path {...c} d="M10 20v-3a2 2 0 0 1 4 0v3" />
          </svg>
        );
      case "customer-meter-intelligence":
        return (
          <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" aria-hidden>
            <rect {...c} x="5" y="3" width="14" height="18" rx="2" />
            <path {...c} d="M9 8h6M9 12h4" />
            <circle {...c} cx="12" cy="16" r="1" fill="currentColor" stroke="none" />
          </svg>
        );
      case "executive-dashboards":
        return (
          <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" aria-hidden>
            <path {...c} d="M4 19V5M4 19h16M8 17V9m4 8V6m4 11v-5" />
          </svg>
        );
      case "digital-transformation-advisory":
        return (
          <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" aria-hidden>
            <path {...c} d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
            <circle {...c} cx="12" cy="12" r="3" />
          </svg>
        );
      default:
        break;
    }
  }

  if (variant === "useCases") {
    switch (itemId) {
      case "electricity-utilities":
        return (
          <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" aria-hidden>
            <path {...c} d="M13 2 3 14h8l-1 8 10-12h-8l1-8Z" />
          </svg>
        );
      case "water-utilities":
        return (
          <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" aria-hidden>
            <path {...c} d="M12 2.5c-3 4-6 7.5-6 11a6 6 0 1 0 12 0c0-3.5-3-7-6-11Z" />
          </svg>
        );
      case "government-ministries":
        return (
          <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" aria-hidden>
            <path {...c} d="M4 10h16v10H4zM9 10V6h6v4" />
            <path {...c} d="M8 14h2M14 14h2M8 17h2M14 17h2" />
          </svg>
        );
      case "regulators":
        return (
          <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" aria-hidden>
            <path {...c} d="M12 3v18M8 7h8M7 21h10" />
            <circle {...c} cx="12" cy="12" r="2" />
          </svg>
        );
      case "donors-development-partners":
        return (
          <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" aria-hidden>
            <circle {...c} cx="12" cy="12" r="9" />
            <path {...c} d="M12 7v10M7 12h10" />
          </svg>
        );
      case "emerging-cities":
        return (
          <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" aria-hidden>
            <path {...c} d="M3 21h18M6 21V10l6-4 6 4v11" />
            <path {...c} d="M9 21v-5h6v5" />
          </svg>
        );
      default:
        break;
    }
  }

  if (variant === "about") {
    switch (itemId) {
      case "our-mission":
        return (
          <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" aria-hidden>
            <circle {...c} cx="12" cy="12" r="9" />
            <path {...c} d="M12 8v4l3 2" />
          </svg>
        );
      case "why-now":
        return (
          <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" aria-hidden>
            <path {...c} d="M12 3v4M12 17v4M4 12h4M16 12h4" />
            <path {...c} d="m5 5 3 3m8 8 3 3M5 19l3-3m8-8 3-3" />
          </svg>
        );
      case "our-approach":
        return (
          <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" aria-hidden>
            <path {...c} d="M4 6h16M4 12h10M4 18h14" />
            <path {...c} d="M18 10v8l3-3" />
          </svg>
        );
      case "leadership-vision":
        return (
          <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" aria-hidden>
            <path {...c} d="M12 11a4 4 0 1 0-4-4 4 4 0 0 0 4 4Z" />
            <path {...c} d="M4 21v-1a7 7 0 0 1 14 0v1" />
          </svg>
        );
      case "partners":
        return (
          <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" aria-hidden>
            <path {...c} d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
            <circle {...c} cx="9" cy="7" r="4" />
            <path {...c} d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
        );
      case "contact-briefing":
        return (
          <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" aria-hidden>
            <rect {...c} x="3" y="5" width="18" height="14" rx="2" />
            <path {...c} d="m3 7 9 6 9-6" />
          </svg>
        );
      default:
        break;
    }
  }

  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" aria-hidden>
      <circle {...c} cx="12" cy="12" r="9" />
    </svg>
  );
}

function ChevronDown({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 12 12"
      className={cn("h-3 w-3 shrink-0 opacity-60 motion-safe:transition-transform motion-safe:duration-200", className)}
      aria-hidden
    >
      <path
        d="M2.5 4.25 6 7.75l3.5-3.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function desktopGroupRoot(variant: MegaVariant): string {
  if (variant === "solutions") return "group/nav-sol relative";
  if (variant === "useCases") return "group/nav-use relative";
  return "group/nav-ab relative";
}

function desktopPanelOpen(variant: MegaVariant): string {
  if (variant === "solutions") {
    return "group-hover/nav-sol:pointer-events-auto group-hover/nav-sol:translate-y-0 group-hover/nav-sol:opacity-100 group-focus-within/nav-sol:pointer-events-auto group-focus-within/nav-sol:translate-y-0 group-focus-within/nav-sol:opacity-100";
  }
  if (variant === "useCases") {
    return "group-hover/nav-use:pointer-events-auto group-hover/nav-use:translate-y-0 group-hover/nav-use:opacity-100 group-focus-within/nav-use:pointer-events-auto group-focus-within/nav-use:translate-y-0 group-focus-within/nav-use:opacity-100";
  }
  return "group-hover/nav-ab:pointer-events-auto group-hover/nav-ab:translate-y-0 group-hover/nav-ab:opacity-100 group-focus-within/nav-ab:pointer-events-auto group-focus-within/nav-ab:translate-y-0 group-focus-within/nav-ab:opacity-100";
}

function desktopTriggerHover(variant: MegaVariant): string {
  if (variant === "solutions") {
    return "group-hover/nav-sol:border-navy/10 group-hover/nav-sol:bg-navy/[0.04] group-focus-within/nav-sol:border-navy/10 group-focus-within/nav-sol:bg-navy/[0.04]";
  }
  if (variant === "useCases") {
    return "group-hover/nav-use:border-navy/10 group-hover/nav-use:bg-navy/[0.04] group-focus-within/nav-use:border-navy/10 group-focus-within/nav-use:bg-navy/[0.04]";
  }
  return "group-hover/nav-ab:border-navy/10 group-hover/nav-ab:bg-navy/[0.04] group-focus-within/nav-ab:border-navy/10 group-focus-within/nav-ab:bg-navy/[0.04]";
}

function desktopChevronRotate(variant: MegaVariant): string {
  if (variant === "solutions") {
    return "group-hover/nav-sol:rotate-180 group-focus-within/nav-sol:rotate-180";
  }
  if (variant === "useCases") {
    return "group-hover/nav-use:rotate-180 group-focus-within/nav-use:rotate-180";
  }
  return "group-hover/nav-ab:rotate-180 group-focus-within/nav-ab:rotate-180";
}

export function EnterpriseMegaNavDesktop({
  variant,
  pathname,
}: {
  variant: MegaVariant;
  pathname: string;
}) {
  const cfg = VARIANT_CONFIG[variant];
  const active =
    pathname === cfg.pathPrefix || pathname.startsWith(`${cfg.pathPrefix}/`);

  return (
    <div className={desktopGroupRoot(variant)}>
      <Link
        href={cfg.triggerHref}
        aria-current={active ? "page" : undefined}
        className={cn(
          "inline-flex items-center gap-1 rounded-md border-b-2 border-transparent px-2.5 py-2 text-[13px] font-medium no-underline transition-colors motion-safe:duration-200 lg:px-3",
          "text-dgray/90 hover:border-navy/10 hover:bg-navy/[0.04] hover:text-navy",
          "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy/25",
          active && "border-gold text-navy",
          desktopTriggerHover(variant)
        )}
      >
        {cfg.triggerLabel}
        <ChevronDown className={desktopChevronRotate(variant)} />
      </Link>

      <div
        className={cn(
          "pointer-events-none absolute left-1/2 top-full z-[60] w-[min(calc(100vw-1.5rem),40rem)] -translate-x-1/2 pt-2",
          "translate-y-1 opacity-0 motion-safe:transition-[opacity,transform] motion-safe:duration-200 motion-safe:ease-out",
          desktopPanelOpen(variant)
        )}
        role="region"
        aria-label={cfg.regionAriaLabel}
      >
        <div className="rounded-xl border border-navy/10 bg-white p-3 shadow-card ring-1 ring-navy/[0.06]">
          <div className="grid gap-0.5 sm:grid-cols-2">
            {cfg.items.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className={cn(
                  "group/item flex gap-3 rounded-lg p-3 no-underline outline-none transition-[background-color,transform,box-shadow] motion-safe:duration-200 motion-safe:ease-out",
                  "hover:bg-navy/[0.035] focus-visible:bg-navy/[0.035] focus-visible:ring-2 focus-visible:ring-navy/20",
                  "motion-safe:group-hover/item:translate-x-0.5"
                )}
              >
                <span className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-lg border border-navy/[0.08] bg-lgray/60 text-navy transition-colors group-hover/item:border-gold/35 group-hover/item:bg-gold/[0.06]">
                  <MegaNavIcon variant={variant} itemId={item.id} />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-[13px] font-semibold tracking-tight text-navy">
                    {item.title}
                  </span>
                  <span className="mt-0.5 block text-[12px] leading-snug text-dgray/72">
                    {item.description}
                  </span>
                </span>
              </Link>
            ))}
          </div>
          <div className="mt-2 border-t border-navy/[0.06] px-1 pt-2">
            <Link
              href={cfg.triggerHref}
              className="block rounded-md px-2 py-1.5 text-center text-[12px] font-semibold text-gold transition-colors hover:bg-navy/[0.04] hover:text-navy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy/25"
            >
              {cfg.footerLabel}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export function EnterpriseMegaNavMobileAccordion({
  variant,
  pathname,
  onNavigate,
}: {
  variant: MegaVariant;
  pathname: string;
  onNavigate: () => void;
}) {
  const cfg = VARIANT_CONFIG[variant];
  const [open, setOpen] = useState(false);
  const headId = useId();
  const panelId = useId();
  const active =
    pathname === cfg.pathPrefix || pathname.startsWith(`${cfg.pathPrefix}/`);

  return (
    <li className="list-none">
      <div className="rounded-lg border border-transparent">
        <button
          type="button"
          id={headId}
          aria-expanded={open}
          aria-controls={panelId}
          className={cn(
            "flex w-full items-center justify-between gap-2 rounded-lg px-3 py-3 text-left text-[15px] font-semibold transition-colors",
            "text-navy hover:bg-navy/[0.04]",
            "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy/25",
            active && "bg-navy/[0.04]"
          )}
          onClick={() => setOpen((o) => !o)}
        >
          <span className="flex items-center gap-2">
            {cfg.triggerLabel}
            {active ? (
              <span className="text-[10px] font-bold uppercase tracking-wider text-gold">Current</span>
            ) : null}
          </span>
          <ChevronDown className={cn("text-navy/50", open && "rotate-180")} />
        </button>
        <div
          id={panelId}
          role="region"
          aria-labelledby={headId}
          className={cn(
            "overflow-hidden motion-safe:transition-[max-height] motion-safe:duration-300 motion-safe:ease-out",
            open ? "max-h-[min(80vh,1200px)]" : "max-h-0 pointer-events-none"
          )}
        >
          <div className={cn("min-h-0", open && "pointer-events-auto")}>
            <ul className="m-0 border-l-2 border-gold/40 pb-2 pl-3 pr-0 pt-0">
              {cfg.items.map((item) => (
                <li key={item.id} className="list-none">
                  <Link
                    href={item.href}
                    className="flex gap-3 rounded-lg py-2.5 pl-2 pr-2 no-underline transition-colors hover:bg-navy/[0.04] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy/25"
                    onClick={onNavigate}
                  >
                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-navy/[0.08] bg-lgray/50 text-navy">
                      <MegaNavIcon variant={variant} itemId={item.id} />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-[14px] font-semibold text-navy">{item.title}</span>
                      <span className="mt-0.5 block text-[12px] leading-snug text-dgray/70">
                        {item.description}
                      </span>
                    </span>
                  </Link>
                </li>
              ))}
              <li className="list-none">
                <Link
                  href={cfg.triggerHref}
                  className="mt-1 block rounded-lg py-2 pl-2 text-[13px] font-semibold text-gold hover:bg-navy/[0.04] hover:text-navy"
                  onClick={onNavigate}
                >
                  {cfg.footerLabel}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </li>
  );
}
