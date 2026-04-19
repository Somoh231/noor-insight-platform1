export type RiskTier = "LOW" | "ELEVATED" | "SEVERE";

export type RiskZoneArea = {
  id: string;
  label: string;
  tier: RiskTier;
  /** SVG path in viewBox coordinates (0–1000 × 0–640). */
  path: string;
};

export type TransformerSchematic = {
  id: string;
  /** Hub-relative angle in degrees (0 = east). */
  angleDeg: number;
  /** Distance from hub in SVG units. */
  radius: number;
  feeder: string;
  zoneLabel: string;
  tier: RiskTier;
  connectedCustomers: number;
  billedKwh: number;
  consumedKwh: number;
  theftRiskScore: number;
  lastInspection: string;
};

export const LOSS_INTEL_HUB = { x: 500, y: 310 } as const;

export const riskZoneAreas: readonly RiskZoneArea[] = [
  {
    id: "z-north",
    label: "North corridor",
    tier: "ELEVATED",
    path: "M120 40 C260 20 420 40 520 120 C620 200 560 300 420 320 C260 340 120 260 120 120 Z",
  },
  {
    id: "z-south",
    label: "South industrial",
    tier: "SEVERE",
    path: "M220 360 C360 320 520 340 760 380 C900 420 900 560 640 600 C420 620 220 560 160 480 C120 420 160 380 220 360 Z",
  },
  {
    id: "z-west",
    label: "West residential",
    tier: "LOW",
    path: "M40 140 C120 120 200 140 240 220 C260 300 200 380 120 400 C40 420 20 320 40 220 Z",
  },
] as const;

export const transformers: readonly TransformerSchematic[] = [
  {
    id: "TX-1042",
    angleDeg: 12,
    radius: 210,
    feeder: "FDR-A12",
    zoneLabel: "North corridor",
    tier: "ELEVATED",
    connectedCustomers: 18420,
    billedKwh: 9_820_000,
    consumedKwh: 11_040_000,
    theftRiskScore: 62,
    lastInspection: "2026-03-02T09:20:00.000Z",
  },
  {
    id: "TX-1088",
    angleDeg: 44,
    radius: 175,
    feeder: "FDR-A12",
    zoneLabel: "North corridor",
    tier: "LOW",
    connectedCustomers: 9420,
    billedKwh: 5_010_000,
    consumedKwh: 5_180_000,
    theftRiskScore: 28,
    lastInspection: "2026-03-18T14:05:00.000Z",
  },
  {
    id: "TX-1120",
    angleDeg: 72,
    radius: 235,
    feeder: "FDR-B04",
    zoneLabel: "South industrial",
    tier: "SEVERE",
    connectedCustomers: 22640,
    billedKwh: 10_200_000,
    consumedKwh: 13_900_000,
    theftRiskScore: 86,
    lastInspection: "2026-02-09T11:40:00.000Z",
  },
  {
    id: "TX-1156",
    angleDeg: 102,
    radius: 190,
    feeder: "FDR-B04",
    zoneLabel: "South industrial",
    tier: "SEVERE",
    connectedCustomers: 19880,
    billedKwh: 8_960_000,
    consumedKwh: 12_420_000,
    theftRiskScore: 79,
    lastInspection: "2026-01-22T08:15:00.000Z",
  },
  {
    id: "TX-1184",
    angleDeg: 132,
    radius: 155,
    feeder: "FDR-B07",
    zoneLabel: "South industrial",
    tier: "ELEVATED",
    connectedCustomers: 12110,
    billedKwh: 6_540_000,
    consumedKwh: 7_210_000,
    theftRiskScore: 54,
    lastInspection: "2026-03-11T16:50:00.000Z",
  },
  {
    id: "TX-1201",
    angleDeg: 162,
    radius: 200,
    feeder: "FDR-B07",
    zoneLabel: "South industrial",
    tier: "ELEVATED",
    connectedCustomers: 15340,
    billedKwh: 7_880_000,
    consumedKwh: 9_020_000,
    theftRiskScore: 58,
    lastInspection: "2026-02-27T10:25:00.000Z",
  },
  {
    id: "TX-1219",
    angleDeg: 192,
    radius: 168,
    feeder: "FDR-C01",
    zoneLabel: "West residential",
    tier: "LOW",
    connectedCustomers: 8840,
    billedKwh: 4_720_000,
    consumedKwh: 4_910_000,
    theftRiskScore: 22,
    lastInspection: "2026-03-20T13:10:00.000Z",
  },
  {
    id: "TX-1233",
    angleDeg: 222,
    radius: 142,
    feeder: "FDR-C01",
    zoneLabel: "West residential",
    tier: "LOW",
    connectedCustomers: 6120,
    billedKwh: 3_260_000,
    consumedKwh: 3_380_000,
    theftRiskScore: 19,
    lastInspection: "2026-03-05T07:55:00.000Z",
  },
  {
    id: "TX-1248",
    angleDeg: 252,
    radius: 218,
    feeder: "FDR-C03",
    zoneLabel: "West residential",
    tier: "ELEVATED",
    connectedCustomers: 13920,
    billedKwh: 7_020_000,
    consumedKwh: 8_260_000,
    theftRiskScore: 49,
    lastInspection: "2026-02-14T15:30:00.000Z",
  },
  {
    id: "TX-1260",
    angleDeg: 282,
    radius: 185,
    feeder: "FDR-C03",
    zoneLabel: "North corridor",
    tier: "LOW",
    connectedCustomers: 10120,
    billedKwh: 5_440_000,
    consumedKwh: 5_610_000,
    theftRiskScore: 24,
    lastInspection: "2026-03-16T09:00:00.000Z",
  },
  {
    id: "TX-1274",
    angleDeg: 312,
    radius: 205,
    feeder: "FDR-A09",
    zoneLabel: "North corridor",
    tier: "ELEVATED",
    connectedCustomers: 16240,
    billedKwh: 8_120_000,
    consumedKwh: 9_480_000,
    theftRiskScore: 57,
    lastInspection: "2026-03-01T12:40:00.000Z",
  },
  {
    id: "TX-1288",
    angleDeg: 342,
    radius: 178,
    feeder: "FDR-A09",
    zoneLabel: "North corridor",
    tier: "LOW",
    connectedCustomers: 9240,
    billedKwh: 4_980_000,
    consumedKwh: 5_120_000,
    theftRiskScore: 21,
    lastInspection: "2026-03-19T08:20:00.000Z",
  },
] as const;

export function transformerPosition(t: TransformerSchematic) {
  const rad = (t.angleDeg * Math.PI) / 180;
  return {
    x: LOSS_INTEL_HUB.x + Math.cos(rad) * t.radius,
    y: LOSS_INTEL_HUB.y + Math.sin(rad) * t.radius,
  };
}

export function lossPctFromReadings(billedKwh: number, consumedKwh: number) {
  if (consumedKwh <= 0) return 0;
  return Math.max(0, (consumedKwh - billedKwh) / consumedKwh);
}
