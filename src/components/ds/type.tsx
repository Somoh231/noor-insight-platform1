import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Mono uppercase eyebrow. Used for section anchors ("Approach · 02"),
 * eyebrows above display headings, and key-value labels inside data panels.
 */
export function Eyebrow({
  children,
  className,
  as: Tag = "p",
  id,
}: {
  children: ReactNode;
  className?: string;
  as?: "p" | "div" | "span";
  id?: string;
}) {
  return (
    <Tag
      id={id}
      className={cn(
        "font-mono text-eyebrow font-medium uppercase tracking-eyebrow text-ink-3",
        className
      )}
    >
      {children}
    </Tag>
  );
}

type DisplaySize = "m" | "l" | "xl";

/**
 * Display serif heading. Three sizes map to the design system scale.
 * Defaults to an h2; pass `as="h1"` for the hero.
 */
export function Display({
  children,
  size = "l",
  as: Tag = "h2",
  className,
  id,
}: {
  children: ReactNode;
  size?: DisplaySize;
  as?: "h1" | "h2" | "h3";
  className?: string;
  id?: string;
}) {
  const sizeClass =
    size === "xl"
      ? "text-4xl sm:text-5xl lg:text-display-xl"
      : size === "m"
        ? "text-3xl sm:text-display-m"
        : "text-3xl sm:text-4xl lg:text-display-l";

  return (
    <Tag
      id={id}
      className={cn(
        "font-serif font-normal text-ink",
        sizeClass,
        "leading-[1.08] tracking-[-0.015em]",
        className
      )}
      style={{ textWrap: "balance" }}
    >
      {children}
    </Tag>
  );
}

/**
 * Lede paragraph. 19px body-l on a 720px measure, slightly muted against ink.
 */
export function Lede({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "max-w-measure text-body-l leading-[1.55] text-ink-2",
        className
      )}
      style={{ textWrap: "pretty" }}
    >
      {children}
    </p>
  );
}

/**
 * Standard body paragraph on the 720px measure. Use inside long-form prose.
 */
export function Body({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "max-w-measure text-body leading-[1.7] text-ink-2",
        className
      )}
      style={{ textWrap: "pretty" }}
    >
      {children}
    </p>
  );
}
