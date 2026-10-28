import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Robotic Physiotherapy in Hyderabad | Legend Physiotherapy",
  description:
    "Advanced robotic and technology-assisted physiotherapy for stroke recovery, spinal cord injury and neurological rehabilitation in Hyderabad. Call +91 81430 15455.",
  keywords: [
    "robotic physiotherapy Hyderabad",
    "robotic rehabilitation Hyderabad",
    "technology assisted physiotherapy",
    "advanced physiotherapy Hyderabad",
    "robotic rehab near me",
    "automated physiotherapy treatment",
    "neuro robotic rehabilitation Hyderabad",
  ],
  alternates: { canonical: "/robotic-physiotherapy-hyderabad" },
  openGraph: {
    title: "Robotic Physiotherapy in Hyderabad | Legend Physiotherapy",
    description:
      "Technology-assisted rehabilitation for neurological and orthopaedic conditions at Legend Physiotherapy Kothapet, Hyderabad.",
    url: "/robotic-physiotherapy-hyderabad",
    siteName: "Legend Physiotherapy",
    locale: "en_IN",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Robotic Physiotherapy at Legend Physiotherapy Hyderabad" }],
  },
};

const faqs = [
  {
    question: "What is robotic physiotherapy?",
    answer:
      "Robotic physiotherapy uses computer-controlled devices and technology-assisted equipment to guide patients through precise, repetitive movements during rehabilitation. These devices provide consistent resistance, real-time feedback and measurable data on each session, allowing the physiotherapist to track progress objectively and adjust treatment with precision that manual therapy alone cannot achieve.",
  },
  {
    question: "Who benefits most from robotic rehabilitation?",
    answer:
      "Patients recovering from stroke, traumatic brain injury, spinal cord injury, Parkinson's disease and other neurological conditions benefit greatly from the high-repetition, guided movements that robotic devices provide. It is also effective for post-surgical joint rehabilitation (knee and hip replacements), balance disorders and gait retraining in elderly patients at risk of falls.",
  },
  {
    question: "How is robotic physiotherapy different from regular physiotherapy?",
    answer:
      "Traditional physiotherapy relies on the therapist's hands and the patient's voluntary effort. Robotic physiotherapy adds computer-guided assistance that can support, resist or guide movements with exact force and trajectory. This means patients who are too weak to move a limb on their own can still perform hundreds of repetitions per session — the device fills in the missing force while the patient contributes what they can. The result is faster neural relearning and measurable improvement tracked session to session.",
  },
  {
    question: "How many robotic physiotherapy sessions will I need?",
    answer:
      "The number of sessions depends on the condition and its severity. Stroke patients typically undergo 20 to 40 sessions over several weeks. Post-surgical knee or hip patients may need 10 to 20 sessions. Your physiotherapist will set functional goals — such as walking distance, grip strength or balance scores — and adjust the programme as you hit milestones.",
  },
  {
    question: "Is robotic physiotherapy safe?",
    answer:
      "Yes. The devices are designed with built-in safety limits for force, speed and range of motion. A trained physiotherapist supervises every session and can adjust parameters in real time. The equipment stops automatically if it detects resistance beyond safe limits. Robotic rehabilitation is considered one of the safest forms of intensive therapy, particularly for patients with significant weakness or poor balance.",
  },
];

export default function RoboticPhysiotherapyPage() {
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
    name: "Robotic Physiotherapy in Hyderabad",
    description: "Advanced robotic and technology-assisted rehabilitation at Legend Physiotherapy Hyderabad.",
    url: "https://www.legendphysiotherapy.com/robotic-physiotherapy-hyderabad",
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
            Robotic Physiotherapy in Hyderabad
          </h1>
          <p className="text-lg text-white/90 max-w-2xl mb-6">
            Technology-assisted rehabilitation for stroke, neurological conditions and post-surgical recovery at Legend Physiotherapy, Kothapet, Hyderabad.
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
            What Is Robotic Physiotherapy?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Robotic physiotherapy combines traditional rehabilitation principles with computer-controlled devices that guide, assist or resist movement during therapy sessions. These systems range from motorised limb trainers and continuous passive motion (CPM) machines to advanced exoskeletons and sensor-based balance platforms. The common thread is precision — every movement is monitored, measured and adjusted in real time.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            The concept is rooted in neuroplasticity — the brain&apos;s ability to reorganise itself by forming new neural connections. Research shows that high-repetition, task-specific practice is one of the strongest drivers of neural recovery after stroke and brain injury. Robotic devices make it possible to perform hundreds or even thousands of repetitions per session, far more than is feasible with manual therapy alone, while keeping each movement biomechanically correct.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4" style={{ fontFamily: "var(--font-poppins)" }}>
            How Technology-Assisted Rehabilitation Works
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            During a robotic physiotherapy session, the patient is positioned in or connected to a device that targets the affected limb or body region. Sensors detect the patient&apos;s voluntary effort — however small — and the device provides just enough assistance to complete the intended movement. This &ldquo;assist-as-needed&rdquo; approach encourages the patient&apos;s own nervous system to participate actively rather than being passively moved.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            As the patient improves, the device reduces its assistance, progressively challenging the recovering muscles and neural pathways. All data — force, speed, range of motion, number of repetitions, symmetry — is recorded and displayed, giving both the patient and the physiotherapist objective evidence of progress. This data-driven approach eliminates guesswork and keeps motivation high.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4" style={{ fontFamily: "var(--font-poppins)" }}>
            Conditions We Treat with Robotic Rehabilitation
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
            <li><strong>Stroke recovery</strong> — upper limb and lower limb retraining, gait rehabilitation and hand function recovery. Robotic devices allow intensive practice even when the patient has minimal voluntary movement.</li>
            <li><strong>Spinal cord injury</strong> — locomotor training using body-weight-supported treadmill systems and robotic gait trainers to retrain walking patterns.</li>
            <li><strong>Parkinson&apos;s disease</strong> — rhythmic, repetitive training improves gait speed, step length and balance, reducing the risk of freezing and falls.</li>
            <li><strong>Traumatic brain injury</strong> — cognitive-motor dual-task training using interactive robotic systems that challenge both movement and attention simultaneously.</li>
            <li><strong>Post-surgical joint rehabilitation</strong> — continuous passive motion and progressive resistance training after knee replacement, hip replacement and ACL reconstruction.</li>
            <li><strong>Balance and fall prevention</strong> — sensor-based balance platforms provide real-time visual feedback, training proprioception and postural control in elderly patients.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4" style={{ fontFamily: "var(--font-poppins)" }}>
            Advantages Over Manual Therapy Alone
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
            <li><strong>Higher repetition volume</strong> — robotic devices can deliver 500 to 1,000+ movement repetitions per session, compared to 50 to 100 with manual therapy.</li>
            <li><strong>Consistent precision</strong> — every repetition follows the exact same trajectory and force profile, reducing the risk of compensatory movement patterns.</li>
            <li><strong>Objective measurement</strong> — session-to-session data shows exactly how strength, range and speed are changing, making it easy to demonstrate progress to patients and referring doctors.</li>
            <li><strong>Patient engagement</strong> — many robotic systems include gamified visual feedback that keeps patients motivated during intensive training blocks.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4" style={{ fontFamily: "var(--font-poppins)" }}>
            What to Expect at Legend Physiotherapy
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Your first visit begins with a comprehensive assessment — neurological examination, functional testing and goal-setting. Based on your condition and goals, your physiotherapist will design a programme that combines robotic-assisted training with hands-on manual therapy, therapeutic exercise and, where appropriate, other modalities such as electrical stimulation or laser therapy.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Each session lasts 45 to 60 minutes. A trained physiotherapist is with you throughout, monitoring the equipment, adjusting parameters and coaching your movement quality. Progress reviews happen every two weeks, with treatment goals updated based on your measured improvements. Call{" "}
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
            <li><a href="/neuro-physiotherapy-lb-nagar" className="text-blue-600 hover:underline">Neurological Physiotherapy</a></li>
            <li><a href="/post-surgery-physiotherapy-lb-nagar" className="text-blue-600 hover:underline">Post-Surgery Physiotherapy</a></li>
            <li><a href="/laser-therapy-physiotherapy-hyderabad" className="text-blue-600 hover:underline">Laser Therapy</a></li>
            <li><a href="/spinal-decompression-therapy-hyderabad" className="text-blue-600 hover:underline">Spinal Decompression Therapy</a></li>
            <li><a href="/contact" className="text-blue-600 hover:underline">Contact Us</a></li>
          </ul>
        </section>

        {/* Dr Sirish Bio */}
        <section className="mt-12 bg-blue-50 rounded-2xl p-8 border border-blue-100">
          <h2 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: "var(--font-poppins)" }}>
            Your Physiotherapist — Dr Sirish
          </h2>
          <p className="text-gray-700 text-sm leading-relaxed mb-2">
            <strong>B.P.T, M.Sc Sports (London)</strong> — Senior Physiotherapist with 20+ years of experience in orthopaedic and neurological rehabilitation. Dr Sirish combines hands-on clinical expertise with technology-assisted treatment to maximise recovery outcomes for patients with complex conditions.
          </p>
          <p className="text-gray-700 text-sm leading-relaxed">
            Clinic: Shop No. 2, Ground Floor, H.No. 11-13-714, Road No. 4, Dwarka Nagar, Green Hills Colony, Kothapet, Hyderabad 500102. Open daily 9 am – 9 pm.
          </p>
        </section>

        {/* CTA */}
        <section className="mt-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-3" style={{ fontFamily: "var(--font-poppins)" }}>
            Book a Robotic Rehabilitation Assessment
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
