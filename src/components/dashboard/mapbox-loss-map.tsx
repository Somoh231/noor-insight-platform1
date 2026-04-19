"use client";

import "mapbox-gl/dist/mapbox-gl.css";
import Map, { Marker, NavigationControl } from "react-map-gl/mapbox";
import type { LossHotspot } from "@/lib/demo-executive-dashboard-data";
import { cn } from "@/lib/utils";

export default function MapboxLossMap({
  hotspots,
}: {
  hotspots: readonly LossHotspot[];
}) {
  const token = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;
  if (!token) return null;

  return (
    <div className="relative h-[420px] w-full overflow-hidden rounded-xl border border-navy/[0.06]">
      <Map
        mapboxAccessToken={token}
        mapStyle="mapbox://styles/mapbox/light-v11"
        initialViewState={{
          longitude: -9.75,
          latitude: 6.35,
          zoom: 5.85,
          pitch: 0,
          bearing: 0,
        }}
        style={{ width: "100%", height: "100%" }}
        attributionControl={false}
      >
        <div className="absolute right-3 top-3 z-10">
          <NavigationControl showCompass={false} />
        </div>
        {hotspots.map((h) => (
          <Marker key={h.id} longitude={h.lng} latitude={h.lat} anchor="center">
            <div className="group relative">
              <div
                className={cn(
                  "h-3.5 w-3.5 rounded-full border-2 border-white shadow-lg ring-2",
                  h.severity === "high" && "bg-gold ring-gold/35",
                  h.severity === "medium" && "bg-navy/70 ring-navy/20",
                  h.severity === "low" && "bg-navy/45 ring-navy/15"
                )}
              />
              <div className="pointer-events-none absolute left-1/2 top-[calc(100%+10px)] w-max -translate-x-1/2 rounded-md border border-navy/10 bg-panel/95 px-2 py-1 text-[10px] font-semibold text-navy opacity-0 shadow-sm transition duration-150 group-hover:opacity-100">
                {h.label}
              </div>
            </div>
          </Marker>
        ))}
      </Map>

      <div className="pointer-events-none absolute left-4 top-4 rounded-full border border-navy/10 bg-panel/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-dgray/60 backdrop-blur-sm">
        Live basemap
      </div>
    </div>
  );
}
