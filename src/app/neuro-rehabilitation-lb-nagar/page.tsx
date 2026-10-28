import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Neuro & Stroke Rehab Physiotherapy in LB Nagar | Legend",
  description:
    "Neuro physiotherapy and stroke rehab near LB Nagar, Kothapet. Paralysis, Parkinson's and spinal cord injury care. Call +91 81430 15455.",
  alternates: { canonical: "/neuro-rehabilitation-lb-nagar" },
  openGraph: {
    title: "Neuro & Stroke Rehab Physiotherapy in LB Nagar | Legend",
    description:
      "Neuro physiotherapy and stroke rehabilitation at our Kothapet clinic near LB Nagar.",
    url: "/neuro-rehabilitation-lb-nagar",
    siteName: "Legend Physiotherapy",
    locale: "en_IN",
    type: "website",
  },
};

const faqs = [
  {
    question: "How soon after a stroke should physiotherapy start?",
    answer:
      "Physiotherapy may begin as early as 24 to 48 hours after the patient is medically stable. Early intervention often leads to better outcomes, but the exact timing depends on your doctor's assessment. We coordinate with your treating physician before starting any programme.",
  },
  {
    question: "Do you visit patients who are bedridden?",
    answer:
      "Yes. Our physiotherapists visit bedridden patients at home across East Hyderabad. We carry portable equipment for bed-side exercises, passive range-of-motion work, chest physiotherapy and positioning guidance. Call +91 81430 15455 to arrange a home visit.",
  },
  {
    question: "How long does neuro rehabilitation take?",
    answer:
      "Recovery timelines vary widely. Some patients notice functional improvements within four to six weeks; others need several months of consistent therapy. Progress depends on the type and severity of the neurological condition, the patient's age, and how early rehab started. We set short-term goals every few weeks so you can track improvement.",
  },
  {
    question: "What is robotic physiotherapy?",
    answer:
      "Robotic physiotherapy uses motorised devices to guide repetitive, precise movements of the arms or legs. The machine provides just enough support for the patient to complete a movement pattern many times in a session, which may help retrain the brain through neuroplasticity. Ask us whether robotic-assisted therapy is suitable for your condition.",
  },
];

export default function NeuroRehabPage() {
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

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Neuro Physiotherapy and Stroke Rehabilitation in LB Nagar
          </h1>
          <p className="text-lg text-white/90 max-w-2xl">
            Helping patients regain movement, balance and independence after
            stroke, paralysis and other neurological conditions.
          </p>
        </div>
      </div>

      {/* Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
          {/* Conditions */}
          <h2
            className="text-2xl font-bold text-gray-900 mt-10 mb-4"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Neurological Conditions We Treat
          </h2>
          <p>
            At Legend Physiotherapy in Kothapet, near LB Nagar, we work with
            patients living with a range of neurological conditions. Our
            physiotherapists have experience treating:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-6 ml-4">
            <li>
              <strong>Stroke (hemiplegia)</strong> — weakness or paralysis on
              one side of the body after a brain event
            </li>
            <li>
              <strong>Paralysis</strong> — partial or complete loss of movement
              in one or more limbs
            </li>
            <li>
              <strong>Parkinson's disease</strong> — stiffness, tremor and
              difficulty initiating movement
            </li>
            <li>
              <strong>Spinal cord injury</strong> — reduced sensation or motor
              function below the level of injury
            </li>
            <li>
              <strong>Bell's palsy</strong> — facial muscle weakness requiring
              targeted exercises
            </li>
          </ul>
          <p>
            Every neurological condition affects patients differently. Some
            people need help with walking, others with hand function or balance.
            Our team assesses each patient individually before designing a
            treatment plan.
          </p>

          {/* Assessment */}
          <h2
            className="text-2xl font-bold text-gray-900 mt-10 mb-4"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            How We Assess Your Condition
          </h2>
          <p>
            Your first visit begins with a detailed assessment. We review your
            medical reports, measure muscle strength, test reflexes, observe gait
            and balance, and assess activities of daily living such as sitting,
            standing, dressing and feeding. This helps us understand which
            functions have been affected and set realistic, measurable goals.
          </p>
          <p>
            We stay in contact with your neurologist or treating doctor
            throughout your rehabilitation so that your physiotherapy programme
            stays aligned with your overall medical care.
          </p>

          {/* Therapy */}
          <h2
            className="text-2xl font-bold text-gray-900 mt-10 mb-4"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Therapy: Walking, Balance, Arm Function and Robotic Rehab
          </h2>
          <p>
            Neuro rehabilitation at our clinic may include several approaches,
            depending on what the patient needs:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-6 ml-4">
            <li>
              <strong>Gait training</strong> — re-learning to walk safely,
              initially with support and progressively without aids
            </li>
            <li>
              <strong>Balance exercises</strong> — reducing the risk of falls
              through weight-shift drills, standing on unstable surfaces and
              functional reaching tasks
            </li>
            <li>
              <strong>Upper-limb rehabilitation</strong> — exercises targeting
              shoulder, elbow, wrist and hand function so patients can grip,
              lift, write and perform daily tasks
            </li>
            <li>
              <strong>Robotic-assisted therapy</strong> — motorised devices that
              guide repetitive movements to help retrain the nervous system
              through neuroplasticity
            </li>
            <li>
              <strong>Electrical stimulation</strong> — functional electrical
              stimulation (FES) to activate weakened muscles during movement
            </li>
          </ul>
          <p>
            Typical sessions last 45 to 60 minutes. Frequency varies from daily
            sessions in the early weeks after stroke to two or three times per
            week as function improves. Progress is reviewed every two to four
            weeks, and the programme is adjusted as you gain strength and
            confidence.
          </p>

          {/* Home rehab */}
          <h2
            className="text-2xl font-bold text-gray-900 mt-10 mb-4"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Neuro Rehab at Home
          </h2>
          <p>
            Many neurological patients find it difficult to travel, especially in
            the first weeks after a stroke or spinal cord injury. Our
            physiotherapists visit patients at home across LB Nagar,
            Dilsukhnagar, Nagole, Vanasthalipuram and other areas of East
            Hyderabad. We bring portable equipment including resistance bands,
            balance boards and electrical stimulation units.
          </p>
          <p>
            Home-based neuro rehab covers the same techniques used in the
            clinic — gait training in your hallway, balance work beside your bed,
            and upper-limb exercises at your table. We also assess your home
            environment for trip hazards and suggest simple modifications that
            may reduce the risk of falls.
          </p>

          {/* Family guidance */}
          <h2
            className="text-2xl font-bold text-gray-900 mt-10 mb-4"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Guidance for Family and Caregivers
          </h2>
          <p>
            Caring for a family member with a neurological condition can be
            physically and emotionally demanding. We teach caregivers safe
            transfer techniques (bed to wheelchair, wheelchair to toilet),
            correct positioning to prevent pressure sores and contractures, and
            exercises they can help the patient practise between sessions. When
            the caregiver feels confident, recovery often progresses faster.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-12 bg-blue-50 rounded-2xl p-8 text-center border border-blue-100">
          <h3
            className="text-2xl font-bold text-gray-900 mb-4"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Talk to Us About Neuro Rehab
          </h3>
          <p className="text-gray-600 mb-6">
            Call to discuss your condition or book an assessment at the clinic or
            at home.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="tel:+918143015455"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Call +91 81430 15455
            </a>
            <a
              href="https://wa.me/918143015455"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              WhatsApp Us
            </a>
          </div>
        </div>

        {/* FAQ */}
        <section className="mt-16">
          <h2
            className="text-2xl font-bold text-gray-900 mb-6"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-gray-200 pb-6">
                <h3 className="font-semibold text-gray-900 mb-2">
                  {faq.question}
                </h3>
                <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Dr Sirish Bio */}
        <section className="mt-16 bg-gray-50 rounded-2xl p-8">
          <h2
            className="text-2xl font-bold text-gray-900 mb-4"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Your Physiotherapist
          </h2>
          <p className="text-gray-700 leading-relaxed">
            <strong>Dr Sirish, B.P.T, M.Sc Sports (London)</strong> — Senior
            physiotherapist with over 20 years of experience in orthopaedic and
            neurological rehabilitation. Dr Sirish leads the neuro rehab
            programme at Legend Physiotherapy, working with stroke survivors,
            Parkinson's patients and spinal cord injury cases at the Kothapet
            clinic and through home visits.
          </p>
        </section>

        {/* Clinic info & map */}
        <section className="mt-16">
          <h2
            className="text-2xl font-bold text-gray-900 mb-4"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Visit the Clinic
          </h2>
          <p className="text-gray-700 mb-2">
            <strong>Address:</strong> Shop No. 2, Ground Floor, H.No. 11-13-714,
            Road No. 4, Dwarka Nagar, Green Hills Colony, Kothapet, Hyderabad,
            Telangana 500102
          </p>
          <p className="text-gray-700 mb-6">
            <strong>Hours:</strong> Monday to Sunday, 9 am to 9 pm
          </p>
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.5!2d78.5457583!3d17.3597024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb990043784b77%3A0x55126327d4caeb32!2sLegend%20Physiotherapy%20Ortho%20and%20Neuro%20Pain%20Management%20Clinic%20%7C%20Kothapet%20%7C%20Lb%20Nagar!5e0!3m2!1sen!2sin!4v1"
              width="100%"
              height="400"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Legend Physiotherapy, Kothapet on Google Maps"
            />
          </div>
        </section>

        {/* Internal links */}
        <section className="mt-16">
          <h2
            className="text-2xl font-bold text-gray-900 mb-4"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Related Reading
          </h2>
          <ul className="space-y-2 text-blue-600">
            <li>
              <a
                href="/blog/robotic-physiotherapy-vs-traditional-physical-therapy-hyderabad"
                className="hover:underline"
              >
                Robotic Physiotherapy vs Traditional Physical Therapy
              </a>
            </li>
            <li>
              <a
                href="/blog/home-physiotherapy-services"
                className="hover:underline"
              >
                Home Physiotherapy Services
              </a>
            </li>
            <li>
              <a href="/book-appointment" className="hover:underline">
                Book an Appointment
              </a>
            </li>
          </ul>
        </section>
      </article>

      <Footer />
    </div>
  );
}
