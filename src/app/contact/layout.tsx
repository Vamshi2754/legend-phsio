import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Legend Physiotherapy Clinic Hyderabad | Call +91 81430 15455",
  description: "Contact Legend Physiotherapy for expert physiotherapy treatment in Hyderabad. Clinic at LB Nagar & home visits across 200+ locations. Call +91 81430 15455 or WhatsApp for appointment. Available Mon-Sun 6am-11pm.",
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
    description: "Contact Legend Physiotherapy for expert treatment. Clinic at LB Nagar & home visits across 200+ locations. Call +91 81430 15455",
    type: "website",
  },
  alternates: {
    canonical: "https://www.legendphysiotherapy.com/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
