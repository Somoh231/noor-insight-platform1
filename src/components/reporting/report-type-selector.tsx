"use client";

import type { ReportType } from "@/lib/demo-reporting-data";
import { reportTypes } from "@/lib/demo-reporting-data";
import { cn } from "@/lib/utils";

export function ReportTypeSelector({
  value,
  onChange,
}: {
  value: ReportType;
  onChange: (t: ReportType) => void;
}) {
  return (
    <div className="rounded-2xl border border-navy/10 bg-panel/90 p-2 shadow-sm ring-1 ring-navy/[0.04] sm:p-3">
      <div className="grid gap-2 sm:grid-cols-3">
        {reportTypes.map((rt) => {
          const active = value === rt.id;
          return (
            <button
              key={rt.id}
              type="button"
              onClick={() => onChange(rt.id)}
              className={cn(
                "rounded-xl border px-4 py-4 text-left transition duration-200 ease-out",
                active
                  ? "border-navy/15 bg-navy text-lgray shadow-sm"
                  : "hover:border-navy/12 border-navy/[0.06] bg-lgray/40 hover:bg-lgray/70"
              )}
            >
              <p
                className={cn(
                  "text-sm font-semibold tracking-tight",
                  active ? "text-lgray" : "text-navy"
                )}
              >
                {rt.label}
              </p>
              <p
                className={cn(
                  "mt-2 text-xs leading-relaxed",
                  active ? "text-lgray/75" : "text-dgray/70"
                )}
              >
                {rt.description}
              </p>
            </button>
          );
        })}
      </div>
    </div>
  );
}
