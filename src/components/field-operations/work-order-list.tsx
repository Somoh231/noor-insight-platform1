"use client";

import type {
  WorkOrder,
  WorkOrderStatus,
} from "@/lib/demo-field-operations-data";
import { EmptyState } from "@/components/ui/empty-state";
import { formatInteger } from "@/lib/format";
import { cn } from "@/lib/utils";

function statusPill(status: WorkOrderStatus) {
  return cn(
    "inline-flex rounded-full border px-2 py-0.5 text-[11px] font-bold uppercase tracking-wide",
    status === "OPEN" && "border-navy/10 bg-navy/[0.05] text-navy",
    status === "IN_PROGRESS" && "border-gold/30 bg-gold/10 text-navy",
    status === "COMPLETED" &&
      "border-risk-safe/25 bg-risk-safe/10 text-risk-safe",
    status === "ON_HOLD" && "border-navy/10 bg-panel text-dgray/70"
  );
}

function statusLabel(status: WorkOrderStatus) {
  switch (status) {
    case "OPEN":
      return "Open";
    case "IN_PROGRESS":
      return "In progress";
    case "COMPLETED":
      return "Completed";
    case "ON_HOLD":
      return "On hold";
  }
}

function priorityPill(p: WorkOrder["priority"]) {
  return cn(
    "inline-flex rounded-md border px-2 py-0.5 text-[11px] font-bold tabular-nums",
    p === "P1" &&
      "border-risk-critical/25 bg-risk-critical/10 text-risk-critical",
    p === "P2" && "border-navy/12 bg-navy/[0.05] text-navy",
    p === "P3" && "border-navy/10 bg-lgray text-dgray/70"
  );
}

function formatShort(iso: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(iso));
}

export function WorkOrderList({
  rows,
  techById,
}: {
  rows: readonly WorkOrder[];
  techById: Record<string, string>;
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-navy/10 bg-panel/90 shadow-sm ring-1 ring-navy/[0.04]">
      <div className="flex flex-col gap-2 border-b border-navy/[0.06] px-5 py-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-dgray/50">
            Dispatch queue
          </p>
          <h2 className="mt-2 text-sm font-semibold tracking-tight text-navy">
            Work orders
          </h2>
        </div>
        <p className="text-xs tabular-nums text-dgray/60">
          {formatInteger(rows.length)} shown
        </p>
      </div>

      <div className="overflow-x-auto">
        {rows.length === 0 ? (
          <div className="px-5 py-10">
            <EmptyState
              title="No work orders match"
              description='Clear the search text or set status to "All" to see the full dispatch queue again.'
            />
          </div>
        ) : (
          <table className="w-full min-w-[860px] border-collapse text-left text-sm">
            <caption className="sr-only">
              Work orders: identifier, title, site, district, priority, status, technician, and due time.
            </caption>
            <thead className="bg-navy/[0.03] text-[11px] font-semibold uppercase tracking-[0.16em] text-dgray/55">
            <tr>
              <th className="px-5 py-3">WO</th>
              <th className="px-5 py-3">Title</th>
              <th className="px-5 py-3">Site</th>
              <th className="px-5 py-3">District</th>
              <th className="px-5 py-3">Pri</th>
              <th className="px-5 py-3">Status</th>
              <th className="px-5 py-3">Tech</th>
              <th className="px-5 py-3">Due</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((wo, idx) => (
              <tr
                key={wo.id}
                className={cn(
                  "transition duration-150 hover:bg-lgray/45",
                  idx !== 0 && "border-t border-navy/[0.05]"
                )}
              >
                <td className="px-5 py-3 font-semibold tabular-nums text-navy">
                  {wo.number}
                </td>
                <td className="px-5 py-3">
                  <div className="max-w-[320px] truncate font-semibold text-navy">
                    {wo.title}
                  </div>
                </td>
                <td className="px-5 py-3 text-dgray/75">{wo.site}</td>
                <td className="px-5 py-3 text-dgray/75">{wo.district}</td>
                <td className="px-5 py-3">
                  <span className={priorityPill(wo.priority)}>
                    {wo.priority}
                  </span>
                </td>
                <td className="px-5 py-3">
                  <span className={statusPill(wo.status)}>
                    {statusLabel(wo.status)}
                  </span>
                </td>
                <td className="px-5 py-3 text-dgray/75">
                  {wo.techId ? (
                    <span className="font-semibold text-navy/80">
                      {techById[wo.techId] ?? wo.techId}
                    </span>
                  ) : (
                    <span className="text-dgray/50">Unassigned</span>
                  )}
                </td>
                <td className="px-5 py-3 tabular-nums text-dgray/70">
                  {formatShort(wo.dueAt)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        )}
      </div>
    </div>
  );
}
