import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Legend Physiotherapy | Kothapet, LB Nagar, Hyderabad",
  description: "Visit Legend Physiotherapy at Dwarka Nagar, Kothapet, LB Nagar, Hyderabad. Open daily 9 am to 9 pm. Call +91 81430 15455 to book a clinic or home visit.",
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
    title: "Contact Legend Physiotherapy | Kothapet, LB Nagar, Hyderabad",
    description: "Visit Legend Physiotherapy at Dwarka Nagar, Kothapet, LB Nagar, Hyderabad. Open daily 9 am to 9 pm. Call +91 81430 15455.",
    type: "website",
  },
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
