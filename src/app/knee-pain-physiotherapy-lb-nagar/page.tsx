import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Knee Pain Physiotherapy in LB Nagar, Hyderabad | Legend",
  description:
    "Knee pain physiotherapy at our Kothapet clinic near LB Nagar. Treatment for osteoarthritis, ligament injuries, runner's knee and post-surgery rehab. Call +91 81430 15455.",
  alternates: { canonical: "/knee-pain-physiotherapy-lb-nagar" },
  openGraph: {
    title: "Knee Pain Physiotherapy in LB Nagar, Hyderabad | Legend",
    description:
      "Knee pain physiotherapy at our Kothapet clinic near LB Nagar. Osteoarthritis, ligament injuries, runner's knee and post-surgery rehab.",
    url: "/knee-pain-physiotherapy-lb-nagar",
    siteName: "Legend Physiotherapy",
    locale: "en_IN",
    type: "website",
  },
};

const faqs = [
  {
    question: "How many physiotherapy sessions will my knee need?",
    answer:
      "Most knee conditions respond within 8 to 15 sessions, but the number varies with the diagnosis and your starting level of pain and movement. After your first assessment Dr Sirish will give you an estimated timeline. Some patients feel meaningful relief in two to three visits; others with long-standing osteoarthritis may benefit from a longer course.",
  },
  {
    question: "Can physiotherapy help knee osteoarthritis?",
    answer:
      "Yes. Clinical guidelines recommend physiotherapy as a first-line treatment for knee osteoarthritis. Strengthening the muscles around the knee, improving joint flexibility and learning movement modifications may reduce pain and delay or avoid the need for surgery.",
  },
  {
    question: "Do I need an X-ray or MRI before my first visit?",
    answer:
      "Not necessarily. Our physiotherapists carry out a thorough clinical examination at the first visit and can often identify the problem without imaging. If we feel an X-ray or MRI would change the treatment plan, we will refer you at that point.",
  },
  {
    question: "Do you offer home visits after knee replacement?",
    answer:
      "Yes. We provide post-operative home visits across East Hyderabad for patients recovering from knee replacement surgery. Our therapist brings portable equipment so you can begin rehabilitation safely at home. Call +91 81430 15455 to arrange a visit.",
  },
  {
    question: "What does a session cost?",
    answer:
      "Session fees depend on the type and duration of treatment. Please call us at +91 81430 15455 for current pricing. We keep our rates affordable so that quality physiotherapy is accessible to everyone.",
  },
];

export default function KneePainPage() {
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
            Knee Pain Physiotherapy in LB Nagar, Hyderabad
          </h1>
          <p className="text-lg text-white/90 max-w-2xl mb-6">
            Evidence-based treatment for all types of knee pain at our Kothapet
            clinic, a few minutes from LB Nagar and Dilsukhnagar.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="tel:+918143015455"
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-bold hover:bg-blue-50 transition-colors text-sm sm:text-base"
            >
              Call +91 81430 15455
            </a>
            <a
              href="https://wa.me/919966193413"
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
            Knee Problems We Treat
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The knee is the largest joint in the body and one of the most
            commonly injured. At Legend Physiotherapy we see patients with a wide
            range of knee conditions, including:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
            <li>
              <strong>Osteoarthritis</strong> — wear-and-tear changes that cause
              stiffness, swelling and pain, especially after sitting or first
              thing in the morning.
            </li>
            <li>
              <strong>Ligament injuries</strong> — ACL, PCL, MCL and LCL tears
              from sports, falls or sudden twisting movements.
            </li>
            <li>
              <strong>Meniscus tears</strong> — damage to the cartilage cushion
              inside the knee, often felt as clicking, locking or giving way.
            </li>
            <li>
              <strong>Runner&apos;s knee (patellofemoral pain)</strong> — pain
              around or behind the kneecap, common in runners, cyclists and
              people who sit for long periods.
            </li>
            <li>
              <strong>Pain after knee replacement</strong> — stiffness, weakness
              or difficulty walking that persists after total or partial knee
              replacement surgery.
            </li>
          </ul>

          <h2
            className="text-2xl font-bold text-gray-900 mt-10 mb-4"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            How We Assess Your Knee at the Kothapet Clinic
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Your first appointment lasts about 45 minutes. Dr Sirish or one of
            our senior therapists will ask about your symptoms, daily activities
            and any previous treatment. We then check your range of motion,
            muscle strength, joint stability and walking pattern. Most diagnoses
            can be made clinically; if imaging is needed, we will guide you on
            the right scan. By the end of the session you will have a clear
            picture of what is causing your knee pain and a written treatment
            plan to take home.
          </p>

          <h2
            className="text-2xl font-bold text-gray-900 mt-10 mb-4"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Your Treatment Plan
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            We build each programme around three pillars:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
            <li>
              <strong>Exercise therapy</strong> — progressive strengthening of
              the quadriceps, hamstrings and hip muscles to support the knee
              joint and reduce load on damaged structures.
            </li>
            <li>
              <strong>Manual therapy</strong> — hands-on mobilisation and soft
              tissue techniques to improve joint movement and ease muscle
              tightness.
            </li>
            <li>
              <strong>Electrotherapy and laser</strong> — where clinically
              suitable, modalities such as ultrasound, TENS or low-level laser
              therapy may help manage pain and inflammation in the early stages.
            </li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-6">
            Treatment is always guided by your response. We adjust exercises,
            add resistance or progress to sport-specific drills as your knee
            improves.
          </p>

          <h2
            className="text-2xl font-bold text-gray-900 mt-10 mb-4"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            How Many Sessions to Expect
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            A mild soft-tissue strain may settle in four to six sessions. Knee
            osteoarthritis or post-surgical rehabilitation often needs 10 to 20
            sessions spread over several weeks. Every patient is different, so
            we set short-term goals at each visit and revise the plan as you
            progress. We will never continue treatment longer than necessary.
          </p>

          <h2
            className="text-2xl font-bold text-gray-900 mt-10 mb-4"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Exercises to Start at Home
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Gentle movement usually helps more than complete rest. While you
            wait for your appointment, try these if they do not increase your
            pain:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
            <li>
              Seated knee extensions — straighten your knee slowly, hold for
              five seconds, lower. Repeat 10 times each leg.
            </li>
            <li>
              Heel slides — lying on your back, slide your heel toward your
              buttock, then straighten. Repeat 10 times.
            </li>
            <li>
              Standing calf raises — rise onto your toes, hold briefly, lower.
              Repeat 15 times. Hold a chair for balance.
            </li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-6">
            Stop any exercise that makes the pain worse and let us know at your
            visit. These are starting points, not replacements for a full
            assessment.
          </p>

          <h2
            className="text-2xl font-bold text-gray-900 mt-10 mb-4"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Clinic Visits and Home Visits
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Our clinic at Dwarka Nagar, Kothapet is open every day from 9 am to
            9 pm. If you have had recent surgery, struggle with stairs or
            simply prefer treatment at home, we offer home visits across LB
            Nagar, Dilsukhnagar, Nagole, Vanasthalipuram and surrounding areas.
            The therapist brings portable equipment so you receive the same
            standard of care. Call{" "}
            <a
              href="tel:+918143015455"
              className="text-blue-600 font-semibold hover:underline"
            >
              +91 81430 15455
            </a>{" "}
            to book either option.
          </p>
        </div>

        {/* FAQ Section */}
        <section className="mt-12">
          <h2
            className="text-2xl font-bold text-gray-900 mb-6"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="border border-gray-200 rounded-xl p-6"
              >
                <h3 className="font-bold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Internal Links */}
        <section className="mt-12">
          <h2
            className="text-2xl font-bold text-gray-900 mb-4"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Related Pages
          </h2>
          <ul className="space-y-2">
            <li>
              <a href="/blog/knee-pain-management" className="text-blue-600 hover:underline">
                Blog: Knee Pain Management
              </a>
            </li>
            <li>
              <a href="/post-surgery-rehabilitation-lb-nagar" className="text-blue-600 hover:underline">
                Post-Surgery Rehabilitation
              </a>
            </li>
            <li>
              <a href="/sports-injury-rehabilitation-lb-nagar" className="text-blue-600 hover:underline">
                Sports Injury Rehabilitation
              </a>
            </li>
            <li>
              <a href="/locations/lb-nagar" className="text-blue-600 hover:underline">
                Physiotherapy in LB Nagar
              </a>
            </li>
            <li>
              <a href="/book-appointment" className="text-blue-600 hover:underline">
                Book an Appointment
              </a>
            </li>
          </ul>
        </section>

        {/* Dr Sirish Bio */}
        <section className="mt-12 bg-blue-50 rounded-2xl p-8 border border-blue-100">
          <h2
            className="text-xl font-bold text-gray-900 mb-3"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Your Physiotherapist — Dr Sirish
          </h2>
          <p className="text-gray-700 text-sm leading-relaxed mb-2">
            <strong>B.P.T, M.Sc Sports (London)</strong> — Senior
            Physiotherapist with 20+ years of experience in orthopaedic and
            neurological rehabilitation. Dr Sirish leads the clinical team at
            Legend Physiotherapy and personally oversees complex knee cases
            including post-surgical protocols and sports injury recovery plans.
          </p>
          <p className="text-gray-700 text-sm leading-relaxed">
            Clinic: Shop No. 2, Ground Floor, H.No. 11-13-714, Road No. 4,
            Dwarka Nagar, Green Hills Colony, Kothapet, Hyderabad 500102. Open
            daily 9 am – 9 pm.
          </p>
        </section>

        {/* CTA */}
        <section className="mt-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-center text-white">
          <h2
            className="text-2xl font-bold mb-3"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Book a Knee Assessment
          </h2>
          <p className="text-white/90 mb-6">
            Call +91 81430 15455 or book online. We are open every day, 9 am to
            9 pm.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="tel:+918143015455"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold hover:bg-blue-50 transition-colors"
            >
              Call Now
            </a>
            <a
              href="/book-appointment"
              className="bg-blue-800 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-900 transition-colors"
            >
              Book Online
            </a>
          </div>
        </section>

        {/* Map */}
        <section className="mt-12">
          <h2
            className="text-2xl font-bold text-gray-900 mb-4"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Find Us
          </h2>
          <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200 h-[400px]">
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
      </article>

      <Footer />
    </div>
  );
}
