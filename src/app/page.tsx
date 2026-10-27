import Header from "@/components/Header";
import Hero from "@/components/Hero";
import QuickLocationSection from "@/components/QuickLocationSection";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import Departments from "@/components/Departments";
import Doctors from "@/components/Doctors";
import Testimonials from "@/components/Testimonials";
import ClinicLocation from "@/components/ClinicLocation";
import Appointment from "@/components/Appointment";
import Blog from "@/components/Blog";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Physiotherapy Clinic in Kothapet, LB Nagar | Legend Physio",
  description: "Physiotherapy clinic in Kothapet, LB Nagar, Hyderabad for back, neck, knee, shoulder and neuro rehab, plus home visits. Call +91 81430 15455 to book.",
  keywords: [
    "physiotherapy near me",
    "physiotherapy near me hyderabad",
    "physiotherapy in hyderabad",
    "physiotherapy clinic hyderabad",
    "physiotherapist in Hyderabad",
    "physiotherapy clinic near me",
    "physiotherapy at home",
    "physiotherapy at home Hyderabad",
    "home physiotherapy service",
    "physiotherapy home visit charges Hyderabad",
    "lady physiotherapist near me home visit",
    "back pain treatment",
    "back pain physiotherapy Hyderabad",
    "neck pain physiotherapy",
    "cervical spondylosis treatment Hyderabad",
    "knee pain treatment",
    "knee arthritis physiotherapy Hyderabad",
    "frozen shoulder treatment Hyderabad",
    "sciatica treatment physiotherapy Hyderabad",
    "physiotherapy vs surgery for slip disc Hyderabad",
    "robotic physiotherapy Hyderabad",
    "sports injury physiotherapy",
    "neuro rehabilitation",
    "neuro rehabilitation at home Hyderabad",
    "post surgery physiotherapy Hyderabad",
    "stroke rehabilitation physiotherapy Hyderabad",
    "physiotherapist near me",
    "ortho physiotherapy",
    "legend physiotherapy",
    "Dr Sirish physiotherapist Hyderabad",
    "physiotherapy near LB Nagar",
    "physiotherapy near Kothapet",
    "physiotherapy near Nagole",
    "physiotherapy near Dilsukhnagar Hyderabad",
    "physiotherapy near Gachibowli",
    "physiotherapy near Kondapur Hyderabad",
    "physiotherapy near Kukatpally",
    "physiotherapy near Banjara Hills",
    "physiotherapy near Jubilee Hills",
    "physiotherapy near Ameerpet",
    "physiotherapy near Secunderabad",
    "physiotherapy near Kompally",
    "physiotherapy near Habsiguda",
    "physiotherapy near Uppal Hyderabad",
    "physiotherapy near Manikonda Telangana",
    "physiotherapy near Borabanda Hyderabad",
    "physiotherapy near Mehdipatnam",
    "physiotherapy near Tolichowki",
    "physiotherapy near Attapur",
    "physiotherapy near Miyapur",
    "physiotherapy near Madhapur",
    "physiotherapy near Himayatnagar",
    "physiotherapy near Begumpet",
    "physiotherapy near Tarnaka",
    "physiotherapy near Kokapet",
    "physiotherapy near Bandlaguda Jagir Telangana",
    "physiotherapy near Tellapur Hyderabad",
    "physiotherapy near Beeramguda Hyderabad",
    "physiotherapy near Snehapuri Colony Kothapet",
    "posture correction physiotherapy Hyderabad",
    "physiotherapy charges per session Hyderabad",
    "home visit physiotherapy cost Hyderabad",
    "physiotherapy for women at home Hyderabad",
    "Parkinson's disease physiotherapy Hyderabad",
    "ACL tear recovery physiotherapy Hyderabad",
    "physiotherapy for elderly at home Hyderabad",
  ],
  openGraph: {
    title: "Physiotherapy Clinic in Kothapet, LB Nagar | Legend Physio",
    description: "Physiotherapy clinic in Kothapet, LB Nagar, Hyderabad for back, neck, knee, shoulder and neuro rehab, plus home visits.",
    type: "website",
    locale: "en_IN",
    siteName: "Legend Physiotherapy",
    url: "/",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Legend Physiotherapy clinic, Kothapet" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Physiotherapy Clinic in Kothapet, LB Nagar | Legend Physio",
    description: "Physiotherapy clinic in Kothapet, LB Nagar, Hyderabad for back, neck, knee, shoulder and neuro rehab, plus home visits.",
  },
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <QuickLocationSection />
      <Stats />
      <Services />
      <Departments />
      <Doctors />
      <Testimonials />
      <ClinicLocation />
      <Appointment />
      <Blog />
      <FAQ />
      <Footer />
    </div>
  );
}
