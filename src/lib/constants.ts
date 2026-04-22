/** Public app metadata and URLs. Prefer env for deployment-specific values. */
export const APP_NAME = "Noor Insight";

/** Short positioning line for shared metadata. Not a tagline. */
export const FIRM_DESCRIPTION =
  "Noor Insight is a utility systems and advisory firm for public electricity providers in West Africa. We reconcile billed revenue with collections and produce defensible loss accounting that withstands regulatory and donor scrutiny. Starting market: Liberia Electricity Corporation.";

/** Institutional mailboxes. */
export const EMAIL_HELLO = "hello@noorinsight.com";
export const EMAIL_BRIEFING = "briefings@noorinsight.com";

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
