export type WorkOrderStatus = "OPEN" | "IN_PROGRESS" | "COMPLETED" | "ON_HOLD";

export type WorkPriority = "P1" | "P2" | "P3";

export type WorkOrder = {
  id: string;
  number: string;
  title: string;
  site: string;
  district: string;
  priority: WorkPriority;
  status: WorkOrderStatus;
  techId: string | null;
  createdAt: string;
  dueAt: string;
  completedAt: string | null;
};

export type TechStatus = "IDLE" | "EN_ROUTE" | "ON_JOB" | "OFF_DUTY";

export type Technician = {
  id: string;
  name: string;
  status: TechStatus;
  lat: number;
  lng: number;
  /** Fallback schematic coordinates (0–100). */
  sx: number;
  sy: number;
  lastPing: string;
  activeWoNumber?: string;
};

export const technicians: readonly Technician[] = [
  {
    id: "tech-01",
    name: "J. Flomo",
    status: "ON_JOB",
    lat: 6.3156,
    lng: -10.7969,
    sx: 46,
    sy: 44,
    lastPing: new Date(Date.now() - 1000 * 60 * 3).toISOString(),
    activeWoNumber: "WO-240188",
  },
  {
    id: "tech-02",
    name: "A. Kollie",
    status: "EN_ROUTE",
    lat: 6.38,
    lng: -10.72,
    sx: 58,
    sy: 36,
    lastPing: new Date(Date.now() - 1000 * 60 * 8).toISOString(),
    activeWoNumber: "WO-240191",
  },
  {
    id: "tech-03",
    name: "P. Weah",
    status: "IDLE",
    lat: 6.28,
    lng: -10.85,
    sx: 34,
    sy: 52,
    lastPing: new Date(Date.now() - 1000 * 60 * 21).toISOString(),
  },
  {
    id: "tech-04",
    name: "R. Dennis",
    status: "ON_JOB",
    lat: 5.92,
    lng: -9.98,
    sx: 72,
    sy: 62,
    lastPing: new Date(Date.now() - 1000 * 60 * 2).toISOString(),
    activeWoNumber: "WO-240179",
  },
  {
    id: "tech-05",
    name: "S. Kamara",
    status: "OFF_DUTY",
    lat: 6.34,
    lng: -10.65,
    sx: 52,
    sy: 30,
    lastPing: new Date(Date.now() - 1000 * 60 * 240).toISOString(),
  },
] as const;

export const initialWorkOrders: readonly WorkOrder[] = [
  {
    id: "wo-1",
    number: "WO-240188",
    title: "Replace LV CT bank (Paynesville cluster)",
    site: "SS-12 / Feeder A12",
    district: "Paynesville",
    priority: "P1",
    status: "IN_PROGRESS",
    techId: "tech-01",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 26).toISOString(),
    dueAt: new Date(Date.now() + 1000 * 60 * 60 * 6).toISOString(),
    completedAt: null,
  },
  {
    id: "wo-2",
    number: "WO-240191",
    title: "Thermal scan (downtown ring main)",
    site: "RM-03",
    district: "Monrovia",
    priority: "P2",
    status: "IN_PROGRESS",
    techId: "tech-02",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 8).toISOString(),
    dueAt: new Date(Date.now() + 1000 * 60 * 60 * 10).toISOString(),
    completedAt: null,
  },
  {
    id: "wo-3",
    number: "WO-240179",
    title: "Pole changeout (Buchanan industrial)",
    site: "Line 44",
    district: "Buchanan",
    priority: "P1",
    status: "IN_PROGRESS",
    techId: "tech-04",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 18).toISOString(),
    dueAt: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString(),
    completedAt: null,
  },
  {
    id: "wo-4",
    number: "WO-240160",
    title: "Meter investigation (suspected bypass)",
    site: "C12-8841",
    district: "Sinkor",
    priority: "P1",
    status: "OPEN",
    techId: null,
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 4).toISOString(),
    dueAt: new Date(Date.now() + 1000 * 60 * 60 * 20).toISOString(),
    completedAt: null,
  },
  {
    id: "wo-5",
    number: "WO-240155",
    title: "Vegetation clearance (MV span)",
    site: "Span 19B",
    district: "Margibi",
    priority: "P3",
    status: "OPEN",
    techId: null,
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 30).toISOString(),
    dueAt: new Date(Date.now() + 1000 * 60 * 60 * 48).toISOString(),
    completedAt: null,
  },
  {
    id: "wo-6",
    number: "WO-240140",
    title: "Recloser commissioning",
    site: "RC-07",
    district: "Gbarnga",
    priority: "P2",
    status: "COMPLETED",
    techId: "tech-03",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 72).toISOString(),
    dueAt: new Date(Date.now() - 1000 * 60 * 60 * 48).toISOString(),
    completedAt: new Date(Date.now() - 1000 * 60 * 60 * 50).toISOString(),
  },
  {
    id: "wo-7",
    number: "WO-240132",
    title: "Customer reconnect (payment cleared)",
    site: "SVC-22109",
    district: "Monrovia",
    priority: "P2",
    status: "COMPLETED",
    techId: "tech-01",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 80).toISOString(),
    dueAt: new Date(Date.now() - 1000 * 60 * 60 * 60).toISOString(),
    completedAt: new Date(Date.now() - 1000 * 60 * 60 * 58).toISOString(),
  },
  {
    id: "wo-8",
    number: "WO-240118",
    title: "Substation battery bank test",
    site: "SS-04",
    district: "Harper",
    priority: "P3",
    status: "ON_HOLD",
    techId: null,
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 120).toISOString(),
    dueAt: new Date(Date.now() + 1000 * 60 * 60 * 24).toISOString(),
    completedAt: null,
  },
] as const;

export function workOrderDurationHours(wo: WorkOrder) {
  if (!wo.completedAt) return null;
  const ms =
    new Date(wo.completedAt).getTime() - new Date(wo.createdAt).getTime();
  return Math.max(0, ms / 3_600_000);
}

export function nextWorkOrderNumber(existing: readonly WorkOrder[]) {
  const max = existing.reduce((acc, wo) => {
    const n = Number(wo.number.replace(/\D/g, "")) || 0;
    return Math.max(acc, n);
  }, 240200);
  return `WO-${max + 1}`;
}

/** Representative series for completion throughput (last seven shifts). */
export const completionsLast7Days: readonly {
  day: string;
  completed: number;
}[] = [
  { day: "Mon", completed: 18 },
  { day: "Tue", completed: 22 },
  { day: "Wed", completed: 19 },
  { day: "Thu", completed: 26 },
  { day: "Fri", completed: 24 },
  { day: "Sat", completed: 28 },
  { day: "Sun", completed: 21 },
] as const;
