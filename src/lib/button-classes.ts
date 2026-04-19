import { cn } from "@/lib/utils";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "ghost"
  | "inverse"
  | "ghostOnDark";

const base =
  "inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-[15px] font-semibold tracking-tight min-h-11 transition-[transform,box-shadow,background-color,border-color,color,opacity] duration-200 ease-out motion-reduce:transition-colors motion-reduce:duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:pointer-events-none disabled:opacity-45";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-navy text-lgray shadow-sm shadow-navy/20 ring-1 ring-inset ring-white/10 motion-safe:hover:-translate-y-px hover:bg-navy/95 hover:shadow-md hover:shadow-navy/25 motion-safe:active:translate-y-0 active:shadow-sm focus-visible:outline-navy/35",
  secondary:
    "border border-navy/15 bg-lgray/90 text-navy shadow-sm motion-safe:hover:-translate-y-px hover:border-navy/25 hover:bg-panel hover:shadow-md motion-safe:active:translate-y-0 active:shadow-sm focus-visible:outline-navy/30",
  ghost:
    "border border-transparent text-navy hover:bg-navy/[0.055] focus-visible:outline-navy/25",
  inverse:
    "border border-white/10 bg-lgray text-navy shadow-md shadow-navy/15 motion-safe:hover:-translate-y-px hover:bg-white hover:shadow-lg motion-safe:active:translate-y-0 focus-visible:outline-white/40",
  ghostOnDark:
    "border border-white/10 text-lgray/95 hover:border-white/15 hover:bg-white/[0.06] focus-visible:outline-white/35",
};

export function buttonClassName(
  variant: ButtonVariant = "primary",
  className?: string
) {
  return cn(base, variants[variant], className);
}
