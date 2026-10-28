import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Slip Disc Treatment Without Surgery in Hyderabad | Legend Physiotherapy",
  description:
    "Non-surgical slip disc and disc bulge treatment in Hyderabad. Spinal decompression, McKenzie method, core stabilisation. Call +91 81430 15455.",
  keywords: [
    "slip disc treatment without surgery Hyderabad",
    "disc bulge treatment Hyderabad",
    "herniated disc physiotherapy Hyderabad",
    "slipped disc treatment Hyderabad",
    "spinal decompression therapy Hyderabad",
    "L4 L5 disc bulge treatment Hyderabad",
    "best physiotherapy for slip disc Hyderabad",
  ],
  alternates: { canonical: "/slip-disc-treatment-hyderabad" },
  openGraph: {
    title: "Slip Disc Treatment Without Surgery in Hyderabad | Legend Physiotherapy",
    description: "Non-surgical slip disc treatment at Legend Physiotherapy, Kothapet, Hyderabad.",
    url: "/slip-disc-treatment-hyderabad",
    siteName: "Legend Physiotherapy",
    locale: "en_IN",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Slip Disc Treatment at Legend Physiotherapy Hyderabad" }],
  },
};

const faqs = [
  {
    question: "Can a slip disc be cured without surgery?",
    answer:
      "Yes. Studies show that 85–90% of disc herniations improve with conservative treatment including physiotherapy. Treatment focuses on reducing inflammation, relieving nerve compression through positioning and traction, and strengthening the core muscles that support the spine. Surgery is only recommended when there is progressive neurological deficit or severe symptoms that do not respond to 6–12 weeks of physiotherapy.",
  },
  {
    question: "How long does slip disc recovery take with physiotherapy?",
    answer:
      "Most patients experience significant pain relief within 4 to 6 weeks of regular physiotherapy. Full recovery — including return to normal activities — typically takes 8 to 12 weeks. The timeline depends on the severity of the herniation, how long you have had symptoms, and how consistently you follow your exercise programme.",
  },
  {
    question: "What is the best sleeping position for a slip disc?",
    answer:
      "Sleeping on your side with a pillow between your knees keeps the spine aligned and reduces pressure on the disc. If you prefer sleeping on your back, place a pillow under your knees to maintain the natural curve of your lower back. Avoid sleeping on your stomach as it increases stress on the lumbar spine.",
  },
  {
    question: "Is bed rest good for a slip disc?",
    answer:
      "Prolonged bed rest is not recommended. While 1–2 days of rest may help during acute severe pain, staying in bed longer than that can weaken muscles and slow recovery. Gentle movement and guided exercises prescribed by your physiotherapist are more effective than rest for disc recovery.",
  },
  {
    question: "Do you offer home visits for slip disc treatment?",
    answer:
      "Yes. We provide home visit physiotherapy across Hyderabad for patients who find it difficult to travel due to severe pain. Our therapist brings portable equipment for traction, electrotherapy and guided exercises. Call +91 81430 15455 to book a home visit.",
  },
];

export default function SlipDiscPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  const medicalSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: "Slip Disc Treatment Without Surgery in Hyderabad",
    description: "Non-surgical slip disc and disc bulge treatment at Legend Physiotherapy Hyderabad.",
    url: "https://www.legendphysiotherapy.com/slip-disc-treatment-hyderabad",
    medicalAudience: { "@type": "MedicalAudience", audienceType: "Patient" },
    lastReviewed: "2026-10-28",
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalSchema) }} />

      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "var(--font-poppins)" }}>
            Slip Disc Treatment Without Surgery in Hyderabad
          </h1>
          <p className="text-lg text-white/90 max-w-2xl mb-6">
            Non-surgical treatment for slipped disc, disc bulge and herniated disc at Legend Physiotherapy, Kothapet. Spinal decompression, McKenzie exercises and core rehabilitation.
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
            What Is a Slip Disc?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            A slip disc — also called a herniated disc, prolapsed disc or disc bulge — occurs when the soft gel-like centre of a spinal disc pushes through a crack in its tough outer layer. This can press on nearby spinal nerves, causing pain, numbness or weakness in the back and legs.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            The most common location is the lower back (lumbar spine), particularly at the L4-L5 and L5-S1 levels. Disc herniations can also occur in the neck (cervical spine). At Legend Physiotherapy in Hyderabad, we treat both lumbar and cervical disc problems without surgery using evidence-based physiotherapy techniques.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4" style={{ fontFamily: "var(--font-poppins)" }}>
            Symptoms of a Slip Disc
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
            <li><strong>Lower back pain</strong> that worsens with sitting, bending forward or coughing</li>
            <li><strong>Sciatica</strong> — shooting pain from the buttock down the leg, sometimes reaching the foot</li>
            <li><strong>Numbness or tingling</strong> in the leg, foot or toes</li>
            <li><strong>Muscle weakness</strong> — difficulty lifting the foot (foot drop) or standing on toes</li>
            <li><strong>Pain relief when lying down</strong> — symptoms often ease in certain resting positions</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4" style={{ fontFamily: "var(--font-poppins)" }}>
            Our Non-Surgical Treatment Approach
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Dr Sirish designs a phased treatment programme that addresses pain relief first, then restores movement and builds long-term spinal stability:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
            <li>
              <strong>McKenzie Method (MDT)</strong> — a systematic approach using specific directional exercises to centralise and reduce disc-related pain. Patients learn movements they can repeat at home throughout the day.
            </li>
            <li>
              <strong>Spinal decompression / traction</strong> — mechanical or manual traction to gently separate the vertebrae, reduce disc pressure and create space for the herniated material to retract.
            </li>
            <li>
              <strong>Core stabilisation</strong> — progressive strengthening of the deep abdominal and back muscles (transversus abdominis, multifidus) that act as a natural corset for the spine.
            </li>
            <li>
              <strong>Neural mobilisation</strong> — gentle nerve gliding exercises to reduce nerve sensitivity and improve the mobility of the sciatic or femoral nerve where it is compressed.
            </li>
            <li>
              <strong>Electrotherapy and laser</strong> — IFT, TENS and low-level laser therapy to manage acute pain and reduce inflammation around the disc.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4" style={{ fontFamily: "var(--font-poppins)" }}>
            When Is Surgery Needed?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Surgery is considered only when conservative treatment has not helped after 6 to 12 weeks and the patient has progressive neurological symptoms such as increasing weakness, loss of reflexes or bowel/bladder dysfunction (cauda equina syndrome, which is a medical emergency). The vast majority of disc herniations — roughly 85 to 90 percent — resolve with physiotherapy alone.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4" style={{ fontFamily: "var(--font-poppins)" }}>
            Prevention and Long-Term Management
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
            <li>Maintain a strong core — even 10 minutes of daily exercises can protect the spine</li>
            <li>Lift with your legs, not your back — bend at the knees and keep the load close</li>
            <li>Avoid prolonged sitting — take a 30-second standing break every 30 minutes</li>
            <li>Maintain a healthy weight — excess weight increases disc pressure significantly</li>
            <li>Stay active — walking, swimming and cycling are excellent for spinal health</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4" style={{ fontFamily: "var(--font-poppins)" }}>
            Visit Our Clinic or Book a Home Visit
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Our clinic in Kothapet, near LB Nagar, is equipped with spinal decompression equipment and is open every day from 9 am to 9 pm. We also offer home visit physiotherapy across Hyderabad — LB Nagar, Dilsukhnagar, Nagole, Vanasthalipuram, Uppal, Secunderabad, Kukatpally, Gachibowli, Kondapur, Madhapur and all other areas. Call{" "}
            <a href="tel:+918143015455" className="text-blue-600 font-semibold hover:underline">+91 81430 15455</a>{" "}
            to book.
          </p>
        </div>

        {/* FAQ */}
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
            <li><a href="/back-pain-physiotherapy-lb-nagar" className="text-blue-600 hover:underline">Back Pain Physiotherapy</a></li>
            <li><a href="/sciatica-treatment-physiotherapy-lb-nagar" className="text-blue-600 hover:underline">Sciatica Treatment</a></li>
            <li><a href="/post-surgery-rehabilitation-lb-nagar" className="text-blue-600 hover:underline">Post-Surgery Rehabilitation</a></li>
            <li><a href="/neck-pain-cervical-physiotherapy-lb-nagar" className="text-blue-600 hover:underline">Neck Pain & Cervical Physiotherapy</a></li>
            <li><a href="/book-appointment" className="text-blue-600 hover:underline">Book an Appointment</a></li>
          </ul>
        </section>

        {/* Dr Sirish Bio */}
        <section className="mt-12 bg-blue-50 rounded-2xl p-8 border border-blue-100">
          <h2 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: "var(--font-poppins)" }}>Your Physiotherapist — Dr Sirish</h2>
          <p className="text-gray-700 text-sm leading-relaxed mb-2">
            <strong>B.P.T, M.Sc Sports (London)</strong> — Senior Physiotherapist with 20+ years of experience in orthopaedic and neurological rehabilitation. Dr Sirish specialises in non-surgical disc treatment and has helped thousands of patients avoid spine surgery.
          </p>
          <p className="text-gray-700 text-sm leading-relaxed">
            Clinic: Shop No. 2, Ground Floor, H.No. 11-13-714, Road No. 4, Dwarka Nagar, Green Hills Colony, Kothapet, Hyderabad 500102. Open daily 9 am – 9 pm.
          </p>
        </section>

        {/* CTA */}
        <section className="mt-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-3" style={{ fontFamily: "var(--font-poppins)" }}>Get Slip Disc Treatment Today</h2>
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
