"use client";

import type { ReportingKpis } from "@/lib/demo-reporting-data";
import { formatInteger, formatPercent } from "@/lib/format";
import { cn } from "@/lib/utils";

function DeltaPill({
  label,
  tone,
}: {
  label: string;
  tone: "positive" | "negative" | "neutral";
}) {
  return (
    <span
      className={cn(
        "inline-flex rounded-full border px-2 py-0.5 text-[11px] font-bold tabular-nums",
        tone === "positive" && "border-gold/30 bg-gold/10 text-navy",
        tone === "negative" && "border-navy/10 bg-navy/[0.04] text-dgray/75",
        tone === "neutral" && "border-navy/10 bg-panel text-dgray/65"
      )}
    >
      {label}
    </span>
  );
}

function KpiCard({
  title,
  value,
  sub,
  deltaLabel,
  deltaTone,
}: {
  title: string;
  value: string;
  sub: string;
  deltaLabel: string;
  deltaTone: "positive" | "negative" | "neutral";
}) {
  return (
    <div className="hover:border-navy/12 rounded-2xl border border-navy/[0.07] bg-gradient-to-b from-panel to-lgray/35 p-6 shadow-sm ring-1 ring-navy/[0.03] transition duration-200 ease-out hover:-translate-y-px hover:shadow-card sm:p-7">
      <div className="flex items-start justify-between gap-3">
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-dgray/55">
          {title}
        </p>
        <DeltaPill label={deltaLabel} tone={deltaTone} />
      </div>
      <p className="mt-4 text-3xl font-semibold tabular-nums tracking-tight text-navy sm:text-[2.1rem]">
        {value}
      </p>
      <p className="mt-2 text-xs leading-relaxed text-dgray/60">{sub}</p>
    </div>
  );
}

function pctDeltaTone(delta: number) {
  if (delta > 0) return "positive" as const;
  if (delta < 0) return "negative" as const;
  return "neutral" as const;
}

/** For outage index: lower is better, so negative delta is positive tone. */
function outageDeltaTone(delta: number) {
  if (delta < 0) return "positive" as const;
  if (delta > 0) return "negative" as const;
  return "neutral" as const;
}

export function ReportingKpiGrid({ kpis }: { kpis: ReportingKpis }) {
  const rrLabel = `${kpis.revenueRecoveryDelta >= 0 ? "+" : ""}${formatPercent(Math.abs(kpis.revenueRecoveryDelta))} vs prior`;
  const lrLabel = `${kpis.lossReductionDelta >= 0 ? "+" : ""}${formatPercent(Math.abs(kpis.lossReductionDelta))} vs prior`;
  const cxLabel = `${kpis.connectionsDelta >= 0 ? "+" : ""}${formatPercent(Math.abs(kpis.connectionsDelta))} vs prior`;
  const otLabel = `${kpis.outageTrendDelta >= 0 ? "+" : ""}${kpis.outageTrendDelta.toFixed(2)} vs prior`;

  return (
    <div className="grid gap-4 lg:grid-cols-2 xl:grid-cols-4">
      <KpiCard
        title="Revenue recovery"
        value={formatPercent(kpis.revenueRecoveryPct)}
        sub="Recovered revenue as a share of identified commercial gap (rolling)."
        deltaLabel={rrLabel}
        deltaTone={pctDeltaTone(kpis.revenueRecoveryDelta)}
      />
      <KpiCard
        title="Loss reduction"
        value={formatPercent(kpis.lossReductionPct)}
        sub="Net improvement in commercial + technical loss posture (normalized)."
        deltaLabel={lrLabel}
        deltaTone={pctDeltaTone(kpis.lossReductionDelta)}
      />
      <KpiCard
        title="Connections added"
        value={formatInteger(kpis.connectionsAdded)}
        sub="New energized service points with valid metering and billing linkage."
        deltaLabel={cxLabel}
        deltaTone={pctDeltaTone(kpis.connectionsDelta)}
      />
      <KpiCard
        title="Outage trends"
        value={kpis.outageTrendIndex.toFixed(2)}
        sub="Composite outage pressure index (lower is better; baseline 1.00)."
        deltaLabel={otLabel}
        deltaTone={outageDeltaTone(kpis.outageTrendDelta)}
      />
    </div>
  );
}
