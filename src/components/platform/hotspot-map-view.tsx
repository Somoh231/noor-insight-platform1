"use client";

import Link from "next/link";
import { LossHotspotMap } from "@/components/dashboard/loss-hotspot-map";
import { RecentOutages } from "@/components/dashboard/recent-outages";
import { DashboardPanel } from "@/components/dashboard/dashboard-panel";
import { PlatformPageHeader } from "@/components/ui/platform-page-header";
import { outageLeakCorrelation } from "@/lib/demo-commercial-wedge";
import { lossHotspots, recentOutages } from "@/lib/demo-executive-dashboard-data";
import { formatCurrency } from "@/lib/format";

export function HotspotMapView() {
  return (
    <div className="mx-auto w-full max-w-[1480px] space-y-8 pb-10">
      <PlatformPageHeader
        kicker="Hotspot Map"
        title="Geographic leakage with outage overlay"
        description="Loss intensity markers show where commercial leakage concentrates; correlated outages reveal where reliability stress converts into uncaptured revenue. Pair with Grid Intelligence for feeder-level drill-down."
        badges={
          <span className="rounded-full border border-navy/10 bg-lgray px-3 py-1 text-xs font-semibold text-navy/80">
            Evaluation markers
          </span>
        }
        actions={
          <div className="flex flex-wrap gap-2">
            <Link
              href="/platform/grid-intelligence"
              className="rounded-lg border border-navy/15 bg-lgray px-3 py-2 text-xs font-semibold text-navy transition hover:bg-panel focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy/30"
            >
              Grid Intelligence
            </Link>
            <Link
              href="/platform/revenue-recovery"
              className="rounded-lg border border-gold/40 bg-gold/10 px-3 py-2 text-xs font-semibold text-navy transition hover:bg-gold/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy/30"
            >
              Revenue Recovery Engine
            </Link>
          </div>
        }
      />

      <DashboardPanel
        title="Commercial loss geography"
        subtitle="Marker size reflects normalized leakage intensity; configure Mapbox for live basemap in deployment."
      >
        <div className="p-4 sm:p-5">
          <LossHotspotMap hotspots={lossHotspots} />
        </div>
      </DashboardPanel>

      <div className="grid gap-6 lg:grid-cols-2">
        <DashboardPanel
          title="Active & recent outages"
          subtitle="Customer impact window — tie restoration posture to revenue protection follow-up."
        >
          <RecentOutages outages={recentOutages} />
        </DashboardPanel>

        <DashboardPanel
          title="Leakage × outage correlation (modeled)"
          subtitle="Directional exposure for war-gaming; production binds to your OMS timestamps and billing intervals."
        >
          <ul className="divide-y divide-navy/[0.06]">
            {outageLeakCorrelation.map((row) => (
              <li key={row.district} className="flex flex-col gap-1 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="font-semibold text-navy">{row.district}</p>
                  <p className="mt-1 text-xs text-dgray/65">{row.leakSignal}</p>
                  <p className="mt-1 text-[11px] tabular-nums text-dgray/55">
                    {row.customersAffected.toLocaleString()} customers affected
                  </p>
                </div>
                <p className="shrink-0 text-sm font-semibold tabular-nums text-gold">
                  {formatCurrency(row.estRevenueAtRiskUsd, { notation: "compact" })} at risk
                </p>
              </li>
            ))}
          </ul>
        </DashboardPanel>
      </div>
    </div>
  );
}
