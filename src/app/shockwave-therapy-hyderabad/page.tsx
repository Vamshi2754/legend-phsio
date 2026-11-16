import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shockwave Therapy (ESWT) in Hyderabad | Legend Physiotherapy",
  description:
    "Advanced shockwave therapy (ESWT) for chronic tendon pain, plantar fasciitis and calcific tendonitis in Hyderabad. Non-invasive treatment at Legend Physiotherapy. Call +91 81430 15455.",
  keywords: [
    "shockwave therapy Hyderabad",
    "ESWT treatment",
    "extracorporeal shockwave therapy",
    "chronic tendon pain treatment",
    "shockwave therapy near me",
    "shockwave therapy for plantar fasciitis Hyderabad",
  ],
  alternates: { canonical: "/shockwave-therapy-hyderabad" },
  openGraph: {
    title: "Shockwave Therapy (ESWT) in Hyderabad | Legend Physiotherapy",
    description:
      "Non-invasive shockwave therapy for chronic pain conditions at Legend Physiotherapy Kothapet, Hyderabad.",
    url: "/shockwave-therapy-hyderabad",
    siteName: "Legend Physiotherapy",
    locale: "en_IN",
    type: "website",
  },
};

const faqs = [
  {
    question: "Is shockwave therapy painful?",
    answer:
      "Most patients experience mild discomfort during the procedure, often described as a tapping or pulsing sensation. The intensity is adjustable and your physiotherapist will start at a lower energy level, gradually increasing based on your tolerance. Any discomfort during treatment usually subsides immediately after the session ends.",
  },
  {
    question: "How many shockwave sessions are needed?",
    answer:
      "A typical treatment protocol involves three to five sessions spaced one week apart. Some patients notice improvement after the first session, while chronic conditions may require the full course. your physiotherapist will assess your progress after each session and adjust the treatment plan accordingly.",
  },
  {
    question: "What conditions does shockwave therapy treat?",
    answer:
      "ESWT is most effective for chronic tendon conditions including plantar fasciitis, tennis elbow, Achilles tendinopathy, calcific tendonitis of the shoulder, patellar tendinopathy and greater trochanteric pain syndrome. It is particularly beneficial when other conservative treatments have not provided adequate relief.",
  },
  {
    question: "Are there any side effects of shockwave therapy?",
    answer:
      "Side effects are generally mild and temporary. You may experience slight redness, swelling or bruising at the treatment site for one to two days. Some patients feel mild soreness similar to post-exercise discomfort. Serious complications are extremely rare when performed by a trained physiotherapist.",
  },
  {
    question: "How much does shockwave therapy cost in Hyderabad?",
    answer:
      "The cost per session at Legend Physiotherapy is affordable compared to surgical alternatives. We offer package pricing for the full course of treatment. Please call +91 81430 15455 for current pricing details. Most patients find ESWT far more cost-effective than prolonged medication or surgical intervention.",
  },
];

export default function ShockwaveTherapyPage() {
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
            Shockwave Therapy (ESWT) in Hyderabad
          </h1>
          <p className="text-lg text-white/90 max-w-2xl mb-6">
            Non-invasive acoustic wave treatment for chronic tendon pain, plantar fasciitis and calcific tendonitis at Legend Physiotherapy, Kothapet.
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
            What Is Shockwave Therapy?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Extracorporeal Shockwave Therapy (ESWT) is a non-invasive treatment that delivers focused acoustic pressure waves to injured tissue. Originally developed to break kidney stones, medical researchers discovered that lower-energy shockwaves stimulate healing in tendons, ligaments and bones. The technology has since become a gold-standard treatment for chronic musculoskeletal conditions that have not responded to conventional therapy.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            At Legend Physiotherapy, we use ESWT as part of a comprehensive rehabilitation programme. The acoustic waves trigger neovascularisation &mdash; the formation of new blood vessels &mdash; at the tendon-bone junction, accelerating the body&apos;s natural repair mechanisms. This increase in blood supply delivers oxygen and growth factors to tissue that has been chronically under-nourished.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4" style={{ fontFamily: "var(--font-poppins)" }}>
            How ESWT Works
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The shockwave device generates high-energy acoustic pulses that travel through the skin to the target tissue. These waves create controlled micro-trauma at the cellular level, which stimulates three key healing responses: increased blood flow through neovascularisation, release of growth factors that promote tissue regeneration, and disruption of pain-mediating nerve fibres that reduces chronic pain signalling.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Research published in the British Journal of Sports Medicine and the American Journal of Sports Medicine confirms that ESWT produces significant improvements in pain scores and functional outcomes for conditions like plantar fasciitis and calcific shoulder tendonitis, with success rates between 70 and 90 per cent.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4" style={{ fontFamily: "var(--font-poppins)" }}>
            Conditions We Treat with Shockwave Therapy
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
            <li><strong>Plantar fasciitis</strong> &mdash; the most common indication for ESWT, particularly effective for heel pain lasting more than six months.</li>
            <li><strong>Tennis elbow (lateral epicondylitis)</strong> &mdash; acoustic waves break down scar tissue and stimulate healing in the common extensor tendon.</li>
            <li><strong>Calcific tendonitis of the shoulder</strong> &mdash; shockwaves can fragment calcium deposits and promote their reabsorption by the body.</li>
            <li><strong>Achilles tendinopathy</strong> &mdash; ESWT stimulates collagen production and reorganisation in the damaged tendon.</li>
            <li><strong>Frozen shoulder (adhesive capsulitis)</strong> &mdash; helps reduce pain and improve range of motion when combined with physiotherapy exercises.</li>
            <li><strong>Patellar tendinopathy (jumper&apos;s knee)</strong> &mdash; effective for athletes and active individuals with chronic anterior knee pain.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4" style={{ fontFamily: "var(--font-poppins)" }}>
            Treatment Protocol and What to Expect
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            A standard ESWT course involves three to five sessions, each lasting 15 to 20 minutes, performed at weekly intervals. During the session, ultrasound gel is applied to the treatment area and the shockwave applicator is pressed against the skin. You will feel a rapid tapping sensation as 2,000 to 3,000 impulses are delivered. The energy level is gradually increased based on your feedback.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            No anaesthesia is required and you can return to normal activities immediately. We recommend avoiding high-impact exercise for 48 hours after each session. ESWT is combined with a progressive loading programme &mdash; eccentric exercises and stretching &mdash; to maximise the healing response and prevent recurrence.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4" style={{ fontFamily: "var(--font-poppins)" }}>
            Why Choose Legend Physiotherapy for ESWT
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Dr Sirish and the team at Legend Physiotherapy combine shockwave therapy with manual therapy, exercise prescription and biomechanical correction for the best outcomes. Our clinic near LB Nagar is open every day from 9 am to 9 pm. Call{" "}
            <a href="tel:+918143015455" className="text-blue-600 font-semibold hover:underline">+91 81430 15455</a>{" "}
            or{" "}
            <a href="https://wa.me/918143015455" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-semibold hover:underline">WhatsApp us</a>{" "}
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
            <li><a href="/frozen-shoulder-treatment-hyderabad" className="text-blue-600 hover:underline">Frozen Shoulder Treatment</a></li>
            <li><a href="/tennis-elbow-treatment-hyderabad" className="text-blue-600 hover:underline">Tennis Elbow Treatment</a></li>
            <li><a href="/sports-injury-rehabilitation-lb-nagar" className="text-blue-600 hover:underline">Sports Injury Rehabilitation</a></li>
            <li><a href="/dry-needling-physiotherapy-hyderabad" className="text-blue-600 hover:underline">Dry Needling Therapy</a></li>
            <li><a href="/contact" className="text-blue-600 hover:underline">Contact Us</a></li>
          </ul>
        </section>

        {/* Dr Sirish Bio */}
        <section className="mt-12 bg-blue-50 rounded-2xl p-8 border border-blue-100">
          <h2 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: "var(--font-poppins)" }}>
            Clinically Reviewed by Dr Sirish
          </h2>
          <p className="text-gray-700 text-sm leading-relaxed mb-2">
            <strong>B.P.T, M.Sc Sports (London)</strong> &mdash; Senior Physiotherapist with 20+ years of experience in orthopaedic and sports rehabilitation. Dr Sirish integrates shockwave therapy with evidence-based manual techniques and exercise programming for optimal patient outcomes.
          </p>
          <p className="text-gray-700 text-sm leading-relaxed">
            Clinic: Shop No. 2, Ground Floor, H.No. 11-13-714, Road No. 4, Dwarka Nagar, Green Hills Colony, Kothapet, Hyderabad 500102. Open daily 9 am &ndash; 9 pm.
          </p>
        </section>

        {/* CTA */}
        <section className="mt-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-3" style={{ fontFamily: "var(--font-poppins)" }}>
            Book a Shockwave Therapy Session
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
