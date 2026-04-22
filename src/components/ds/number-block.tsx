import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Props = {
  /** Primary figure — e.g. "41.3%" or "315,691". */
  value: string;
  /** Secondary figure for an arrow pair, e.g. "27.5%". Optional. */
  toValue?: string;
  /** Small trailing unit like "MW" or "/kWh". Optional. */
  unit?: string;
  /** Short plain-text description of what the number measures. */
  label: ReactNode;
  /** Footnote reference number. Renders as a superscript that anchors the citation. */
  footnote?: number;
  /** Visible source tag when citation is pending. */
  sourceForthcoming?: boolean;
  size?: "m" | "l";
  className?: string;
};

/**
 * Large editorial numeral with optional arrow-pair ("41.3% → 27.5%"),
 * unit slot, description, and footnote superscript. Tabular numerals.
 * Visible "Source forthcoming" tag when the citation has not yet been
 * attested, per the brief's constraint on fabricated numbers.
 */
export function NumberBlock({
  value,
  toValue,
  unit,
  label,
  footnote,
  sourceForthcoming,
  size = "l",
  className,
}: Props) {
  const valueClass =
    size === "l"
      ? "text-[44px] sm:text-5xl lg:text-display-l"
      : "text-4xl sm:text-[44px]";
  const unitClass =
    size === "l" ? "text-xl sm:text-2xl" : "text-lg sm:text-xl";

  return (
    <div className={cn("flex flex-col gap-3", className)}>
      <div
        className={cn(
          "tabular font-serif font-normal leading-[1.0] tracking-[-0.02em] text-ink",
          valueClass
        )}
      >
        <span>{value}</span>
        {unit ? (
          <span className={cn("ml-1 text-ink-3", unitClass)}>{unit}</span>
        ) : null}
        {toValue ? (
          <>
            <span aria-hidden className={cn("mx-3 text-ink-3", unitClass)}>
              →
            </span>
            <span>{toValue}</span>
            {unit ? (
              <span className={cn("ml-1 text-ink-3", unitClass)}>{unit}</span>
            ) : null}
          </>
        ) : null}
      </div>
      <div className="max-w-[32ch] text-small leading-[1.5] text-ink-2">
        {label}
        {footnote ? (
          <sup className="ml-1 font-mono text-[11px] text-accent">
            <a
              href={`#cite-${footnote}`}
              className="no-underline hover:underline focus-visible:underline"
              aria-label={`Citation ${footnote}`}
            >
              {footnote}
            </a>
          </sup>
        ) : null}
      </div>
      {sourceForthcoming ? (
        <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink-3">
          Source forthcoming
        </div>
      ) : null}
    </div>
  );
}
