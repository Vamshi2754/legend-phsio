import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cervical Spondylosis Treatment in Hyderabad | Legend Physiotherapy",
  description:
    "Cervical spondylosis and neck pain treatment in Hyderabad. McKenzie method, manual therapy, posture correction for IT professionals. Call +91 81430 15455.",
  keywords: [
    "cervical spondylosis treatment Hyderabad",
    "neck arthritis physiotherapy",
    "cervical disc treatment",
    "neck stiffness treatment Hyderabad",
    "cervical pain physiotherapy near me",
    "neck pain treatment without surgery Hyderabad",
  ],
  alternates: { canonical: "/cervical-spondylosis-treatment-hyderabad" },
  openGraph: {
    title: "Cervical Spondylosis Treatment in Hyderabad | Legend Physiotherapy",
    description:
      "Expert cervical spondylosis treatment without surgery at Legend Physiotherapy, Kothapet, Hyderabad.",
    url: "/cervical-spondylosis-treatment-hyderabad",
    siteName: "Legend Physiotherapy",
    locale: "en_IN",
    type: "website",
  },
};

const faqs = [
  {
    question: "Can cervical spondylosis be cured permanently?",
    answer:
      "Cervical spondylosis is a degenerative condition, meaning the structural changes in the spine cannot be fully reversed. However, physiotherapy can effectively manage symptoms, eliminate pain, restore mobility and prevent further deterioration. Most patients achieve a pain-free, fully functional life with proper treatment and lifestyle modifications including posture correction and regular exercises.",
  },
  {
    question: "What are the best exercises for cervical neck pain?",
    answer:
      "Chin tucks, neck isometrics, shoulder blade squeezes and gentle range-of-motion exercises are among the most effective for cervical pain. These strengthen the deep neck flexors and upper back muscles that support the cervical spine. Dr Sirish prescribes a personalised programme based on your specific condition. Avoid random neck exercises from the internet as incorrect movements can worsen symptoms.",
  },
  {
    question: "How long does cervical spondylosis treatment take?",
    answer:
      "Most patients experience significant pain relief within 2 to 4 weeks of regular physiotherapy. Complete treatment typically takes 6 to 12 weeks depending on severity. Patients with nerve compression symptoms like arm pain or numbness may take longer. Continuing the home exercise programme after treatment helps maintain long-term results.",
  },
  {
    question: "What type of pillow is best for cervical spondylosis?",
    answer:
      "A cervical contour pillow that supports the natural curve of your neck is recommended. The pillow should be firm enough to maintain cervical lordosis but comfortable enough to sleep on. Memory foam cervical pillows work well for most patients. Avoid very high or very flat pillows. Side sleepers need a thicker pillow than back sleepers to keep the spine aligned.",
  },
  {
    question: "How can IT professionals prevent cervical neck pain?",
    answer:
      "Position your monitor at eye level and arm's length away. Keep your keyboard and mouse at elbow height. Take a 2-minute break every 30 minutes to do chin tucks and shoulder rolls. Use a headset for phone calls instead of cradling the phone. Strengthen your upper back and deep neck muscles with daily exercises. An ergonomic assessment of your workstation can make a significant difference.",
  },
];

export default function CervicalSpondylosisPage() {
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
            Cervical Spondylosis Treatment in Hyderabad
          </h1>
          <p className="text-lg text-white/90 max-w-2xl mb-6">
            Expert neck pain and cervical spondylosis treatment without surgery at Legend Physiotherapy, Kothapet. Specialised care for IT professionals.
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
            What Is Cervical Spondylosis?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Cervical spondylosis is age-related degeneration of the cervical spine — the seven vertebrae in your neck. As the intervertebral discs lose hydration and height, the vertebral bodies develop bone spurs (osteophytes) and the facet joints undergo arthritic changes. This leads to neck pain, stiffness, headaches and sometimes nerve compression causing pain, tingling or numbness radiating into the arms and hands.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            At Legend Physiotherapy in Kothapet, Hyderabad, Dr Sirish treats cervical spondylosis with a combination of manual therapy, McKenzie method exercises, posture correction and strengthening to relieve pain and restore full neck function without surgery.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4" style={{ fontFamily: "var(--font-poppins)" }}>
            Causes — Why IT Professionals Are at High Risk
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            While cervical spondylosis is partly age-related, prolonged poor posture accelerates the degeneration significantly. Hyderabad&apos;s large IT workforce is particularly affected because of:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
            <li>8 to 10 hours daily of forward-head posture at computer screens</li>
            <li>Prolonged smartphone use with the neck bent forward (text neck)</li>
            <li>Lack of regular neck and upper back strengthening exercises</li>
            <li>High stress levels causing chronic muscle tension in the neck and shoulders</li>
            <li>Poor workstation ergonomics — monitor too low, chair without lumbar support</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4" style={{ fontFamily: "var(--font-poppins)" }}>
            Symptoms to Watch For
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
            <li>Persistent neck pain and stiffness, worse in the morning or after long desk work</li>
            <li>Headaches starting from the base of the skull and radiating to the forehead</li>
            <li>Grinding or crunching sensation when turning the neck</li>
            <li>Pain, tingling or numbness radiating into the shoulder, arm or fingers</li>
            <li>Weakness in the hand or difficulty gripping objects</li>
            <li>Dizziness or unsteadiness associated with neck movements</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4" style={{ fontFamily: "var(--font-poppins)" }}>
            Our Treatment Approach
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
            <li><strong>McKenzie Method</strong> — a systematic assessment and treatment approach using specific directional exercises to centralise and eliminate pain. Patients learn self-management techniques they can use at home and work.</li>
            <li><strong>Manual therapy</strong> — joint mobilisation and soft tissue release to restore normal cervical vertebral movement and reduce muscle tension and spasm.</li>
            <li><strong>Posture correction</strong> — identification and correction of postural faults that overload the cervical spine. Includes workstation ergonomic advice specific to your office setup.</li>
            <li><strong>Deep neck flexor strengthening</strong> — targeted exercises for the muscles that stabilise the cervical spine, reducing the load on degenerative discs and joints.</li>
            <li><strong>Cervical traction</strong> — gentle mechanical or manual traction to decompress nerve roots and relieve arm pain caused by disc herniation or foraminal narrowing.</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-6">
            Treatment is tailored to your specific symptoms, imaging findings and daily demands. IT professionals receive additional ergonomic guidance for their workstation setup. Call{" "}
            <a href="tel:+918143015455" className="text-blue-600 font-semibold hover:underline">+91 81430 15455</a>{" "}
            or WhatsApp{" "}
            <a href="https://wa.me/918143015455" className="text-blue-600 font-semibold hover:underline">+91 81430 15455</a>{" "}
            to book an assessment.
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
            <li><a href="/neck-pain-cervical-physiotherapy-lb-nagar" className="text-blue-600 hover:underline">Neck Pain & Cervical Physiotherapy</a></li>
            <li><a href="/slip-disc-treatment-hyderabad" className="text-blue-600 hover:underline">Slip Disc Treatment</a></li>
            <li><a href="/frozen-shoulder-treatment-hyderabad" className="text-blue-600 hover:underline">Frozen Shoulder Treatment</a></li>
            <li><a href="/paralysis-treatment-hyderabad" className="text-blue-600 hover:underline">Paralysis & Stroke Rehabilitation</a></li>
            <li><a href="/book-appointment" className="text-blue-600 hover:underline">Book an Appointment</a></li>
          </ul>
        </section>

        {/* Dr Sirish Bio */}
        <section className="mt-12 bg-blue-50 rounded-2xl p-8 border border-blue-100">
          <h2 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: "var(--font-poppins)" }}>
            Your Physiotherapist — Dr Sirish
          </h2>
          <p className="text-gray-700 text-sm leading-relaxed mb-2">
            <strong>B.P.T, M.Sc Sports (London)</strong> — Senior Physiotherapist with 20+ years of experience in orthopaedic and spinal rehabilitation. Dr Sirish has treated thousands of cervical spondylosis cases and specialises in non-surgical spine management for Hyderabad&apos;s IT professionals.
          </p>
          <p className="text-gray-700 text-sm leading-relaxed">
            Clinic: Shop No. 2, Ground Floor, H.No. 11-13-714, Road No. 4, Dwarka Nagar, Green Hills Colony, Kothapet, Hyderabad 500102. Open daily 9 am – 9 pm.
          </p>
        </section>

        {/* CTA */}
        <section className="mt-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-3" style={{ fontFamily: "var(--font-poppins)" }}>
            Get Relief From Neck Pain Today
          </h2>
          <p className="text-white/90 mb-6">
            Call +91 81430 15455 or WhatsApp to book your cervical assessment. Open every day, 9 am to 9 pm.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="tel:+918143015455" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold hover:bg-blue-50 transition-colors">
              Call Now
            </a>
            <a href="https://wa.me/918143015455" target="_blank" rel="noopener noreferrer" className="bg-blue-800 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-900 transition-colors">
              WhatsApp Now
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
