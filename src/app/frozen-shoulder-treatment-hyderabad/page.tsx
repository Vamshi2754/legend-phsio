import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frozen Shoulder Treatment in Hyderabad | Legend Physiotherapy",
  description:
    "Frozen shoulder treatment by expert physiotherapists in Hyderabad. Adhesive capsulitis, shoulder stiffness relief. Call +91 81430 15455.",
  keywords: [
    "frozen shoulder treatment Hyderabad",
    "adhesive capsulitis physiotherapy Hyderabad",
    "shoulder stiffness treatment Hyderabad",
    "shoulder pain physiotherapy Hyderabad",
    "frozen shoulder exercises Hyderabad",
    "shoulder mobility physiotherapy",
    "best physiotherapy for frozen shoulder Hyderabad",
  ],
  alternates: { canonical: "/frozen-shoulder-treatment-hyderabad" },
  openGraph: {
    title: "Frozen Shoulder Treatment in Hyderabad | Legend Physiotherapy",
    description:
      "Expert frozen shoulder and adhesive capsulitis treatment at Legend Physiotherapy, Kothapet, Hyderabad. Home visits available.",
    url: "/frozen-shoulder-treatment-hyderabad",
    siteName: "Legend Physiotherapy",
    locale: "en_IN",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Frozen Shoulder Treatment at Legend Physiotherapy Hyderabad" }],
  },
};

const faqs = [
  {
    question: "How long does frozen shoulder take to heal?",
    answer:
      "Frozen shoulder typically goes through three stages — freezing, frozen and thawing — over 12 to 24 months if left untreated. With consistent physiotherapy, the recovery time is often reduced significantly. Most patients see noticeable improvement in range of motion within 6 to 12 weeks of regular treatment.",
  },
  {
    question: "Can physiotherapy cure frozen shoulder without surgery?",
    answer:
      "Yes. The majority of frozen shoulder cases respond well to physiotherapy alone. Treatment includes progressive stretching, joint mobilisation and strengthening exercises. Surgery is only considered in rare cases where physiotherapy has not helped after several months of consistent treatment.",
  },
  {
    question: "Is frozen shoulder treatment painful?",
    answer:
      "Treatment is kept within a tolerable range. Your physiotherapist will progress stretches gradually to avoid flare-ups. Some discomfort during mobilisation is normal, but the goal is always to work within your pain limits. Heat therapy and gentle movements are used to minimise discomfort during sessions.",
  },
  {
    question: "Can I get frozen shoulder treatment at home?",
    answer:
      "Yes. We offer home visit physiotherapy across Hyderabad including LB Nagar, Dilsukhnagar, Nagole, Secunderabad, Kukatpally, Gachibowli and other areas. Our therapist brings the necessary equipment for your treatment at home. Call +91 81430 15455 to book a home visit.",
  },
  {
    question: "What causes frozen shoulder?",
    answer:
      "Frozen shoulder occurs when the capsule surrounding the shoulder joint thickens and tightens. It is more common in people with diabetes, thyroid disorders, after shoulder surgery or prolonged immobilisation. Women over 40 are more commonly affected. The exact cause is not always clear.",
  },
];

export default function FrozenShoulderPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  const medicalSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: "Frozen Shoulder Treatment in Hyderabad",
    description: "Expert frozen shoulder and adhesive capsulitis treatment at Legend Physiotherapy Hyderabad.",
    url: "https://www.legendphysiotherapy.com/frozen-shoulder-treatment-hyderabad",
    medicalAudience: { "@type": "MedicalAudience", audienceType: "Patient" },
    lastReviewed: "2026-10-28",
    provider: {
      "@type": "Physiotherapy",
      name: "Legend Physiotherapy Ortho and Neuro Pain Management Clinic",
      telephone: "+918143015455",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Shop No.2 Ground Floor, Road No: 4, HNO: 11-13-714, Dwarka Nagar, Green Hills Colony, Kothapet",
        addressLocality: "L. B. Nagar, Hyderabad",
        addressRegion: "Telangana",
        postalCode: "500102",
        addressCountry: "IN",
      },
    },
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalSchema) }} />

      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "var(--font-poppins)" }}>
            Frozen Shoulder Treatment in Hyderabad
          </h1>
          <p className="text-lg text-white/90 max-w-2xl mb-6">
            Regain full shoulder movement with expert physiotherapy for frozen shoulder and adhesive capsulitis at Legend Physiotherapy, Kothapet.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="tel:+918143015455" className="bg-white text-blue-600 px-6 py-3 rounded-lg font-bold hover:bg-blue-50 transition-colors text-sm sm:text-base">
              Call +91 81430 15455
            </a>
            <a href="https://wa.me/918143015455" target="_blank" rel="noopener noreferrer" className="bg-blue-800 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-900 transition-colors text-sm sm:text-base">
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* Content */}
      <article className="max-w-4xl mx-auto px-6 py-12">
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4" style={{ fontFamily: "var(--font-poppins)" }}>
            What Is Frozen Shoulder?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Frozen shoulder, medically known as adhesive capsulitis, is a condition where the connective tissue surrounding the shoulder joint becomes inflamed, thickened and tight. This causes progressive pain and stiffness that makes everyday tasks — combing hair, reaching behind your back, dressing — difficult or impossible.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            At Legend Physiotherapy Ortho and Neuro Pain Management Clinic in Hyderabad, we treat frozen shoulder at every stage with a structured, evidence-based approach that restores movement without surgery.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4" style={{ fontFamily: "var(--font-poppins)" }}>
            The Three Stages of Frozen Shoulder
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
            <li>
              <strong>Freezing stage (2–9 months)</strong> — Pain develops gradually and worsens over time. Movement begins to reduce. Night pain is common and often disturbs sleep.
            </li>
            <li>
              <strong>Frozen stage (4–12 months)</strong> — Pain may ease slightly, but the shoulder becomes very stiff. Daily activities become difficult. The shoulder joint has significant loss of range of motion in all directions.
            </li>
            <li>
              <strong>Thawing stage (5–24 months)</strong> — Movement slowly returns. Pain continues to decrease. With physiotherapy, this stage can be shortened considerably.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4" style={{ fontFamily: "var(--font-poppins)" }}>
            Who Gets Frozen Shoulder?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Frozen shoulder affects approximately 2–5% of the general population and is more common in:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
            <li>People aged 40–65, with women affected more often than men</li>
            <li>Diabetic patients — up to 20% of diabetics develop frozen shoulder</li>
            <li>Those with thyroid disorders (hypothyroidism or hyperthyroidism)</li>
            <li>People who have had shoulder surgery, arm fracture or prolonged immobilisation</li>
            <li>Patients recovering from cardiac surgery or stroke</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4" style={{ fontFamily: "var(--font-poppins)" }}>
            Our Treatment Approach
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            At Legend Physiotherapy, Dr Sirish designs a personalised treatment plan based on which stage of frozen shoulder you are in. Treatment includes:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
            <li>
              <strong>Joint mobilisation</strong> — gentle, graded movements applied to the shoulder joint to gradually increase range of motion. The intensity progresses as tolerance improves.
            </li>
            <li>
              <strong>Stretching exercises</strong> — pendulum exercises, wall walks, towel stretches and cross-body stretches designed to loosen the tight capsule progressively.
            </li>
            <li>
              <strong>Strengthening exercises</strong> — once range of motion improves, rotator cuff and scapular strengthening exercises are added to stabilise the joint and prevent recurrence.
            </li>
            <li>
              <strong>Heat therapy and ultrasound</strong> — used before mobilisation to relax tissues and reduce pain during treatment.
            </li>
            <li>
              <strong>Laser therapy</strong> — low-level laser therapy to reduce inflammation and accelerate tissue healing in the joint capsule.
            </li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-6">
            Your home exercise programme is updated at every visit. Consistency with daily stretches between sessions is key to faster recovery.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4" style={{ fontFamily: "var(--font-poppins)" }}>
            How Long Does Treatment Take?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Most patients notice meaningful improvement in shoulder movement within 6 to 12 weeks of regular physiotherapy. The total treatment duration depends on the stage at which you start treatment and how consistently you follow the home exercise programme. Early-stage frozen shoulder responds faster — patients in the freezing stage often recover in 3 to 4 months with physiotherapy, compared to 12 to 18 months without treatment.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4" style={{ fontFamily: "var(--font-poppins)" }}>
            Clinic Visits and Home Visits Across Hyderabad
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Our clinic in Kothapet, near LB Nagar, is equipped with advanced treatment equipment and is open every day from 9 am to 9 pm. We also offer home visit physiotherapy across Hyderabad — LB Nagar, Dilsukhnagar, Nagole, Vanasthalipuram, Uppal, Secunderabad, Kukatpally, Gachibowli, Kondapur, Madhapur and all other areas. Call{" "}
            <a href="tel:+918143015455" className="text-blue-600 font-semibold hover:underline">
              +91 81430 15455
            </a>{" "}
            to book a clinic or home appointment.
          </p>
        </div>

        {/* FAQ Section */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6" style={{ fontFamily: "var(--font-poppins)" }}>
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-gray-200 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Internal Links */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: "var(--font-poppins)" }}>
            Related Pages
          </h2>
          <ul className="space-y-2">
            <li><a href="/shoulder-pain-physiotherapy-lb-nagar" className="text-blue-600 hover:underline">Shoulder Pain Physiotherapy</a></li>
            <li><a href="/neck-pain-cervical-physiotherapy-lb-nagar" className="text-blue-600 hover:underline">Neck Pain & Cervical Physiotherapy</a></li>
            <li><a href="/post-surgery-rehabilitation-lb-nagar" className="text-blue-600 hover:underline">Post-Surgery Rehabilitation</a></li>
            <li><a href="/arthritis-physiotherapy-hyderabad" className="text-blue-600 hover:underline">Arthritis Physiotherapy</a></li>
            <li><a href="/book-appointment" className="text-blue-600 hover:underline">Book an Appointment</a></li>
          </ul>
        </section>

        {/* Dr Sirish Bio */}
        <section className="mt-12 bg-blue-50 rounded-2xl p-8 border border-blue-100">
          <h2 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: "var(--font-poppins)" }}>
            Your Physiotherapist — Dr Sirish
          </h2>
          <p className="text-gray-700 text-sm leading-relaxed mb-2">
            <strong>B.P.T, M.Sc Sports (London)</strong> — Senior Physiotherapist with 20+ years of experience in orthopaedic and neurological rehabilitation. Dr Sirish has treated thousands of frozen shoulder cases and specialises in restoring full shoulder mobility without surgery.
          </p>
          <p className="text-gray-700 text-sm leading-relaxed">
            Clinic: Shop No. 2, Ground Floor, H.No. 11-13-714, Road No. 4, Dwarka Nagar, Green Hills Colony, Kothapet, Hyderabad 500102. Open daily 9 am – 9 pm.
          </p>
        </section>

        {/* CTA */}
        <section className="mt-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-3" style={{ fontFamily: "var(--font-poppins)" }}>
            Book a Frozen Shoulder Assessment
          </h2>
          <p className="text-white/90 mb-6">
            Call +91 81430 15455 or book online. We are open every day, 9 am to 9 pm.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="tel:+918143015455" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold hover:bg-blue-50 transition-colors">
              Call Now
            </a>
            <a href="/book-appointment" className="bg-blue-800 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-900 transition-colors">
              Book Online
            </a>
          </div>
        </section>

        {/* Map */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: "var(--font-poppins)" }}>
            Find Us
          </h2>
          <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200 h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.5!2d78.5457583!3d17.3597024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb990043784b77%3A0x55126327d4caeb32!2sLegend%20Physiotherapy%20Ortho%20and%20Neuro%20Pain%20Management%20Clinic%20%7C%20Kothapet%20%7C%20Lb%20Nagar!5e0!3m2!1sen!2sin!4v1"
              width="100%" height="400" style={{ border: 0 }} loading="lazy" referrerPolicy="no-referrer-when-downgrade"
              title="Legend Physiotherapy, Kothapet on Google Maps"
            />
          </div>
        </section>
      </article>

      <Footer />
    </div>
  );
}
