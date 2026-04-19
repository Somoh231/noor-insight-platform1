import { formatCurrency, formatInteger, formatPercent } from "@/lib/format";
import { executiveKpis } from "@/lib/demo-executive-dashboard-data";
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
        "inline-flex items-center rounded-full border px-2 py-0.5 text-[11px] font-semibold tabular-nums",
        tone === "positive" && "border-gold/30 bg-gold/10 text-navy",
        tone === "negative" && "border-navy/10 bg-navy/[0.04] text-dgray/80",
        tone === "neutral" && "border-navy/10 bg-lgray text-dgray/70"
      )}
    >
      {label}
    </span>
  );
}

function KpiCard({
  label,
  value,
  hint,
  delta,
  deltaTone,
}: {
  label: string;
  value: string;
  hint: string;
  delta: string;
  deltaTone: "positive" | "negative" | "neutral";
}) {
  return (
    <div className="hover:border-navy/12 group relative overflow-hidden rounded-2xl border border-navy/[0.07] bg-gradient-to-b from-panel to-lgray/40 p-6 shadow-sm ring-1 ring-navy/[0.03] transition duration-200 ease-out hover:-translate-y-px hover:shadow-card sm:p-7">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/35 to-transparent opacity-0 transition duration-200 group-hover:opacity-100" />
      <div className="flex items-start justify-between gap-4">
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-dgray/55">
          {label}
        </p>
        <DeltaPill label={delta} tone={deltaTone} />
      </div>
      <p className="mt-4 text-3xl font-semibold tabular-nums tracking-tight text-navy sm:text-[2rem]">
        {value}
      </p>
      <p className="mt-2 text-xs leading-relaxed text-dgray/60">{hint}</p>
    </div>
  );
}

export function KpiRow() {
  const k = executiveKpis;

  const revenueDeltaLabel = `${k.revenueDeltaVsPrior >= 0 ? "+" : ""}${formatPercent(k.revenueDeltaVsPrior)} vs prior`;
  const lossDeltaLabel = `${k.commercialLossDeltaPts >= 0 ? "+" : ""}${(k.commercialLossDeltaPts * 100).toFixed(1)} pts vs prior`;
  const customersDeltaLabel = `${k.activeCustomersDelta >= 0 ? "+" : ""}${formatPercent(k.activeCustomersDelta)} vs prior`;
  const outagesDeltaLabel = `${k.outagesDeltaVsPrior >= 0 ? "+" : ""}${formatPercent(k.outagesDeltaVsPrior)} vs prior`;

  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      <KpiCard
        label="Revenue collected"
        value={formatCurrency(k.revenueCollected, { notation: "compact" })}
        hint="Cash + digital collections (utility-wide)"
        delta={revenueDeltaLabel}
        deltaTone={k.revenueDeltaVsPrior >= 0 ? "positive" : "negative"}
      />
      <KpiCard
        label="Commercial loss"
        value={formatPercent(k.commercialLossPct)}
        hint="Unbilled / unmetered / theft-adjusted view"
        delta={lossDeltaLabel}
        deltaTone={k.commercialLossDeltaPts <= 0 ? "positive" : "negative"}
      />
      <KpiCard
        label="Active customers"
        value={formatInteger(k.activeCustomers)}
        hint="Energized accounts with valid metering posture"
        delta={customersDeltaLabel}
        deltaTone={k.activeCustomersDelta >= 0 ? "positive" : "neutral"}
      />
      <KpiCard
        label="Outages this month"
        value={formatInteger(k.outagesThisMonth)}
        hint="Customer-minutes weighted incidents"
        delta={outagesDeltaLabel}
        deltaTone={k.outagesDeltaVsPrior <= 0 ? "positive" : "negative"}
      />
    </div>
  );
}
