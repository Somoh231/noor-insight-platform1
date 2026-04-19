import type { Metadata } from "next";
import { DeviceDcuMonitoringView } from "@/components/platform/device-dcu-monitoring-view";

export const metadata: Metadata = {
  title: "Device / DCU Monitoring",
};

export default function DeviceDcuMonitoringPage() {
  return <DeviceDcuMonitoringView />;
}
