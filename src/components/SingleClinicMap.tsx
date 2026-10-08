"use client";

import { useEffect, useRef } from "react";

interface Props {
  name: string;
  address: string;
  phone: string;
  lat: number;
  lng: number;
  googleMapsUrl?: string;
  // For multi-branch: pass array of pins
  pins?: Array<{ label: string; address: string; phone: string; lat: number; lng: number; googleMapsUrl?: string }>;
}

export default function SingleClinicMap({ name, address, phone, lat, lng, googleMapsUrl, pins }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<any>(null);

  useEffect(() => {
    if (mapRef.current || !containerRef.current) return;

    import("leaflet").then((L) => {
      // Fix webpack icon issue
      delete (L.Icon.Default.prototype as any)._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
        iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
        shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
      });

      const isMulti = pins && pins.length > 1;

      // Center: if multi-branch, average the coords
      const centerLat = isMulti ? pins!.reduce((s, p) => s + p.lat, 0) / pins!.length : lat;
      const centerLng = isMulti ? pins!.reduce((s, p) => s + p.lng, 0) / pins!.length : lng;
      const zoom = isMulti ? 14 : 16;

      const map = L.map(containerRef.current!, {
        center: [centerLat, centerLng],
        zoom,
        zoomControl: true,
        scrollWheelZoom: false, // prevent accidental scroll on detail page
      });

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        maxZoom: 19,
      }).addTo(map);

      // Custom red pin icon
      const makeIcon = (label: string | number, color = "#ef4444") =>
        L.divIcon({
          className: "",
          html: `<div style="
            position:relative;
            width:36px;height:44px;
          ">
            <div style="
              width:36px;height:36px;
              background:${color};
              border-radius:50% 50% 50% 0;
              transform:rotate(-45deg);
              border:3px solid #fff;
              box-shadow:0 3px 10px rgba(0,0,0,0.3);
              display:flex;align-items:center;justify-content:center;
            ">
              <span style="
                transform:rotate(45deg);
                color:#fff;
                font-size:11px;
                font-weight:800;
                font-family:system-ui;
              ">${label}</span>
            </div>
          </div>`,
          iconSize: [36, 44],
          iconAnchor: [18, 44],
          popupAnchor: [0, -46],
        });

      const popupHtml = (n: string, a: string, p: string, plat: number, plng: number, gmUrl?: string) => `
        <div style="min-width:220px;font-family:system-ui,sans-serif;padding:4px 0;">
          <div style="font-weight:700;font-size:14px;color:#1e3a5f;margin-bottom:5px;line-height:1.3;">${n}</div>
          <div style="font-size:12px;color:#555;margin-bottom:6px;line-height:1.5;">${a}</div>
          <a href="tel:${p.replace(/\s/g, "")}" style="display:block;font-size:12px;color:#2563eb;font-weight:600;margin-bottom:8px;text-decoration:none;">📞 ${p}</a>
          <a href="${gmUrl || `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(a)}&travelmode=driving`}"
            target="_blank" rel="noopener noreferrer"
            style="display:inline-block;background:#2563eb;color:#fff;font-size:11px;font-weight:700;padding:6px 14px;border-radius:6px;text-decoration:none;">
            🗺 Get Directions
          </a>
        </div>`;

      if (isMulti) {
        // Multiple pins — one per branch
        pins!.forEach((pin, i) => {
          L.marker([pin.lat, pin.lng], { icon: makeIcon(i + 1) })
            .addTo(map)
            .bindPopup(popupHtml(pin.label, pin.address, pin.phone, pin.lat, pin.lng, pin.googleMapsUrl), { maxWidth: 280 })
            .openPopup();
        });
        // Fit bounds to show all pins
        const bounds = L.latLngBounds(pins!.map((p) => [p.lat, p.lng] as [number, number]));
        map.fitBounds(bounds, { padding: [40, 40] });
      } else {
        // Single pin
        L.marker([lat, lng], { icon: makeIcon("✦") })
          .addTo(map)
          .bindPopup(popupHtml(name, address, phone, lat, lng, googleMapsUrl), { maxWidth: 280 })
          .openPopup();
      }

      mapRef.current = map;
    });

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <link
        rel="stylesheet"
        href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
        crossOrigin=""
      />
      <div
        ref={containerRef}
        className="w-full rounded-2xl overflow-hidden shadow-xl border border-gray-100"
        style={{ height: "clamp(320px, 45vw, 480px)" }}
      />
    </>
  );
}
