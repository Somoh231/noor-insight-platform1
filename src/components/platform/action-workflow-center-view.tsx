"use client";

import Link from "next/link";
import { DashboardPanel } from "@/components/dashboard/dashboard-panel";
import { PlatformPageHeader } from "@/components/ui/platform-page-header";
import { workflowTasks } from "@/lib/demo-operating-modules";
import { cn } from "@/lib/utils";

const stages = ["Intake", "Analysis", "Approval", "Execution", "Closed"] as const;

function priorityClass(p: (typeof workflowTasks)[number]["priority"]) {
  if (p === "P1") return "border-risk-critical/35 text-risk-critical";
  if (p === "P2") return "border-gold/40 text-navy";
  return "border-navy/10 text-dgray/70";
}

export function ActionWorkflowCenterView() {
  return (
    <div className="mx-auto w-full max-w-[1480px] space-y-8 pb-10">
      <PlatformPageHeader
        kicker="Action workflow center"
        title="Operational workflows—not just leadership priorities"
        description="Cross-functional tasks move through governed stages with owners and due dates. Pair with Action Center for executive sign-offs; this surface is where crews, billing, and network teams execute."
        badges={
          <span className="rounded-full border border-gold/35 bg-gold/10 px-3 py-1 text-xs font-semibold text-navy">
            Kanban (demo)
          </span>
        }
        actions={
          <Link
            href="/platform/action-center"
            className="rounded-lg border border-navy/15 bg-lgray px-3 py-2 text-xs font-semibold text-navy transition hover:bg-panel"
          >
            Leadership Action Center
          </Link>
        }
      />

      <div className="grid gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-navy/[0.08] bg-panel p-5 shadow-sm">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-dgray/50">Open workflows</p>
          <p className="mt-2 text-2xl font-semibold tabular-nums text-navy">28</p>
        </div>
        <div className="rounded-2xl border border-navy/[0.08] bg-panel p-5 shadow-sm">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-dgray/50">SLA breaches (7d)</p>
          <p className="mt-2 text-2xl font-semibold text-risk-critical">4</p>
        </div>
        <div className="rounded-2xl border border-navy/[0.08] bg-panel p-5 shadow-sm">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-dgray/50">Avg cycle time</p>
          <p className="mt-2 text-2xl font-semibold tabular-nums text-navy">9.4d</p>
        </div>
      </div>

      <DashboardPanel
        title="Board by stage"
        subtitle="Drag-and-drop and automation hooks ship in production integrations."
      >
        <div className="overflow-x-auto pb-2">
          <div className="flex min-w-[900px] gap-3 p-4">
            {stages.map((stage) => (
              <div
                key={stage}
                className="min-w-[200px] flex-1 rounded-xl border border-navy/[0.08] bg-lgray/40 p-3 ring-1 ring-navy/[0.04]"
              >
                <p className="border-b border-navy/[0.08] pb-2 text-center text-[11px] font-bold uppercase tracking-wide text-dgray/55">
                  {stage}
                </p>
                <ul className="mt-3 space-y-2">
                  {workflowTasks
                    .filter((t) => t.stage === stage)
                    .map((t) => (
                      <li
                        key={t.id}
                        className="rounded-lg border border-navy/[0.07] bg-panel p-3 text-left shadow-sm"
                      >
                        <span
                          className={cn(
                            "inline-flex rounded border px-1.5 py-0.5 text-[9px] font-bold",
                            priorityClass(t.priority)
                          )}
                        >
                          {t.priority}
                        </span>
                        <p className="mt-2 text-xs font-semibold leading-snug text-navy">{t.title}</p>
                        <p className="mt-2 text-[10px] text-dgray/60">
                          {t.owner} · due {t.due}
                        </p>
                      </li>
                    ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </DashboardPanel>

      <DashboardPanel title="Queue list" subtitle="Flat view for exports and audit packs.">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[720px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-navy/[0.08] text-[11px] font-semibold uppercase tracking-wide text-dgray/55">
                <th className="px-5 py-3">ID</th>
                <th className="px-5 py-3">Task</th>
                <th className="px-5 py-3">Stage</th>
                <th className="px-5 py-3">Owner</th>
                <th className="px-5 py-3">Due</th>
                <th className="px-5 py-3">Priority</th>
              </tr>
            </thead>
            <tbody>
              {workflowTasks.map((t) => (
                <tr key={t.id} className="border-b border-navy/[0.05] hover:bg-navy/[0.02]">
                  <td className="px-5 py-3 font-mono text-xs text-dgray/70">{t.id}</td>
                  <td className="max-w-xs px-5 py-3 font-medium text-navy">{t.title}</td>
                  <td className="px-5 py-3 text-dgray/75">{t.stage}</td>
                  <td className="px-5 py-3 text-dgray/80">{t.owner}</td>
                  <td className="px-5 py-3 tabular-nums text-dgray/75">{t.due}</td>
                  <td className="px-5 py-3">
                    <span className={cn("rounded border px-2 py-0.5 text-[10px] font-bold", priorityClass(t.priority))}>
                      {t.priority}
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
