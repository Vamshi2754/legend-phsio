import Header from "@/components/Header";
import Footer from "@/components/Footer";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Legend Physiotherapy Clinic Hyderabad | Dr. Sirish - 20+ Years Experience",
  description: "Learn about Legend Physiotherapy Clinic led by Dr. Sirish with 20+ years experience. Expert ortho & neuro physiotherapy treatment. State-of-the-art clinic at LB Nagar & professional home visits across Hyderabad. Trusted by 2400+ patients.",
  keywords: [
    "about legend physiotherapy",
    "dr sirish physiotherapist",
    "physiotherapy clinic hyderabad",
    "best physiotherapist hyderabad",
    "experienced physiotherapist",
    "ortho physiotherapy",
    "neuro physiotherapy",
    "physiotherapy lb nagar",
  ],
  openGraph: {
    title: "About Us | Legend Physiotherapy Clinic Hyderabad",
    description: "Learn about Legend Physiotherapy led by Dr. Sirish with 20+ years experience. Expert treatment. Trusted by 2400+ patients.",
    type: "website",
  },
  alternates: {
    canonical: "https://legend-physiotherapist.vercel.app/about",
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl font-bold mb-6" style={{ fontFamily: "var(--font-poppins)" }}>
            About Legend Physiotherapy
          </h1>
          <p className="text-xl text-white/90 max-w-3xl">
            Your trusted partner in pain-free living and optimal physical health
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Our Story */}
        <section className="mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6" style={{ fontFamily: "var(--font-poppins)" }}>
            Our Story
          </h2>
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
                Legend Physiotherapy was founded with a simple yet powerful vision: to provide world-class physiotherapy care that transforms lives. With over 20+ years of experience in orthopedic and neurological rehabilitation, we have helped thousands of patients overcome pain, recover from injuries, and regain their independence.
              </p>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
                Led by Dr. Sirish, our team of expert physiotherapists combines advanced clinical knowledge with compassionate care. We believe that every patient deserves personalized attention and evidence-based treatment delivered in a supportive, encouraging environment.
              </p>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                What started as a single clinic in LB Nagar has grown into a comprehensive physiotherapy service covering all major areas of Hyderabad. Whether you visit our state-of-the-art clinic or choose the convenience of home visits, you'll receive the same high standard of professional care.
              </p>
            </div>
            <div className="bg-blue-50 rounded-2xl p-6 md:p-8">
              <img
                src="/assets/physiotherpy.jpg"
                alt="Legend Physiotherapy Clinic"
                className="rounded-xl shadow-lg w-full h-80 md:h-96 object-contain"
              />
            </div>
          </div>
        </section>

        {/* Meet Our Physiotherapist */}
        <section className="mb-16 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center" style={{ fontFamily: "var(--font-poppins)" }}>
            Meet our Physiotherapist
          </h2>
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative h-80 sm:h-96 md:h-auto bg-gray-100 rounded-xl overflow-hidden">
                <img
                  src="/assets/doctor.png"
                  alt="Dr. Sirish - Senior Physiotherapist with 20+ Years Experience at Legend Physiotherapy"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="p-6 md:p-8 flex flex-col justify-center">
                <div className="mb-4">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2" style={{ fontFamily: "var(--font-poppins)" }}>
                    Dr. Sirish
                  </h3>
                  <p className="text-blue-600 font-semibold mb-1 text-sm md:text-base">B.P.T, M.Sc Sports (London)</p>
                  <p className="text-gray-600 text-xs md:text-sm">Senior Physiotherapist - 20+ Years Experience</p>
                </div>
                
                <div className="space-y-2 md:space-y-3 mb-4 md:mb-6">
                  <div className="flex items-start gap-2 md:gap-3">
                    <svg className="w-4 h-4 md:w-5 md:h-5 text-blue-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <p className="text-gray-700 text-xs md:text-sm">Specialized in Orthopedic & Neurological Rehabilitation</p>
                  </div>
                  <div className="flex items-start gap-2 md:gap-3">
                    <svg className="w-4 h-4 md:w-5 md:h-5 text-blue-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <p className="text-gray-700 text-xs md:text-sm">Expert in Sports Injury Management & Recovery</p>
                  </div>
                  <div className="flex items-start gap-2 md:gap-3">
                    <svg className="w-4 h-4 md:w-5 md:h-5 text-blue-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <p className="text-gray-700 text-xs md:text-sm">Advanced Manual Therapy & Pain Management Specialist</p>
                  </div>
                  <div className="flex items-start gap-2 md:gap-3">
                    <svg className="w-4 h-4 md:w-5 md:h-5 text-blue-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <p className="text-gray-700 text-xs md:text-sm">Treated 5000+ Patients Successfully</p>
                  </div>
                </div>

                <p className="text-gray-600 text-xs md:text-sm leading-relaxed mb-4 md:mb-6">
                  Dr. Sirish brings extensive experience in treating complex orthopedic and neurological conditions. His patient-centered approach and commitment to evidence-based practice have helped thousands achieve pain-free, active lives.
                </p>

                <div className="flex gap-2 md:gap-3">
                  <a
                    href="https://wa.me/919966193413"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 md:w-10 md:h-10 bg-green-100 hover:bg-green-500 text-green-600 hover:text-white rounded-lg flex items-center justify-center transition-colors"
                    aria-label="WhatsApp"
                  >
                    <svg className="w-4 h-4 md:w-5 md:h-5 fill-current" viewBox="0 0 448 512">
                      <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.7 17.7 69.4 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.1 0-65.6-8.9-93.7-25.7l-6.7-4-69.8 18.3 18.6-68-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-5.5-2.8-23.2-8.5-44.2-27.1-16.4-14.6-27.4-32.7-30.6-38.2-3.2-5.6-.3-8.6 2.5-11.3 2.5-2.5 5.6-6.5 8.3-9.7 2.8-3.3 3.7-5.6 5.6-9.3 1.9-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 13.2 5.8 23.5 9.2 31.5 11.8 13.3 4.2 25.4 3.6 35 2.2 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
                    </svg>
                  </a>
                  <a
                    href="tel:+919966193413"
                    className="w-8 h-8 md:w-10 md:h-10 bg-blue-100 hover:bg-blue-500 text-blue-600 hover:text-white rounded-lg flex items-center justify-center transition-colors"
                    aria-label="Phone"
                  >
                    <svg className="w-4 h-4 md:w-5 md:h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.instagram.com/legend_physiotherapy_clinic"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 md:w-10 md:h-10 bg-pink-100 hover:bg-pink-500 text-pink-600 hover:text-white rounded-lg flex items-center justify-center transition-colors"
                    aria-label="Instagram"
                  >
                    <svg className="w-4 h-4 md:w-5 md:h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Mission & Vision */}
        <section className="mb-12 md:mb-16 bg-gray-50 rounded-2xl p-6 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div>
              <div className="w-12 h-12 md:w-16 md:h-16 bg-blue-500 rounded-xl flex items-center justify-center mb-4 md:mb-6">
                <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4" style={{ fontFamily: "var(--font-poppins)" }}>
                Our Mission
              </h3>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                To provide exceptional physiotherapy care that empowers individuals to achieve pain-free, active lives. We are committed to using evidence-based practices, advanced technology, and personalized treatment plans to deliver the best possible outcomes for every patient.
              </p>
            </div>
            <div>
              <div className="w-12 h-12 md:w-16 md:h-16 bg-blue-500 rounded-xl flex items-center justify-center mb-4 md:mb-6">
                <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4" style={{ fontFamily: "var(--font-poppins)" }}>
                Our Vision
              </h3>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                To be Hyderabad's most trusted physiotherapy provider, recognized for clinical excellence, patient-centered care, and innovative treatment approaches. We envision a community where everyone has access to professional physiotherapy services that enhance quality of life and promote long-term wellness.
              </p>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center" style={{ fontFamily: "var(--font-poppins)" }}>
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                ),
                title: "Excellence",
                desc: "We maintain the highest standards of clinical practice and continuously update our skills with the latest evidence-based techniques."
              },
              {
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                ),
                title: "Compassion",
                desc: "We treat every patient with empathy, respect, and understanding, recognizing that healing involves both body and mind."
              },
              {
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                ),
                title: "Integrity",
                desc: "We are honest, transparent, and ethical in all our interactions, always putting patient welfare first."
              },
              {
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                ),
                title: "Innovation",
                desc: "We embrace new technologies and treatment methods that enhance patient outcomes and improve the healing experience."
              },
              {
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                ),
                title: "Collaboration",
                desc: "We work as a team with patients, families, and other healthcare providers to achieve the best possible results."
              },
              {
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                ),
                title: "Education",
                desc: "We empower patients with knowledge about their conditions and teach self-management strategies for long-term wellness."
              }
            ].map((value, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {value.icon}
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: "var(--font-poppins)" }}>
                  {value.title}
                </h4>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center" style={{ fontFamily: "var(--font-poppins)" }}>
            Why Choose Legend Physiotherapy?
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "20+ Years of Experience",
                desc: "Extensive expertise in treating orthopedic and neurological conditions"
              },
              {
                title: "Advanced Technology",
                desc: "State-of-the-art equipment including robotic therapy and laser treatment"
              },
              {
                title: "Personalized Care",
                desc: "Customized treatment plans tailored to your specific needs and goals"
              },
              {
                title: "Convenient Options",
                desc: "Choose between our premium clinic or professional home visit services"
              },
              {
                title: "Comprehensive Coverage",
                desc: "Serving all major areas of Hyderabad with prompt, reliable service"
              },
              {
                title: "Proven Results",
                desc: "Thousands of satisfied patients who have achieved pain-free living"
              }
            ].map((item, index) => (
              <div key={index} className="flex gap-4 p-6 bg-blue-50 rounded-xl border border-blue-100">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">{item.title}</h4>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: "var(--font-poppins)" }}>
            Ready to Start Your Recovery Journey?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied patients who have achieved pain-free living with Legend Physiotherapy
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="https://legendphysiotherapyorthoandneuropainmanagementclinic.setmore.com?utm_source=qr-code&utm_medium=settings-share-bp"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold hover:bg-blue-50 transition-colors inline-flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Book Appointment
            </a>
            <a
              href="tel:+919966193413"
              className="bg-blue-800 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-900 transition-colors inline-flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              Call +91 99661 93413
            </a>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
