import Link from "next/link";
import { cn } from "@/lib/utils";

/**
 * Noor Insight wordmark. Rendered typographically (no image) so it stays
 * crisp at every size and inherits type loading. Amber period is the only
 * accent flourish permitted on the mark.
 */
export function BrandLogo({
  className,
  href = "/",
  size = "md",
  tone = "ink",
}: {
  className?: string;
  href?: string;
  size?: "sm" | "md" | "lg";
  /** `ink` for the warm page; `paper` for dark surfaces (footer). */
  tone?: "ink" | "paper";
}) {
  const sizeClass =
    size === "sm" ? "text-xl" : size === "lg" ? "text-[32px]" : "text-2xl";
  const eyebrowSize = size === "sm" ? "text-[9px]" : "text-[10px]";
  const labelColor = tone === "paper" ? "text-page" : "text-ink";
  const eyebrowColor = tone === "paper" ? "text-ink-4" : "text-ink-3";

  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex shrink-0 items-baseline gap-2 no-underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
        className
      )}
      aria-label="Noor Insight, home"
    >
      <span
        className={cn(
          "font-serif font-medium leading-none tracking-[-0.015em]",
          sizeClass,
          labelColor
        )}
      >
        Noor<span className="text-accent">.</span>
      </span>
      <span
        className={cn(
          "font-mono font-medium uppercase leading-none tracking-[0.18em]",
          eyebrowSize,
          eyebrowColor
        )}
      >
        Insight
      </span>
    </Link>
  );
}
