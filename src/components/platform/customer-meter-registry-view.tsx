"use client";

import Link from "next/link";
import { DashboardPanel } from "@/components/dashboard/dashboard-panel";
import { PlatformPageHeader } from "@/components/ui/platform-page-header";
import { customerMeterRows } from "@/lib/demo-commercial-wedge";
import { registryExceptions, registryTariffSegments } from "@/lib/demo-operating-modules";
import { cn } from "@/lib/utils";

function statusBadge(s: (typeof customerMeterRows)[number]["status"]) {
  if (s === "active") return "border-forest/35 bg-forest/10 text-forest";
  if (s === "disputed") return "border-risk-watch/40 bg-risk-watch/10 text-dgray";
  return "border-navy/10 bg-lgray text-dgray/65";
}

function severityBadge(s: (typeof registryExceptions)[number]["severity"]) {
  if (s === "high") return "border-risk-critical/35 bg-risk-critical/[0.08] text-risk-critical";
  if (s === "medium") return "border-risk-watch/35 bg-risk-watch/10 text-dgray";
  return "border-navy/10 bg-panel text-dgray/65";
}

export function CustomerMeterRegistryView() {
  return (
    <div className="mx-auto w-full max-w-[1480px] space-y-8 pb-10">
      <PlatformPageHeader
        kicker="Customer & meter registry"
        title="Golden record for accounts, meters, tariffs, and geography"
        description="The registry is the spine of a utility operating platform—every revenue, field, and network workflow resolves here. Exceptions route to merge rules, inspections, and billing holds with full lineage."
        badges={
          <span className="rounded-full border border-navy/10 bg-lgray px-3 py-1 text-xs font-semibold text-navy/80">
            MDM / CIS view (demo)
          </span>
        }
        actions={
          <div className="flex flex-wrap gap-2">
            <Link
              href="/platform/upload"
              className="rounded-lg border border-navy/15 bg-lgray px-3 py-2 text-xs font-semibold text-navy transition hover:bg-panel focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy/30"
            >
              Upload registry delta
            </Link>
            <Link
              href="/platform/network-mapping"
              className="rounded-lg border border-gold/40 bg-gold/10 px-3 py-2 text-xs font-semibold text-navy transition hover:bg-gold/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy/30"
            >
              Network mapping
            </Link>
          </div>
        }
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-2xl border border-navy/[0.08] bg-panel p-5 shadow-sm ring-1 ring-navy/[0.03]">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-dgray/50">Match queue</p>
          <p className="mt-2 text-2xl font-semibold tabular-nums text-navy">2,180</p>
          <p className="mt-1 text-xs text-dgray/65">National ID batch pending merge approval.</p>
        </div>
        <div className="rounded-2xl border border-navy/[0.08] bg-panel p-5 shadow-sm ring-1 ring-navy/[0.03]">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-dgray/50">Disputed meters</p>
          <p className="mt-2 text-2xl font-semibold tabular-nums text-risk-watch">312</p>
          <p className="mt-1 text-xs text-dgray/65">Linked to revenue recovery opportunities.</p>
        </div>
        <div className="rounded-2xl border border-navy/[0.08] bg-panel p-5 shadow-sm ring-1 ring-navy/[0.03]">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-dgray/50">GPS completeness</p>
          <p className="mt-2 text-2xl font-semibold tabular-nums text-navy">94.1%</p>
          <p className="mt-1 text-xs text-dgray/65">Energized accounts with valid coordinates.</p>
        </div>
        <div className="rounded-2xl border border-navy/[0.08] bg-gradient-to-br from-navy to-navy/[0.92] p-5 text-lgray shadow-lg ring-1 ring-navy/20">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gold/90">Exception backlog</p>
          <p className="mt-2 text-2xl font-semibold tabular-nums">{registryExceptions.length}</p>
          <p className="mt-1 text-xs text-lgray/75">Open high / medium integrity issues.</p>
        </div>
      </div>

      <DashboardPanel
        title="Tariff & segment mix (energized)"
        subtitle="Reconciles CIS tariff class against STS profile and large-account contracts."
      >
        <div className="grid gap-4 p-5 sm:grid-cols-2 lg:grid-cols-4">
          {registryTariffSegments.map((row) => (
            <div
              key={row.segment}
              className="rounded-xl border border-navy/[0.07] bg-lgray/40 p-4 ring-1 ring-navy/[0.03]"
            >
              <p className="text-[11px] font-semibold uppercase tracking-wide text-dgray/50">{row.segment}</p>
              <p className="mt-2 text-xl font-semibold tabular-nums text-navy">{row.pct}%</p>
              <p className="mt-1 text-xs tabular-nums text-dgray/65">{row.accounts.toLocaleString()} accounts</p>
            </div>
          ))}
        </div>
      </DashboardPanel>

      <DashboardPanel
        title="Integrity exceptions"
        subtitle="Each code opens a workflow pack with evidence links and approver roles."
      >
        <ul className="divide-y divide-navy/[0.06]">
          {registryExceptions.map((ex) => (
            <li key={ex.code} className="flex flex-col gap-2 px-5 py-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-mono text-xs font-semibold text-navy">{ex.code}</span>
                  <span
                    className={cn(
                      "rounded-full border px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide",
                      severityBadge(ex.severity)
                    )}
                  >
                    {ex.severity}
                  </span>
                </div>
                <p className="mt-1 text-sm font-semibold text-navy">{ex.type}</p>
                <p className="mt-1 text-xs leading-relaxed text-dgray/70">{ex.detail}</p>
              </div>
              <p className="shrink-0 text-xs font-semibold uppercase tracking-wide text-dgray/50">{ex.district}</p>
            </li>
          ))}
        </ul>
      </DashboardPanel>

      <DashboardPanel
        title="Registry spotlight"
        subtitle="Representative accounts for evaluation. Production binds to your MDM / CIS golden record."
      >
        <div className="overflow-x-auto">
          <table className="w-full min-w-[640px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-navy/[0.08] text-[11px] font-semibold uppercase tracking-wide text-dgray/55">
                <th className="px-5 py-3">Account</th>
                <th className="px-5 py-3">Meter</th>
                <th className="px-5 py-3">District</th>
                <th className="px-5 py-3">Status</th>
                <th className="px-5 py-3">Last read</th>
              </tr>
            </thead>
            <tbody>
              {customerMeterRows.map((row) => (
                <tr key={row.account} className="border-b border-navy/[0.05] hover:bg-navy/[0.02]">
                  <td className="px-5 py-4 font-mono text-xs font-semibold text-navy">{row.account}</td>
                  <td className="px-5 py-4 font-mono text-xs text-dgray/80">{row.meterId}</td>
                  <td className="px-5 py-4 text-dgray/80">{row.district}</td>
                  <td className="px-5 py-4">
                    <span
                      className={cn(
                        "inline-flex rounded-full border px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide",
                        statusBadge(row.status)
                      )}
                    >
                      {row.status}
                    </span>
                  </td>
                  <td className="px-5 py-4 tabular-nums text-dgray/75">{row.lastRead}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </DashboardPanel>
    </div>
  );
}
