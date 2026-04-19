"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { DashboardPanel } from "@/components/dashboard/dashboard-panel";
import { KpiRow } from "@/components/dashboard/kpi-row";
import { LossHotspotMap } from "@/components/dashboard/loss-hotspot-map";
import { LossZonesTable } from "@/components/dashboard/loss-zones-table";
import { RecentOutages } from "@/components/dashboard/recent-outages";
import { ActionCenter } from "@/components/platform/action-center";
import { PlatformPageHeader } from "@/components/ui/platform-page-header";
import { ChartMapPlaceholder } from "@/components/ui/chart-map-placeholder";
import {
  executiveDashboardPeriodLabel,
  lossHotspots,
  lossZones,
  recentOutages,
} from "@/lib/demo-executive-dashboard-data";
import { totalRecoverablePipelineUsd } from "@/lib/demo-commercial-wedge";
import { POWERED_BY_BRAND } from "@/lib/constants";
import { formatCurrency } from "@/lib/format";

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
        title="Where the utility earns—or leaks—this quarter"
        description="Noor Insight compresses revenue recovery, grid stress, and field posture into one executive surface so boards and regulators see the same numbers you fund against."
        badges={
          <span className="rounded-full border border-navy/10 bg-panel px-3 py-1 text-xs font-semibold text-navy/80">
            {executiveDashboardPeriodLabel}
          </span>
        }
        actions={
          <div className="flex flex-wrap items-center gap-2">
            <Link
              href="/platform/revenue-recovery"
              className="rounded-lg border border-gold/40 bg-gold/10 px-3 py-2 text-xs font-semibold text-navy transition hover:bg-gold/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy/30"
            >
              Revenue recovery engine
            </Link>
            <button
              type="button"
              className="rounded-lg border border-navy/15 bg-lgray px-3 py-2 text-xs font-semibold text-navy/70 opacity-60"
              disabled
              aria-disabled="true"
              title="Coming soon"
            >
              Export pack
            </button>
          </div>
        }
      />

      <div className="rounded-xl border border-gold/35 bg-gradient-to-r from-gold/[0.12] via-panel to-panel px-4 py-3.5 shadow-sm sm:px-5">
        <p className="text-sm font-semibold leading-snug text-navy">
          <span className="text-gold">Recoverable pipeline:</span>{" "}
          {formatCurrency(totalRecoverablePipelineUsd, { notation: "compact" })} modeled across
          ranked opportunities — prosecute the list in the{" "}
          <Link
            className="font-bold text-navy underline decoration-gold/50 underline-offset-2 hover:decoration-gold"
            href="/platform/revenue-recovery"
          >
            revenue recovery engine
          </Link>
          .
        </p>
      </div>

      <ActionCenter />

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
          title="Hotspot map — geographic loss"
          subtitle="Commercial loss intensity by geography (sample markers for orientation). Pair with Grid intelligence for feeder stress."
          action={
            <Link
              href="/platform/hotspot-map"
              className="rounded-full border border-gold/35 bg-gold/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-navy transition hover:bg-gold/20"
            >
              Full map
            </Link>
          }
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
