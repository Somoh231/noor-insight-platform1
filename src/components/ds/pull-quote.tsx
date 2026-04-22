import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Editorial pull-quote. Serif body on a 2px amber left rule; mono cite line
 * below. Used at most once per long page as a principle anchor.
 */
export function PullQuote({
  children,
  cite,
  className,
}: {
  children: ReactNode;
  cite?: ReactNode;
  className?: string;
}) {
  return (
    <blockquote
      className={cn(
        "m-0 border-l-2 border-accent pl-8 sm:pl-10",
        className
      )}
    >
      <p
        className="font-serif text-2xl font-normal leading-[1.3] text-ink sm:text-3xl lg:text-display-m"
        style={{ textWrap: "balance" }}
      >
        {children}
      </p>
      {cite ? (
        <cite className="mt-6 block font-mono text-eyebrow not-italic uppercase tracking-eyebrow text-ink-3">
          {cite}
        </cite>
      ) : null}
    </blockquote>
  );
}
