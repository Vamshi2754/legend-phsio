"use client";

import { useState, useCallback } from "react";
import dynamic from "next/dynamic";
import Footer from "@/components/Footer";
import clinicLocations from "@/data/clinicLocations";

// Dynamically import map to avoid SSR issues with Leaflet
const ClinicsMap = dynamic(() => import("@/components/ClinicsMap"), {
  ssr: false,
  loading: () => (
    <div className="w-full rounded-2xl bg-gray-100 animate-pulse flex items-center justify-center border border-gray-200"
      style={{ height: "clamp(350px, 50vw, 500px)" }}>
      <div className="text-center text-gray-400">
        <svg className="w-10 h-10 mx-auto mb-2 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83" />
        </svg>
        <p className="text-sm font-medium">Loading map…</p>
      </div>
    </div>
  ),
});

export default function LocationsPage() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [search, setSearch] = useState("");

  const handleCardClick = useCallback((id: string) => {
    setSelectedId(id);
    // Scroll map into view on mobile
    const mapEl = document.getElementById("clinics-map");
    if (mapEl && window.innerWidth < 1024) {
      mapEl.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  const handleMarkerClick = useCallback((id: string) => {
    setSelectedId(id);
    // Scroll to card
    const cardEl = document.getElementById(`clinic-card-${id}`);
    if (cardEl) {
      cardEl.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  }, []);

  const filtered = clinicLocations.filter(
    (loc) =>
      search === "" ||
      loc.name.toLowerCase().includes(search.toLowerCase()) ||
      loc.address.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-8 sm:py-12 md:py-16 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-blue-400/10 rounded-full blur-2xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <a href="/" className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-4 sm:mb-6 text-xs sm:text-sm font-medium transition-colors">
            <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </a>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-3">Our Clinic Locations</h1>
          <p className="text-white/80 text-sm sm:text-base lg:text-lg max-w-2xl">
            20 branches across Hyderabad & Secunderabad. Find the one nearest to you.
          </p>
          <div className="flex flex-wrap gap-2 sm:gap-3 mt-3 sm:mt-4 md:mt-5">
            <span className="bg-white/20 border border-white/30 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold">
              🏥 20 Branches
            </span>
            <span className="bg-white/20 border border-white/30 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold">
              📍 Hyderabad & Secunderabad
            </span>
            <span className="bg-white/20 border border-white/30 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold">
              🕐 Open 7 Days
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 md:py-14">
        {/* Search */}
        <div className="mb-8 max-w-md">
          <div className="relative">
            <svg className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Search by area or address…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 bg-white shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            {search && (
              <button onClick={() => setSearch("")} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>
        </div>

        {/* Map + Cards layout */}
        <div className="grid lg:grid-cols-5 gap-8">

          {/* Map — sticky on desktop */}
          <div className="lg:col-span-3 lg:sticky lg:top-6 lg:self-start" id="clinics-map">
            <ClinicsMap
              locations={filtered}
              selectedId={selectedId}
              onMarkerClick={handleMarkerClick}
            />
            <p className="text-xs text-gray-400 mt-2 text-center">
              Map data © <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer" className="underline">OpenStreetMap</a> contributors
            </p>
          </div>

          {/* Location cards list */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-bold text-gray-900 text-lg">
                {filtered.length} {filtered.length === 1 ? "Location" : "Locations"}
              </h2>
              {selectedId && (
                <button
                  onClick={() => setSelectedId(null)}
                  className="text-xs text-blue-600 hover:underline font-semibold"
                >
                  Clear selection
                </button>
              )}
            </div>

            <div className="space-y-3 max-h-[calc(100vh-200px)] overflow-y-auto pr-1 scrollbar-thin">
              {filtered.length === 0 && (
                <div className="text-center py-12 text-gray-400">
                  <svg className="w-10 h-10 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                  <p className="font-medium">No locations found</p>
                  <p className="text-sm mt-1">Try a different search term</p>
                </div>
              )}

              {filtered.map((loc) => {
                const isSelected = selectedId === loc.id;
                return (
                  <div
                    key={loc.id}
                    id={`clinic-card-${loc.id}`}
                    onClick={() => handleCardClick(loc.id)}
                    className={`rounded-xl border p-4 cursor-pointer transition-all duration-200 ${
                      isSelected
                        ? "border-blue-500 bg-blue-50 shadow-md ring-2 ring-blue-200"
                        : "border-gray-200 bg-white hover:border-blue-300 hover:shadow-sm hover:bg-blue-50/30"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      {/* Pin number */}
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold text-white shadow-sm ${isSelected ? "bg-red-500" : "bg-blue-600"}`}>
                        {loc.id}
                      </div>

                      <div className="flex-1 min-w-0">
                        <h3 className={`font-bold text-sm leading-snug mb-1 ${isSelected ? "text-blue-800" : "text-gray-900"}`}>
                          {loc.name}
                        </h3>
                        <p className="text-gray-500 text-xs leading-relaxed mb-2">{loc.address}</p>

                        <div className="flex flex-wrap gap-2">
                          <a
                            href={`tel:${loc.phone.replace(/\s/g, "")}`}
                            onClick={(e) => e.stopPropagation()}
                            className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 hover:text-blue-800 transition-colors"
                          >
                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                            </svg>
                            {loc.phone}
                          </a>
                          <span className="text-gray-300">·</span>
                          <a
                            href={`/locations/${loc.slug}`}
                            onClick={(e) => e.stopPropagation()}
                            className="inline-flex items-center gap-1 text-xs font-semibold text-gray-500 hover:text-blue-600 transition-colors"
                          >
                            View details →
                          </a>
                          <span className="text-gray-300">·</span>
                          <a
                            href={loc.googleMapsUrl || `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(loc.address)}&travelmode=driving`}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="inline-flex items-center gap-1 text-xs font-semibold text-gray-500 hover:text-blue-600 transition-colors"
                          >
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                            </svg>
                            Directions
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Book CTA */}
        <div className="mt-10 sm:mt-14 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-6 sm:p-8 md:p-10 text-white text-center shadow-xl">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3">Ready to Book Your Session?</h2>
          <p className="text-blue-100 text-sm sm:text-base mb-4 sm:mb-6 max-w-xl mx-auto">
            Choose any branch or book a home visit. Same-day appointments available across Hyderabad.
          </p>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            <a
              href="https://legendphysiotherapyorthoandneuropainmanagementclinic.setmore.com?utm_source=qr-code&utm_medium=settings-share-bp"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-700 font-bold px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl hover:bg-blue-50 transition-all shadow-lg text-xs sm:text-sm"
            >
              📅 Book Online Now
            </a>
            <a
              href="tel:+918143015455"
              className="bg-white/10 border border-white/30 text-white font-bold px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl hover:bg-white/20 transition-all text-xs sm:text-sm"
            >
              📞 Call +91 81430 15455
            </a>
            <a
              href="https://wa.me/918143015455"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white font-bold px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl hover:bg-green-600 transition-all text-xs sm:text-sm"
            >
              💬 WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
