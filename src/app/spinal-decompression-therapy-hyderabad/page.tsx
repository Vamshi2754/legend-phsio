import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Spinal Decompression Therapy in Hyderabad | Legend Physiotherapy",
  description:
    "Non-surgical spinal decompression therapy for disc bulge, herniation and sciatica in Hyderabad. Traction therapy combined with core stabilisation. Call +91 81430 15455.",
  keywords: [
    "spinal decompression therapy Hyderabad",
    "non-surgical disc treatment",
    "traction therapy Hyderabad",
    "herniated disc treatment without surgery",
    "spinal decompression near me",
    "disc bulge treatment Hyderabad",
  ],
  alternates: { canonical: "/spinal-decompression-therapy-hyderabad" },
  openGraph: {
    title: "Spinal Decompression Therapy in Hyderabad | Legend Physiotherapy",
    description:
      "Non-surgical spinal decompression for disc problems and sciatica at Legend Physiotherapy Kothapet, Hyderabad.",
    url: "/spinal-decompression-therapy-hyderabad",
    siteName: "Legend Physiotherapy",
    locale: "en_IN",
    type: "website",
  },
};

const faqs = [
  {
    question: "Does spinal decompression work for herniated discs?",
    answer:
      "Yes, spinal decompression therapy is one of the most effective non-surgical treatments for disc herniation. By creating negative pressure within the disc space, decompression encourages the bulging or herniated disc material to retract, reduces pressure on compressed nerves and promotes nutrient-rich fluid flow into the disc for healing. Clinical studies report success rates of 70 to 90 per cent for pain reduction.",
  },
  {
    question: "How many spinal decompression sessions are needed?",
    answer:
      "A typical treatment course involves 15 to 20 sessions over six to eight weeks, with two to three sessions per week. Some patients experience significant relief within the first few sessions, while others require the full course. Each session lasts 30 to 45 minutes. your physiotherapist will monitor your progress with regular reassessments.",
  },
  {
    question: "Is spinal decompression therapy painful?",
    answer:
      "No, spinal decompression is generally painless. Most patients find it relaxing and some even fall asleep during treatment. You will feel a gentle stretching sensation in your spine as the traction force is applied. The force is carefully calibrated and can be adjusted at any time based on your comfort. Mild muscle soreness after the first few sessions is normal and temporary.",
  },
  {
    question: "Who should avoid spinal decompression therapy?",
    answer:
      "Spinal decompression is not suitable for patients with spinal fractures, severe osteoporosis, spinal tumours, abdominal aortic aneurysm, spinal implants or hardware, pregnancy, or advanced spinal instability. Patients with cauda equina syndrome require emergency medical evaluation rather than conservative treatment. A thorough assessment is always performed before starting therapy.",
  },
  {
    question: "How is spinal decompression different from chiropractic adjustment?",
    answer:
      "Spinal decompression uses sustained or intermittent traction forces applied over 30 to 45 minutes to create negative intradiscal pressure and promote disc healing. Chiropractic adjustments involve quick, short-lever manipulations aimed at restoring joint mobility. Both have their place in spinal care, but decompression specifically targets disc pathology while adjustments focus on joint mechanics.",
  },
];

export default function SpinalDecompressionPage() {
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
            Spinal Decompression Therapy in Hyderabad
          </h1>
          <p className="text-lg text-white/90 max-w-2xl mb-6">
            Non-surgical treatment for disc bulge, herniation and sciatica using advanced spinal decompression at Legend Physiotherapy, Kothapet.
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
            What Is Spinal Decompression Therapy?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Spinal decompression therapy is a non-surgical traction-based treatment that gently stretches the spine to relieve pressure on compressed discs and nerves. By creating negative pressure within the intervertebral disc &mdash; a phenomenon called negative intradiscal pressure &mdash; the treatment encourages bulging or herniated disc material to retract back toward the centre of the disc, away from the compressed nerve root.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            This negative pressure also draws nutrient-rich fluid and oxygen into the disc, which is essential for healing. Spinal discs have a limited blood supply, so this diffusion mechanism is the primary way they receive nutrition. Decompression therapy essentially restores this natural nutrient exchange process that has been disrupted by compression and degeneration.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4" style={{ fontFamily: "var(--font-poppins)" }}>
            Conditions Treated with Spinal Decompression
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
            <li><strong>Disc bulge and herniation</strong> &mdash; the primary indication for decompression therapy, effective for both lumbar and cervical disc protrusions.</li>
            <li><strong>Sciatica</strong> &mdash; leg pain caused by a herniated disc pressing on the sciatic nerve often responds dramatically to decompression.</li>
            <li><strong>Spinal stenosis</strong> &mdash; narrowing of the spinal canal that compresses nerves can be relieved by creating more space through traction.</li>
            <li><strong>Degenerative disc disease</strong> &mdash; age-related disc thinning and dehydration benefit from improved nutrient diffusion during decompression.</li>
            <li><strong>Facet joint syndrome</strong> &mdash; traction opens the facet joints and reduces compression-related inflammation and pain.</li>
            <li><strong>Failed back surgery syndrome</strong> &mdash; patients with persistent pain after spinal surgery may benefit when the cause is ongoing disc compression.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4" style={{ fontFamily: "var(--font-poppins)" }}>
            Mechanical vs Manual Traction
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Mechanical traction uses a motorised table that applies precisely controlled, sustained or intermittent pulling forces to the spine. The force, angle, duration and cycling pattern can be programmed to target specific spinal segments. Manual traction, performed by the physiotherapist&apos;s hands, offers more tactile feedback and can be directed at individual vertebral levels. At Legend Physiotherapy, we use both approaches depending on the patient&apos;s condition &mdash; mechanical decompression for sustained treatment protocols and manual traction for targeted segmental mobilisation.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4" style={{ fontFamily: "var(--font-poppins)" }}>
            Treatment Protocol
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Each session begins with a warm-up using moist heat or ultrasound to relax the paraspinal muscles. You are then positioned on the decompression table with a harness around your pelvis. The motorised system applies a gentle pulling force &mdash; typically 25 to 50 per cent of your body weight &mdash; that is cycled between stretch and rest phases over 30 to 45 minutes. Most patients find the treatment relaxing.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            After decompression, we perform core stabilisation exercises to strengthen the muscles that support your spine and prevent recurrence. This combined approach &mdash; decompression followed by progressive strengthening &mdash; produces better long-term outcomes than either treatment alone. The full course typically involves 15 to 20 sessions over six to eight weeks.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4" style={{ fontFamily: "var(--font-poppins)" }}>
            Why Choose Legend Physiotherapy
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Our Kothapet clinic combines spinal decompression with manual therapy, core stabilisation, McKenzie exercises and ergonomic advice for a comprehensive spine care programme. Dr Sirish and the team have treated thousands of patients with disc problems, helping many avoid surgery. Open daily from 9 am to 9 pm. Call{" "}
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
            <li><a href="/back-pain-physiotherapy-lb-nagar" className="text-blue-600 hover:underline">Back Pain Physiotherapy</a></li>
            <li><a href="/sciatica-physiotherapy-lb-nagar" className="text-blue-600 hover:underline">Sciatica Physiotherapy</a></li>
            <li><a href="/slip-disc-treatment-hyderabad" className="text-blue-600 hover:underline">Slip Disc Treatment</a></li>
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
            <strong>B.P.T, M.Sc Sports (London)</strong> &mdash; Senior Physiotherapist with 20+ years of experience in spinal rehabilitation and pain management. Dr Sirish has helped thousands of patients with disc problems recover without surgery through decompression therapy and progressive exercise.
          </p>
          <p className="text-gray-700 text-sm leading-relaxed">
            Clinic: Shop No. 2, Ground Floor, H.No. 11-13-714, Road No. 4, Dwarka Nagar, Green Hills Colony, Kothapet, Hyderabad 500102. Open daily 9 am &ndash; 9 pm.
          </p>
        </section>

        {/* CTA */}
        <section className="mt-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-3" style={{ fontFamily: "var(--font-poppins)" }}>
            Book a Spinal Decompression Session
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
