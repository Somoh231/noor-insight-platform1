import { cn } from "@/lib/utils";

/** Shared field styles for platform forms (focus ring, contrast). */
export const inputFieldClassName = (className?: string) =>
  cn(
    "w-full rounded-lg border border-navy/15 bg-lgray px-3 py-2.5 text-sm text-navy outline-none transition-shadow duration-200 ease-out",
    "ring-navy/15 focus:border-navy/25 focus:ring-2 focus:ring-offset-0",
    "placeholder:text-dgray/40 disabled:cursor-not-allowed disabled:opacity-55",
    "aria-[invalid=true]:border-risk-critical/40 aria-[invalid=true]:ring-risk-critical/20",
    className
  );
