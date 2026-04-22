import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Tone = "page" | "surface" | "ink";
type Rhythm = "standard" | "tight" | "loose";

/**
 * Section primitive. Applies the Noor Insight vertical rhythm
 * (128px standard, 192px loose, 96px tight on desktop), the 1200px content
 * cap, and optional top/bottom hairlines. Tone switches between warm page,
 * raised surface, and inverse ink backgrounds.
 */
export function Section({
  id,
  as: Tag = "section",
  tone = "page",
  rhythm = "standard",
  topRule = false,
  bottomRule = false,
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
  bottomRule?: boolean;
  className?: string;
  containerClassName?: string;
  children: ReactNode;
  ariaLabelledBy?: string;
}) {
  const toneClass =
    tone === "surface"
      ? "bg-surface"
      : tone === "ink"
        ? "bg-ink text-page"
        : "bg-page";

  const rhythmClass =
    rhythm === "loose"
      ? "py-24 sm:py-32 lg:py-section-lg"
      : rhythm === "tight"
        ? "py-16 sm:py-20 lg:py-24"
        : "py-20 sm:py-28 lg:py-section";

  return (
    <Tag
      id={id}
      aria-labelledby={ariaLabelledBy}
      className={cn(
        "scroll-mt-24 sm:scroll-mt-28",
        toneClass,
        topRule && "border-t border-line",
        bottomRule && "border-b border-line",
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
