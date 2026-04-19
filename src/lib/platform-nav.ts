import type { PlatformRole } from "@/lib/platform-roles";

export type PlatformNavItem = {
  href: string;
  label: string;
  /** If omitted, all roles may see the item. */
  roles?: readonly PlatformRole[];
};

/** Full utility operating platform — executive, revenue, grid, assets, field, and governance. */
export const platformNav: readonly PlatformNavItem[] = [
  { href: "/platform/dashboard", label: "Executive Overview" },
  { href: "/platform/action-center", label: "Action Center" },
  { href: "/platform/action-workflow-center", label: "Action Workflow Center" },
  { href: "/platform/revenue-recovery", label: "Revenue Recovery Engine" },
  { href: "/platform/loss-intelligence", label: "Loss Intelligence" },
  { href: "/platform/hotspot-map", label: "Hotspot Map" },
  { href: "/platform/grid-intelligence", label: "Grid Intelligence" },
  { href: "/platform/network-mapping", label: "Network Mapping" },
  { href: "/platform/customer-meter-registry", label: "Customer & Meter Registry" },
  { href: "/platform/smart-meter-readiness", label: "Smart Meter Readiness" },
  { href: "/platform/device-dcu-monitoring", label: "Device / DCU Monitoring" },
  { href: "/platform/connectivity-management", label: "Connectivity Management" },
  { href: "/platform/smart-rollout-planner", label: "Smart Rollout Planner" },
  { href: "/platform/field-operations", label: "Field Operations" },
  { href: "/platform/reporting", label: "Reporting" },
  { href: "/platform/upload", label: "Upload Center" },
  { href: "/platform/settings", label: "Settings" },
] as const;

export function navVisibleForRole(
  item: PlatformNavItem,
  role: PlatformRole
): boolean {
  if (!item.roles?.length) return true;
  return item.roles.includes(role);
}
