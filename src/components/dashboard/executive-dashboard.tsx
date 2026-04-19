"use client";

import dynamic from "next/dynamic";
import { DashboardPanel } from "@/components/dashboard/dashboard-panel";
import { KpiRow } from "@/components/dashboard/kpi-row";
import { LossHotspotMap } from "@/components/dashboard/loss-hotspot-map";
import { LossZonesTable } from "@/components/dashboard/loss-zones-table";
import { RecentOutages } from "@/components/dashboard/recent-outages";
import { PlatformPageHeader } from "@/components/ui/platform-page-header";
import { ChartMapPlaceholder } from "@/components/ui/chart-map-placeholder";
import {
  executiveDashboardPeriodLabel,
  lossHotspots,
  lossZones,
  recentOutages,
} from "@/lib/demo-executive-dashboard-data";
import { POWERED_BY_BRAND } from "@/lib/constants";

const RevenueTrendChart = dynamic(
  () =>
    import("@/components/dashboard/revenue-trend-chart").then((m) => m.RevenueTrendChart),
  {
    ssr: false,
    loading: () => (
      <ChartMapPlaceholder
        label="Loading revenue chart…"
        className="h-[320px] w-full sm:h-[360px]"
      />
    ),
  }
);

const CollectionsByDistrictChart = dynamic(
  () =>
    import("@/components/dashboard/collections-by-district-chart").then(
      (m) => m.CollectionsByDistrictChart
    ),
  {
    ssr: false,
    loading: () => (
      <ChartMapPlaceholder
        label="Loading collections chart…"
        className="h-[320px] w-full sm:h-[340px]"
      />
    ),
  }
);

export function ExecutiveDashboard() {
  return (
    <div className="mx-auto w-full max-w-[1480px] space-y-8 pb-10">
      <PlatformPageHeader
        kicker="Executive overview"
        title="Dashboard"
        description="Consolidated performance across revenue integrity, customer footprint, and service continuity, normalized for leadership review."
        badges={
          <span className="rounded-full border border-navy/10 bg-panel px-3 py-1 text-xs font-semibold text-navy/80">
            {executiveDashboardPeriodLabel}
          </span>
        }
        actions={
          <button
            type="button"
            className="rounded-lg border border-navy/15 bg-lgray px-3 py-2 text-xs font-semibold text-navy/70 opacity-60"
            disabled
            aria-disabled="true"
            title="Coming soon"
          >
            Export pack
          </button>
        }
      />

      <KpiRow />

      <div className="grid gap-6 xl:grid-cols-12">
        <DashboardPanel
          className="xl:col-span-8"
          title="Revenue trend"
          subtitle="Collections trajectory across the enterprise (representative series for evaluation)."
          action={
            <span className="rounded-full border border-navy/10 bg-lgray px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-dgray/55">
              USD
            </span>
          }
        >
          <RevenueTrendChart />
        </DashboardPanel>

        <DashboardPanel
          className="xl:col-span-4"
          title="Recent outages"
          subtitle="Highest-impact events in the current reporting window."
        >
          <RecentOutages outages={recentOutages} />
        </DashboardPanel>

        <DashboardPanel
          className="xl:col-span-7"
          title="Loss hotspot map"
          subtitle="Commercial loss intensity by geography (sample markers for orientation)."
        >
          <div className="p-4 sm:p-5">
            <LossHotspotMap hotspots={lossHotspots} />
          </div>
        </DashboardPanel>

        <DashboardPanel
          className="xl:col-span-5"
          title="Top loss zones"
          subtitle="Ranked by commercial loss rate and customer base scale."
        >
          <div className="p-4 sm:p-5">
            <LossZonesTable rows={lossZones} />
          </div>
        </DashboardPanel>

        <DashboardPanel
          className="xl:col-span-12"
          title="Collections by district"
          subtitle="Collected revenue attribution (cash + digital), normalized monthly."
          action={
            <span className="rounded-full border border-navy/10 bg-lgray px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-dgray/55">
              USD
            </span>
          }
        >
          <CollectionsByDistrictChart />
        </DashboardPanel>
      </div>

      <p className="text-center text-[11px] leading-relaxed text-dgray/50">
        Figures shown use a controlled sample dataset for product evaluation. Live deployments
        connect to your governed warehouse and metering sources under contract. {POWERED_BY_BRAND}.
      </p>
    </div>
  );
}
