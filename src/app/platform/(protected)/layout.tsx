import { PlatformShell } from "@/components/platform/platform-shell";

/** Prototype: auth disabled — full EXECUTIVE nav without sign-in. Re-enable session checks later. */
const PROTOTYPE_PLATFORM_USER = {
  name: "Prototype",
  email: "prototype@local",
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
