import type { PlatformRole } from "@/lib/platform-roles";

export type PlatformUserRecord = {
  id: string;
  email: string;
  name: string;
  role: PlatformRole;
};

/**
 * Evaluation directory: role-separated accounts for controlled pilots and diligence walkthroughs.
 * Credentials are verified against `PLATFORM_DEMO_PASSWORD` (see `.env.example`) until directory sync is enabled.
 */
export const EVALUATION_PLATFORM_USERS: readonly PlatformUserRecord[] = [
  {
    id: "usr_exec",
    email: "executive@noorinsight.local",
    name: "Executive User",
    role: "EXECUTIVE",
  },
  {
    id: "usr_ops",
    email: "operations@noorinsight.local",
    name: "Operations User",
    role: "OPERATIONS",
  },
  {
    id: "usr_field",
    email: "field@noorinsight.local",
    name: "Field User",
    role: "FIELD",
  },
] as const;

/** @deprecated Use `findEvaluationUser` */
export const DEMO_PLATFORM_USERS = EVALUATION_PLATFORM_USERS;

export function findEvaluationUser(email: string) {
  const normalized = email.trim().toLowerCase();
  return EVALUATION_PLATFORM_USERS.find((u) => u.email.toLowerCase() === normalized);
}

/** @deprecated Use `findEvaluationUser` */
export const findDemoUser = findEvaluationUser;

export function getEvaluationPassword() {
  return process.env.PLATFORM_DEMO_PASSWORD ?? "NoorDemo#2026";
}

/** @deprecated Use `getEvaluationPassword` */
export const getDemoPassword = getEvaluationPassword;
