export type ReportType = "DONOR_PACK" | "REGULATORY_FILING" | "INTERNAL_REVIEW";

export type ReportTypeMeta = {
  id: ReportType;
  label: string;
  description: string;
};

export const reportTypes: readonly ReportTypeMeta[] = [
  {
    id: "DONOR_PACK",
    label: "Donor pack",
    description:
      "Outcome narrative, attribution, and verification artifacts suitable for development partners.",
  },
  {
    id: "REGULATORY_FILING",
    label: "Regulatory filing",
    description:
      "Structured disclosures with metric lineage for ministry and regulator submissions.",
  },
  {
    id: "INTERNAL_REVIEW",
    label: "Internal review",
    description:
      "Executive-ready synthesis for boards and management: fast, defensible, and operational.",
  },
] as const;

export type ReportingKpis = {
  revenueRecoveryPct: number;
  revenueRecoveryDelta: number;
  lossReductionPct: number;
  lossReductionDelta: number;
  connectionsAdded: number;
  connectionsDelta: number;
  outageTrendIndex: number;
  outageTrendDelta: number;
};

export const kpisByReportType: Record<ReportType, ReportingKpis> = {
  DONOR_PACK: {
    revenueRecoveryPct: 0.112,
    revenueRecoveryDelta: 0.018,
    lossReductionPct: 0.087,
    lossReductionDelta: 0.011,
    connectionsAdded: 18420,
    connectionsDelta: 0.062,
    outageTrendIndex: 0.82,
    outageTrendDelta: -0.09,
  },
  REGULATORY_FILING: {
    revenueRecoveryPct: 0.104,
    revenueRecoveryDelta: 0.012,
    lossReductionPct: 0.091,
    lossReductionDelta: 0.009,
    connectionsAdded: 17640,
    connectionsDelta: 0.048,
    outageTrendIndex: 0.88,
    outageTrendDelta: -0.06,
  },
  INTERNAL_REVIEW: {
    revenueRecoveryPct: 0.128,
    revenueRecoveryDelta: 0.024,
    lossReductionPct: 0.095,
    lossReductionDelta: 0.014,
    connectionsAdded: 19280,
    connectionsDelta: 0.071,
    outageTrendIndex: 0.79,
    outageTrendDelta: -0.11,
  },
};

export type ReportingSeriesPoint = {
  period: string;
  revenueRecovery: number;
  lossReduction: number;
  connections: number;
  outages: number;
};

export const reportingSeriesByType: Record<
  ReportType,
  readonly ReportingSeriesPoint[]
> = {
  DONOR_PACK: [
    {
      period: "W1",
      revenueRecovery: 0.09,
      lossReduction: 0.07,
      connections: 16800,
      outages: 1.05,
    },
    {
      period: "W2",
      revenueRecovery: 0.095,
      lossReduction: 0.072,
      connections: 17120,
      outages: 1.02,
    },
    {
      period: "W3",
      revenueRecovery: 0.102,
      lossReduction: 0.078,
      connections: 17540,
      outages: 0.98,
    },
    {
      period: "W4",
      revenueRecovery: 0.108,
      lossReduction: 0.082,
      connections: 17920,
      outages: 0.95,
    },
    {
      period: "W5",
      revenueRecovery: 0.112,
      lossReduction: 0.087,
      connections: 18420,
      outages: 0.82,
    },
  ],
  REGULATORY_FILING: [
    {
      period: "W1",
      revenueRecovery: 0.088,
      lossReduction: 0.08,
      connections: 16200,
      outages: 1.1,
    },
    {
      period: "W2",
      revenueRecovery: 0.092,
      lossReduction: 0.083,
      connections: 16540,
      outages: 1.06,
    },
    {
      period: "W3",
      revenueRecovery: 0.097,
      lossReduction: 0.086,
      connections: 16980,
      outages: 1.0,
    },
    {
      period: "W4",
      revenueRecovery: 0.101,
      lossReduction: 0.089,
      connections: 17320,
      outages: 0.93,
    },
    {
      period: "W5",
      revenueRecovery: 0.104,
      lossReduction: 0.091,
      connections: 17640,
      outages: 0.88,
    },
  ],
  INTERNAL_REVIEW: [
    {
      period: "W1",
      revenueRecovery: 0.1,
      lossReduction: 0.075,
      connections: 17200,
      outages: 1.12,
    },
    {
      period: "W2",
      revenueRecovery: 0.108,
      lossReduction: 0.081,
      connections: 17840,
      outages: 1.04,
    },
    {
      period: "W3",
      revenueRecovery: 0.115,
      lossReduction: 0.086,
      connections: 18320,
      outages: 0.97,
    },
    {
      period: "W4",
      revenueRecovery: 0.121,
      lossReduction: 0.09,
      connections: 18840,
      outages: 0.9,
    },
    {
      period: "W5",
      revenueRecovery: 0.128,
      lossReduction: 0.095,
      connections: 19280,
      outages: 0.79,
    },
  ],
};
