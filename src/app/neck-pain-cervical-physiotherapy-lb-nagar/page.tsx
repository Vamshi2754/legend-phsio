import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Neck Pain & Cervical Physiotherapy in LB Nagar | Legend",
  description:
    "Physiotherapy for neck pain and cervical spondylosis at our Kothapet clinic near LB Nagar. Mobilisation, strengthening and traction. Call +91 81430 15455.",
  alternates: { canonical: "/neck-pain-cervical-physiotherapy-lb-nagar" },
  openGraph: {
    title: "Neck Pain & Cervical Physiotherapy in LB Nagar | Legend",
    description:
      "Physiotherapy for neck pain and cervical spondylosis at our Kothapet clinic near LB Nagar.",
    type: "website",
    url: "/neck-pain-cervical-physiotherapy-lb-nagar",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Legend Physiotherapy clinic, Kothapet" }],
  },
};

const faqs = [
  {
    question: "Can physiotherapy help cervical spondylosis?",
    answer:
      "Yes. Physiotherapy is one of the main treatments for cervical spondylosis. A combination of manual mobilisation, specific neck-strengthening exercises and postural correction may reduce pain and stiffness over several weeks. Results vary from person to person, but many patients notice meaningful improvement within 6 to 10 sessions.",
  },
  {
    question: "Is neck traction safe?",
    answer:
      "Mechanical or manual traction is generally safe when applied by a trained physiotherapist after a thorough assessment. It is not suitable for everyone — conditions such as spinal instability, severe osteoporosis or certain vascular problems are contra-indications. Your therapist will decide whether traction is appropriate for you.",
  },
  {
    question: "Which pillow is best for neck pain?",
    answer:
      "A medium-firm pillow that keeps your head and neck aligned with your spine is usually the best choice. Memory-foam contour pillows work well for many patients. Avoid very high or very flat pillows. We can advise you during your session based on your sleeping position.",
  },
  {
    question: "How many sessions does neck pain usually take?",
    answer:
      "Most patients with straightforward neck pain see noticeable improvement in 4 to 8 sessions over two to four weeks. Chronic conditions such as cervical spondylosis may need 10 to 15 sessions. Your therapist will set milestones and adjust the plan as you progress.",
  },
];

export default function NeckPainPage() {
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
            className="text-3xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Neck Pain and Cervical Spondylosis Physiotherapy in LB Nagar
          </h1>
          <p className="text-lg text-white/90 max-w-2xl mb-6">
            Targeted treatment for neck stiffness, cervical spondylosis, text neck and radiating arm
            pain at our Kothapet clinic — a few minutes from LB Nagar and Dilsukhnagar.
          </p>
          <a
            href="tel:+918143015455"
            className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-lg font-bold hover:bg-blue-50 transition-colors"
          >
            Book a Neck Assessment: +91 81430 15455
          </a>
        </div>
      </section>

      {/* Content */}
      <article className="max-w-4xl mx-auto px-6 py-12">
        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
          {/* Section 1 */}
          <h2
            className="text-2xl font-bold text-gray-900 mt-10 mb-4"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Neck Problems We Treat
          </h2>
          <p>
            At Legend Physiotherapy we see patients with a wide range of neck complaints.
            The most common conditions we help with include:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
            <li>
              <strong>Cervical spondylosis</strong> — age-related wear of the discs and joints in the
              cervical spine, causing stiffness and aching that sometimes spreads into the shoulders.
            </li>
            <li>
              <strong>Stiff neck and muscle spasm</strong> — often triggered by poor sleeping
              positions, sudden movements or stress.
            </li>
            <li>
              <strong>&ldquo;Text neck&rdquo;</strong> — forward-head posture from prolonged phone or
              laptop use, increasingly common among young professionals in Hyderabad&rsquo;s IT
              corridor.
            </li>
            <li>
              <strong>Cervical radiculopathy</strong> — a pinched nerve in the neck that sends pain,
              tingling or weakness down the arm and into the hand.
            </li>
          </ul>

          {/* Section 2 */}
          <h2
            className="text-2xl font-bold text-gray-900 mt-10 mb-4"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            How We Assess Your Neck
          </h2>
          <p>
            Every patient begins with a detailed one-on-one assessment. Dr&nbsp;Sirish or a member
            of our team will check your range of movement, test nerve function in your arms and
            hands, assess muscle strength and palpate the cervical joints. We may ask about your
            daily posture habits, workstation setup and sleep position. If imaging such as an X-ray
            or MRI is needed, we will refer you — but many patients do not need scans before
            starting treatment.
          </p>

          {/* Section 3 */}
          <h2
            className="text-2xl font-bold text-gray-900 mt-10 mb-4"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Treatment: Mobilisation, Strengthening and Traction
          </h2>
          <p>
            Your treatment plan is built around your specific diagnosis and goals. Common approaches
            we use include:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
            <li>
              <strong>Manual mobilisation</strong> — gentle, graded movements applied to stiff
              cervical joints to restore range and reduce pain.
            </li>
            <li>
              <strong>Strengthening exercises</strong> — progressive exercises for the deep neck
              flexors and scapular stabilisers that support the cervical spine long-term.
            </li>
            <li>
              <strong>Cervical traction</strong> — mechanical or manual traction to decompress nerve
              roots, used where clinically suitable after a full assessment.
            </li>
            <li>
              <strong>Electrotherapy and laser</strong> — TENS, ultrasound or low-level laser therapy
              may be used alongside exercises to manage pain in the early stages.
            </li>
          </ul>
          <p>
            Most patients begin to notice improvement within 3 to 5 sessions, though chronic
            conditions may take longer. We set clear milestones and adjust the plan as you progress.
          </p>

          {/* Section 4 */}
          <h2
            className="text-2xl font-bold text-gray-900 mt-10 mb-4"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Workstation and Pillow Advice for Desk Workers
          </h2>
          <p>
            A large proportion of the neck pain we see at the clinic is linked to prolonged desk
            work. Small changes can make a real difference:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
            <li>Position your screen at eye level so you are not looking down or up.</li>
            <li>Keep your keyboard and mouse close to avoid reaching forward.</li>
            <li>Take a 30-second break every 30 minutes to move your neck and shoulders.</li>
            <li>
              Choose a pillow that supports the natural curve of your neck — a medium-firm contour
              pillow suits most people.
            </li>
          </ul>
          <p>
            During your sessions we will review your specific setup and suggest adjustments that may
            help prevent recurrence.
          </p>

          {/* Section 5 */}
          <h2
            className="text-2xl font-bold text-gray-900 mt-10 mb-4"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Warning Signs That Need a Doctor
          </h2>
          <p>
            Most neck pain responds well to physiotherapy, but certain symptoms require urgent
            medical attention. Please go to a hospital or call your doctor if you experience:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
            <li>Severe headache with a stiff neck and fever (possible meningitis).</li>
            <li>Progressive weakness or loss of coordination in the arms or legs.</li>
            <li>Loss of bladder or bowel control.</li>
            <li>Neck pain after a fall, road accident or other trauma.</li>
          </ul>

          {/* FAQ */}
          <h2
            className="text-2xl font-bold text-gray-900 mt-12 mb-6"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i}>
                <h3 className="font-bold text-gray-900 mb-2">{faq.question}</h3>
                <p>{faq.answer}</p>
              </div>
            ))}
          </div>

          {/* Internal links */}
          <h2
            className="text-2xl font-bold text-gray-900 mt-12 mb-4"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Related Reading
          </h2>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>
              <a href="/blog/neck-and-shoulder-care" className="text-blue-600 hover:underline">
                Neck and Shoulder Care — Tips from Our Team
              </a>
            </li>
            <li>
              <a href="/blog/posture-correction-guide" className="text-blue-600 hover:underline">
                Posture Correction Guide
              </a>
            </li>
            <li>
              <a
                href="/shoulder-pain-physiotherapy-lb-nagar"
                className="text-blue-600 hover:underline"
              >
                Shoulder Pain and Frozen Shoulder Physiotherapy
              </a>
            </li>
          </ul>
        </div>

        {/* Dr Sirish bio */}
        <div className="mt-12 bg-blue-50 rounded-2xl p-6 md:p-8 border border-blue-100">
          <h2
            className="text-xl font-bold text-gray-900 mb-3"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Your Physiotherapist — Dr&nbsp;Sirish
          </h2>
          <p className="text-gray-700 text-sm leading-relaxed">
            Dr&nbsp;Sirish holds a B.P.T and M.Sc in Sports Science (London) with over 20&nbsp;years
            of clinical experience in orthopaedic and neurological rehabilitation. He leads the
            Legend Physiotherapy team at the Kothapet clinic.
          </p>
        </div>

        {/* Clinic info + Map */}
        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <div>
            <h2
              className="text-xl font-bold text-gray-900 mb-3"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              Clinic Details
            </h2>
            <p className="text-gray-700 text-sm mb-2">
              <strong>Address:</strong> Shop No. 2, Ground Floor, H.No. 11-13-714, Road No. 4,
              Dwarka Nagar, Green Hills Colony, Kothapet, Hyderabad 500102
            </p>
            <p className="text-gray-700 text-sm mb-2">
              <strong>Hours:</strong> Monday – Sunday, 9 am to 9 pm
            </p>
            <p className="text-gray-700 text-sm mb-4">
              <strong>Phone:</strong>{" "}
              <a href="tel:+918143015455" className="text-blue-600 hover:underline">
                +91 81430 15455
              </a>
            </p>
            <div className="flex gap-3">
              <a
                href="tel:+918143015455"
                className="bg-blue-600 text-white px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-blue-700 transition-colors"
              >
                Call Now
              </a>
              <a
                href="https://wa.me/919966193413"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-green-600 transition-colors"
              >
                WhatsApp
              </a>
              <a
                href="/book-appointment"
                className="bg-gray-100 text-gray-800 px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-gray-200 transition-colors"
              >
                Book Online
              </a>
            </div>
          </div>
          <div className="rounded-xl overflow-hidden shadow border border-gray-200 h-[300px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.5!2d78.5457583!3d17.3597024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb990043784b77%3A0x55126327d4caeb32!2sLegend%20Physiotherapy%20Ortho%20and%20Neuro%20Pain%20Management%20Clinic%20%7C%20Kothapet%20%7C%20Lb%20Nagar!5e0!3m2!1sen!2sin!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Legend Physiotherapy, Kothapet on Google Maps"
            />
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
}
