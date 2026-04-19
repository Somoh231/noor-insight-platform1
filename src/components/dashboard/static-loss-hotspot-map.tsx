"use client";

import type { LossHotspot } from "@/lib/demo-executive-dashboard-data";
import { cn } from "@/lib/utils";

function HotspotMarker({ spot }: { spot: LossHotspot }) {
  const size = 10 + (spot.intensity / 100) * 10;
  const ring =
    spot.severity === "high"
      ? "ring-gold/35"
      : spot.severity === "medium"
        ? "ring-navy/20"
        : "ring-navy/15";
  const fill =
    spot.severity === "high"
      ? "bg-gold"
      : spot.severity === "medium"
        ? "bg-navy/70"
        : "bg-navy/45";

  return (
    <div
      className="absolute -translate-x-1/2 -translate-y-1/2"
      style={{ left: `${spot.sx}%`, top: `${spot.sy}%` }}
    >
      <div className="relative">
        {spot.severity === "high" ? (
          <span
            className="absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 animate-ping rounded-full bg-gold/20"
            aria-hidden
          />
        ) : null}
        <span
          className={cn(
            "relative inline-flex rounded-full border-2 border-white shadow-md ring-2",
            ring,
            fill
          )}
          style={{ width: size, height: size }}
          title={spot.label}
        />
      </div>
      <div className="pointer-events-none absolute left-1/2 top-[calc(100%+8px)] w-max -translate-x-1/2 rounded-md border border-navy/10 bg-panel/95 px-2 py-1 text-[10px] font-semibold text-navy shadow-sm">
        {spot.label}
      </div>
    </div>
  );
}

export function StaticLossHotspotMap({
  hotspots,
}: {
  hotspots: readonly LossHotspot[];
}) {
  return (
    <div className="relative h-[420px] w-full overflow-hidden rounded-xl border border-navy/[0.06] bg-gradient-to-b from-panel to-lgray/40">
      <div
        className="absolute inset-0 opacity-[0.55]"
        style={{
          backgroundImage:
            "linear-gradient(rgb(26 60 94 / 0.05) 1px, transparent 1px), linear-gradient(90deg, rgb(26 60 94 / 0.05) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Stylized “service territory” silhouette (decorative). */}
      <svg
        className="absolute inset-[8%] text-navy/10"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid meet"
        aria-hidden
      >
        <path
          fill="currentColor"
          d="M18 58c10-18 22-26 34-28 12-2 24 2 30 10 6 8 7 20 2 30-5 10-16 16-28 18-12 2-26-2-34-12-8-10-10-24-4-38z"
        />
        <path
          fill="currentColor"
          opacity="0.55"
          d="M52 22c8-6 18-8 26-4 8 4 12 14 10 24-2 10-10 18-20 20-10 2-20-2-26-10-6-8-6-18 10-30z"
        />
      </svg>

      <div className="absolute inset-[8%]">
        {hotspots.map((h) => (
          <HotspotMarker key={h.id} spot={h} />
        ))}
      </div>

      <div className="absolute left-4 top-4 rounded-full border border-navy/10 bg-panel/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-dgray/60 backdrop-blur-sm">
        Preview map
      </div>

      <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-navy/[0.06] bg-lgray/70 px-4 py-3 text-[11px] text-dgray/70 backdrop-blur-sm">
        <div className="flex flex-wrap items-center gap-4">
          <span className="inline-flex items-center gap-2 font-semibold text-navy">
            <span className="h-2 w-2 rounded-full bg-gold" /> High
          </span>
          <span className="inline-flex items-center gap-2 font-semibold text-navy/75">
            <span className="h-2 w-2 rounded-full bg-navy/35" /> Medium
          </span>
          <span className="inline-flex items-center gap-2 font-semibold text-navy/65">
            <span className="h-2 w-2 rounded-full bg-navy/20" /> Low
          </span>
        </div>
        <span className="tabular-nums text-dgray/55">
          Configure{" "}
          <code className="font-semibold text-navy/70">
            NEXT_PUBLIC_MAPBOX_TOKEN
          </code>{" "}
          for live basemap.
        </span>
      </div>
    </div>
  );
}
