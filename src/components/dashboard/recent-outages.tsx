"use client";

import type { OutageRow } from "@/lib/demo-executive-dashboard-data";
import { EmptyState } from "@/components/ui/empty-state";
import { formatInteger } from "@/lib/format";
import { cn } from "@/lib/utils";

function formatAgo(iso: string) {
  const mins = Math.max(
    0,
    Math.floor((Date.now() - new Date(iso).getTime()) / 60_000)
  );
  if (mins < 60) return `${mins}m ago`;
  const hrs = Math.floor(mins / 60);
  if (hrs < 48) return `${hrs}h ago`;
  const days = Math.floor(hrs / 24);
  return `${days}d ago`;
}

function StatusPill({ status }: { status: OutageRow["status"] }) {
  return (
    <span
      className={cn(
        "inline-flex rounded-full border px-2 py-0.5 text-[11px] font-semibold",
        status === "Restored" && "border-gold/25 bg-gold/10 text-navy",
        status === "Contained" && "border-navy/10 bg-navy/[0.04] text-dgray/80",
        status === "In progress" && "border-navy/15 bg-panel text-navy"
      )}
    >
      {status}
    </span>
  );
}

export function RecentOutages({ outages }: { outages: readonly OutageRow[] }) {
  if (outages.length === 0) {
    return (
      <div className="px-6 py-10">
        <EmptyState
          title="No outages in this window"
          description="When incidents are recorded for the reporting period, they will appear here with status and affected customers."
        />
      </div>
    );
  }

  return (
    <div className="divide-y divide-navy/[0.06]">
      {outages.map((o) => (
        <div
          key={o.id}
          className="flex items-start justify-between gap-4 px-6 py-4 transition duration-150 hover:bg-lgray/45"
        >
          <div className="min-w-0">
            <p className="text-sm font-semibold text-navy">{o.district}</p>
            <p className="mt-1 text-xs tabular-nums text-dgray/60">
              {formatAgo(o.startedAt)} ·{" "}
              <span className="font-semibold text-dgray/70">
                {formatInteger(o.customersAffected)}
              </span>{" "}
              customers
            </p>
          </div>
          <StatusPill status={o.status} />
        </div>
      ))}
    </div>
  );
}
