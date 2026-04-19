import bcrypt from "bcryptjs";
import { prisma } from "@/lib/db";
import { findEvaluationUser, getEvaluationPassword } from "@/lib/platform-users";
import { isPlatformRole, type PlatformRole } from "@/lib/platform-roles";

export type AuthenticatedPlatformUser = {
  id: string;
  email: string;
  name: string | null;
  role: PlatformRole;
};

/**
 * Resolves console sign-in: directory-backed users (Prisma / Supabase) first,
 * then evaluation accounts when no matching directory user exists.
 */
export async function authenticatePlatformUser(
  emailRaw: string,
  password: string
): Promise<AuthenticatedPlatformUser | null> {
  const email = emailRaw.trim().toLowerCase();
  if (!email || !password) return null;

  if (process.env.DATABASE_URL) {
    try {
      const row = await prisma.user.findUnique({
        where: { email },
        select: { id: true, email: true, name: true, role: true, passwordHash: true },
      });
      if (row) {
        if (!row.passwordHash) return null;
        const ok = await bcrypt.compare(password, row.passwordHash);
        if (!ok) return null;
        if (!isPlatformRole(row.role)) return null;
        return { id: row.id, email: row.email, name: row.name, role: row.role };
      }
    } catch {
      // Unreachable DB during pilot: allow evaluation directory below.
    }
  }

  const evalUser = findEvaluationUser(email);
  if (!evalUser) return null;
  if (password !== getEvaluationPassword()) return null;
  if (!isPlatformRole(evalUser.role)) return null;
  return {
    id: evalUser.id,
    email: evalUser.email,
    name: evalUser.name,
    role: evalUser.role,
  };
}
