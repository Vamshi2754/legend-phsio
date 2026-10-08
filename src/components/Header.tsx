"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { locationData } from "@/data/locations";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/#blog" },
  { label: "Contact", href: "/contact" },
];

// Dynamically generate locations from locationData
const locations = Object.entries(locationData)
  .map(([slug, data]) => ({
    name: data.name,
    slug: slug,
    type: data.type,
  }))
  .sort((a, b) => a.name.localeCompare(b.name));

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [locationsOpen, setLocationsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Custom Scrollbar Styles */}
      <style>{`
        .locations-dropdown::-webkit-scrollbar {
          width: 6px;
        }
        .locations-dropdown::-webkit-scrollbar-track {
          background: transparent;
        }
        .locations-dropdown::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 3px;
        }
        .locations-dropdown::-webkit-scrollbar-thumb:hover {
          background: #94a3b8;
        }
      `}</style>
      {/* Top Bar */}
      <div className="bg-blue-600 text-white text-xs sm:text-sm py-2 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center">
          <div className="flex items-center gap-3 sm:gap-6">
            <a href="tel:+919966193413" className="flex items-center gap-1 sm:gap-2 hover:underline">
              <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <span className="hidden sm:inline">+91 99661 93413</span>
              <span className="sm:hidden">+91 9966193413</span>
            </a>
            <a href="mailto:info@legendphysiotherapy.com" className="flex items-center gap-1 sm:gap-2 hover:underline">
              <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <span className="hidden lg:inline">info@legendphysiotherapy.com</span>
              <span className="lg:hidden">Email Us</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-xs sm:text-sm">
              <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              <span className="hidden lg:inline">Mon–Sun: 6:00am – 11:00pm</span>
              <span className="lg:hidden">6am–11pm</span>
            </span>

            {/* Social Icons in Header */}
            <div className="flex items-center gap-2.5 border-l border-blue-500/80 pl-3">
              <a
                href="https://wa.me/919966193413"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                title="WhatsApp Us"
                className="hover:text-green-300 transition-colors"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 448 512">
                  <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.7 17.7 69.4 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.1 0-65.6-8.9-93.7-25.7l-6.7-4-69.8 18.3 18.6-68-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-5.5-2.8-23.2-8.5-44.2-27.1-16.4-14.6-27.4-32.7-30.6-38.2-3.2-5.6-.3-8.6 2.5-11.3 2.5-2.5 5.6-6.5 8.3-9.7 2.8-3.3 3.7-5.6 5.6-9.3 1.9-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 13.2 5.8 23.5 9.2 31.5 11.8 13.3 4.2 25.4 3.6 35 2.2 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/dr.sirish_legend_physio?stkn=MWRmeHFlZnY3ZXBxZQ=="
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                title="Instagram"
                className="hover:text-pink-300 transition-colors"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://www.facebook.com/share/1DTdMkDcju/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                title="Facebook"
                className="hover:text-blue-200 transition-colors"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/sirish-physiotherapist?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                title="LinkedIn"
                className="hover:text-blue-300 transition-colors"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.74a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-md py-2 sm:py-3" : "bg-white py-3 sm:py-4"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 sm:gap-3" aria-label="Legend Physiotherapy - Home">
            <img 
              src="/logo.png" 
              alt="Legend Physiotherapy Logo - Best Physiotherapist in Hyderabad" 
              className="h-10 sm:h-12 w-auto object-contain"
              width="48"
              height="48"
            />
            <div>
              <span className="text-xl sm:text-2xl font-bold text-blue-600" style={{ fontFamily: "var(--font-poppins)" }}>Legend</span>
              <span className="text-xs sm:text-sm text-gray-600 block -mt-1" style={{ fontFamily: "var(--font-poppins)" }}>Physiotherapy</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-gray-700 font-medium hover:text-blue-500 transition-colors relative group text-sm"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-200" />
              </a>
            ))}

            {/* Locations Dropdown */}
            <div className="relative group">
              <button
                className="text-gray-700 font-medium hover:text-blue-500 transition-colors text-sm flex items-center gap-1 cursor-pointer"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                Locations
                <svg className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-64 bg-gradient-to-br from-white to-blue-50 rounded-2xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 border-2 border-blue-100 py-3 max-h-80 overflow-y-auto locations-dropdown pointer-events-none group-hover:pointer-events-auto">
                <div className="px-3 py-2">
                  <p className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-3 px-3">Service Areas</p>
                  <div className="grid grid-cols-1 gap-1">
                    {locations.map((location) => (
                      <Link
                        key={location.slug}
                        href={`/locations/${location.slug}`}
                        className="px-4 py-3 text-gray-700 hover:bg-blue-500 hover:text-white text-sm rounded-xl transition-all duration-200 block pointer-events-auto font-medium flex items-center justify-between group/item"
                      >
                        <span>Physiotherapy near {location.name}</span>
                        {location.type.includes("Clinic") && (
                          <span className="text-xs bg-green-500 text-white px-2 py-0.5 rounded-full font-semibold group-hover/item:bg-white group-hover/item:text-green-600">Clinic</span>
                        )}
                        {!location.type.includes("Clinic") && (
                          <svg className="w-4 h-4 opacity-0 group-hover/item:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        )}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://legendphysiotherapyorthoandneuropainmanagementclinic.setmore.com?utm_source=qr-code&utm_medium=settings-share-bp"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-xs sm:text-sm py-2 sm:py-2.5 px-4 sm:px-5"
            >
              Book Appointment
            </a>
          </div>

          {/* Mobile burger */}
          <button
            className="lg:hidden p-2 text-gray-600"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileOpen}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 px-4 sm:px-6 py-4 shadow-lg">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block py-2.5 text-sm sm:text-base text-gray-700 font-medium hover:text-blue-500 border-b border-gray-50"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}

            {/* Mobile Locations */}
            <div className="py-2.5 border-b border-gray-50">
              <button
                onClick={() => setLocationsOpen(!locationsOpen)}
                className="w-full text-left text-sm sm:text-base text-gray-700 font-medium hover:text-blue-500 flex items-center justify-between"
                aria-label={locationsOpen ? "Close locations menu" : "Open locations menu"}
                aria-expanded={locationsOpen}
              >
                Locations
                <svg className={`w-4 h-4 transition-transform duration-300 ${locationsOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </button>
              {locationsOpen && (
                <div className="mt-3 space-y-1 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-3 border-2 border-blue-200 max-h-80 overflow-y-auto">
                  <p className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-2 px-2">Service Areas</p>
                  {locations.map((location) => (
                    <Link
                      key={location.slug}
                      href={`/locations/${location.slug}`}
                      className="block py-2.5 sm:py-3 px-3 sm:px-4 text-xs sm:text-sm text-gray-700 hover:bg-blue-500 hover:text-white rounded-xl transition-all font-medium flex items-center justify-between"
                      onClick={() => {
                        setMobileOpen(false);
                        setLocationsOpen(false);
                      }}
                    >
                      <span className="break-words">Physiotherapy near {location.name}</span>
                      {location.type.includes("Clinic") && <span className="text-xs bg-green-500 text-white px-2 py-0.5 rounded-full font-semibold ml-2 flex-shrink-0">Clinic</span>}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <a
              href="https://legendphysiotherapyorthoandneuropainmanagementclinic.setmore.com?utm_source=qr-code&utm_medium=settings-share-bp"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-4 w-full justify-center flex text-sm sm:text-base py-3"
              onClick={() => setMobileOpen(false)}
            >
              Book Appointment
            </a>
          </div>
        )}
      </header>
    </>
  );
}
