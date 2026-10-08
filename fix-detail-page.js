const fs = require("fs");
let page = fs.readFileSync("src/app/locations/[location]/page.tsx", "utf8");

// 1. Add dynamic import for SingleClinicMap after existing imports
const importBlock = `import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { locationData } from "@/data/locations";
import Header from "@/components/Header";
import Footer from "@/components/Footer";`;

const newImportBlock = `import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import dynamic from "next/dynamic";
import { locationData } from "@/data/locations";
import clinicLocations from "@/data/clinicLocations";
import Footer from "@/components/Footer";

const SingleClinicMap = dynamic(() => import("@/components/SingleClinicMap"), {
  ssr: false,
  loading: () => (
    <div className="w-full rounded-2xl bg-gray-100 animate-pulse border border-gray-200"
      style={{ height: "clamp(320px, 45vw, 480px)" }}>
      <div className="flex items-center justify-center h-full text-gray-400 text-sm font-medium">
        Loading map…
      </div>
    </div>
  ),
});`;

page = page.replace(importBlock, newImportBlock);

// 2. Add clinicLoc lookup after the location state setup
const oldUseEffect = `    useEffect(() => {
        if (params?.location) {
            const slug = Array.isArray(params.location) ? params.location[0] : params.location;
            const loc = locationData[slug as string];
            if (loc) {
                setLocation(loc);
            }
            setIsLoading(false);
        }
    }, [params]);`;

const newUseEffect = `    // Find matching clinic location data (for Leaflet map coords)
    const slug = Array.isArray(params?.location) ? params?.location?.[0] : params?.location;
    const clinicLocs = clinicLocations.filter((c) => c.slug === slug);

    useEffect(() => {
        if (params?.location) {
            const s = Array.isArray(params.location) ? params.location[0] : params.location;
            const loc = locationData[s as string];
            if (loc) {
                setLocation(loc);
            }
            setIsLoading(false);
        }
    }, [params]);`;

page = page.replace(oldUseEffect, newUseEffect);

// 3. Replace the entire Map Section with Leaflet map
const oldMapSection = `                        {/* Map Section */}
                        <section className="mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">
                              {location.mapPins && location.mapPins.length > 1
                                ? \`Our \${location.mapPins.length} Branches in \${location.name}\`
                                : \`Find Us – \${location.name}\`}
                            </h2>

                            {/* Single branch map */}
                            {(!location.mapPins || location.mapPins.length <= 1) && (
                              <div className="rounded-2xl shadow-xl overflow-hidden border border-gray-100 relative" style={{height:"450px"}}>
                                <iframe
                                  src={location.mapEmbed}
                                  className="w-full h-full border-0"
                                  allowFullScreen
                                  loading="lazy"
                                  referrerPolicy="no-referrer-when-downgrade"
                                  title={\`Legend Physiotherapy \${location.name}\`}
                                />
                                <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm px-4 py-3 rounded-xl shadow-xl border border-red-100 max-w-xs pointer-events-none">
                                  <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                      </svg>
                                    </div>
                                    <div>
                                      <p className="font-bold text-gray-900 text-xs">Legend Physiotherapy – {location.name}</p>
                                      <p className="text-gray-500 text-[10px] leading-tight">{location.address}</p>
                                      <p className="text-blue-600 text-[10px] font-semibold">{location.phone}</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            )}

                            {/* Multi-branch: one map per branch */}
                            {location.mapPins && location.mapPins.length > 1 && (
                              <div className="space-y-6">
                                {location.mapPins.map((pin: any, i: number) => (
                                  <div key={i} className="rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                                    <div className="bg-gray-50 border-b border-gray-100 px-5 py-3 flex items-center gap-3">
                                      <div className="w-7 h-7 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0">{i + 1}</div>
                                      <div className="flex-1 min-w-0">
                                        <p className="font-bold text-gray-900 text-sm truncate">{pin.label}</p>
                                        <p className="text-gray-500 text-xs truncate">{pin.address}</p>
                                      </div>
                                      <a href={\`tel:\${pin.phone.replace(/\\s/g,"")}\`} className="text-blue-600 text-xs font-bold hover:underline flex-shrink-0">{pin.phone}</a>
                                    </div>
                                    <div className="relative" style={{height:"380px"}}>
                                      <iframe
                                        src={pin.mapEmbed || location.mapEmbed}
                                        className="w-full h-full border-0"
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        title={pin.label}
                                      />
                                      <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-2 rounded-xl shadow-xl border border-red-100 pointer-events-none">
                                        <div className="flex items-center gap-2">
                                          <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 text-white text-[10px] font-bold">{i+1}</div>
                                          <div>
                                            <p className="font-bold text-gray-900 text-[10px]">{pin.label}</p>
                                            <p className="text-blue-600 text-[10px] font-semibold">{pin.phone}</p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            )}
                        </section>`;

const newMapSection = `                        {/* Map Section – Leaflet/OpenStreetMap, no API key */}
                        <section className="mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-2">
                              {clinicLocs.length > 1
                                ? \`Our \${clinicLocs.length} Branches in \${location.name}\`
                                : \`Find Us – \${location.name}\`}
                            </h2>
                            {clinicLocs.length > 1 && (
                              <p className="text-gray-500 text-sm mb-5">Both branches are pinned on the map below. Click a pin to see details.</p>
                            )}

                            {clinicLocs.length > 0 ? (
                              <SingleClinicMap
                                name={clinicLocs[0].name}
                                address={clinicLocs[0].address}
                                phone={clinicLocs[0].phone}
                                lat={clinicLocs[0].lat}
                                lng={clinicLocs[0].lng}
                                pins={clinicLocs.length > 1 ? clinicLocs.map((c) => ({
                                  label: c.name,
                                  address: c.address,
                                  phone: c.phone,
                                  lat: c.lat,
                                  lng: c.lng,
                                })) : undefined}
                              />
                            ) : (
                              // Fallback: no coords yet — show address card
                              <div className="rounded-2xl border border-gray-200 bg-gray-50 p-8 text-center">
                                <svg className="w-10 h-10 text-gray-300 mx-auto mb-3" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                </svg>
                                <p className="font-semibold text-gray-700 mb-1">{location.address}</p>
                                <a
                                  href={\`https://www.google.com/maps/search/\${encodeURIComponent(location.address)}\`}
                                  target="_blank" rel="noopener noreferrer"
                                  className="text-blue-600 text-sm font-semibold hover:underline"
                                >
                                  Open in Google Maps →
                                </a>
                              </div>
                            )}

                            <p className="text-xs text-gray-400 mt-2">
                              Map © <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer" className="underline">OpenStreetMap</a> contributors
                            </p>
                        </section>`;

if (page.includes("Map Section */}")) {
  page = page.replace(oldMapSection, newMapSection);
  console.log("Map section replaced:", page.includes("SingleClinicMap"));
} else {
  console.log("ERROR: Map section marker not found");
}

fs.writeFileSync("src/app/locations/[location]/page.tsx", page);
console.log("Done. File length:", page.length);
