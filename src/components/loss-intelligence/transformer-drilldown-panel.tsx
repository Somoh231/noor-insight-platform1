"use client";

import type { ReactNode } from "react";
import {
  lossPctFromReadings,
  type TransformerSchematic,
} from "@/lib/demo-loss-intelligence-data";
import {
  tierChipClass,
  tierLabel,
} from "@/components/loss-intelligence/tier-styles";
import { formatInteger, formatPercent } from "@/lib/format";
import { cn } from "@/lib/utils";

function Field({
  label,
  children,
  className,
}: {
  label: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-xl border border-navy/[0.06] bg-lgray/35 p-4",
        className
      )}
    >
      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-dgray/55">
        {label}
      </p>
      <div className="mt-2">{children}</div>
    </div>
  );
}

function formatMwh(kwh: number) {
  const mwh = kwh / 1000;
  return `${mwh.toLocaleString("en-US", { maximumFractionDigits: 1 })} MWh`;
}

function EnergySplit({
  billedKwh,
  consumedKwh,
}: {
  billedKwh: number;
  consumedKwh: number;
}) {
  const total = Math.max(billedKwh, consumedKwh);
  const billedW = total > 0 ? Math.round((billedKwh / total) * 100) : 0;
  const consumedW = total > 0 ? Math.max(0, 100 - billedW) : 0;

  return (
    <div>
      <div className="flex items-center justify-between gap-3 text-xs font-semibold text-dgray/70">
        <span>Billed</span>
        <span className="tabular-nums text-navy">{formatMwh(billedKwh)}</span>
      </div>
      <div className="mt-2 h-2.5 w-full overflow-hidden rounded-full bg-navy/10">
        <div
          className="h-full rounded-full bg-gradient-to-r from-navy to-navy/70"
          style={{ width: `${billedW}%` }}
        />
      </div>

      <div className="mt-4 flex items-center justify-between gap-3 text-xs font-semibold text-dgray/70">
        <span>Consumed</span>
        <span className="tabular-nums text-navy">{formatMwh(consumedKwh)}</span>
      </div>
      <div className="mt-2 h-2.5 w-full overflow-hidden rounded-full bg-navy/10">
        <div
          className="h-full rounded-full bg-gradient-to-r from-gold/80 to-gold/45"
          style={{ width: `${consumedW}%` }}
        />
      </div>
      <p className="mt-3 text-[11px] leading-relaxed text-dgray/60">
        Bars show relative magnitude within this transformer (not absolute grid
        share).
      </p>
    </div>
  );
}

function TheftMeter({ score }: { score: number }) {
  const clamped = Math.max(0, Math.min(100, score));
  return (
    <div>
      <div className="flex items-end justify-between gap-3">
        <p className="text-3xl font-semibold tabular-nums tracking-tight text-navy">
          {clamped}
          <span className="text-base font-semibold text-dgray/55">/100</span>
        </p>
        <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-dgray/55">
          Model score
        </span>
      </div>
      <div className="mt-3 h-3 w-full overflow-hidden rounded-full bg-navy/10 ring-1 ring-navy/[0.06]">
        <div
          className="h-full rounded-full bg-gradient-to-r from-risk-safe via-risk-watch to-risk-critical"
          style={{ width: `${clamped}%` }}
        />
      </div>
      <p className="mt-3 text-[11px] leading-relaxed text-dgray/60">
        Composite of metering anomalies, bypass patterns, payment behavior, and
        inspection backlog.
      </p>
    </div>
  );
}

export function TransformerDrilldownPanel({
  selected,
  onClear,
}: {
  selected: TransformerSchematic | null;
  onClear: () => void;
}) {
  return (
    <aside className="relative overflow-hidden rounded-2xl border border-navy/10 bg-gradient-to-b from-panel to-lgray/35 shadow-card ring-1 ring-navy/[0.04]">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/45 to-transparent" />

      <div className="flex items-start justify-between gap-4 border-b border-navy/[0.06] px-6 py-5">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-dgray/50">
            Drilldown
          </p>
          <h2 className="mt-2 text-lg font-semibold tracking-tight text-navy">
            Transformer intelligence
          </h2>
        </div>
        <button
          type="button"
          onClick={onClear}
          className={cn(
            "rounded-lg border border-navy/15 bg-lgray px-3 py-2 text-xs font-semibold text-navy transition duration-200 ease-out hover:border-navy/25 hover:bg-panel",
            !selected && "pointer-events-none opacity-40"
          )}
          disabled={!selected}
        >
          Clear
        </button>
      </div>

      <div className="px-6 py-6">
        {!selected ? (
          <div className="rounded-2xl border border-dashed border-navy/15 bg-lgray/40 p-8 text-center">
            <p className="text-sm font-semibold text-navy">
              Select a transformer
            </p>
            <p className="mt-2 text-sm leading-relaxed text-dgray/70">
              Click any node on the schematic to open loss diagnostics, metering
              deltas, and inspection posture for that asset.
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-dgray/55">
                  Asset
                </p>
                <p className="mt-1 text-2xl font-semibold tabular-nums tracking-tight text-navy">
                  {selected.id}
                </p>
              </div>
              <span className={tierChipClass(selected.tier)}>
                {tierLabel(selected.tier)}
              </span>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Connected customers">
                <p className="text-xl font-semibold tabular-nums text-navy">
                  {formatInteger(selected.connectedCustomers)}
                </p>
              </Field>

              <Field label="Loss % (commercial signal)">
                <p className="text-xl font-semibold tabular-nums text-navy">
                  {formatPercent(
                    lossPctFromReadings(
                      selected.billedKwh,
                      selected.consumedKwh
                    )
                  )}
                </p>
              </Field>
            </div>

            <Field label="Billed vs consumed">
              <EnergySplit
                billedKwh={selected.billedKwh}
                consumedKwh={selected.consumedKwh}
              />
            </Field>

            <Field label="Theft risk score">
              <TheftMeter score={selected.theftRiskScore} />
            </Field>

            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Feeder">
                <p className="text-sm font-semibold text-navy">
                  {selected.feeder}
                </p>
              </Field>
              <Field label="Zone">
                <p className="text-sm font-semibold text-navy">
                  {selected.zoneLabel}
                </p>
              </Field>
            </div>

            <Field label="Last inspection">
              <p className="text-sm font-semibold text-navy">
                {new Intl.DateTimeFormat("en-US", {
                  dateStyle: "medium",
                  timeStyle: "short",
                }).format(new Date(selected.lastInspection))}
              </p>
              <p className="mt-2 text-[11px] leading-relaxed text-dgray/60">
                Field verification and thermography packets surface here when linked from work
                management (sample linkage in evaluation).
              </p>
            </Field>
          </div>
        )}
      </div>
    </aside>
  );
}
