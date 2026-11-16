import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Plantar Fasciitis & Heel Pain Treatment in Hyderabad | Legend Physiotherapy",
  description:
    "Plantar fasciitis and heel pain treatment in Hyderabad. Shockwave therapy, stretching programmes, orthotic advice, morning heel pain relief. Call +91 81430 15455.",
  keywords: [
    "plantar fasciitis treatment Hyderabad",
    "heel pain treatment Hyderabad",
    "foot pain physiotherapy",
    "plantar fasciitis physiotherapy near me",
    "heel spur treatment Hyderabad",
    "morning heel pain treatment",
  ],
  alternates: { canonical: "/plantar-fasciitis-treatment-hyderabad" },
  openGraph: {
    title: "Plantar Fasciitis & Heel Pain Treatment in Hyderabad | Legend Physiotherapy",
    description:
      "Expert plantar fasciitis and heel pain treatment at Legend Physiotherapy, Kothapet, Hyderabad.",
    url: "/plantar-fasciitis-treatment-hyderabad",
    siteName: "Legend Physiotherapy",
    locale: "en_IN",
    type: "website",
  },
};

const faqs = [
  {
    question: "Why does my heel hurt more in the morning?",
    answer:
      "During sleep, your foot rests in a pointed position and the plantar fascia contracts and tightens. When you take your first steps in the morning, the shortened fascia is suddenly stretched under your full body weight, causing sharp pain in the heel. This is the hallmark symptom of plantar fasciitis. Pre-stretch exercises before getting out of bed and wearing night splints can significantly reduce morning pain.",
  },
  {
    question: "How long does plantar fasciitis take to recover?",
    answer:
      "Most patients experience significant improvement within 6 to 8 weeks of consistent physiotherapy, stretching and lifestyle modifications. Complete resolution typically takes 3 to 6 months. Chronic cases that have persisted for over a year may take longer. Early treatment leads to faster recovery — patients who begin physiotherapy within the first few weeks of symptoms recover much more quickly.",
  },
  {
    question: "Is shockwave therapy effective for plantar fasciitis?",
    answer:
      "Yes. Extracorporeal shockwave therapy (ESWT) is an evidence-based treatment that delivers acoustic wave pulses to the affected tissue, stimulating blood flow, promoting tissue healing and breaking down calcified deposits. Studies show success rates of 70 to 80 percent for chronic plantar fasciitis that has not responded to conventional treatment. At Legend Physiotherapy, we use shockwave therapy as part of a comprehensive treatment plan.",
  },
  {
    question: "What are the best shoes for plantar fasciitis?",
    answer:
      "Look for shoes with good arch support, a cushioned heel, a firm heel counter and a slightly raised heel (about 1 to 2 centimetres). Running shoes from brands with structured support are generally recommended. Avoid completely flat shoes, thin sandals, high heels and worn-out footwear. Walking barefoot on hard surfaces should be minimised during recovery. Dr Sirish can recommend specific footwear based on your foot type.",
  },
  {
    question: "Can plantar fasciitis be cured permanently?",
    answer:
      "Yes. The majority of plantar fasciitis cases resolve completely with proper treatment. The key is addressing the underlying causes — tight calf muscles, weak foot intrinsic muscles, poor footwear, excess weight or biomechanical issues. Continuing your stretching and strengthening programme after symptoms resolve, wearing supportive footwear and maintaining a healthy weight prevent recurrence in most patients.",
  },
];

export default function PlantarFasciitisPage() {
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
            Plantar Fasciitis & Heel Pain Treatment in Hyderabad
          </h1>
          <p className="text-lg text-white/90 max-w-2xl mb-6">
            End morning heel pain with expert plantar fasciitis treatment at Legend Physiotherapy, Kothapet. Shockwave therapy, stretching programmes and orthotic guidance.
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
            What Is Plantar Fasciitis?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The plantar fascia is a thick band of connective tissue running along the bottom of the foot from the heel bone to the toes. It acts as a shock absorber and supports the arch of the foot during walking and running. Plantar fasciitis occurs when this tissue becomes irritated, inflamed and develops micro-tears, typically at its attachment point on the heel bone. It is the most common cause of heel pain, affecting approximately 1 in 10 people at some point in their lives.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            At Legend Physiotherapy in Kothapet, Hyderabad, Dr Sirish treats plantar fasciitis with a comprehensive approach combining manual therapy, stretching programmes, shockwave therapy and biomechanical correction to eliminate pain and prevent recurrence.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4" style={{ fontFamily: "var(--font-poppins)" }}>
            Common Causes
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
            <li><strong>Tight calf muscles</strong> — restricted ankle flexibility increases strain on the plantar fascia with every step</li>
            <li><strong>Flat feet or high arches</strong> — both alter the distribution of force through the foot and overload the plantar fascia</li>
            <li><strong>Excess body weight</strong> — increases the mechanical load on the heel with every step, particularly during standing and walking</li>
            <li><strong>Prolonged standing jobs</strong> — teachers, factory workers, security guards and healthcare workers are at higher risk due to hours of standing on hard surfaces</li>
            <li><strong>Sudden increase in activity</strong> — starting a new exercise programme or dramatically increasing walking or running distance</li>
            <li><strong>Poor footwear</strong> — flat sandals, thin-soled shoes and worn-out trainers provide inadequate arch support and cushioning</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4" style={{ fontFamily: "var(--font-poppins)" }}>
            Why the Heel Hurts Most in the Morning
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            During sleep, the foot naturally points downward and the plantar fascia shortens and contracts. Overnight, the body attempts to repair micro-tears in the fascia, but the repaired tissue is less flexible than normal tissue. When you stand up in the morning, your body weight suddenly stretches this tightened, partially healed tissue, causing the characteristic sharp stabbing pain in the heel. The pain typically eases after a few minutes of walking as the fascia gradually loosens.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4" style={{ fontFamily: "var(--font-poppins)" }}>
            Our Treatment Approach
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
            <li><strong>Stretching programme</strong> — specific calf stretches (gastrocnemius and soleus) and plantar fascia stretches performed multiple times daily to restore flexibility and reduce morning pain.</li>
            <li><strong>Shockwave therapy (ESWT)</strong> — acoustic wave pulses stimulate blood flow and tissue repair in the damaged fascia. Particularly effective for chronic cases lasting more than 3 months.</li>
            <li><strong>Manual therapy</strong> — deep tissue massage of the calf, Achilles tendon and plantar fascia to release tightness and improve tissue extensibility.</li>
            <li><strong>Taping</strong> — low-dye taping supports the arch and offloads the plantar fascia during weight-bearing activities, providing immediate pain relief.</li>
            <li><strong>Foot strengthening</strong> — intrinsic foot muscle exercises (toe curls, marble pickups, short foot exercise) to improve arch support from within.</li>
            <li><strong>Orthotic and footwear advice</strong> — guidance on supportive footwear, heel cups and custom orthotics to distribute pressure evenly and support the arch during daily activities.</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-6">
            Treatment is tailored to the severity and duration of your symptoms. Call{" "}
            <a href="tel:+918143015455" className="text-blue-600 font-semibold hover:underline">+91 81430 15455</a>{" "}
            or WhatsApp{" "}
            <a href="https://wa.me/918143015455" className="text-blue-600 font-semibold hover:underline">+91 81430 15455</a>{" "}
            to book an assessment.
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
            <li><a href="/sports-injury-physiotherapy-lb-nagar" className="text-blue-600 hover:underline">Sports Injury Physiotherapy</a></li>
            <li><a href="/arthritis-physiotherapy-hyderabad" className="text-blue-600 hover:underline">Arthritis Physiotherapy</a></li>
            <li><a href="/knee-pain-physiotherapy-lb-nagar" className="text-blue-600 hover:underline">Knee Pain Physiotherapy</a></li>
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
            <strong>B.P.T, M.Sc Sports (London)</strong> — Senior Physiotherapist with 20+ years of experience in musculoskeletal and sports rehabilitation. Dr Sirish specialises in foot and ankle conditions including plantar fasciitis, using evidence-based techniques including shockwave therapy and biomechanical correction.
          </p>
          <p className="text-gray-700 text-sm leading-relaxed">
            Clinic: Shop No. 2, Ground Floor, H.No. 11-13-714, Road No. 4, Dwarka Nagar, Green Hills Colony, Kothapet, Hyderabad 500102. Open daily 9 am – 9 pm.
          </p>
        </section>

        {/* CTA */}
        <section className="mt-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-3" style={{ fontFamily: "var(--font-poppins)" }}>
            End Your Heel Pain Today
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
