import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export type Stat = {
  kicker: string;
  value: ReactNode;
  sub?: ReactNode;
};

/**
 * Full-bleed 4-cell stat strip with vertical hairlines between cells.
 * Matches the v2 marketing kit. Kickers are mono-uppercase; values are
 * display serif, tabular numerals.
 */
export function StatStrip({
  items,
  className,
}: {
  items: readonly Stat[];
  className?: string;
}) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 border-y border-rule sm:grid-cols-2 lg:grid-cols-4",
        className
      )}
    >
      {items.map((s, i) => (
        <div
          key={i}
          className={cn(
            "px-6 py-7 sm:px-8",
            // vertical rules between cells on lg
            i > 0 && "lg:border-l lg:border-rule",
            // between-row rule on sm (2 cols)
            i > 1 && "sm:border-t sm:border-rule lg:border-t-0",
            // alternating vertical rule on 2-col layout
            i % 2 === 1 && "sm:border-l sm:border-rule"
          )}
        >
          <div className="font-sans text-[10px] font-semibold uppercase tracking-kicker text-muted">
            {s.kicker}
          </div>
          <div className="tabular mt-[6px] font-serif text-3xl font-normal leading-none text-ink sm:text-[40px] sm:tracking-[-0.01em]">
            {s.value}
          </div>
          {s.sub ? (
            <div className="mt-1 text-xs text-muted">{s.sub}</div>
          ) : null}
        </div>
      ))}
    </div>
  );
}
