import type { AnchorHTMLAttributes, ReactNode } from "react";
import NextLink from "next/link";
import { cn } from "@/lib/utils";

type Variant = "body" | "arrow" | "ember";

type Props = {
  children: ReactNode;
  href: string;
  variant?: Variant;
  className?: string;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "children">;

/**
 * Inline text link. v2 prefers a color-shift on hover (ink → ember)
 * over the old underline-on-hover pattern. External urls pass through
 * with a trailing arrow glyph when `variant="arrow"`.
 */
export function InlineLink({
  children,
  href,
  variant = "body",
  className,
  ...rest
}: Props) {
  const external = /^https?:\/\//i.test(href);
  const common = cn(
    "no-underline transition-colors duration-fast ease-standard",
    variant === "ember"
      ? "text-ember hover:text-ember-deep"
      : "text-ink hover:text-ember",
    "focus-visible:outline-none focus-visible:shadow-[inset_0_0_0_1px_rgb(var(--color-ember-rgb))] focus-visible:rounded-xs",
    className
  );

  const content = (
    <>
      {children}
      {variant === "arrow" ? (
        <span aria-hidden className="ml-1 font-mono">→</span>
      ) : null}
    </>
  );

  if (external) {
    return (
      <a
        href={href}
        className={common}
        rel="noopener noreferrer"
        target="_blank"
        {...rest}
      >
        {content}
      </a>
    );
  }

  return (
    <NextLink href={href} className={common} {...rest}>
      {content}
    </NextLink>
  );
}
