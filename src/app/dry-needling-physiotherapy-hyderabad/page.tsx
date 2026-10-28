import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dry Needling Therapy in Hyderabad | Legend Physiotherapy",
  description:
    "Dry needling for muscle knots and trigger points in Hyderabad. Fast pain relief for back, neck and shoulder tension. Call +91 81430 15455.",
  keywords: [
    "dry needling Hyderabad",
    "trigger point therapy Hyderabad",
    "myofascial release Hyderabad",
    "dry needling physiotherapy",
    "muscle knots treatment Hyderabad",
    "dry needling near me",
    "intramuscular stimulation Hyderabad",
  ],
  alternates: { canonical: "/dry-needling-physiotherapy-hyderabad" },
  openGraph: {
    title: "Dry Needling Therapy in Hyderabad | Legend Physiotherapy",
    description:
      "Dry needling for trigger points, muscle knots and myofascial pain at Legend Physiotherapy Kothapet, Hyderabad.",
    url: "/dry-needling-physiotherapy-hyderabad",
    siteName: "Legend Physiotherapy",
    locale: "en_IN",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Dry Needling Therapy at Legend Physiotherapy Hyderabad" }],
  },
};

const faqs = [
  {
    question: "Is dry needling painful?",
    answer:
      "Most patients feel a brief cramping or twitch response when the needle reaches the trigger point. This lasts only a second or two. The needles used are very thin — much thinner than injection needles — so insertion itself is usually barely felt. Many patients describe the overall experience as mildly uncomfortable rather than painful.",
  },
  {
    question: "How is dry needling different from acupuncture?",
    answer:
      "Although both use thin needles, they are based on different principles. Acupuncture follows traditional Chinese meridian theory. Dry needling targets specific muscular trigger points identified through a physiotherapy assessment. The goal is to release tight bands of muscle, improve blood flow and reduce pain using modern musculoskeletal science.",
  },
  {
    question: "How many dry needling sessions will I need?",
    answer:
      "Many patients notice improvement after one to three sessions. Chronic conditions with multiple trigger points may need four to six sessions. Your physiotherapist will reassess after each visit and adjust the treatment plan. Dry needling is usually combined with stretching and strengthening exercises for lasting results.",
  },
  {
    question: "What conditions does dry needling treat?",
    answer:
      "Dry needling is effective for chronic neck and shoulder tension, lower back pain with muscle spasm, tension headaches and migraines, tennis elbow, plantar fasciitis, IT band syndrome, jaw pain (TMJ), and post-surgical muscle tightness. It works well for any condition involving muscular trigger points.",
  },
  {
    question: "Are there any side effects of dry needling?",
    answer:
      "Mild soreness at the needle site for 24 to 48 hours is common, similar to post-exercise soreness. Occasional minor bruising may occur. Serious side effects are very rare when performed by a trained physiotherapist. We follow strict hygiene protocols and use single-use sterile needles for every patient.",
  },
];

export default function DryNeedlingPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: "Dry Needling Therapy in Hyderabad",
    description: "Dry needling therapy for trigger points and muscle pain at Legend Physiotherapy Hyderabad.",
    url: "https://www.legendphysiotherapy.com/dry-needling-physiotherapy-hyderabad",
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />

      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "var(--font-poppins)" }}>
            Dry Needling Therapy in Hyderabad
          </h1>
          <p className="text-lg text-white/90 max-w-2xl mb-6">
            Release stubborn muscle knots and trigger points with precise dry needling at Legend Physiotherapy, Kothapet, Hyderabad.
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
            What Is Dry Needling?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Dry needling is a modern, evidence-based treatment technique where thin, sterile needles are inserted directly into muscular trigger points — those tight, painful knots you can often feel under the skin. Unlike injections, no medication is delivered through the needle; the term &ldquo;dry&rdquo; refers to the absence of any injected substance.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            When a needle reaches a trigger point, it produces a brief &ldquo;twitch response&rdquo; — a quick involuntary contraction followed by immediate relaxation of the tight muscle band. This mechanical disruption increases local blood flow, releases trapped waste products and resets the shortened muscle fibres to their normal resting length.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4" style={{ fontFamily: "var(--font-poppins)" }}>
            How Dry Needling Works
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Trigger points form when muscle fibres become overloaded — from repetitive movements, poor posture, stress or injury. These knotted areas restrict blood flow, compress nearby nerves and send referred pain to other parts of the body. A trigger point in your upper trapezius, for example, can cause headaches that feel like they originate behind your eye.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            The needle produces three effects: first, the mechanical disruption breaks the contraction cycle in the knotted fibres. Second, the micro-lesion triggers a local healing response that brings fresh blood, oxygen and nutrients. Third, the stimulation of nerve endings alters pain signalling, producing an analgesic effect that can last well beyond the treatment session.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4" style={{ fontFamily: "var(--font-poppins)" }}>
            Conditions We Treat with Dry Needling
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
            <li><strong>Chronic neck and shoulder tension</strong> — desk workers, IT professionals and anyone with forward-head posture often develop trigger points in the upper trapezius, levator scapulae and suboccipital muscles.</li>
            <li><strong>Lower back pain with muscle spasm</strong> — trigger points in the quadratus lumborum, erector spinae and gluteal muscles contribute to persistent back stiffness.</li>
            <li><strong>Tension headaches and migraines</strong> — many headaches originate from trigger points in the neck and jaw muscles rather than the head itself.</li>
            <li><strong>Tennis elbow and golfer&apos;s elbow</strong> — dry needling of the forearm extensors or flexors can reduce pain and improve grip strength.</li>
            <li><strong>Plantar fasciitis</strong> — needling the calf muscles and intrinsic foot muscles can relieve heel pain that has not responded to stretching alone.</li>
            <li><strong>IT band syndrome</strong> — runners and cyclists benefit from needling of the tensor fasciae latae and vastus lateralis.</li>
            <li><strong>Jaw pain (TMJ disorders)</strong> — trigger points in the masseter and temporalis muscles are a common source of jaw clicking and pain.</li>
            <li><strong>Post-surgical tightness</strong> — scar tissue and muscle guarding after surgery respond well to targeted needling.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4" style={{ fontFamily: "var(--font-poppins)" }}>
            What to Expect During a Session
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Your physiotherapist begins with a hands-on assessment, palpating the affected muscles to identify trigger points. The area is cleaned and single-use, sterile needles are inserted — each one thinner than a standard sewing needle. You may feel a dull ache or brief twitch when the trigger point is reached. The needles remain in place for a few seconds to a few minutes depending on the technique used.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            A typical session lasts 30 to 45 minutes including assessment, needling and follow-up stretching or manual therapy. Most patients feel immediate improvement in their range of motion and a reduction in referred pain patterns. Mild post-treatment soreness — similar to the feeling after a strong massage — is normal and resolves within 24 to 48 hours.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4" style={{ fontFamily: "var(--font-poppins)" }}>
            Why Choose Legend Physiotherapy for Dry Needling
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
            <li><strong>Trained practitioners</strong> — our physiotherapists have specialised training in trigger point dry needling with a thorough understanding of anatomy and needle safety.</li>
            <li><strong>Combined approach</strong> — dry needling is always part of a broader treatment plan that includes exercise, manual therapy and postural advice for lasting results.</li>
            <li><strong>Strict hygiene</strong> — we use single-use sterile needles, follow infection-control protocols and maintain a clean clinical environment.</li>
            <li><strong>20+ years of experience</strong> — Dr Sirish and the team have treated thousands of patients with musculoskeletal pain conditions.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4" style={{ fontFamily: "var(--font-poppins)" }}>
            Clinic Visits and Home Visits
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Our Kothapet clinic near LB Nagar is open every day from 9 am to 9 pm. Dry needling is primarily a clinic-based treatment due to the equipment and hygiene requirements. We also offer home visit physiotherapy across Hyderabad for exercise therapy and manual treatment. Call{" "}
            <a href="tel:+918143015455" className="text-blue-600 font-semibold hover:underline">+91 81430 15455</a>{" "}
            to book your appointment.
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
            <li><a href="/back-pain-physiotherapy-lb-nagar" className="text-blue-600 hover:underline">Back Pain Physiotherapy</a></li>
            <li><a href="/neck-pain-cervical-physiotherapy-lb-nagar" className="text-blue-600 hover:underline">Neck Pain & Cervical Physiotherapy</a></li>
            <li><a href="/shoulder-pain-physiotherapy-lb-nagar" className="text-blue-600 hover:underline">Shoulder Pain Physiotherapy</a></li>
            <li><a href="/sports-injury-rehabilitation-lb-nagar" className="text-blue-600 hover:underline">Sports Injury Rehabilitation</a></li>
            <li><a href="/contact" className="text-blue-600 hover:underline">Contact Us</a></li>
          </ul>
        </section>

        {/* Dr Sirish Bio */}
        <section className="mt-12 bg-blue-50 rounded-2xl p-8 border border-blue-100">
          <h2 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: "var(--font-poppins)" }}>
            Your Physiotherapist — Dr Sirish
          </h2>
          <p className="text-gray-700 text-sm leading-relaxed mb-2">
            <strong>B.P.T, M.Sc Sports (London)</strong> — Senior Physiotherapist with 20+ years of experience in orthopaedic and neurological rehabilitation. Dr Sirish has advanced training in dry needling and trigger point therapy, helping thousands of patients find relief from chronic muscle pain.
          </p>
          <p className="text-gray-700 text-sm leading-relaxed">
            Clinic: Shop No. 2, Ground Floor, H.No. 11-13-714, Road No. 4, Dwarka Nagar, Green Hills Colony, Kothapet, Hyderabad 500102. Open daily 9 am – 9 pm.
          </p>
        </section>

        {/* CTA */}
        <section className="mt-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-3" style={{ fontFamily: "var(--font-poppins)" }}>
            Book a Dry Needling Session
          </h2>
          <p className="text-white/90 mb-6">
            Call +91 81430 15455 or book online. We are open every day, 9 am to 9 pm.
          </p>
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
