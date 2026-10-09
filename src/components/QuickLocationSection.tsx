"use client";

import { MapPin, Phone, Clock, Navigation, ExternalLink, Star, ShieldCheck } from "lucide-react";

export default function QuickLocationSection() {
  return (
    <section className="bg-gradient-to-b from-blue-50 via-white to-blue-50/40 py-10 sm:py-14 border-y border-blue-100/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-3xl shadow-xl border border-blue-100 p-5 sm:p-8 lg:p-10 relative z-10">
          
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            {/* Info Side */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 bg-blue-100/80 text-blue-700 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
                  <MapPin className="w-3.5 h-3.5 text-blue-600" />
                  <span>Instant Map & Location</span>
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 tracking-tight" style={{ fontFamily: "var(--font-poppins)" }}>
                  Legend Physiotherapy Clinic
                </h2>
                <p className="text-blue-600 font-semibold text-sm sm:text-base mt-1">
                  Ortho and Neuro Pain Management Clinic | LB Nagar & Kothapet
                </p>
              </div>

              {/* Rating badge */}
              <div className="flex items-center gap-3 bg-amber-50 border border-amber-200/80 p-3 rounded-2xl w-fit">
                <div className="flex text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-xs sm:text-sm font-bold text-gray-800">
                  4.9 / 5.0 Rating <span className="text-gray-500 font-normal">(500+ Google Reviews)</span>
                </span>
              </div>

              {/* Address & Contact Quick Cards */}
              <div className="space-y-3.5 text-xs sm:text-sm">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-bold text-gray-900 block text-xs uppercase text-gray-500 tracking-wider">Address</span>
                    <p className="text-gray-700 font-medium leading-relaxed">
                      Shop No.2 Ground Floor, Road No: 4, HNO: 11-13-714 Dwarka Nagar, Green Hills Colony, Kothapet, L. B. Nagar, Hyderabad, Telangana 500102
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 bg-green-50 text-green-600 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-bold text-gray-900 block text-xs uppercase text-gray-500 tracking-wider">Phone / Emergency Care</span>
                    <div className="flex flex-wrap gap-x-4 gap-y-1 mt-0.5 font-bold text-green-700 text-sm">
                      <a href="tel:+919966193413" className="hover:underline flex items-center gap-1">
                        +91 99661 93413
                      </a>
                      <a href="tel:+918143015455" className="hover:underline flex items-center gap-1">
                        +91 81430 15455
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-bold text-gray-900 block text-xs uppercase text-gray-500 tracking-wider">Clinic Timing</span>
                    <p className="text-gray-700 font-semibold">
                      Mon – Sun: 9:00 AM – 9:00 PM <span className="text-green-600 font-bold">(Open 7 Days)</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  href="https://www.google.com/maps/place/Legend+Physiotherapy+Ortho+and+Neuro+Pain+Management+Clinic+%7C+Kothapet+%7C+Lb+Nagar/@17.3597024,78.5457583,17z"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
                >
                  <Navigation className="w-4 h-4" />
                  Get Directions on Google Maps
                  <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                </a>
                <a
                  href="tel:+919966193413"
                  className="bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-xl font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  Call Clinic Directly
                </a>
              </div>
            </div>

            {/* Map Frame Side */}
            <div className="lg:col-span-6 h-[320px] sm:h-[400px] lg:h-[420px] rounded-2xl overflow-hidden shadow-inner border border-blue-200 relative group">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.5!2d78.5457583!3d17.3597024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb990043784b77%3A0x55126327d4caeb32!2sLegend%20Physiotherapy%20Ortho%20and%20Neuro%20Pain%20Management%20Clinic%20%7C%20Kothapet%20%7C%20Lb%20Nagar!5e0!3m2!1sen!2sin!4v1"
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Legend Physiotherapy Google Maps Location"
              ></iframe>

              {/* Floating Badge */}
              <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-lg border border-green-200 flex items-center gap-1.5 text-xs font-bold text-green-700">
                <ShieldCheck className="w-4 h-4 text-green-600" />
                <span>Verified Google Business Location</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
