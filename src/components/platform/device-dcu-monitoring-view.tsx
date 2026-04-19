"use client";

import Link from "next/link";
import { DashboardPanel } from "@/components/dashboard/dashboard-panel";
import { PlatformPageHeader } from "@/components/ui/platform-page-header";
import { dcuDevices } from "@/lib/demo-operating-modules";
import { cn } from "@/lib/utils";

function alarmBadge(a: (typeof dcuDevices)[number]["alarm"]) {
  if (a === "critical") return "border-risk-critical/35 bg-risk-critical/[0.08] text-risk-critical";
  if (a === "watch") return "border-risk-watch/35 bg-risk-watch/10 text-dgray";
  return "border-forest/35 bg-forest/10 text-forest";
}

export function DeviceDcuMonitoringView() {
  return (
    <div className="mx-auto w-full max-w-[1480px] space-y-8 pb-10">
      <PlatformPageHeader
        kicker="Device / DCU monitoring"
        title="Fleet health for data concentrators and last-mile endpoints"
        description="Silence windows, signal strength, and battery posture predict where revenue and outage telemetry will drop before customers complain. Tie alarms to Action Workflow and field dispatch."
        badges={
          <span className="rounded-full border border-navy/10 bg-lgray px-3 py-1 text-xs font-semibold text-navy/80">
            Live-style feed (demo)
          </span>
        }
        actions={
          <Link
            href="/platform/connectivity-management"
            className="rounded-lg border border-navy/15 bg-lgray px-3 py-2 text-xs font-semibold text-navy transition hover:bg-panel"
          >
            Connectivity
          </Link>
        }
      />

      <div className="grid gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-navy/[0.08] bg-panel p-5 shadow-sm">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-dgray/50">Fleet online</p>
          <p className="mt-2 text-2xl font-semibold tabular-nums text-navy">98.2%</p>
          <p className="mt-1 text-xs text-dgray/65">Rolling 24h uplink success.</p>
        </div>
        <div className="rounded-2xl border border-navy/[0.08] bg-panel p-5 shadow-sm">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-dgray/50">Critical alarms</p>
          <p className="mt-2 text-2xl font-semibold text-risk-critical">3</p>
          <p className="mt-1 text-xs text-dgray/65">Battery under 45% or silence over 3h.</p>
        </div>
        <div className="rounded-2xl border border-navy/[0.08] bg-panel p-5 shadow-sm">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-dgray/50">Firmware drift</p>
          <p className="mt-2 text-2xl font-semibold tabular-nums text-risk-watch">6.4%</p>
          <p className="mt-1 text-xs text-dgray/65">Devices not on approved baseline.</p>
        </div>
      </div>

      <DashboardPanel
        title="DCU inventory & signal posture"
        subtitle="Signal in dBm; thresholds are illustrative for evaluation."
      >
        <div className="overflow-x-auto">
          <table className="w-full min-w-[760px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-navy/[0.08] text-[11px] font-semibold uppercase tracking-wide text-dgray/55">
                <th className="px-5 py-3">DCU</th>
                <th className="px-5 py-3">Feeder</th>
                <th className="px-5 py-3">District</th>
                <th className="px-5 py-3">Last uplink</th>
                <th className="px-5 py-3 text-right">Signal</th>
                <th className="px-5 py-3 text-right">Battery</th>
                <th className="px-5 py-3">Alarm</th>
              </tr>
            </thead>
            <tbody>
              {dcuDevices.map((row) => (
                <tr key={row.id} className="border-b border-navy/[0.05] hover:bg-navy/[0.02]">
                  <td className="px-5 py-4 font-mono text-xs font-semibold text-navy">{row.id}</td>
                  <td className="px-5 py-4 text-dgray/80">{row.feeder}</td>
                  <td className="px-5 py-4 text-dgray/80">{row.district}</td>
                  <td className="px-5 py-4 tabular-nums text-dgray/75">{row.lastUplink}</td>
                  <td className="px-5 py-4 text-right font-mono text-xs tabular-nums text-dgray/80">
                    {row.signalDbm} dBm
                  </td>
                  <td className="px-5 py-4 text-right font-semibold tabular-nums text-navy">{row.batteryPct}%</td>
                  <td className="px-5 py-4">
                    <span
                      className={cn(
                        "inline-flex rounded-full border px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide",
                        alarmBadge(row.alarm)
                      )}
                    >
                      {row.alarm}
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
