/** Demo narratives for commercial wedge surfaces (evaluation / prototype). */

export type RevenueRecoveryOpportunity = {
  id: string;
  rank: number;
  title: string;
  district: string;
  leakType: string;
  estimatedRecoverableUsd: number;
  confidence: "high" | "medium" | "low";
  drivers: string;
};

export const totalRecoverablePipelineUsd = 4_280_000;

export const revenueRecoveryOpportunities: readonly RevenueRecoveryOpportunity[] = [
  {
    id: "opp-1",
    rank: 1,
    title: "Clustered prepaid under-recovery — Central Monrovia",
    district: "Central",
    leakType: "Billing / vending misalignment",
    estimatedRecoverableUsd: 1_120_000,
    confidence: "high",
    drivers: "Meter reads vs. token sales divergence; 14-day sustained gap.",
  },
  {
    id: "opp-2",
    rank: 2,
    title: "Transformer overload & unmetered taps — Bushrod corridor",
    district: "Bushrod",
    leakType: "Technical + commercial",
    estimatedRecoverableUsd: 890_000,
    confidence: "high",
    drivers: "Night-load heatmap + field inspection backlog overlap.",
  },
  {
    id: "opp-3",
    rank: 3,
    title: "Large-account postpaid aging — Paynesville industrial",
    district: "Paynesville",
    leakType: "Collections / credit control",
    estimatedRecoverableUsd: 640_000,
    confidence: "medium",
    drivers: "Aging buckets outside approved tolerance; escalation queue idle.",
  },
  {
    id: "opp-4",
    rank: 4,
    title: "Feeder SAIDI-linked revenue at risk — Duala ring",
    district: "Duala",
    leakType: "Outage-linked revenue",
    estimatedRecoverableUsd: 510_000,
    confidence: "medium",
    drivers: "Outage minutes × tariff exposure model vs. billed energy.",
  },
  {
    id: "opp-5",
    rank: 5,
    title: "Meter registry ghosts — Caldwell duplicate IDs",
    district: "Caldwell",
    leakType: "Registry integrity",
    estimatedRecoverableUsd: 320_000,
    confidence: "medium",
    drivers: "GPS-linked accounts with duplicate serials and inactive billing.",
  },
] as const;

export type LeadershipAction = {
  id: string;
  priority: "critical" | "high" | "standard";
  title: string;
  description: string;
  impactLabel: string;
  href: string;
};

export const leadershipActions: readonly LeadershipAction[] = [
  {
    id: "act-1",
    priority: "critical",
    title: "Approve revenue recovery wave — Central cluster",
    description:
      "Field pack is ready. Legal and revenue protection sign-off unlocks a coordinated billing + inspection sweep.",
    impactLabel: "~$1.1M recoverable (90-day window)",
    href: "/platform/revenue-recovery",
  },
  {
    id: "act-2",
    priority: "high",
    title: "Ingest latest prepaid vendor extract",
    description:
      "New vending file received from partner SFTP. Upload validates token reconciliation for the last close.",
    impactLabel: "Closes 6.4% of unexplained variance",
    href: "/platform/reporting",
  },
  {
    id: "act-3",
    priority: "high",
    title: "Brief regulator on feeder remediation plan",
    description:
      "Pack combines outage KPIs, planned capital, and customer impact narrative for next oversight session.",
    impactLabel: "License review in 21 days",
    href: "/platform/reporting",
  },
  {
    id: "act-4",
    priority: "standard",
    title: "Refresh customer & meter GPS linkage",
    description:
      "National ID batch matched 2,180 accounts. Approve merge rules before pushing to master registry.",
    impactLabel: "Reduces dispute volume",
    href: "/platform/loss-intelligence",
  },
] as const;

export type UploadCategory = {
  id: string;
  label: string;
  description: string;
  formats: string;
};

export const uploadCategories: readonly UploadCategory[] = [
  {
    id: "billing",
    label: "Billing",
    description: "Postpaid cycles, adjustments, write-offs, and large-account schedules.",
    formats: "CSV, XLSX",
  },
  {
    id: "prepaid",
    label: "Prepaid sales",
    description: "Token / STS vendor extracts, vending reconciliation, and float accounts.",
    formats: "CSV, XLSX",
  },
  {
    id: "meters",
    label: "Meter registry",
    description: "Serials, phases, CT ratios, GPS coordinates, and asset status changes.",
    formats: "CSV, XLSX",
  },
  {
    id: "outages",
    label: "Outage logs",
    description: "Incident IDs, feeder, duration, customers interrupted, and restoration codes.",
    formats: "CSV, XLSX",
  },
  {
    id: "field",
    label: "Field jobs",
    description: "Work orders, crew dispatch, completion codes, and photo evidence links.",
    formats: "CSV, XLSX",
  },
] as const;

export type GridFeederRow = {
  feeder: string;
  district: string;
  loadingPct: number;
  outages30d: number;
  risk: "elevated" | "watch" | "stable";
};

export const gridFeederRows: readonly GridFeederRow[] = [
  { feeder: "F-12A Bushrod", district: "Bushrod", loadingPct: 94, outages30d: 6, risk: "elevated" },
  { feeder: "F-04 Central", district: "Central", loadingPct: 88, outages30d: 3, risk: "watch" },
  { feeder: "F-21 Paynesville", district: "Paynesville", loadingPct: 76, outages30d: 2, risk: "stable" },
  { feeder: "F-08 Duala ring", district: "Duala", loadingPct: 91, outages30d: 5, risk: "elevated" },
  { feeder: "F-33 Caldwell", district: "Caldwell", loadingPct: 71, outages30d: 1, risk: "stable" },
] as const;

export type CustomerMeterRow = {
  account: string;
  meterId: string;
  district: string;
  status: "active" | "disputed" | "inactive";
  lastRead: string;
};

export const customerMeterRows: readonly CustomerMeterRow[] = [
  { account: "ACC-1049281", meterId: "MTR-883210", district: "Central", status: "active", lastRead: "Apr 12" },
  { account: "ACC-2204410", meterId: "MTR-441902", district: "Bushrod", status: "disputed", lastRead: "Apr 09" },
  { account: "ACC-8831022", meterId: "MTR-221003", district: "Paynesville", status: "active", lastRead: "Apr 14" },
  { account: "ACC-4412001", meterId: "MTR-992100", district: "Duala", status: "inactive", lastRead: "Mar 02" },
  { account: "ACC-9921003", meterId: "MTR-110022", district: "Caldwell", status: "active", lastRead: "Apr 13" },
] as const;
