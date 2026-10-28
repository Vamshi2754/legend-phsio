import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Paralysis Treatment & Stroke Rehabilitation in Hyderabad | Legend Physiotherapy",
  description:
    "Expert paralysis treatment and stroke rehabilitation in Hyderabad. Hemiplegia, paraplegia recovery, gait training, home visits for bedridden patients. Call +91 81430 15455.",
  keywords: [
    "paralysis treatment Hyderabad",
    "stroke rehabilitation Hyderabad",
    "hemiplegia physiotherapy",
    "paraplegia treatment",
    "paralysis physiotherapy near me",
    "stroke recovery physiotherapy Hyderabad",
  ],
  alternates: { canonical: "/paralysis-treatment-hyderabad" },
  openGraph: {
    title: "Paralysis Treatment & Stroke Rehabilitation in Hyderabad | Legend Physiotherapy",
    description:
      "Specialist paralysis and stroke rehabilitation at Legend Physiotherapy, Kothapet, Hyderabad. Home visits available for bedridden patients.",
    url: "/paralysis-treatment-hyderabad",
    siteName: "Legend Physiotherapy",
    locale: "en_IN",
    type: "website",
  },
};

const faqs = [
  {
    question: "What is the recovery timeline after a stroke?",
    answer:
      "The first three to six months after a stroke offer the fastest recovery window due to heightened neuroplasticity. However, meaningful gains can continue for a year or more with consistent physiotherapy. Early intervention within the first few weeks leads to significantly better outcomes. At Legend Physiotherapy we begin bedside rehabilitation as soon as the patient is medically stable.",
  },
  {
    question: "Can physiotherapy cure paralysis completely?",
    answer:
      "Recovery depends on the type and severity of paralysis. Many stroke patients regain significant function through neuroplasticity-based exercises, gait training and strengthening. Complete recovery is possible in milder cases. In severe cases, physiotherapy maximises independence in daily activities and prevents complications like contractures and pressure sores.",
  },
  {
    question: "Do you offer home visits for paralysis patients?",
    answer:
      "Yes. We provide home visit physiotherapy across Hyderabad for bedridden and mobility-limited patients. Our physiotherapist brings portable equipment for electrical stimulation, stretching and strengthening exercises. Areas covered include LB Nagar, Dilsukhnagar, Nagole, Vanasthalipuram, Uppal, Secunderabad, Kukatpally and Gachibowli. Call +91 81430 15455 to book.",
  },
  {
    question: "How does electrical stimulation help in paralysis recovery?",
    answer:
      "Functional electrical stimulation (FES) sends controlled electrical impulses to paralysed muscles, causing them to contract. This helps maintain muscle bulk, prevents atrophy, improves blood circulation and retrains the brain-muscle connection. When combined with active exercises, FES accelerates motor recovery after stroke.",
  },
  {
    question: "When should rehabilitation start after a stroke?",
    answer:
      "Rehabilitation should begin as early as possible, ideally within 24 to 48 hours of the stroke once the patient is medically stable. Early mobilisation reduces the risk of complications such as deep vein thrombosis, pneumonia and pressure sores. The earlier physiotherapy starts, the better the long-term functional outcomes.",
  },
];

export default function ParalysisTreatmentPage() {
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
            Paralysis Treatment & Stroke Rehabilitation in Hyderabad
          </h1>
          <p className="text-lg text-white/90 max-w-2xl mb-6">
            Regain movement and independence with expert neurological rehabilitation at Legend Physiotherapy, Kothapet. Home visits available for bedridden patients across Hyderabad.
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
            Understanding Paralysis After Stroke
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Paralysis occurs when a stroke damages the brain areas that control movement. Depending on which part of the brain is affected, patients may experience hemiplegia (paralysis of one side of the body) or hemiparesis (weakness on one side). The severity ranges from mild weakness in a hand or foot to complete loss of movement in an entire side of the body.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            At Legend Physiotherapy in Kothapet, Hyderabad, we specialise in neurological rehabilitation using neuroplasticity-based techniques that help the brain form new neural pathways to restore lost motor function.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4" style={{ fontFamily: "var(--font-poppins)" }}>
            Types of Paralysis We Treat
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
            <li><strong>Hemiplegia</strong> — paralysis of one side of the body, the most common outcome after stroke. Treatment focuses on reactivating the affected limbs through repetitive task-specific training.</li>
            <li><strong>Paraplegia</strong> — paralysis of both lower limbs, often caused by spinal cord injury. Rehabilitation centres on wheelchair mobility, transfer training and lower limb strengthening.</li>
            <li><strong>Monoplegia</strong> — paralysis of a single limb, typically an arm or leg. Targeted exercises and electrical stimulation help restore function faster.</li>
            <li><strong>Bell&apos;s Palsy</strong> — facial nerve paralysis causing drooping on one side. Facial exercises and electrical stimulation help regain muscle control.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4" style={{ fontFamily: "var(--font-poppins)" }}>
            Our Neurological Rehabilitation Programme
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Dr Sirish designs an individualised rehabilitation plan based on the type, severity and stage of paralysis. Our evidence-based programme includes:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
            <li><strong>Neuroplasticity-based exercises</strong> — high-repetition, task-specific movements that stimulate the brain to create new neural connections and recover motor control.</li>
            <li><strong>Gait training</strong> — progressive walking retraining using parallel bars, walkers and overground techniques to restore safe, independent mobility.</li>
            <li><strong>ADL training</strong> — practising activities of daily living such as eating, dressing, bathing and grooming to rebuild independence in everyday tasks.</li>
            <li><strong>Functional electrical stimulation</strong> — targeted muscle activation to prevent atrophy and retrain the brain-muscle pathway in paralysed limbs.</li>
            <li><strong>Balance and coordination training</strong> — exercises to improve trunk control, sitting balance and standing stability, reducing fall risk.</li>
            <li><strong>Range of motion exercises</strong> — passive and active-assisted stretching to prevent joint contractures and maintain flexibility in affected limbs.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4" style={{ fontFamily: "var(--font-poppins)" }}>
            Home Visit Physiotherapy for Bedridden Patients
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            We understand that many paralysis patients cannot travel to the clinic. Our home visit physiotherapy service covers all areas of Hyderabad including LB Nagar, Dilsukhnagar, Nagole, Vanasthalipuram, Uppal, Secunderabad, Kukatpally, Gachibowli, Kondapur and Madhapur. The physiotherapist brings portable equipment for electrical stimulation, stretching, strengthening and gait training at your home. Call{" "}
            <a href="tel:+918143015455" className="text-blue-600 font-semibold hover:underline">+91 81430 15455</a>{" "}
            or WhatsApp{" "}
            <a href="https://wa.me/918143015455" className="text-blue-600 font-semibold hover:underline">+91 81430 15455</a>{" "}
            to book a home visit.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4" style={{ fontFamily: "var(--font-poppins)" }}>
            Why Early Rehabilitation Matters
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            The brain&apos;s ability to reorganise itself — neuroplasticity — is highest in the first three to six months after a stroke. Starting physiotherapy early maximises the chances of recovery and prevents secondary complications such as muscle contractures, pressure sores, deep vein thrombosis and depression. Even patients who begin rehabilitation months after their stroke can achieve significant improvements with consistent effort.
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
            <li><a href="/neuro-physiotherapy-lb-nagar" className="text-blue-600 hover:underline">Neuro Physiotherapy</a></li>
            <li><a href="/post-surgery-rehabilitation-lb-nagar" className="text-blue-600 hover:underline">Post-Surgery Rehabilitation</a></li>
            <li><a href="/cervical-spondylosis-treatment-hyderabad" className="text-blue-600 hover:underline">Cervical Spondylosis Treatment</a></li>
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
            <strong>B.P.T, M.Sc Sports (London)</strong> — Senior Physiotherapist with 20+ years of experience in orthopaedic and neurological rehabilitation. Dr Sirish specialises in stroke recovery and paralysis management, helping patients regain maximum independence through evidence-based neurological rehabilitation.
          </p>
          <p className="text-gray-700 text-sm leading-relaxed">
            Clinic: Shop No. 2, Ground Floor, H.No. 11-13-714, Road No. 4, Dwarka Nagar, Green Hills Colony, Kothapet, Hyderabad 500102. Open daily 9 am – 9 pm.
          </p>
        </section>

        {/* CTA */}
        <section className="mt-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-3" style={{ fontFamily: "var(--font-poppins)" }}>
            Start Your Recovery Today
          </h2>
          <p className="text-white/90 mb-6">
            Call +91 81430 15455 or WhatsApp to book a clinic or home visit. Open every day, 9 am to 9 pm.
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
