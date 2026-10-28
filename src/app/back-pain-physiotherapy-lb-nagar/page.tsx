import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Back Pain Physiotherapy in LB Nagar, Hyderabad | Legend",
  description:
    "Back pain physiotherapy near LB Nagar, Kothapet. Slip disc, lumbar spondylosis and posture pain treatment. Call +91 81430 15455.",
  alternates: { canonical: "/back-pain-physiotherapy-lb-nagar" },
  openGraph: {
    title: "Back Pain Physiotherapy in LB Nagar, Hyderabad | Legend",
    description:
      "Back pain physiotherapy at our Kothapet clinic near LB Nagar. Lower back strain, slip disc, spondylosis and posture-related pain.",
    url: "/back-pain-physiotherapy-lb-nagar",
    siteName: "Legend Physiotherapy",
    locale: "en_IN",
    type: "website",
  },
};

const faqs = [
  {
    question: "Should I rest or keep moving with back pain?",
    answer:
      "Short periods of rest may help in the first day or two of acute pain, but prolonged bed rest usually makes back pain worse. Gentle movement, such as walking and the exercises your physiotherapist gives you, helps keep muscles active and prevents stiffness. We will guide you on how much activity is safe at each stage of your recovery.",
  },
  {
    question: "Is physiotherapy safe for a slip disc?",
    answer:
      "Yes. Physiotherapy is recommended as a first-line treatment for most disc herniations. We use gentle mobilisation, specific core-stability exercises and pain-management techniques. In fact, many patients with a disc bulge improve with physiotherapy alone and do not need surgery. We always work within your pain tolerance and modify treatment as needed.",
  },
  {
    question: "How soon will the pain ease?",
    answer:
      "Many patients notice some improvement within the first two to four sessions, though this varies with the cause and severity. Acute muscle strains may settle in two to three weeks, while long-standing conditions like lumbar spondylosis often need six to twelve weeks of consistent treatment and home exercise to reach a stable improvement.",
  },
  {
    question: "Do you offer spinal decompression therapy?",
    answer:
      "Yes. Our Kothapet clinic is equipped with a spinal decompression table. This treatment gently stretches the spine to relieve pressure on compressed discs and nerves. It may be suitable for certain disc herniations, sciatica and degenerative disc disease. Dr Sirish will assess whether decompression is appropriate for your condition.",
  },
  {
    question: "Can I get treatment at home if I can't travel?",
    answer:
      "Absolutely. We offer home visit physiotherapy across LB Nagar, Dilsukhnagar, Nagole, Vanasthalipuram and other areas of East Hyderabad. Our therapist brings portable equipment so you receive the same level of care. Call +91 81430 15455 to arrange a home visit.",
  },
];

export default function BackPainPage() {
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

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Back Pain Physiotherapy in LB Nagar, Hyderabad
          </h1>
          <p className="text-lg text-white/90 max-w-2xl mb-6">
            Find the cause of your back pain and start recovery at our Kothapet
            clinic, a few minutes from LB Nagar and Dilsukhnagar.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="tel:+918143015455"
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-bold hover:bg-blue-50 transition-colors text-sm sm:text-base"
            >
              Call +91 81430 15455
            </a>
            <a
              href="https://wa.me/919966193413"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-800 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-900 transition-colors text-sm sm:text-base"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* Content */}
      <article className="max-w-4xl mx-auto px-6 py-12">
        <div className="prose prose-lg max-w-none">
          <h2
            className="text-2xl font-bold text-gray-900 mt-10 mb-4"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Back Problems We Treat
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Back pain is one of the most common reasons people visit a
            physiotherapist. At Legend Physiotherapy we treat a broad range of
            spinal and muscular conditions:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
            <li>
              <strong>Lower back strain</strong> — muscle or ligament injuries
              caused by lifting, bending or sudden movement. Often the most
              painful in the first few days but usually responds well to early
              treatment.
            </li>
            <li>
              <strong>Slip disc (disc herniation)</strong> — when the soft
              centre of a spinal disc pushes through a crack in the tougher
              exterior, sometimes pressing on a nerve and causing leg pain or
              numbness.
            </li>
            <li>
              <strong>Lumbar spondylosis</strong> — age-related changes in the
              lower spine that lead to stiffness and aching, particularly after
              prolonged standing or walking.
            </li>
            <li>
              <strong>Posture-related pain</strong> — discomfort from long hours
              at a desk, driving or looking down at a phone. This is
              increasingly common in IT professionals across Hyderabad.
            </li>
          </ul>

          <h2
            className="text-2xl font-bold text-gray-900 mt-10 mb-4"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            How We Find the Cause
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Your first visit begins with a detailed history: when the pain
            started, what makes it better or worse, and how it affects your
            sleep, work and daily activities. We then carry out a physical
            examination — testing your spinal movement, muscle strength, nerve
            function and posture. In most cases this clinical assessment is
            enough to identify the problem. If we suspect a disc injury, nerve
            compression or anything that needs further investigation, we will
            recommend the appropriate scan and explain why.
          </p>

          <h2
            className="text-2xl font-bold text-gray-900 mt-10 mb-4"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Treatment: Exercise, Manual Therapy and Spinal Decompression
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Your treatment plan is built around evidence-based methods:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
            <li>
              <strong>Exercise therapy</strong> — core strengthening, spinal
              mobility drills and functional exercises designed to support your
              back and prevent recurrence. You will receive a written home
              programme updated at each visit.
            </li>
            <li>
              <strong>Manual therapy</strong> — joint mobilisation and soft
              tissue work to reduce stiffness, ease muscle spasm and restore
              normal movement patterns.
            </li>
            <li>
              <strong>Spinal decompression</strong> — a mechanised traction
              table that gently stretches the spine. This may help relieve
              pressure on compressed discs and nerves. Dr Sirish will assess
              whether it is suitable for your case.
            </li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-6">
            We may also use ultrasound, TENS or laser therapy for short-term
            pain relief in the early sessions.
          </p>

          <h2
            className="text-2xl font-bold text-gray-900 mt-10 mb-4"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Desk-Work and Posture Advice
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            If your back pain is linked to long sitting hours, we spend time on
            workstation setup: monitor height, chair adjustment, keyboard
            position and the importance of regular movement breaks. Small
            changes — standing every 30 minutes, adjusting your screen so your
            eyes meet the top third, keeping your feet flat — can make a
            noticeable difference over days and weeks. We also teach two or
            three quick stretches you can do at your desk without drawing
            attention.
          </p>

          <h2
            className="text-2xl font-bold text-gray-900 mt-10 mb-4"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Warning Signs That Need a Doctor Straight Away
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Most back pain is not dangerous, but some symptoms need urgent
            medical attention. Go to a hospital or call your doctor immediately
            if you experience:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
            <li>Numbness or tingling in the groin or saddle area</li>
            <li>Loss of bladder or bowel control</li>
            <li>Weakness in both legs that is getting worse</li>
            <li>Severe pain after a fall or injury</li>
            <li>Unexplained weight loss along with back pain</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-6">
            These can be signs of a serious condition that needs immediate
            investigation. Physiotherapy is not the right starting point in
            these cases.
          </p>

          <h2
            className="text-2xl font-bold text-gray-900 mt-10 mb-4"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Clinic Visits and Home Visits
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Our Kothapet clinic is open every day from 9 am to 9 pm. If your
            back pain makes travelling difficult, we offer home visits across LB
            Nagar, Dilsukhnagar, Nagole, Vanasthalipuram and surrounding areas
            of East Hyderabad. Our therapist brings portable treatment equipment
            so your recovery does not have to wait. Call{" "}
            <a
              href="tel:+918143015455"
              className="text-blue-600 font-semibold hover:underline"
            >
              +91 81430 15455
            </a>{" "}
            to book a clinic or home appointment.
          </p>
        </div>

        {/* FAQ Section */}
        <section className="mt-12">
          <h2
            className="text-2xl font-bold text-gray-900 mb-6"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="border border-gray-200 rounded-xl p-6"
              >
                <h3 className="font-bold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Internal Links */}
        <section className="mt-12">
          <h2
            className="text-2xl font-bold text-gray-900 mb-4"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Related Pages
          </h2>
          <ul className="space-y-2">
            <li>
              <a href="/blog/back-pain-relief" className="text-blue-600 hover:underline">
                Blog: Back Pain Relief
              </a>
            </li>
            <li>
              <a
                href="/blog/top-5-physiotherapy-exercises-for-lower-back-pain-relief"
                className="text-blue-600 hover:underline"
              >
                Blog: Top 5 Exercises for Lower Back Pain Relief
              </a>
            </li>
            <li>
              <a href="/blog/posture-correction-guide" className="text-blue-600 hover:underline">
                Blog: Posture Correction Guide
              </a>
            </li>
            <li>
              <a href="/sciatica-physiotherapy-lb-nagar" className="text-blue-600 hover:underline">
                Sciatica Physiotherapy
              </a>
            </li>
            <li>
              <a href="/book-appointment" className="text-blue-600 hover:underline">
                Book an Appointment
              </a>
            </li>
          </ul>
        </section>

        {/* Dr Sirish Bio */}
        <section className="mt-12 bg-blue-50 rounded-2xl p-8 border border-blue-100">
          <h2
            className="text-xl font-bold text-gray-900 mb-3"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Your Physiotherapist — Dr Sirish
          </h2>
          <p className="text-gray-700 text-sm leading-relaxed mb-2">
            <strong>B.P.T, M.Sc Sports (London)</strong> — Senior
            Physiotherapist with 20+ years of experience in orthopaedic and
            neurological rehabilitation. Dr Sirish specialises in spinal
            conditions and has helped thousands of patients with back pain
            return to pain-free, active lives.
          </p>
          <p className="text-gray-700 text-sm leading-relaxed">
            Clinic: Shop No. 2, Ground Floor, H.No. 11-13-714, Road No. 4,
            Dwarka Nagar, Green Hills Colony, Kothapet, Hyderabad 500102. Open
            daily 9 am – 9 pm.
          </p>
        </section>

        {/* CTA */}
        <section className="mt-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-center text-white">
          <h2
            className="text-2xl font-bold mb-3"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Book a Back Pain Assessment
          </h2>
          <p className="text-white/90 mb-6">
            Call +91 81430 15455 or book online. We are open every day, 9 am to
            9 pm.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="tel:+918143015455"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold hover:bg-blue-50 transition-colors"
            >
              Call Now
            </a>
            <a
              href="/book-appointment"
              className="bg-blue-800 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-900 transition-colors"
            >
              Book Online
            </a>
          </div>
        </section>

        {/* Map */}
        <section className="mt-12">
          <h2
            className="text-2xl font-bold text-gray-900 mb-4"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Find Us
          </h2>
          <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200 h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.5!2d78.5457583!3d17.3597024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb990043784b77%3A0x55126327d4caeb32!2sLegend%20Physiotherapy%20Ortho%20and%20Neuro%20Pain%20Management%20Clinic%20%7C%20Kothapet%20%7C%20Lb%20Nagar!5e0!3m2!1sen!2sin!4v1"
              width="100%"
              height="400"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Legend Physiotherapy, Kothapet on Google Maps"
            />
          </div>
        </section>
      </article>

      <Footer />
    </div>
  );
}
