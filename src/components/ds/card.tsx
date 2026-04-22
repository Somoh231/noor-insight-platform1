import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * A Noor card: paper background, 1px hairline border, 4px radius, no
 * shadow. Header is a kicker + title on a hairline, body sits below.
 * Use <CardKicker>, <CardTitle>, <CardBody>, <CardMeta> for content.
 */
export function Card({
  as: Tag = "div",
  className,
  children,
  interactive = false,
  onClick,
}: {
  as?: "div" | "article" | "li";
  className?: string;
  children: ReactNode;
  interactive?: boolean;
  onClick?: () => void;
}) {
  return (
    <Tag
      onClick={onClick}
      className={cn(
        "border border-rule bg-paper rounded-sm p-6 sm:p-7",
        interactive &&
          "cursor-pointer transition-colors duration-fast ease-standard hover:bg-paper-soft",
        className
      )}
    >
      {children}
    </Tag>
  );
}
