"use client";

import type { WorkOrder } from "@/lib/demo-field-operations-data";
import { workOrderDurationHours } from "@/lib/demo-field-operations-data";
import { formatInteger, formatPercent } from "@/lib/format";

function Kpi({
  label,
  value,
  hint,
}: {
  label: string;
  value: string;
  hint: string;
}) {
  return (
    <div className="rounded-2xl border border-navy/[0.07] bg-gradient-to-b from-panel to-lgray/35 p-5 shadow-sm ring-1 ring-navy/[0.03] transition duration-200 ease-out hover:-translate-y-px hover:border-navy/12 hover:shadow-card sm:p-6">
      <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-dgray/55">
        {label}
      </p>
      <p className="mt-3 text-2xl font-semibold tabular-nums tracking-tight text-navy sm:text-3xl">
        {value}
      </p>
      <p className="mt-2 text-xs leading-relaxed text-dgray/60">{hint}</p>
    </div>
  );
}

function computeKpis(workOrders: readonly WorkOrder[]) {
  const now = Date.now();
  const completed = workOrders.filter(
    (w) => w.status === "COMPLETED" && w.completedAt
  );
  const durations = completed
    .map((w) => workOrderDurationHours(w))
    .filter((v): v is number => typeof v === "number");
  const avgHours =
    durations.length > 0
      ? durations.reduce((a, b) => a + b, 0) / durations.length
      : 0;

  const slaHits = completed.filter((w) => {
    if (!w.completedAt) return false;
    return new Date(w.completedAt).getTime() <= new Date(w.dueAt).getTime();
  }).length;
  const slaRate = completed.length ? slaHits / completed.length : 0;

  const completedToday = completed.filter((w) => {
    if (!w.completedAt) return false;
    const d = new Date(w.completedAt);
    const t = new Date();
    return d.toDateString() === t.toDateString();
  }).length;

  const overdue = workOrders.filter((w) => {
    if (w.status === "COMPLETED") return false;
    return new Date(w.dueAt).getTime() < now;
  }).length;

  return { avgHours, slaRate, completedToday, overdue };
}

export function FieldKpiRow({
  workOrders,
}: {
  workOrders: readonly WorkOrder[];
}) {
  const { avgHours, slaRate, completedToday, overdue } =
    computeKpis(workOrders);

  return (
    <div className="grid gap-4 lg:grid-cols-4">
      <Kpi
        label="Avg completion time"
        value={`${avgHours.toFixed(1)}h`}
        hint="Rolling window across closed work orders"
      />
      <Kpi
        label="SLA attainment"
        value={formatPercent(slaRate)}
        hint="Completed on or before committed due time"
      />
      <Kpi
        label="Completed today"
        value={formatInteger(completedToday)}
        hint="Closed-out jobs since midnight (local)"
      />
      <Kpi
        label="Overdue open jobs"
        value={formatInteger(overdue)}
        hint="Active backlog past committed due"
      />
    </div>
  );
}
