import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export type Pillar = {
  /** "01" / "02" / "03" — rendered as an amber mono numeral. */
  n: string;
  /** Serif pillar title. */
  title: string;
  /** One-sentence description. */
  description: ReactNode;
  /** 3–5 sub-capabilities shown as a small list below the description. */
  capabilities?: readonly string[];
};

/**
 * Three-pillar grid with hairline dividers. Matches the design bundle's
 * Pillars reference exactly — no card chrome, no shadow, no rounded corners.
 */
export function Pillars({
  items,
  className,
}: {
  items: readonly Pillar[];
  className?: string;
}) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 border-t border-line sm:grid-cols-3",
        className
      )}
      role="list"
    >
      {items.map((p, i) => (
        <div
          key={p.n}
          role="listitem"
          className={cn(
            "flex flex-col gap-4 py-8 pr-0 sm:py-10",
            i === 0 ? "sm:pl-0 sm:pr-7" : "sm:px-7",
            i === items.length - 1 && "sm:pr-0",
            i < items.length - 1 && "border-b border-line-soft sm:border-b-0",
            i < items.length - 1 && "sm:border-r sm:border-line-soft"
          )}
        >
          <span className="font-mono text-eyebrow font-medium tracking-eyebrow text-accent">
            {p.n}
          </span>
          <h3 className="font-serif text-2xl font-normal leading-[1.2] tracking-[-0.01em] text-ink">
            {p.title}
          </h3>
          <p className="max-w-[40ch] text-small leading-[1.65] text-ink-2">
            {p.description}
          </p>
          {p.capabilities?.length ? (
            <ul className="mt-2 space-y-1.5 text-[13px] leading-[1.6] text-ink-3">
              {p.capabilities.map((c) => (
                <li key={c} className="flex gap-2.5">
                  <span aria-hidden className="mt-[8px] inline-block h-px w-3 shrink-0 bg-line" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      ))}
    </div>
  );
}
