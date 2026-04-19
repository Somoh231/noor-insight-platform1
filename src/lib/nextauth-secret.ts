/**
 * NextAuth refuses to run without `secret`, which becomes a 500 on `/api/auth/*`
 * (including `/api/auth/session`) whenever `NEXTAUTH_SECRET` is missing.
 *
 * For prototypes and local runs, we always supply a deterministic fallback so the
 * app never hard-fails; set `NEXTAUTH_SECRET` for any environment where JWTs must
 * be cryptographically serious.
 */
const PROTOTYPE_FALLBACK_SECRET =
  "prototype-nextauth-secret-not-for-production-min-32-chars";

let loggedMissingSecret = false;

export function getNextAuthSecret(): string {
  const fromEnv = process.env.NEXTAUTH_SECRET?.trim();
  if (fromEnv) return fromEnv;

  if (!loggedMissingSecret) {
    loggedMissingSecret = true;
    console.warn(
      "[auth] NEXTAUTH_SECRET is unset; using a built-in prototype secret. Set NEXTAUTH_SECRET when you enable real authentication.",
    );
  }
  return PROTOTYPE_FALLBACK_SECRET;
}
