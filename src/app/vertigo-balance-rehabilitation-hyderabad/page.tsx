import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vertigo & Balance Rehabilitation in Hyderabad | Legend Physiotherapy",
  description:
    "Vertigo and balance disorder treatment in Hyderabad. Vestibular rehabilitation for BPPV, dizziness and unsteadiness. Call +91 81430 15455.",
  keywords: [
    "vertigo treatment Hyderabad",
    "vestibular rehabilitation Hyderabad",
    "BPPV treatment Hyderabad",
    "balance disorder physiotherapy Hyderabad",
    "dizziness treatment Hyderabad",
    "vertigo physiotherapy near me",
  ],
  alternates: { canonical: "/vertigo-balance-rehabilitation-hyderabad" },
  openGraph: {
    title: "Vertigo & Balance Rehabilitation in Hyderabad | Legend Physiotherapy",
    description:
      "Vestibular rehabilitation and vertigo treatment at Legend Physiotherapy, Kothapet, Hyderabad.",
    url: "/vertigo-balance-rehabilitation-hyderabad",
    siteName: "Legend Physiotherapy",
    locale: "en_IN",
    type: "website",
  },
};

const faqs = [
  {
    question: "Can physiotherapy really cure vertigo?",
    answer:
      "Physiotherapy is highly effective for the most common type of vertigo — BPPV (Benign Paroxysmal Positional Vertigo). The Epley manoeuvre and other repositioning techniques resolve BPPV in one to three sessions in most patients. For other vestibular conditions, rehabilitation exercises reduce symptoms significantly over four to eight weeks.",
  },
  {
    question: "What is BPPV and why does it cause dizziness?",
    answer:
      "BPPV occurs when tiny calcium crystals in your inner ear become dislodged and move into the semicircular canals. When you change head position — rolling over in bed, looking up or bending down — these crystals send false signals to your brain, causing a spinning sensation. Repositioning manoeuvres guide the crystals back to where they belong.",
  },
  {
    question: "How many sessions will I need for vertigo treatment?",
    answer:
      "For BPPV, most patients feel dramatically better after one to three sessions. Other vestibular conditions like vestibular neuritis or labyrinthitis may require six to twelve weeks of vestibular rehabilitation exercises. Dr Sirish will assess your specific condition and give you a realistic timeline.",
  },
  {
    question: "Is vertigo treatment available at home in Hyderabad?",
    answer:
      "Yes. We offer home visit physiotherapy for vertigo and balance disorders across Hyderabad. Since dizziness makes travelling risky, home visits are often the safest option. Call +91 81430 15455 to book a home assessment.",
  },
  {
    question: "Should I see a physiotherapist or ENT doctor for vertigo?",
    answer:
      "Both can help. An ENT specialist may investigate underlying causes, while a physiotherapist trained in vestibular rehabilitation provides the hands-on treatment — repositioning manoeuvres and balance training. Many ENT doctors in Hyderabad refer their vertigo patients to us for physiotherapy after their initial assessment.",
  },
];

export default function VertigoPage() {
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
            Vertigo &amp; Balance Rehabilitation in Hyderabad
          </h1>
          <p className="text-lg text-white/90 max-w-2xl mb-6">
            Expert vestibular rehabilitation for BPPV, dizziness and balance disorders at Legend Physiotherapy Ortho and Neuro Pain Management Clinic.
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
            Understanding Vertigo and Dizziness
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Vertigo is the sensation that you or your surroundings are spinning, tilting or moving when they are not. It is different from general lightheadedness. True vertigo is usually caused by a problem in the inner ear or the vestibular nerve that connects the ear to the brain. It can strike suddenly and make standing, walking or even lying in bed feel unsafe.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            At Legend Physiotherapy in Hyderabad, we specialise in vestibular rehabilitation — a focused form of physiotherapy designed to reduce dizziness, improve balance and help you return to your normal activities safely.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4" style={{ fontFamily: "var(--font-poppins)" }}>
            Conditions We Treat
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
            <li><strong>BPPV (Benign Paroxysmal Positional Vertigo)</strong> — the most common cause of vertigo. Brief spinning episodes triggered by head movements such as rolling in bed, looking up or bending. Highly treatable with repositioning manoeuvres.</li>
            <li><strong>Vestibular neuritis</strong> — inflammation of the vestibular nerve causing sudden severe vertigo, nausea and imbalance that can last days to weeks. Rehabilitation speeds recovery and reduces residual unsteadiness.</li>
            <li><strong>Labyrinthitis</strong> — inner ear infection affecting both hearing and balance. Physiotherapy addresses the balance component once the acute phase settles.</li>
            <li><strong>Age-related balance decline</strong> — reduced vestibular, visual and sensory function that increases fall risk in older adults. Targeted balance training reduces this risk significantly.</li>
            <li><strong>Post-concussion dizziness</strong> — balance problems following a head injury. Vestibular rehabilitation is a recommended treatment to restore normal function.</li>
            <li><strong>Meniere&apos;s disease</strong> — episodes of vertigo, hearing loss and tinnitus. While physiotherapy does not treat the disease itself, rehabilitation between episodes improves balance confidence and reduces fall risk.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4" style={{ fontFamily: "var(--font-poppins)" }}>
            How We Assess Your Vertigo
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Your assessment begins with a careful history: when the dizziness started, what triggers it, how long each episode lasts, and whether you experience nausea, hearing changes or visual disturbance. We then perform clinical tests — the Dix-Hallpike test for BPPV, head impulse test, gaze stability assessment, and standing balance evaluation. These tests help us identify whether the problem originates in the inner ear, the vestibular nerve, or the central nervous system, and guide the treatment plan.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4" style={{ fontFamily: "var(--font-poppins)" }}>
            Treatment: Repositioning, Gaze Training and Balance Exercises
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
            <li><strong>Canalith repositioning (Epley manoeuvre)</strong> — a series of guided head and body movements that relocate displaced crystals in the inner ear. This is the primary treatment for BPPV and often resolves symptoms in a single session.</li>
            <li><strong>Gaze stabilisation exercises</strong> — training your eyes and brain to work together during head movement. These exercises reduce the blurred vision and disorientation that many vestibular patients experience.</li>
            <li><strong>Balance retraining</strong> — progressive standing and walking exercises on different surfaces, with reduced visual input, to challenge and rebuild your balance system. We tailor the difficulty to your current ability and advance it as you improve.</li>
            <li><strong>Habituation exercises</strong> — controlled exposure to movements or positions that trigger mild dizziness, gradually desensitising the vestibular system so those movements no longer provoke symptoms.</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-6">
            You will receive a home exercise programme to practice daily between sessions. Consistency with these exercises is the single most important factor in recovery.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4" style={{ fontFamily: "var(--font-poppins)" }}>
            Why Choose Legend Physiotherapy for Vertigo Treatment
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Vertigo is often misunderstood or treated only with medication. While medication can suppress symptoms temporarily, it does not fix the underlying vestibular problem. Physiotherapy addresses the root cause — whether that is displaced crystals, a weakened vestibular reflex, or poor balance compensation. With 20+ years of experience, Dr Sirish has helped hundreds of patients in Hyderabad overcome vertigo and return to confident, independent movement.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4" style={{ fontFamily: "var(--font-poppins)" }}>
            Clinic Visits and Home Visits
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Our clinic in Kothapet, near LB Nagar, is open every day from 9 am to 9 pm. For patients with severe dizziness, we strongly recommend home visits — travelling while dizzy increases fall risk. We offer home visit physiotherapy across all areas of Hyderabad. Call{" "}
            <a href="tel:+918143015455" className="text-blue-600 font-semibold hover:underline">+91 81430 15455</a>{" "}
            to book.
          </p>
        </div>

        {/* FAQ Section */}
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
            <li><a href="/neuro-rehabilitation-lb-nagar" className="text-blue-600 hover:underline">Neuro Rehabilitation</a></li>
            <li><a href="/paralysis-treatment-hyderabad" className="text-blue-600 hover:underline">Paralysis Treatment</a></li>
            <li><a href="/post-surgery-rehabilitation-lb-nagar" className="text-blue-600 hover:underline">Post-Surgery Rehabilitation</a></li>
            <li><a href="/book-appointment" className="text-blue-600 hover:underline">Book an Appointment</a></li>
          </ul>
        </section>

        {/* Dr Sirish Bio */}
        <section className="mt-12 bg-blue-50 rounded-2xl p-8 border border-blue-100">
          <h2 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: "var(--font-poppins)" }}>Your Physiotherapist — Dr Sirish</h2>
          <p className="text-gray-700 text-sm leading-relaxed mb-2">
            <strong>B.P.T, M.Sc Sports (London)</strong> — Senior Physiotherapist with 20+ years of experience in orthopaedic and neurological rehabilitation, including vestibular rehabilitation for vertigo and balance disorders.
          </p>
          <p className="text-gray-700 text-sm leading-relaxed">
            Clinic: Shop No. 2, Ground Floor, H.No. 11-13-714, Road No. 4, Dwarka Nagar, Green Hills Colony, Kothapet, Hyderabad 500102. Open daily 9 am – 9 pm.
          </p>
        </section>

        {/* CTA */}
        <section className="mt-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-3" style={{ fontFamily: "var(--font-poppins)" }}>Book a Vertigo Assessment</h2>
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
              width="100%" height="400" style={{ border: 0 }} loading="lazy"
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
