"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6" style={{ fontFamily: "var(--font-poppins)" }}>
            Contact Us
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-3xl">
            Get in touch with our team. We're here to answer your questions and help you start your recovery journey.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-12 md:py-16">
        {/* Contact Information - Full Width */}
        <div className="space-y-6 sm:space-y-8 mb-12 sm:mb-16">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6" style={{ fontFamily: "var(--font-poppins)" }}>
              Get In Touch
            </h2>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-6 sm:mb-8">
              Have questions about our services? Need to schedule an appointment? We're here to help. Reach out through any of the channels below.
            </p>
          </div>

          {/* Contact Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <div className="bg-blue-50 rounded-xl p-4 sm:p-6 border border-blue-100">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base">Phone</h3>
                  <a href="tel:+918143015455" className="text-blue-600 hover:underline font-semibold text-sm sm:text-base break-all">
                    +91 81430 15455
                  </a>
                  <p className="text-gray-600 text-xs sm:text-sm mt-1">Mon-Sun: 6:00 AM - 11:00 PM</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-xl p-4 sm:p-6 border border-blue-100">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base">Email</h3>
                  <a href="mailto:Info@legendphysiotherapy.com" className="text-blue-600 hover:underline font-semibold text-xs sm:text-sm md:text-base break-all">
                    Info@legendphysiotherapy.com
                  </a>
                  <p className="text-gray-600 text-xs sm:text-sm mt-1">We'll respond within 24 hours</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-xl p-4 sm:p-6 border border-blue-100">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base">Clinic Address</h3>
                  <p className="text-gray-700 font-semibold text-xs sm:text-sm md:text-base">
                    Legend Physiotherapy Clinic
                  </p>
                  <p className="text-gray-600 text-xs sm:text-sm mt-1">
                    Shop No.2 Ground Floor, Road No: 4, HNO: 11-13-714,<br />
                    Dwarka Nagar, Green Hills Colony, Kothapet,<br />
                    L. B. Nagar, Hyderabad, Telangana 500102
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-green-50 rounded-xl p-4 sm:p-6 border border-green-200">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white fill-current" viewBox="0 0 448 512">
                    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.7 17.7 69.4 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.1 0-65.6-8.9-93.7-25.7l-6.7-4-69.8 18.3 18.6-68-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-5.5-2.8-23.2-8.5-44.2-27.1-16.4-14.6-27.4-32.7-30.6-38.2-3.2-5.6-.3-8.6 2.5-11.3 2.5-2.5 5.6-6.5 8.3-9.7 2.8-3.3 3.7-5.6 5.6-9.3 1.9-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 13.2 5.8 23.5 9.2 31.5 11.8 13.3 4.2 25.4 3.6 35 2.2 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base">WhatsApp</h3>
                  <a href="https://wa.me/919966193413" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline font-semibold text-xs sm:text-sm md:text-base break-words">
                    Chat with us on WhatsApp
                  </a>
                  <p className="text-gray-600 text-xs sm:text-sm mt-1">Quick responses & easy booking</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Booking CTA */}
          <div className="mt-6 sm:mt-8 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-6 sm:p-8 text-white text-center">
            <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3" style={{ fontFamily: "var(--font-poppins)" }}>
              Need Immediate Assistance?
            </h3>
            <p className="text-white/90 text-sm sm:text-base mb-4 sm:mb-6">
              Book your appointment online or call us directly for faster service
            </p>
            <div className="flex flex-wrap gap-3 sm:gap-4 justify-center">
              <a
                href="https://legendphysiotherapyorthoandneuropainmanagementclinic.setmore.com?utm_source=qr-code&utm_medium=settings-share-bp"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-blue-600 px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-bold hover:bg-blue-50 transition-colors text-xs sm:text-sm md:text-base"
              >
                Book Online
              </a>
              <a
                href="tel:+918143015455"
                className="bg-blue-800 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-bold hover:bg-blue-900 transition-colors text-xs sm:text-sm md:text-base"
              >
                Call Now
              </a>
            </div>
          </div>

          {/* Social Media */}
          <div className="mt-6 sm:mt-8">
            <h3 className="font-bold text-gray-900 mb-3 sm:mb-4 text-sm sm:text-base">Follow & Connect With Us</h3>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              <a
                href="https://wa.me/919966193413"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                title="WhatsApp"
                className="w-9 h-9 sm:w-10 sm:h-10 bg-green-100 hover:bg-green-500 text-green-600 hover:text-white rounded-lg flex items-center justify-center transition-colors"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5 fill-current" viewBox="0 0 448 512">
                  <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.7 17.7 69.4 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.1 0-65.6-8.9-93.7-25.7l-6.7-4-69.8 18.3 18.6-68-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-5.5-2.8-23.2-8.5-44.2-27.1-16.4-14.6-27.4-32.7-30.6-38.2-3.2-5.6-.3-8.6 2.5-11.3 2.5-2.5 5.6-6.5 8.3-9.7 2.8-3.3 3.7-5.6 5.6-9.3 1.9-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 13.2 5.8 23.5 9.2 31.5 11.8 13.3 4.2 25.4 3.6 35 2.2 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
                </svg>
              </a>
              <a
                href="tel:+918143015455"
                aria-label="Phone"
                title="Call"
                className="w-9 h-9 sm:w-10 sm:h-10 bg-blue-100 hover:bg-blue-500 text-blue-600 hover:text-white rounded-lg flex items-center justify-center transition-colors"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5 fill-current" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/dr.sirish_legend_physio?stkn=MWRmeHFlZnY3ZXBxZQ=="
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                title="Instagram"
                className="w-9 h-9 sm:w-10 sm:h-10 bg-pink-100 hover:bg-pink-500 text-pink-600 hover:text-white rounded-lg flex items-center justify-center transition-colors"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://www.facebook.com/share/1DTdMkDcju/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                title="Facebook"
                className="w-9 h-9 sm:w-10 sm:h-10 bg-blue-100 hover:bg-blue-600 text-blue-600 hover:text-white rounded-lg flex items-center justify-center transition-colors"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/sirish-physiotherapist?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                title="LinkedIn"
                className="w-9 h-9 sm:w-10 sm:h-10 bg-blue-100 hover:bg-blue-700 text-blue-700 hover:text-white rounded-lg flex items-center justify-center transition-colors"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.74a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24z"/>
                </svg>
              </a>
              <a
                href="mailto:Info@legendphysiotherapy.com"
                aria-label="Email"
                title="Email Us"
                className="w-9 h-9 sm:w-10 sm:h-10 bg-blue-100 hover:bg-blue-500 text-blue-600 hover:text-white rounded-lg flex items-center justify-center transition-colors"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5 fill-current" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-12 sm:mt-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 text-center" style={{ fontFamily: "var(--font-poppins)" }}>
            Visit Our Clinic
          </h2>
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200 h-[400px] sm:h-[500px] relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3808.312389658252!2d78.54522800000001!3d17.373909!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb98e79c020591%3A0x6b63d9177651a027!2sLegend%20Physiotherapy%20Ortho%20and%20Neuro%20Pain%20Management%20Clinic!5e0!3m2!1sen!2sin!4v1714815600000!5m2!1sen!2sin"
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            
            {/* Location Marker Overlay */}
            <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 md:right-auto bg-white/95 backdrop-blur-sm p-3 sm:p-4 rounded-xl shadow-2xl border border-blue-100 max-w-sm">
              <div className="flex gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0 text-white">
                  <svg className="w-5 h-5 sm:w-7 sm:h-7" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-xs sm:text-sm">Legend Physiotherapy Clinic</h4>
                  <p className="text-[10px] sm:text-xs text-gray-600 mt-1">Dwarka Nagar, Kothapet, L. B. Nagar, Hyderabad 500102</p>
                  <p className="text-[9px] sm:text-[10px] text-blue-600 font-semibold mt-1 sm:mt-2 uppercase tracking-tighter">Verified Location</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* All 200+ Locations Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4" style={{ fontFamily: "var(--font-poppins)" }}>
              Our Physiotherapy Locations in Hyderabad
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find expert physiotherapy near you. We serve 200+ locations across Hyderabad with professional care.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
            {[
              { name: "A S Rao Nagar", slug: "a-s-rao-nagar" },
              { name: "Abdullapurmet", slug: "abdullapurmet" },
              { name: "Abids", slug: "abids" },
              { name: "Adarsh Nagar", slug: "adarsh-nagar" },
              { name: "Adikmet", slug: "adikmet" },
              { name: "Afzal Gunj", slug: "afzal-gunj" },
              { name: "Almasguda", slug: "almasguda" },
              { name: "Amberpet", slug: "amberpet" },
              { name: "Ameenpur", slug: "ameenpur" },
              { name: "Ameerpet", slug: "ameerpet" },
              { name: "Anandbagh", slug: "anandbagh" },
              { name: "Attapur", slug: "attapur" },
              { name: "Badangpet", slug: "badangpet" },
              { name: "Bahadurpally", slug: "bahadurpally" },
              { name: "Bahadurpura", slug: "bahadurpura" },
              { name: "Bairagiguda", slug: "bairagiguda" },
              { name: "Bala Nagar", slug: "bala-nagar" },
              { name: "Ballapur", slug: "ballapur" },
              { name: "Bandlaguda-Nagole", slug: "bandlaguda-nagole" },
              { name: "Basheer Bagh", slug: "basheer-bagh" },
              { name: "Basheerabad", slug: "basheerabad" },
              { name: "Bhogaram", slug: "bhogaram" },
              { name: "Bhoiguda", slug: "bhoiguda" },
              { name: "Bhongir", slug: "bhongir" },
              { name: "Bhuvanagiri", slug: "bhuvanagiri" },
              { name: "Bibinagarr", slug: "bibinagarr" },
              { name: "BN Reddy Nagar", slug: "bn-reddy-nagar" },
              { name: "Bogaram", slug: "bogaram" },
              { name: "Bolaram", slug: "bolaram" },
              { name: "Borabanda", slug: "borabanda" },
              { name: "Bowenpally", slug: "bowenpally" },
              { name: "Bowrampet", slug: "bowrampet" },
              { name: "Budul", slug: "budul" },
              { name: "Burgul", slug: "burgul" },
              { name: "Champapet", slug: "champapet" },
              { name: "Chandrayangutta", slug: "chandrayangutta" },
              { name: "Cherlpally", slug: "cherlpally" },
              { name: "Chevalla", slug: "chevalla" },
              { name: "Chikkadpally", slug: "chikkadpally" },
              { name: "Chilkur", slug: "chilkur" },
              { name: "Chintal", slug: "chintal" },
              { name: "Chintalkunta", slug: "chintalkunta" },
              { name: "Chintapallyguda", slug: "chintapallyguda" },
              { name: "Chowdhariguda", slug: "chowdhariguda" },
              { name: "Dasarlapally", slug: "dasarlapally" },
              { name: "Dayara", slug: "dayara" },
              { name: "Dhoolpet", slug: "dhoolpet" },
              { name: "Dilsukhnagar", slug: "dilsukhnagar" },
              { name: "Domalguda", slug: "domalguda" },
              { name: "Dullapally", slug: "dullapally" },
              { name: "Dundigal", slug: "dundigal" },
              { name: "East Marredpally", slug: "east-marredpally" },
              { name: "ECIL", slug: "ecil" },
              { name: "Edulanagulapalley", slug: "edulanagulapalley" },
              { name: "Erragadda", slug: "erragadda" },
              { name: "Falaknum", slug: "falaknum" },
              { name: "Film Nagar", slug: "film-nagar" },
              { name: "Financial District", slug: "financial-district" },
              { name: "Gagillpur", slug: "gagillpur" },
              { name: "Gandhi Nagar", slug: "gandhi-nagar" },
              { name: "Gandi Maisamma", slug: "gandi-maisamma" },
              { name: "Gandipet", slug: "gandipet" },
              { name: "Gatkesar", slug: "gatkesar" },
              { name: "Ghansi Bazaar", slug: "ghansi-bazaar" },
              { name: "Ghatkesr", slug: "ghatkesr" },
              { name: "Golkonda", slug: "golkonda" },
              { name: "Gudimalkapur", slug: "gudimalkapur" },
              { name: "Gulshan-e-Iqbal Colony", slug: "gulshan-e-iqbal-colony" },
              { name: "Gundlapochampallyy", slug: "gundlapochampallyy" },
              { name: "Gunrock Enclave", slug: "gunrock-enclave" },
              { name: "Gurram Guda", slug: "gurram-guda" },
              { name: "Habsiguda", slug: "habsiguda" },
              { name: "Hakimpet", slug: "hakimpet" },
              { name: "Hanuman Nagar Colony", slug: "hanuman-nagar-colony" },
              { name: "Hasmathpet", slug: "hasmathpet" },
              { name: "Hastinapuram", slug: "hastinapuram" },
              { name: "Himayatnagar", slug: "himayatnagar" },
              { name: "Himayath Nagar", slug: "himayath-nagar" },
              { name: "Humayun Nagar", slug: "humayun-nagar" },
              { name: "Hyder Nagar", slug: "hyder-nagar" },
              { name: "Hyderguda", slug: "hyderguda" },
              { name: "Ibrahimpatnam", slug: "ibrahimpatnam" },
              { name: "Indresham", slug: "indresham" },
              { name: "Isnapur", slug: "isnapur" },
              { name: "Jalpally", slug: "jalpally" },
              { name: "Jam Bagh", slug: "jam-bagh" },
              { name: "Jawahar Nagar", slug: "jawahar-nagar" },
              { name: "Jeedimetla", slug: "jeedimetla" },
              { name: "Jeera", slug: "jeera" },
              { name: "Jubilee Hills", slug: "jubilee-hills" },
              { name: "Kachiguda", slug: "kachiguda" },
              { name: "Kakaguda", slug: "kakaguda" },
              { name: "Kalasiguda", slug: "kalasiguda" },
              { name: "Kanchan Bagh", slug: "kanchan-bagh" },
              { name: "Kandukur", slug: "kandukur" },
              { name: "Kapra", slug: "kapra" },
              { name: "Karkhana", slug: "karkhana" },
              { name: "Kharmanghat", slug: "kharmanghat" },
              { name: "Karwan", slug: "karwan" },
              { name: "Katedan", slug: "katedan" },
              { name: "Kavdiguda", slug: "kavdiguda" },
              { name: "Kavuri Hills", slug: "kavuri-hills" },
              { name: "Kazipallyy", slug: "kazipallyy" },
              { name: "Keesara", slug: "keesara" },
              { name: "Khairatabad", slug: "khairatabad" },
              { name: "Kismatpur", slug: "kismatpur" },
              { name: "Kokapel", slug: "kokapel" },
              { name: "Kompally", slug: "kompally" },
              { name: "Kongara Kalan", slug: "kongara-kalan" },
              { name: "Kothaguda", slug: "kothaguda" },
              { name: "Kothapet", slug: "kothapet" },
              { name: "Koti", slug: "koti" },
              { name: "Kottur", slug: "kottur" },
              { name: "Kowkur", slug: "kowkur" },
              { name: "Kurmaguda", slug: "kurmaguda" },
              { name: "Kushaiguda", slug: "kushaiguda" },
              { name: "LB Nagar", slug: "lb-nagar" },
              { name: "Lakdi Ka Pul", slug: "lakdi-ka-pul" },
              { name: "Lal Darwaza", slug: "lal-darwaza" },
              { name: "Lalapet", slug: "lalapet" },
              { name: "Lallaguda", slug: "lallaguda" },
              { name: "Langar Houz", slug: "langar-houz" },
              { name: "Lingampally", slug: "lingampally" },
              { name: "Lothkunta", slug: "lothkunta" },
              { name: "Lumbini Park", slug: "lumbini-park" },
              { name: "Madhura Nagar", slug: "madhura-nagar" },
              { name: "Maheshwaram", slug: "maheshwaram" },
              { name: "Maisireddipalle", slug: "maisireddipalle" },
              { name: "Majarguda", slug: "majarguda" },
              { name: "Malakpet", slug: "malakpet" },
              { name: "Mallampet", slug: "mallampet" },
              { name: "Mallapur", slug: "mallapur" },
              { name: "Manchirevula", slug: "manchirevula" },
              { name: "Manneguda", slug: "manneguda" },
              { name: "Mansoorabad", slug: "mansoorabad" },
              { name: "Maruti Nagar", slug: "maruti-nagar" },
              { name: "Masab Tank", slug: "masab-tank" },
              { name: "Mazidpur", slug: "mazidpur" },
              { name: "Medak Road", slug: "medak-road" },
              { name: "Medchal", slug: "medchal" },
              { name: "Medipalli", slug: "medipalli" },
              { name: "Meerpet", slug: "meerpet" },
              { name: "Mehadipatnam", slug: "mehadipatnam" },
              { name: "Mettuguda", slug: "mettuguda" },
              { name: "Mirkhanpet", slug: "mirkhanpet" },
              { name: "Moghalpura", slug: "moghalpura" },
              { name: "Moinabad", slug: "moinabad" },
              { name: "Moosapel", slug: "moosapel" },
              { name: "Moosarambaagh", slug: "moosarambaagh" },
              { name: "Moti Ganpur", slug: "moti-ganpur" },
              { name: "Moti Nagar", slug: "moti-nagar" },
              { name: "Moula Ali", slug: "moula-ali" },
              { name: "MRC Colony", slug: "mrc-colony" },
              { name: "Musheerabad", slug: "musheerabad" },
              { name: "Muthangii", slug: "muthangii" },
              { name: "Mylargada", slug: "mylargada" },
              { name: "Nacharam", slug: "nacharam" },
              { name: "Nadergul", slug: "nadergul" },
              { name: "Nagaram", slug: "nagaram" },
              { name: "Nagarjuna Sagar Road", slug: "nagarjuna-sagar-road" },
              { name: "Nagole", slug: "nagole" },
              { name: "Nallakunta", slug: "nallakunta" },
              { name: "Nampally", slug: "nampally" },
              { name: "Nanakramguda", slug: "nanakramguda" },
              { name: "Nandigama", slug: "nandigama" },
              { name: "Narayanguda", slug: "narayanguda" },
              { name: "Narketpalli", slug: "narketpalli" },
              { name: "Narsapur", slug: "narsapur" },
              { name: "Nawab Saheb Kunta", slug: "nawab-saheb-kunta" },
              { name: "Neeladri Nagar", slug: "neeladri-nagar" },
              { name: "Neredmet", slug: "neredmet" },
              { name: "New Malakpet", slug: "new-malakpet" },
              { name: "New Mallepally", slug: "new-mallepally" },
              { name: "New Nallakunta", slug: "new-nallakunta" },
              { name: "NH-7", slug: "nh-7" },
              { name: "NH-9 Highway", slug: "nh-9-highway" },
              { name: "Nizampet Road", slug: "nizampet-road" },
              { name: "NTR Nagar", slug: "ntr-nagar" },
              { name: "Old Bowenpally", slug: "old-bowenpally" },
              { name: "Osman Nagar", slug: "osman-nagar" },
              { name: "Osman Sagar Road", slug: "osman-sagar-road" },
              { name: "Outer Ring Road", slug: "outer-ring-road" },
              { name: "Padma Rao Nagar", slug: "padma-rao-nagar" },
              { name: "Pahadi Shareef", slug: "pahadi-shareef" },
              { name: "Patancheru-Shankarpalli Road", slug: "patancheru-shankarpalli-road" },
              { name: "Patighanpur", slug: "patighanpur" },
              { name: "Pavanpuri Colony", slug: "pavanpuri-colony" },
              { name: "Peerancheeru", slug: "peerancheeru" },
              { name: "Peerzadiguda", slug: "peerzadiguda" },
              { name: "Pet Basheerabad", slug: "pet-basheerabad" },
              { name: "Pochampally", slug: "pochampally" },
              { name: "Pocharam", slug: "pocharam" },
              { name: "Prashanth Nagar", slug: "prashanth-nagar" },
              { name: "Pulimamidi", slug: "pulimamidi" },
              { name: "Punjagutta", slug: "punjagutta" },
              { name: "Quthbullapur", slug: "quthbullapur" },
              { name: "Qutub Shahi Tombs", slug: "qutub-shahi-tombs" },
              { name: "R.K.Puram", slug: "r-k-puram" },
              { name: "Rai Durg", slug: "rai-durg" },
              { name: "Raikal", slug: "raikal" },
              { name: "Raj Bhavan Road", slug: "raj-bhavan-road" },
              { name: "Rajeev Nagar", slug: "rajeev-nagar" },
              { name: "Rajendra Nagar", slug: "rajendra-nagar" },
              { name: "Ram Nagar", slug: "ram-nagar" },
              { name: "Ramakrishnapuram", slug: "ramakrishnapuram" },
              { name: "Ramanthapur", slug: "ramanthapur" },
              { name: "Ramchandra Puram", slug: "ramchandra-puram" },
              { name: "Ramgopalpet", slug: "ramgopalpet" },
              { name: "Ramoji Film City", slug: "ramoji-film-city" },
              { name: "Rampally", slug: "rampally" },
              { name: "Rani Gunj", slug: "rani-gunj" },
              { name: "Rasoolpura", slug: "rasoolpura" },
              { name: "Ravulapalle Khurd", slug: "ravulapalle-khurd" },
              { name: "Rendlagadda", slug: "rendlagadda" },
              { name: "Riyasat Nagar", slug: "riyasat-nagar" },
              { name: "Rudram", slug: "rudram" },
              { name: "S D Road", slug: "s-d-road" },
              { name: "Saidabad", slug: "saidabad" },
              { name: "Saifabad", slug: "saifabad" },
              { name: "Saleem Nagar", slug: "saleem-nagar" },
              { name: "Sangareddy", slug: "sangareddy" },
              { name: "Sanjeeva Reddy Nagar", slug: "sanjeeva-reddy-nagar" },
              { name: "Santosh Nagar", slug: "santosh-nagar" },
              { name: "Saroor Nagar", slug: "saroor-nagar" },
              { name: "Seetharampallyy", slug: "seetharampallyy" },
              { name: "Serilingampallyy", slug: "serilingampallyy" },
              { name: "Shahbaad", slug: "shahbaad" },
              { name: "Shaikpet", slug: "shaikpet" },
              { name: "Shameerpet", slug: "shameerpet" },
              { name: "Shamirpet", slug: "shamirpet" },
              { name: "Shamshabad Road", slug: "shamshabad-road" },
              { name: "Shankarpalli", slug: "shankarpalli" },
              { name: "Shanthi Nagar", slug: "shanthi-nagar" },
              { name: "Sheriguda", slug: "sheriguda" },
              { name: "Siddhartha Nagar", slug: "siddhartha-nagar" },
              { name: "Sindhi Colony", slug: "sindhi-colony" },
              { name: "Sitaphalmandir", slug: "sitaphalmandir" },
              { name: "Sivarampallyy", slug: "sivarampallyy" },
              { name: "Somajiguda", slug: "somajiguda" },
              { name: "Sri Nagar Colony", slug: "sri-nagar-colony" },
              { name: "Srinagar Colony", slug: "srinagar-colony" },
              { name: "Subhash Nagar", slug: "subhash-nagar" },
              { name: "Suchitra Road", slug: "suchitra-road" },
              { name: "Sultanpur", slug: "sultanpur" },
              { name: "Suraram", slug: "suraram" },
              { name: "Surya Nagar Colony", slug: "surya-nagar-colony" },
              { name: "Thimmapur", slug: "thimmapur" },
              { name: "Toli Chowki", slug: "toli-chowki" },
              { name: "Toroor", slug: "toroor" },
              { name: "Trimulgherry", slug: "trimulgherry" },
              { name: "Tukkuguda", slug: "tukkuguda" },
              { name: "Tulekhurd", slug: "tulekhurd" },
              { name: "Tupran", slug: "tupran" },
              { name: "Turkayamjal", slug: "turkayamjal" },
              { name: "Uppaguda", slug: "uppaguda" },
              { name: "Upparpally", slug: "upparpally" },
              { name: "Vanasthalipuram", slug: "vanasthalipuram" },
              { name: "Vattepally", slug: "vattepally" },
              { name: "Vayupuri", slug: "vayupuri" },
              { name: "Velimela", slug: "velimela" },
              { name: "Venkat Reddy Colony", slug: "venkat-reddy-colony" },
              { name: "Venkatapuram", slug: "venkatapuram" },
              { name: "Vijayawada Highway", slug: "vijayawada-highway" },
              { name: "Walker Town", slug: "walker-town" },
              { name: "Warangal Highway", slug: "warangal-highway" },
              { name: "West Marredpally", slug: "west-marredpally" },
              { name: "Whitefield", slug: "whitefield" },
              { name: "Yakhutpura", slug: "yakhutpura" },
              { name: "Yousufguda", slug: "yousufguda" },
              { name: "Zahirabad", slug: "zahirabad" },
            ].map((loc) => (
              <a
                key={loc.slug}
                href={`/locations/${loc.slug}`}
                className="p-3 rounded-lg text-center transition-all text-xs bg-gray-50 text-gray-700 hover:bg-blue-50 hover:text-blue-600 hover:shadow-md"
                title={`Physiotherapy in ${loc.name}`}
              >
                <div className="font-semibold" style={{ fontFamily: "var(--font-poppins)" }}>
                  {loc.name}
                </div>
                <div className="text-[10px] mt-1 opacity-80">
                  View Details
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
