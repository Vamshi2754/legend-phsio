import Image from "next/image";
import doctorImg from "@/assets/doctor.png";

const doctors = [
  {
    name: "Dr. Sirish",
    specialty: "B.P.T, M.Sc Sports (London)",
    role: "Senior Physiotherapist – 20+ Years Experience",
    qualifications: [
      "Specialized in Orthopedic & Neurological Rehabilitation",
      "Expert in Sports Injury Management & Recovery",
      "Advanced Manual Therapy & Pain Management Specialist",
      "Treated 5000+ Patients Successfully",
    ],
    bio: "Dr. Sirish brings extensive experience in treating complex orthopedic and neurological conditions. His patient-centered approach and commitment to evidence-based practice have helped thousands achieve pain-free, active lives.",
    image: doctorImg,
    social: {
      whatsapp: "919966193413",
      phone: "+919966193413",
      instagram: "https://www.instagram.com/dr.sirish_legend_physio?stkn=MWRmeHFlZnY3ZXBxZQ==",
      facebook: "https://www.facebook.com/share/1DTdMkDcju/",
      linkedin: "https://www.linkedin.com/in/sirish-physiotherapist?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    },
  },
];

export default function Doctors() {
  return (
    <section id="doctors" className="py-16 sm:py-20 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <div className="text-center mb-10 sm:mb-12 md:mb-14">
          <span className="section-tag text-xs sm:text-sm">Meet Our Team</span>
          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mt-2 sm:mt-3 mb-3 sm:mb-4 px-4"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Meet our Physiotherapist
          </h2>
          <p className="text-sm sm:text-base text-gray-500 max-w-xl mx-auto leading-relaxed px-4">
            Led by Dr. Sirish, our highly qualified medical expert brings decades of experience and
            genuine dedication to every patient.
          </p>
        </div>

        {/* Card */}
        <div className="flex justify-center">
          <div className="max-w-3xl w-full">
            {doctors.map((doc) => (
              <div
                key={doc.name}
                className="rounded-2xl overflow-hidden shadow-lg border border-gray-100 bg-white"
              >
                <div className="flex flex-col md:flex-row">
                  {/* Image */}
                  <div className="relative md:w-80 flex-shrink-0 h-80 sm:h-96 md:h-auto overflow-hidden bg-gray-100 rounded-xl">
                    <Image
                      src={doc.image}
                      alt="Dr. Sirish - Senior Physiotherapist with 20+ Years Experience at Legend Physiotherapy"
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, 320px"
                      priority
                    />
                  </div>

                  {/* Info */}
                  <div className="p-4 sm:p-6 md:p-8 flex flex-col justify-center flex-1">
                    <h3
                      className="font-bold text-gray-800 text-xl sm:text-2xl mb-1"
                      style={{ fontFamily: "var(--font-poppins)" }}
                    >
                      {doc.name}
                    </h3>
                    <p className="text-blue-500 font-semibold mb-1 text-sm sm:text-base">{doc.specialty}</p>
                    <p className="text-gray-500 text-xs sm:text-sm mb-3 sm:mb-4">{doc.role}</p>

                    <ul className="space-y-1.5 sm:space-y-2 mb-3 sm:mb-4">
                      {doc.qualifications.map((q, i) => (
                        <li key={i} className="flex items-start gap-1.5 sm:gap-2 text-xs sm:text-sm text-gray-700">
                          <svg
                            className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 flex-shrink-0 mt-0.5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          {q}
                        </li>
                      ))}
                    </ul>

                    <p className="text-gray-600 text-xs sm:text-sm mb-4 sm:mb-5 leading-relaxed">{doc.bio}</p>

                    <div className="flex flex-wrap gap-2 sm:gap-3">
                      <a
                        href={`https://wa.me/${doc.social.whatsapp}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="WhatsApp"
                        title="WhatsApp"
                        className="w-9 h-9 sm:w-10 sm:h-10 bg-green-100 hover:bg-green-500 rounded-full flex items-center justify-center text-green-600 hover:text-white transition-colors"
                      >
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 fill-current" viewBox="0 0 448 512">
                          <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.7 17.7 69.4 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.1 0-65.6-8.9-93.7-25.7l-6.7-4-69.8 18.3 18.6-68-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-5.5-2.8-23.2-8.5-44.2-27.1-16.4-14.6-27.4-32.7-30.6-38.2-3.2-5.6-.3-8.6 2.5-11.3 2.5-2.5 5.6-6.5 8.3-9.7 2.8-3.3 3.7-5.6 5.6-9.3 1.9-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 13.2 5.8 23.5 9.2 31.5 11.8 13.3 4.2 25.4 3.6 35 2.2 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                        </svg>
                      </a>
                      <a
                        href={`tel:${doc.social.phone}`}
                        aria-label="Phone"
                        title="Call"
                        className="w-9 h-9 sm:w-10 sm:h-10 bg-blue-100 hover:bg-blue-500 rounded-full flex items-center justify-center text-blue-600 hover:text-white transition-colors"
                      >
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 fill-current" viewBox="0 0 20 20">
                          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                        </svg>
                      </a>
                      <a
                        href={doc.social.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                        title="Instagram"
                        className="w-9 h-9 sm:w-10 sm:h-10 bg-pink-100 hover:bg-pink-500 rounded-full flex items-center justify-center text-pink-600 hover:text-white transition-colors"
                      >
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 fill-current" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                        </svg>
                      </a>
                      <a
                        href={doc.social.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Facebook"
                        title="Facebook"
                        className="w-9 h-9 sm:w-10 sm:h-10 bg-blue-100 hover:bg-blue-600 rounded-full flex items-center justify-center text-blue-600 hover:text-white transition-colors"
                      >
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 fill-current" viewBox="0 0 24 24">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                        </svg>
                      </a>
                      <a
                        href={doc.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        title="LinkedIn"
                        className="w-9 h-9 sm:w-10 sm:h-10 bg-blue-100 hover:bg-blue-700 rounded-full flex items-center justify-center text-blue-700 hover:text-white transition-colors"
                      >
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 fill-current" viewBox="0 0 24 24">
                          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.74a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
