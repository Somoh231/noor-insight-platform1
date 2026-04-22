import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Editorial blockquote in display serif italic, bordered by a 2px ember
 * rule on the left. Matches the v2 design bundle's `.t-blockquote` and
 * the marketing kit's methodology blockquote.
 */
export function PullQuote({
  children,
  cite,
  className,
  size = "lg",
}: {
  children: ReactNode;
  cite?: ReactNode;
  className?: string;
  size?: "lg" | "md";
}) {
  const sizeClass =
    size === "lg"
      ? "text-xl sm:text-[26px] lg:text-[28px] leading-[1.45]"
      : "text-lg sm:text-xl leading-[1.5]";
  return (
    <blockquote
      className={cn(
        "m-0 border-l-2 border-ember pl-6",
        className
      )}
    >
      <p
        className={cn(
          "font-serif italic font-normal text-ink",
          sizeClass
        )}
        style={{ textWrap: "balance" }}
      >
        {children}
      </p>
      {cite ? (
        <cite className="mt-5 block font-sans text-xxs font-semibold not-italic uppercase tracking-kicker text-muted">
          {cite}
        </cite>
      ) : null}
    </blockquote>
  );
}
