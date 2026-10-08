import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { VisualEditsMessenger } from "orchids-visual-edits";
import ErrorReporter from "@/components/ErrorReporter";
import Script from "next/script";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Best Physiotherapy Near Me in Hyderabad | Legend Physiotherapy Clinic & Home Visit",
  description: "★★★★★ Best Physiotherapist in Hyderabad with 20+ years experience. Expert treatment for back pain, neck pain, knee pain, sports injuries & neuro rehabilitation. Clinic in LB Nagar & Home visits across 200+ locations. Book now!",
  keywords: [
    "physiotherapy near me",
    "best physiotherapist in Hyderabad",
    "physiotherapy near Kothapet Hyderabad",
    "physiotherapy at home Hyderabad",
    "physiotherapy home visit charges Hyderabad",
    "lady physiotherapist near me home visit",
    "top 10 physiotherapist in Hyderabad",
    "book physiotherapy at home",
    "physiotherapy near me for ladies",
    "back pain physiotherapy Hyderabad",
    "physiotherapy near Kothapet",
    "physiotherapy near Boduppal Hyderabad Telangana",
    "physiotherapy near Manikonda Telangana",
    "physiotherapy near Dilsukhnagar Hyderabad",
    "physiotherapy near Kondapur Hyderabad",
    "physiotherapy near Bandlaguda Jagir Telangana",
    "physiotherapy near Tellapur Hyderabad",
    "physiotherapy near Uppal Hyderabad",
    "physiotherapy near Borabanda Hyderabad",
    "physiotherapy near Chanda Nagar Hyderabad",
    "physiotherapy near Beeramguda Ramachandrapuram Hyderabad",
    "physiotherapy near Snehapuri Colony Kothapet",
    "physiotherapy near LB Nagar",
    "physiotherapy near Gachibowli",
    "physiotherapy near Ameerpet",
    "physiotherapy near Secunderabad",
    "physiotherapy near Kukatpally",
    "physiotherapy near Banjara Hills",
    "physiotherapy near Jubilee Hills",
    "physiotherapy near Miyapur",
    "physiotherapy near Madhapur",
    "physiotherapy near Himayatnagar",
    "physiotherapy near Begumpet",
    "physiotherapy near Nagole",
    "physiotherapy near Tarnaka",
    "physiotherapy near Attapur",
    "physiotherapy near Mehdipatnam",
    "physiotherapy near Kompally",
    "physiotherapy near Habsiguda",
    "physiotherapy near Tolichowki",
    "physiotherapy near Kokapet",
    "lower back pain treatment near me",
    "neck pain physiotherapy Hyderabad",
    "cervical spondylosis treatment Hyderabad",
    "knee pain treatment near me",
    "knee arthritis physiotherapy Hyderabad",
    "frozen shoulder treatment Hyderabad",
    "sciatica treatment physiotherapy Hyderabad",
    "slip disc physiotherapy near me",
    "shoulder pain physiotherapy Hyderabad",
    "sports injury physiotherapy Hyderabad",
    "neuro rehabilitation at home Hyderabad",
    "post surgery physiotherapy Hyderabad",
    "stroke rehabilitation physiotherapy Hyderabad",
    "paralysis physiotherapy at home Hyderabad",
    "physiotherapy for elderly at home Hyderabad",
    "pregnancy physiotherapy Hyderabad",
    "ACL tear recovery physiotherapy Hyderabad",
    "Parkinson's disease physiotherapy Hyderabad",
    "posture correction physiotherapy Hyderabad",
    "physiotherapy charges per session Hyderabad",
    "home visit physiotherapy cost Hyderabad",
    "lady physiotherapist home visit Hyderabad",
    "physiotherapy for women at home Hyderabad",
    "Dr Sirish physiotherapist Hyderabad",
    "Legend physiotherapy LB Nagar reviews",
    "online physiotherapy consultation Hyderabad",
    "physiotherapy for office workers Hyderabad",
    "physiotherapy at home charges in Hyderabad",
    "physiotherapy near me at home",
    "physiotherapy clinic Hyderabad",
    "home visit physiotherapy",
    "ortho physiotherapy",
    "physiotherapist near me",
  ],
  authors: [{ name: "Dr. Sirish - Legend Physiotherapy" }],
  creator: "Legend Physiotherapy",
  publisher: "Legend Physiotherapy",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.legendphysiotherapy.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Best Physiotherapy Near Me in Hyderabad | Legend Physiotherapy",
    description: "★★★★★ Expert physiotherapy with 20+ years experience. Specialized in back pain, neck pain, sports injuries & neuro rehabilitation. Clinic & home visits available.",
    url: 'https://www.legendphysiotherapy.com',
    siteName: 'Legend Physiotherapy',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Legend Physiotherapy - Best Physiotherapist in Hyderabad',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Best Physiotherapy Near Me in Hyderabad | Legend Physiotherapy",
    description: "★★★★★ Expert physiotherapy with 20+ years experience. Back pain, neck pain, sports injuries & neuro rehabilitation.",
    images: ['/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: '9nnBXWs65-rVAJd1N1fnoDB8iZS2wlihpsayMWW77JE', // Google Search Console verification code
  },
};

import { FloatingContactLazy, BookingPopupLazy } from "@/components/ClientComponents";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Single MedicalBusiness schema (more specific than LocalBusiness)
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "@id": "https://www.legendphysiotherapy.com",
    "name": "Legend Physiotherapy Ortho and Neuro Pain Management Clinic",
    "alternateName": "Legend Physiotherapy",
    "url": "https://www.legendphysiotherapy.com",
    "logo": "https://www.legendphysiotherapy.com/logo.png",
    "image": "https://www.legendphysiotherapy.com/logo.png",
    "description": "Best physiotherapy clinic in Hyderabad with 20+ years experience. Expert treatment for back pain, neck pain, sports injuries, and neurological rehabilitation.",
    "priceRange": "₹₹",
    "telephone": "+919966193413",
    "email": "info@legendphysiotherapy.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Shop No.2 Ground Floor, Road No: 4, HNO: 11-13-714, Dwarka Nagar, Green Hills Colony, Kothapet",
      "addressLocality": "LB Nagar",
      "addressRegion": "Hyderabad",
      "postalCode": "500102",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 17.373909,
      "longitude": 78.545228
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "06:00",
        "closes": "23:00"
      }
    ],
    "sameAs": [
      "https://www.instagram.com/dr.sirish_legend_physio?stkn=MWRmeHFlZnY3ZXBxZQ==",
      "https://www.facebook.com/share/1DTdMkDcju/",
      "https://www.linkedin.com/in/sirish-physiotherapist?utm_source=share_via&utm_content=profile&utm_medium=member_android"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "2400",
      "bestRating": "5",
      "worstRating": "1"
    },
    "medicalSpecialty": [
      "Physiotherapy",
      "Orthopedic Rehabilitation",
      "Neurological Rehabilitation",
      "Sports Medicine"
    ],
    "areaServed": {
      "@type": "City",
      "name": "Hyderabad"
    }
  };

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <meta name="geo.region" content="IN-TG" />
        <meta name="geo.placename" content="Hyderabad" />
        <meta name="geo.position" content="17.373909;78.545228" />
        <meta name="ICBM" content="17.373909, 78.545228" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
        />
      </head>
      <body className={`${inter.variable} ${poppins.variable} antialiased`}>
        <ErrorReporter />
        <Script
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts//route-messenger.js"
          strategy="afterInteractive"
          data-target-origin="*"
          data-message-type="ROUTE_CHANGE"
          data-include-search-params="true"
          data-only-in-iframe="true"
          data-debug="true"
          data-custom-data='{"appName": "MediPlus", "version": "1.0.0"}'
        />
        {children}
        <FloatingContactLazy />
        <BookingPopupLazy />
        <VisualEditsMessenger />
      </body>
    </html>
  );
}
