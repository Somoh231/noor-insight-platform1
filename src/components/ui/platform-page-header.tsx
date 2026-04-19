import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function PlatformPageHeader({
  kicker,
  title,
  description,
  badges,
  actions,
  className,
}: {
  kicker: string;
  title: string;
  description: string;
  badges?: ReactNode;
  actions?: ReactNode;
  className?: string;
}) {
  return (
    <header
      className={cn(
        "flex flex-col gap-4 pb-6 lg:flex-row lg:items-end lg:justify-between lg:pb-8",
        className
      )}
    >
      <div className="min-w-0">
        <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-dgray/50">
          {kicker}
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
          {title}
        </h1>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-dgray/75">{description}</p>
      </div>
      <div className="flex shrink-0 flex-wrap items-center gap-2">
        {badges}
        {actions}
      </div>
    </header>
  );
}
