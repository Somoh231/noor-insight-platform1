import { cn } from "@/lib/utils";

export function Spinner({
  className,
  label = "Loading",
  size = "md",
}: {
  className?: string;
  label?: string;
  size?: "sm" | "md" | "lg";
}) {
  const dim =
    size === "sm" ? "h-4 w-4 border-2" : size === "lg" ? "h-10 w-10 border-[3px]" : "h-5 w-5 border-2";
  return (
    <span
      role="status"
      aria-live="polite"
      aria-label={label}
      className={cn("inline-flex items-center justify-center", className)}
    >
      <span
        className={cn(
          "rounded-full border-navy/15 border-t-navy motion-safe:animate-spin",
          dim
        )}
        aria-hidden
      />
    </span>
  );
}
