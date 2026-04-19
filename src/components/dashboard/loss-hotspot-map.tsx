"use client";

import dynamic from "next/dynamic";
import { ChartMapPlaceholder } from "@/components/ui/chart-map-placeholder";
import type { LossHotspot } from "@/lib/demo-executive-dashboard-data";
import { StaticLossHotspotMap } from "@/components/dashboard/static-loss-hotspot-map";

const MapboxLossMap = dynamic(
  () => import("@/components/dashboard/mapbox-loss-map"),
  {
    ssr: false,
    loading: () => (
      <ChartMapPlaceholder label="Loading map…" className="h-[420px] w-full" />
    ),
  }
);

export function LossHotspotMap({
  hotspots,
}: {
  hotspots: readonly LossHotspot[];
}) {
  const token = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

  if (token) {
    return <MapboxLossMap hotspots={hotspots} />;
  }

  return <StaticLossHotspotMap hotspots={hotspots} />;
}
