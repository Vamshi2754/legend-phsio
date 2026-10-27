import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sciatica & Slip Disc Physiotherapy in LB Nagar | Legend",
  description:
    "Physiotherapy for sciatica and slip disc at our Kothapet clinic near LB Nagar. Evidence-based treatment, home exercises and home visits. Call +91 81430 15455.",
  alternates: { canonical: "/sciatica-physiotherapy-lb-nagar" },
  openGraph: {
    title: "Sciatica & Slip Disc Physiotherapy in LB Nagar | Legend",
    description:
      "Physiotherapy for sciatica and slip disc at our Kothapet clinic near LB Nagar, Hyderabad.",
    type: "website",
    url: "/sciatica-physiotherapy-lb-nagar",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Legend Physiotherapy clinic, Kothapet" }],
  },
};

const faqs = [
  {
    question: "Can sciatica be treated without surgery?",
    answer:
      "In many cases, yes. Research shows that the majority of sciatica episodes improve with conservative treatment including physiotherapy, exercise and pain management. Surgery is usually considered only when there is significant neurological deficit or when symptoms have not responded to several months of structured physiotherapy. Your physiotherapist and doctor will guide you on the best path.",
  },
  {
    question: "How long does sciatica take to settle?",
    answer:
      "Mild to moderate sciatica often improves noticeably within 4 to 6 weeks of starting physiotherapy, though some patients need 8 to 12 weeks. Severe or chronic cases may take longer. Consistent attendance and completing your home exercise programme are the biggest factors in recovery speed.",
  },
  {
    question: "Which exercises should I avoid with sciatica?",
    answer:
      "Generally, avoid heavy dead-lifts, deep forward bends, sit-ups on a flat surface and any movement that significantly increases your leg pain. Your physiotherapist will give you a personalised list based on the direction of your disc problem. Some movements that seem risky are actually safe when performed correctly — guidance matters more than blanket rules.",
  },
  {
    question: "Can you visit me at home if walking is hard?",
    answer:
      "Yes. We offer home-visit physiotherapy across East Hyderabad and beyond. If you are in acute pain and cannot travel to the Kothapet clinic, call us on +91 81430 15455 to arrange a visit. Our therapist will bring portable equipment and start your treatment at home.",
  },
];

export default function SciaticaPage() {
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
            Sciatica and Slip Disc Physiotherapy in LB Nagar, Hyderabad
          </h1>
          <p className="text-lg text-white/90 max-w-2xl mb-6">
            Evidence-based physiotherapy for sciatic nerve pain and disc problems. Clinic treatment
            in Kothapet or home visits if you cannot travel.
          </p>
          <a
            href="tel:+918143015455"
            className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-lg font-bold hover:bg-blue-50 transition-colors"
          >
            Book a Sciatica Assessment: +91 81430 15455
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
            What Sciatica Is and What Causes It
          </h2>
          <p>
            Sciatica is pain that travels along the sciatic nerve — from the lower back through the
            buttock and down the back of the leg. It is a symptom, not a diagnosis in itself. The
            most common causes include:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
            <li>
              <strong>Herniated (slip) disc</strong> — the soft centre of a spinal disc pushes out
              and presses on a nerve root. This is the single most common cause in patients under
              50.
            </li>
            <li>
              <strong>Spinal stenosis</strong> — narrowing of the spinal canal, more common in older
              adults, which compresses the nerves.
            </li>
            <li>
              <strong>Piriformis syndrome</strong> — the piriformis muscle in the buttock tightens
              and irritates the sciatic nerve as it passes underneath.
            </li>
            <li>
              <strong>Degenerative disc disease</strong> — age-related changes that reduce disc
              height and alter spinal mechanics.
            </li>
          </ul>
          <p>
            The pain can range from a dull ache to a sharp, burning sensation. Some patients also
            feel numbness, tingling or weakness in the affected leg.
          </p>

          {/* Section 2 */}
          <h2
            className="text-2xl font-bold text-gray-900 mt-10 mb-4"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            How We Assess Nerve Pain
          </h2>
          <p>
            At your first visit, Dr&nbsp;Sirish or a member of the team will carry out a detailed
            assessment. This includes:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
            <li>A history of when and how the pain started, and what makes it better or worse.</li>
            <li>
              Neurological tests — reflexes, sensation and muscle power in the leg — to identify
              which nerve root is involved.
            </li>
            <li>
              Movement tests such as the straight-leg raise to reproduce your symptoms in a
              controlled way.
            </li>
            <li>
              Posture and lumbar-spine assessment to understand the mechanical factors contributing to
              your pain.
            </li>
          </ul>
          <p>
            If your symptoms suggest a serious cause, we will refer you for imaging (MRI) or to a
            specialist. Many patients, however, can start physiotherapy based on the clinical
            assessment alone.
          </p>

          {/* Section 3 */}
          <h2
            className="text-2xl font-bold text-gray-900 mt-10 mb-4"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Treatment Plan and Home Exercises
          </h2>
          <p>
            Treatment is tailored to the direction and severity of your disc problem. A typical plan
            includes:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
            <li>
              <strong>Directional-preference exercises</strong> — specific movements (often
              extension-based) that help centralise the pain, meaning it moves from the leg back
              toward the spine. This is a positive sign that the disc is responding.
            </li>
            <li>
              <strong>Nerve glides and mobilisation</strong> — gentle techniques to improve the
              sciatic nerve&rsquo;s ability to slide freely through surrounding tissues.
            </li>
            <li>
              <strong>Core stability work</strong> — progressive strengthening of the deep
              stabilisers that support the lumbar spine and reduce the load on the disc.
            </li>
            <li>
              <strong>Manual therapy</strong> — joint mobilisation and soft-tissue techniques to
              reduce muscle guarding and improve spinal movement.
            </li>
            <li>
              <strong>Home exercise programme</strong> — you will receive a set of exercises to
              perform daily between sessions. Consistency with these exercises is the single most
              important factor in recovery.
            </li>
          </ul>

          {/* Section 4 */}
          <h2
            className="text-2xl font-bold text-gray-900 mt-10 mb-4"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Physiotherapy or Surgery: What the Evidence Says
          </h2>
          <p>
            Large studies show that most patients with sciatica from a herniated disc recover with
            physiotherapy and time. Surgery may produce faster initial pain relief, but long-term
            outcomes at one to two years are often similar between surgical and non-surgical groups.
            Surgery is generally recommended when:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
            <li>There is progressive muscle weakness in the leg.</li>
            <li>Bladder or bowel function is affected (this is a medical emergency — see below).</li>
            <li>Pain has not responded to at least 6 to 12 weeks of structured physiotherapy.</li>
          </ul>
          <p>
            Your physiotherapist and doctor will discuss the options with you based on your specific
            findings.
          </p>

          {/* Section 5 — Emergency */}
          <div className="mt-10 bg-red-50 border border-red-200 rounded-xl p-6">
            <h2
              className="text-2xl font-bold text-red-800 mb-3"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              Emergency Signs — Go to a Hospital
            </h2>
            <p className="text-red-800 mb-3">
              Seek immediate medical attention if you experience any of the following alongside
              sciatica:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 text-red-800">
              <li>Numbness in the groin or inner thighs (saddle area).</li>
              <li>Loss of bladder or bowel control, or inability to urinate.</li>
              <li>Rapidly worsening weakness in one or both legs.</li>
            </ul>
            <p className="text-red-800 mt-3">
              These may indicate <strong>cauda equina syndrome</strong>, which requires emergency
              surgery. Do not wait — go to the nearest hospital immediately.
            </p>
          </div>

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
              <a
                href="/blog/physiotherapy-vs-surgery-slip-disc-sciatica-hyderabad"
                className="text-blue-600 hover:underline"
              >
                Physiotherapy vs Surgery for Slip Disc and Sciatica
              </a>
            </li>
            <li>
              <a
                href="/back-pain-physiotherapy-lb-nagar"
                className="text-blue-600 hover:underline"
              >
                Back Pain Physiotherapy in LB Nagar
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
            Legend Physiotherapy team at the Kothapet clinic and has treated hundreds of patients with
            sciatica and disc-related pain.
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
