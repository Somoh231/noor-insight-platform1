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

/** Where money leaks — category roll-up for executive ROI narrative (demo). */
export const revenueLeakageByCategory = [
  {
    id: "cat-bill",
    label: "Billing & metering drift",
    sharePct: 34,
    estimatedRecoverableUsd: 1_450_000,
    hint: "Cycle gaps, vending vs. reads, estimate churn",
  },
  {
    id: "cat-tech",
    label: "Technical & unmetered load",
    sharePct: 28,
    estimatedRecoverableUsd: 1_200_000,
    hint: "Transformer overload, tap-offs, CT drift",
  },
  {
    id: "cat-coll",
    label: "Collections & credit",
    sharePct: 22,
    estimatedRecoverableUsd: 940_000,
    hint: "Aging, large-account exposure, write-off risk",
  },
  {
    id: "cat-out",
    label: "Outage-linked revenue",
    sharePct: 16,
    estimatedRecoverableUsd: 690_000,
    hint: "SAIDI × tariff, uncompensated minutes",
  },
] as const;

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

export type ActionStatus = "Not started" | "In review" | "Blocked" | "Ready" | "Scheduled";

export type LeadershipAction = {
  id: string;
  priority: "critical" | "high" | "standard";
  title: string;
  description: string;
  impactLabel: string;
  href: string;
  owner: string;
  dueDate: string;
  status: ActionStatus;
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
    owner: "Chief Revenue Officer",
    dueDate: "Apr 22, 2026",
    status: "Ready",
  },
  {
    id: "act-2",
    priority: "high",
    title: "Ingest latest prepaid vendor extract",
    description:
      "New vending file received from partner SFTP. Upload validates token reconciliation for the last close.",
    impactLabel: "Closes 6.4% of unexplained variance",
    href: "/platform/upload",
    owner: "Revenue Operations",
    dueDate: "Apr 19, 2026",
    status: "In review",
  },
  {
    id: "act-3",
    priority: "high",
    title: "Brief regulator on feeder remediation plan",
    description:
      "Pack combines outage KPIs, planned capital, and customer impact narrative for next oversight session.",
    impactLabel: "License review in 21 days",
    href: "/platform/reporting",
    owner: "Regulatory Affairs",
    dueDate: "Apr 28, 2026",
    status: "Scheduled",
  },
  {
    id: "act-4",
    priority: "standard",
    title: "Refresh customer & meter GPS linkage",
    description:
      "National ID batch matched 2,180 accounts. Approve merge rules before pushing to master registry.",
    impactLabel: "Reduces dispute volume",
    href: "/platform/customer-meter-registry",
    owner: "MDM / CIS Steward",
    dueDate: "May 02, 2026",
    status: "Not started",
  },
  {
    id: "act-5",
    priority: "high",
    title: "Authorize Bushrod inspection surge (night load)",
    description:
      "Grid intelligence flagged overload + vending drift overlap. Crew roster is pre-cleared; needs capital sign-off for overtime.",
    impactLabel: "~$890K tied to opp #2",
    href: "/platform/grid-intelligence",
    owner: "Field Operations Director",
    dueDate: "Apr 20, 2026",
    status: "Blocked",
  },
  {
    id: "act-6",
    priority: "standard",
    title: "Publish weekly leakage digest to board pack",
    description:
      "Automated narrative from Action Center + Revenue Recovery Engine; one-click PDF for audit trail.",
    impactLabel: "Governance cadence",
    href: "/platform/reporting",
    owner: "Strategy Office",
    dueDate: "Apr 25, 2026",
    status: "In review",
  },
] as const;

/** Demo: tie recent outage districts to loss hotspots for the Hotspot Map page narrative. */
export const outageLeakCorrelation: readonly {
  district: string;
  leakSignal: string;
  customersAffected: number;
  estRevenueAtRiskUsd: number;
}[] = [
  {
    district: "Paynesville",
    leakSignal: "High prepaid drift + active outage",
    customersAffected: 12_400,
    estRevenueAtRiskUsd: 420_000,
  },
  {
    district: "Sinkor feeder group",
    leakSignal: "Postpaid aging spike during containment",
    customersAffected: 6_200,
    estRevenueAtRiskUsd: 185_000,
  },
  {
    district: "Buchanan substation",
    leakSignal: "Industrial tariff exposure vs. minutes off",
    customersAffected: 3_050,
    estRevenueAtRiskUsd: 96_000,
  },
  {
    district: "Gbarnga north",
    leakSignal: "Rural loss baseline + restoration lag",
    customersAffected: 1_780,
    estRevenueAtRiskUsd: 54_000,
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
