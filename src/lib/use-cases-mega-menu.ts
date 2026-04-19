export type UseCasesMegaMenuItem = {
  id: string;
  title: string;
  description: string;
  href: string;
};

export const useCasesMegaMenuItems: readonly UseCasesMegaMenuItem[] = [
  {
    id: "electricity-utilities",
    title: "Electricity Utilities",
    description:
      "Revenue protection, outage command, and donor-grade reporting for national and regional power companies.",
    href: "/use-cases#electricity-utilities",
  },
  {
    id: "water-utilities",
    title: "Water Utilities",
    description:
      "Metering integrity, non-revenue water, and field programs where leakage and collections must move together.",
    href: "/use-cases#water-utilities",
  },
  {
    id: "government-ministries",
    title: "Government Ministries",
    description:
      "Portfolio visibility across utilities, capital prioritization, and briefing packs that survive political cycles.",
    href: "/use-cases#government-ministries",
  },
  {
    id: "regulators",
    title: "Regulators",
    description:
      "Consistent definitions, inspection-ready evidence, and KPI narratives aligned to license and tariff reviews.",
    href: "/use-cases#regulators",
  },
  {
    id: "donors-development-partners",
    title: "Donors & Development Partners",
    description:
      "Outcome traceability, milestone reporting, and controls that align disbursement to verified progress.",
    href: "/use-cases#donors-development-partners",
  },
  {
    id: "emerging-cities",
    title: "Emerging Cities",
    description:
      "Urban load growth, informal connections, and service expansion where planning and operations share one map.",
    href: "/use-cases#emerging-cities",
  },
] as const;
