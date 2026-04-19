import type { Metadata } from "next";
import { ConnectivityManagementView } from "@/components/platform/connectivity-management-view";

export const metadata: Metadata = {
  title: "Connectivity Management",
};

export default function ConnectivityManagementPage() {
  return <ConnectivityManagementView />;
}
