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
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Physiotherapy Near Me in Hyderabad | Legend Physiotherapy Clinic & Home Visit",
  description: "⭐ 4.9/5 Rating | Best physiotherapy near me in Hyderabad. Expert treatment for back pain, neck pain, knee pain, sports injuries & neuro rehab. 20+ years experience. Clinic at LB Nagar & home visits across all locations. Book appointment today!",
  keywords: [
    "physiotherapy near me",
    "best physiotherapy near me",
    "physiotherapy in hyderabad",
    "best physiotherapy in hyderabad",
    "best physiotherapist in Hyderabad",
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
    title: "Best Physiotherapy Near Me in Hyderabad | Legend Physiotherapy",
    description: "⭐ 4.9/5 Rating | Expert physiotherapy treatment for back pain, neck pain, knee pain & sports injuries. 20+ years experience. Clinic & home visits available.",
    type: "website",
    locale: "en_IN",
    siteName: "Legend Physiotherapy",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Physiotherapy Near Me in Hyderabad | Legend Physiotherapy",
    description: "⭐ 4.9/5 Rating | Expert physiotherapy treatment. 20+ years experience. Clinic & home visits available.",
  },
  alternates: {
    canonical: "https://legend-physiotherapist.vercel.app",
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
      <Footer />
    </div>
  );
}
