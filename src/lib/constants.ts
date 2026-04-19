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

/** Public and product mailboxes (@noorinsight.com). */
export const EMAIL_HELLO = "hello@noorinsight.com";
export const EMAIL_BRIEFING = "briefing@noorinsight.com";
export const EMAIL_PARTNERSHIPS = "partnerships@noorinsight.com";
export const EMAIL_SUPPORT = "support@noorinsight.com";
/** Shown in the platform shell for evaluation / demo sessions. */
export const EMAIL_DEMO = "demo@noorinsight.com";

/**
 * Distinct identities for seeded evaluation users (unique in DB).
 * Plus-addressing delivers to the demo mailbox where supported.
 */
export const EMAIL_DEMO_EXECUTIVE = "demo+executive@noorinsight.com";
export const EMAIL_DEMO_OPERATIONS = "demo+operations@noorinsight.com";
export const EMAIL_DEMO_FIELD = "demo+field@noorinsight.com";

/** @deprecated Prefer `EMAIL_HELLO` or a channel-specific constant. */
export const CONTACT_EMAIL = EMAIL_HELLO;

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
