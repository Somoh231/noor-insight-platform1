"use client";

import Link from "next/link";
import { DashboardPanel } from "@/components/dashboard/dashboard-panel";
import { PlatformPageHeader } from "@/components/ui/platform-page-header";
import { meterReadinessByDistrict } from "@/lib/demo-operating-modules";
import { cn } from "@/lib/utils";

function scoreTone(score: number) {
  if (score >= 75) return "text-forest";
  if (score >= 65) return "text-navy";
  return "text-risk-watch";
}

export function SmartMeterReadinessView() {
  return (
    <div className="mx-auto w-full max-w-[1480px] space-y-8 pb-10">
      <PlatformPageHeader
        kicker="Smart meter readiness"
        title="Readiness score — where modernization will pay first"
        description="Composite 0–100 score across communications, metering posture, CIS alignment, and field execution. Use it to sequence capital, logistics, and change management—not vanity dashboards."
        badges={
          <span className="rounded-full border border-navy/10 bg-lgray px-3 py-1 text-xs font-semibold text-navy/80">
            Model v1.2 (demo)
          </span>
        }
        actions={
          <Link
            href="/platform/smart-rollout-planner"
            className="rounded-lg border border-gold/40 bg-gold/10 px-3 py-2 text-xs font-semibold text-navy transition hover:bg-gold/20"
          >
            Smart rollout planner
          </Link>
        }
      />

      <div className="grid gap-4 lg:grid-cols-4">
        <div className="rounded-2xl border border-navy/[0.08] bg-panel p-5 shadow-sm lg:col-span-1">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-dgray/50">Utility-wide</p>
          <p className={cn("mt-2 text-3xl font-semibold tabular-nums", scoreTone(71))}>71</p>
          <p className="mt-1 text-xs text-dgray/65">Weighted by customer count.</p>
        </div>
        <div className="rounded-2xl border border-navy/[0.08] bg-panel p-5 shadow-sm lg:col-span-3">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-dgray/50">Pillar weights</p>
          <p className="mt-2 text-sm leading-relaxed text-dgray/75">
            Communications 30% · Metering asset 25% · CIS / billing 25% · Field readiness 20%. Weights
            configurable per regulator pack.
          </p>
        </div>
      </div>

      <DashboardPanel
        title="District readiness register"
        subtitle="Gap column highlights the dominant blocker for investment narrative."
      >
        <div className="overflow-x-auto">
          <table className="w-full min-w-[880px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-navy/[0.08] text-[11px] font-semibold uppercase tracking-wide text-dgray/55">
                <th className="px-5 py-3">District</th>
                <th className="px-5 py-3 text-right">Score</th>
                <th className="px-5 py-3 text-right">Comms</th>
                <th className="px-5 py-3 text-right">Metering</th>
                <th className="px-5 py-3 text-right">CIS</th>
                <th className="px-5 py-3 text-right">Field</th>
                <th className="px-5 py-3">Primary gap</th>
              </tr>
            </thead>
            <tbody>
              {meterReadinessByDistrict.map((row) => (
                <tr key={row.district} className="border-b border-navy/[0.05] hover:bg-navy/[0.02]">
                  <td className="px-5 py-4 font-semibold text-navy">{row.district}</td>
                  <td className={cn("px-5 py-4 text-right text-lg font-semibold tabular-nums", scoreTone(row.score))}>
                    {row.score}
                  </td>
                  <td className="px-5 py-4 text-right tabular-nums text-dgray/80">{row.commsPct}%</td>
                  <td className="px-5 py-4 text-right tabular-nums text-dgray/80">{row.meteringPct}%</td>
                  <td className="px-5 py-4 text-right tabular-nums text-dgray/80">{row.cisPct}%</td>
                  <td className="px-5 py-4 text-right tabular-nums text-dgray/80">{row.fieldPct}%</td>
                  <td className="max-w-xs px-5 py-4 text-xs leading-relaxed text-dgray/70">{row.gap}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </DashboardPanel>
    </div>
  );
}
