export type SolutionsMegaMenuItem = {
  id: string;
  title: string;
  description: string;
  href: string;
};

/** Shared by site header mega menu and Solutions page anchors. */
export const solutionsMegaMenuItems: readonly SolutionsMegaMenuItem[] = [
  {
    id: "revenue-protection",
    title: "Revenue Protection",
    description:
      "Detect losses, theft signals, billing leakage, and non-payment clusters.",
    href: "/solutions#revenue-protection",
  },
  {
    id: "grid-intelligence",
    title: "Grid Intelligence",
    description:
      "Transformer performance, feeder visibility, outage patterns, hotspot mapping.",
    href: "/solutions#grid-intelligence",
  },
  {
    id: "field-operations",
    title: "Field Operations",
    description:
      "Technician workflows, work orders, response times, vehicle routes, productivity.",
    href: "/solutions#field-operations",
  },
  {
    id: "customer-meter-intelligence",
    title: "Customer & Meter Intelligence",
    description:
      "Meter registry, GPS-linked accounts, National ID integration, customer records.",
    href: "/solutions#customer-meter-intelligence",
  },
  {
    id: "executive-dashboards",
    title: "Executive Dashboards",
    description:
      "Board reports, regulator packs, donor reporting, KPI scorecards.",
    href: "/solutions#executive-dashboards",
  },
  {
    id: "digital-transformation-advisory",
    title: "Digital Transformation Advisory",
    description:
      "Roadmaps for modernization, pilot design, governance systems.",
    href: "/solutions#digital-transformation-advisory",
  },
] as const;
