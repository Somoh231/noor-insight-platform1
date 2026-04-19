import type { ReactNode } from "react";
import { MarketingShell } from "@/components/layout/marketing-shell";

/**
 * Single persistent shell for all public marketing routes.
 * Keeps SiteHeader mounted across client navigations (Home ↔ Solutions, etc.)
 * so layout/CSS state cannot diverge between pages.
 */
export default function MarketingLayout({ children }: { children: ReactNode }) {
  return <MarketingShell>{children}</MarketingShell>;
}
