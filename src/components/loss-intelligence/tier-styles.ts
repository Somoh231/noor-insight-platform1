import type { RiskTier } from "@/lib/demo-loss-intelligence-data";
import { cn } from "@/lib/utils";

export function tierLabel(tier: RiskTier) {
  switch (tier) {
    case "LOW":
      return "Low";
    case "ELEVATED":
      return "Elevated";
    case "SEVERE":
      return "Severe";
  }
}

export function tierChipClass(tier: RiskTier) {
  return cn(
    "inline-flex items-center rounded-full border px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wide",
    tier === "LOW" && "border-risk-safe/25 bg-risk-safe/10 text-risk-safe",
    tier === "ELEVATED" &&
      "border-risk-watch/25 bg-risk-watch/10 text-risk-watch",
    tier === "SEVERE" &&
      "border-risk-critical/25 bg-risk-critical/10 text-risk-critical"
  );
}

export function zoneFillClass(tier: RiskTier) {
  switch (tier) {
    case "LOW":
      return "fill-risk-safe/20 stroke-risk-safe/35";
    case "ELEVATED":
      return "fill-risk-watch/22 stroke-risk-watch/40";
    case "SEVERE":
      return "fill-risk-critical/22 stroke-risk-critical/42";
  }
}

export function nodeFillClass(tier: RiskTier, selected: boolean) {
  return cn(
    "transition duration-200 ease-out",
    tier === "LOW" && (selected ? "fill-risk-safe" : "fill-risk-safe/70"),
    tier === "ELEVATED" &&
      (selected ? "fill-risk-watch" : "fill-risk-watch/75"),
    tier === "SEVERE" &&
      (selected ? "fill-risk-critical" : "fill-risk-critical/75")
  );
}
