"use client";

import { useMemo, useState } from "react";
import {
  LOSS_INTEL_HUB,
  riskZoneAreas,
  transformerPosition,
  type TransformerSchematic,
} from "@/lib/demo-loss-intelligence-data";
import {
  nodeFillClass,
  zoneFillClass,
} from "@/components/loss-intelligence/tier-styles";
import { cn } from "@/lib/utils";

function Node({
  t,
  selected,
  dimmed,
  onSelect,
}: {
  t: TransformerSchematic;
  selected: boolean;
  dimmed: boolean;
  onSelect: (id: string) => void;
}) {
  const { x, y } = transformerPosition(t);
  const r = 10 + Math.min(8, Math.floor(t.connectedCustomers / 6000));

  return (
    <g
      opacity={dimmed ? 0.22 : 1}
      className="cursor-pointer transition duration-200 ease-out"
      onClick={() => onSelect(t.id)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onSelect(t.id);
        }
      }}
      role="button"
      tabIndex={0}
      aria-pressed={selected}
      aria-label={`Transformer ${t.id}, ${t.tier} risk`}
    >
      <line
        x1={LOSS_INTEL_HUB.x}
        y1={LOSS_INTEL_HUB.y}
        x2={x}
        y2={y}
        className="stroke-lgray/35"
        strokeWidth={selected ? 2.25 : 1.25}
        strokeDasharray="7 7"
      />
      {selected ? (
        <circle
          cx={x}
          cy={y}
          r={r + 9}
          className="fill-none stroke-gold/55"
          strokeWidth="2"
        />
      ) : null}
      <circle
        cx={x}
        cy={y}
        r={r + 4}
        className="fill-navy/35 stroke-white/10"
        strokeWidth="1"
      />
      <circle
        cx={x}
        cy={y}
        r={r}
        className={cn(
          "stroke-white/90 stroke-[1.75]",
          nodeFillClass(t.tier, selected)
        )}
      />
      <text
        x={x}
        y={y + r + 16}
        textAnchor="middle"
        className="fill-lgray/70 text-[11px] font-semibold tracking-wide"
        style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}
      >
        {t.id}
      </text>
    </g>
  );
}

export function SchematicUtilityMap({
  nodes,
  selectedId,
  onSelect,
  showRiskZones,
}: {
  nodes: readonly TransformerSchematic[];
  selectedId: string | null;
  onSelect: (id: string) => void;
  showRiskZones: boolean;
}) {
  const [hoverId, setHoverId] = useState<string | null>(null);

  const orderedNodes = useMemo(() => {
    const sel = nodes.find((n) => n.id === selectedId);
    const rest = nodes.filter((n) => n.id !== selectedId);
    return sel ? [...rest, sel] : rest;
  }, [nodes, selectedId]);

  return (
    <div className="relative overflow-hidden rounded-2xl border border-navy/10 bg-navy shadow-[0_0_0_1px_rgb(255_255_255/0.04)_inset]">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.55]"
        style={{
          backgroundImage:
            "linear-gradient(rgb(245 245 245 / 0.06) 1px, transparent 1px), linear-gradient(90deg, rgb(245 245 245 / 0.06) 1px, transparent 1px)",
          backgroundSize: "34px 34px",
          maskImage:
            "radial-gradient(ellipse at 50% 45%, black 0%, transparent 72%)",
        }}
      />

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_circle_at_50%_35%,rgb(196_154_42/0.14),transparent_55%),radial-gradient(700px_circle_at_20%_80%,rgb(26_60_94/0.55),transparent_55%)]" />

      <div className="absolute left-4 top-4 z-10 flex flex-wrap items-center gap-2">
        <span className="rounded-full border border-lgray/10 bg-navy/40 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-lgray/70 backdrop-blur-sm">
          Schematic · not to scale
        </span>
        <span className="rounded-full border border-gold/25 bg-gold/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-gold">
          Live topology preview
        </span>
      </div>

      <svg
        viewBox="0 0 1000 640"
        className="relative z-[1] h-[min(640px,calc(100dvh-14rem))] w-full"
        role="img"
        aria-label="Utility feeder schematic with transformer nodes"
      >
        <defs>
          <filter id="niHubGlow" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="10" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <linearGradient id="niHubGrad" x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="rgb(26 60 94)" />
            <stop offset="1" stopColor="rgb(12 28 44)" />
          </linearGradient>
        </defs>

        {showRiskZones
          ? riskZoneAreas.map((z) => (
              <path
                key={z.id}
                d={z.path}
                className={cn("stroke-[1.25]", zoneFillClass(z.tier))}
                vectorEffect="non-scaling-stroke"
              />
            ))
          : null}

        {/* Outer ring */}
        <circle
          cx={LOSS_INTEL_HUB.x}
          cy={LOSS_INTEL_HUB.y}
          r={268}
          className="fill-none stroke-lgray/10"
          strokeWidth="1.5"
          strokeDasharray="10 12"
        />

        <g filter="url(#niHubGlow)">
          <circle
            cx={LOSS_INTEL_HUB.x}
            cy={LOSS_INTEL_HUB.y}
            r={54}
            fill="url(#niHubGrad)"
            stroke="rgb(196 154 42 / 0.55)"
            strokeWidth="2.5"
          />
          <circle
            cx={LOSS_INTEL_HUB.x}
            cy={LOSS_INTEL_HUB.y}
            r={38}
            className="fill-navy/35 stroke-white/10"
            strokeWidth="1"
          />
        </g>

        <text
          x={LOSS_INTEL_HUB.x}
          y={LOSS_INTEL_HUB.y - 6}
          textAnchor="middle"
          className="fill-lgray/90 text-[12px] font-bold tracking-[0.18em]"
          style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}
        >
          PRIMARY
        </text>
        <text
          x={LOSS_INTEL_HUB.x}
          y={LOSS_INTEL_HUB.y + 14}
          textAnchor="middle"
          className="fill-lgray/55 text-[11px] font-semibold"
          style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}
        >
          33 / 11 kV
        </text>

        {orderedNodes.map((t) => {
          const selected = t.id === selectedId;
          const dimmed = Boolean(selectedId) && !selected && hoverId !== t.id;
          return (
            <g
              key={t.id}
              onMouseEnter={() => setHoverId(t.id)}
              onMouseLeave={() => setHoverId(null)}
            >
              <Node
                t={t}
                selected={selected}
                dimmed={dimmed}
                onSelect={onSelect}
              />
            </g>
          );
        })}
      </svg>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold/35 to-transparent" />
    </div>
  );
}
