"use client";

import Link from "next/link";
import { leadershipActions, type ActionStatus } from "@/lib/demo-commercial-wedge";
import { cn } from "@/lib/utils";

function priorityStyles(p: (typeof leadershipActions)[number]["priority"]) {
  if (p === "critical") return "border-risk-critical/35 bg-risk-critical/[0.06] text-risk-critical";
  if (p === "high") return "border-gold/40 bg-gold/[0.08] text-navy";
  return "border-navy/10 bg-panel text-dgray/80";
}

function statusChip(s: ActionStatus) {
  if (s === "Ready") return "border-forest/35 bg-forest/10 text-forest";
  if (s === "In review") return "border-gold/35 bg-gold/10 text-navy";
  if (s === "Blocked") return "border-risk-critical/30 bg-risk-critical/[0.07] text-risk-critical";
  if (s === "Scheduled") return "border-navy/12 bg-lgray text-dgray/80";
  return "border-navy/10 bg-panel text-dgray/65";
}

export function ActionCenter() {
  return (
    <section
      id="action-center"
      className="scroll-mt-28 rounded-2xl border border-navy/[0.08] bg-gradient-to-br from-panel via-panel to-lgray/40 p-6 shadow-sm ring-1 ring-navy/[0.04] sm:p-8"
      aria-labelledby="action-center-heading"
    >
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gold">
            Action center
          </p>
          <h2
            id="action-center-heading"
            className="mt-1 text-lg font-semibold tracking-tight text-navy sm:text-xl"
          >
            Recommended next moves for leadership
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-dgray/72">
            Ranked by recoverable value, regulatory exposure, and operational readiness—fund the
            interventions that compound fastest.
          </p>
        </div>
        <div className="mt-2 flex flex-wrap items-center gap-4 sm:mt-0">
          <Link
            href="/platform/action-center"
            className="text-sm font-semibold text-navy underline-offset-4 hover:underline"
          >
            Open full Action Center →
          </Link>
          <Link
            href="/platform/revenue-recovery"
            className="text-sm font-semibold text-gold underline-offset-4 hover:underline"
          >
            Revenue Recovery Engine →
          </Link>
        </div>
      </div>
      <ul className="mt-6 grid gap-4 lg:grid-cols-2">
        {leadershipActions.map((action) => (
          <li key={action.id}>
            <Link
              href={action.href}
              className="group flex h-full flex-col rounded-xl border border-navy/[0.07] bg-panel/90 p-5 shadow-sm transition duration-200 hover:-translate-y-px hover:border-navy/15 hover:shadow-card focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy/30"
            >
              <div className="flex flex-wrap items-center gap-2">
                <span
                  className={cn(
                    "rounded-full border px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide",
                    priorityStyles(action.priority)
                  )}
                >
                  {action.priority}
                </span>
                <span className="text-[11px] font-semibold tabular-nums text-dgray/55">
                  {action.impactLabel}
                </span>
              </div>
              <p className="mt-3 text-base font-semibold tracking-tight text-navy group-hover:text-navy">
                {action.title}
              </p>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-dgray/75">{action.description}</p>
              <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 border-t border-navy/[0.06] pt-4 text-[11px] text-dgray/65">
                <span>
                  <span className="font-semibold text-dgray/50">Owner</span>{" "}
                  <span className="text-dgray/80">{action.owner}</span>
                </span>
                <span className="tabular-nums">
                  <span className="font-semibold text-dgray/50">Due</span>{" "}
                  <span className="font-medium text-navy">{action.dueDate}</span>
                </span>
                <span
                  className={cn(
                    "rounded-full border px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide",
                    statusChip(action.status)
                  )}
                >
                  {action.status}
                </span>
              </div>
              <span className="mt-3 text-xs font-bold uppercase tracking-wide text-gold">
                Review →
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
