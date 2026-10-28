import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Sports Injury Physiotherapy in LB Nagar, Hyderabad | Legend",
  description:
    "Sports injury physiotherapy and rehab at our Kothapet clinic near LB Nagar. ACL, ankle sprain, hamstring, tennis elbow treatment. Call +91 81430 15455.",
  alternates: { canonical: "/sports-injury-rehabilitation-lb-nagar" },
  openGraph: {
    title: "Sports Injury Physiotherapy in LB Nagar, Hyderabad | Legend",
    description:
      "Sports injury physiotherapy and rehab at our Kothapet clinic near LB Nagar.",
    url: "/sports-injury-rehabilitation-lb-nagar",
    siteName: "Legend Physiotherapy",
    locale: "en_IN",
    type: "website",
  },
};

const faqs = [
  {
    question: "When can I return to playing?",
    answer:
      "Return-to-sport timing depends on the injury, the sport and how your body responds to rehabilitation. A mild ankle sprain may allow light training within two to four weeks, while an ACL reconstruction typically requires six to nine months of structured rehab before competitive play. We use objective strength and movement tests — not just pain levels — to decide when you are ready.",
  },
  {
    question: "Can an ACL tear be rehabbed without surgery?",
    answer:
      "Some patients with partial ACL tears or lower activity demands can manage well with physiotherapy alone, focusing on quadriceps and hamstring strengthening, balance training and sport-specific drills. However, patients who play pivoting sports such as football, kabaddi or badminton often benefit from surgical reconstruction followed by physiotherapy. We assess each case individually and discuss the options with you and your orthopaedic surgeon.",
  },
  {
    question: "Do you work with cricketers, runners and gym-goers?",
    answer:
      "Yes. Our clinic treats recreational and competitive athletes across many disciplines, including cricket, running, badminton, football, gym training and swimming. Dr Sirish holds an M.Sc in Sports Physiotherapy and designs sport-specific rehab programmes tailored to the demands of each activity.",
  },
  {
    question: "Do I need a referral?",
    answer:
      "No referral is needed. You can book directly by calling the clinic or messaging us on WhatsApp. If imaging or a specialist opinion is required, we will guide you to the appropriate doctor.",
  },
];

export default function SportsInjuryPage() {
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
            Sports Injury Physiotherapy and Rehab in LB Nagar, Hyderabad
          </h1>
          <p className="text-lg text-white/90 max-w-3xl mb-6">
            Get back to the sport you love with structured, evidence-based rehabilitation at Legend
            Physiotherapy, Kothapet.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="tel:+918143015455"
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-bold hover:bg-blue-50 transition-colors"
            >
              Book a Sports Injury Assessment: Call +91 81430 15455
            </a>
            <a
              href="https://wa.me/919966193413"
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
            Injuries We Treat
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Whether you play cricket on weekends, run half-marathons or train at the gym, injuries
            can set you back if they are not managed properly. At Legend Physiotherapy in Kothapet,
            near LB Nagar, we treat the full spectrum of sports-related injuries:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6 ml-4">
            <li>
              <strong>ACL, PCL and meniscus injuries</strong> — common in pivoting sports such as
              football, kabaddi and badminton. We provide both conservative rehab and post-surgical
              reconstruction programmes.
            </li>
            <li>
              <strong>Ankle sprains and instability</strong> — from acute lateral sprains to chronic
              ankle giving way. Treatment includes manual therapy, proprioceptive training and taping
              techniques.
            </li>
            <li>
              <strong>Hamstring and quadriceps strains</strong> — frequent in sprinters, cricketers
              and gym-goers. We grade the tear, manage the early phase and build a progressive
              strengthening plan.
            </li>
            <li>
              <strong>Tennis elbow and golfer's elbow</strong> — overuse tendinopathies that respond
              well to eccentric loading, manual therapy and activity modification.
            </li>
            <li>
              <strong>Runner's knee (patellofemoral pain)</strong> — anterior knee pain aggravated
              by stairs, squatting or prolonged sitting, usually resolved through hip and quadriceps
              strengthening.
            </li>
          </ul>

          <h2
            className="text-2xl font-bold text-gray-900 mt-10 mb-4"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Your Return-to-Sport Plan
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Returning too early is the fastest route to re-injury. We follow a phased approach that
            mirrors the demands of your sport:
          </p>
          <ol className="list-decimal list-inside space-y-2 text-gray-700 mb-6 ml-4">
            <li>
              <strong>Acute phase</strong> — pain and swelling control through rest, ice,
              compression, elevation and, where appropriate, electrotherapy or laser.
            </li>
            <li>
              <strong>Restoration phase</strong> — regaining full range of motion, rebuilding muscle
              strength and correcting movement patterns that may have contributed to the injury.
            </li>
            <li>
              <strong>Sport-specific phase</strong> — agility drills, plyometrics, change-of-direction
              work and match-simulation exercises tailored to your sport.
            </li>
            <li>
              <strong>Return-to-play testing</strong> — objective benchmarks such as single-leg hop
              tests, limb symmetry index and sport-specific performance measures. You return to full
              activity only when these are met.
            </li>
          </ol>
          <p className="text-gray-700 leading-relaxed mb-4">
            Timelines vary widely. A grade-1 ankle sprain may need two to four weeks; ACL
            reconstruction rehab typically takes six to nine months. We set realistic expectations at
            the outset and adjust as you progress.
          </p>

          <h2
            className="text-2xl font-bold text-gray-900 mt-10 mb-4"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Strength and Conditioning
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Rehabilitation does not stop when pain disappears. Many re-injuries happen because the
            athlete returns to sport with residual weakness or poor movement control. Our
            strength-and-conditioning component includes:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6 ml-4">
            <li>Progressive resistance training for the injured area and supporting muscle groups.</li>
            <li>Core stability work to improve force transfer and reduce compensatory loading.</li>
            <li>Balance and proprioception exercises on unstable surfaces.</li>
            <li>Running mechanics analysis for runners with recurrent calf, shin or knee issues.</li>
          </ul>

          <h2
            className="text-2xl font-bold text-gray-900 mt-10 mb-4"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Preventing the Next Injury
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Prevention is always better than treatment. After you recover, we offer practical
            guidance to lower your future risk:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6 ml-4">
            <li>Warm-up and cool-down routines designed for your sport.</li>
            <li>Load-management advice — how much training volume is safe to add per week.</li>
            <li>Footwear and equipment recommendations.</li>
            <li>
              Periodic screening sessions to catch emerging imbalances before they become injuries.
            </li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-4">
            Athletes who complete a structured injury-prevention programme have been shown in
            research to reduce their risk of recurrent ankle sprains, ACL injuries and hamstring
            strains by up to 50 per cent, though individual results depend on adherence and sport
            demands.
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
              <a href="/blog/sports-injury-rehab" className="hover:underline">
                Sports Injury Rehab — Blog
              </a>
            </li>
            <li>
              <a
                href="/blog/recovery-after-sports-injuries-a-physiotherapy-guide"
                className="hover:underline"
              >
                Recovery After Sports Injuries — Blog
              </a>
            </li>
            <li>
              <a href="/knee-pain-physiotherapy-lb-nagar" className="hover:underline">
                Knee Pain Physiotherapy
              </a>
            </li>
            <li>
              <a href="/post-surgery-rehabilitation-lb-nagar" className="hover:underline">
                Post-Surgery Rehabilitation
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
            over 20 years of experience treating athletes and active individuals, he designs
            return-to-sport programmes that balance recovery speed with injury-prevention science.
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
                  href="https://wa.me/919966193413"
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
            Get Back in the Game
          </h2>
          <p className="text-white/90 mb-6">
            Book a sports injury assessment at Legend Physiotherapy, Kothapet.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="tel:+918143015455"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold hover:bg-blue-50 transition-colors"
            >
              Call +91 81430 15455
            </a>
            <a
              href="https://wa.me/919966193413"
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
