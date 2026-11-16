import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Robotic Physiotherapy & Technology-Assisted Rehab in Hyderabad | Legend Physiotherapy",
  description:
    "Robotic physiotherapy and technology-assisted rehabilitation for stroke, spinal cord injury and neurological conditions in Hyderabad. Call +91 81430 15455.",
  keywords: [
    "robotic physiotherapy Hyderabad",
    "robotic rehabilitation",
    "technology assisted rehab",
    "advanced physiotherapy Hyderabad",
    "robotic gait training",
    "robotic therapy near me",
  ],
  alternates: { canonical: "/robotic-physiotherapy-hyderabad" },
  openGraph: {
    title: "Robotic Physiotherapy & Technology-Assisted Rehab in Hyderabad | Legend Physiotherapy",
    description:
      "Advanced robotic and technology-assisted rehabilitation at Legend Physiotherapy Kothapet, Hyderabad.",
    url: "/robotic-physiotherapy-hyderabad",
    siteName: "Legend Physiotherapy",
    locale: "en_IN",
    type: "website",
  },
};

const faqs = [
  {
    question: "Who benefits most from robotic physiotherapy?",
    answer:
      "Robotic rehabilitation is particularly effective for stroke survivors, spinal cord injury patients, individuals with traumatic brain injuries and those with neurological conditions like multiple sclerosis or Parkinson's disease. It is also beneficial for post-surgical patients who need intensive, repetitive movement training to regain function safely.",
  },
  {
    question: "Is robotic physiotherapy better than manual therapy?",
    answer:
      "Robotic therapy and manual therapy are complementary, not competing approaches. Robots excel at delivering high-repetition, consistent movements that are critical for neuroplasticity. Manual therapy provides the hands-on assessment, soft tissue work and clinical reasoning that machines cannot replicate. The best outcomes come from combining both approaches in a structured rehabilitation programme.",
  },
  {
    question: "How much does robotic physiotherapy cost?",
    answer:
      "The cost depends on the type of technology used and the duration of each session. We offer competitive pricing with package options for longer rehabilitation programmes. Please call +91 81430 15455 for a detailed quote based on your specific needs. Many patients find that technology-assisted rehab shortens overall recovery time, reducing total treatment cost.",
  },
  {
    question: "Is robotic rehabilitation available in Hyderabad?",
    answer:
      "Yes, Legend Physiotherapy offers technology-assisted rehabilitation in Hyderabad. Our clinic is equipped with advanced modalities including electrical stimulation devices, biofeedback systems and computerised exercise equipment. We integrate these tools with expert manual therapy and exercise prescription for comprehensive neurological and orthopaedic rehabilitation.",
  },
  {
    question: "What conditions are treated with technology-assisted rehab?",
    answer:
      "Technology-assisted rehabilitation is used for stroke recovery (hemiplegia), spinal cord injury, traumatic brain injury, multiple sclerosis, Parkinson's disease, cerebral palsy, post-surgical joint rehabilitation, chronic pain conditions and balance disorders. The specific technology is selected based on the patient's condition, goals and stage of recovery.",
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

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "var(--font-poppins)" }}>
            Robotic Physiotherapy &amp; Technology-Assisted Rehab in Hyderabad
          </h1>
          <p className="text-lg text-white/90 max-w-2xl mb-6">
            Advanced technology-driven rehabilitation for stroke, spinal cord injury and neurological recovery at Legend Physiotherapy, Kothapet.
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
            Robotic physiotherapy uses advanced mechanical devices and computer-controlled systems to assist, guide and challenge patients through precise, repetitive movements. These technologies are designed to deliver the high volumes of task-specific practice that the brain needs to rewire neural pathways &mdash; a process known as neuroplasticity. For patients recovering from stroke, spinal cord injury or other neurological conditions, robotic-assisted training can provide thousands of movement repetitions in a single session.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            At Legend Physiotherapy, we integrate technology-assisted modalities with expert manual therapy and evidence-based exercise programming. Our approach uses the strengths of each method: technology provides consistent, measurable, high-repetition training while our physiotherapists provide clinical reasoning, hands-on treatment and motivational coaching.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4" style={{ fontFamily: "var(--font-poppins)" }}>
            Robotic-Assisted Gait Training
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Gait training robots support patients in walking with a normal pattern by guiding their legs through the correct biomechanical sequence. Body-weight support systems reduce the load on weakened limbs while maintaining upright posture. This allows patients who cannot yet walk independently to begin gait training much earlier in their recovery. Research shows that early, intensive gait training significantly improves walking speed, endurance and independence after stroke.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            The robotic system provides real-time feedback on step symmetry, weight distribution and walking speed, allowing both therapist and patient to track progress objectively. As strength and coordination improve, the level of robotic assistance is gradually reduced until the patient walks independently.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4" style={{ fontFamily: "var(--font-poppins)" }}>
            Upper Limb Robotic Rehabilitation
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Upper limb robots assist patients in performing reaching, grasping and manipulation tasks that are essential for daily activities such as eating, dressing and writing. These devices can support the arm against gravity, guide movements through specific trajectories and provide resistance as strength returns. Studies demonstrate that robotic upper limb training combined with conventional therapy produces greater improvements in arm function than conventional therapy alone for stroke patients.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4" style={{ fontFamily: "var(--font-poppins)" }}>
            Biofeedback and Virtual Reality Rehabilitation
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Biofeedback systems use sensors to measure muscle activity (EMG), joint angles, balance and force production, displaying this data in real time so patients can learn to control movements they cannot yet feel or see. Visual and auditory feedback helps the brain form new motor patterns more efficiently than repetition alone.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Virtual reality rehabilitation immerses patients in interactive environments where they practise functional tasks &mdash; reaching for objects, navigating obstacles, playing movement-based games &mdash; that are both therapeutic and motivating. The engaging nature of VR increases patient participation and the number of repetitions performed, both critical factors in neurological recovery.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4" style={{ fontFamily: "var(--font-poppins)" }}>
            Electrical Stimulation and Combined Approaches
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Functional electrical stimulation (FES) activates paralysed or weakened muscles during functional tasks &mdash; for example, stimulating the ankle dorsiflexors during walking to prevent foot drop. When combined with robotic gait training, FES enhances muscle activation patterns and accelerates motor learning. Our physiotherapists design individualised programmes that combine the most appropriate technologies with manual therapy, stretching and progressive strengthening. Call{" "}
            <a href="tel:+918143015455" className="text-blue-600 font-semibold hover:underline">+91 81430 15455</a>{" "}
            or{" "}
            <a href="https://wa.me/918143015455" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-semibold hover:underline">WhatsApp us</a>{" "}
            to discuss your rehabilitation needs.
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
            <li><a href="/neuro-rehabilitation-lb-nagar" className="text-blue-600 hover:underline">Neuro Rehabilitation</a></li>
            <li><a href="/post-surgery-rehabilitation-lb-nagar" className="text-blue-600 hover:underline">Post-Surgery Rehabilitation</a></li>
            <li><a href="/vertigo-balance-rehabilitation-hyderabad" className="text-blue-600 hover:underline">Vertigo &amp; Balance Rehabilitation</a></li>
            <li><a href="/spinal-decompression-therapy-hyderabad" className="text-blue-600 hover:underline">Spinal Decompression Therapy</a></li>
            <li><a href="/contact" className="text-blue-600 hover:underline">Contact Us</a></li>
          </ul>
        </section>

        {/* Dr Sirish Bio */}
        <section className="mt-12 bg-blue-50 rounded-2xl p-8 border border-blue-100">
          <h2 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: "var(--font-poppins)" }}>
            Clinically Reviewed by Dr Sirish
          </h2>
          <p className="text-gray-700 text-sm leading-relaxed mb-2">
            <strong>B.P.T, M.Sc Sports (London)</strong> &mdash; Senior Physiotherapist with 20+ years of experience in neurological and orthopaedic rehabilitation. Dr Sirish integrates advanced technology with hands-on clinical expertise to deliver the best possible recovery outcomes.
          </p>
          <p className="text-gray-700 text-sm leading-relaxed">
            Clinic: Shop No. 2, Ground Floor, H.No. 11-13-714, Road No. 4, Dwarka Nagar, Green Hills Colony, Kothapet, Hyderabad 500102. Open daily 9 am &ndash; 9 pm.
          </p>
        </section>

        {/* CTA */}
        <section className="mt-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-3" style={{ fontFamily: "var(--font-poppins)" }}>
            Start Your Technology-Assisted Recovery
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