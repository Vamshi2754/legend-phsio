"use client";
import { useState } from "react";

const departments = [
  {
    id: "back",
    label: "Back Pain",
    icon: "back",
    title: "Back Pain Relief & Management",
    image: "/assets/backpain.jpg",
    desc: "Walk pain-free in 2-3 weeks with our expert treatment for lower back pain. We use advanced manual therapy, corrective exercises, and personalized rehabilitation plans to address the root cause of your pain.",
    features: [
      "Manual Therapy Techniques",
      "Corrective Exercise Programs",
      "Postural Assessment & Training",
      "Core Strengthening",
      "Home Exercise Plans",
    ],
  },
  {
    id: "neck",
    label: "Neck & Shoulder",
    icon: "neck",
    title: "Neck & Shoulder Care",
    image: "/assets/shoulderpain.jpg",
    desc: "Get relief from cervical spondylosis, neck stiffness, and frozen shoulder through personalized rehabilitation plans. Our expert therapists regain your full range of motion and eliminate chronic pain.",
    features: [
      "Cervical Spine Treatment",
      "Frozen Shoulder Rehab",
      "Range of Motion Exercises",
      "Muscle Release Techniques",
      "Ergonomic Training",
    ],
  },
  {
    id: "sports",
    label: "Sports Injury",
    icon: "sports",
    title: "Sports Injury Rehabilitation",
    image: "/assets/doctor2.jpg",
    desc: "Return to peak performance after sports injuries. From ACL tears to ankle sprains, our experts help athletes recover with strength conditioning, injury prevention, and safe return-to-play protocols.",
    features: [
      "ACL Tear Rehabilitation",
      "Ankle Sprain Recovery",
      "Strength Conditioning",
      "Injury Prevention Training",
      "Return to Sport Programs",
    ],
  },
  {
    id: "knee",
    label: "Knee Pain",
    icon: "knee",
    title: "Knee Pain & Joint Care",
    image: "/assets/kneepain2.jpg",
    desc: "Specialized care for knee pain, arthritis, and post-operative rehabilitation. We help you regain mobility, reduce pain, and improve your quality of life with evidence-based treatment.",
    features: [
      "Osteoarthritis Management",
      "Post-Op Rehab (ACL, Meniscus)",
      "Patellar Pain Treatment",
      "Joint Mobilization",
      "Functional Training",
    ],
  },
  {
    id: "neuro",
    label: "Neuro Rehab",
    icon: "neuro",
    title: "Neurological Rehabilitation",
    image: "/assets/bed.jpg",
    desc: "Expert care for stroke rehabilitation, paralysis recovery, and neurological disorders. Our compassionate therapists bring all necessary equipment to your home for comprehensive neuro rehab.",
    features: [
      "Stroke Recovery",
      "Paralysis Rehabilitation",
      "Balance & Gait Training",
      "Spasticity Management",
      "Functional Recovery Programs",
    ],
  },
  {
    id: "ward",
    label: "Ward Care",
    icon: "ward",
    title: "Hospital Ward Physiotherapy",
    image: "/assets/wardroom.jpg",
    desc: "Specialized physiotherapy services for hospitalized patients. We provide bedside rehabilitation, post-operative care, and mobility training in hospital wards.",
    features: [
      "Bedside Rehabilitation",
      "Post-Operative Mobility",
      "ICU Physiotherapy",
      "Respiratory Care",
      "Early Mobilization Programs",
    ],
  },
];

const iconMap: Record<string, React.ReactNode> = {
  back: <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" /></svg>,
  neck: <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm9 7h-6v13h-2v-6h-2v6H9V9H3V7h18v2z" /></svg>,
  sports: <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5-9c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3zm10 6c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z" /></svg>,
  knee: <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M13 5.5c1.93 0 3.5-1.57 3.5-3.5S14.93 -1.5 13 -1.5 9.5 .07 9.5 2 11.07 5.5 13 5.5m0 2c-3.04 0-5.5 2.46-5.5 5.5v3H4v8h2v-8h5.5v8h2v-8c0-3.04-2.46-5.5-5.5-5.5z" /></svg>,
  neuro: <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" /></svg>,
  ward: <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58V19z" /></svg>,
};

export default function Departments() {
  const [active, setActive] = useState("back");
  const dept = departments.find((d) => d.id === active)!;

  return (
    <section id="departments" className="py-16 sm:py-20 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <div className="text-center mb-10 sm:mb-12 md:mb-14">
          <span className="section-tag text-xs sm:text-sm">Specialized Care</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mt-2 sm:mt-3 mb-3 sm:mb-4 px-4" style={{ fontFamily: "var(--font-poppins)" }}>
            Our Departments
          </h2>
          <p className="text-sm sm:text-base text-gray-500 max-w-xl mx-auto leading-relaxed px-4">
            Explore our specialized departments, each staffed by experts at the forefront of their field.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-10 px-2">
          {departments.map((d) => (
            <button
              key={d.id}
              onClick={() => setActive(d.id)}
              className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${active === d.id ? "bg-blue-500 text-white shadow-md shadow-blue-200" : "bg-white text-gray-600 border border-gray-200 hover:border-blue-300 hover:text-blue-500"
                }`}
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              <span className={active === d.id ? "text-white" : "text-blue-500"}>{iconMap[d.icon]}</span>
              <span className="hidden xs:inline">{d.label}</span>
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 items-center bg-white rounded-2xl shadow-sm overflow-hidden">
          <div className="p-6 sm:p-8 md:p-10 order-2 lg:order-1">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4" style={{ fontFamily: "var(--font-poppins)" }}>
              {dept.title}
            </h3>
            <p className="text-sm sm:text-base text-gray-500 leading-relaxed mb-4 sm:mb-6">{dept.desc}</p>
            <ul className="space-y-2 sm:space-y-3">
              {dept.features.map((f) => (
                <li key={f} className="flex items-center gap-2 sm:gap-3 text-gray-600 text-xs sm:text-sm">
                  <span className="w-4 h-4 sm:w-5 sm:h-5 bg-blue-100 text-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  {f}
                </li>
              ))}
            </ul>
            <a href="https://legendphysiotherapyorthoandneuropainmanagementclinic.setmore.com?utm_source=qr-code&utm_medium=settings-share-bp" target="_blank" rel="noopener noreferrer" className="btn-primary mt-6 sm:mt-8 inline-flex text-sm sm:text-base">
              Book Appointment
            </a>
          </div>
          <div className="h-80 sm:h-96 md:h-[28rem] lg:h-full lg:min-h-[32rem] order-1 lg:order-2 bg-gray-100 rounded-xl overflow-hidden">
            <img
              src={dept.image}
              alt={`${dept.title} - Expert physiotherapy treatment for ${dept.label.toLowerCase()} at Legend Physiotherapy`}
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
