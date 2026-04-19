"use client";

import type { Technician } from "@/lib/demo-field-operations-data";
import {
  techStatusLabel,
  techStatusPillClass,
} from "@/components/field-operations/tech-status-styles";

function formatAgo(iso: string) {
  const mins = Math.max(
    0,
    Math.floor((Date.now() - new Date(iso).getTime()) / 60_000)
  );
  if (mins < 60) return `${mins}m`;
  const hrs = Math.floor(mins / 60);
  if (hrs < 48) return `${hrs}h`;
  const days = Math.floor(hrs / 24);
  return `${days}d`;
}

export function TechnicianStatusPanel({
  technicians,
}: {
  technicians: readonly Technician[];
}) {
  const ordered = [...technicians].sort((a, b) => {
    const rank: Record<string, number> = {
      ON_JOB: 0,
      EN_ROUTE: 1,
      IDLE: 2,
      OFF_DUTY: 3,
    };
    return (rank[a.status] ?? 9) - (rank[b.status] ?? 9);
  });

  return (
    <div className="rounded-2xl border border-navy/10 bg-panel/90 shadow-sm ring-1 ring-navy/[0.04]">
      <div className="border-b border-navy/[0.06] px-5 py-4">
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-dgray/50">
          Field roster
        </p>
        <h2 className="mt-2 text-sm font-semibold tracking-tight text-navy">
          Technician status
        </h2>
      </div>
      <div className="divide-y divide-navy/[0.06]">
        {ordered.map((t) => (
          <div
            key={t.id}
            className="px-5 py-4 transition duration-150 hover:bg-lgray/45"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold text-navy">
                  {t.name}
                </p>
                <p className="mt-1 text-[11px] font-semibold tabular-nums text-dgray/55">
                  Ping {formatAgo(t.lastPing)} ago
                </p>
              </div>
              <span className={techStatusPillClass(t.status)}>
                {techStatusLabel(t.status)}
              </span>
            </div>
            {t.activeWoNumber ? (
              <p className="mt-3 text-[11px] leading-relaxed text-dgray/65">
                Active:{" "}
                <span className="font-semibold tabular-nums text-navy">
                  {t.activeWoNumber}
                </span>
              </p>
            ) : (
              <p className="mt-3 text-[11px] text-dgray/55">
                No active work order
              </p>
            )}
          </div>
        ))}
      </div>
      <div className="border-t border-navy/[0.06] px-5 py-4">
        <p className="text-[11px] leading-relaxed text-dgray/55">
          Status reflects telematics and dispatch acknowledgements as configured for your tenant.
        </p>
      </div>
    </div>
  );
}
