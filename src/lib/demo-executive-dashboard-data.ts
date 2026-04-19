export type RevenuePoint = { period: string; revenue: number };

export type LossHotspot = {
  id: string;
  label: string;
  severity: "high" | "medium" | "low";
  lng: number;
  lat: number;
  /** Normalized coordinates for the non-Mapbox fallback (0–100). */
  sx: number;
  sy: number;
  /** 0–100 intensity for marker sizing. */
  intensity: number;
};

export type LossZoneRow = {
  zone: string;
  commercialLossPct: number;
  activeCustomers: number;
  trendVsPrior: number;
};

export type OutageRow = {
  id: string;
  district: string;
  startedAt: string;
  customersAffected: number;
  status: "Restored" | "In progress" | "Contained";
};

export type CollectionRow = { district: string; amount: number };

export const executiveDashboardPeriodLabel = "Last 30 days";

export const executiveKpis = {
  revenueCollected: 18_420_000,
  revenueDeltaVsPrior: 0.041,
  commercialLossPct: 0.187,
  commercialLossDeltaPts: -0.009,
  activeCustomers: 482_300,
  activeCustomersDelta: 0.012,
  outagesThisMonth: 37,
  outagesDeltaVsPrior: -0.08,
} as const;

export const revenueTrend: readonly RevenuePoint[] = [
  { period: "Jan", revenue: 15.2e6 },
  { period: "Feb", revenue: 15.6e6 },
  { period: "Mar", revenue: 16.1e6 },
  { period: "Apr", revenue: 16.0e6 },
  { period: "May", revenue: 16.8e6 },
  { period: "Jun", revenue: 17.1e6 },
  { period: "Jul", revenue: 17.4e6 },
  { period: "Aug", revenue: 17.9e6 },
  { period: "Sep", revenue: 18.0e6 },
  { period: "Oct", revenue: 18.2e6 },
  { period: "Nov", revenue: 18.3e6 },
  { period: "Dec", revenue: 18.42e6 },
] as const;

export const lossHotspots: readonly LossHotspot[] = [
  {
    id: "h1",
    label: "Greater Monrovia",
    severity: "high",
    lng: -10.7969,
    lat: 6.3156,
    sx: 34,
    sy: 56,
    intensity: 92,
  },
  {
    id: "h2",
    label: "Paynesville ring",
    severity: "high",
    lng: -10.695,
    lat: 6.385,
    sx: 46,
    sy: 48,
    intensity: 84,
  },
  {
    id: "m1",
    label: "Bomi corridor",
    severity: "medium",
    lng: -10.845,
    lat: 6.498,
    sx: 28,
    sy: 38,
    intensity: 63,
  },
  {
    id: "m2",
    label: "Buchanan industrial",
    severity: "medium",
    lng: -9.944,
    lat: 5.88,
    sx: 72,
    sy: 62,
    intensity: 58,
  },
  {
    id: "l1",
    label: "Southeast feeders",
    severity: "low",
    lng: -8.22,
    lat: 5.35,
    sx: 82,
    sy: 74,
    intensity: 41,
  },
] as const;

export const lossZones: readonly LossZoneRow[] = [
  {
    zone: "Greater Monrovia",
    commercialLossPct: 0.214,
    activeCustomers: 198_400,
    trendVsPrior: -0.011,
  },
  {
    zone: "Margibi / Kakata",
    commercialLossPct: 0.176,
    activeCustomers: 62_900,
    trendVsPrior: 0.004,
  },
  {
    zone: "Bomi / Tubmanburg",
    commercialLossPct: 0.169,
    activeCustomers: 41_200,
    trendVsPrior: -0.006,
  },
  {
    zone: "Grand Bassa",
    commercialLossPct: 0.151,
    activeCustomers: 55_700,
    trendVsPrior: -0.003,
  },
  {
    zone: "Sinoe / Greenville",
    commercialLossPct: 0.138,
    activeCustomers: 28_400,
    trendVsPrior: 0.001,
  },
  {
    zone: "Maryland / Harper",
    commercialLossPct: 0.129,
    activeCustomers: 19_600,
    trendVsPrior: 0.0,
  },
] as const;

export const recentOutages: readonly OutageRow[] = [
  {
    id: "o1",
    district: "Paynesville",
    startedAt: new Date(Date.now() - 1000 * 60 * 90).toISOString(),
    customersAffected: 12_400,
    status: "In progress",
  },
  {
    id: "o2",
    district: "Sinkor feeder group",
    startedAt: new Date(Date.now() - 1000 * 60 * 60 * 7).toISOString(),
    customersAffected: 6_200,
    status: "Contained",
  },
  {
    id: "o3",
    district: "Buchanan substation",
    startedAt: new Date(Date.now() - 1000 * 60 * 60 * 26).toISOString(),
    customersAffected: 3_050,
    status: "Restored",
  },
  {
    id: "o4",
    district: "Gbarnga north",
    startedAt: new Date(Date.now() - 1000 * 60 * 60 * 54).toISOString(),
    customersAffected: 1_780,
    status: "Restored",
  },
] as const;

export const collectionsByDistrict: readonly CollectionRow[] = [
  { district: "Greater Monrovia", amount: 9_420_000 },
  { district: "Margibi", amount: 1_860_000 },
  { district: "Grand Bassa", amount: 1_540_000 },
  { district: "Bomi", amount: 980_000 },
  { district: "Nimba", amount: 1_120_000 },
  { district: "Grand Gedeh", amount: 640_000 },
  { district: "Maryland", amount: 520_000 },
  { district: "Other districts", amount: 1_340_000 },
] as const;
