"use client";

import type { RiskTier } from "@/lib/demo-loss-intelligence-data";
import { cn } from "@/lib/utils";

export type LossIntelFilters = {
  query: string;
  zone: "ALL" | string;
  feeder: "ALL" | string;
  tier: "ALL" | RiskTier;
  showRiskZones: boolean;
};

export function LossIntelligenceFilters({
  value,
  onChange,
  zones,
  feeders,
}: {
  value: LossIntelFilters;
  onChange: (next: LossIntelFilters) => void;
  zones: readonly string[];
  feeders: readonly string[];
}) {
  return (
    <div className="rounded-2xl border border-navy/10 bg-panel/90 p-4 shadow-sm ring-1 ring-navy/[0.04] backdrop-blur-sm sm:p-5">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div className="grid flex-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <label className="block">
            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-dgray/55">
              Search
            </span>
            <input
              value={value.query}
              onChange={(e) => onChange({ ...value, query: e.target.value })}
              placeholder="Transformer ID…"
              className="mt-2 w-full rounded-lg border border-navy/15 bg-lgray px-3 py-2 text-sm text-navy outline-none ring-navy/15 transition focus:ring-2"
            />
          </label>

          <label className="block">
            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-dgray/55">
              Zone
            </span>
            <select
              value={value.zone}
              onChange={(e) =>
                onChange({
                  ...value,
                  zone: e.target.value as LossIntelFilters["zone"],
                })
              }
              className="mt-2 w-full rounded-lg border border-navy/15 bg-lgray px-3 py-2 text-sm font-semibold text-navy outline-none ring-navy/15 transition focus:ring-2"
            >
              <option value="ALL">All zones</option>
              {zones.map((z) => (
                <option key={z} value={z}>
                  {z}
                </option>
              ))}
            </select>
          </label>

          <label className="block">
            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-dgray/55">
              Feeder
            </span>
            <select
              value={value.feeder}
              onChange={(e) =>
                onChange({
                  ...value,
                  feeder: e.target.value as LossIntelFilters["feeder"],
                })
              }
              className="mt-2 w-full rounded-lg border border-navy/15 bg-lgray px-3 py-2 text-sm font-semibold text-navy outline-none ring-navy/15 transition focus:ring-2"
            >
              <option value="ALL">All feeders</option>
              {feeders.map((f) => (
                <option key={f} value={f}>
                  {f}
                </option>
              ))}
            </select>
          </label>

          <label className="block">
            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-dgray/55">
              Risk tier
            </span>
            <select
              value={value.tier}
              onChange={(e) =>
                onChange({
                  ...value,
                  tier: e.target.value as LossIntelFilters["tier"],
                })
              }
              className="mt-2 w-full rounded-lg border border-navy/15 bg-lgray px-3 py-2 text-sm font-semibold text-navy outline-none ring-navy/15 transition focus:ring-2"
            >
              <option value="ALL">All tiers</option>
              <option value="LOW">Low</option>
              <option value="ELEVATED">Elevated</option>
              <option value="SEVERE">Severe</option>
            </select>
          </label>
        </div>

        <button
          type="button"
          onClick={() =>
            onChange({ ...value, showRiskZones: !value.showRiskZones })
          }
          className={cn(
            "inline-flex h-11 shrink-0 items-center justify-center rounded-lg border px-4 text-xs font-bold uppercase tracking-[0.16em] transition duration-200 ease-out",
            value.showRiskZones
              ? "border-gold/35 bg-gold/15 text-navy"
              : "border-navy/15 bg-lgray text-dgray/70 hover:border-navy/25 hover:text-navy"
          )}
        >
          Risk zones
        </button>
      </div>

      <div className="mt-4 flex flex-wrap gap-3 text-[11px] text-dgray/60">
        <span className="inline-flex items-center gap-2 font-semibold text-navy/70">
          <span className="h-2 w-2 rounded-full bg-risk-safe" />
          Low
        </span>
        <span className="inline-flex items-center gap-2 font-semibold text-navy/70">
          <span className="h-2 w-2 rounded-full bg-risk-watch" />
          Elevated
        </span>
        <span className="inline-flex items-center gap-2 font-semibold text-navy/70">
          <span className="h-2 w-2 rounded-full bg-risk-critical" />
          Severe
        </span>
      </div>
    </div>
  );
}
