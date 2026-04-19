import type { TechStatus } from "@/lib/demo-field-operations-data";
import { cn } from "@/lib/utils";

export function techStatusLabel(s: TechStatus) {
  switch (s) {
    case "IDLE":
      return "Idle";
    case "EN_ROUTE":
      return "En route";
    case "ON_JOB":
      return "On job";
    case "OFF_DUTY":
      return "Off duty";
  }
}

export function techStatusDotClass(s: TechStatus) {
  return cn(
    "h-2.5 w-2.5 rounded-full ring-2 ring-white/80",
    s === "ON_JOB" && "bg-gold shadow-[0_0_0_4px_rgba(196,154,42,0.18)]",
    s === "EN_ROUTE" && "bg-navy",
    s === "IDLE" && "bg-dgray/45",
    s === "OFF_DUTY" && "bg-dgray/25"
  );
}

export function techStatusPillClass(s: TechStatus) {
  return cn(
    "inline-flex items-center rounded-full border px-2 py-0.5 text-[11px] font-bold uppercase tracking-wide",
    s === "ON_JOB" && "border-gold/35 bg-gold/10 text-navy",
    s === "EN_ROUTE" && "border-navy/15 bg-navy/[0.06] text-navy",
    s === "IDLE" && "border-navy/10 bg-lgray text-dgray/75",
    s === "OFF_DUTY" && "border-navy/10 bg-panel text-dgray/55"
  );
}
