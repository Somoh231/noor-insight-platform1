import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/** Merge Tailwind classes safely (variants + responsive overrides). */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
