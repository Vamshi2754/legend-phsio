import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Legend Physiotherapy",
  description:
    "Privacy policy for Legend Physiotherapy Ortho and Neuro Pain Management Clinic, Kothapet, Hyderabad.",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h1
            className="text-3xl md:text-4xl font-bold mb-3"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Privacy Policy
          </h1>
          <p className="text-white/90">
            Last updated: October 2026
          </p>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-6 py-12">
        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3" style={{ fontFamily: "var(--font-poppins)" }}>
            Introduction
          </h2>
          <p>
            Legend Physiotherapy Ortho and Neuro Pain Management Clinic (&ldquo;we&rdquo;, &ldquo;our&rdquo;, &ldquo;us&rdquo;) respects
            your privacy. This policy explains how we collect, use and protect personal information when
            you visit our website or use our services.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3" style={{ fontFamily: "var(--font-poppins)" }}>
            Information We Collect
          </h2>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li><strong>Contact details</strong> &mdash; name, phone number and email address when you book an appointment or submit an enquiry.</li>
            <li><strong>Health information</strong> &mdash; medical history and treatment details shared during consultations, used solely for your care.</li>
            <li><strong>Usage data</strong> &mdash; anonymised website analytics (pages visited, browser type, device) collected through Google Analytics to improve our website.</li>
          </ul>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3" style={{ fontFamily: "var(--font-poppins)" }}>
            How We Use Your Information
          </h2>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>To schedule and manage appointments.</li>
            <li>To provide physiotherapy treatment and follow-up care.</li>
            <li>To respond to enquiries made via phone, WhatsApp or the website.</li>
            <li>To improve our website and services based on aggregated, anonymised usage data.</li>
          </ul>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3" style={{ fontFamily: "var(--font-poppins)" }}>
            Data Sharing
          </h2>
          <p>
            We do not sell or rent your personal information. We may share information only in these situations:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>With referring doctors or specialists when required for your treatment, with your consent.</li>
            <li>With service providers (appointment booking platform, analytics) who process data on our behalf under strict confidentiality agreements.</li>
            <li>When required by law or a court order.</li>
          </ul>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3" style={{ fontFamily: "var(--font-poppins)" }}>
            Data Security
          </h2>
          <p>
            We take reasonable measures to protect your information from unauthorised access, alteration or
            destruction. Patient health records are stored securely and access is restricted to authorised
            clinical staff.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3" style={{ fontFamily: "var(--font-poppins)" }}>
            Cookies and Analytics
          </h2>
          <p>
            Our website uses Google Analytics to collect anonymised usage data. Google Analytics uses
            cookies to track visitor interactions. You can opt out by adjusting your browser settings or
            using the Google Analytics opt-out browser add-on.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3" style={{ fontFamily: "var(--font-poppins)" }}>
            Your Rights
          </h2>
          <p>
            You may request access to, correction of, or deletion of your personal data at any time by
            contacting us. We will respond within a reasonable timeframe.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3" style={{ fontFamily: "var(--font-poppins)" }}>
            Contact Us
          </h2>
          <p>
            If you have questions about this privacy policy, please contact us:
          </p>
          <ul className="list-none space-y-1 ml-4">
            <li><strong>Phone:</strong>{" "}
              <a href="tel:+918143015455" className="text-blue-600 hover:underline">+91 81430 15455</a>
            </li>
            <li><strong>Email:</strong>{" "}
              <a href="mailto:Info@legendphysiotherapy.com" className="text-blue-600 hover:underline">Info@legendphysiotherapy.com</a>
            </li>
            <li><strong>Address:</strong> Shop No. 2, Ground Floor, H.No. 11-13-714, Road No. 4, Dwarka Nagar, Green Hills Colony, Kothapet, Hyderabad 500102</li>
          </ul>
        </div>
      </article>

      <Footer />
    </div>
  );
}
