"use client";

import { useMemo, useState } from "react";
import {
  transformers as allTransformers,
  type RiskTier,
  type TransformerSchematic,
} from "@/lib/demo-loss-intelligence-data";
import {
  LossIntelligenceFilters,
  type LossIntelFilters,
} from "@/components/loss-intelligence/loss-intelligence-filters";
import { SchematicUtilityMap } from "@/components/loss-intelligence/schematic-utility-map";
import { TransformerDrilldownPanel } from "@/components/loss-intelligence/transformer-drilldown-panel";
import { EmptyState } from "@/components/ui/empty-state";
import { PlatformPageHeader } from "@/components/ui/platform-page-header";

const defaultFilters: LossIntelFilters = {
  query: "",
  zone: "ALL",
  feeder: "ALL",
  tier: "ALL",
  showRiskZones: true,
};

function applyFilters(
  items: readonly TransformerSchematic[],
  filters: LossIntelFilters
) {
  const q = filters.query.trim().toLowerCase();
  return items.filter((t) => {
    if (q && !t.id.toLowerCase().includes(q)) return false;
    if (filters.zone !== "ALL" && t.zoneLabel !== filters.zone) return false;
    if (filters.feeder !== "ALL" && t.feeder !== filters.feeder) return false;
    if (filters.tier !== "ALL" && t.tier !== (filters.tier as RiskTier))
      return false;
    return true;
  });
}

export function LossIntelligenceView() {
  const [filters, setFilters] = useState<LossIntelFilters>(defaultFilters);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const zones = useMemo(() => {
    const s = new Set<string>();
    for (const t of allTransformers) s.add(t.zoneLabel);
    return Array.from(s).sort();
  }, []);

  const feeders = useMemo(() => {
    const s = new Set<string>();
    for (const t of allTransformers) s.add(t.feeder);
    return Array.from(s).sort();
  }, []);

  const visible = useMemo(
    () => applyFilters(allTransformers, filters),
    [filters]
  );

  const selected = useMemo(() => {
    if (!selectedId) return null;
    return visible.find((t) => t.id === selectedId) ?? null;
  }, [selectedId, visible]);

  return (
    <div className="mx-auto w-full max-w-[1560px] space-y-8 pb-10">
      <PlatformPageHeader
        kicker="Network loss intelligence"
        title="Loss intelligence"
        description="A leadership-grade schematic of feeder stress, customer concentration, and commercial risk, designed for rapid drilldown during revenue protection reviews."
        badges={
          <>
            <span className="rounded-full border border-navy/10 bg-panel px-3 py-1 text-xs font-semibold text-navy/75">
              Sample topology
            </span>
            <span className="rounded-full border border-gold/25 bg-gold/10 px-3 py-1 text-xs font-semibold text-navy">
              Interactive filters
            </span>
          </>
        }
      />

      <LossIntelligenceFilters
        value={filters}
        onChange={(next) => {
          setFilters(next);
          setSelectedId((cur) => {
            if (!cur) return cur;
            const still = applyFilters(allTransformers, next).some(
              (t) => t.id === cur
            );
            return still ? cur : null;
          });
        }}
        zones={zones}
        feeders={feeders}
      />

      <div className="grid items-start gap-6 xl:grid-cols-[1fr_420px]">
        <div className="space-y-4">
          <SchematicUtilityMap
            nodes={visible}
            selectedId={selectedId}
            onSelect={(id) => setSelectedId(id)}
            showRiskZones={filters.showRiskZones}
          />

          {visible.length === 0 ? (
            <EmptyState
              title="No assets match these filters"
              description="Broaden the zone, feeder, or tier filters, or clear the search, to return transformers to the schematic."
            />
          ) : (
            <p className="text-center text-[11px] text-dgray/55">
              Showing{" "}
              <span className="font-semibold tabular-nums text-navy">
                {visible.length}
              </span>{" "}
              assets · schematic is normalized for leadership review (sample network).
            </p>
          )}
        </div>

        <div className="xl:sticky xl:top-24">
          <TransformerDrilldownPanel
            selected={selected}
            onClear={() => setSelectedId(null)}
          />
        </div>
      </div>
    </div>
  );
}
