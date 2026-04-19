export const PLATFORM_ROLES = ["EXECUTIVE", "OPERATIONS", "FIELD"] as const;

export type PlatformRole = (typeof PLATFORM_ROLES)[number];

export function isPlatformRole(value: unknown): value is PlatformRole {
  return (
    typeof value === "string" &&
    (PLATFORM_ROLES as readonly string[]).includes(value)
  );
}
