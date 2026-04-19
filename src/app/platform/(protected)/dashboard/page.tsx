import type { Metadata } from "next";
import { ExecutiveDashboard } from "@/components/dashboard/executive-dashboard";

export const metadata: Metadata = {
  title: "Executive dashboard",
};

export default function DashboardPage() {
  return <ExecutiveDashboard />;
}
