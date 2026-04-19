/** Demo datasets for utility operating modules (evaluation / prototype). */

export type NetworkNodeRow = {
  id: string;
  label: string;
  layer: "HV" | "MV" | "LV";
  district: string;
  customersDownstream: number;
  health: "green" | "amber" | "red";
};

export const networkNodes: readonly NetworkNodeRow[] = [
  { id: "n1", label: "Bushrod SS-12", layer: "HV", district: "Bushrod", customersDownstream: 48_200, health: "amber" },
  { id: "n2", label: "Central ring F-04", layer: "MV", district: "Central", customersDownstream: 22_100, health: "green" },
  { id: "n3", label: "Paynesville hub F-21", layer: "MV", district: "Paynesville", customersDownstream: 31_400, health: "green" },
  { id: "n4", label: "Duala LV cluster 7B", layer: "LV", district: "Duala", customersDownstream: 3_820, health: "red" },
  { id: "n5", label: "Caldwell rural spine", layer: "MV", district: "Caldwell", customersDownstream: 9_600, health: "amber" },
] as const;

export type MeterReadinessRow = {
  district: string;
  score: number;
  commsPct: number;
  meteringPct: number;
  cisPct: number;
  fieldPct: number;
  gap: string;
};

export const meterReadinessByDistrict: readonly MeterReadinessRow[] = [
  {
    district: "Greater Monrovia",
    score: 78,
    commsPct: 82,
    meteringPct: 76,
    cisPct: 74,
    fieldPct: 81,
    gap: "STS vending reconciliation latency",
  },
  {
    district: "Margibi",
    score: 64,
    commsPct: 58,
    meteringPct: 71,
    cisPct: 62,
    fieldPct: 66,
    gap: "Backhaul on two feeders",
  },
  {
    district: "Grand Bassa",
    score: 71,
    commsPct: 69,
    meteringPct: 74,
    cisPct: 70,
    fieldPct: 72,
    gap: "MDM sync for large C&I",
  },
  {
    district: "Bomi",
    score: 59,
    commsPct: 52,
    meteringPct: 63,
    cisPct: 58,
    fieldPct: 64,
    gap: "DCU firmware drift",
  },
] as const;

export type DcuDeviceRow = {
  id: string;
  feeder: string;
  district: string;
  lastUplink: string;
  signalDbm: number;
  batteryPct: number;
  alarm: "none" | "watch" | "critical";
};

export const dcuDevices: readonly DcuDeviceRow[] = [
  { id: "DCU-88321", feeder: "F-12A Bushrod", district: "Bushrod", lastUplink: "2m ago", signalDbm: -71, batteryPct: 88, alarm: "none" },
  { id: "DCU-44102", feeder: "F-04 Central", district: "Central", lastUplink: "6m ago", signalDbm: -66, batteryPct: 92, alarm: "none" },
  { id: "DCU-22109", feeder: "F-08 Duala", district: "Duala", lastUplink: "4h ago", signalDbm: -89, batteryPct: 41, alarm: "critical" },
  { id: "DCU-11002", feeder: "F-33 Caldwell", district: "Caldwell", lastUplink: "38m ago", signalDbm: -78, batteryPct: 76, alarm: "watch" },
  { id: "DCU-99210", feeder: "F-21 Paynesville", district: "Paynesville", lastUplink: "11m ago", signalDbm: -69, batteryPct: 85, alarm: "none" },
] as const;

export type ConnectivityCircuitRow = {
  circuit: string;
  district: string;
  backhaul: "Fiber" | "Microwave" | "LTE" | "Satellite";
  slaPct: number;
  incidents30d: number;
};

export const connectivityCircuits: readonly ConnectivityCircuitRow[] = [
  { circuit: "LEC-BSH-01", district: "Bushrod", backhaul: "Fiber", slaPct: 99.92, incidents30d: 1 },
  { circuit: "LEC-CEN-04", district: "Central", backhaul: "Microwave", slaPct: 99.45, incidents30d: 3 },
  { circuit: "LEC-PAY-02", district: "Paynesville", backhaul: "Fiber", slaPct: 99.88, incidents30d: 0 },
  { circuit: "LEC-DUA-08", district: "Duala", backhaul: "LTE", slaPct: 97.1, incidents30d: 5 },
  { circuit: "LEC-CAL-03", district: "Caldwell", backhaul: "Satellite", slaPct: 94.6, incidents30d: 8 },
] as const;

export type RolloutWaveRow = {
  wave: string;
  district: string;
  metersPlanned: number;
  metersInstalled: number;
  start: string;
  end: string;
  risk: "on_track" | "at_risk";
};

export const rolloutWaves: readonly RolloutWaveRow[] = [
  { wave: "Wave 4A", district: "Central", metersPlanned: 12_400, metersInstalled: 9_820, start: "Feb 2026", end: "Jun 2026", risk: "on_track" },
  { wave: "Wave 4B", district: "Bushrod", metersPlanned: 8_900, metersInstalled: 4_200, start: "Mar 2026", end: "Aug 2026", risk: "at_risk" },
  { wave: "Wave 5", district: "Paynesville", metersPlanned: 15_200, metersInstalled: 1_100, start: "May 2026", end: "Dec 2026", risk: "on_track" },
  { wave: "Pilot STS", district: "Duala", metersPlanned: 2_400, metersInstalled: 2_400, start: "Jan 2026", end: "Apr 2026", risk: "on_track" },
] as const;

export type WorkflowTaskRow = {
  id: string;
  title: string;
  stage: "Intake" | "Analysis" | "Approval" | "Execution" | "Closed";
  owner: string;
  due: string;
  priority: "P1" | "P2" | "P3";
};

export const workflowTasks: readonly WorkflowTaskRow[] = [
  {
    id: "wf-1",
    title: "Merge national ID batch into master registry",
    stage: "Approval",
    owner: "MDM Steward",
    due: "Apr 21",
    priority: "P1",
  },
  {
    id: "wf-2",
    title: "DCU firmware push — Duala cluster",
    stage: "Execution",
    owner: "Field Ops",
    due: "Apr 19",
    priority: "P1",
  },
  {
    id: "wf-3",
    title: "Re-rate postpaid large C&I after inspection pack",
    stage: "Analysis",
    owner: "Revenue Ops",
    due: "Apr 24",
    priority: "P2",
  },
  {
    id: "wf-4",
    title: "Connectivity failover test — LTE backup",
    stage: "Intake",
    owner: "Network Ops",
    due: "Apr 26",
    priority: "P3",
  },
  {
    id: "wf-5",
    title: "Close Bushrod inspection surge billing hold",
    stage: "Closed",
    owner: "Billing",
    due: "Apr 12",
    priority: "P2",
  },
] as const;

export type RegistryExceptionRow = {
  code: string;
  type: string;
  district: string;
  severity: "high" | "medium" | "low";
  detail: string;
};

export const registryTariffSegments = [
  { segment: "Residential STS", pct: 54, accounts: 261_000 },
  { segment: "Postpaid C&I", pct: 22, accounts: 106_000 },
  { segment: "Social / lifeline", pct: 14, accounts: 68_000 },
  { segment: "Government", pct: 10, accounts: 47_300 },
] as const;

export const registryExceptions: readonly RegistryExceptionRow[] = [
  {
    code: "EX-DUP-104",
    type: "Duplicate meter serial",
    district: "Caldwell",
    severity: "high",
    detail: "Two active accounts reference MTR-221003 with conflicting GPS.",
  },
  {
    code: "EX-GPS-089",
    type: "Missing coordinates",
    district: "Bushrod",
    severity: "medium",
    detail: "Energized postpaid without validated land parcel.",
  },
  {
    code: "EX-TAR-033",
    type: "Tariff class drift",
    district: "Central",
    severity: "low",
    detail: "STS profile does not match CIS tariff band after regrade.",
  },
] as const;
