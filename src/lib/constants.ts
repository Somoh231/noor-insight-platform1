/** Public app metadata and URLs. Prefer env for deployment-specific values. */
export const APP_NAME = "Noor Insight";

/** Short positioning line for shared metadata. Not a tagline. */
export const FIRM_DESCRIPTION =
  "Noor Insight is a utility systems and advisory firm. We partner with public electricity providers in emerging markets on revenue integrity, operational visibility, and accountable reporting.";

/** Institutional mailboxes. */
export const EMAIL_HELLO = "hello@noorinsight.co";
export const EMAIL_BRIEFING = "briefings@noorinsight.co";
export const EMAIL_PARTNERSHIPS = "partnerships@noorinsight.co";

/**
 * TODO(D4): these legacy constants keep the existing privacy / terms /
 * security / solutions pages compiling until Deliverable 4 rewrites their
 * copy against the new positioning. They should not be used in any new code.
 */
export const EMAIL_SUPPORT = EMAIL_HELLO;
export const PRODUCT_PLATFORM_NAME = "Noor Insight";
/**
 * TODO(D3): legacy home-hero string; retired when the home page is
 * rewritten in Deliverable 3.
 */
export const BRAND_STATEMENT = FIRM_DESCRIPTION;

const DEFAULT_PUBLIC_URL = "http://localhost:3000";

export function getPublicAppUrl(): string {
  const raw = process.env.NEXT_PUBLIC_APP_URL?.trim();
  if (!raw) return DEFAULT_PUBLIC_URL;
  if (/^https?:\/\//i.test(raw)) return raw;
  return `http://${raw}`;
}

export function getMetadataBaseUrl(): URL {
  try {
    return new URL(getPublicAppUrl());
  } catch {
    return new URL(DEFAULT_PUBLIC_URL);
  }
}
