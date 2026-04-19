"use client";

import { CompletionThroughputChart } from "@/components/field-operations/completion-throughput-chart";

export function CompletionMetricsCard() {
  return (
    <div className="rounded-2xl border border-navy/10 bg-panel/90 shadow-sm ring-1 ring-navy/[0.04]">
      <div className="border-b border-navy/[0.06] px-5 py-4">
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-dgray/50">
          Throughput
        </p>
        <h2 className="mt-2 text-sm font-semibold tracking-tight text-navy">
          Completion time curve
        </h2>
        <p className="mt-2 text-xs leading-relaxed text-dgray/60">
          Closed jobs per shift, a rhythm signal for crew capacity planning and backlog risk.
        </p>
      </div>
      <div className="px-3 pb-4 pt-2 sm:px-4">
        <CompletionThroughputChart />
      </div>
    </div>
  );
}
