import type { Stat } from "@/components/ds";
import { StatStrip } from "@/components/ds";

/**
 * Four-cell stat strip. Real figures from the founder's positioning
 * brief — LEC's own trajectory, sub-captions indicate the source. Each
 * cell carries a `Source forthcoming` cue until attested.
 *
 * TODO(cite): replace sub-captions with the attested citation
 * (IMF Article IV / LEC filings / LERC tariff schedule) when available.
 */
const stats: readonly Stat[] = [
  {
    kicker: "LEC commercial losses",
    value: "27.5%",
    sub: "from 41.3% · 2022 → late 2024",
  },
  {
    kicker: "National access",
    value: "32.5%",
    sub: "population on grid",
  },
  {
    kicker: "Installed capacity",
    value: "126 MW",
    sub: "LEC network · 2024",
  },
  {
    kicker: "Connections",
    value: "315,691",
    sub: "customer accounts · 2024",
  },
];

export function HomeStats() {
  return (
    <div className="mx-auto w-full max-w-content">
      <StatStrip items={stats} />
    </div>
  );
}
