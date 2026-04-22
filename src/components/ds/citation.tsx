import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export type Citation = {
  /** Footnote index (1-based). */
  n: number;
  /** Human-readable source line — e.g. "LEC Annual Report, 2024". */
  source: ReactNode;
  /** Optional URL. Not required; some sources are PDFs filed with the regulator. */
  url?: string;
  /** Marks the citation as pending so the site stays honest about what is attested. */
  pending?: boolean;
};

/**
 * Footnote list. Numerals in amber mono, source text in warm ink-3.
 * Anchor ids follow the `cite-<n>` pattern so `<NumberBlock footnote={n}>`
 * jump-links land on the correct row.
 */
export function CitationList({
  citations,
  className,
}: {
  citations: readonly Citation[];
  className?: string;
}) {
  return (
    <ol
      className={cn(
        "m-0 list-none space-y-2 border-t border-line-soft pt-5",
        "font-mono text-[12px] leading-[1.7] text-ink-3",
        className
      )}
    >
      {citations.map((c) => (
        <li
          key={c.n}
          id={`cite-${c.n}`}
          className="flex gap-3 scroll-mt-24"
        >
          <span className="shrink-0 text-accent">{c.n}</span>
          <span className="flex-1">
            {c.url ? (
              <a
                href={c.url}
                className="text-ink-3 underline decoration-line underline-offset-4 hover:text-accent hover:decoration-accent"
                rel="noopener noreferrer"
                target="_blank"
              >
                {c.source}
              </a>
            ) : (
              c.source
            )}
            {c.pending ? (
              <span className="ml-2 uppercase tracking-[0.14em] text-ink-4">
                · Source forthcoming
              </span>
            ) : null}
          </span>
        </li>
      ))}
    </ol>
  );
}
