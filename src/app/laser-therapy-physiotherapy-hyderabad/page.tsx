import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Laser Therapy for Pain Relief in Hyderabad | Legend Physiotherapy",
  description:
    "Low-level laser therapy (LLLT) for arthritis, tendinitis and chronic pain in Hyderabad. Non-invasive, drug-free pain relief. Call +91 81430 15455.",
  keywords: [
    "laser therapy Hyderabad",
    "LLLT Hyderabad",
    "cold laser therapy Hyderabad",
    "photobiomodulation Hyderabad",
    "laser physiotherapy",
    "low level laser treatment",
    "laser pain relief Hyderabad",
  ],
  alternates: { canonical: "/laser-therapy-physiotherapy-hyderabad" },
  openGraph: {
    title: "Laser Therapy for Pain Relief in Hyderabad | Legend Physiotherapy",
    description:
      "Non-invasive laser therapy for joint pain, tendinitis and tissue healing at Legend Physiotherapy Kothapet, Hyderabad.",
    url: "/laser-therapy-physiotherapy-hyderabad",
    siteName: "Legend Physiotherapy",
    locale: "en_IN",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Laser Therapy at Legend Physiotherapy Hyderabad" }],
  },
};

const faqs = [
  {
    question: "What is low-level laser therapy?",
    answer:
      "Low-level laser therapy (LLLT), also called cold laser or photobiomodulation, uses specific wavelengths of light to penetrate the skin and stimulate cellular repair. Unlike surgical lasers, LLLT does not cut or burn tissue — the energy levels are low enough to promote healing without generating heat. The light is absorbed by mitochondria in your cells, boosting energy production and accelerating the body's natural repair processes.",
  },
  {
    question: "Is laser therapy safe?",
    answer:
      "Yes, LLLT is considered very safe when administered by a trained physiotherapist. It is non-invasive, painless and has no known serious side effects. Protective eyewear is worn during treatment to shield the eyes from the laser beam. It is not used over cancerous lesions, directly over the thyroid gland, or during pregnancy over the abdomen.",
  },
  {
    question: "How many laser therapy sessions will I need?",
    answer:
      "Most patients benefit from six to twelve sessions, typically two to three times per week. Acute conditions such as a fresh muscle strain may respond in fewer sessions, while chronic pain or arthritis may need a longer course. Your physiotherapist will monitor your progress and adjust the treatment plan accordingly.",
  },
  {
    question: "What conditions can laser therapy treat?",
    answer:
      "LLLT is effective for osteoarthritis and rheumatoid arthritis, tendinitis (Achilles, rotator cuff, elbow), bursitis, chronic neck and lower back pain, carpal tunnel syndrome, neuropathic pain, wound healing and post-surgical tissue repair. It reduces inflammation, accelerates tissue repair and provides pain relief without medication.",
  },
  {
    question: "Does laser therapy hurt?",
    answer:
      "No. Most patients feel nothing at all during treatment — occasionally a mild warmth or tingling sensation in the treated area. Each session takes 10 to 20 minutes depending on the area and condition being treated. There is no downtime, and you can return to your normal activities immediately afterwards.",
  },
];

export default function LaserTherapyPage() {
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
    name: "Laser Therapy for Pain Relief in Hyderabad",
    description: "Low-level laser therapy for chronic pain and tissue healing at Legend Physiotherapy Hyderabad.",
    url: "https://www.legendphysiotherapy.com/laser-therapy-physiotherapy-hyderabad",
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
            Laser Therapy for Pain Relief in Hyderabad
          </h1>
          <p className="text-lg text-white/90 max-w-2xl mb-6">
            Drug-free, non-invasive photobiomodulation therapy for arthritis, tendinitis and chronic pain at Legend Physiotherapy, Kothapet, Hyderabad.
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
            What Is Low-Level Laser Therapy?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Low-level laser therapy (LLLT) — also known as cold laser therapy or photobiomodulation — is a treatment that uses focused light at specific wavelengths (typically 630 to 1000 nanometres) to penetrate skin and soft tissue. Unlike high-powered surgical lasers, LLLT operates at energy levels that do not generate heat. Instead, the photons are absorbed by chromophores within your cells, particularly cytochrome c oxidase in the mitochondria.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            This absorption triggers a cascade of beneficial cellular events: increased production of adenosine triphosphate (ATP) — the energy currency of cells — enhanced nitric oxide release for better blood flow, and reduced production of inflammatory mediators. The net effect is faster tissue repair, reduced swelling and meaningful pain relief without drugs or injections.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4" style={{ fontFamily: "var(--font-poppins)" }}>
            How Laser Therapy Promotes Healing
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The therapeutic effects of LLLT work at multiple levels simultaneously. At the <strong>cellular level</strong>, increased ATP production gives damaged cells the energy they need to repair membranes, synthesise proteins and divide more efficiently. At the <strong>tissue level</strong>, enhanced collagen production strengthens tendons, ligaments and wound beds. At the <strong>circulatory level</strong>, improved microcirculation delivers more oxygen and nutrients while flushing away waste products.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            LLLT also modulates the immune response — it reduces excessive inflammation in acute injuries while stimulating immune cells in chronic wounds that have stalled. This dual action makes it useful across a broad range of conditions, from a fresh ankle sprain to long-standing osteoarthritis.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4" style={{ fontFamily: "var(--font-poppins)" }}>
            Conditions We Treat with Laser Therapy
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
            <li><strong>Osteoarthritis and rheumatoid arthritis</strong> — reduces joint inflammation, stiffness and pain in the knees, hips, hands and spine.</li>
            <li><strong>Tendinitis</strong> — rotator cuff tendinitis, Achilles tendinopathy, tennis elbow and golfer&apos;s elbow all respond well to LLLT.</li>
            <li><strong>Bursitis</strong> — shoulder, hip and knee bursitis benefit from the anti-inflammatory effects of laser therapy.</li>
            <li><strong>Chronic neck and lower back pain</strong> — particularly disc-related pain, facet joint irritation and myofascial pain syndromes.</li>
            <li><strong>Carpal tunnel syndrome</strong> — laser therapy can reduce swelling around the median nerve, improving sensation and grip strength.</li>
            <li><strong>Neuropathic pain</strong> — diabetic neuropathy and post-herpetic neuralgia may improve with a course of LLLT.</li>
            <li><strong>Wound healing</strong> — chronic ulcers, surgical wounds and skin grafts heal faster with laser-assisted tissue regeneration.</li>
            <li><strong>Post-surgical recovery</strong> — reducing scar tissue formation and accelerating return to function after knee, shoulder and spinal surgery.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4" style={{ fontFamily: "var(--font-poppins)" }}>
            What to Expect During a Session
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            You will be seated or lying down comfortably. Both you and the therapist wear protective eyewear. The laser probe is applied directly to the skin over the target area — no gel or preparation is needed. The probe is held in place or moved slowly across the treatment zone for 10 to 20 minutes, depending on the size of the area and the depth of the tissue being treated.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Most patients feel nothing during treatment; some notice a mild warmth or tingling. There is no pain, no recovery time and no restriction on activities afterwards. Sessions are typically scheduled two to three times per week, and improvement is often noticeable within the first three to four sessions.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4" style={{ fontFamily: "var(--font-poppins)" }}>
            Why Choose Legend Physiotherapy for Laser Therapy
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
            <li><strong>Clinical-grade equipment</strong> — we use calibrated therapeutic lasers at wavelengths and dosages proven effective in peer-reviewed research.</li>
            <li><strong>Integrated treatment</strong> — laser therapy is combined with exercise, manual therapy and lifestyle advice for comprehensive recovery.</li>
            <li><strong>20+ years of experience</strong> — Dr Sirish and the team have extensive experience managing chronic pain and post-surgical rehabilitation.</li>
            <li><strong>Convenient access</strong> — our Kothapet clinic near LB Nagar is open every day, 9 am to 9 pm, with home visits available across Hyderabad.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4" style={{ fontFamily: "var(--font-poppins)" }}>
            Book Your Laser Therapy Session
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            If you are dealing with chronic pain, arthritis or a tendon problem that has not improved with rest, laser therapy may help accelerate your recovery. Call{" "}
            <a href="tel:+918143015455" className="text-blue-600 font-semibold hover:underline">+91 81430 15455</a>{" "}
            to book your assessment.
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
            <li><a href="/dry-needling-physiotherapy-hyderabad" className="text-blue-600 hover:underline">Dry Needling Therapy</a></li>
            <li><a href="/shockwave-therapy-hyderabad" className="text-blue-600 hover:underline">Shockwave Therapy (ESWT)</a></li>
            <li><a href="/back-pain-physiotherapy-lb-nagar" className="text-blue-600 hover:underline">Back Pain Physiotherapy</a></li>
            <li><a href="/knee-pain-physiotherapy-lb-nagar" className="text-blue-600 hover:underline">Knee Pain Physiotherapy</a></li>
            <li><a href="/contact" className="text-blue-600 hover:underline">Contact Us</a></li>
          </ul>
        </section>

        {/* Dr Sirish Bio */}
        <section className="mt-12 bg-blue-50 rounded-2xl p-8 border border-blue-100">
          <h2 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: "var(--font-poppins)" }}>
            Your Physiotherapist — Dr Sirish
          </h2>
          <p className="text-gray-700 text-sm leading-relaxed mb-2">
            <strong>B.P.T, M.Sc Sports (London)</strong> — Senior Physiotherapist with 20+ years of experience in orthopaedic and neurological rehabilitation. Dr Sirish integrates laser therapy with evidence-based exercise and manual therapy for comprehensive patient outcomes.
          </p>
          <p className="text-gray-700 text-sm leading-relaxed">
            Clinic: Shop No. 2, Ground Floor, H.No. 11-13-714, Road No. 4, Dwarka Nagar, Green Hills Colony, Kothapet, Hyderabad 500102. Open daily 9 am – 9 pm.
          </p>
        </section>

        {/* CTA */}
        <section className="mt-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-3" style={{ fontFamily: "var(--font-poppins)" }}>
            Book a Laser Therapy Session
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
