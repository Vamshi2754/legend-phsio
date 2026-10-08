"use client";

import { useEffect, useRef } from 'react';

interface MapPin {
  lat: number;
  lng: number;
  label: string;
  address: string;
  phone: string;
}

interface InteractiveMapProps {
  pins: MapPin[];
  locationName: string;
}

export default function InteractiveMap({ pins, locationName }: InteractiveMapProps) {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);

  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined' || !mapContainerRef.current) return;

    // Dynamically import Leaflet only on client side
    import('leaflet').then((L) => {
      // Clean up existing map
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
      }

      // Create map
      const map = L.map(mapContainerRef.current).setView(
        [pins[0].lat, pins[0].lng],
        pins.length > 1 ? 14 : 15
      );

      mapInstanceRef.current = map;

      // Add OpenStreetMap tiles
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 19,
      }).addTo(map);

      // Custom marker icon
      const customIcon = L.divIcon({
        className: 'custom-marker',
        html: `
          <div style="
            background-color: #3B82F6;
            width: 40px;
            height: 40px;
            border-radius: 50% 50% 50% 0;
            transform: rotate(-45deg);
            border: 3px solid white;
            box-shadow: 0 4px 6px rgba(0,0,0,0.3);
            display: flex;
            align-items: center;
            justify-content: center;
          ">
            <svg style="
              width: 20px;
              height: 20px;
              transform: rotate(45deg);
              fill: white;
            " viewBox="0 0 20 20">
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"/>
            </svg>
          </div>
        `,
        iconSize: [40, 40],
        iconAnchor: [20, 40],
        popupAnchor: [0, -40],
      });

      // Add markers for each pin
      pins.forEach((pin) => {
        const marker = L.marker([pin.lat, pin.lng], { icon: customIcon }).addTo(map);

        // Create popup content
        const popupContent = `
          <div style="font-family: 'Poppins', sans-serif; min-width: 200px;">
            <h3 style="font-weight: 700; font-size: 16px; margin-bottom: 8px; color: #1F2937;">
              ${pin.label}
            </h3>
            <p style="font-size: 13px; color: #6B7280; margin-bottom: 8px; line-height: 1.4;">
              ${pin.address}
            </p>
            <div style="display: flex; align-items: center; gap: 6px; margin-bottom: 12px;">
              <svg style="width: 14px; height: 14px; fill: #3B82F6;" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
              </svg>
              <a href="tel:${pin.phone}" style="font-size: 13px; color: #3B82F6; font-weight: 600; text-decoration: none;">
                ${pin.phone}
              </a>
            </div>
            <a 
              href="https://www.google.com/maps/search/?api=1&query=${pin.lat},${pin.lng}"
              target="_blank"
              rel="noopener noreferrer"
              style="
                display: inline-flex;
                align-items: center;
                gap: 6px;
                background-color: #3B82F6;
                color: white;
                padding: 8px 16px;
                border-radius: 8px;
                font-size: 13px;
                font-weight: 600;
                text-decoration: none;
                transition: background-color 0.2s;
              "
              onmouseover="this.style.backgroundColor='#2563EB'"
              onmouseout="this.style.backgroundColor='#3B82F6'"
            >
              <svg style="width: 14px; height: 14px; fill: white;" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/>
              </svg>
              Get Directions
            </a>
          </div>
        `;

        marker.bindPopup(popupContent, {
          maxWidth: 300,
          className: 'custom-popup',
        });

        // Open first marker popup by default
        if (pin === pins[0]) {
          marker.openPopup();
        }
      });

      // Fit bounds if multiple pins
      if (pins.length > 1) {
        const bounds = L.latLngBounds(pins.map(pin => [pin.lat, pin.lng]));
        map.fitBounds(bounds, { padding: [50, 50] });
      }
    });

    // Cleanup
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, [pins]);

  return (
    <>
      <style jsx global>{`
        .leaflet-container {
          height: 100%;
          width: 100%;
          border-radius: 16px;
          z-index: 1;
        }
        .custom-popup .leaflet-popup-content-wrapper {
          border-radius: 12px;
          box-shadow: 0 10px 25px rgba(0,0,0,0.15);
        }
        .custom-popup .leaflet-popup-content {
          margin: 16px;
        }
        .custom-popup .leaflet-popup-tip {
          background: white;
        }
        .custom-marker {
          background: transparent;
          border: none;
        }
      `}</style>
      <link
        rel="stylesheet"
        href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
        integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
        crossOrigin=""
      />
      <div 
        ref={mapContainerRef} 
        className="w-full h-[350px] md:h-[450px] rounded-xl md:rounded-2xl shadow-2xl"
        style={{ minHeight: '350px' }}
      />
    </>
  );
}
