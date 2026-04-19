import type { Metadata } from "next";
import { ActionCenterView } from "@/components/platform/action-center-view";

export const metadata: Metadata = {
  title: "Action Center",
};

export default function ActionCenterPage() {
  return <ActionCenterView />;
}
