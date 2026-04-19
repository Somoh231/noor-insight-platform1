import type { Metadata } from "next";
import { RevenueRecoveryView } from "@/components/platform/revenue-recovery-view";

export const metadata: Metadata = {
  title: "Revenue recovery engine",
};

export default function RevenueRecoveryPage() {
  return <RevenueRecoveryView />;
}
