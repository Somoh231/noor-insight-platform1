"use client";

import Link from "next/link";
import { DashboardPanel } from "@/components/dashboard/dashboard-panel";
import { PlatformPageHeader } from "@/components/ui/platform-page-header";
import { connectivityCircuits } from "@/lib/demo-operating-modules";
import { cn } from "@/lib/utils";

function backhaulStyle(b: (typeof connectivityCircuits)[number]["backhaul"]) {
  if (b === "Fiber") return "border-forest/30 bg-forest/10 text-forest";
  if (b === "Microwave") return "border-navy/12 bg-lgray text-navy";
  if (b === "LTE") return "border-gold/35 bg-gold/10 text-navy";
  return "border-risk-watch/35 bg-risk-watch/10 text-dgray";
}

export function ConnectivityManagementView() {
  return (
    <div className="mx-auto w-full max-w-[1480px] space-y-8 pb-10">
      <PlatformPageHeader
        kicker="Connectivity management"
        title="Backhaul, failover, and SLA posture across circuits"
        description="Last-mile diversity protects revenue-grade telemetry. Monitor circuits that feed DCU uplinks, SCADA, and prepaid vending reconciliation so outages never surprise the revenue desk."
        badges={
          <span className="rounded-full border border-gold/35 bg-gold/10 px-3 py-1 text-xs font-semibold text-navy">
            SLA cockpit
          </span>
        }
        actions={
          <Link
            href="/platform/device-dcu-monitoring"
            className="rounded-lg border border-navy/15 bg-lgray px-3 py-2 text-xs font-semibold text-navy transition hover:bg-panel"
          >
            DCU monitoring
          </Link>
        }
      />

      <div className="grid gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-navy/[0.08] bg-panel p-5 shadow-sm">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-dgray/50">Circuits managed</p>
          <p className="mt-2 text-2xl font-semibold tabular-nums text-navy">186</p>
        </div>
        <div className="rounded-2xl border border-navy/[0.08] bg-panel p-5 shadow-sm">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-dgray/50">30-day SLA breach</p>
          <p className="mt-2 text-2xl font-semibold text-risk-critical">4</p>
        </div>
        <div className="rounded-2xl border border-navy/[0.08] bg-panel p-5 shadow-sm">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-dgray/50">Failover drills (YTD)</p>
          <p className="mt-2 text-2xl font-semibold tabular-nums text-navy">11</p>
        </div>
      </div>

      <DashboardPanel
        title="Circuit register"
        subtitle="Incident counts include planned maintenance windows excluded from SLA in production."
      >
        <div className="overflow-x-auto">
          <table className="w-full min-w-[680px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-navy/[0.08] text-[11px] font-semibold uppercase tracking-wide text-dgray/55">
                <th className="px-5 py-3">Circuit</th>
                <th className="px-5 py-3">District</th>
                <th className="px-5 py-3">Backhaul</th>
                <th className="px-5 py-3 text-right">SLA 30d</th>
                <th className="px-5 py-3 text-right">Incidents</th>
              </tr>
            </thead>
            <tbody>
              {connectivityCircuits.map((row) => (
                <tr key={row.circuit} className="border-b border-navy/[0.05] hover:bg-navy/[0.02]">
                  <td className="px-5 py-4 font-mono text-xs font-semibold text-navy">{row.circuit}</td>
                  <td className="px-5 py-4 text-dgray/80">{row.district}</td>
                  <td className="px-5 py-4">
                    <span
                      className={cn(
                        "inline-flex rounded-full border px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide",
                        backhaulStyle(row.backhaul)
                      )}
                    >
                      {row.backhaul}
                    </span>
                  </td>
                  <td className="px-5 py-4 text-right font-semibold tabular-nums text-navy">{row.slaPct}%</td>
                  <td className="px-5 py-4 text-right tabular-nums text-dgray/75">{row.incidents30d}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </DashboardPanel>
    </div>
  );
}
