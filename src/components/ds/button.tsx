import NextLink from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "accent" | "ghost" | "quiet";

const baseClass = [
  "inline-flex items-center justify-center gap-2",
  "rounded-xs border border-transparent",
  "font-sans text-sm font-medium leading-none",
  "px-4 py-[10px]",
  "transition-colors duration-fast ease-standard",
  "focus-visible:outline-none focus-visible:shadow-[inset_0_0_0_1px_rgb(var(--color-ember-rgb))]",
  "disabled:opacity-55 disabled:cursor-not-allowed",
  "active:scale-[0.98] motion-reduce:active:scale-100",
  "whitespace-nowrap no-underline",
].join(" ");

const variantClass: Record<Variant, string> = {
  primary: "bg-ink text-paper hover:bg-black",
  accent: "bg-ember text-paper hover:bg-ember-deep",
  ghost:
    "bg-transparent text-ink border-rule-strong hover:bg-paper-soft hover:border-ink",
  quiet:
    "bg-transparent text-ink-soft hover:text-ink hover:bg-paper-soft px-2 py-[6px]",
};

export function Button({
  children,
  variant = "primary",
  className,
  type = "button",
  ...rest
}: ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: Variant;
}) {
  return (
    <button
      type={type}
      className={cn(baseClass, variantClass[variant], className)}
      {...rest}
    >
      {children}
    </button>
  );
}

export function ButtonLink({
  children,
  href,
  variant = "primary",
  className,
  external,
  ...rest
}: {
  children: ReactNode;
  href: string;
  variant?: Variant;
  className?: string;
  external?: boolean;
  "aria-label"?: string;
}) {
  const isExternal = external ?? /^(https?:|mailto:|tel:)/i.test(href);
  const classes = cn(baseClass, variantClass[variant], className);
  if (isExternal) {
    return (
      <a
        href={href}
        className={classes}
        rel={/^https?:/i.test(href) ? "noopener noreferrer" : undefined}
        {...rest}
      >
        {children}
      </a>
    );
  }
  return (
    <NextLink href={href} className={classes} {...rest}>
      {children}
    </NextLink>
  );
}
