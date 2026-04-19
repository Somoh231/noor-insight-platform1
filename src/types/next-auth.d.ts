import type { DefaultSession } from "next-auth";
import type { PlatformRole } from "@/lib/platform-roles";

declare module "next-auth" {
  interface Session {
    user: DefaultSession["user"] & {
      id: string;
      role: PlatformRole;
    };
  }

  interface User {
    id: string;
    role: PlatformRole;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    role?: PlatformRole;
  }
}
