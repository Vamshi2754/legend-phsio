import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ACL Tear Recovery & Knee Ligament Rehab in Hyderabad | Legend Physiotherapy",
  description:
    "ACL tear recovery and knee ligament rehabilitation in Hyderabad. Pre-surgery prehab, post-ACL reconstruction rehab, return to sport. Call +91 81430 15455.",
  keywords: [
    "ACL tear recovery Hyderabad",
    "ACL reconstruction rehab",
    "knee ligament injury treatment",
    "sports knee injury physiotherapy",
    "ACL physiotherapy near me",
    "meniscus tear treatment Hyderabad",
  ],
  alternates: { canonical: "/acl-tear-recovery-hyderabad" },
  openGraph: {
    title: "ACL Tear Recovery & Knee Ligament Rehab in Hyderabad | Legend Physiotherapy",
    description:
      "Structured ACL rehabilitation and knee ligament recovery at Legend Physiotherapy, Kothapet, Hyderabad.",
    url: "/acl-tear-recovery-hyderabad",
    siteName: "Legend Physiotherapy",
    locale: "en_IN",
    type: "website",
  },
};

const faqs = [
  {
    question: "How long does ACL rehabilitation take?",
    answer:
      "Full ACL rehabilitation after reconstruction surgery typically takes 9 to 12 months. The initial phase focuses on reducing swelling and restoring range of motion. Strengthening begins around 6 weeks, and sport-specific training starts around 4 to 6 months. Return to competitive sport is usually cleared between 9 and 12 months based on strength testing and functional assessments.",
  },
  {
    question: "When can I return to sport after ACL reconstruction?",
    answer:
      "Return to sport is typically possible between 9 and 12 months after surgery, provided you pass functional tests including single-leg hop tests, strength symmetry above 90 percent and sport-specific agility drills. Rushing back increases the risk of re-injury. Dr Sirish uses objective testing criteria to clear patients for return to sport safely.",
  },
  {
    question: "Is surgery always necessary for an ACL tear?",
    answer:
      "Not always. Partial ACL tears and complete tears in less active individuals can sometimes be managed conservatively with physiotherapy alone. Conservative management focuses on quadriceps and hamstring strengthening, proprioception training and activity modification. However, athletes and active individuals who want to return to pivoting sports usually benefit from surgical reconstruction followed by structured rehabilitation.",
  },
  {
    question: "Can an ACL heal without surgery?",
    answer:
      "A completely torn ACL does not heal on its own because the ligament has poor blood supply. However, many patients function well without an intact ACL through strengthening of surrounding muscles, particularly the hamstrings, which act as dynamic stabilisers of the knee. This is called becoming a coper. Physiotherapy helps determine if you can function safely without surgery.",
  },
  {
    question: "What is the cost of ACL rehabilitation in Hyderabad?",
    answer:
      "ACL rehabilitation costs vary depending on the duration of treatment and the number of sessions per week. At Legend Physiotherapy, we offer affordable packages for comprehensive ACL rehab. Please call +91 81430 15455 for a detailed cost discussion based on your specific needs and surgery timeline.",
  },
];

export default function AclTearRecoveryPage() {
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
            ACL Tear Recovery & Knee Ligament Rehab in Hyderabad
          </h1>
          <p className="text-lg text-white/90 max-w-2xl mb-6">
            Structured ACL rehabilitation from pre-surgery prehab through return to sport at Legend Physiotherapy, Kothapet, Hyderabad.
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
            What Is an ACL Tear?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The anterior cruciate ligament (ACL) is one of the four major ligaments stabilising the knee joint. It prevents the tibia from sliding forward on the femur and provides rotational stability. ACL tears are common sports injuries, occurring during sudden direction changes, pivoting, awkward landings or direct impact to the knee.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            At Legend Physiotherapy in Kothapet, Hyderabad, we provide comprehensive ACL rehabilitation — from pre-surgery prehab through every phase of post-operative recovery to full return to sport.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4" style={{ fontFamily: "var(--font-poppins)" }}>
            Conservative vs Surgical Approach
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Not every ACL tear requires surgery. The decision depends on your age, activity level, associated injuries (meniscus tears, other ligament damage) and whether the knee gives way during daily activities. Athletes in pivoting sports — cricket, football, badminton, kabaddi — generally benefit from reconstruction followed by structured rehab. Less active individuals with partial tears may recover fully with physiotherapy alone.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4" style={{ fontFamily: "var(--font-poppins)" }}>
            Pre-Surgery Prehab
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Research shows that patients who complete prehab before ACL reconstruction recover faster after surgery. Our prehab programme focuses on reducing swelling, restoring full knee extension, strengthening the quadriceps and hamstrings, and improving single-leg balance. Patients who enter surgery with better knee function consistently achieve better post-operative outcomes.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4" style={{ fontFamily: "var(--font-poppins)" }}>
            Post-Surgery Rehabilitation Phases
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
            <li><strong>Phase 1 (0–2 weeks)</strong> — Protect the graft. Focus on pain and swelling control, knee extension to zero degrees, gentle quadriceps activation (quad sets, straight leg raises) and protected weight bearing with crutches.</li>
            <li><strong>Phase 2 (2–6 weeks)</strong> — Restore full range of motion. Progressive strengthening with closed-chain exercises (mini squats, leg press), stationary cycling and balance training on stable surfaces.</li>
            <li><strong>Phase 3 (6–12 weeks)</strong> — Build strength. Full weight bearing, single-leg exercises, step-ups, lunges and proprioception training on unstable surfaces. Swimming and elliptical training are introduced.</li>
            <li><strong>Phase 4 (3–6 months)</strong> — Functional progression. Running programme begins, plyometric exercises are added, and sport-specific movement patterns are introduced gradually.</li>
            <li><strong>Phase 5 (6–9+ months)</strong> — Return to sport. Agility drills, cutting and pivoting movements, sport-specific training and objective testing to confirm readiness for competitive play.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4" style={{ fontFamily: "var(--font-poppins)" }}>
            Why Structured Rehabilitation Matters
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            The ACL graft takes 9 to 12 months to fully mature and integrate with the bone. Rushing rehabilitation or returning to sport too early is the leading cause of re-tear, with re-injury rates as high as 20 to 25 percent in young athletes. Dr Sirish uses objective strength testing, single-leg hop tests and sport-specific functional assessments to determine when it is truly safe to return to activity. This structured, criteria-based approach significantly reduces re-injury risk.
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
            <li><a href="/sports-injury-physiotherapy-lb-nagar" className="text-blue-600 hover:underline">Sports Injury Physiotherapy</a></li>
            <li><a href="/post-surgery-rehabilitation-lb-nagar" className="text-blue-600 hover:underline">Post-Surgery Rehabilitation</a></li>
            <li><a href="/arthritis-physiotherapy-hyderabad" className="text-blue-600 hover:underline">Arthritis Physiotherapy</a></li>
            <li><a href="/book-appointment" className="text-blue-600 hover:underline">Book an Appointment</a></li>
          </ul>
        </section>

        {/* Dr Sirish Bio */}
        <section className="mt-12 bg-blue-50 rounded-2xl p-8 border border-blue-100">
          <h2 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: "var(--font-poppins)" }}>
            Your Physiotherapist — Dr Sirish
          </h2>
          <p className="text-gray-700 text-sm leading-relaxed mb-2">
            <strong>B.P.T, M.Sc Sports (London)</strong> — Senior Physiotherapist with 20+ years of experience in sports rehabilitation and orthopaedic recovery. Dr Sirish has guided hundreds of athletes through ACL reconstruction rehabilitation and safe return to sport using evidence-based protocols.
          </p>
          <p className="text-gray-700 text-sm leading-relaxed">
            Clinic: Shop No. 2, Ground Floor, H.No. 11-13-714, Road No. 4, Dwarka Nagar, Green Hills Colony, Kothapet, Hyderabad 500102. Open daily 9 am – 9 pm.
          </p>
        </section>

        {/* CTA */}
        <section className="mt-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-3" style={{ fontFamily: "var(--font-poppins)" }}>
            Start Your ACL Recovery
          </h2>
          <p className="text-white/90 mb-6">
            Call +91 81430 15455 or WhatsApp to book your assessment. Open every day, 9 am to 9 pm.
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
