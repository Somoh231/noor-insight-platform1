import type { Metadata } from "next";
import { ExecutiveDashboard } from "@/components/dashboard/executive-dashboard";

export const metadata: Metadata = {
  title: "Executive Overview",
};

export default function DashboardPage() {
  return <ExecutiveDashboard />;
}
