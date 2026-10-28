import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Spinal Decompression Therapy in Hyderabad | Legend Physiotherapy",
  description:
    "Non-surgical spinal decompression for herniated discs, sciatica and degenerative disc disease in Hyderabad. No drugs, no surgery. Call +91 81430 15455.",
  keywords: [
    "spinal decompression Hyderabad",
    "spinal decompression therapy",
    "non-surgical spinal decompression",
    "disc bulge treatment Hyderabad",
    "herniated disc treatment without surgery",
    "lumbar decompression Hyderabad",
    "cervical decompression therapy Hyderabad",
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
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Spinal Decompression Therapy at Legend Physiotherapy Hyderabad" }],
  },
};

const faqs = [
  {
    question: "What is spinal decompression therapy?",
    answer:
      "Spinal decompression therapy is a non-surgical, motorised traction treatment that gently stretches the spine to relieve pressure on spinal discs and nerves. The treatment table uses computer-controlled pulling forces in a cyclical pattern of stretch and relaxation to create negative pressure within the disc, encouraging bulging or herniated material to retract and promoting the flow of nutrients and oxygen into the disc for healing.",
  },
  {
    question: "Is spinal decompression safe?",
    answer:
      "Yes, it is a very safe, non-invasive treatment when performed by a trained physiotherapist after proper assessment. The forces are gentle and computer-controlled with safety limits. It is not suitable for patients with spinal fractures, severe osteoporosis, spinal tumours, spinal fusion hardware, abdominal aortic aneurysm, or during pregnancy. Your physiotherapist will screen for these before treatment.",
  },
  {
    question: "How many sessions of spinal decompression will I need?",
    answer:
      "A typical course consists of 15 to 25 sessions over four to eight weeks, with sessions two to three times per week. Some patients notice relief within the first few sessions, though the full benefit usually develops over the course of treatment as the disc heals. Your physiotherapist will reassess progress regularly and adjust the programme as needed.",
  },
  {
    question: "Who is a good candidate for spinal decompression?",
    answer:
      "Good candidates include patients with herniated or bulging discs, degenerative disc disease, sciatica, spinal stenosis (mild to moderate), facet joint syndrome, and chronic back or neck pain that has not responded to other conservative treatments. Patients who want to avoid surgery or have been told they need disc surgery may benefit from trying decompression therapy first.",
  },
  {
    question: "How is spinal decompression different from regular traction?",
    answer:
      "Traditional traction applies a constant pull, which can trigger muscle guarding — the body's protective tightening that limits effectiveness. Spinal decompression uses a computerised, cyclical pattern that alternates between stretch and partial release. This bypasses the muscle guarding reflex, allowing the spine to be distracted more effectively and creating the negative intradiscal pressure needed for disc retraction and nutrient flow.",
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

  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: "Spinal Decompression Therapy in Hyderabad",
    description: "Non-surgical spinal decompression for disc problems and nerve compression at Legend Physiotherapy Hyderabad.",
    url: "https://www.legendphysiotherapy.com/spinal-decompression-therapy-hyderabad",
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
            Spinal Decompression Therapy in Hyderabad
          </h1>
          <p className="text-lg text-white/90 max-w-2xl mb-6">
            Non-surgical treatment for herniated discs, sciatica and degenerative disc disease at Legend Physiotherapy, Kothapet, Hyderabad.
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
            Spinal decompression therapy is a non-surgical, drug-free treatment that uses a motorised traction table to gently stretch the spine. The computer-controlled system applies precise distraction forces in a cyclical pattern — alternating between stretch and partial release — to create negative pressure within the spinal discs. This negative intradiscal pressure has two critical effects: it encourages bulging or herniated disc material to retract back towards the centre of the disc, and it draws in fresh oxygen, water and nutrients that the compressed disc has been starved of.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Unlike open surgery or even minimally invasive spinal procedures, decompression therapy carries no risk of infection, scarring or anaesthesia complications. There is no recovery period — patients walk out of the clinic after each session and resume normal activities. For many patients with disc problems, it offers a genuine alternative to surgery.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4" style={{ fontFamily: "var(--font-poppins)" }}>
            How Spinal Decompression Works
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            You lie on a specially designed treatment table, secured with a harness around your hips. The lower section of the table moves under computer control, applying a pulling force to the lumbar spine (or cervical spine, for neck problems). The force follows a programmed cycle: a period of distraction lasting 30 to 60 seconds, followed by a brief partial release. This cycling is critical — it prevents the paraspinal muscles from going into protective spasm, which is the main limitation of older, constant-pull traction systems.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Each session lasts 30 to 45 minutes. The distraction force typically ranges from 15 to 50 per cent of your body weight, calibrated to your specific condition and comfort level. Most patients find the treatment relaxing — some even fall asleep during the session. The physiotherapist monitors you throughout and can adjust parameters at any point.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4" style={{ fontFamily: "var(--font-poppins)" }}>
            Conditions We Treat with Spinal Decompression
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
            <li><strong>Herniated and bulging discs</strong> — the primary indication. Decompression can reduce disc protrusion and relieve the pressure on spinal nerves that causes pain, tingling and weakness.</li>
            <li><strong>Degenerative disc disease</strong> — by restoring nutrient flow to dehydrated discs, decompression slows further degeneration and reduces chronic stiffness and aching.</li>
            <li><strong>Sciatica</strong> — when caused by a lumbar disc pressing on the sciatic nerve, decompression addresses the root cause rather than masking the pain with medication.</li>
            <li><strong>Spinal stenosis (mild to moderate)</strong> — opening the spinal canal through distraction can relieve the nerve compression that causes leg pain and numbness during walking.</li>
            <li><strong>Facet joint syndrome</strong> — decompression of the posterior elements of the spine reduces the load on inflamed facet joints.</li>
            <li><strong>Failed back surgery syndrome</strong> — patients who still have pain after spinal surgery may benefit from decompression therapy as a non-invasive next step.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4" style={{ fontFamily: "var(--font-poppins)" }}>
            What Results Can You Expect?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Clinical studies report success rates of 70 to 90 per cent for patients with contained disc herniations treated with spinal decompression therapy. Many patients notice a meaningful reduction in pain within the first four to six sessions. The full course of 15 to 25 sessions allows the disc to heal structurally — not just feel better temporarily.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Decompression is always combined with a targeted exercise programme — core stabilisation, flexibility work and postural retraining — to maintain the gains and prevent recurrence. This integrated approach is what sets our programme apart from standalone traction treatments.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4" style={{ fontFamily: "var(--font-poppins)" }}>
            Why Choose Legend Physiotherapy for Spinal Decompression
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
            <li><strong>Computerised decompression table</strong> — precise, programmable distraction forces with safety limits and real-time monitoring.</li>
            <li><strong>Comprehensive assessment</strong> — every patient is thoroughly screened to confirm suitability. We review MRI reports and clinical findings before starting treatment.</li>
            <li><strong>Integrated rehabilitation</strong> — decompression is combined with core strengthening, McKenzie exercises and postural correction for lasting results.</li>
            <li><strong>20+ years of experience</strong> — Dr Sirish and the team have extensive experience managing complex spinal conditions conservatively.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4" style={{ fontFamily: "var(--font-poppins)" }}>
            Book Your Spinal Assessment
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            If you have been diagnosed with a disc bulge, herniation or degenerative disc disease and want to explore a non-surgical option, call{" "}
            <a href="tel:+918143015455" className="text-blue-600 font-semibold hover:underline">+91 81430 15455</a>{" "}
            to book a spinal assessment at our Kothapet clinic. Bring your MRI report if you have one.
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
            <li><a href="/neck-pain-cervical-physiotherapy-lb-nagar" className="text-blue-600 hover:underline">Neck Pain & Cervical Physiotherapy</a></li>
            <li><a href="/robotic-physiotherapy-hyderabad" className="text-blue-600 hover:underline">Robotic Physiotherapy</a></li>
            <li><a href="/contact" className="text-blue-600 hover:underline">Contact Us</a></li>
          </ul>
        </section>

        {/* Dr Sirish Bio */}
        <section className="mt-12 bg-blue-50 rounded-2xl p-8 border border-blue-100">
          <h2 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: "var(--font-poppins)" }}>
            Your Physiotherapist — Dr Sirish
          </h2>
          <p className="text-gray-700 text-sm leading-relaxed mb-2">
            <strong>B.P.T, M.Sc Sports (London)</strong> — Senior Physiotherapist with 20+ years of experience in orthopaedic and neurological rehabilitation. Dr Sirish specialises in non-surgical spinal management, combining decompression therapy with targeted exercise and manual therapy for patients with disc problems and chronic spinal pain.
          </p>
          <p className="text-gray-700 text-sm leading-relaxed">
            Clinic: Shop No. 2, Ground Floor, H.No. 11-13-714, Road No. 4, Dwarka Nagar, Green Hills Colony, Kothapet, Hyderabad 500102. Open daily 9 am – 9 pm.
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
