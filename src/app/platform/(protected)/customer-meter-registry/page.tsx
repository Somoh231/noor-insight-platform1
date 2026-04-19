import type { Metadata } from "next";
import { CustomerMeterRegistryView } from "@/components/platform/customer-meter-registry-view";

export const metadata: Metadata = {
  title: "Customer & Meter Registry",
};

export default function CustomerMeterRegistryPage() {
  return <CustomerMeterRegistryView />;
}
