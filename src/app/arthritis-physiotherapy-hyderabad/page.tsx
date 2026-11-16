import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Arthritis Physiotherapy & Joint Pain Treatment in Hyderabad | Legend Physiotherapy",
  description:
    "Arthritis physiotherapy and joint pain management in Hyderabad. Osteoarthritis, rheumatoid arthritis treatment, home visits for elderly. Call +91 81430 15455.",
  keywords: [
    "arthritis physiotherapy Hyderabad",
    "osteoarthritis treatment Hyderabad",
    "rheumatoid arthritis physiotherapy",
    "joint pain management Hyderabad",
    "knee arthritis treatment without surgery",
    "arthritis physiotherapy near me",
  ],
  alternates: { canonical: "/arthritis-physiotherapy-hyderabad" },
  openGraph: {
    title: "Arthritis Physiotherapy & Joint Pain Treatment in Hyderabad | Legend Physiotherapy",
    description:
      "Expert arthritis management and joint pain treatment at Legend Physiotherapy, Kothapet, Hyderabad. Home visits for elderly patients.",
    url: "/arthritis-physiotherapy-hyderabad",
    siteName: "Legend Physiotherapy",
    locale: "en_IN",
    type: "website",
  },
};

const faqs = [
  {
    question: "Can exercise really help arthritis or will it make it worse?",
    answer:
      "Exercise is one of the most effective treatments for arthritis. Regular, appropriate exercise strengthens the muscles around the joint, reduces stiffness, improves range of motion and decreases pain. The key is doing the right type and amount of exercise. High-impact activities may aggravate symptoms, but low-impact exercises like walking, swimming, cycling and targeted strengthening consistently reduce arthritis pain and improve function.",
  },
  {
    question: "Can knee arthritis be managed without surgery?",
    answer:
      "Yes. Many patients with mild to moderate knee osteoarthritis manage their condition successfully without surgery through physiotherapy, weight management, activity modification and home exercises. Strengthening the quadriceps and hip muscles offloads stress from the knee joint. Surgery is considered only when conservative measures no longer provide adequate relief and the arthritis significantly limits daily activities.",
  },
  {
    question: "What are the best exercises for arthritis?",
    answer:
      "Low-impact aerobic exercises such as walking, cycling and swimming are excellent for overall fitness and joint health. Strengthening exercises targeting muscles around affected joints — quadriceps for knee arthritis, rotator cuff for shoulder arthritis — reduce pain and improve stability. Range-of-motion and flexibility exercises maintain joint mobility. Dr Sirish designs a specific programme based on which joints are affected and your current fitness level.",
  },
  {
    question: "Do you offer home visits for elderly arthritis patients?",
    answer:
      "Yes. We provide home visit physiotherapy across Hyderabad for elderly patients who have difficulty travelling. Our physiotherapist brings the necessary equipment for a full treatment session at your home, including strengthening exercises, joint mobilisation and pain management techniques. Areas covered include LB Nagar, Dilsukhnagar, Nagole, Vanasthalipuram, Uppal, Secunderabad, Kukatpally, Gachibowli and all other areas. Call +91 81430 15455 to book.",
  },
  {
    question: "What is the difference between osteoarthritis and rheumatoid arthritis?",
    answer:
      "Osteoarthritis (OA) is a degenerative wear-and-tear condition where cartilage breaks down over time, commonly affecting knees, hips and hands. It typically worsens with activity and improves with rest. Rheumatoid arthritis (RA) is an autoimmune disease where the immune system attacks joint linings, causing inflammation, swelling and pain. RA often affects joints symmetrically and causes morning stiffness lasting more than 30 minutes. Treatment approaches differ, and our physiotherapy is tailored accordingly.",
  },
];

export default function ArthritisPhysiotherapyPage() {
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
            Arthritis Physiotherapy & Joint Pain Treatment in Hyderabad
          </h1>
          <p className="text-lg text-white/90 max-w-2xl mb-6">
            Expert arthritis management for osteoarthritis and rheumatoid arthritis at Legend Physiotherapy, Kothapet. Home visits available for elderly patients.
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
            Arthritis is a broad term covering over 100 conditions that cause joint pain, swelling and stiffness. The two most common forms — osteoarthritis (OA) and rheumatoid arthritis (RA) — affect millions of Indians, particularly those over 50. Arthritis can limit mobility, reduce quality of life and make daily tasks like climbing stairs, walking or gripping objects painful and difficult.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            At Legend Physiotherapy in Kothapet, Hyderabad, Dr Sirish provides comprehensive arthritis management that reduces pain, improves joint function and helps patients maintain an active, independent life — often avoiding or delaying the need for joint replacement surgery.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4" style={{ fontFamily: "var(--font-poppins)" }}>
            Osteoarthritis vs Rheumatoid Arthritis
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Osteoarthritis</strong> is the most common form, caused by gradual breakdown of cartilage that cushions the joint surfaces. It primarily affects weight-bearing joints — knees, hips and spine — as well as hands. Risk factors include age, obesity, previous joint injury and genetic predisposition. Pain typically worsens with activity and improves with rest.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            <strong>Rheumatoid arthritis</strong> is an autoimmune condition where the body&apos;s immune system mistakenly attacks the joint lining (synovium), causing chronic inflammation. It often affects smaller joints like fingers and wrists symmetrically and causes prolonged morning stiffness. Early physiotherapy intervention alongside medical management helps preserve joint function and prevent deformity.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4" style={{ fontFamily: "var(--font-poppins)" }}>
            Our Treatment Approach
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
            <li><strong>Joint protection strategies</strong> — techniques to reduce stress on affected joints during daily activities, including proper body mechanics, assistive device training and activity pacing.</li>
            <li><strong>Strengthening exercises</strong> — targeted muscle strengthening around affected joints to provide better support and reduce load on damaged cartilage. Quadriceps and hip strengthening are essential for knee arthritis.</li>
            <li><strong>Range-of-motion exercises</strong> — gentle movements to maintain and improve joint flexibility, preventing the stiffness and contractures that worsen arthritis disability.</li>
            <li><strong>Heat and cold therapy</strong> — heat to relax muscles and improve blood flow before exercise; cold therapy to reduce swelling and pain after activity or during flare-ups.</li>
            <li><strong>Weight management guidance</strong> — every kilogram of excess body weight places 3 to 4 kilograms of extra stress on the knees. Even modest weight loss significantly reduces pain and slows progression.</li>
            <li><strong>Home exercise programmes</strong> — personalised daily exercise plans designed for elderly patients, with clear instructions and progressions. Consistency with home exercises is the single most important factor in long-term arthritis management.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4" style={{ fontFamily: "var(--font-poppins)" }}>
            Home Visits for Elderly Patients
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Many elderly arthritis patients find it difficult to travel regularly for treatment. Our home visit physiotherapy service brings expert care to your doorstep across Hyderabad — LB Nagar, Dilsukhnagar, Nagole, Vanasthalipuram, Uppal, Secunderabad, Kukatpally, Gachibowli, Kondapur, Madhapur and all other areas. The physiotherapist brings portable equipment for a complete treatment session at home. Call{" "}
            <a href="tel:+918143015455" className="text-blue-600 font-semibold hover:underline">+91 81430 15455</a>{" "}
            or WhatsApp{" "}
            <a href="https://wa.me/918143015455" className="text-blue-600 font-semibold hover:underline">+91 81430 15455</a>{" "}
            to book a home visit.
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
            <li><a href="/shoulder-pain-physiotherapy-lb-nagar" className="text-blue-600 hover:underline">Shoulder Pain Physiotherapy</a></li>
            <li><a href="/frozen-shoulder-treatment-hyderabad" className="text-blue-600 hover:underline">Frozen Shoulder Treatment</a></li>
            <li><a href="/acl-tear-recovery-hyderabad" className="text-blue-600 hover:underline">ACL Tear Recovery</a></li>
            <li><a href="/book-appointment" className="text-blue-600 hover:underline">Book an Appointment</a></li>
          </ul>
        </section>

        {/* Dr Sirish Bio */}
        <section className="mt-12 bg-blue-50 rounded-2xl p-8 border border-blue-100">
          <h2 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: "var(--font-poppins)" }}>
            Clinically Reviewed by Dr Sirish
          </h2>
          <p className="text-gray-700 text-sm leading-relaxed mb-2">
            <strong>B.P.T, M.Sc Sports (London)</strong> — Senior Physiotherapist with 20+ years of experience in orthopaedic rehabilitation and arthritis management. Dr Sirish has helped thousands of patients manage arthritis effectively and maintain their independence through structured exercise and lifestyle modification.
          </p>
          <p className="text-gray-700 text-sm leading-relaxed">
            Clinic: Shop No. 2, Ground Floor, H.No. 11-13-714, Road No. 4, Dwarka Nagar, Green Hills Colony, Kothapet, Hyderabad 500102. Open daily 9 am – 9 pm.
          </p>
        </section>

        {/* CTA */}
        <section className="mt-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-3" style={{ fontFamily: "var(--font-poppins)" }}>
            Get Relief From Arthritis Pain
          </h2>
          <p className="text-white/90 mb-6">
            Call +91 81430 15455 or WhatsApp to book your assessment. Clinic and home visits available. Open every day, 9 am to 9 pm.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="tel:+918143015455" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold hover:bg-blue-50 transition-colors">
              Call Now
            </a>
            <a href="https://wa.me/918143015455" target="_blank" rel="noopener noreferrer" className="bg-blue-800 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-900 transition-colors">
              WhatsApp Now
            </a>
          </div>
        </section>

        {/* Map */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: "var(--font-poppins)" }}>
            Find Us
          </h2>
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
