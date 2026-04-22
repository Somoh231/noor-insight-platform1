import NextLink from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary";

const baseClass =
  "inline-flex items-center justify-center gap-2 rounded-control px-5 py-3 text-[14px] font-medium tracking-[-0.005em] no-underline transition-colors duration-quick ease-standard focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:opacity-55 disabled:cursor-not-allowed";

const variantClass: Record<Variant, string> = {
  primary:
    "bg-ink text-page border border-ink hover:bg-ink-2 active:bg-ink-2",
  secondary:
    "bg-page text-ink border border-line hover:bg-surface hover:border-line-strong",
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
  arrow = true,
  external,
  ...rest
}: {
  children: ReactNode;
  href: string;
  variant?: Variant;
  className?: string;
  arrow?: boolean;
  external?: boolean;
  "aria-label"?: string;
}) {
  const isExternal = external ?? /^(https?:|mailto:|tel:)/i.test(href);
  const content = (
    <>
      {children}
      {arrow ? (
        <span aria-hidden className="translate-y-[-1px]">→</span>
      ) : null}
    </>
  );
  const classes = cn(baseClass, variantClass[variant], className);
  if (isExternal) {
    return (
      <a
        href={href}
        className={classes}
        rel={/^https?:/i.test(href) ? "noopener noreferrer" : undefined}
        {...rest}
      >
        {content}
      </a>
    );
  }
  return (
    <NextLink href={href} className={classes} {...rest}>
      {content}
    </NextLink>
  );
}
