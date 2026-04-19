import type { Metadata } from "next";
import { HotspotMapView } from "@/components/platform/hotspot-map-view";

export const metadata: Metadata = {
  title: "Hotspot Map",
};

export default function HotspotMapPage() {
  return <HotspotMapView />;
}
