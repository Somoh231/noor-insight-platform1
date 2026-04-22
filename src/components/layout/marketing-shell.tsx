import type { ReactNode } from "react";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";

/**
 * Single persistent shell for all public marketing routes. Warm page
 * background; no decorative chrome between header and content.
 */
export function MarketingShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-dvh flex-col bg-page">
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-control focus:bg-ink focus:px-4 focus:py-2 focus:text-small focus:font-medium focus:text-page"
      >
        Skip to content
      </a>
      <SiteHeader />
      <div className="flex-1" id="content">
        {children}
      </div>
      <SiteFooter />
    </div>
  );
}
