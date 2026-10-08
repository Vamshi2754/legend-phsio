"use client";

import { Phone } from "lucide-react";

export default function FloatingActions() {
  return (
    <aside aria-label="Quick action links" className="fixed right-0 top-1/2 -translate-y-1/2 z-50 flex flex-col shadow-2xl rounded-l-2xl overflow-hidden border-l border-y border-white/30 backdrop-blur-sm">
      {/* 1. Call Button */}
      <a
        href="tel:+919966193413"
        aria-label="Call Us"
        title="Call Now"
        className="w-12 sm:w-14 h-12 sm:h-14 bg-[#2563eb] hover:bg-[#1d4ed8] text-white flex items-center justify-center transition-all duration-300 hover:-translate-x-1 group relative rounded-tl-2xl border-b border-white/10"
      >
        <Phone className="w-5 h-5 sm:w-6 sm:h-6 fill-current" />
        <span className="absolute right-full mr-3 bg-gray-900/95 text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Call Now (+91 99661 93413)
        </span>
      </a>

      {/* 2. WhatsApp Button */}
      <a
        href="https://wa.me/919966193413"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        title="WhatsApp"
        className="w-12 sm:w-14 h-12 sm:h-14 bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center justify-center transition-all duration-300 hover:-translate-x-1 group relative border-b border-white/10"
      >
        <svg className="w-5 h-5 sm:w-6 sm:h-6 fill-current" viewBox="0 0 448 512">
          <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.7 17.7 69.4 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.1 0-65.6-8.9-93.7-25.7l-6.7-4-69.8 18.3 18.6-68-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-5.5-2.8-23.2-8.5-44.2-27.1-16.4-14.6-27.4-32.7-30.6-38.2-3.2-5.6-.3-8.6 2.5-11.3 2.5-2.5 5.6-6.5 8.3-9.7 2.8-3.3 3.7-5.6 5.6-9.3 1.9-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 13.2 5.8 23.5 9.2 31.5 11.8 13.3 4.2 25.4 3.6 35 2.2 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
        </svg>
        <span className="absolute right-full mr-3 bg-gray-900/95 text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          WhatsApp Us
        </span>
      </a>

      {/* 3. Facebook Button */}
      <a
        href="https://www.facebook.com/share/1DTdMkDcju/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
        title="Facebook"
        className="w-12 sm:w-14 h-12 sm:h-14 bg-[#1877F2] hover:bg-[#165ecb] text-white flex items-center justify-center transition-all duration-300 hover:-translate-x-1 group relative border-b border-white/10"
      >
        <svg className="w-5 h-5 sm:w-6 sm:h-6 fill-current" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
        <span className="absolute right-full mr-3 bg-gray-900/95 text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Facebook Page
        </span>
      </a>

      {/* 4. Instagram Button */}
      <a
        href="https://www.instagram.com/dr.sirish_legend_physio?stkn=MWRmeHFlZnY3ZXBxZQ=="
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        title="Instagram"
        className="w-12 sm:w-14 h-12 sm:h-14 bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white flex items-center justify-center transition-all duration-300 hover:-translate-x-1 group relative border-b border-white/10"
      >
        <svg className="w-5 h-5 sm:w-6 sm:h-6 fill-current" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
        <span className="absolute right-full mr-3 bg-gray-900/95 text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Instagram Profile
        </span>
      </a>

      {/* 5. LinkedIn Button */}
      <a
        href="https://www.linkedin.com/in/sirish-physiotherapist?utm_source=share_via&utm_content=profile&utm_medium=member_android"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        title="LinkedIn"
        className="w-12 sm:w-14 h-12 sm:h-14 bg-[#0A66C2] hover:bg-[#084e96] text-white flex items-center justify-center transition-all duration-300 hover:-translate-x-1 group relative border-b border-white/10"
      >
        <svg className="w-5 h-5 sm:w-6 sm:h-6 fill-current" viewBox="0 0 24 24">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.74a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24z"/>
        </svg>
        <span className="absolute right-full mr-3 bg-gray-900/95 text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          LinkedIn Profile
        </span>
      </a>

      {/* 6. Justdial Button */}
      <a
        href="https://www.justdial.com/Hyderabad/Legend-Physiotherapy-Ortho-And-Neuro-Pain-Management-Clinic-Behind-Ozone-Hospital-Kothapet/040PXX40-XX40-230919131238-A3N4_BZDET"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Justdial"
        title="Justdial"
        className="w-12 sm:w-14 h-12 sm:h-14 bg-white hover:bg-gray-50 flex items-center justify-center transition-all duration-300 hover:-translate-x-1 group relative rounded-bl-2xl shadow-sm"
      >
        <span className="font-black text-base sm:text-lg tracking-tighter select-none" style={{ fontFamily: "Inter, sans-serif" }}>
          <span className="text-[#0076d7]">J</span>
          <span className="text-[#ff6e00]">d</span>
        </span>
        <span className="absolute right-full mr-3 bg-gray-900/95 text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Justdial Profile
        </span>
      </a>
    </aside>
  );
}
