import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Post-Surgery Physiotherapy in LB Nagar, Hyderabad | Legend",
  description:
    "Post-surgery physiotherapy near LB Nagar, Kothapet. Knee and hip replacement, ACL and spine surgery rehab. Call +91 81430 15455.",
  alternates: { canonical: "/post-surgery-rehabilitation-lb-nagar" },
  openGraph: {
    title: "Post-Surgery Physiotherapy in LB Nagar, Hyderabad | Legend",
    description:
      "Post-surgery physiotherapy and rehabilitation at Legend Physiotherapy, Kothapet, near LB Nagar.",
    url: "/post-surgery-rehabilitation-lb-nagar",
    siteName: "Legend Physiotherapy",
    locale: "en_IN",
    type: "website",
  },
};

const faqs = [
  {
    question: "When should physiotherapy start after surgery?",
    answer:
      "In most cases, gentle physiotherapy can begin within 24 to 72 hours after surgery, depending on the procedure and your surgeon's protocol. For knee and hip replacements, early mobilisation on the first or second day is now standard practice. We always follow your surgeon's specific instructions regarding weight-bearing, range-of-motion limits and precautions.",
  },
  {
    question: "Do I need my surgeon's note?",
    answer:
      "A referral note or discharge summary from your surgeon is helpful because it tells us the exact procedure performed, any precautions (such as weight-bearing restrictions) and the recommended rehab timeline. If you don't have a written note, we can contact your surgeon's office directly before starting treatment.",
  },
  {
    question: "Can you come home after a knee replacement?",
    answer:
      "Yes. Home-visit physiotherapy after knee replacement is one of our most requested services. Our physiotherapist brings portable equipment to your home and follows the same rehab protocol you would receive at the clinic. We cover LB Nagar, Dilsukhnagar, Nagole, Vanasthalipuram and other areas across East Hyderabad. Call +91 81430 15455 to arrange a home visit.",
  },
  {
    question: "How many weeks of rehab will I need?",
    answer:
      "Rehab duration depends on the surgery. After a total knee replacement, most patients need 8 to 12 weeks of structured physiotherapy. ACL reconstruction rehab typically runs 6 to 9 months before full return to sport. Spine surgery recovery varies from 6 weeks to several months. We set milestones every two weeks so you can see measurable progress.",
  },
];

export default function PostSurgeryRehabPage() {
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
            Post-Surgery Physiotherapy in LB Nagar, Hyderabad
          </h1>
          <p className="text-lg text-white/90 max-w-2xl">
            Structured rehabilitation to help you recover strength, mobility and
            confidence after orthopaedic or spinal surgery.
          </p>
        </div>
      </div>

      {/* Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
          {/* Surgeries */}
          <h2
            className="text-2xl font-bold text-gray-900 mt-10 mb-4"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Surgeries We Rehabilitate
          </h2>
          <p>
            At Legend Physiotherapy in Kothapet, near LB Nagar, we provide
            post-operative rehabilitation for a wide range of orthopaedic and
            spinal procedures:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-6 ml-4">
            <li>
              <strong>Knee replacement</strong> (total and partial) — restoring
              range of motion, reducing swelling and rebuilding quadriceps
              strength
            </li>
            <li>
              <strong>Hip replacement</strong> — gait retraining, hip
              strengthening and precautions to protect the new joint
            </li>
            <li>
              <strong>ACL reconstruction</strong> — a phased programme from
              early protected motion through to sport-specific drills
            </li>
            <li>
              <strong>Spine surgery</strong> (discectomy, laminectomy, fusion) —
              core stabilisation, safe movement patterns and gradual return to
              daily activities
            </li>
            <li>
              <strong>Fracture fixation</strong> (plates, screws, nails) —
              progressive loading, scar management and joint mobilisation once
              the surgeon clears weight-bearing
            </li>
          </ul>
          <p>
            We also work with patients recovering from shoulder arthroscopy,
            rotator cuff repair, ankle surgery and wrist fracture fixation. If
            your procedure is not listed, call us — we are likely to have
            experience with it.
          </p>

          {/* Surgeon's protocol */}
          <h2
            className="text-2xl font-bold text-gray-900 mt-10 mb-4"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Following Your Surgeon's Protocol
          </h2>
          <p>
            Every rehab plan starts with your surgeon's post-operative
            instructions. These tell us what movements are safe, when you can
            bear weight, and which activities to avoid in the early weeks. We
            build our physiotherapy programme around these guidelines and stay in
            touch with your surgical team throughout recovery.
          </p>
          <p>
            If your surgeon has given you a specific protocol booklet (many
            orthopaedic centres provide one), bring it to your first session. We
            will map our treatment plan onto their milestones so that clinic
            visits, exercises and progress reviews are aligned.
          </p>

          {/* Recovery phases */}
          <h2
            className="text-2xl font-bold text-gray-900 mt-10 mb-4"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Recovery Phases Week by Week
          </h2>
          <p className="italic text-gray-500 mb-4">
            These are typical timelines. Your surgeon's advice always takes
            priority.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">
            Weeks 1–2: Protection and Early Motion
          </h3>
          <p>
            The focus is on managing pain and swelling, protecting the surgical
            site and beginning gentle range-of-motion exercises. You may use
            crutches, a walker or a brace. We teach you safe transfers (bed to
            chair, chair to standing) and basic home exercises you can do between
            sessions.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">
            Weeks 3–6: Restoring Movement
          </h3>
          <p>
            As healing progresses, we increase the range and intensity of
            exercises. Joint mobilisation, scar tissue management and light
            strengthening work begin. Most patients start walking with less
            support during this phase. We monitor for signs of complications
            such as excessive swelling, wound redness or unexpected pain
            increases.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">
            Weeks 7–12: Rebuilding Strength
          </h3>
          <p>
            Strengthening exercises become the priority. We progress from
            bodyweight movements to resistance bands and light weights. Balance
            and proprioception work helps restore confidence in daily activities
            such as climbing stairs, walking on uneven ground and carrying
            objects. By the end of this phase, many patients return to most
            routine activities.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">
            Months 4–6 and Beyond
          </h3>
          <p>
            For patients returning to sport or physically demanding work, we
            continue with advanced strengthening, agility drills and
            sport-specific exercises. ACL reconstruction patients, for example,
            typically need six to nine months before they are cleared for
            competitive play.
          </p>

          {/* Home visits */}
          <h2
            className="text-2xl font-bold text-gray-900 mt-10 mb-4"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Home Visits After Discharge
          </h2>
          <p>
            Travelling to a clinic in the first days after joint replacement or
            spine surgery can be uncomfortable and impractical. Our
            physiotherapists visit patients at home across LB Nagar,
            Dilsukhnagar, Nagole, Vanasthalipuram, Kothapet and surrounding
            areas. We bring portable equipment — resistance bands, a goniometer
            for measuring joint angles, ice packs and electrical stimulation
            units — so you receive the same standard of care you would at the
            clinic.
          </p>
          <p>
            As you recover and become more mobile, you can transition to clinic
            visits where we have access to additional equipment including
            parallel bars, a treadmill and weight machines.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-12 bg-blue-50 rounded-2xl p-8 text-center border border-blue-100">
          <h3
            className="text-2xl font-bold text-gray-900 mb-4"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Plan Your Rehab
          </h3>
          <p className="text-gray-600 mb-6">
            Call before or soon after your surgery so we can start planning your
            recovery.
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
            neurological rehabilitation. Dr Sirish works closely with leading
            orthopaedic surgeons in Hyderabad to design post-operative
            programmes that follow evidence-based protocols and are tailored to
            each patient's surgery, fitness level and goals.
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
                href="/blog/rehabilitation-after-surgery"
                className="hover:underline"
              >
                Rehabilitation After Surgery
              </a>
            </li>
            <li>
              <a
                href="/knee-pain-physiotherapy-lb-nagar"
                className="hover:underline"
              >
                Knee Pain Physiotherapy
              </a>
            </li>
            <li>
              <a
                href="/blog/home-visit-services"
                className="hover:underline"
              >
                Home Visit Physiotherapy Services
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
