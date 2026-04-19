/**
 * Locale-aware number formatting for dashboards (institutional defaults).
 */
export function formatInteger(value: number, locale = "en-US") {
  return new Intl.NumberFormat(locale, {
    maximumFractionDigits: 0,
  }).format(value);
}

export function formatPercent(value: number, locale = "en-US") {
  return new Intl.NumberFormat(locale, {
    style: "percent",
    maximumFractionDigits: 1,
  }).format(value);
}

export function formatCurrency(
  value: number,
  options?: {
    currency?: string;
    locale?: string;
    notation?: "standard" | "compact";
    maximumFractionDigits?: number;
  }
) {
  const currency = options?.currency ?? "USD";
  const locale = options?.locale ?? "en-US";
  const notation = options?.notation ?? "standard";
  const maximumFractionDigits =
    options?.maximumFractionDigits ?? (notation === "compact" ? 2 : 0);

  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    notation,
    maximumFractionDigits,
  }).format(value);
}
