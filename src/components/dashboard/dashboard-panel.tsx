import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function DashboardPanel({
  title,
  subtitle,
  action,
  children,
  className,
}: {
  title: string;
  subtitle?: string;
  action?: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      className={cn(
        "overflow-hidden rounded-2xl border border-navy/[0.08] bg-panel/90 shadow-sm ring-1 ring-navy/[0.04]",
        className
      )}
    >
      <header className="flex flex-col gap-4 border-b border-navy/[0.06] bg-gradient-to-b from-panel to-lgray/35 px-6 py-5 sm:flex-row sm:items-start sm:justify-between">
        <div className="min-w-0">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-gold/70" aria-hidden />
            <h2 className="text-sm font-semibold tracking-tight text-navy">
              {title}
            </h2>
          </div>
          {subtitle ? (
            <p className="mt-2 max-w-prose text-xs leading-relaxed text-dgray/65 sm:text-[13px]">
              {subtitle}
            </p>
          ) : null}
        </div>
        {action ? <div className="shrink-0">{action}</div> : null}
      </header>
      <div>{children}</div>
    </section>
  );
}
