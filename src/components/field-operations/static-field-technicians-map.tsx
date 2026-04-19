"use client";

import type { Technician } from "@/lib/demo-field-operations-data";
import { techStatusDotClass } from "@/components/field-operations/tech-status-styles";

export function StaticFieldTechniciansMap({
  technicians: techs,
}: {
  technicians: readonly Technician[];
}) {
  return (
    <div className="relative h-[min(520px,calc(100dvh-16rem))] w-full overflow-hidden rounded-2xl border border-navy/10 bg-navy shadow-[0_0_0_1px_rgb(255_255_255/0.04)_inset]">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.55]"
        style={{
          backgroundImage:
            "linear-gradient(rgb(245 245 245 / 0.055) 1px, transparent 1px), linear-gradient(90deg, rgb(245 245 245 / 0.055) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
          maskImage:
            "radial-gradient(ellipse at 50% 45%, black 0%, transparent 72%)",
        }}
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_circle_at_30%_20%,rgb(196_154_42/0.12),transparent_55%),radial-gradient(700px_circle_at_80%_70%,rgb(26_60_94/0.55),transparent_55%)]" />

      <div className="absolute left-4 top-4 z-10 flex flex-wrap gap-2">
        <span className="rounded-full border border-lgray/10 bg-navy/40 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-lgray/70 backdrop-blur-sm">
          Fleet map
        </span>
        <span className="rounded-full border border-gold/25 bg-gold/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-gold">
          Sample telemetry
        </span>
      </div>

      <div className="absolute inset-[7%]">
        {techs.map((t) => (
          <div
            key={t.id}
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${t.sx}%`, top: `${t.sy}%` }}
          >
            <div className="relative">
              <div className="absolute -inset-6 rounded-full bg-gold/10 blur-md" />
              <div className="relative flex h-11 w-11 items-center justify-center rounded-2xl border border-white/15 bg-navy/55 shadow-lg backdrop-blur-sm">
                <span className={techStatusDotClass(t.status)} />
              </div>
              <div className="pointer-events-none absolute left-1/2 top-[calc(100%+10px)] w-max -translate-x-1/2 rounded-md border border-navy/10 bg-panel/95 px-2 py-1 text-[10px] font-semibold text-navy shadow-sm">
                {t.name}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-navy/[0.08] bg-lgray/70 px-4 py-3 text-[11px] text-dgray/70 backdrop-blur-sm">
        <span>
          Configure{" "}
          <code className="font-semibold text-navy/70">
            NEXT_PUBLIC_MAPBOX_TOKEN
          </code>{" "}
          for road-level routing context.
        </span>
        <span className="tabular-nums text-dgray/55">Last refresh: now</span>
      </div>
    </div>
  );
}
