import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Frozen Shoulder & Shoulder Pain Physio, LB Nagar | Legend",
  description:
    "Shoulder pain and frozen shoulder physiotherapy near LB Nagar, Kothapet. Rotator cuff and impingement rehab. Call +91 81430 15455.",
  alternates: { canonical: "/shoulder-pain-physiotherapy-lb-nagar" },
  openGraph: {
    title: "Frozen Shoulder & Shoulder Pain Physio, LB Nagar | Legend",
    description:
      "Shoulder pain and frozen shoulder physiotherapy at our Kothapet clinic near LB Nagar.",
    url: "/shoulder-pain-physiotherapy-lb-nagar",
    siteName: "Legend Physiotherapy",
    locale: "en_IN",
    type: "website",
  },
};

const faqs = [
  {
    question: "How long does frozen shoulder take to recover?",
    answer:
      "Frozen shoulder typically progresses through three stages — freezing, frozen and thawing — over 12 to 24 months. With consistent physiotherapy, many patients regain functional range of motion within 6 to 12 months, though individual timelines vary depending on severity, age and whether diabetes is present.",
  },
  {
    question: "Is frozen shoulder physiotherapy painful?",
    answer:
      "Treatment is tailored to your pain tolerance. During the freezing stage we focus on gentle movements and pain relief rather than aggressive stretching. As the shoulder enters the thawing stage, exercises become progressively more active. Most patients describe mild discomfort during sessions that eases quickly afterwards.",
  },
  {
    question: "I have diabetes; does that change treatment?",
    answer:
      "Yes. Diabetes increases the risk of developing frozen shoulder and can slow recovery. We adjust treatment intensity, set realistic milestones and coordinate with your physician to ensure blood-sugar management supports the rehabilitation process.",
  },
  {
    question: "Can I do the exercises at home?",
    answer:
      "Absolutely. Home exercises are a key part of shoulder rehab. We teach you a daily routine — typically pendulum swings, wall walks and towel stretches — and progress it as your range improves. We also offer supervised home-visit sessions if you need hands-on guidance at home.",
  },
];

export default function ShoulderPainPage() {
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
            className="text-3xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Shoulder Pain and Frozen Shoulder Physiotherapy in LB Nagar
          </h1>
          <p className="text-lg text-white/90 max-w-3xl mb-6">
            Regain pain-free movement with evidence-based shoulder rehabilitation at Legend
            Physiotherapy, Kothapet.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="tel:+918143015455"
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-bold hover:bg-blue-50 transition-colors"
            >
              Book a Shoulder Assessment: Call +91 81430 15455
            </a>
            <a
              href="https://wa.me/918143015455"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-green-600 transition-colors"
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
            Shoulder Problems We Treat
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The shoulder is the most mobile joint in the body, which also makes it one of the most
            vulnerable. At Legend Physiotherapy in Kothapet, near LB Nagar, we see patients with a
            wide range of shoulder complaints every week. The most common conditions we treat
            include:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6 ml-4">
            <li>
              <strong>Frozen shoulder (adhesive capsulitis)</strong> — progressive stiffness and pain
              that limits everyday tasks such as reaching overhead, fastening a bra strap or tucking
              in a shirt.
            </li>
            <li>
              <strong>Rotator cuff injury</strong> — partial or full-thickness tears, tendinitis and
              bursitis that cause pain when lifting the arm or lying on the affected side.
            </li>
            <li>
              <strong>Shoulder impingement</strong> — pinching of the rotator cuff tendons between
              the bones of the shoulder, common in people who work with their arms raised.
            </li>
            <li>
              <strong>Post-dislocation rehabilitation</strong> — restoring stability, strength and
              confidence after the shoulder has dislocated or subluxated.
            </li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-4">
            Whether your pain started gradually or after a fall, our first step is always a thorough
            assessment. We check range of motion, muscle strength and specific clinical tests to
            identify the affected structure before planning treatment.
          </p>

          <h2
            className="text-2xl font-bold text-gray-900 mt-10 mb-4"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Frozen Shoulder and Diabetes
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Research shows that people with diabetes are up to five times more likely to develop
            frozen shoulder, and the condition often affects both sides. High blood-sugar levels may
            cause collagen in the joint capsule to become stiffer and more prone to scarring. At our
            clinic we frequently see diabetic patients with bilateral frozen shoulder and understand
            that recovery may take longer.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            We work alongside your diabetologist or GP to make sure blood-sugar control supports
            rehabilitation. Treatment intensity is adjusted stage by stage, and we set honest,
            achievable milestones so you know what to expect.
          </p>

          <h2
            className="text-2xl font-bold text-gray-900 mt-10 mb-4"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Treatment by Stage
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Shoulder rehabilitation at Legend Physiotherapy is never one-size-fits-all. We plan
            treatment around the stage you are in and adjust as the shoulder responds.
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6 ml-4">
            <li>
              <strong>Acute / freezing stage</strong> — pain management is the priority. We use
              gentle joint mobilisation, soft-tissue release, electrotherapy and, where suitable,
              low-level laser therapy to reduce inflammation. Aggressive stretching at this stage can
              worsen pain.
            </li>
            <li>
              <strong>Stiff / frozen stage</strong> — once pain settles, we introduce graded
              stretching and manual therapy to progressively improve range of motion. Techniques such
              as Maitland mobilisation and Mulligan movement-with-mobilisation may help restore
              overhead reach and external rotation.
            </li>
            <li>
              <strong>Recovery / thawing stage</strong> — the focus shifts to strengthening the
              rotator cuff and scapular muscles. We add resistance exercises and functional drills so
              the shoulder is strong enough for daily activities and sport.
            </li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-4">
            Most frozen-shoulder patients attend two to three sessions per week for the first few
            weeks, tapering to once a week as they gain independence with home exercises. Total
            treatment duration varies from three to nine months depending on severity.
          </p>

          <h2
            className="text-2xl font-bold text-gray-900 mt-10 mb-4"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Home Exercises
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Clinic sessions alone are not enough — what you do between appointments matters just as
            much. We prescribe a daily home programme that typically includes:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6 ml-4">
            <li>Pendulum swings to gently loosen the joint without load.</li>
            <li>Wall-walk stretches to increase forward reach and overhead motion.</li>
            <li>Towel or stick-assisted external-rotation stretches.</li>
            <li>Isometric and then isotonic rotator-cuff strengthening as pain allows.</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-4">
            We demonstrate every exercise, check your form, and progress the programme at each
            visit. If you prefer guidance at home, our physiotherapists offer home-visit sessions
            across East Hyderabad.
          </p>

          {/* FAQ Section */}
          <h2
            className="text-2xl font-bold text-gray-900 mt-10 mb-6"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Frequently Asked Questions
          </h2>
          <div className="space-y-6 mb-10">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-gray-200 pb-4">
                <h3 className="font-semibold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            ))}
          </div>

          {/* Internal Links */}
          <h2
            className="text-2xl font-bold text-gray-900 mt-10 mb-4"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Related Pages
          </h2>
          <ul className="list-disc list-inside space-y-2 text-blue-600 mb-8 ml-4">
            <li>
              <a href="/blog/neck-and-shoulder-care" className="hover:underline">
                Neck and Shoulder Care — Blog
              </a>
            </li>
            <li>
              <a href="/neck-pain-cervical-physiotherapy-lb-nagar" className="hover:underline">
                Neck Pain and Cervical Physiotherapy
              </a>
            </li>
            <li>
              <a href="/sports-injury-rehabilitation-lb-nagar" className="hover:underline">
                Sports Injury Rehabilitation
              </a>
            </li>
            <li>
              <a href="/book-appointment" className="hover:underline">
                Book an Appointment
              </a>
            </li>
          </ul>
        </div>

        {/* Dr Sirish Bio */}
        <div className="bg-blue-50 rounded-2xl p-6 md:p-8 mb-10 border border-blue-100">
          <h2
            className="text-xl font-bold text-gray-900 mb-3"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Your Physiotherapist — Dr Sirish
          </h2>
          <p className="text-gray-700 text-sm leading-relaxed">
            Dr Sirish holds a B.P.T degree and an M.Sc in Sports Physiotherapy from London. With
            over 20 years of clinical experience in orthopaedic and neurological rehabilitation, he
            leads the team at Legend Physiotherapy and personally supervises complex shoulder cases.
          </p>
        </div>

        {/* Clinic Info + Map */}
        <div className="bg-gray-50 rounded-2xl p-6 md:p-8 mb-10">
          <h2
            className="text-xl font-bold text-gray-900 mb-4"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Visit Our Clinic
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3 text-sm text-gray-700">
              <p>
                <strong>Address:</strong> Shop No. 2, Ground Floor, H.No. 11-13-714, Road No. 4,
                Dwarka Nagar, Green Hills Colony, Kothapet, Hyderabad, Telangana 500102
              </p>
              <p>
                <strong>Hours:</strong> Monday to Sunday, 9 am – 9 pm
              </p>
              <p>
                <strong>Phone:</strong>{" "}
                <a href="tel:+918143015455" className="text-blue-600 hover:underline">
                  +91 81430 15455
                </a>
              </p>
              <p>
                <a
                  href="https://wa.me/918143015455"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 hover:underline font-semibold"
                >
                  WhatsApp Us
                </a>
              </p>
            </div>
            <div className="rounded-xl overflow-hidden h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.5!2d78.5457583!3d17.3597024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb990043784b77%3A0x55126327d4caeb32!2sLegend%20Physiotherapy%20Ortho%20and%20Neuro%20Pain%20Management%20Clinic%20%7C%20Kothapet%20%7C%20Lb%20Nagar!5e0!3m2!1sen!2sin!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Legend Physiotherapy, Kothapet on Google Maps"
              />
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-center text-white">
          <h2
            className="text-2xl font-bold mb-3"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Ready to Move Your Shoulder Again?
          </h2>
          <p className="text-white/90 mb-6">
            Book a shoulder assessment at Legend Physiotherapy, Kothapet.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="tel:+918143015455"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold hover:bg-blue-50 transition-colors"
            >
              Call +91 81430 15455
            </a>
            <a
              href="https://wa.me/918143015455"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-8 py-4 rounded-lg font-bold hover:bg-green-600 transition-colors"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
}
