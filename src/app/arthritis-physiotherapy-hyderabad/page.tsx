import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Arthritis Physiotherapy in Hyderabad | Legend Physiotherapy",
  description:
    "Arthritis treatment and physiotherapy in Hyderabad. Knee arthritis, rheumatoid arthritis, osteoarthritis management. Call +91 81430 15455.",
  keywords: [
    "arthritis physiotherapy Hyderabad",
    "knee arthritis treatment Hyderabad",
    "osteoarthritis physiotherapy Hyderabad",
    "rheumatoid arthritis physiotherapy Hyderabad",
    "joint pain treatment Hyderabad",
    "arthritis exercises Hyderabad",
    "best physiotherapy for arthritis Hyderabad",
  ],
  alternates: { canonical: "/arthritis-physiotherapy-hyderabad" },
  openGraph: {
    title: "Arthritis Physiotherapy in Hyderabad | Legend Physiotherapy",
    description: "Expert arthritis treatment and joint pain management at Legend Physiotherapy, Kothapet, Hyderabad.",
    url: "/arthritis-physiotherapy-hyderabad",
    siteName: "Legend Physiotherapy",
    locale: "en_IN",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Arthritis Physiotherapy at Legend Physiotherapy Hyderabad" }],
  },
};

const faqs = [
  {
    question: "Can physiotherapy help arthritis?",
    answer:
      "Yes. Physiotherapy is one of the most effective non-surgical treatments for arthritis. It helps reduce pain, improve joint mobility, strengthen the muscles that support affected joints, and slow the progression of the condition. Regular physiotherapy can delay or even avoid the need for joint replacement surgery.",
  },
  {
    question: "Which type of arthritis does physiotherapy treat?",
    answer:
      "Physiotherapy helps with all common types of arthritis including osteoarthritis (wear-and-tear arthritis), rheumatoid arthritis (autoimmune), ankylosing spondylitis, psoriatic arthritis and gouty arthritis. The treatment approach is tailored to the specific type and severity of your condition.",
  },
  {
    question: "How many sessions are needed for arthritis?",
    answer:
      "Most patients notice improvement in pain and mobility within 6 to 10 sessions. Arthritis is a chronic condition, so ongoing management is important. After the initial treatment phase, we recommend maintenance sessions every 2 to 4 weeks along with a daily home exercise programme to sustain the improvements.",
  },
  {
    question: "Is exercise safe for arthritic joints?",
    answer:
      "Yes, when done correctly. The right exercises actually protect arthritic joints by strengthening the surrounding muscles, improving joint lubrication and maintaining range of motion. Your physiotherapist will prescribe exercises that are safe for your specific joints and adjust intensity based on your symptoms.",
  },
  {
    question: "Do you provide home physiotherapy for arthritis patients?",
    answer:
      "Yes. Many arthritis patients find it difficult to travel, especially during flare-ups. We offer home visit physiotherapy across Hyderabad including LB Nagar, Dilsukhnagar, Nagole, Secunderabad, Kukatpally, Gachibowli and other areas. Call +91 81430 15455 to book a home visit.",
  },
];

export default function ArthritisPage() {
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
    name: "Arthritis Physiotherapy in Hyderabad",
    description: "Expert arthritis treatment and joint pain management at Legend Physiotherapy Hyderabad.",
    url: "https://www.legendphysiotherapy.com/arthritis-physiotherapy-hyderabad",
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
            Arthritis Physiotherapy in Hyderabad
          </h1>
          <p className="text-lg text-white/90 max-w-2xl mb-6">
            Reduce joint pain, improve mobility and slow arthritis progression with expert physiotherapy at Legend Physiotherapy, Kothapet.
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
            Understanding Arthritis
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Arthritis is inflammation of one or more joints, causing pain, stiffness and reduced range of motion. It affects millions of people in India, particularly those over 50. The two most common types are osteoarthritis (OA) — caused by wear and tear of joint cartilage — and rheumatoid arthritis (RA) — an autoimmune condition where the body attacks its own joint lining.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            At Legend Physiotherapy in Hyderabad, we help arthritis patients manage pain, maintain joint function and stay active with a structured physiotherapy programme designed for their specific condition.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4" style={{ fontFamily: "var(--font-poppins)" }}>
            Types of Arthritis We Treat
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
            <li><strong>Knee osteoarthritis</strong> — the most common form we see, causing pain, swelling and difficulty walking, climbing stairs or squatting</li>
            <li><strong>Hip osteoarthritis</strong> — stiffness and pain in the groin or thigh that limits walking and daily activities</li>
            <li><strong>Rheumatoid arthritis</strong> — symmetric joint pain and swelling, often affecting the hands, wrists and feet</li>
            <li><strong>Cervical and lumbar spondylosis</strong> — arthritis of the spine causing neck or back stiffness</li>
            <li><strong>Ankylosing spondylitis</strong> — inflammatory arthritis of the spine and sacroiliac joints</li>
            <li><strong>Gouty arthritis</strong> — acute painful swelling, often in the big toe or ankle</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4" style={{ fontFamily: "var(--font-poppins)" }}>
            How Physiotherapy Helps Arthritis
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Physiotherapy for arthritis focuses on four goals: reducing pain, improving joint mobility, strengthening supporting muscles and educating patients on joint protection. Treatment includes:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
            <li>
              <strong>Joint mobilisation</strong> — gentle manual techniques to reduce stiffness and improve range of motion in affected joints.
            </li>
            <li>
              <strong>Strengthening exercises</strong> — progressive muscle strengthening around the affected joint. Stronger muscles absorb more load, reducing stress on the arthritic joint surfaces.
            </li>
            <li>
              <strong>Aerobic conditioning</strong> — low-impact activities like cycling, swimming and walking prescribed at the right intensity to improve cardiovascular fitness without stressing the joints.
            </li>
            <li>
              <strong>Hot and cold therapy</strong> — heat to reduce stiffness before exercise, cold packs to manage swelling after activity or during flare-ups.
            </li>
            <li>
              <strong>Electrotherapy</strong> — TENS, ultrasound and laser therapy to manage pain and reduce inflammation.
            </li>
            <li>
              <strong>Joint protection education</strong> — teaching patients how to modify daily activities, use assistive devices and protect their joints during work and daily tasks.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4" style={{ fontFamily: "var(--font-poppins)" }}>
            Knee Arthritis: Our Most Common Case
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Knee osteoarthritis is the single most common condition we treat at our clinic. Many patients come to us after being told they need a knee replacement. In many cases, a structured physiotherapy programme focusing on quadriceps strengthening, knee range of motion and weight management can significantly reduce pain and delay surgery by years. We use a combination of hands-on treatment, supervised exercises and a home programme tailored to each patient&apos;s stage of arthritis.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4" style={{ fontFamily: "var(--font-poppins)" }}>
            Pre and Post Joint Replacement Physiotherapy
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            If joint replacement surgery is necessary, physiotherapy plays a critical role both before and after the procedure. Pre-operative physiotherapy (prehab) strengthens muscles and improves fitness, leading to faster post-surgical recovery. Post-operative physiotherapy helps regain joint movement, rebuild strength and return to walking and daily activities. We provide both clinic-based and home visit rehabilitation for knee and hip replacement patients across Hyderabad.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4" style={{ fontFamily: "var(--font-poppins)" }}>
            Visit Our Clinic or Book a Home Visit
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Our clinic in Kothapet, near LB Nagar, is open every day from 9 am to 9 pm. We also offer home visit physiotherapy across Hyderabad for patients who find it difficult to travel. Call{" "}
            <a href="tel:+918143015455" className="text-blue-600 font-semibold hover:underline">+91 81430 15455</a>{" "}
            to book a clinic or home appointment.
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
            <li><a href="/knee-pain-physiotherapy-lb-nagar" className="text-blue-600 hover:underline">Knee Pain Physiotherapy</a></li>
            <li><a href="/hip-pain-physiotherapy-hyderabad" className="text-blue-600 hover:underline">Hip Pain Physiotherapy</a></li>
            <li><a href="/frozen-shoulder-treatment-hyderabad" className="text-blue-600 hover:underline">Frozen Shoulder Treatment</a></li>
            <li><a href="/post-surgery-rehabilitation-lb-nagar" className="text-blue-600 hover:underline">Post-Surgery Rehabilitation</a></li>
            <li><a href="/book-appointment" className="text-blue-600 hover:underline">Book an Appointment</a></li>
          </ul>
        </section>

        {/* Dr Sirish Bio */}
        <section className="mt-12 bg-blue-50 rounded-2xl p-8 border border-blue-100">
          <h2 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: "var(--font-poppins)" }}>Your Physiotherapist — Dr Sirish</h2>
          <p className="text-gray-700 text-sm leading-relaxed mb-2">
            <strong>B.P.T, M.Sc Sports (London)</strong> — Senior Physiotherapist with 20+ years of experience in orthopaedic and neurological rehabilitation. Dr Sirish has treated thousands of arthritis patients and specialises in helping patients delay or avoid joint replacement surgery.
          </p>
          <p className="text-gray-700 text-sm leading-relaxed">
            Clinic: Shop No. 2, Ground Floor, H.No. 11-13-714, Road No. 4, Dwarka Nagar, Green Hills Colony, Kothapet, Hyderabad 500102. Open daily 9 am – 9 pm.
          </p>
        </section>

        {/* CTA */}
        <section className="mt-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-3" style={{ fontFamily: "var(--font-poppins)" }}>Start Your Arthritis Treatment</h2>
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
