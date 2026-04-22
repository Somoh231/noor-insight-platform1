import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export type Method = {
  title: string;
  body: ReactNode;
};

/**
 * Numbered methodology list — from the v2 marketing kit. Each row is
 * a mono step number + tight h4 + 13 px body, separated by hairline
 * rules. First row carries an ink-strong top rule per the reference.
 */
export function MethodList({
  items,
  className,
}: {
  items: readonly Method[];
  className?: string;
}) {
  return (
    <ol className={cn("m-0 list-none p-0", className)}>
      {items.map((m, i) => (
        <li
          key={m.title}
          className={cn(
            "flex gap-4 py-[14px]",
            i === 0 ? "border-t border-ink" : "border-t border-rule"
          )}
        >
          <span className="w-6 pt-[2px] font-mono text-xxs text-muted">
            {String(i + 1).padStart(2, "0")}
          </span>
          <div>
            <h4 className="font-sans text-sm font-semibold leading-snug text-ink">
              {m.title}
            </h4>
            <p className="mt-1 text-sm leading-[1.55] text-ink-soft">
              {m.body}
            </p>
          </div>
        </li>
      ))}
    </ol>
  );
}
