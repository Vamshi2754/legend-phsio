import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Laser Therapy (LLLT) for Pain Relief in Hyderabad | Legend Physiotherapy",
  description:
    "Low-level laser therapy (LLLT) for arthritis, tendon pain and nerve conditions in Hyderabad. Safe, painless photobiomodulation at Legend Physiotherapy. Call +91 81430 15455.",
  keywords: [
    "laser therapy Hyderabad",
    "LLLT physiotherapy",
    "cold laser therapy",
    "photobiomodulation Hyderabad",
    "laser treatment for pain",
    "low level laser therapy near me",
  ],
  alternates: { canonical: "/laser-therapy-physiotherapy-hyderabad" },
  openGraph: {
    title: "Laser Therapy (LLLT) for Pain Relief in Hyderabad | Legend Physiotherapy",
    description:
      "Painless laser therapy for chronic pain and tissue healing at Legend Physiotherapy Kothapet, Hyderabad.",
    url: "/laser-therapy-physiotherapy-hyderabad",
    siteName: "Legend Physiotherapy",
    locale: "en_IN",
    type: "website",
  },
};

const faqs = [
  {
    question: "Is laser therapy safe?",
    answer:
      "Yes, low-level laser therapy is extremely safe when administered by a trained physiotherapist. It uses non-ionising light that does not cut, burn or damage tissue. The treatment is painless and has been used in physiotherapy for over 30 years with an excellent safety record. Protective eyewear is worn during treatment as a standard precaution.",
  },
  {
    question: "How does laser therapy reduce pain?",
    answer:
      "LLLT works through photobiomodulation — specific wavelengths of light are absorbed by mitochondria in your cells, boosting ATP production and cellular energy. This accelerates tissue repair, reduces inflammatory mediators, increases local blood flow and stimulates endorphin release. The combined effect is reduced pain, less swelling and faster healing.",
  },
  {
    question: "How is LLLT different from surgical laser?",
    answer:
      "Surgical lasers use high-power light to cut or cauterise tissue. Low-level laser therapy uses much lower power levels — typically 100 to 500 milliwatts — that do not generate heat or cause tissue damage. LLLT stimulates healing at the cellular level without any invasive action. You feel no pain and there is no recovery time needed.",
  },
  {
    question: "How many laser therapy sessions will I need?",
    answer:
      "Most conditions respond within six to ten sessions, typically administered two to three times per week. Acute injuries may improve in as few as three to four sessions. Chronic conditions like osteoarthritis often benefit from an initial course followed by periodic maintenance sessions. your physiotherapist will tailor the protocol to your specific condition.",
  },
  {
    question: "Which conditions respond best to laser therapy?",
    answer:
      "LLLT is particularly effective for osteoarthritis of the knee and hand, chronic tendinopathy (Achilles, rotator cuff, tennis elbow), carpal tunnel syndrome, neck and back pain, wound healing, nerve pain conditions and post-surgical inflammation. It works well as a standalone treatment or combined with exercise therapy and manual techniques.",
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

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "var(--font-poppins)" }}>
            Laser Therapy (LLLT) for Pain Relief in Hyderabad
          </h1>
          <p className="text-lg text-white/90 max-w-2xl mb-6">
            Safe, painless photobiomodulation therapy for chronic pain, arthritis and tissue healing at Legend Physiotherapy, Kothapet.
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
            Low-Level Laser Therapy (LLLT), also known as cold laser therapy or photobiomodulation, uses specific wavelengths of light &mdash; typically in the red (630-670 nm) and near-infrared (810-980 nm) spectrum &mdash; to stimulate cellular healing processes. Unlike surgical lasers, LLLT does not generate heat or damage tissue. Instead, the light energy is absorbed by chromophores within the mitochondria, enhancing cellular metabolism and accelerating natural repair.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            At Legend Physiotherapy, we use LLLT as part of an integrated treatment approach for conditions ranging from osteoarthritis and tendon injuries to nerve pain and post-surgical inflammation. The therapy is completely painless &mdash; most patients feel only a gentle warmth or nothing at all during treatment.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4" style={{ fontFamily: "var(--font-poppins)" }}>
            How Photobiomodulation Works
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            When laser light of the correct wavelength reaches damaged cells, it is absorbed by cytochrome c oxidase in the mitochondria &mdash; the energy-producing units of every cell. This triggers a cascade of beneficial effects: increased ATP production provides more energy for repair, nitric oxide release improves local blood circulation, reactive oxygen species activate signalling pathways that reduce inflammation, and growth factor expression is upregulated to promote tissue regeneration.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Clinical research supports LLLT for pain reduction and functional improvement. A meta-analysis in The Lancet found that LLLT reduces neck pain significantly more than placebo, while studies in the Annals of Internal Medicine demonstrate meaningful benefits for knee osteoarthritis when proper dosing parameters are used.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4" style={{ fontFamily: "var(--font-poppins)" }}>
            Class 3B vs Class 4 Laser Therapy
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Class 3B lasers (up to 500 mW) deliver therapeutic doses without thermal effects and have the strongest research base for photobiomodulation. Class 4 lasers (above 500 mW) can treat deeper tissues more quickly but generate heat that must be carefully managed. Both classes are effective; the choice depends on the condition being treated, tissue depth and patient comfort. Our physiotherapists select the appropriate parameters based on current evidence and your individual assessment.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4" style={{ fontFamily: "var(--font-poppins)" }}>
            Conditions We Treat with Laser Therapy
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
            <li><strong>Osteoarthritis</strong> &mdash; knee, hip and hand arthritis respond well to LLLT, with reduced pain and improved joint function.</li>
            <li><strong>Tendinopathy</strong> &mdash; Achilles tendon, rotator cuff, tennis elbow and patellar tendon injuries benefit from accelerated collagen remodelling.</li>
            <li><strong>Wound healing</strong> &mdash; LLLT promotes fibroblast proliferation and angiogenesis, speeding up tissue repair in chronic wounds and post-surgical sites.</li>
            <li><strong>Nerve pain</strong> &mdash; carpal tunnel syndrome, peripheral neuropathy and post-herpetic neuralgia show improvement with targeted laser application.</li>
            <li><strong>Neck and back pain</strong> &mdash; myofascial pain, disc-related pain and muscle spasm respond to the anti-inflammatory and analgesic effects of LLLT.</li>
            <li><strong>Sports injuries</strong> &mdash; muscle strains, ligament sprains and stress fractures heal faster with photobiomodulation therapy.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4" style={{ fontFamily: "var(--font-poppins)" }}>
            Treatment Duration and Safety
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Each laser therapy session lasts 10 to 20 minutes depending on the area and condition being treated. The laser probe is applied directly to the skin over the affected area. You will wear protective eyewear during treatment. There is no downtime &mdash; you can return to your activities immediately. LLLT is contraindicated over the eyes, over cancerous lesions and during pregnancy over the abdomen. Our clinic near LB Nagar is open daily from 9 am to 9 pm. Call{" "}
            <a href="tel:+918143015455" className="text-blue-600 font-semibold hover:underline">+91 81430 15455</a>{" "}
            or{" "}
            <a href="https://wa.me/918143015455" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-semibold hover:underline">WhatsApp us</a>{" "}
            to schedule your assessment.
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
            <li><a href="/arthritis-physiotherapy-hyderabad" className="text-blue-600 hover:underline">Arthritis Physiotherapy</a></li>
            <li><a href="/shockwave-therapy-hyderabad" className="text-blue-600 hover:underline">Shockwave Therapy (ESWT)</a></li>
            <li><a href="/knee-pain-physiotherapy-lb-nagar" className="text-blue-600 hover:underline">Knee Pain Physiotherapy</a></li>
            <li><a href="/neck-pain-cervical-physiotherapy-lb-nagar" className="text-blue-600 hover:underline">Neck Pain &amp; Cervical Physiotherapy</a></li>
            <li><a href="/contact" className="text-blue-600 hover:underline">Contact Us</a></li>
          </ul>
        </section>

        {/* Dr Sirish Bio */}
        <section className="mt-12 bg-blue-50 rounded-2xl p-8 border border-blue-100">
          <h2 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: "var(--font-poppins)" }}>
            Clinically Reviewed by Dr Sirish
          </h2>
          <p className="text-gray-700 text-sm leading-relaxed mb-2">
            <strong>B.P.T, M.Sc Sports (London)</strong> &mdash; Senior Physiotherapist with 20+ years of experience in orthopaedic and neurological rehabilitation. Dr Sirish combines laser therapy with manual techniques and progressive exercise for comprehensive pain management.
          </p>
          <p className="text-gray-700 text-sm leading-relaxed">
            Clinic: Shop No. 2, Ground Floor, H.No. 11-13-714, Road No. 4, Dwarka Nagar, Green Hills Colony, Kothapet, Hyderabad 500102. Open daily 9 am &ndash; 9 pm.
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
