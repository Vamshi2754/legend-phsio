import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hip Pain Physiotherapy in Hyderabad | Legend Physiotherapy",
  description:
    "Hip pain treatment and physiotherapy in Hyderabad. Hip arthritis, bursitis, labral tear, hip replacement rehab. Call +91 81430 15455.",
  keywords: [
    "hip pain physiotherapy Hyderabad",
    "hip arthritis treatment Hyderabad",
    "hip replacement rehab Hyderabad",
    "hip bursitis treatment Hyderabad",
    "hip joint pain treatment Hyderabad",
    "hip replacement physiotherapy Hyderabad",
    "best physiotherapy for hip pain Hyderabad",
  ],
  alternates: { canonical: "/hip-pain-physiotherapy-hyderabad" },
  openGraph: {
    title: "Hip Pain Physiotherapy in Hyderabad | Legend Physiotherapy",
    description: "Expert hip pain treatment and rehabilitation at Legend Physiotherapy, Kothapet, Hyderabad.",
    url: "/hip-pain-physiotherapy-hyderabad",
    siteName: "Legend Physiotherapy",
    locale: "en_IN",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Hip Pain Physiotherapy at Legend Physiotherapy Hyderabad" }],
  },
};

const faqs = [
  {
    question: "What causes hip pain?",
    answer:
      "Hip pain can be caused by osteoarthritis, bursitis (trochanteric bursitis), labral tears, muscle strains, referred pain from the lower back, avascular necrosis or fractures. In older adults, hip osteoarthritis is the most common cause. In younger patients, muscle strains and hip impingement are more frequent. A thorough assessment is needed to identify the exact source.",
  },
  {
    question: "Can physiotherapy help avoid hip replacement?",
    answer:
      "In many cases, yes. A structured physiotherapy programme focusing on hip strengthening, flexibility and pain management can delay or eliminate the need for hip replacement surgery. Studies show that patients who complete a physiotherapy programme report significant improvements in pain and function, and many are able to postpone surgery by several years.",
  },
  {
    question: "How long does hip pain recovery take?",
    answer:
      "Recovery time depends on the diagnosis. Muscle strains may improve in 2 to 4 weeks. Hip bursitis typically responds to treatment in 4 to 6 weeks. Hip osteoarthritis is a chronic condition that benefits from ongoing management. Post hip replacement rehabilitation takes 8 to 12 weeks to regain full function.",
  },
  {
    question: "Do you provide post hip replacement physiotherapy at home?",
    answer:
      "Yes. Post hip replacement rehabilitation at home is one of our most requested services. We provide home visit physiotherapy across Hyderabad for patients recovering from hip replacement surgery. Treatment includes gait training, strengthening exercises and range of motion work. Call +91 81430 15455 to book.",
  },
  {
    question: "Is walking good for hip pain?",
    answer:
      "Gentle walking is generally beneficial for most hip conditions as it helps maintain joint mobility and muscle strength. However, if walking causes significant pain or a limp, the duration and intensity should be reduced. Your physiotherapist will advise on the right amount of walking for your condition.",
  },
];

export default function HipPainPage() {
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
    name: "Hip Pain Physiotherapy in Hyderabad",
    description: "Expert hip pain treatment and rehabilitation at Legend Physiotherapy Hyderabad.",
    url: "https://www.legendphysiotherapy.com/hip-pain-physiotherapy-hyderabad",
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
            Hip Pain Physiotherapy in Hyderabad
          </h1>
          <p className="text-lg text-white/90 max-w-2xl mb-6">
            Expert treatment for hip arthritis, bursitis, labral tears and post hip replacement rehabilitation at Legend Physiotherapy, Kothapet.
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
            Common Causes of Hip Pain
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The hip joint is the largest ball-and-socket joint in the body and bears significant load during walking, running and daily activities. Hip pain can originate from the joint itself, the surrounding muscles and tendons, or even be referred from the lower back.
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
            <li><strong>Hip osteoarthritis</strong> — progressive wear of the hip joint cartilage, causing groin pain, stiffness and difficulty walking. Most common in adults over 50.</li>
            <li><strong>Trochanteric bursitis</strong> — inflammation of the bursa on the outer hip, causing pain when lying on the affected side, climbing stairs or walking long distances.</li>
            <li><strong>Hip labral tear</strong> — a tear in the ring of cartilage around the hip socket, causing a catching or locking sensation and deep groin pain.</li>
            <li><strong>Hip muscle strains</strong> — tears in the hip flexors, adductors or gluteal muscles from sports or sudden movements.</li>
            <li><strong>Referred pain from the lumbar spine</strong> — disc problems or nerve compression in the lower back can cause pain that feels like it is coming from the hip.</li>
            <li><strong>Avascular necrosis (AVN)</strong> — loss of blood supply to the femoral head, requiring early intervention to preserve the joint.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4" style={{ fontFamily: "var(--font-poppins)" }}>
            Our Treatment Approach
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Dr Sirish conducts a thorough assessment including range of motion testing, special orthopaedic tests and gait analysis before designing your treatment plan:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
            <li>
              <strong>Hip joint mobilisation</strong> — manual techniques to improve hip range of motion, reduce stiffness and relieve pain. Particularly effective for hip osteoarthritis.
            </li>
            <li>
              <strong>Strengthening exercises</strong> — progressive strengthening of the gluteal muscles, hip flexors, abductors and core. Strong hip muscles improve joint stability and reduce pain during walking and activities.
            </li>
            <li>
              <strong>Flexibility and stretching</strong> — targeted stretches for tight hip flexors, adductors and piriformis muscles that contribute to hip pain and stiffness.
            </li>
            <li>
              <strong>Gait retraining</strong> — correction of walking patterns that place excessive stress on the hip joint. Common in hip arthritis patients who develop compensatory movement patterns.
            </li>
            <li>
              <strong>Electrotherapy</strong> — ultrasound, laser therapy and TENS for pain management and inflammation control.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4" style={{ fontFamily: "var(--font-poppins)" }}>
            Hip Replacement Rehabilitation
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            If you have had or are planning a hip replacement, physiotherapy is essential for a successful recovery:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
            <li><strong>Pre-operative (prehab)</strong> — strengthening muscles and improving fitness before surgery leads to faster post-operative recovery. We typically recommend 4 to 6 weeks of prehab.</li>
            <li><strong>Early post-operative (weeks 1–6)</strong> — gentle exercises to restore range of motion, prevent blood clots, reduce swelling and begin walking with support. We teach hip precautions to protect the new joint.</li>
            <li><strong>Late post-operative (weeks 6–12)</strong> — progressive strengthening, balance training and functional exercises to return to walking without aids, climbing stairs, driving and daily activities.</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-6">
            We provide both clinic-based and home visit rehabilitation for hip replacement patients across Hyderabad. Many patients prefer home visits in the early weeks when mobility is limited.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4" style={{ fontFamily: "var(--font-poppins)" }}>
            Visit Our Clinic or Book a Home Visit
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Our clinic in Kothapet, near LB Nagar, is open every day from 9 am to 9 pm. We also offer home visit physiotherapy across Hyderabad — LB Nagar, Dilsukhnagar, Nagole, Vanasthalipuram, Uppal, Secunderabad, Kukatpally, Gachibowli, Kondapur, Madhapur and all other areas. Call{" "}
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
            <li><a href="/arthritis-physiotherapy-hyderabad" className="text-blue-600 hover:underline">Arthritis Physiotherapy</a></li>
            <li><a href="/knee-pain-physiotherapy-lb-nagar" className="text-blue-600 hover:underline">Knee Pain Physiotherapy</a></li>
            <li><a href="/back-pain-physiotherapy-lb-nagar" className="text-blue-600 hover:underline">Back Pain Physiotherapy</a></li>
            <li><a href="/post-surgery-rehabilitation-lb-nagar" className="text-blue-600 hover:underline">Post-Surgery Rehabilitation</a></li>
            <li><a href="/book-appointment" className="text-blue-600 hover:underline">Book an Appointment</a></li>
          </ul>
        </section>

        {/* Dr Sirish Bio */}
        <section className="mt-12 bg-blue-50 rounded-2xl p-8 border border-blue-100">
          <h2 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: "var(--font-poppins)" }}>Your Physiotherapist — Dr Sirish</h2>
          <p className="text-gray-700 text-sm leading-relaxed mb-2">
            <strong>B.P.T, M.Sc Sports (London)</strong> — Senior Physiotherapist with 20+ years of experience in orthopaedic and neurological rehabilitation. Dr Sirish specialises in hip conditions and has guided hundreds of patients through hip replacement recovery.
          </p>
          <p className="text-gray-700 text-sm leading-relaxed">
            Clinic: Shop No. 2, Ground Floor, H.No. 11-13-714, Road No. 4, Dwarka Nagar, Green Hills Colony, Kothapet, Hyderabad 500102. Open daily 9 am – 9 pm.
          </p>
        </section>

        {/* CTA */}
        <section className="mt-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-3" style={{ fontFamily: "var(--font-poppins)" }}>Get Hip Pain Treatment Today</h2>
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
