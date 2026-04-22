import type { AnchorHTMLAttributes, ReactNode } from "react";
import NextLink from "next/link";
import { cn } from "@/lib/utils";

type Variant = "body" | "arrow";

type BaseProps = {
  children: ReactNode;
  href: string;
  variant?: Variant;
  className?: string;
};

type InlineLinkProps = BaseProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "children">;

/**
 * Inline text link. Amber underline on hover, 4px offset. Never scales.
 * For navigation use `NextLink` with `href`. External URLs pass through
 * with a trailing arrow glyph when `variant="arrow"`.
 */
export function InlineLink({
  children,
  href,
  variant = "body",
  className,
  ...rest
}: InlineLinkProps) {
  const external = /^https?:\/\//i.test(href);
  const common = cn(
    "text-ink underline decoration-line underline-offset-4 transition-colors duration-quick ease-standard",
    "hover:text-accent hover:decoration-accent",
    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
    className
  );

  const content = (
    <>
      {children}
      {variant === "arrow" ? (
        <span aria-hidden className="ml-1 inline-block translate-y-[-1px]">
          →
        </span>
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
