"use client";

import type { WorkOrderStatus } from "@/lib/demo-field-operations-data";
import { cn } from "@/lib/utils";

const statuses: Array<{ id: WorkOrderStatus | "ALL"; label: string }> = [
  { id: "ALL", label: "All" },
  { id: "OPEN", label: "Open" },
  { id: "IN_PROGRESS", label: "In progress" },
  { id: "COMPLETED", label: "Completed" },
  { id: "ON_HOLD", label: "On hold" },
];

export function FieldFilters({
  status,
  onStatus,
  query,
  onQuery,
}: {
  status: WorkOrderStatus | "ALL";
  onStatus: (s: WorkOrderStatus | "ALL") => void;
  query: string;
  onQuery: (q: string) => void;
}) {
  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-navy/10 bg-panel/90 p-4 shadow-sm ring-1 ring-navy/[0.04] sm:p-5 lg:flex-row lg:items-center lg:justify-between">
      <div className="flex flex-wrap gap-2">
        {statuses.map((s) => (
          <button
            key={s.id}
            type="button"
            onClick={() => onStatus(s.id)}
            className={cn(
              "rounded-full border px-3 py-1.5 text-xs font-bold uppercase tracking-[0.14em] transition duration-200 ease-out",
              status === s.id
                ? "border-navy/15 bg-navy text-lgray shadow-sm"
                : "border-navy/10 bg-lgray text-dgray/70 hover:border-navy/20 hover:text-navy"
            )}
          >
            {s.label}
          </button>
        ))}
      </div>
      <div className="w-full lg:max-w-sm">
        <label className="text-[11px] font-semibold uppercase tracking-[0.18em] text-dgray/55">
          Search work orders
        </label>
        <input
          value={query}
          onChange={(e) => onQuery(e.target.value)}
          placeholder="WO number, site, district…"
          className="mt-2 w-full rounded-lg border border-navy/15 bg-lgray px-3 py-2 text-sm text-navy outline-none ring-navy/15 transition focus:ring-2"
        />
      </div>
    </div>
  );
}
