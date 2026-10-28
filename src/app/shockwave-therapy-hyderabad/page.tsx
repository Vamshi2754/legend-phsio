import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shockwave Therapy (ESWT) in Hyderabad | Legend Physiotherapy",
  description:
    "Extracorporeal shockwave therapy for plantar fasciitis, tennis elbow and calcific tendinitis in Hyderabad. Non-invasive pain relief. Call +91 81430 15455.",
  keywords: [
    "shockwave therapy Hyderabad",
    "ESWT Hyderabad",
    "extracorporeal shockwave therapy",
    "plantar fasciitis shockwave treatment",
    "tennis elbow shockwave",
    "heel pain treatment Hyderabad",
    "calcific tendinitis treatment Hyderabad",
  ],
  alternates: { canonical: "/shockwave-therapy-hyderabad" },
  openGraph: {
    title: "Shockwave Therapy (ESWT) in Hyderabad | Legend Physiotherapy",
    description:
      "Non-invasive shockwave therapy for chronic tendon pain at Legend Physiotherapy Kothapet, Hyderabad.",
    url: "/shockwave-therapy-hyderabad",
    siteName: "Legend Physiotherapy",
    locale: "en_IN",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Shockwave Therapy at Legend Physiotherapy Hyderabad" }],
  },
};

const faqs = [
  {
    question: "What is shockwave therapy?",
    answer:
      "Shockwave therapy, also called Extracorporeal Shockwave Therapy (ESWT), uses high-energy acoustic pressure waves directed at the injured tissue. These waves stimulate the body's natural healing process by increasing blood flow, breaking down calcified deposits and triggering tissue regeneration. It is a non-invasive, outpatient treatment with no needles or surgery involved.",
  },
  {
    question: "Does shockwave therapy hurt?",
    answer:
      "You will feel a rapid tapping sensation during treatment. Some patients describe mild discomfort over tender areas, but the intensity can be adjusted to your comfort level. Each session lasts only 5 to 10 minutes. Most patients tolerate it well without any anaesthesia. Any post-treatment soreness is usually mild and resolves within a day.",
  },
  {
    question: "How many shockwave sessions will I need?",
    answer:
      "Most conditions respond well to three to five sessions spaced one week apart. Some patients notice improvement after the first session, though the full benefit often builds over four to six weeks as tissue remodelling continues between sessions. Your physiotherapist will assess your response and adjust the number of sessions accordingly.",
  },
  {
    question: "What conditions does shockwave therapy treat?",
    answer:
      "Shockwave therapy is most effective for chronic tendon problems: plantar fasciitis (heel pain), tennis elbow (lateral epicondylitis), Achilles tendinopathy, calcific tendinitis of the shoulder, patellar tendinopathy (jumper's knee), greater trochanteric pain syndrome (hip bursitis), and trigger points in muscles. It is especially useful when rest, stretching and standard physiotherapy have not resolved the pain.",
  },
  {
    question: "Are there any side effects of shockwave therapy?",
    answer:
      "Side effects are generally mild. Temporary redness, swelling or bruising at the treatment site may occur but typically resolves within 48 hours. In rare cases patients experience a brief increase in pain before improvement begins. Shockwave therapy is not recommended during pregnancy, over open wounds, over areas with active infection, or for patients on blood-thinning medication.",
  },
];

export default function ShockwaveTherapyPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: "Shockwave Therapy (ESWT) in Hyderabad",
    description: "Extracorporeal shockwave therapy for chronic tendon pain at Legend Physiotherapy Hyderabad.",
    url: "https://www.legendphysiotherapy.com/shockwave-therapy-hyderabad",
    provider: {
      "@type": "Physiotherapy",
      name: "Legend Physiotherapy Ortho and Neuro Pain Management Clinic",
      telephone: "+918143015455",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Shop No.2 Ground Floor, Road No: 4, HNO: 11-13-714, Dwarka Nagar, Green Hills Colony, Kothapet",
        addressLocality: "L. B. Nagar, Hyderabad",
        addressRegion: "Telangana",
        postalCode: "500102",
        addressCountry: "IN",
      },
    },
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />

      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "var(--font-poppins)" }}>
            Shockwave Therapy (ESWT) in Hyderabad
          </h1>
          <p className="text-lg text-white/90 max-w-2xl mb-6">
            Non-invasive acoustic wave treatment for chronic tendon pain, heel spurs and calcified deposits at Legend Physiotherapy, Kothapet, Hyderabad.
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
            What Is Shockwave Therapy?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Extracorporeal Shockwave Therapy (ESWT) is a non-invasive treatment that delivers focused acoustic pressure waves to injured or chronically painful tissue. Originally developed to break kidney stones, the same principle has been refined for musculoskeletal conditions — using lower-energy pulses to stimulate healing in tendons, ligaments and bones that have failed to recover on their own.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            The technology has been used in physiotherapy and sports medicine for over two decades, with strong clinical evidence supporting its effectiveness for conditions such as plantar fasciitis, tennis elbow and calcific shoulder tendinitis. It is now one of the most sought-after non-surgical pain treatments in Hyderabad.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4" style={{ fontFamily: "var(--font-poppins)" }}>
            How Shockwave Therapy Works
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            When acoustic waves pass through the skin and reach damaged tissue, they produce three key biological effects. First, they cause <strong>neovascularisation</strong> — the formation of new blood vessels in the treated area, which brings oxygen and growth factors essential for repair. Second, the waves break down <strong>calcified deposits</strong> in tendons such as the supraspinatus, allowing the body to reabsorb the calcium. Third, the mechanical stimulation resets the pain signalling in chronically irritated nerve endings, producing an <strong>analgesic effect</strong> that often outlasts the treatment course.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Unlike cortisone injections, which suppress inflammation temporarily, shockwave therapy addresses the underlying tissue degeneration. The result is durable healing rather than short-term pain masking.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4" style={{ fontFamily: "var(--font-poppins)" }}>
            Conditions We Treat with Shockwave Therapy
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
            <li><strong>Plantar fasciitis and heel spurs</strong> — the most common reason patients seek ESWT. Studies show success rates of 70 to 80 per cent in chronic cases that have not responded to stretching and orthotics.</li>
            <li><strong>Tennis elbow (lateral epicondylitis)</strong> — shockwaves stimulate tendon remodelling in the common extensor origin, reducing grip pain and improving function.</li>
            <li><strong>Calcific tendinitis of the shoulder</strong> — ESWT can fragment calcium deposits in the rotator cuff tendons, restoring pain-free movement.</li>
            <li><strong>Achilles tendinopathy</strong> — both insertional and mid-portion Achilles problems respond well, particularly in runners and active individuals.</li>
            <li><strong>Patellar tendinopathy (jumper&apos;s knee)</strong> — common in athletes who run, jump or squat heavily.</li>
            <li><strong>Greater trochanteric pain syndrome</strong> — hip bursitis and gluteal tendinopathy treated without the need for injections.</li>
            <li><strong>Myofascial trigger points</strong> — shockwaves can release deep muscle knots that have not responded to manual therapy or dry needling alone.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4" style={{ fontFamily: "var(--font-poppins)" }}>
            What to Expect During a Session
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The treatment area is identified through palpation and, where necessary, ultrasound guidance. A coupling gel is applied to the skin, and the shockwave handpiece is pressed against the target area. You will feel a rapid tapping — around 2,000 to 3,000 pulses per session — delivered over 5 to 10 minutes. The intensity starts low and is gradually increased to the therapeutic level.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            No anaesthesia is required. After the session you can return to normal activities immediately, though high-impact exercise is best avoided for 48 hours. Many patients notice reduced pain within the first week, with full improvement building over four to six weeks as the tissue remodels.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4" style={{ fontFamily: "var(--font-poppins)" }}>
            Why Choose Legend Physiotherapy for Shockwave Therapy
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
            <li><strong>Evidence-based protocols</strong> — we follow published clinical guidelines for energy levels, pulse counts and treatment intervals for each condition.</li>
            <li><strong>Combined treatment</strong> — shockwave is part of a broader plan that includes targeted exercises, stretching and load management for long-term results.</li>
            <li><strong>Experienced team</strong> — Dr Sirish and the team have 20+ years of experience treating chronic musculoskeletal pain.</li>
            <li><strong>Convenient location</strong> — our Kothapet clinic near LB Nagar is open seven days a week, 9 am to 9 pm.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4" style={{ fontFamily: "var(--font-poppins)" }}>
            Book a Shockwave Assessment
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            If you have been struggling with heel pain, elbow pain or a chronic tendon problem that has not responded to rest and standard treatment, shockwave therapy may be the answer. Call{" "}
            <a href="tel:+918143015455" className="text-blue-600 font-semibold hover:underline">+91 81430 15455</a>{" "}
            to book your assessment at our Kothapet clinic.
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
            <li><a href="/dry-needling-physiotherapy-hyderabad" className="text-blue-600 hover:underline">Dry Needling Therapy</a></li>
            <li><a href="/knee-pain-physiotherapy-lb-nagar" className="text-blue-600 hover:underline">Knee Pain Physiotherapy</a></li>
            <li><a href="/shoulder-pain-physiotherapy-lb-nagar" className="text-blue-600 hover:underline">Shoulder Pain Physiotherapy</a></li>
            <li><a href="/sports-injury-rehabilitation-lb-nagar" className="text-blue-600 hover:underline">Sports Injury Rehabilitation</a></li>
            <li><a href="/contact" className="text-blue-600 hover:underline">Contact Us</a></li>
          </ul>
        </section>

        {/* Dr Sirish Bio */}
        <section className="mt-12 bg-blue-50 rounded-2xl p-8 border border-blue-100">
          <h2 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: "var(--font-poppins)" }}>
            Your Physiotherapist — Dr Sirish
          </h2>
          <p className="text-gray-700 text-sm leading-relaxed mb-2">
            <strong>B.P.T, M.Sc Sports (London)</strong> — Senior Physiotherapist with 20+ years of experience in orthopaedic and neurological rehabilitation. Dr Sirish uses shockwave therapy as part of an integrated treatment approach, combining it with exercise therapy and manual techniques for lasting results.
          </p>
          <p className="text-gray-700 text-sm leading-relaxed">
            Clinic: Shop No. 2, Ground Floor, H.No. 11-13-714, Road No. 4, Dwarka Nagar, Green Hills Colony, Kothapet, Hyderabad 500102. Open daily 9 am – 9 pm.
          </p>
        </section>

        {/* CTA */}
        <section className="mt-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-3" style={{ fontFamily: "var(--font-poppins)" }}>
            Book a Shockwave Therapy Session
          </h2>
          <p className="text-white/90 mb-6">
            Call +91 81430 15455 or book online. We are open every day, 9 am to 9 pm.
          </p>
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
