import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hip Pain Physiotherapy & Treatment in Hyderabad | Legend Physiotherapy",
  description:
    "Expert hip pain physiotherapy for arthritis, AVN, bursitis and post hip replacement rehab in Hyderabad. Comprehensive assessment and treatment. Call +91 81430 15455.",
  keywords: [
    "hip pain physiotherapy Hyderabad",
    "hip arthritis treatment",
    "hip replacement rehab Hyderabad",
    "avascular necrosis physiotherapy",
    "hip bursitis treatment",
    "hip pain treatment near me",
  ],
  alternates: { canonical: "/hip-pain-physiotherapy-hyderabad" },
  openGraph: {
    title: "Hip Pain Physiotherapy & Treatment in Hyderabad | Legend Physiotherapy",
    description:
      "Comprehensive hip pain assessment and physiotherapy at Legend Physiotherapy Kothapet, Hyderabad.",
    url: "/hip-pain-physiotherapy-hyderabad",
    siteName: "Legend Physiotherapy",
    locale: "en_IN",
    type: "website",
  },
};

const faqs = [
  {
    question: "What are the most common causes of hip pain?",
    answer:
      "The most common causes include osteoarthritis (age-related cartilage wear), hip bursitis (inflammation of the bursa over the greater trochanter), avascular necrosis (loss of blood supply to the femoral head), labral tears, IT band syndrome, hip flexor strains, referred pain from the lumbar spine, and stress fractures in active individuals. A thorough physiotherapy assessment identifies the specific cause.",
  },
  {
    question: "Can physiotherapy help avoid hip replacement surgery?",
    answer:
      "In many cases, yes. Research shows that structured exercise therapy, manual mobilisation and weight management can significantly reduce hip arthritis pain and improve function, delaying or even eliminating the need for surgery. A physiotherapy programme focusing on hip strengthening, flexibility and activity modification is recommended as the first line of treatment for hip osteoarthritis by all major clinical guidelines.",
  },
  {
    question: "What is the timeline for hip replacement rehabilitation?",
    answer:
      "Recovery follows a phased approach: weeks one to two focus on wound healing, gentle range of motion and walking with a walker. Weeks three to six involve progressive strengthening and transitioning to a cane. Weeks six to twelve see a return to most daily activities with continued strengthening. Full recovery with return to sports or heavy activity typically takes four to six months. Physiotherapy is essential throughout.",
  },
  {
    question: "Do you offer home visits for hip pain patients?",
    answer:
      "Yes, we provide home visit physiotherapy across Hyderabad for patients who have difficulty travelling, particularly after hip replacement surgery or for elderly patients with mobility limitations. Home sessions include manual therapy, exercise prescription and gait training. Call +91 81430 15455 to arrange a home visit.",
  },
  {
    question: "Which exercises should I avoid with hip pain?",
    answer:
      "Exercises to avoid depend on your specific diagnosis. Generally, deep squats, heavy leg presses, high-impact running and sudden twisting movements should be avoided with hip arthritis. After hip replacement, crossing your legs, bending past 90 degrees and internal rotation are restricted in the early weeks. your physiotherapist will provide personalised guidance on safe and beneficial exercises for your condition.",
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

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "var(--font-poppins)" }}>
            Hip Pain Physiotherapy &amp; Treatment in Hyderabad
          </h1>
          <p className="text-lg text-white/90 max-w-2xl mb-6">
            Comprehensive assessment and treatment for hip arthritis, AVN, bursitis and post hip replacement rehabilitation at Legend Physiotherapy, Kothapet.
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
            Understanding Hip Pain
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The hip is the body&apos;s largest ball-and-socket joint, designed for both stability and a wide range of motion. Hip pain can originate from the joint itself, the surrounding muscles and tendons, or be referred from the lower back. Accurate diagnosis is essential because treatment varies significantly depending on the cause. At Legend Physiotherapy, we perform a thorough biomechanical assessment including range of motion testing, muscle strength evaluation, gait analysis and special orthopaedic tests to identify the precise source of your pain.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Hip problems are common across all age groups &mdash; from young athletes with labral tears and muscle strains to middle-aged adults with early arthritis and elderly patients with osteoarthritis or avascular necrosis. Each group requires a tailored approach combining the right balance of pain management, manual therapy, strengthening and activity modification.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4" style={{ fontFamily: "var(--font-poppins)" }}>
            Common Causes of Hip Pain
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
            <li><strong>Osteoarthritis (OA)</strong> &mdash; the most common cause in patients over 50, involving progressive cartilage loss, joint space narrowing and bone spur formation.</li>
            <li><strong>Avascular necrosis (AVN)</strong> &mdash; loss of blood supply to the femoral head, common in patients with a history of steroid use, alcohol use or hip fracture.</li>
            <li><strong>Hip bursitis (trochanteric pain syndrome)</strong> &mdash; inflammation of the bursa over the outer hip, causing pain when lying on the affected side or climbing stairs.</li>
            <li><strong>Labral tears</strong> &mdash; damage to the cartilage ring lining the hip socket, often seen in athletes and causing clicking, catching or deep groin pain.</li>
            <li><strong>IT band syndrome</strong> &mdash; tightness of the iliotibial band causing lateral hip and thigh pain, common in runners and cyclists.</li>
            <li><strong>Hip flexor strain</strong> &mdash; overuse of the iliopsoas and rectus femoris muscles, frequent in sports involving kicking or sprinting.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4" style={{ fontFamily: "var(--font-poppins)" }}>
            Physiotherapy Assessment and Treatment
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Our hip rehabilitation programme begins with a detailed assessment of your joint mobility, muscle strength (particularly gluteus medius and maximus, hip flexors and deep external rotators), movement patterns and functional limitations. Treatment typically includes manual joint mobilisation to improve hip range of motion, soft tissue techniques to release tight muscles and fascia, and a progressive strengthening programme targeting the muscles that stabilise the hip and pelvis.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Gluteus medius weakness is a key contributor to many hip conditions. This muscle prevents the pelvis from dropping during single-leg stance (walking, stair climbing) and its weakness leads to compensatory movement patterns that overload the hip joint. Our strengthening programmes systematically progress from non-weight-bearing exercises to functional activities like squats, lunges and balance training.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4" style={{ fontFamily: "var(--font-poppins)" }}>
            Post Hip Replacement Rehabilitation
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Physiotherapy after total hip replacement follows a structured phased approach. In the first two weeks, the focus is on wound care, gentle range of motion exercises, bed mobility, transfers and walking with a frame. Weeks three to six introduce progressive strengthening &mdash; clamshells, bridges, standing hip abduction &mdash; and transition from walker to cane. From six to twelve weeks, the programme advances to functional exercises including stair climbing, balance work and light recreational activities.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            We also focus on fall prevention for elderly hip patients through balance training, home environment modification advice and confidence-building exercises. Research shows that structured physiotherapy after hip replacement leads to better functional outcomes, faster return to independence and lower risk of complications.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4" style={{ fontFamily: "var(--font-poppins)" }}>
            Why Choose Legend Physiotherapy for Hip Pain
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Dr Sirish and the team combine manual therapy, progressive exercise and advanced modalities for comprehensive hip care. We offer both clinic-based treatment and home visits for patients with limited mobility. Our Kothapet clinic near LB Nagar is open daily from 9 am to 9 pm. Call{" "}
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
            <li><a href="/knee-pain-physiotherapy-lb-nagar" className="text-blue-600 hover:underline">Knee Pain Physiotherapy</a></li>
            <li><a href="/arthritis-physiotherapy-hyderabad" className="text-blue-600 hover:underline">Arthritis Physiotherapy</a></li>
            <li><a href="/post-surgery-rehabilitation-lb-nagar" className="text-blue-600 hover:underline">Post-Surgery Rehabilitation</a></li>
            <li><a href="/sports-injury-rehabilitation-lb-nagar" className="text-blue-600 hover:underline">Sports Injury Rehabilitation</a></li>
            <li><a href="/contact" className="text-blue-600 hover:underline">Contact Us</a></li>
          </ul>
        </section>

        {/* Dr Sirish Bio */}
        <section className="mt-12 bg-blue-50 rounded-2xl p-8 border border-blue-100">
          <h2 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: "var(--font-poppins)" }}>
            Clinically Reviewed by Dr Sirish
          </h2>
          <p className="text-gray-700 text-sm leading-relaxed mb-2">
            <strong>B.P.T, M.Sc Sports (London)</strong> &mdash; Senior Physiotherapist with 20+ years of experience in orthopaedic rehabilitation. Dr Sirish specialises in hip and knee conditions, post-surgical rehabilitation and fall prevention for elderly patients.
          </p>
          <p className="text-gray-700 text-sm leading-relaxed">
            Clinic: Shop No. 2, Ground Floor, H.No. 11-13-714, Road No. 4, Dwarka Nagar, Green Hills Colony, Kothapet, Hyderabad 500102. Open daily 9 am &ndash; 9 pm.
          </p>
        </section>

        {/* CTA */}
        <section className="mt-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-3" style={{ fontFamily: "var(--font-poppins)" }}>
            Book a Hip Pain Assessment
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
