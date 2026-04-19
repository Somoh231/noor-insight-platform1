"use client";

import type { LossZoneRow } from "@/lib/demo-executive-dashboard-data";
import { EmptyState } from "@/components/ui/empty-state";
import { formatInteger, formatPercent } from "@/lib/format";
import { cn } from "@/lib/utils";

export function LossZonesTable({ rows }: { rows: readonly LossZoneRow[] }) {
  if (rows.length === 0) {
    return (
      <div className="p-6">
        <EmptyState
          title="No loss zones to display"
          description="Once zone-level loss metrics are available for this period, ranked zones will populate this table."
        />
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-xl border border-navy/[0.06]">
      <table className="w-full border-collapse text-left text-sm">
        <caption className="sr-only">
          Commercial loss rate, active customers, and trend by zone.
        </caption>
        <thead className="bg-navy/[0.03] text-[11px] font-semibold uppercase tracking-[0.16em] text-dgray/55">
          <tr>
            <th className="px-4 py-3">Zone</th>
            <th className="px-4 py-3 text-right">Commercial loss</th>
            <th className="px-4 py-3 text-right">Active customers</th>
            <th className="hidden px-4 py-3 text-right sm:table-cell">Trend</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r, idx) => (
            <tr
              key={r.zone}
              className={cn(
                "transition duration-150 hover:bg-lgray/55",
                idx !== 0 && "border-t border-navy/[0.05]"
              )}
            >
              <td className="px-4 py-3">
                <div className="font-semibold text-navy">{r.zone}</div>
                <div className="mt-1 text-xs text-dgray/60 sm:hidden">
                  Trend:{" "}
                  <span className="font-semibold tabular-nums text-navy">
                    {r.trendVsPrior >= 0 ? "+" : ""}
                    {(r.trendVsPrior * 100).toFixed(1)} pts
                  </span>
                </div>
              </td>
              <td className="px-4 py-3 text-right font-semibold tabular-nums text-navy">
                {formatPercent(r.commercialLossPct)}
              </td>
              <td className="px-4 py-3 text-right tabular-nums text-dgray/80">
                {formatInteger(r.activeCustomers)}
              </td>
              <td className="hidden px-4 py-3 text-right sm:table-cell">
                <span
                  className={cn(
                    "inline-flex rounded-full border px-2 py-0.5 text-[11px] font-semibold tabular-nums",
                    r.trendVsPrior <= 0
                      ? "border-gold/25 bg-gold/10 text-navy"
                      : "border-navy/10 bg-navy/[0.04] text-dgray/75"
                  )}
                >
                  {r.trendVsPrior >= 0 ? "+" : ""}
                  {(r.trendVsPrior * 100).toFixed(1)} pts
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
