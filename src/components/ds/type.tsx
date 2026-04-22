import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Kicker — small-caps label above a title. Sans, 600 weight, 0.14em
 * tracking, ember coloured by default. The `muted` variant drops to
 * fg-3 for subtler contexts.
 */
export function Kicker({
  children,
  className,
  as: Tag = "p",
  id,
  muted = false,
}: {
  children: ReactNode;
  className?: string;
  as?: "p" | "div" | "span";
  id?: string;
  muted?: boolean;
}) {
  return (
    <Tag
      id={id}
      className={cn(
        "font-sans text-xxs font-semibold uppercase tracking-kicker",
        muted ? "text-muted" : "text-ember",
        className
      )}
    >
      {children}
    </Tag>
  );
}

type DisplaySize = "sm" | "md" | "lg" | "xl";

/**
 * Display heading — the editorial face of the system. `xl` is the hero
 * scale (84 px), `lg` is H1 (44 px), `md` is H2 (32 px), `sm` is an
 * understated H2 (24 px).
 */
export function Display({
  children,
  size = "lg",
  as: Tag = "h2",
  className,
  id,
}: {
  children: ReactNode;
  size?: DisplaySize;
  as?: "h1" | "h2" | "h3" | "h4";
  className?: string;
  id?: string;
}) {
  const sizeClass =
    size === "xl"
      ? "text-[44px] sm:text-[60px] lg:text-5xl leading-[1.0] tracking-[-0.02em]"
      : size === "lg"
        ? "text-3xl sm:text-4xl leading-tight tracking-[-0.015em]"
        : size === "md"
          ? "text-2xl sm:text-[32px] leading-[1.2] tracking-[-0.01em]"
          : "text-xl sm:text-2xl leading-[1.25] tracking-[-0.005em]";

  return (
    <Tag
      id={id}
      className={cn("font-serif font-normal text-ink", sizeClass, className)}
      style={{ textWrap: "balance" }}
    >
      {children}
    </Tag>
  );
}

/**
 * Lede — the serif paragraph that follows a Display. Inter would read as
 * UI; the lede stays in Source Serif 4 for editorial authority.
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
        "max-w-measure-body font-serif text-lg leading-normal text-ink-soft",
        className
      )}
      style={{ textWrap: "pretty" }}
    >
      {children}
    </p>
  );
}

/**
 * Body — Inter, 15 px, the workhorse paragraph.
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
        "max-w-measure-body text-base leading-normal text-ink",
        className
      )}
      style={{ textWrap: "pretty" }}
    >
      {children}
    </p>
  );
}

/**
 * Caption — the smallest legible line; muted.
 */
export function Caption({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p className={cn("text-xs leading-normal text-muted", className)}>
      {children}
    </p>
  );
}

/**
 * Mono — JetBrains Mono for codes, footnote anchors, reference ids.
 */
export function Mono({
  children,
  className,
  as: Tag = "span",
}: {
  children: ReactNode;
  className?: string;
  as?: "span" | "p" | "div" | "code";
}) {
  return (
    <Tag
      className={cn(
        "tabular font-mono text-sm leading-normal text-ink",
        className
      )}
    >
      {children}
    </Tag>
  );
}
