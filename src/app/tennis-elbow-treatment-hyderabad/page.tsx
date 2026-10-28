import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tennis Elbow & Golfer's Elbow Treatment in Hyderabad | Legend Physiotherapy",
  description:
    "Tennis elbow and golfer's elbow physiotherapy in Hyderabad. Lateral epicondylitis treatment without surgery. Call +91 81430 15455.",
  keywords: [
    "tennis elbow treatment Hyderabad",
    "golfer's elbow physiotherapy Hyderabad",
    "lateral epicondylitis treatment Hyderabad",
    "elbow pain physiotherapy Hyderabad",
    "tennis elbow physiotherapy near me",
    "elbow pain treatment without surgery",
  ],
  alternates: { canonical: "/tennis-elbow-treatment-hyderabad" },
  openGraph: {
    title: "Tennis Elbow & Golfer's Elbow Treatment in Hyderabad | Legend Physiotherapy",
    description:
      "Expert physiotherapy for tennis elbow and golfer's elbow at Legend Physiotherapy, Kothapet, Hyderabad.",
    url: "/tennis-elbow-treatment-hyderabad",
    siteName: "Legend Physiotherapy",
    locale: "en_IN",
    type: "website",
  },
};

const faqs = [
  {
    question: "How long does tennis elbow take to heal with physiotherapy?",
    answer:
      "Most patients notice significant improvement within four to six weeks of consistent physiotherapy. Complete recovery typically takes eight to twelve weeks depending on severity. Chronic cases that have lasted months may need longer treatment. We monitor your grip strength and pain levels at each session to track progress.",
  },
  {
    question: "Can I continue working with tennis elbow?",
    answer:
      "In most cases yes, with modifications. We teach you how to use a counter-force brace, adjust your grip technique and take micro-breaks. If your work involves heavy repetitive gripping, we may recommend reducing that activity temporarily while strengthening the forearm muscles.",
  },
  {
    question: "Is tennis elbow only caused by playing tennis?",
    answer:
      "No. Tennis elbow (lateral epicondylitis) is common in people who have never played tennis. It frequently affects IT professionals who use a mouse for long hours, painters, plumbers, cooks and anyone who performs repetitive gripping or wrist extension. It is one of the most common elbow conditions we treat at our Hyderabad clinic.",
  },
  {
    question: "Do you offer home visits for elbow pain treatment?",
    answer:
      "Yes. If travelling is difficult, our physiotherapist will visit your home across Hyderabad with portable treatment equipment. Call +91 81430 15455 to arrange a home visit for tennis elbow or golfer's elbow treatment.",
  },
  {
    question: "What is the difference between tennis elbow and golfer's elbow?",
    answer:
      "Tennis elbow (lateral epicondylitis) causes pain on the outer side of the elbow, while golfer's elbow (medial epicondylitis) causes pain on the inner side. Both are caused by overuse of forearm muscles and respond well to physiotherapy. The exercises differ slightly because different muscle groups are involved.",
  },
];

export default function TennisElbowPage() {
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
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Tennis Elbow &amp; Golfer&apos;s Elbow Treatment in Hyderabad
          </h1>
          <p className="text-lg text-white/90 max-w-2xl mb-6">
            Specialist physiotherapy for lateral and medial epicondylitis at Legend Physiotherapy Ortho and Neuro Pain Management Clinic, Kothapet.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="tel:+918143015455"
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-bold hover:bg-blue-50 transition-colors text-sm sm:text-base"
            >
              Call +91 81430 15455
            </a>
            <a
              href="https://wa.me/918143015455"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-800 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-900 transition-colors text-sm sm:text-base"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* Content */}
      <article className="max-w-4xl mx-auto px-6 py-12">
        <div className="prose prose-lg max-w-none">
          <h2
            className="text-2xl font-bold text-gray-900 mt-10 mb-4"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            What Is Tennis Elbow?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Tennis elbow, medically known as lateral epicondylitis, is a painful condition affecting the outer part of the elbow. It occurs when the tendons that connect the forearm muscles to the bony prominence on the outside of the elbow become inflamed or develop micro-tears from repetitive use.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Despite its name, tennis elbow is not limited to athletes. In Hyderabad, we frequently treat IT professionals, homemakers, painters and factory workers with this condition. Any activity that involves repeated gripping, twisting or lifting with the wrist extended can trigger it. Golfer&apos;s elbow (medial epicondylitis) is a similar condition affecting the inner side of the elbow.
          </p>

          <h2
            className="text-2xl font-bold text-gray-900 mt-10 mb-4"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Symptoms We Treat
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
            <li><strong>Pain on the outer elbow</strong> — tenderness at the bony bump, often radiating down the forearm. Worse when gripping, turning a doorknob or shaking hands.</li>
            <li><strong>Weak grip</strong> — difficulty holding a cup of tea, opening jars or carrying bags. Grip strength testing usually reveals a measurable drop.</li>
            <li><strong>Morning stiffness</strong> — the elbow feels stiff and sore first thing in the morning and loosens slightly with gentle movement.</li>
            <li><strong>Pain with wrist extension</strong> — lifting objects with the palm facing down aggravates the pain because it loads the affected tendons.</li>
            <li><strong>Inner elbow pain (golfer&apos;s elbow)</strong> — similar symptoms but on the medial side, common in those who grip with the wrist flexed.</li>
          </ul>

          <h2
            className="text-2xl font-bold text-gray-900 mt-10 mb-4"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Our Treatment Approach
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            At Legend Physiotherapy, we follow an evidence-based rehabilitation protocol for tennis elbow and golfer&apos;s elbow:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
            <li><strong>Eccentric strengthening exercises</strong> — the cornerstone of tendinopathy rehabilitation. These exercises load the tendon in a controlled way to stimulate healing and build resilience. We progress the resistance gradually over weeks.</li>
            <li><strong>Manual therapy</strong> — deep friction massage across the tendon, mobilisation of the elbow and wrist joints, and myofascial release of tight forearm muscles to reduce pain and improve range of motion.</li>
            <li><strong>Shockwave therapy</strong> — for persistent cases that have not responded to exercise alone, we may use extracorporeal shockwave therapy to stimulate blood flow and tissue repair at the tendon attachment.</li>
            <li><strong>Laser therapy and ultrasound</strong> — used in early stages to reduce inflammation and manage pain so you can begin the strengthening programme comfortably.</li>
            <li><strong>Counter-force bracing</strong> — a strap worn just below the elbow that reduces strain on the tendon during daily activities. We show you the correct position and when to wear it.</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-6">
            We also review your work ergonomics and sport technique. For IT professionals, this includes mouse grip, keyboard height and forearm support. For athletes, it may involve racquet grip size or swing mechanics.
          </p>

          <h2
            className="text-2xl font-bold text-gray-900 mt-10 mb-4"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Why Most Elbow Pain Does Not Need Surgery
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Research shows that 80 to 90 percent of tennis elbow cases resolve with conservative treatment — physiotherapy, activity modification and time. Surgery is rarely needed and is only considered after six to twelve months of failed conservative treatment. At our Hyderabad clinic, most patients recover fully within two to three months with a structured exercise programme and hands-on therapy.
          </p>

          <h2
            className="text-2xl font-bold text-gray-900 mt-10 mb-4"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Clinic Visits and Home Visits
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Our Kothapet clinic, near LB Nagar, is open every day from 9 am to 9 pm. We also offer home visit physiotherapy across Hyderabad for patients who prefer treatment at their doorstep. Our therapist brings portable equipment including ultrasound and exercise tools. Call{" "}
            <a href="tel:+918143015455" className="text-blue-600 font-semibold hover:underline">
              +91 81430 15455
            </a>{" "}
            to book your appointment.
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
            <li><a href="/shoulder-pain-physiotherapy-lb-nagar" className="text-blue-600 hover:underline">Shoulder Pain Physiotherapy</a></li>
            <li><a href="/sports-injury-rehabilitation-lb-nagar" className="text-blue-600 hover:underline">Sports Injury Rehabilitation</a></li>
            <li><a href="/neck-pain-cervical-physiotherapy-lb-nagar" className="text-blue-600 hover:underline">Neck Pain Physiotherapy</a></li>
            <li><a href="/book-appointment" className="text-blue-600 hover:underline">Book an Appointment</a></li>
          </ul>
        </section>

        {/* Dr Sirish Bio */}
        <section className="mt-12 bg-blue-50 rounded-2xl p-8 border border-blue-100">
          <h2 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: "var(--font-poppins)" }}>
            Your Physiotherapist — Dr Sirish
          </h2>
          <p className="text-gray-700 text-sm leading-relaxed mb-2">
            <strong>B.P.T, M.Sc Sports (London)</strong> — Senior Physiotherapist with 20+ years of experience in orthopaedic and neurological rehabilitation. Dr Sirish has treated thousands of patients with elbow, shoulder and upper limb conditions across Hyderabad.
          </p>
          <p className="text-gray-700 text-sm leading-relaxed">
            Clinic: Shop No. 2, Ground Floor, H.No. 11-13-714, Road No. 4, Dwarka Nagar, Green Hills Colony, Kothapet, Hyderabad 500102. Open daily 9 am – 9 pm.
          </p>
        </section>

        {/* CTA */}
        <section className="mt-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-3" style={{ fontFamily: "var(--font-poppins)" }}>
            Book a Tennis Elbow Assessment
          </h2>
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
              width="100%" height="400" style={{ border: 0 }} loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Legend Physiotherapy, Kothapet on Google Maps"
            />
          </div>
        </section>
      </article>

      <Footer />
    </div>
  );
}
