/** Public app metadata and URLs. Prefer env for deployment-specific values. */
export const APP_NAME = "Noor Insight";

/** Official wordmark styling (logo lockup). */
export const BRAND_WORDMARK = "NOOR INSIGHT";

/** Short positioning line for headers, decks, and hero surfaces. */
export const BRAND_STATEMENT =
  "Noor Insight turns operational data into clear action.";

/** Closing line for homepage and institutional materials (includes em dash per brand). */
export const BRAND_CLOSING_TAGLINE = "Noor Insight — Turning Data Into Clarity.";

/** Product naming for console and enterprise references. */
export const PRODUCT_PLATFORM_NAME = "Noor Insight Platform";

export const PRODUCT_FOR_UTILITIES = "Noor Insight for Utilities";

export const POWERED_BY_BRAND = "Powered by Noor Insight";

/** Public inquiries. Replace when production mailbox is finalized. */
export const CONTACT_EMAIL = "briefings@noorinsight.com";

const DEFAULT_PUBLIC_URL = "http://localhost:3000";

/**
 * Canonical public origin for links and metadata. Trims env, adds `http://` when
 * the scheme is omitted (e.g. `localhost:3001`), and never returns an empty string
 * — empty/invalid values break `new URL()` in metadata and OG generation.
 */
export function getPublicAppUrl(): string {
  const raw = process.env.NEXT_PUBLIC_APP_URL?.trim();
  if (!raw) return DEFAULT_PUBLIC_URL;
  if (/^https?:\/\//i.test(raw)) return raw;
  return `http://${raw}`;
}

/** Safe `metadataBase` for `layout.tsx` / `seo.ts`; never throws. */
export function getMetadataBaseUrl(): URL {
  try {
    return new URL(getPublicAppUrl());
  } catch {
    return new URL(DEFAULT_PUBLIC_URL);
  }
}
