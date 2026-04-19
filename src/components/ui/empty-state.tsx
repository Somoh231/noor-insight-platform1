import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function EmptyState({
  title,
  description,
  action,
  className,
  icon,
}: {
  title: string;
  description?: string;
  action?: ReactNode;
  className?: string;
  icon?: ReactNode;
}) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-dashed border-navy/15 bg-lgray/50 px-6 py-10 text-center motion-safe:animate-fade-in motion-reduce:animate-none",
        className
      )}
    >
      {icon ? (
        <div className="mx-auto mb-4 flex h-11 w-11 items-center justify-center rounded-full border border-navy/10 bg-panel text-navy/70">
          {icon}
        </div>
      ) : null}
      <p className="text-sm font-semibold tracking-tight text-navy">{title}</p>
      {description ? (
        <p className="mx-auto mt-2 max-w-md text-xs leading-relaxed text-dgray/65 sm:text-sm">
          {description}
        </p>
      ) : null}
      {action ? <div className="mt-5 flex justify-center gap-3">{action}</div> : null}
    </div>
  );
}
