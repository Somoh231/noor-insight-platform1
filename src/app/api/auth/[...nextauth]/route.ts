import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

/**
 * Prototype: NextAuth is not mounted. A real `NextAuth()` handler still loads
 * `authOptions` (Prisma, bcrypt, secrets) and can 500 on `/api/auth/session` when
 * anything probes this route. These handlers return stable JSON instead.
 *
 * Catch-all handlers accept `context.params` so Next.js can invoke them safely for
 * every `/api/auth/*` segment (session, csrf, providers, etc.).
 */
type NextAuthCatchAll = { params: { nextauth: string[] } };

export async function GET(_request: NextRequest, _context: NextAuthCatchAll) {
  return NextResponse.json({});
}

export async function POST(_request: NextRequest, _context: NextAuthCatchAll) {
  return NextResponse.json({});
}
