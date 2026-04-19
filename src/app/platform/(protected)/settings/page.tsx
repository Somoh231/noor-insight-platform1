import type { Metadata } from "next";
import { PlatformSettingsView } from "@/components/platform/platform-settings-view";

export const metadata: Metadata = {
  title: "Settings",
};

export default function PlatformSettingsPage() {
  return <PlatformSettingsView />;
}
