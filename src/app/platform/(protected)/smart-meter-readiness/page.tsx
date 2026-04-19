import type { Metadata } from "next";
import { SmartMeterReadinessView } from "@/components/platform/smart-meter-readiness-view";

export const metadata: Metadata = {
  title: "Smart Meter Readiness",
};

export default function SmartMeterReadinessPage() {
  return <SmartMeterReadinessView />;
}
