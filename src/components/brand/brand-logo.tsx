import Link from "next/link";
import { cn } from "@/lib/utils";

/**
 * Noor Insight wordmark. Typographic (no image) so it stays crisp at
 * every size: "Noor" in serif medium, an ember dot, a hairline vertical
 * divider, and "Insight" in serif italic regular. Matches the v2 design
 * bundle's logo-wordmark.svg exactly.
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
  /** `ink` for paper; `paper` for dark (footer) surfaces. */
  tone?: "ink" | "paper";
}) {
  const sizeClass =
    size === "sm" ? "text-xl" : size === "lg" ? "text-[32px]" : "text-[22px]";
  const wordColor = tone === "paper" ? "text-paper" : "text-ink";
  const ruleColor =
    tone === "paper" ? "bg-paper/70" : "bg-ink";

  return (
    <Link
      href={href}
      aria-label="Noor Insight, home"
      className={cn(
        "inline-flex shrink-0 items-center gap-[10px] font-serif leading-none tracking-[-0.01em] no-underline",
        sizeClass,
        wordColor,
        className
      )}
    >
      <span className="font-medium">Noor</span>
      <span
        aria-hidden
        className="mb-[0.22em] inline-block h-[0.32em] w-[0.32em] rounded-full bg-ember"
      />
      <span aria-hidden className={cn("inline-block h-[0.78em] w-px", ruleColor)} />
      <span className="font-normal italic">Insight</span>
    </Link>
  );
}
