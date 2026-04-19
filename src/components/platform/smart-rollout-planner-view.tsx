"use client";

import Link from "next/link";
import { DashboardPanel } from "@/components/dashboard/dashboard-panel";
import { PlatformPageHeader } from "@/components/ui/platform-page-header";
import { rolloutWaves } from "@/lib/demo-operating-modules";
import { cn } from "@/lib/utils";

export function SmartRolloutPlannerView() {
  return (
    <div className="mx-auto w-full max-w-[1480px] space-y-8 pb-10">
      <PlatformPageHeader
        kicker="Smart rollout planner"
        title="Sequence waves by readiness, logistics, and revenue upside"
        description="Bind Smart Meter Readiness scores, warehouse stock, and crew capacity into one executable plan—so political commitments translate into metered, billable endpoints on schedule."
        badges={
          <span className="rounded-full border border-navy/10 bg-lgray px-3 py-1 text-xs font-semibold text-navy/80">
            Planning horizon · 12 mo
          </span>
        }
        actions={
          <Link
            href="/platform/smart-meter-readiness"
            className="rounded-lg border border-gold/40 bg-gold/10 px-3 py-2 text-xs font-semibold text-navy transition hover:bg-gold/20"
          >
            Readiness scores
          </Link>
        }
      />

      <div className="grid gap-4 lg:grid-cols-2">
        <div className="rounded-2xl border border-navy/[0.08] bg-gradient-to-br from-navy to-navy/[0.92] p-6 text-lgray shadow-lg ring-1 ring-navy/20">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gold/90">Meters remaining (portfolio)</p>
          <p className="mt-3 text-3xl font-semibold tabular-nums">214,600</p>
          <p className="mt-2 text-sm text-lgray/75">Across approved waves; excludes disputed land parcels.</p>
        </div>
        <div className="rounded-2xl border border-navy/[0.08] bg-panel p-6 shadow-sm ring-1 ring-navy/[0.04]">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-dgray/50">At-risk waves</p>
          <p className="mt-3 text-3xl font-semibold text-risk-watch">1</p>
          <p className="mt-2 text-sm text-dgray/70">Logistics + readiness conflict — escalate in Action Workflow.</p>
        </div>
      </div>

      <DashboardPanel
        title="Wave plan & burn-down"
        subtitle="Install counts are cumulative within evaluation snapshot."
      >
        <div className="divide-y divide-navy/[0.06]">
          {rolloutWaves.map((w) => {
            const pct = Math.round((w.metersInstalled / w.metersPlanned) * 100);
            return (
              <div key={w.wave} className="px-5 py-5 sm:px-6">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <p className="font-semibold text-navy">{w.wave}</p>
                    <p className="mt-1 text-xs text-dgray/65">
                      {w.district} · {w.start} — {w.end}
                    </p>
                  </div>
                  <span
                    className={cn(
                      "rounded-full border px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide",
                      w.risk === "on_track"
                        ? "border-forest/35 bg-forest/10 text-forest"
                        : "border-risk-watch/40 bg-risk-watch/10 text-dgray"
                    )}
                  >
                    {w.risk === "on_track" ? "On track" : "At risk"}
                  </span>
                </div>
                <div className="mt-4 flex flex-wrap items-center gap-4 text-sm tabular-nums text-dgray/80">
                  <span>
                    <span className="font-semibold text-navy">{w.metersInstalled.toLocaleString()}</span>
                    <span className="text-dgray/55"> / </span>
                    <span>{w.metersPlanned.toLocaleString()}</span>
                    <span className="ml-1 text-xs text-dgray/55">meters</span>
                  </span>
                  <span className="text-xs font-semibold text-navy">{pct}%</span>
                </div>
                <div className="mt-2 h-2 overflow-hidden rounded-full bg-navy/[0.06]">
                  <div
                    className={cn(
                      "h-full rounded-full transition-all",
                      w.risk === "on_track" ? "bg-forest" : "bg-risk-watch"
                    )}
                    style={{ width: `${Math.min(100, pct)}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </DashboardPanel>
    </div>
  );
}
