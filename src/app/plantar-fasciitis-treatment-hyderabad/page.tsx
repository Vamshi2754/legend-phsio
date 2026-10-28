import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Plantar Fasciitis Treatment in Hyderabad | Legend Physiotherapy",
  description:
    "Plantar fasciitis and heel pain treatment in Hyderabad. Shockwave therapy, stretching, orthotics guidance. Call +91 81430 15455.",
  keywords: [
    "plantar fasciitis treatment Hyderabad",
    "heel pain treatment Hyderabad",
    "plantar fasciitis physiotherapy Hyderabad",
    "heel spur treatment Hyderabad",
    "foot pain physiotherapy Hyderabad",
    "shockwave therapy plantar fasciitis Hyderabad",
    "best treatment for heel pain Hyderabad",
  ],
  alternates: { canonical: "/plantar-fasciitis-treatment-hyderabad" },
  openGraph: {
    title: "Plantar Fasciitis Treatment in Hyderabad | Legend Physiotherapy",
    description: "Expert plantar fasciitis and heel pain treatment at Legend Physiotherapy, Kothapet, Hyderabad.",
    url: "/plantar-fasciitis-treatment-hyderabad",
    siteName: "Legend Physiotherapy",
    locale: "en_IN",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Plantar Fasciitis Treatment at Legend Physiotherapy Hyderabad" }],
  },
};

const faqs = [
  {
    question: "How long does plantar fasciitis take to heal?",
    answer:
      "With consistent physiotherapy, most patients experience significant improvement within 6 to 8 weeks. Complete resolution typically takes 3 to 6 months. Early treatment leads to faster recovery — patients who begin treatment within the first few weeks of symptoms often recover faster than those who wait months.",
  },
  {
    question: "Is walking good for plantar fasciitis?",
    answer:
      "Short, gentle walks on flat surfaces are generally fine and can aid recovery. However, long walks, walking barefoot on hard floors, or walking in unsupportive footwear can worsen the condition. Your physiotherapist will advise you on how much walking is appropriate based on your symptoms.",
  },
  {
    question: "What shoes are best for plantar fasciitis?",
    answer:
      "Shoes with good arch support, a cushioned heel and a slightly elevated heel-to-toe drop are recommended. Avoid flat shoes, flip-flops and walking barefoot on hard surfaces. Running shoes from reputable brands generally provide adequate support. We can advise on specific footwear during your session.",
  },
  {
    question: "Does shockwave therapy work for plantar fasciitis?",
    answer:
      "Yes. Extracorporeal shockwave therapy (ESWT) has strong evidence for treating chronic plantar fasciitis that has not responded to stretching and exercises alone. It works by stimulating blood flow and tissue healing in the plantar fascia. Most patients need 3 to 5 sessions spaced one week apart.",
  },
  {
    question: "Can I get plantar fasciitis treatment at home?",
    answer:
      "Yes. We offer home visit physiotherapy across Hyderabad. Our therapist brings portable ultrasound and taping supplies for your treatment at home. Home exercises — particularly calf stretches and plantar fascia stretches — are a critical part of recovery. Call +91 81430 15455 to book.",
  },
];

export default function PlantarFasciitisPage() {
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
    name: "Plantar Fasciitis Treatment in Hyderabad",
    description: "Expert plantar fasciitis and heel pain treatment at Legend Physiotherapy Hyderabad.",
    url: "https://www.legendphysiotherapy.com/plantar-fasciitis-treatment-hyderabad",
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
            Plantar Fasciitis Treatment in Hyderabad
          </h1>
          <p className="text-lg text-white/90 max-w-2xl mb-6">
            Get rid of heel pain with expert plantar fasciitis treatment at Legend Physiotherapy, Kothapet. Shockwave therapy, stretching programmes and orthotics guidance.
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
            What Is Plantar Fasciitis?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Plantar fasciitis is the most common cause of heel pain. It occurs when the plantar fascia — a thick band of tissue running along the bottom of the foot from the heel bone to the toes — becomes inflamed and irritated. The hallmark symptom is sharp, stabbing pain in the heel with the first steps in the morning or after sitting for a long time.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            At Legend Physiotherapy in Hyderabad, we treat plantar fasciitis with a combination of manual therapy, targeted exercises, shockwave therapy and patient education to resolve pain and prevent recurrence.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4" style={{ fontFamily: "var(--font-poppins)" }}>
            Who Gets Plantar Fasciitis?
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
            <li>People who stand or walk for long hours — teachers, shopkeepers, security guards, nurses</li>
            <li>Runners and athletes who increase training volume too quickly</li>
            <li>People who are overweight — extra body weight increases stress on the plantar fascia</li>
            <li>Those who wear flat or unsupportive footwear — flip-flops, worn-out shoes</li>
            <li>People with flat feet or very high arches</li>
            <li>Adults between 40 and 60 years of age are most commonly affected</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4" style={{ fontFamily: "var(--font-poppins)" }}>
            Our Treatment Approach
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Dr Sirish assesses your foot biomechanics, gait pattern and contributing factors before designing your treatment plan:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
            <li>
              <strong>Stretching programme</strong> — calf stretches (gastrocnemius and soleus) and plantar fascia-specific stretches performed multiple times daily. Tight calf muscles are one of the biggest contributors to plantar fasciitis.
            </li>
            <li>
              <strong>Shockwave therapy (ESWT)</strong> — for chronic cases that have not responded to stretching alone. Sound waves stimulate blood flow and tissue repair in the damaged fascia. Most patients need 3 to 5 sessions.
            </li>
            <li>
              <strong>Manual therapy</strong> — deep tissue massage of the plantar fascia, calf muscles and Achilles tendon to release tightness and improve tissue flexibility.
            </li>
            <li>
              <strong>Taping</strong> — low-dye taping to provide arch support and reduce strain on the plantar fascia during the acute phase.
            </li>
            <li>
              <strong>Strengthening exercises</strong> — intrinsic foot muscle strengthening (towel curls, marble pickups) and eccentric calf raises to build load tolerance.
            </li>
            <li>
              <strong>Footwear and orthotics advice</strong> — guidance on supportive shoes and whether custom or off-the-shelf insoles would help your specific foot type.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4" style={{ fontFamily: "var(--font-poppins)" }}>
            Heel Spurs and Plantar Fasciitis
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Many patients come to us worried about a heel spur seen on their X-ray. A heel spur is a bony growth on the heel bone, and while it often coexists with plantar fasciitis, it is usually not the source of pain. Research shows that heel spurs are found in many people who have no heel pain at all. Treatment focuses on the inflamed plantar fascia, not the spur itself. Surgery to remove a heel spur is rarely necessary.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4" style={{ fontFamily: "var(--font-poppins)" }}>
            Home Remedies That Help
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
            <li>Roll a frozen water bottle under your foot for 10 minutes to reduce inflammation</li>
            <li>Stretch your calves and plantar fascia before getting out of bed each morning</li>
            <li>Wear supportive shoes even inside the house — avoid walking barefoot on tiles</li>
            <li>Reduce standing time where possible and avoid hard surfaces</li>
            <li>Maintain a healthy weight to reduce load on the fascia</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4" style={{ fontFamily: "var(--font-poppins)" }}>
            Visit Our Clinic or Book a Home Visit
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Our clinic in Kothapet, near LB Nagar, is open every day from 9 am to 9 pm. We also offer home visit physiotherapy across Hyderabad — LB Nagar, Dilsukhnagar, Nagole, Vanasthalipuram, Uppal, Secunderabad, Kukatpally, Gachibowli, Kondapur, Madhapur and all other areas. Call{" "}
            <a href="tel:+918143015455" className="text-blue-600 font-semibold hover:underline">+91 81430 15455</a>{" "}
            to book.
          </p>
        </div>

        {/* FAQ */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6" style={{ fontFamily: "var(--font-poppins)" }}>Frequently Asked Questions</h2>
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
          <h2 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: "var(--font-poppins)" }}>Related Pages</h2>
          <ul className="space-y-2">
            <li><a href="/knee-pain-physiotherapy-lb-nagar" className="text-blue-600 hover:underline">Knee Pain Physiotherapy</a></li>
            <li><a href="/sports-injury-rehabilitation-lb-nagar" className="text-blue-600 hover:underline">Sports Injury Rehabilitation</a></li>
            <li><a href="/arthritis-physiotherapy-hyderabad" className="text-blue-600 hover:underline">Arthritis Physiotherapy</a></li>
            <li><a href="/back-pain-physiotherapy-lb-nagar" className="text-blue-600 hover:underline">Back Pain Physiotherapy</a></li>
            <li><a href="/book-appointment" className="text-blue-600 hover:underline">Book an Appointment</a></li>
          </ul>
        </section>

        {/* Dr Sirish Bio */}
        <section className="mt-12 bg-blue-50 rounded-2xl p-8 border border-blue-100">
          <h2 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: "var(--font-poppins)" }}>Your Physiotherapist — Dr Sirish</h2>
          <p className="text-gray-700 text-sm leading-relaxed mb-2">
            <strong>B.P.T, M.Sc Sports (London)</strong> — Senior Physiotherapist with 20+ years of experience in orthopaedic and sports rehabilitation. Dr Sirish specialises in foot and ankle conditions and has treated hundreds of plantar fasciitis cases successfully without surgery.
          </p>
          <p className="text-gray-700 text-sm leading-relaxed">
            Clinic: Shop No. 2, Ground Floor, H.No. 11-13-714, Road No. 4, Dwarka Nagar, Green Hills Colony, Kothapet, Hyderabad 500102. Open daily 9 am – 9 pm.
          </p>
        </section>

        {/* CTA */}
        <section className="mt-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-3" style={{ fontFamily: "var(--font-poppins)" }}>End Your Heel Pain Today</h2>
          <p className="text-white/90 mb-6">Call +91 81430 15455 or book online. We are open every day, 9 am to 9 pm.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="tel:+918143015455" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold hover:bg-blue-50 transition-colors">Call Now</a>
            <a href="/book-appointment" className="bg-blue-800 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-900 transition-colors">Book Online</a>
          </div>
        </section>

        {/* Map */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: "var(--font-poppins)" }}>Find Us</h2>
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
