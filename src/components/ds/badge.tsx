import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "default" | "ok" | "warn" | "bad" | "accent";

const variantClass: Record<Variant, string> = {
  default: "bg-paper-soft text-ink-soft border-rule",
  ok: "bg-reconciled-wash text-reconciled border-transparent",
  warn: "bg-caution-wash text-[#7C5A1B] border-transparent",
  bad: "bg-variance-wash text-variance border-transparent",
  accent: "bg-ember-wash text-ember-deep border-transparent",
};

export function Badge({
  children,
  variant = "default",
  className,
}: {
  children: ReactNode;
  variant?: Variant;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-[6px] border rounded-xs px-2 py-[3px]",
        "font-sans text-xxs font-semibold uppercase tracking-[0.08em]",
        variantClass[variant],
        className
      )}
    >
      {children}
    </span>
  );
}

type DotVariant = "ok" | "warn" | "bad" | "pending";

const dotClass: Record<DotVariant, string> = {
  ok: "bg-reconciled",
  warn: "bg-caution",
  bad: "bg-variance",
  pending: "border-[1.5px] border-muted bg-transparent",
};

export function Dot({
  variant,
  className,
}: {
  variant: DotVariant;
  className?: string;
}) {
  return (
    <span
      aria-hidden
      className={cn(
        "inline-block h-2 w-2 rounded-pill",
        dotClass[variant],
        className
      )}
    />
  );
}
