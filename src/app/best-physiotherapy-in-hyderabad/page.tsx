import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Physiotherapy in Hyderabad | Legend Physiotherapy Clinic",
  description:
    "Looking for the best physiotherapy in Hyderabad? Legend Physiotherapy offers expert ortho, neuro and sports rehab. 5.0 rated, 492+ Google reviews. Call now.",
  alternates: { canonical: "/best-physiotherapy-in-hyderabad" },
  keywords: [
    "best physiotherapy in Hyderabad",
    "best physiotherapist in Hyderabad",
    "physiotherapy clinic Hyderabad",
    "physiotherapy near me Hyderabad",
    "top physiotherapy centre Hyderabad",
    "physiotherapy at home Hyderabad",
    "ortho physiotherapy Hyderabad",
    "neuro physiotherapy Hyderabad",
    "sports physiotherapy Hyderabad",
  ],
  openGraph: {
    title: "Best Physiotherapy in Hyderabad | Legend Physiotherapy Clinic",
    description:
      "Legend Physiotherapy — Hyderabad's top-rated physiotherapy clinic. 20+ years experience, 5.0 Google rating, 492+ reviews. Ortho, neuro, sports rehab and home visits.",
    url: "/best-physiotherapy-in-hyderabad",
    siteName: "Legend Physiotherapy",
    locale: "en_IN",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Best Physiotherapy in Hyderabad - Legend Physiotherapy" }],
  },
};

const faqs = [
  {
    question: "Which is the best physiotherapy clinic in Hyderabad?",
    answer:
      "Legend Physiotherapy Ortho and Neuro Pain Management Clinic in Kothapet, LB Nagar is rated 5.0 on Google with 492+ reviews. With 20+ years of experience, advanced equipment like robotic physiotherapy, laser therapy and spinal decompression, and expert care led by Dr. Sirish, it is one of the most trusted physiotherapy clinics in Hyderabad.",
  },
  {
    question: "How much does physiotherapy cost in Hyderabad?",
    answer:
      "Physiotherapy session charges in Hyderabad typically range from ₹500 to ₹1500 per session depending on the type of treatment, duration and whether it is at the clinic or a home visit. At Legend Physiotherapy, we offer competitive pricing for quality care. Call +91 81430 15455 for current rates.",
  },
  {
    question: "Do you provide home visit physiotherapy in Hyderabad?",
    answer:
      "Yes. Legend Physiotherapy provides professional home visit physiotherapy across all areas of Hyderabad including LB Nagar, Dilsukhnagar, Nagole, Vanasthalipuram, Uppal, Habsiguda, Secunderabad, Ameerpet, Kukatpally, Gachibowli, Kondapur, Madhapur, Banjara Hills, Jubilee Hills, Mehdipatnam, Attapur and many more. Our physiotherapist brings all necessary equipment to your home.",
  },
  {
    question: "What conditions do physiotherapists treat?",
    answer:
      "Physiotherapists treat back pain, neck pain, knee pain, shoulder pain, sciatica, slip disc, frozen shoulder, arthritis, sports injuries, post-surgical rehabilitation, stroke and paralysis, Parkinson's disease, plantar fasciitis, tennis elbow, carpal tunnel syndrome, vertigo, TMJ disorders and many other musculoskeletal and neurological conditions.",
  },
  {
    question: "How many sessions of physiotherapy will I need?",
    answer:
      "The number of sessions depends on your condition and its severity. Acute conditions like muscle strains may improve in 5 to 8 sessions, while chronic conditions like cervical spondylosis or post-stroke rehabilitation may need 15 to 30 sessions over several weeks. Dr. Sirish will assess your condition and give you an estimated treatment plan in your first visit.",
  },
  {
    question: "Is physiotherapy better than surgery for back pain?",
    answer:
      "In many cases, physiotherapy is the recommended first-line treatment before considering surgery. Studies show that 80 to 90 percent of back pain cases, including disc bulges and sciatica, respond well to physiotherapy. At Legend Physiotherapy we use spinal decompression, manual therapy and targeted exercises to help patients avoid surgery.",
  },
];

const conditions = [
  { name: "Back Pain", href: "/back-pain-physiotherapy-lb-nagar", desc: "Lower back strain, slip disc, lumbar spondylosis" },
  { name: "Knee Pain", href: "/knee-pain-physiotherapy-lb-nagar", desc: "Arthritis, ACL tear, meniscus injury, post-surgery" },
  { name: "Neck Pain", href: "/neck-pain-cervical-physiotherapy-lb-nagar", desc: "Cervical spondylosis, stiffness, whiplash" },
  { name: "Sciatica", href: "/sciatica-physiotherapy-lb-nagar", desc: "Nerve compression, leg pain, disc herniation" },
  { name: "Shoulder Pain", href: "/shoulder-pain-physiotherapy-lb-nagar", desc: "Frozen shoulder, rotator cuff, impingement" },
  { name: "Sports Injuries", href: "/sports-injury-rehabilitation-lb-nagar", desc: "ACL, ligament tears, muscle strains, sprains" },
  { name: "Neuro Rehab", href: "/neuro-rehabilitation-lb-nagar", desc: "Stroke, paralysis, Parkinson's, brain injury" },
  { name: "Post-Surgery", href: "/post-surgery-rehabilitation-lb-nagar", desc: "Knee replacement, hip replacement, spine surgery" },
];

const therapies = [
  { name: "Robotic Physiotherapy", desc: "Computer-assisted rehabilitation using robotic devices for precise, repetitive movements that accelerate recovery." },
  { name: "Laser Therapy", desc: "Low-level laser treatment that reduces inflammation, eases pain and speeds tissue healing at the cellular level." },
  { name: "Shockwave Therapy", desc: "Acoustic wave treatment for chronic tendon injuries, plantar fasciitis, tennis elbow and calcific shoulder." },
  { name: "Spinal Decompression", desc: "Mechanised traction that gently stretches the spine to relieve pressure on compressed discs and nerves." },
  { name: "Dry Needling", desc: "Precise needle insertion into trigger points to release muscle tension, reduce pain and restore normal movement." },
  { name: "Manual Therapy", desc: "Hands-on joint mobilisation and soft tissue techniques to reduce stiffness and restore pain-free movement." },
  { name: "Cupping Therapy", desc: "Suction-based treatment that improves blood flow, reduces muscle tension and promotes faster healing." },
  { name: "Electrotherapy (TENS/IFT)", desc: "Electrical stimulation for pain relief, muscle strengthening and nerve function improvement." },
];

const areas = [
  "LB Nagar", "Kothapet", "Dilsukhnagar", "Nagole", "Vanasthalipuram", "Uppal", "Habsiguda",
  "Tarnaka", "Secunderabad", "Ameerpet", "Kukatpally", "Miyapur", "Kondapur", "Gachibowli",
  "Madhapur", "Banjara Hills", "Jubilee Hills", "Mehdipatnam", "Attapur", "Tolichowki",
  "Manikonda", "Kompally", "Begumpet", "Abids", "Himayatnagar", "Khairatabad", "ECIL",
  "Hayathnagar", "Boduppal", "Nacharam", "Malakpet", "Charminar",
];

export default function BestPhysiotherapyHyderabad() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  const medicalPageSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: "Best Physiotherapy in Hyderabad",
    description: "Comprehensive guide to Legend Physiotherapy, the best-rated physiotherapy clinic in Hyderabad with 20+ years experience.",
    url: "https://www.legendphysiotherapy.com/best-physiotherapy-in-hyderabad",
    about: {
      "@type": "Physiotherapy",
      name: "Legend Physiotherapy Ortho and Neuro Pain Management Clinic",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Shop No.2 Ground Floor, Road No: 4, HNO: 11-13-714, Dwarka Nagar, Green Hills Colony, Kothapet",
        addressLocality: "L. B. Nagar, Hyderabad",
        addressRegion: "Telangana",
        postalCode: "500102",
        addressCountry: "IN",
      },
      telephone: "+918143015455",
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5.0",
        reviewCount: "492",
        bestRating: "5",
      },
    },
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalPageSchema) }} />

      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-6">
            <span className="text-amber-300 text-sm">★★★★★</span>
            <span className="text-white/90 text-sm font-medium">5.0 Rating · 492+ Google Reviews</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-5 leading-tight" style={{ fontFamily: "var(--font-poppins)" }}>
            Best Physiotherapy in Hyderabad
          </h1>
          <p className="text-lg sm:text-xl text-white/90 max-w-3xl mb-8 leading-relaxed">
            Legend Physiotherapy Ortho and Neuro Pain Management Clinic — 20+ years of expert orthopaedic,
            neurological and sports rehabilitation. Clinic visits in Kothapet and home visits across all of Hyderabad.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="tel:+918143015455" className="bg-white text-blue-600 px-8 py-3.5 rounded-lg font-bold hover:bg-blue-50 transition-colors text-sm sm:text-base">
              Call +91 81430 15455
            </a>
            <a href="https://wa.me/918143015455" target="_blank" rel="noopener noreferrer" className="bg-green-500 text-white px-8 py-3.5 rounded-lg font-bold hover:bg-green-600 transition-colors text-sm sm:text-base">
              WhatsApp Us
            </a>
            <Link href="/book-appointment" className="bg-blue-800 text-white px-8 py-3.5 rounded-lg font-bold hover:bg-blue-900 transition-colors text-sm sm:text-base">
              Book Appointment
            </Link>
          </div>
        </div>
      </section>

      {/* Why Legend is the Best */}
      <article className="max-w-5xl mx-auto px-6 py-14">
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6" style={{ fontFamily: "var(--font-poppins)" }}>
            Why Legend Physiotherapy Is Hyderabad&apos;s Top-Rated Clinic
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Finding the right physiotherapist can make the difference between months of pain and a full recovery.
            Legend Physiotherapy Ortho and Neuro Pain Management Clinic in Kothapet, LB Nagar has earned a perfect
            5.0 Google rating from 492+ patients because of three things: accurate diagnosis, effective treatment
            and genuine care.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Led by <strong>Dr. Sirish</strong>, a senior physiotherapist with over 20 years of clinical experience,
            our team treats the full range of orthopaedic, neurological and sports conditions. From a young IT
            professional with desk-related back pain to a grandparent recovering from a stroke, every patient gets
            a treatment plan built around their specific condition, goals and lifestyle.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Our clinic is equipped with advanced technology including robotic physiotherapy, laser therapy,
            shockwave therapy, spinal decompression and electrotherapy. For patients who cannot travel, we bring
            the same expert care to your home — covering every locality in Hyderabad.
          </p>

          {/* Key Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 my-10">
            {[
              { number: "20+", label: "Years Experience" },
              { number: "5,000+", label: "Patients Treated" },
              { number: "5.0", label: "Google Rating" },
              { number: "492+", label: "Google Reviews" },
            ].map((stat) => (
              <div key={stat.label} className="bg-blue-50 rounded-xl p-5 text-center border border-blue-100">
                <div className="text-2xl sm:text-3xl font-bold text-blue-600" style={{ fontFamily: "var(--font-poppins)" }}>{stat.number}</div>
                <div className="text-gray-600 text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Conditions We Treat */}
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-14 mb-6" style={{ fontFamily: "var(--font-poppins)" }}>
            Conditions We Treat
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Our physiotherapists treat a wide range of musculoskeletal and neurological conditions.
            Click on any condition below to learn more about our specialised treatment approach.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mb-10 not-prose">
            {conditions.map((c) => (
              <Link key={c.name} href={c.href} className="block bg-white border border-gray-200 rounded-xl p-5 hover:border-blue-300 hover:shadow-md transition-all group">
                <h3 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-1">{c.name}</h3>
                <p className="text-gray-500 text-sm">{c.desc}</p>
              </Link>
            ))}
          </div>

          <p className="text-gray-700 leading-relaxed mb-6">
            We also treat <strong>frozen shoulder</strong>, <strong>arthritis and osteoarthritis</strong>,{" "}
            <strong>plantar fasciitis</strong>, <strong>tennis and golfer&apos;s elbow</strong>,{" "}
            <strong>carpal tunnel syndrome</strong>, <strong>TMJ disorders</strong>, <strong>vertigo and balance problems</strong>,{" "}
            <strong>hip pain</strong>, <strong>disc bulge</strong>, <strong>fibromyalgia</strong>,{" "}
            <strong>Parkinson&apos;s disease</strong>, <strong>Bell&apos;s palsy</strong> and{" "}
            <strong>spinal cord injuries</strong>. If you are unsure whether physiotherapy can help your condition,
            call us at +91 81430 15455 for a free consultation.
          </p>

          {/* Treatment Technologies */}
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-14 mb-6" style={{ fontFamily: "var(--font-poppins)" }}>
            Advanced Treatment Technologies
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Legend Physiotherapy uses the latest evidence-based technologies to deliver faster and more effective
            results. Our clinic is one of the few in Hyderabad to offer all of the following under one roof:
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mb-10 not-prose">
            {therapies.map((t) => (
              <div key={t.name} className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-bold text-gray-900 mb-2">{t.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>

          {/* Home Visit Physiotherapy */}
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-14 mb-6" style={{ fontFamily: "var(--font-poppins)" }}>
            Home Visit Physiotherapy Across Hyderabad
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Not every patient can travel to a clinic. Elderly patients, post-surgical cases, stroke survivors
            and those with severe pain often need treatment at home. Legend Physiotherapy provides professional
            home visit physiotherapy across every area of Hyderabad and Secunderabad.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Our physiotherapist arrives at your door with portable equipment — including TENS machines,
            therapeutic ultrasound, resistance bands and exercise tools — so you receive the same quality
            of care as a clinic visit. Home visits are available 7 days a week, 9 AM to 9 PM.
          </p>

          <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 my-8">
            <h3 className="font-bold text-gray-900 mb-3">Areas We Cover for Home Visits</h3>
            <div className="flex flex-wrap gap-2">
              {areas.map((area) => (
                <Link key={area} href={`/locations/${area.toLowerCase().replace(/\s+/g, "-")}`} className="bg-white text-gray-700 px-3 py-1.5 rounded-lg text-sm border border-gray-200 hover:border-blue-300 hover:text-blue-600 transition-colors">
                  {area}
                </Link>
              ))}
              <span className="text-gray-500 text-sm px-3 py-1.5">and all other areas</span>
            </div>
          </div>

          {/* Why Choose Section */}
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-14 mb-6" style={{ fontFamily: "var(--font-poppins)" }}>
            Why Patients Choose Legend Physiotherapy
          </h2>
          <div className="space-y-4 mb-10">
            {[
              { title: "20+ Years of Experience", desc: "Dr. Sirish brings two decades of clinical expertise in orthopaedic and neurological rehabilitation. Thousands of patients successfully treated." },
              { title: "5.0 Google Rating with 492+ Reviews", desc: "A perfect score from nearly 500 patients speaks for itself. We are one of the highest-rated physiotherapy clinics in all of Hyderabad." },
              { title: "Advanced Equipment Under One Roof", desc: "Robotic physiotherapy, laser therapy, shockwave therapy, spinal decompression and more — technology that most clinics in Hyderabad do not offer." },
              { title: "Home Visits Across All of Hyderabad", desc: "Professional physiotherapy at your doorstep. Available 7 days a week with full portable equipment for patients who cannot travel." },
              { title: "Personalised Treatment Plans", desc: "No two patients are the same. Every treatment plan is built around your specific condition, pain level, goals and daily routine." },
              { title: "Open 7 Days, 9 AM to 9 PM", desc: "Flexible hours that work around your schedule. No need to miss work for your physiotherapy sessions." },
            ].map((item) => (
              <div key={item.title} className="flex gap-4 items-start">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-3.5 h-3.5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Clinic Location */}
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-14 mb-6" style={{ fontFamily: "var(--font-poppins)" }}>
            Visit Our Clinic
          </h2>
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-10">
            <h3 className="font-bold text-gray-900 text-lg mb-2">Legend Physiotherapy Ortho and Neuro Pain Management Clinic</h3>
            <p className="text-gray-700 mb-3">
              Shop No.2 Ground Floor, Road No: 4, HNO: 11-13-714<br />
              Dwarka Nagar, Green Hills Colony, Kothapet<br />
              L. B. Nagar, Hyderabad, Telangana 500102
            </p>
            <p className="text-gray-700 mb-1"><strong>Phone:</strong> <a href="tel:+918143015455" className="text-blue-600 hover:underline">+91 81430 15455</a></p>
            <p className="text-gray-700 mb-4"><strong>Hours:</strong> Monday to Sunday, 9:00 AM – 9:00 PM</p>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://www.google.com/maps/place/Legend+Physiotherapy+Ortho+and+Neuro+Pain+Management+Clinic+%7C+Kothapet+%7C+Lb+Nagar/@17.3597024,78.5457583,17z"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-5 py-2.5 rounded-lg font-bold text-sm hover:bg-blue-700 transition-colors"
              >
                Get Directions
              </a>
              <a href="tel:+918143015455" className="bg-green-600 text-white px-5 py-2.5 rounded-lg font-bold text-sm hover:bg-green-700 transition-colors">
                Call Now
              </a>
            </div>
          </div>

          {/* FAQ Section */}
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-14 mb-6" style={{ fontFamily: "var(--font-poppins)" }}>
            Frequently Asked Questions
          </h2>
          <div className="space-y-4 mb-10 not-prose">
            {faqs.map((faq) => (
              <details key={faq.question} className="bg-gray-50 border border-gray-200 rounded-xl overflow-hidden group">
                <summary className="px-6 py-4 cursor-pointer font-semibold text-gray-900 hover:text-blue-600 transition-colors flex items-center justify-between">
                  {faq.question}
                  <svg className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-4 text-gray-700 text-sm leading-relaxed border-t border-gray-200 pt-3">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>

          {/* Final CTA */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-center text-white my-10">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3" style={{ fontFamily: "var(--font-poppins)" }}>
              Ready to Start Your Recovery?
            </h2>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Whether you need clinic treatment or home visits, Legend Physiotherapy is here to help.
              Call us today for a consultation with Dr. Sirish.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a href="tel:+918143015455" className="bg-white text-blue-600 px-8 py-3.5 rounded-lg font-bold hover:bg-blue-50 transition-colors">
                Call +91 81430 15455
              </a>
              <a href="https://wa.me/918143015455" target="_blank" rel="noopener noreferrer" className="bg-green-500 text-white px-8 py-3.5 rounded-lg font-bold hover:bg-green-600 transition-colors">
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
}
