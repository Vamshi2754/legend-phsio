"use client";
import { useState } from "react";

const faqs = [
  {
    question: "What types of physiotherapy do you offer in Hyderabad?",
    answer: "We offer orthopedic physiotherapy, neurological rehabilitation, sports injury treatment, post-surgical recovery, spinal decompression therapy, robotic physiotherapy, and home visit physiotherapy services across 200+ locations in Hyderabad."
  },
  {
    question: "Do you provide home visit physiotherapy in Hyderabad?",
    answer: "Yes, we provide professional home visit physiotherapy across all areas of Hyderabad including LB Nagar, Dilsukhnagar, Gachibowli, Kukatpally, Secunderabad, Banjara Hills, and 200+ other locations. Our experienced physiotherapists bring equipment to your doorstep."
  },
  {
    question: "How much does physiotherapy cost per session in Hyderabad?",
    answer: "Physiotherapy session charges vary based on the type of treatment and whether it is at our clinic or a home visit. Please call us at +91 81430 15455 for current pricing. We offer affordable rates for quality physiotherapy care."
  },
  {
    question: "How do I book a physiotherapy appointment?",
    answer: "You can book an appointment online through our website, call us at +91 81430 15455, or WhatsApp us at +91 99661 93413. We are available Monday to Sunday from 9:00 AM to 9:00 PM."
  },
  {
    question: "What conditions do you treat with physiotherapy?",
    answer: "We treat back pain, neck pain, cervical spondylosis, knee pain, frozen shoulder, sciatica, slip disc, sports injuries, stroke rehabilitation, paralysis, post-surgical conditions, arthritis, and many other musculoskeletal and neurological conditions."
  },
  {
    question: "Where is your physiotherapy clinic located in Hyderabad?",
    answer: "Our main clinic is at Shop No.2 Ground Floor, Road No: 4, HNO: 11-13-714, Dwarka Nagar, Green Hills Colony, Kothapet, L. B. Nagar, Hyderabad, Telangana 500102. We also have partner clinics across Hyderabad."
  },
  {
    question: "How experienced is your physiotherapy team?",
    answer: "Our team is led by Dr. Sirish with over 20 years of experience in ortho and neuro rehabilitation. We have treated over 12,000 patients with a consistent 5-star rating from 2,400+ Google reviews."
  },
  {
    question: "Do you offer lady physiotherapist for home visits?",
    answer: "Yes, we have experienced lady physiotherapists available for home visits across Hyderabad. This service is available for women patients who prefer a female physiotherapist for their treatment sessions."
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };

  return (
    <section className="py-12 md:py-20 bg-gray-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 md:mb-12">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">FAQ</span>
          <h2
            className="text-2xl md:text-3xl font-bold text-gray-900 mt-2"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 mt-3 text-sm md:text-base">
            Common questions about our physiotherapy services in Hyderabad
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-gray-200 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors"
                aria-expanded={openIndex === index}
              >
                <h3 className="font-semibold text-gray-900 text-sm md:text-base pr-4">
                  {faq.question}
                </h3>
                <svg
                  className={`w-5 h-5 text-blue-500 flex-shrink-0 transition-transform duration-200 ${openIndex === index ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-5 pb-4 text-gray-600 text-sm md:text-base leading-relaxed border-t border-gray-100 pt-3">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
