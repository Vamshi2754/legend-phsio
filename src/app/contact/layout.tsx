import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Legend Physiotherapy Clinic Hyderabad | Call +91 99661 93413",
  description: "Contact Legend Physiotherapy for expert physiotherapy treatment in Hyderabad. Clinic at LB Nagar & home visits across 200+ locations. Call +91 99661 93413 or WhatsApp for appointment. Available Mon-Sun 8am-8pm.",
  keywords: [
    "contact physiotherapy clinic",
    "physiotherapy clinic hyderabad contact",
    "physiotherapy phone number",
    "physiotherapy clinic address",
    "physiotherapy near me contact",
    "legend physiotherapy contact",
    "physiotherapy lb nagar",
    "physiotherapy home visit hyderabad",
  ],
  openGraph: {
    title: "Contact Us | Legend Physiotherapy Clinic Hyderabad",
    description: "Contact Legend Physiotherapy for expert treatment. Clinic at LB Nagar & home visits across 200+ locations. Call +91 99661 93413",
    type: "website",
  },
  alternates: {
    canonical: "https://legend-physiotherapist.vercel.app/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
