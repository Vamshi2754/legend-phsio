"use client";

import { useEffect, useRef, useState } from "react";
import type { ClinicLocation } from "@/data/clinicLocations";

interface Props {
  locations: ClinicLocation[];
  selectedId: string | null;
  onMarkerClick: (id: string) => void;
}

export default function ClinicsMap({ locations, selectedId, onMarkerClick }: Props) {
  const mapRef = useRef<any>(null);
  const markersRef = useRef<Record<string, any>>({});
  const containerRef = useRef<HTMLDivElement>(null);
  const [userPos, setUserPos] = useState<[number, number] | null>(null);
  const [locating, setLocating] = useState(false);

  // Init map once
  useEffect(() => {
    if (mapRef.current || !containerRef.current) return;

    // Dynamically import Leaflet to avoid SSR issues
    import("leaflet").then((L) => {
      // Fix default icon paths broken by webpack
      delete (L.Icon.Default.prototype as any)._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
        iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
        shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
      });

      const map = L.map(containerRef.current!, {
        center: [17.3850, 78.4867],
        zoom: 11,
        zoomControl: true,
        scrollWheelZoom: true,
      });

      // OpenStreetMap tiles — free, no API key
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 19,
      }).addTo(map);

      // Custom blue marker icon
      const defaultIcon = L.divIcon({
        className: "",
        html: `<div style="
          width:32px;height:40px;
          background:#2563eb;
          border-radius:50% 50% 50% 0;
          transform:rotate(-45deg);
          border:3px solid #fff;
          box-shadow:0 2px 8px rgba(0,0,0,0.35);
          display:flex;align-items:center;justify-content:center;
        "><div style="
          width:10px;height:10px;
          background:#fff;
          border-radius:50%;
          transform:rotate(45deg);
        "></div></div>`,
        iconSize: [32, 40],
        iconAnchor: [16, 40],
        popupAnchor: [0, -42],
      });

      // Selected (red) marker icon
      const selectedIcon = L.divIcon({
        className: "",
        html: `<div style="
          width:38px;height:48px;
          background:#ef4444;
          border-radius:50% 50% 50% 0;
          transform:rotate(-45deg);
          border:3px solid #fff;
          box-shadow:0 3px 12px rgba(239,68,68,0.5);
          display:flex;align-items:center;justify-content:center;
        "><div style="
          width:12px;height:12px;
          background:#fff;
          border-radius:50%;
          transform:rotate(45deg);
        "></div></div>`,
        iconSize: [38, 48],
        iconAnchor: [19, 48],
        popupAnchor: [0, -50],
      });

      // Add markers
      locations.forEach((loc) => {
        const marker = L.marker([loc.lat, loc.lng], { icon: defaultIcon })
          .addTo(map)
          .bindPopup(
            `<div style="min-width:220px;font-family:system-ui,sans-serif;">
              <div style="font-weight:700;font-size:14px;color:#1e3a5f;margin-bottom:6px;line-height:1.3;">${loc.name}</div>
              <div style="font-size:12px;color:#555;margin-bottom:6px;line-height:1.5;">${loc.address}</div>
              <a href="tel:${loc.phone.replace(/\s/g, "")}" style="display:block;font-size:12px;color:#2563eb;font-weight:600;margin-bottom:8px;text-decoration:none;">📞 ${loc.phone}</a>
              <a href="${loc.googleMapsUrl || `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(loc.address)}&travelmode=driving`}"
                target="_blank" rel="noopener noreferrer"
                style="display:inline-block;background:#2563eb;color:#fff;font-size:11px;font-weight:700;padding:6px 14px;border-radius:6px;text-decoration:none;">
                🗺 Get Directions
              </a>
            </div>`,
            { maxWidth: 280 }
          );

        marker.on("click", () => {
          onMarkerClick(loc.id);
        });

        markersRef.current[loc.id] = { marker, defaultIcon, selectedIcon };
      });

      mapRef.current = { map, L, defaultIcon, selectedIcon };
    });

    return () => {
      if (mapRef.current?.map) {
        mapRef.current.map.remove();
        mapRef.current = null;
      }
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // Pan to selected marker and update icon
  useEffect(() => {
    if (!mapRef.current) return;
    const { map } = mapRef.current;

    Object.entries(markersRef.current).forEach(([id, { marker, defaultIcon, selectedIcon }]) => {
      marker.setIcon(id === selectedId ? selectedIcon : defaultIcon);
    });

    if (selectedId && markersRef.current[selectedId]) {
      const { marker } = markersRef.current[selectedId];
      map.flyTo(marker.getLatLng(), 15, { animate: true, duration: 0.8 });
      marker.openPopup();
    }
  }, [selectedId]);

  // Show user location
  useEffect(() => {
    if (!userPos || !mapRef.current) return;
    const { map, L } = mapRef.current;

    const userIcon = L.divIcon({
      className: "",
      html: `<div style="
        width:20px;height:20px;
        background:#10b981;
        border-radius:50%;
        border:3px solid #fff;
        box-shadow:0 0 0 4px rgba(16,185,129,0.3);
      "></div>`,
      iconSize: [20, 20],
      iconAnchor: [10, 10],
    });

    L.marker(userPos, { icon: userIcon })
      .addTo(map)
      .bindPopup("<b>You are here</b>")
      .openPopup();

    map.flyTo(userPos, 13, { animate: true, duration: 1 });
  }, [userPos]);

  const handleLocate = () => {
    if (!navigator.geolocation) return;
    setLocating(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setUserPos([pos.coords.latitude, pos.coords.longitude]);
        setLocating(false);
      },
      () => setLocating(false)
    );
  };

  return (
    <div className="relative w-full rounded-2xl overflow-hidden shadow-xl border border-gray-200">
      {/* Leaflet CSS */}
      <link
        rel="stylesheet"
        href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
        crossOrigin=""
      />

      {/* Locate button */}
      <button
        onClick={handleLocate}
        disabled={locating}
        className="absolute top-3 right-3 z-[1000] bg-white hover:bg-blue-50 border border-gray-200 shadow-md rounded-xl px-3 py-2 text-xs font-bold text-blue-700 flex items-center gap-2 transition-all disabled:opacity-60"
        title="Find nearest clinic"
      >
        {locating ? (
          <span className="animate-spin inline-block w-3 h-3 border-2 border-blue-600 border-t-transparent rounded-full" />
        ) : (
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        )}
        {locating ? "Locating…" : "Find Nearest"}
      </button>

      {/* Map container */}
      <div
        ref={containerRef}
        className="w-full"
        style={{ height: "clamp(350px, 50vw, 500px)" }}
      />
    </div>
  );
}
