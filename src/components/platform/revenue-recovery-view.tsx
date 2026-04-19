"use client";

import { DashboardPanel } from "@/components/dashboard/dashboard-panel";
import { LossHotspotMap } from "@/components/dashboard/loss-hotspot-map";
import { PlatformPageHeader } from "@/components/ui/platform-page-header";
import {
  revenueLeakageByCategory,
  revenueRecoveryOpportunities,
  totalRecoverablePipelineUsd,
} from "@/lib/demo-commercial-wedge";
import { lossHotspots } from "@/lib/demo-executive-dashboard-data";
import { formatCurrency } from "@/lib/format";
import { cn } from "@/lib/utils";
import Link from "next/link";

function confidenceBadge(c: (typeof revenueRecoveryOpportunities)[number]["confidence"]) {
  if (c === "high") return "border-gold/35 bg-gold/10 text-navy";
  if (c === "medium") return "border-navy/12 bg-lgray text-dgray/80";
  return "border-navy/10 bg-panel text-dgray/65";
}

export function RevenueRecoveryView() {
  return (
    <div className="mx-auto w-full max-w-[1480px] space-y-8 pb-10">
      <PlatformPageHeader
        kicker="Revenue recovery engine"
        title="Turn leakage into a ranked recovery program"
        description="Signals from billing, metering, outages, and field work converge into one prioritized list—so executives fund interventions with a defensible ROI story, not anecdotes."
        badges={
          <span className="rounded-full border border-gold/35 bg-gold/10 px-3 py-1 text-xs font-semibold text-navy">
            Top commercial wedge
          </span>
        }
        actions={
          <Link
            href="/platform/upload"
            className="rounded-lg border border-navy/15 bg-lgray px-3 py-2 text-xs font-semibold text-navy transition hover:bg-panel focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy/30"
          >
            Data upload center
          </Link>
        }
      />

      <div className="grid gap-4 lg:grid-cols-3">
        <div className="rounded-2xl border border-navy/[0.08] bg-gradient-to-br from-navy to-navy/[0.92] p-6 text-lgray shadow-lg ring-1 ring-navy/20 lg:col-span-1">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gold/90">
            Recoverable pipeline
          </p>
          <p className="mt-3 text-3xl font-semibold tabular-nums tracking-tight sm:text-4xl">
            {formatCurrency(totalRecoverablePipelineUsd, { notation: "compact" })}
          </p>
          <p className="mt-2 text-sm leading-relaxed text-lgray/75">
            Modeled 90-day capture window across the top five ranked opportunities (evaluation dataset).
          </p>
        </div>
        <div className="rounded-2xl border border-navy/[0.08] bg-panel p-6 shadow-sm ring-1 ring-navy/[0.04] lg:col-span-1">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-dgray/50">
            Where money leaks
          </p>
          <p className="mt-3 text-2xl font-semibold tabular-nums text-navy">18.7%</p>
          <p className="mt-1 text-sm text-dgray/70">Commercial loss rate (utility-wide, reconciled view).</p>
          <p className="mt-4 text-xs leading-relaxed text-dgray/60">
            Ranked opportunities isolate the subset that moves the curve fastest—billing drift, unmetered load,
            and collections at risk.
          </p>
        </div>
        <div className="rounded-2xl border border-navy/[0.08] bg-panel p-6 shadow-sm ring-1 ring-navy/[0.04] lg:col-span-1">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-dgray/50">
            Executive urgency
          </p>
          <p className="mt-3 text-2xl font-semibold text-navy">2 critical</p>
          <p className="mt-1 text-sm text-dgray/70">Actions awaiting sign-off this week.</p>
          <Link
            href="/platform/action-center"
            className="mt-4 inline-flex text-sm font-semibold text-gold underline-offset-4 hover:underline"
          >
            Open Action Center →
          </Link>
        </div>
      </div>

      <DashboardPanel
        title="Leak detection — where money leaves first"
        subtitle="Category roll-up reconciles billing, metering, collections, and outage economics into one leakage model (evaluation weights)."
      >
        <div className="grid gap-4 p-5 sm:grid-cols-2 lg:grid-cols-4">
          {revenueLeakageByCategory.map((row) => (
            <div
              key={row.id}
              className="rounded-xl border border-navy/[0.07] bg-lgray/40 p-4 ring-1 ring-navy/[0.03]"
            >
              <p className="text-[11px] font-semibold uppercase tracking-wide text-dgray/50">
                {row.label}
              </p>
              <p className="mt-2 text-2xl font-semibold tabular-nums text-navy">{row.sharePct}%</p>
              <p className="mt-1 text-sm font-semibold tabular-nums text-gold">
                {formatCurrency(row.estimatedRecoverableUsd, { notation: "compact" })}
              </p>
              <p className="mt-2 text-xs leading-relaxed text-dgray/65">{row.hint}</p>
            </div>
          ))}
        </div>
      </DashboardPanel>

      <DashboardPanel
        title="Ranked revenue opportunities"
        subtitle="Recoverable value estimates are directional; live deployments bind to your tariff book, loss categories, and approval workflows."
        action={
          <span className="rounded-full border border-navy/10 bg-lgray px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-dgray/55">
            Rank model v0.9
          </span>
        }
      >
        <div className="overflow-x-auto">
          <table className="w-full min-w-[720px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-navy/[0.08] text-[11px] font-semibold uppercase tracking-wide text-dgray/55">
                <th className="px-5 py-3">Rank</th>
                <th className="px-5 py-3">Opportunity</th>
                <th className="px-5 py-3">District</th>
                <th className="px-5 py-3">Leak type</th>
                <th className="px-5 py-3 text-right">Recoverable</th>
                <th className="px-5 py-3">Confidence</th>
              </tr>
            </thead>
            <tbody>
              {revenueRecoveryOpportunities.map((row) => (
                <tr
                  key={row.id}
                  className="border-b border-navy/[0.05] transition hover:bg-navy/[0.02]"
                >
                  <td className="px-5 py-4 font-semibold tabular-nums text-navy">{row.rank}</td>
                  <td className="max-w-xs px-5 py-4">
                    <p className="font-semibold text-navy">{row.title}</p>
                    <p className="mt-1 text-xs leading-relaxed text-dgray/65">{row.drivers}</p>
                  </td>
                  <td className="px-5 py-4 text-dgray/80">{row.district}</td>
                  <td className="px-5 py-4 text-dgray/75">{row.leakType}</td>
                  <td className="px-5 py-4 text-right font-semibold tabular-nums text-navy">
                    {formatCurrency(row.estimatedRecoverableUsd, { notation: "compact" })}
                  </td>
                  <td className="px-5 py-4">
                    <span
                      className={cn(
                        "inline-flex rounded-full border px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide",
                        confidenceBadge(row.confidence)
                      )}
                    >
                      {row.confidence}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </DashboardPanel>

      <DashboardPanel
        title="Hotspot map — commercial loss geography"
        subtitle="Intensity reflects reconciled loss signals normalized by customer density (evaluation markers)."
      >
        <div className="p-4 sm:p-5">
          <LossHotspotMap hotspots={lossHotspots} />
        </div>
      </DashboardPanel>
    </div>
  );
}
