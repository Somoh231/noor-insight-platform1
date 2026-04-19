"use client";

import Link from "next/link";
import { DashboardPanel } from "@/components/dashboard/dashboard-panel";
import { PlatformPageHeader } from "@/components/ui/platform-page-header";
import { networkNodes } from "@/lib/demo-operating-modules";
import { cn } from "@/lib/utils";

function healthBadge(h: (typeof networkNodes)[number]["health"]) {
  if (h === "green") return "border-forest/35 bg-forest/10 text-forest";
  if (h === "amber") return "border-risk-watch/35 bg-risk-watch/10 text-dgray";
  return "border-risk-critical/35 bg-risk-critical/[0.08] text-risk-critical";
}

export function NetworkMappingView() {
  return (
    <div className="mx-auto w-full max-w-[1480px] space-y-8 pb-10">
      <PlatformPageHeader
        kicker="Network mapping"
        title="Operate the grid as a living map, not a static diagram"
        description="HV, MV, and LV assets roll up to customers, revenue, and reliability. Bind GIS, DMS, and outage feeds so crews and executives share one network truth."
        badges={
          <span className="rounded-full border border-gold/35 bg-gold/10 px-3 py-1 text-xs font-semibold text-navy">
            Topology preview
          </span>
        }
        actions={
          <div className="flex flex-wrap gap-2">
            <Link
              href="/platform/hotspot-map"
              className="rounded-lg border border-navy/15 bg-lgray px-3 py-2 text-xs font-semibold text-navy transition hover:bg-panel"
            >
              Hotspot map
            </Link>
            <Link
              href="/platform/grid-intelligence"
              className="rounded-lg border border-navy/15 bg-lgray px-3 py-2 text-xs font-semibold text-navy transition hover:bg-panel"
            >
              Grid intelligence
            </Link>
          </div>
        }
      />

      <div className="grid gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-navy/[0.08] bg-gradient-to-br from-navy to-navy/[0.92] p-6 text-lgray shadow-lg ring-1 ring-navy/20">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gold/90">Mapped segments</p>
          <p className="mt-3 text-3xl font-semibold tabular-nums">12,840</p>
          <p className="mt-2 text-sm text-lgray/75">MV/LV spans with customer linkage (evaluation count).</p>
        </div>
        <div className="rounded-2xl border border-navy/[0.08] bg-panel p-6 shadow-sm ring-1 ring-navy/[0.04]">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-dgray/50">GIS freshness</p>
          <p className="mt-3 text-2xl font-semibold tabular-nums text-navy">6.2 days</p>
          <p className="mt-1 text-sm text-dgray/70">Median age since last verified survey import.</p>
        </div>
        <div className="rounded-2xl border border-navy/[0.08] bg-panel p-6 shadow-sm ring-1 ring-navy/[0.04]">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-dgray/50">Red nodes</p>
          <p className="mt-3 text-2xl font-semibold text-risk-critical">7</p>
          <p className="mt-1 text-sm text-dgray/70">Require joint grid + revenue remediation.</p>
        </div>
      </div>

      <DashboardPanel
        title="Critical nodes & downstream exposure"
        subtitle="Health reflects loading, protection trips, and DCU silence windows (demo scoring)."
      >
        <div className="overflow-x-auto">
          <table className="w-full min-w-[720px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-navy/[0.08] text-[11px] font-semibold uppercase tracking-wide text-dgray/55">
                <th className="px-5 py-3">Node</th>
                <th className="px-5 py-3">Layer</th>
                <th className="px-5 py-3">District</th>
                <th className="px-5 py-3 text-right">Customers</th>
                <th className="px-5 py-3">Health</th>
              </tr>
            </thead>
            <tbody>
              {networkNodes.map((row) => (
                <tr key={row.id} className="border-b border-navy/[0.05] hover:bg-navy/[0.02]">
                  <td className="px-5 py-4 font-semibold text-navy">{row.label}</td>
                  <td className="px-5 py-4 font-mono text-xs text-dgray/75">{row.layer}</td>
                  <td className="px-5 py-4 text-dgray/80">{row.district}</td>
                  <td className="px-5 py-4 text-right tabular-nums text-dgray/80">
                    {row.customersDownstream.toLocaleString()}
                  </td>
                  <td className="px-5 py-4">
                    <span
                      className={cn(
                        "inline-flex rounded-full border px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide",
                        healthBadge(row.health)
                      )}
                    >
                      {row.health}
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
