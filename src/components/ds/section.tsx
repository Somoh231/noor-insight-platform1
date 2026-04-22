import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Tone = "paper" | "paper-soft" | "ink";
type Rhythm = "standard" | "tight" | "loose";

/**
 * Section primitive — content max of 1240px (v2), 4-based vertical
 * rhythm, tone switch between paper / paper-soft / inverse ink.
 * Top and bottom hairlines are opt-in; the whole system leans heavily
 * on hairlines so use them deliberately.
 */
export function Section({
  id,
  as: Tag = "section",
  tone = "paper",
  rhythm = "standard",
  topRule = false,
  topRuleStrong = false,
  bottomRule = false,
  bottomRuleStrong = false,
  className,
  containerClassName,
  children,
  ariaLabelledBy,
}: {
  id?: string;
  as?: "section" | "div" | "article" | "header" | "footer" | "main";
  tone?: Tone;
  rhythm?: Rhythm;
  topRule?: boolean;
  topRuleStrong?: boolean;
  bottomRule?: boolean;
  bottomRuleStrong?: boolean;
  className?: string;
  containerClassName?: string;
  children: ReactNode;
  ariaLabelledBy?: string;
}) {
  const toneClass =
    tone === "paper-soft"
      ? "bg-paper-soft"
      : tone === "ink"
        ? "bg-ink text-paper"
        : "bg-paper";

  const rhythmClass =
    rhythm === "loose"
      ? "py-20 sm:py-24 lg:py-[128px]"
      : rhythm === "tight"
        ? "py-12 sm:py-16 lg:py-20"
        : "py-16 sm:py-20 lg:py-24";

  return (
    <Tag
      id={id}
      aria-labelledby={ariaLabelledBy}
      className={cn(
        "scroll-mt-24 sm:scroll-mt-28",
        toneClass,
        topRule && "border-t border-rule",
        topRuleStrong && "border-t border-ink",
        bottomRule && "border-b border-rule",
        bottomRuleStrong && "border-b border-ink",
        className
      )}
    >
      <div
        className={cn(
          "mx-auto w-full max-w-content px-6 sm:px-8 lg:px-outer",
          rhythmClass,
          containerClassName
        )}
      >
        {children}
      </div>
    </Tag>
  );
}
