"use client";

import Link from "next/link";
import { LossHotspotMap } from "@/components/dashboard/loss-hotspot-map";
import { DashboardPanel } from "@/components/dashboard/dashboard-panel";
import { PlatformPageHeader } from "@/components/ui/platform-page-header";
import { gridFeederRows } from "@/lib/demo-commercial-wedge";
import { lossHotspots } from "@/lib/demo-executive-dashboard-data";
import { cn } from "@/lib/utils";

function riskBadge(risk: (typeof gridFeederRows)[number]["risk"]) {
  if (risk === "elevated") return "border-risk-critical/30 bg-risk-critical/[0.07] text-risk-critical";
  if (risk === "watch") return "border-risk-watch/35 bg-risk-watch/[0.1] text-dgray";
  return "border-navy/10 bg-lgray text-dgray/75";
}

export function GridIntelligenceView() {
  return (
    <div className="mx-auto w-full max-w-[1480px] space-y-8 pb-10">
      <PlatformPageHeader
        kicker="Grid intelligence"
        title="See where the network stresses revenue and reliability"
        description="Feeder loading, outage recurrence, and commercial-loss geography converge so capital, vegetation, and revenue programs share one prioritization lens."
        badges={
          <span className="rounded-full border border-gold/35 bg-gold/10 px-3 py-1 text-xs font-semibold text-navy">
            Loss × grid overlay
          </span>
        }
        actions={
          <Link
            href="/platform/hotspot-map"
            className="rounded-lg border border-navy/15 bg-lgray px-3 py-2 text-xs font-semibold text-navy transition hover:bg-panel focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy/30"
          >
            Hotspot Map
          </Link>
        }
      />

      <div className="grid gap-4 lg:grid-cols-3">
        <div className="rounded-2xl border border-navy/[0.08] bg-gradient-to-br from-navy to-navy/[0.92] p-6 text-lgray shadow-lg ring-1 ring-navy/20 lg:col-span-1">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gold/90">
            Elevated feeders
          </p>
          <p className="mt-3 text-3xl font-semibold tabular-nums text-lgray sm:text-4xl">3</p>
          <p className="mt-2 text-sm leading-relaxed text-lgray/75">
            Above loading threshold with repeated outage signatures in the last 30 days.
          </p>
        </div>
        <div className="rounded-2xl border border-navy/[0.08] bg-panel p-6 shadow-sm ring-1 ring-navy/[0.04] lg:col-span-1">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-dgray/50">
            Revenue at risk (modeled)
          </p>
          <p className="mt-3 text-2xl font-semibold tabular-nums text-navy">$2.1M</p>
          <p className="mt-1 text-sm text-dgray/70">
            Outage minutes × tariff + unmetered tap exposure on stressed segments.
          </p>
        </div>
        <div className="rounded-2xl border border-navy/[0.08] bg-panel p-6 shadow-sm ring-1 ring-navy/[0.04] lg:col-span-1">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-dgray/50">
            Field alignment
          </p>
          <p className="mt-3 text-2xl font-semibold text-navy">14 packs</p>
          <p className="mt-1 text-sm text-dgray/70">
            Inspection routes queued with grid + billing corroboration.
          </p>
        </div>
      </div>

      <DashboardPanel
        title="Hotspot map — commercial loss geography"
        subtitle="Same loss intelligence markers, reframed against feeder stress for joint ops / revenue war rooms."
      >
        <div className="p-4 sm:p-5">
          <LossHotspotMap hotspots={lossHotspots} />
        </div>
      </DashboardPanel>

      <DashboardPanel
        title="Feeder stress register"
        subtitle="Loading and outage counts are evaluation signals—bind to your DMS / OMS in deployment."
      >
        <div className="overflow-x-auto">
          <table className="w-full min-w-[640px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-navy/[0.08] text-[11px] font-semibold uppercase tracking-wide text-dgray/55">
                <th className="px-5 py-3">Feeder</th>
                <th className="px-5 py-3">District</th>
                <th className="px-5 py-3 text-right">Loading</th>
                <th className="px-5 py-3 text-right">Outages 30d</th>
                <th className="px-5 py-3">Risk</th>
              </tr>
            </thead>
            <tbody>
              {gridFeederRows.map((row) => (
                <tr key={row.feeder} className="border-b border-navy/[0.05] hover:bg-navy/[0.02]">
                  <td className="px-5 py-4 font-semibold text-navy">{row.feeder}</td>
                  <td className="px-5 py-4 text-dgray/80">{row.district}</td>
                  <td className="px-5 py-4 text-right font-semibold tabular-nums text-navy">
                    {row.loadingPct}%
                  </td>
                  <td className="px-5 py-4 text-right tabular-nums text-dgray/80">{row.outages30d}</td>
                  <td className="px-5 py-4">
                    <span
                      className={cn(
                        "inline-flex rounded-full border px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide",
                        riskBadge(row.risk)
                      )}
                    >
                      {row.risk}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </DashboardPanel>
    </div>
  );
}
