import type { PlatformRole } from "@/lib/platform-roles";

export type PlatformNavItem = {
  href: string;
  label: string;
  /** If omitted, all roles may see the item. */
  roles?: readonly PlatformRole[];
};

export type PlatformNavGroup = {
  id: string;
  title: string;
  items: readonly PlatformNavItem[];
};

/** Thematic clusters for the operations console sidebar. */
export const platformNavGroups: readonly PlatformNavGroup[] = [
  {
    id: "executive-command",
    title: "Executive Command",
    items: [
      { href: "/platform/dashboard", label: "Executive Overview" },
      { href: "/platform/action-center", label: "Action Center" },
      { href: "/platform/action-workflow-center", label: "Action Workflow Center" },
      { href: "/platform/reporting", label: "Reporting" },
    ],
  },
  {
    id: "revenue-protection",
    title: "Revenue Protection",
    items: [
      { href: "/platform/revenue-recovery", label: "Revenue Recovery Engine" },
      { href: "/platform/loss-intelligence", label: "Loss Intelligence" },
      { href: "/platform/hotspot-map", label: "Hotspot Map" },
    ],
  },
  {
    id: "grid-operations",
    title: "Grid Operations",
    items: [
      { href: "/platform/grid-intelligence", label: "Grid Intelligence" },
      { href: "/platform/network-mapping", label: "Network Mapping" },
      { href: "/platform/field-operations", label: "Field Operations" },
    ],
  },
  {
    id: "customer-metering",
    title: "Customer & Metering",
    items: [
      { href: "/platform/customer-meter-registry", label: "Customer & Meter Registry" },
      { href: "/platform/smart-meter-readiness", label: "Smart Meter Readiness" },
      { href: "/platform/device-dcu-monitoring", label: "Device / DCU Monitoring" },
      { href: "/platform/connectivity-management", label: "Connectivity Management" },
    ],
  },
  {
    id: "deployment-admin",
    title: "Deployment & Admin",
    items: [
      { href: "/platform/smart-rollout-planner", label: "Smart Rollout Planner" },
      { href: "/platform/upload", label: "Upload Center" },
      { href: "/platform/settings", label: "Settings" },
    ],
  },
] as const;

/** Flattened routes (e.g. sitemap, tests). */
export const platformNav: readonly PlatformNavItem[] = platformNavGroups.flatMap(
  (g) => g.items
) as readonly PlatformNavItem[];

export function navVisibleForRole(
  item: PlatformNavItem,
  role: PlatformRole
): boolean {
  if (!item.roles?.length) return true;
  return item.roles.includes(role);
}

const STORAGE_KEY = "noor-insight-platform-nav-collapsed";

export function readNavCollapsedIds(): Record<string, boolean> {
  if (typeof window === "undefined") return {};
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw) as unknown;
    if (parsed && typeof parsed === "object" && !Array.isArray(parsed)) {
      return parsed as Record<string, boolean>;
    }
  } catch {
    /* ignore */
  }
  return {};
}

export function writeNavCollapsedIds(map: Record<string, boolean>) {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(map));
  } catch {
    /* ignore */
  }
}
