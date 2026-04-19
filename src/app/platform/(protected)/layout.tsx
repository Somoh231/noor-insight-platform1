import { PlatformShell } from "@/components/platform/platform-shell";
import { EMAIL_DEMO } from "@/lib/constants";

/** Prototype: auth disabled — full EXECUTIVE nav without sign-in. Re-enable session checks later. */
const PROTOTYPE_PLATFORM_USER = {
  name: "Console evaluation",
  email: EMAIL_DEMO,
  role: "EXECUTIVE" as const,
};

export default function ProtectedPlatformLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <PlatformShell user={PROTOTYPE_PLATFORM_USER}>{children}</PlatformShell>
  );
}
