"use client";

import "mapbox-gl/dist/mapbox-gl.css";
import Map, { Marker, NavigationControl } from "react-map-gl/mapbox";
import type { Technician } from "@/lib/demo-field-operations-data";
import { techStatusDotClass } from "@/components/field-operations/tech-status-styles";

export default function MapboxFieldTechniciansMap({
  technicians,
}: {
  technicians: readonly Technician[];
}) {
  const token = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;
  if (!token) return null;

  return (
    <div className="relative h-[min(520px,calc(100dvh-16rem))] w-full overflow-hidden rounded-2xl border border-navy/10">
      <Map
        mapboxAccessToken={token}
        mapStyle="mapbox://styles/mapbox/light-v11"
        initialViewState={{
          longitude: -10.05,
          latitude: 6.25,
          zoom: 6.35,
          pitch: 0,
          bearing: 0,
        }}
        style={{ width: "100%", height: "100%" }}
        attributionControl={false}
      >
        <div className="absolute right-3 top-3 z-10">
          <NavigationControl showCompass={false} />
        </div>
        {technicians.map((t) => (
          <Marker key={t.id} longitude={t.lng} latitude={t.lat} anchor="bottom">
            <div className="group relative -translate-y-1">
              <div className="flex flex-col items-center">
                <div className="relative flex h-11 w-11 items-center justify-center rounded-2xl border border-white/20 bg-navy/70 shadow-lg backdrop-blur-sm">
                  <span className={techStatusDotClass(t.status)} />
                </div>
                <div className="pointer-events-none mt-2 rounded-md border border-navy/10 bg-panel/95 px-2 py-1 text-[10px] font-semibold text-navy opacity-0 shadow-sm transition duration-150 group-hover:opacity-100">
                  {t.name}
                </div>
              </div>
            </div>
          </Marker>
        ))}
      </Map>
      <div className="pointer-events-none absolute left-4 top-4 z-10 rounded-full border border-lgray/10 bg-navy/35 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-lgray/70 backdrop-blur-sm">
        Live basemap
      </div>
    </div>
  );
}
