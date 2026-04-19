"use client";

import dynamic from "next/dynamic";
import { ChartMapPlaceholder } from "@/components/ui/chart-map-placeholder";
import type { Technician } from "@/lib/demo-field-operations-data";
import { StaticFieldTechniciansMap } from "@/components/field-operations/static-field-technicians-map";

const MapboxFieldTechniciansMap = dynamic(
  () => import("@/components/field-operations/mapbox-field-technicians-map"),
  {
    ssr: false,
    loading: () => (
      <ChartMapPlaceholder
        label="Loading map…"
        className="h-[min(520px,calc(100dvh-16rem))] w-full rounded-2xl"
      />
    ),
  }
);

export function TechnicianMap({
  technicians,
}: {
  technicians: readonly Technician[];
}) {
  const token = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;
  if (token) return <MapboxFieldTechniciansMap technicians={technicians} />;
  return <StaticFieldTechniciansMap technicians={technicians} />;
}
