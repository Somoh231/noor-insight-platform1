import type { Metadata } from "next";
import { NetworkMappingView } from "@/components/platform/network-mapping-view";

export const metadata: Metadata = {
  title: "Network Mapping",
};

export default function NetworkMappingPage() {
  return <NetworkMappingView />;
}
