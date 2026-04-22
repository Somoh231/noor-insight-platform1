/**
 * Typographic number composition for the hero's right column. The number
 * is the imagery — the brief explicitly permits "typographic compositions
 * (large numbers, pull quotes) treated as imagery" and forbids fabricated
 * product visuals or stock. No chart machinery, no fake time series.
 *
 * TODO(cite): replace "Source forthcoming" once the underlying LEC / LERC
 * publication is attested (expected week of 2026-04-27).
 */
export function HomeHeroFigure() {
  return (
    <figure className="relative w-full">
      <div className="mb-6 flex items-baseline gap-3">
        <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-3">
          Figure · 01 · LEC
        </span>
        <span className="h-px flex-1 bg-line-soft" aria-hidden />
      </div>

      <div
        className="tabular font-serif leading-[0.92] tracking-[-0.03em] text-ink"
        aria-label="LEC commercial losses fell from 41.3 percent in 2022 to 27.5 percent in late 2024."
      >
        <span className="block text-[120px] sm:text-[160px] lg:text-[180px]">
          27.5<span className="text-ink-3">%</span>
        </span>
      </div>

      <div className="mt-4 flex items-baseline gap-4 border-t border-line pt-5">
        <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-3">
          From
        </span>
        <span className="tabular font-serif text-2xl font-normal leading-none text-ink-2">
          41.3%
        </span>
        <span aria-hidden className="font-mono text-[11px] text-ink-3">
          →
        </span>
        <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-3">
          2022 to late 2024
        </span>
      </div>

      <figcaption className="mt-6 max-w-[36ch] text-small leading-[1.55] text-ink-2">
        LEC commercial losses, reconciled against the utility&apos;s own
        monthly record.
        <sup className="ml-1 font-mono text-[11px] text-accent">
          <a
            href="#cite-1"
            className="no-underline hover:underline focus-visible:underline"
            aria-label="Citation 1"
          >
            1
          </a>
        </sup>
      </figcaption>

      <div className="mt-3 font-mono text-[10px] uppercase tracking-[0.16em] text-ink-4">
        Source forthcoming
      </div>
    </figure>
  );
}
