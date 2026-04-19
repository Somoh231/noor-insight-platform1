import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { authenticatePlatformUser } from "@/lib/platform-auth";
import { isPlatformRole } from "@/lib/platform-roles";
import { getNextAuthSecret } from "@/lib/nextauth-secret";

export const authOptions: NextAuthOptions = {
  session: { strategy: "jwt", maxAge: 60 * 60 * 8 },
  pages: {
    signIn: "/platform/login",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const email = credentials?.email;
        const password = credentials?.password;
        if (!email || !password) return null;

        const user = await authenticatePlatformUser(String(email), String(password));
        if (!user) return null;

        return {
          id: user.id,
          email: user.email,
          name: user.name,
          role: user.role,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user && "role" in user && isPlatformRole(user.role)) {
        token.role = user.role;
        token.sub = user.id ?? token.sub;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = typeof token.sub === "string" ? token.sub : "";
        if (isPlatformRole(token.role)) {
          session.user.role = token.role;
        }
      }
      return session;
    },
  },
  secret: getNextAuthSecret(),
};
