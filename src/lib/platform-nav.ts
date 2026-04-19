import type { PlatformRole } from "@/lib/platform-roles";

export type PlatformNavItem = {
  href: string;
  label: string;
  /** If omitted, all roles may see the item. */
  roles?: readonly PlatformRole[];
};

/** Stable nav: original console items + single new tab (Revenue recovery). Add other wedge routes incrementally later. */
export const platformNav: readonly PlatformNavItem[] = [
  { href: "/platform/dashboard", label: "Dashboard" },
  { href: "/platform/revenue-recovery", label: "Revenue recovery engine" },
  { href: "/platform/loss-intelligence", label: "Loss intelligence" },
  { href: "/platform/field-operations", label: "Field operations" },
  { href: "/platform/reporting", label: "Reporting" },
] as const;

export function navVisibleForRole(
  item: PlatformNavItem,
  role: PlatformRole
): boolean {
  if (!item.roles?.length) return true;
  return item.roles.includes(role);
}
