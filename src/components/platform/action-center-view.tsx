"use client";

import Link from "next/link";
import { DashboardPanel } from "@/components/dashboard/dashboard-panel";
import { PlatformPageHeader } from "@/components/ui/platform-page-header";
import { leadershipActions, type ActionStatus } from "@/lib/demo-commercial-wedge";
import { formatCurrency } from "@/lib/format";
import { cn } from "@/lib/utils";

function priorityStyles(p: (typeof leadershipActions)[number]["priority"]) {
  if (p === "critical") return "border-risk-critical/35 bg-risk-critical/[0.06] text-risk-critical";
  if (p === "high") return "border-gold/40 bg-gold/[0.08] text-navy";
  return "border-navy/10 bg-panel text-dgray/80";
}

function statusStyles(s: ActionStatus) {
  if (s === "Ready") return "border-forest/35 bg-forest/10 text-forest";
  if (s === "In review") return "border-gold/35 bg-gold/10 text-navy";
  if (s === "Blocked") return "border-risk-critical/30 bg-risk-critical/[0.07] text-risk-critical";
  if (s === "Scheduled") return "border-navy/12 bg-lgray text-dgray/80";
  return "border-navy/10 bg-panel text-dgray/65";
}

export function ActionCenterView() {
  return (
    <div className="mx-auto w-full max-w-[1480px] space-y-8 pb-10">
      <PlatformPageHeader
        kicker="Action Center"
        title="Prioritized moves with owners, dates, and status"
        description="Every item ties to recoverable value or regulatory exposure. Approve, block, or reschedule from your governed workflow—this surface is the executive control room for execution."
        badges={
          <span className="rounded-full border border-gold/35 bg-gold/10 px-3 py-1 text-xs font-semibold text-navy">
            Live posture (demo)
          </span>
        }
        actions={
          <Link
            href="/platform/revenue-recovery"
            className="rounded-lg border border-navy/15 bg-lgray px-3 py-2 text-xs font-semibold text-navy transition hover:bg-panel focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy/30"
          >
            Revenue Recovery Engine
          </Link>
        }
      />

      <div className="grid gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-navy/[0.08] bg-gradient-to-br from-navy to-navy/[0.92] p-6 text-lgray shadow-lg ring-1 ring-navy/20">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gold/90">Critical path</p>
          <p className="mt-3 text-3xl font-semibold tabular-nums">1</p>
          <p className="mt-2 text-sm text-lgray/75">Ready for sign-off this week.</p>
        </div>
        <div className="rounded-2xl border border-navy/[0.08] bg-panel p-6 shadow-sm ring-1 ring-navy/[0.04]">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-dgray/50">Blocked / waiting</p>
          <p className="mt-3 text-3xl font-semibold tabular-nums text-risk-critical">1</p>
          <p className="mt-2 text-sm text-dgray/70">Dependency: capital + roster.</p>
        </div>
        <div className="rounded-2xl border border-navy/[0.08] bg-panel p-6 shadow-sm ring-1 ring-navy/[0.04]">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-dgray/50">Modeled recoverable</p>
          <p className="mt-3 text-2xl font-semibold tabular-nums text-navy">
            {formatCurrency(2_780_000, { notation: "compact" })}
          </p>
          <p className="mt-2 text-sm text-dgray/70">Across open actions with value tags.</p>
        </div>
      </div>

      <DashboardPanel
        title="Leadership queue"
        subtitle="Owners are accountable roles; dates align to statutory and cash-close windows (evaluation data)."
      >
        <div className="hidden overflow-x-auto lg:block">
          <table className="w-full min-w-[900px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-navy/[0.08] text-[11px] font-semibold uppercase tracking-wide text-dgray/55">
                <th className="px-5 py-3">Priority</th>
                <th className="px-5 py-3">Action</th>
                <th className="px-5 py-3">Owner</th>
                <th className="px-5 py-3">Due</th>
                <th className="px-5 py-3">Status</th>
                <th className="px-5 py-3 text-right">Impact</th>
                <th className="px-5 py-3" />
              </tr>
            </thead>
            <tbody>
              {leadershipActions.map((a) => (
                <tr key={a.id} className="border-b border-navy/[0.05] hover:bg-navy/[0.02]">
                  <td className="px-5 py-4 align-top">
                    <span
                      className={cn(
                        "inline-flex rounded-full border px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide",
                        priorityStyles(a.priority)
                      )}
                    >
                      {a.priority}
                    </span>
                  </td>
                  <td className="max-w-xs px-5 py-4 align-top">
                    <p className="font-semibold text-navy">{a.title}</p>
                    <p className="mt-1 text-xs leading-relaxed text-dgray/65">{a.description}</p>
                  </td>
                  <td className="whitespace-nowrap px-5 py-4 align-top text-dgray/80">{a.owner}</td>
                  <td className="whitespace-nowrap px-5 py-4 align-top font-medium tabular-nums text-navy">
                    {a.dueDate}
                  </td>
                  <td className="px-5 py-4 align-top">
                    <span
                      className={cn(
                        "inline-flex rounded-full border px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide",
                        statusStyles(a.status)
                      )}
                    >
                      {a.status}
                    </span>
                  </td>
                  <td className="px-5 py-4 text-right align-top text-xs font-semibold text-dgray/70">
                    {a.impactLabel}
                  </td>
                  <td className="px-5 py-4 align-top">
                    <Link
                      href={a.href}
                      className="text-xs font-bold uppercase tracking-wide text-gold underline-offset-4 hover:underline"
                    >
                      Open
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <ul className="divide-y divide-navy/[0.06] lg:hidden">
          {leadershipActions.map((a) => (
            <li key={a.id} className="p-5">
              <div className="flex flex-wrap items-center gap-2">
                <span
                  className={cn(
                    "rounded-full border px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide",
                    priorityStyles(a.priority)
                  )}
                >
                  {a.priority}
                </span>
                <span
                  className={cn(
                    "rounded-full border px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide",
                    statusStyles(a.status)
                  )}
                >
                  {a.status}
                </span>
              </div>
              <p className="mt-3 font-semibold text-navy">{a.title}</p>
              <p className="mt-2 text-sm text-dgray/75">{a.description}</p>
              <dl className="mt-4 grid grid-cols-2 gap-2 text-xs">
                <div>
                  <dt className="font-semibold uppercase tracking-wide text-dgray/50">Owner</dt>
                  <dd className="mt-0.5 text-dgray/80">{a.owner}</dd>
                </div>
                <div>
                  <dt className="font-semibold uppercase tracking-wide text-dgray/50">Due</dt>
                  <dd className="mt-0.5 font-medium tabular-nums text-navy">{a.dueDate}</dd>
                </div>
                <div className="col-span-2">
                  <dt className="font-semibold uppercase tracking-wide text-dgray/50">Impact</dt>
                  <dd className="mt-0.5 font-semibold text-dgray/70">{a.impactLabel}</dd>
                </div>
              </dl>
              <Link
                href={a.href}
                className="mt-4 inline-flex text-xs font-bold uppercase tracking-wide text-gold underline-offset-4 hover:underline"
              >
                Open workflow →
              </Link>
            </li>
          ))}
        </ul>
      </DashboardPanel>
    </div>
  );
}
