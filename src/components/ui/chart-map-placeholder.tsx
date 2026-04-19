import { Spinner } from "@/components/ui/spinner";
import { cn } from "@/lib/utils";

export function ChartMapPlaceholder({
  label = "Loading visualization…",
  className,
}: {
  label?: string;
  className?: string;
}) {
  return (
    <div
      aria-busy="true"
      className={cn(
        "flex w-full flex-col items-center justify-center gap-3 rounded-xl border border-navy/[0.06] bg-panel/70 px-4 py-10 text-center text-sm font-semibold text-dgray/60 motion-safe:animate-pulse motion-reduce:animate-none",
        className
      )}
    >
      <Spinner size="lg" label={label} />
      <span className="text-xs font-medium text-dgray/55" aria-hidden="true">
        {label}
      </span>
    </div>
  );
}
