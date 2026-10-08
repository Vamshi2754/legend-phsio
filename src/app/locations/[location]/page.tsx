import { notFound } from "next/navigation";
import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Doctors from "@/components/Doctors";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Appointment from "@/components/Appointment";
import InteractiveMap from "@/components/InteractiveMap";
import { locationData, LocationEntry } from "@/data/locations";

// SEO Locations - All 200+ locations from Footer
const seoLocations = [
  { name: "A S Rao Nagar", slug: "a-s-rao-nagar" },
  { name: "Abdullapurmet", slug: "abdullapurmet" },
  { name: "Abids", slug: "abids" },
  { name: "Adarsh Nagar", slug: "adarsh-nagar" },
  { name: "Adikmet", slug: "adikmet" },
  { name: "Afzal Gunj", slug: "afzal-gunj" },
  { name: "Almasguda", slug: "almasguda" },
  { name: "Amberpet", slug: "amberpet" },
  { name: "Ameenpur", slug: "ameenpur" },
  { name: "Ameerpet", slug: "ameerpet" },
  { name: "Anandbagh", slug: "anandbagh" },
  { name: "Attapur", slug: "attapur" },
  { name: "Badangpet", slug: "badangpet" },
  { name: "Bahadurpally", slug: "bahadurpally" },
  { name: "Bahadurpura", slug: "bahadurpura" },
  { name: "Bairagiguda", slug: "bairagiguda" },
  { name: "Bala Nagar", slug: "bala-nagar" },
  { name: "Ballapur", slug: "ballapur" },
  { name: "Bandlaguda-Nagole", slug: "bandlaguda-nagole" },
  { name: "Basheer Bagh", slug: "basheer-bagh" },
  { name: "Basheerabad", slug: "basheerabad" },
  { name: "Bhogaram", slug: "bhogaram" },
  { name: "Bhoiguda", slug: "bhoiguda" },
  { name: "Bhongir", slug: "bhongir" },
  { name: "Bhuvanagiri", slug: "bhuvanagiri" },
  { name: "Bibinagarr", slug: "bibinagarr" },
  { name: "BN Reddy Nagar", slug: "bn-reddy-nagar" },
  { name: "Bogaram", slug: "bogaram" },
  { name: "Bolaram", slug: "bolaram" },
  { name: "Borabanda", slug: "borabanda" },
  { name: "Bowenpally", slug: "bowenpally" },
  { name: "Bowrampet", slug: "bowrampet" },
  { name: "Budul", slug: "budul" },
  { name: "Burgul", slug: "burgul" },
  { name: "Champapet", slug: "champapet" },
  { name: "Chandrayangutta", slug: "chandrayangutta" },
  { name: "Cherlpally", slug: "cherlpally" },
  { name: "Chevalla", slug: "chevalla" },
  { name: "Chikkadpally", slug: "chikkadpally" },
  { name: "Chilkur", slug: "chilkur" },
  { name: "Chintal", slug: "chintal" },
  { name: "Chintalkunta", slug: "chintalkunta" },
  { name: "Chintapallyguda", slug: "chintapallyguda" },
  { name: "Chowdhariguda", slug: "chowdhariguda" },
  { name: "Dasarlapally", slug: "dasarlapally" },
  { name: "Dayara", slug: "dayara" },
  { name: "Dhoolpet", slug: "dhoolpet" },
  { name: "Dilsukhnagar", slug: "dilsukhnagar" },
  { name: "Domalguda", slug: "domalguda" },
  { name: "Dullapally", slug: "dullapally" },
  { name: "Dundigal", slug: "dundigal" },
  { name: "East Marredpally", slug: "east-marredpally" },
  { name: "ECIL", slug: "ecil" },
  { name: "Edulanagulapalley", slug: "edulanagulapalley" },
  { name: "Erragadda", slug: "erragadda" },
  { name: "Falaknum", slug: "falaknum" },
  { name: "Film Nagar", slug: "film-nagar" },
  { name: "Financial District", slug: "financial-district" },
  { name: "Gagillpur", slug: "gagillpur" },
  { name: "Gandhi Nagar", slug: "gandhi-nagar" },
  { name: "Gandi Maisamma", slug: "gandi-maisamma" },
  { name: "Gandipet", slug: "gandipet" },
  { name: "Gatkesar", slug: "gatkesar" },
  { name: "Ghansi Bazaar", slug: "ghansi-bazaar" },
  { name: "Ghatkesr", slug: "ghatkesr" },
  { name: "Golkonda", slug: "golkonda" },
  { name: "Gudimalkapur", slug: "gudimalkapur" },
  { name: "Gulshan-e-Iqbal Colony", slug: "gulshan-e-iqbal-colony" },
  { name: "Gundlapochampallyy", slug: "gundlapochampallyy" },
  { name: "Gunrock Enclave", slug: "gunrock-enclave" },
  { name: "Gurram Guda", slug: "gurram-guda" },
  { name: "Habsiguda", slug: "habsiguda" },
  { name: "Hakimpet", slug: "hakimpet" },
  { name: "Hanuman Nagar Colony", slug: "hanuman-nagar-colony" },
  { name: "Hasmathpet", slug: "hasmathpet" },
  { name: "Hastinapuram", slug: "hastinapuram" },
  { name: "Himayatnagar", slug: "himayatnagar" },
  { name: "Himayath Nagar", slug: "himayath-nagar" },
  { name: "Humayun Nagar", slug: "humayun-nagar" },
  { name: "Hyder Nagar", slug: "hyder-nagar" },
  { name: "Hyderguda", slug: "hyderguda" },
  { name: "Ibrahimpatnam", slug: "ibrahimpatnam" },
  { name: "Indresham", slug: "indresham" },
  { name: "Isnapur", slug: "isnapur" },
  { name: "Jalpally", slug: "jalpally" },
  { name: "Jam Bagh", slug: "jam-bagh" },
  { name: "Jawahar Nagar", slug: "jawahar-nagar" },
  { name: "Jeedimetla", slug: "jeedimetla" },
  { name: "Jeera", slug: "jeera" },
  { name: "Jubilee Hills", slug: "jubilee-hills" },
  { name: "Kachiguda", slug: "kachiguda" },
  { name: "Kakaguda", slug: "kakaguda" },
  { name: "Kalasiguda", slug: "kalasiguda" },
  { name: "Kanchan Bagh", slug: "kanchan-bagh" },
  { name: "Kandukur", slug: "kandukur" },
  { name: "Kapra", slug: "kapra" },
  { name: "Karkhana", slug: "karkhana" },
  { name: "Kharmanghat", slug: "kharmanghat" },
  { name: "Karwan", slug: "karwan" },
  { name: "Katedan", slug: "katedan" },
  { name: "Kavdiguda", slug: "kavdiguda" },
  { name: "Kavuri Hills", slug: "kavuri-hills" },
  { name: "Kazipallyy", slug: "kazipallyy" },
  { name: "Keesara", slug: "keesara" },
  { name: "Khairatabad", slug: "khairatabad" },
  { name: "Kismatpur", slug: "kismatpur" },
  { name: "Kokapel", slug: "kokapel" },
  { name: "Kompally", slug: "kompally" },
  { name: "Kongara Kalan", slug: "kongara-kalan" },
  { name: "Kothaguda", slug: "kothaguda" },
  { name: "Kothapet", slug: "kothapet" },
  { name: "Koti", slug: "koti" },
  { name: "Kottur", slug: "kottur" },
  { name: "Kowkur", slug: "kowkur" },
  { name: "Kurmaguda", slug: "kurmaguda" },
  { name: "Kushaiguda", slug: "kushaiguda" },
  { name: "LB Nagar", slug: "lb-nagar" },
  { name: "Lakdi Ka Pul", slug: "lakdi-ka-pul" },
  { name: "Lal Darwaza", slug: "lal-darwaza" },
  { name: "Lalapet", slug: "lalapet" },
  { name: "Lallaguda", slug: "lallaguda" },
  { name: "Langar Houz", slug: "langar-houz" },
  { name: "Lingampally", slug: "lingampally" },
  { name: "Lothkunta", slug: "lothkunta" },
  { name: "Lumbini Park", slug: "lumbini-park" },
  { name: "Madhura Nagar", slug: "madhura-nagar" },
  { name: "Maheshwaram", slug: "maheshwaram" },
  { name: "Maisireddipalle", slug: "maisireddipalle" },
  { name: "Majarguda", slug: "majarguda" },
  { name: "Malakpet", slug: "malakpet" },
  { name: "Mallampet", slug: "mallampet" },
  { name: "Mallapur", slug: "mallapur" },
  { name: "Manchirevula", slug: "manchirevula" },
  { name: "Manneguda", slug: "manneguda" },
  { name: "Mansoorabad", slug: "mansoorabad" },
  { name: "Maruti Nagar", slug: "maruti-nagar" },
  { name: "Masab Tank", slug: "masab-tank" },
  { name: "Mazidpur", slug: "mazidpur" },
  { name: "Medak Road", slug: "medak-road" },
  { name: "Medchal", slug: "medchal" },
  { name: "Medipalli", slug: "medipalli" },
  { name: "Meerpet", slug: "meerpet" },
  { name: "Mehadipatnam", slug: "mehadipatnam" },
  { name: "Mettuguda", slug: "mettuguda" },
  { name: "Mirkhanpet", slug: "mirkhanpet" },
  { name: "Moghalpura", slug: "moghalpura" },
  { name: "Moinabad", slug: "moinabad" },
  { name: "Moosapel", slug: "moosapel" },
  { name: "Moosarambaagh", slug: "moosarambaagh" },
  { name: "Moti Ganpur", slug: "moti-ganpur" },
  { name: "Moti Nagar", slug: "moti-nagar" },
  { name: "Moula Ali", slug: "moula-ali" },
  { name: "MRC Colony", slug: "mrc-colony" },
  { name: "Musheerabad", slug: "musheerabad" },
  { name: "Muthangii", slug: "muthangii" },
  { name: "Mylargada", slug: "mylargada" },
  { name: "Nacharam", slug: "nacharam" },
  { name: "Nadergul", slug: "nadergul" },
  { name: "Nagaram", slug: "nagaram" },
  { name: "Nagarjuna Sagar Road", slug: "nagarjuna-sagar-road" },
  { name: "Nagole", slug: "nagole" },
  { name: "Nallakunta", slug: "nallakunta" },
  { name: "Nampally", slug: "nampally" },
  { name: "Nanakramguda", slug: "nanakramguda" },
  { name: "Nandigama", slug: "nandigama" },
  { name: "Narayanguda", slug: "narayanguda" },
  { name: "Narketpalli", slug: "narketpalli" },
  { name: "Narsapur", slug: "narsapur" },
  { name: "Nawab Saheb Kunta", slug: "nawab-saheb-kunta" },
  { name: "Neeladri Nagar", slug: "neeladri-nagar" },
  { name: "Neredmet", slug: "neredmet" },
  { name: "New Malakpet", slug: "new-malakpet" },
  { name: "New Mallepally", slug: "new-mallepally" },
  { name: "New Nallakunta", slug: "new-nallakunta" },
  { name: "NH-7", slug: "nh-7" },
  { name: "NH-9 Highway", slug: "nh-9-highway" },
  { name: "Nizampet Road", slug: "nizampet-road" },
  { name: "NTR Nagar", slug: "ntr-nagar" },
  { name: "Old Bowenpally", slug: "old-bowenpally" },
  { name: "Osman Nagar", slug: "osman-nagar" },
  { name: "Osman Sagar Road", slug: "osman-sagar-road" },
  { name: "Outer Ring Road", slug: "outer-ring-road" },
  { name: "Padma Rao Nagar", slug: "padma-rao-nagar" },
  { name: "Pahadi Shareef", slug: "pahadi-shareef" },
  { name: "Patancheru-Shankarpalli Road", slug: "patancheru-shankarpalli-road" },
  { name: "Patighanpur", slug: "patighanpur" },
  { name: "Pavanpuri Colony", slug: "pavanpuri-colony" },
  { name: "Peerancheeru", slug: "peerancheeru" },
  { name: "Peerzadiguda", slug: "peerzadiguda" },
  { name: "Pet Basheerabad", slug: "pet-basheerabad" },
  { name: "Pochampally", slug: "pochampally" },
  { name: "Pocharam", slug: "pocharam" },
  { name: "Prashanth Nagar", slug: "prashanth-nagar" },
  { name: "Pulimamidi", slug: "pulimamidi" },
  { name: "Punjagutta", slug: "punjagutta" },
  { name: "Quthbullapur", slug: "quthbullapur" },
  { name: "Qutub Shahi Tombs", slug: "qutub-shahi-tombs" },
  { name: "R.K.Puram", slug: "r-k-puram" },
  { name: "Rai Durg", slug: "rai-durg" },
  { name: "Raikal", slug: "raikal" },
  { name: "Raj Bhavan Road", slug: "raj-bhavan-road" },
  { name: "Rajeev Nagar", slug: "rajeev-nagar" },
  { name: "Rajendra Nagar", slug: "rajendra-nagar" },
  { name: "Ram Nagar", slug: "ram-nagar" },
  { name: "Ramakrishnapuram", slug: "ramakrishnapuram" },
  { name: "Ramanthapur", slug: "ramanthapur" },
  { name: "Ramchandra Puram", slug: "ramchandra-puram" },
  { name: "Ramgopalpet", slug: "ramgopalpet" },
  { name: "Ramoji Film City", slug: "ramoji-film-city" },
  { name: "Rampally", slug: "rampally" },
  { name: "Rani Gunj", slug: "rani-gunj" },
  { name: "Rasoolpura", slug: "rasoolpura" },
  { name: "Ravulapalle Khurd", slug: "ravulapalle-khurd" },
  { name: "Rendlagadda", slug: "rendlagadda" },
  { name: "Riyasat Nagar", slug: "riyasat-nagar" },
  { name: "Rudram", slug: "rudram" },
  { name: "S D Road", slug: "s-d-road" },
  { name: "Saidabad", slug: "saidabad" },
  { name: "Saifabad", slug: "saifabad" },
  { name: "Saleem Nagar", slug: "saleem-nagar" },
  { name: "Sangareddy", slug: "sangareddy" },
  { name: "Sanjeeva Reddy Nagar", slug: "sanjeeva-reddy-nagar" },
  { name: "Santosh Nagar", slug: "santosh-nagar" },
  { name: "Saroor Nagar", slug: "saroor-nagar" },
  { name: "Seetharampallyy", slug: "seetharampallyy" },
  { name: "Serilingampallyy", slug: "serilingampallyy" },
  { name: "Shahbaad", slug: "shahbaad" },
  { name: "Shaikpet", slug: "shaikpet" },
  { name: "Shameerpet", slug: "shameerpet" },
  { name: "Shamirpet", slug: "shamirpet" },
  { name: "Shamshabad Road", slug: "shamshabad-road" },
  { name: "Shankarpalli", slug: "shankarpalli" },
  { name: "Shanthi Nagar", slug: "shanthi-nagar" },
  { name: "Sheriguda", slug: "sheriguda" },
  { name: "Siddhartha Nagar", slug: "siddhartha-nagar" },
  { name: "Sindhi Colony", slug: "sindhi-colony" },
  { name: "Sitaphalmandir", slug: "sitaphalmandir" },
  { name: "Sivarampallyy", slug: "sivarampallyy" },
  { name: "Somajiguda", slug: "somajiguda" },
  { name: "Sri Nagar Colony", slug: "sri-nagar-colony" },
  { name: "Srinagar Colony", slug: "srinagar-colony" },
  { name: "Subhash Nagar", slug: "subhash-nagar" },
  { name: "Suchitra Road", slug: "suchitra-road" },
  { name: "Sultanpur", slug: "sultanpur" },
  { name: "Suraram", slug: "suraram" },
  { name: "Surya Nagar Colony", slug: "surya-nagar-colony" },
  { name: "Thimmapur", slug: "thimmapur" },
  { name: "Toli Chowki", slug: "toli-chowki" },
  { name: "Toroor", slug: "toroor" },
  { name: "Trimulgherry", slug: "trimulgherry" },
  { name: "Tukkuguda", slug: "tukkuguda" },
  { name: "Tulekhurd", slug: "tulekhurd" },
  { name: "Tupran", slug: "tupran" },
  { name: "Turkayamjal", slug: "turkayamjal" },
  { name: "Uppaguda", slug: "uppaguda" },
  { name: "Upparpally", slug: "upparpally" },
  { name: "Vanasthalipuram", slug: "vanasthalipuram" },
  { name: "Vattepally", slug: "vattepally" },
  { name: "Vayupuri", slug: "vayupuri" },
  { name: "Velimela", slug: "velimela" },
  { name: "Venkat Reddy Colony", slug: "venkat-reddy-colony" },
  { name: "Venkatapuram", slug: "venkatapuram" },
  { name: "Vijayawada Highway", slug: "vijayawada-highway" },
  { name: "Walker Town", slug: "walker-town" },
  { name: "Warangal Highway", slug: "warangal-highway" },
  { name: "West Marredpally", slug: "west-marredpally" },
  { name: "Whitefield", slug: "whitefield" },
  { name: "Yakhutpura", slug: "yakhutpura" },
  { name: "Yousufguda", slug: "yousufguda" },
  { name: "Zahirabad", slug: "zahirabad" },
];

// Generate static params for all locations
export async function generateStaticParams() {
  return Object.keys(locationData).map((slug) => ({ location: slug }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: { params: { location: string } }): Promise<Metadata> {
  const location = locationData[params.location];
  if (!location) return { title: "Location Not Found" };

  const isClinic = location.type.includes("Clinic");
  
  return {
    title: `Best Physiotherapy in ${location.name} Near Me | ${isClinic ? 'Clinic' : 'Home Visit'} | Legend Physiotherapy`,
    description: `★★★★★ Best Physiotherapist in ${location.name}, Hyderabad. ${location.seoDescription}. Call ${location.phone} for appointment.`,
    keywords: [
      `physiotherapy in ${location.name}`,
      `best physiotherapist in ${location.name}`,
      `physiotherapy near ${location.name}`,
      `physiotherapy clinic ${location.name}`,
      `home visit physiotherapy ${location.name}`,
      `back pain treatment ${location.name}`,
      `knee pain physiotherapy ${location.name}`,
      `sports injury ${location.name}`,
      `neuro rehabilitation ${location.name}`,
      `best physiotherapy near me`,
      `physiotherapist near me ${location.name}`,
      location.name,
      ...location.nearby.split(',').map(n => n.trim()),
    ],
    alternates: {
      canonical: `/locations/${params.location}`,
    },
    openGraph: {
      title: `Best Physiotherapy in ${location.name} | Legend Physiotherapy`,
      description: location.seoDescription,
      url: `/locations/${params.location}`,
      siteName: 'Legend Physiotherapy',
      locale: 'en_IN',
      type: 'website',
      images: [
        {
          url: '/logo.png',
          width: 1200,
          height: 630,
          alt: `Best Physiotherapy in ${location.name}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `Best Physiotherapy in ${location.name} | Legend Physiotherapy`,
      description: location.seoDescription,
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
  };
}

export default function LocationPage({ params }: { params: { location: string } }) {
  const location: LocationEntry | undefined = locationData[params.location];

  if (!location) {
    notFound();
  }

  const isClinic = location.type.includes("Clinic");

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-12 md:py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 md:w-96 md:h-96 bg-white rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur px-3 py-1.5 md:px-4 md:py-2 rounded-full mb-4 md:mb-6">
              <svg className="w-4 h-4 md:w-5 md:h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="text-xs md:text-sm font-semibold">Best Physiotherapy Near {location.name}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight" style={{ fontFamily: "var(--font-poppins)" }}>
              {location.fullName}
            </h1>

            <p className="text-base md:text-xl text-blue-100 mb-6 md:mb-8 leading-relaxed">
              {location.description}
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4">
              <a
                href={`https://wa.me/${location.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 text-sm md:text-base"
              >
                <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 448 512">
                  <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.7 17.7 69.4 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.1 0-65.6-8.9-93.7-25.7l-6.7-4-69.8 18.3 18.6-68-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-5.5-2.8-23.2-8.5-44.2-27.1-16.4-14.6-27.4-32.7-30.6-38.2-3.2-5.6-.3-8.6 2.5-11.3 2.5-2.5 5.6-6.5 8.3-9.7 2.8-3.3 3.7-5.6 5.6-9.3 1.9-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 13.2 5.8 23.5 9.2 31.5 11.8 13.3 4.2 25.4 3.6 35 2.2 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
                </svg>
                WhatsApp Now
              </a>
              <a
                href={`tel:${location.phone}`}
                className="bg-white text-blue-600 hover:bg-blue-50 px-6 md:px-8 py-3 md:py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 text-sm md:text-base"
              >
                <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span className="hidden sm:inline">Call {location.phone}</span>
                <span className="sm:hidden">Call Now</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Location Highlights */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {location.highlights.map((highlight, index) => (
              <div key={index} className="flex items-start gap-3 md:gap-4 p-4 md:p-6 bg-blue-50 rounded-xl hover:shadow-lg transition-shadow">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed">{highlight}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Best Physiotherapy in Location - Blog Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 md:mb-8" style={{ fontFamily: "var(--font-poppins)" }}>
            Best Physiotherapy in {location.name}
          </h2>

          <div className="space-y-4 md:space-y-6 text-sm md:text-base text-gray-700 leading-relaxed">
            <p>
              Looking for the best physiotherapy in {location.name}? Legend Physiotherapy stands out as the premier choice for comprehensive rehabilitation and pain management services. Our {location.type.toLowerCase()} combines cutting-edge treatment techniques with personalized care, ensuring every patient receives the attention and expertise they deserve. With over 20+ years of experience led by Dr. Sirish, we have successfully treated thousands of patients across Hyderabad, helping them regain mobility, reduce pain, and improve their quality of life.
            </p>

            <p>
              What makes us the best physiotherapy provider in {location.name} is our holistic approach to treatment. We don't just address symptoms; we identify and treat the root cause of your condition. Our comprehensive assessment process includes detailed evaluation of your movement patterns, strength, flexibility, and functional limitations. Based on this thorough analysis, we create a customized treatment plan that combines manual therapy, therapeutic exercises, advanced modalities, and patient education to achieve optimal results.
            </p>

            <p>
              Our team of certified physiotherapists specializes in both orthopaedic and neurological rehabilitation, making us uniquely qualified to handle a wide range of conditions. Whether you're recovering from surgery, managing chronic pain, rehabilitating after a sports injury, or dealing with neurological conditions like stroke or Parkinson's disease, we have the expertise and equipment to help you achieve your recovery goals. We use evidence-based treatment protocols that are proven to deliver results, combined with compassionate care that makes every patient feel valued and supported.
            </p>

            <p>
              Convenience is another factor that sets us apart as the best physiotherapy option in {location.name}. {location.type.includes("Home") 
                ? `Our home visit service brings professional physiotherapy care directly to your doorstep, eliminating the stress and difficulty of traveling when you're in pain or recovering from surgery. We bring all necessary equipment to your home, ensuring you receive the same quality of care as you would in a clinical setting. Our flexible scheduling accommodates your busy lifestyle, with appointments available from early morning to late evening, seven days a week.`
                : `Our state-of-the-art clinic is equipped with advanced technology including robotic physiotherapy systems, spinal decompression tables, and high-intensity laser therapy. For patients who prefer treatment at home, we also offer professional home visit services across Hyderabad. This flexibility ensures that everyone can access the care they need, regardless of their circumstances.`
              }
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Location Physiotherapy */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 md:mb-8" style={{ fontFamily: "var(--font-poppins)" }}>
            Why Choose {location.name} Physiotherapy?
          </h2>

          <div className="space-y-6 md:space-y-8">
            {/* Reason 1 */}
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm">
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 md:mb-4 flex items-center gap-3" style={{ fontFamily: "var(--font-poppins)" }}>
                <span className="w-8 h-8 md:w-10 md:h-10 bg-blue-500 text-white rounded-full flex items-center justify-center text-lg md:text-xl font-bold flex-shrink-0">1</span>
                Expert Team with 20+ Years Experience
              </h3>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                Our physiotherapy team in {location.name} is led by Dr. Sirish, a senior consultant with over 20+ years of specialized experience in orthopaedic and neurological rehabilitation. Every member of our team holds professional certifications and undergoes continuous training to stay updated with the latest treatment techniques. This expertise translates into faster recovery times, better outcomes, and a higher success rate in treating complex conditions.
              </p>
            </div>

            {/* Reason 2 */}
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm">
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 md:mb-4 flex items-center gap-3" style={{ fontFamily: "var(--font-poppins)" }}>
                <span className="w-8 h-8 md:w-10 md:h-10 bg-blue-500 text-white rounded-full flex items-center justify-center text-lg md:text-xl font-bold flex-shrink-0">2</span>
                {location.type.includes("Clinic") ? "Advanced Equipment & Technology" : "Professional Home Visit Service"}
              </h3>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                {location.type.includes("Clinic") 
                  ? `Our ${location.name} clinic is equipped with hospital-grade technology including robotic physiotherapy systems, spinal decompression tables, high-intensity laser therapy, and ultrasound-guided treatment. This advanced equipment allows us to provide treatments that are simply not available at most physiotherapy centers, giving you access to the most effective rehabilitation options available.`
                  : `We bring professional physiotherapy care directly to your home in ${location.name}. Our therapists arrive with all necessary portable equipment including TENS units, ultrasound machines, resistance bands, and therapeutic tools. You receive the same quality of care as you would in a clinic, but in the comfort and convenience of your own home. This is especially beneficial for elderly patients, those recovering from surgery, or anyone with mobility challenges.`
                }
              </p>
            </div>

            {/* Reason 3 */}
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm">
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 md:mb-4 flex items-center gap-3" style={{ fontFamily: "var(--font-poppins)" }}>
                <span className="w-8 h-8 md:w-10 md:h-10 bg-blue-500 text-white rounded-full flex items-center justify-center text-lg md:text-xl font-bold flex-shrink-0">3</span>
                Personalized Treatment Plans
              </h3>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                We understand that every patient is unique, which is why we never use a one-size-fits-all approach. Your treatment plan in {location.name} is customized based on your specific condition, lifestyle, goals, and preferences. We take time to understand your daily activities, work requirements, and personal objectives, then design a rehabilitation program that fits seamlessly into your life while delivering maximum results.
              </p>
            </div>

            {/* Reason 4 */}
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm">
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 md:mb-4 flex items-center gap-3" style={{ fontFamily: "var(--font-poppins)" }}>
                <span className="w-8 h-8 md:w-10 md:h-10 bg-blue-500 text-white rounded-full flex items-center justify-center text-lg md:text-xl font-bold flex-shrink-0">4</span>
                Comprehensive Care for All Conditions
              </h3>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                From sports injuries and post-operative rehabilitation to chronic pain management and neurological conditions, we treat the full spectrum of physical ailments. Our dual specialization in orthopaedic and neurological physiotherapy means you don't need to go to multiple providers. Whether you need treatment for back pain, stroke rehabilitation, or anything in between, we have the expertise to help you recover.
              </p>
            </div>

            {/* Reason 5 */}
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm">
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 md:mb-4 flex items-center gap-3" style={{ fontFamily: "var(--font-poppins)" }}>
                <span className="w-8 h-8 md:w-10 md:h-10 bg-blue-500 text-white rounded-full flex items-center justify-center text-lg md:text-xl font-bold flex-shrink-0">5</span>
                Flexible Scheduling & Convenient Location
              </h3>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                Located in {location.nearby}, we're easily accessible from all parts of {location.name}. We offer flexible appointment times including early morning and evening slots to accommodate working professionals. Open 7 days a week, we ensure that you can receive treatment when it's most convenient for you. Same-day appointments are often available for urgent cases.
              </p>
            </div>

            {/* Reason 6 */}
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm">
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 md:mb-4 flex items-center gap-3" style={{ fontFamily: "var(--font-poppins)" }}>
                <span className="w-8 h-8 md:w-10 md:h-10 bg-blue-500 text-white rounded-full flex items-center justify-center text-lg md:text-xl font-bold flex-shrink-0">6</span>
                Proven Track Record of Success
              </h3>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                With thousands of successful treatments and a 4.9/5 patient satisfaction rating, our results speak for themselves. Patients in {location.name} consistently report significant pain reduction, improved mobility, and faster recovery times. Our evidence-based approach, combined with compassionate care, has made us the trusted choice for physiotherapy in the area. Read our patient testimonials to see how we've helped people just like you return to pain-free, active lives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Conditions We Treat */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3 md:mb-4" style={{ fontFamily: "var(--font-poppins)" }}>
              Conditions We Treat in {location.name}
            </h2>
            <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
              Our experienced physiotherapists specialize in treating a wide range of orthopaedic and neurological conditions
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {location.conditions.map((condition, index) => (
              <div key={index} className="flex items-start gap-3 p-4 md:p-5 bg-gray-50 rounded-xl hover:bg-blue-50 hover:shadow-md transition-all">
                <svg className="w-5 h-5 md:w-6 md:h-6 text-blue-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm md:text-base text-gray-700 font-medium">{condition}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services We Provide */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3 md:mb-4" style={{ fontFamily: "var(--font-poppins)" }}>
              Our Physiotherapy Services in {location.name}
            </h2>
            <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
              Comprehensive treatment options designed to address your unique needs
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {location.services.map((service, index) => (
              <div key={index} className="bg-white p-5 md:p-6 rounded-xl shadow-sm hover:shadow-lg transition-all">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 md:w-7 md:h-7 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-base md:text-lg font-semibold text-gray-800 mb-2" style={{ fontFamily: "var(--font-poppins)" }}>
                  {service}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 md:mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3 md:mb-4" style={{ fontFamily: "var(--font-poppins)" }}>
              Find Us in {location.name}
            </h2>
            <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
              {location.address}
            </p>
          </div>

          {location.mapPins && location.mapPins.length > 0 ? (
            <InteractiveMap pins={location.mapPins} locationName={location.name} />
          ) : (
            <div className="rounded-xl md:rounded-2xl overflow-hidden shadow-2xl">
              <iframe
                src={`https://www.google.com/maps?q=${encodeURIComponent(location.address)}&output=embed`}
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`Map of ${location.name}`}
                className="md:h-[450px]"
              />
            </div>
          )}

          <div className="mt-6 md:mt-8 text-center">
            <a
              href={location.mapPins && location.mapPins.length > 0 
                ? `https://www.google.com/maps/search/?api=1&query=${location.mapPins[0].lat},${location.mapPins[0].lng}`
                : `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location.address)}`
              }
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-5 md:px-6 py-2.5 md:py-3 rounded-lg font-semibold transition-colors text-sm md:text-base"
            >
              <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              Get Directions
            </a>
          </div>
        </div>
      </section>

      {/* Home Care Physiotherapy Info Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8" style={{ fontFamily: "var(--font-poppins)" }}>
            Home Care Physiotherapy in {location.name}
          </h2>

          <div className="space-y-8 text-sm md:text-base text-gray-700 leading-relaxed">

            <div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3" style={{ fontFamily: "var(--font-poppins)" }}>
                Who are Physiotherapists?
              </h3>
              <p>
                Physiotherapists are healthcare professionals who help the patients to reduce pain and restore their functions and mobility of the body after an injury or disability. They also help in promoting and maintaining the overall well being of the patient. They are specialized in physiotherapy and help the patient in avoiding the surgery or medications by providing physical treatment options like soft tissue mobilization, Kinesio taping, and ROM exercises, etc.
              </p>
            </div>

            <div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3" style={{ fontFamily: "var(--font-poppins)" }}>
                What does home care physiotherapy mean?
              </h3>
              <p>
                Home care physiotherapy mainly focuses on home-based physiotherapy treatment and management for the patients. This type of service provides patient-centered care for individuals who are unable to come to the hospital or clinic due to complex health conditions. The ultimate goal of home care physiotherapy is to provide appropriate high quality and cost-effective care to people.
              </p>
            </div>

            <div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3" style={{ fontFamily: "var(--font-poppins)" }}>
                What are home care physiotherapy services?
              </h3>
              <p className="mb-3">Following are a few of the conditions for which home care physiotherapy services are available:</p>
              <ul className="grid sm:grid-cols-2 gap-2 list-none p-0">
                {[
                  "Stiff joints", "Osteoarthritis", "Back pain", "Neck pain",
                  "Facial paralysis or Bell&apos;s palsy", "Neuropathy", "Stroke/Paralysis",
                  "Peripheral nerve injuries", "Parkinson&apos;s disease", "Congenital deformities",
                  "Spinal cord injuries", "Fractures", "Joint replacements", "Head injuries",
                  "Post-surgical stiffness", "Amputations", "Multiple sclerosis",
                  "Geriatric rehabilitation", "Postural problems", "Balance and coordination problems"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-blue-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span dangerouslySetInnerHTML={{ __html: item }} />
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3" style={{ fontFamily: "var(--font-poppins)" }}>
                What are the advantages of home care physiotherapy?
              </h3>
              <p className="mb-3">Home care physiotherapy is beneficial for many reasons. Following are a few of them:</p>
              <ul className="grid sm:grid-cols-2 gap-2 list-none p-0">
                {[
                  "Personalized care", "Safe for high-risk patients", "Can have flexible timings",
                  "Time-saving", "Cost-savings", "Eliminate obstacles like transportation",
                  "Home comforts", "Convenience", "Easy access"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-blue-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3" style={{ fontFamily: "var(--font-poppins)" }}>
                Who will benefit due to home care physiotherapy?
              </h3>
              <p className="mb-3">Almost all the patients will be benefited due to home care physiotherapy. Following are a few of them:</p>
              <ul className="space-y-2 list-none p-0">
                {[
                  "Individuals suffering from chronic joint or muscle pain",
                  "People with physical disabilities",
                  "Immobilized patients",
                  "Post-surgery patients",
                  "Elderly people",
                  "People who are suffering from severe muscular-skeletal disorders",
                  "Cancer patients"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-blue-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3" style={{ fontFamily: "var(--font-poppins)" }}>
                How does home physiotherapy work?
              </h3>
              <p>
                Initially, the Physiotherapist will examine the health condition of an individual for health assessment and plan appropriate treatment. Depending on the type of procedure performed and the patient condition, the duration of the service varies from 45 to 60 minutes. Based on individual needs, home care will offer weekly or monthly packages. A convenient time slot can be taken.
              </p>
            </div>

            <div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3" style={{ fontFamily: "var(--font-poppins)" }}>
                Can home care physiotherapy help to treat arthritis?
              </h3>
              <p>
                A painful disorder that leads to inflammation of joints is called arthritis. A Physiotherapist helps in reducing the pain and stiffness by hot and cold treatments. Home care services are available to treat arthritis, they will advise splints, braces to maintain good posture. Some of the treatment options such as mobilizations, stretching exercises, and manual manipulation helps in reducing the pressure over joints.
              </p>
            </div>

          </div>
        </div>
      </section>

      <Doctors />
      <Services />
      <Appointment />

      {/* FAQ Section */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3 md:mb-4" style={{ fontFamily: "var(--font-poppins)" }}>
              Frequently Asked Questions
            </h2>
            <p className="text-sm md:text-base text-gray-600">
              Common questions about physiotherapy services in {location.name}
            </p>
          </div>

          <div className="space-y-3 md:space-y-4">
            {[
              {
                q: `What areas do you serve around ${location.name}?`,
                a: `We serve ${location.nearby} and surrounding areas. Our ${location.type.toLowerCase()} is conveniently located to serve patients throughout the region.`
              },
              {
                q: "How long does each physiotherapy session last?",
                a: "Each session typically lasts 45-60 minutes, depending on your condition and treatment plan. Your first assessment may take slightly longer as we conduct a comprehensive evaluation."
              },
              {
                q: "Do you accept insurance?",
                a: "Yes, we work with most major insurance providers. We can provide detailed invoices and documentation for insurance reimbursement. Please contact us to verify your specific coverage."
              },
              {
                q: "How many sessions will I need?",
                a: "The number of sessions varies based on your condition, severity, and individual response to treatment. Most patients see significant improvement within 6-12 sessions, though some conditions may require more or less."
              },
              {
                q: "What should I wear to my physiotherapy appointment?",
                a: "Wear comfortable, loose-fitting clothing that allows easy access to the area being treated. For lower body treatments, shorts are recommended. For upper body, a tank top or t-shirt works well."
              },
              {
                q: `Do you offer ${location.type.includes("Home") ? "clinic visits" : "home visits"} as well?`,
                a: location.type.includes("Home") 
                  ? "Yes! While we specialize in home visits, we also have clinic facilities available. For advanced treatments requiring specialized equipment, we can arrange clinic appointments."
                  : "Yes! In addition to our clinic services, we offer professional home visit physiotherapy for patients who prefer treatment at home or have difficulty traveling."
              }
            ].map((faq, index) => (
              <details key={index} className="group bg-white rounded-lg md:rounded-xl shadow-sm overflow-hidden">
                <summary className="flex items-center justify-between p-4 md:p-6 cursor-pointer hover:bg-blue-50 transition-colors">
                  <h3 className="text-sm md:text-base font-semibold text-gray-800 pr-4" style={{ fontFamily: "var(--font-poppins)" }}>
                    {faq.q}
                  </h3>
                  <svg className="w-4 h-4 md:w-5 md:h-5 text-blue-500 flex-shrink-0 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-4 md:px-6 pb-4 md:pb-6 text-sm md:text-base text-gray-600 leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* All 200+ Locations Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3 md:mb-4" style={{ fontFamily: "var(--font-poppins)" }}>
              Our Physiotherapy Locations in Hyderabad
            </h2>
            <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
              Find the best physiotherapy near you. We serve 200+ locations across Hyderabad with expert care.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2 md:gap-3">
            {seoLocations.map((loc) => {
              const hasFullData = locationData[loc.slug];
              const href = hasFullData ? `/locations/${loc.slug}` : "/contact";
              
              return (
                <a
                  key={loc.slug}
                  href={href}
                  className={`p-3 md:p-4 rounded-lg text-center transition-all text-xs md:text-sm ${
                    loc.slug === params.location
                      ? "bg-blue-500 text-white shadow-lg"
                      : hasFullData
                      ? "bg-gray-50 text-gray-700 hover:bg-blue-50 hover:text-blue-600 hover:shadow-md"
                      : "bg-gray-50 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                  }`}
                  title={`Best Physiotherapy in ${loc.name}`}
                >
                  <div className="font-semibold" style={{ fontFamily: "var(--font-poppins)" }}>
                    Best Physiotherapy in {loc.name}
                  </div>
                  <div className="text-[10px] md:text-xs mt-1 opacity-80">
                    {hasFullData ? "View Details" : "Contact Us"}
                  </div>
                </a>
              );
            })}
          </div>

          <div className="mt-8 md:mt-10 text-center">
            <p className="text-sm md:text-base text-gray-600 mb-3 md:mb-4">
              Can't find your location? We serve 200+ areas across Hyderabad!
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-5 md:px-6 py-2.5 md:py-3 rounded-lg font-semibold transition-colors text-sm md:text-base"
            >
              Contact Us for Your Area
              <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      <Footer />

      {/* FAQ Schema Markup for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": `What areas do you serve around ${location.name}?`,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": `We serve ${location.nearby} and surrounding areas. Our ${location.type.toLowerCase()} is conveniently located to serve patients throughout the region.`
                }
              },
              {
                "@type": "Question",
                "name": "How long does each physiotherapy session last?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Each session typically lasts 45-60 minutes, depending on your condition and treatment plan. Your first assessment may take slightly longer as we conduct a comprehensive evaluation."
                }
              },
              {
                "@type": "Question",
                "name": "Do you accept insurance?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, we work with most major insurance providers. We can provide detailed invoices and documentation for insurance reimbursement. Please contact us to verify your specific coverage."
                }
              },
              {
                "@type": "Question",
                "name": "How many sessions will I need?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The number of sessions varies based on your condition, severity, and individual response to treatment. Most patients see significant improvement within 6-12 sessions, though some conditions may require more or less."
                }
              },
              {
                "@type": "Question",
                "name": "What should I wear to my physiotherapy appointment?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Wear comfortable, loose-fitting clothing that allows easy access to the area being treated. For lower body treatments, shorts are recommended. For upper body, a tank top or t-shirt works well."
                }
              },
              {
                "@type": "Question",
                "name": `Do you offer ${location.type.includes("Home") ? "clinic visits" : "home visits"} as well?`,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": location.type.includes("Home") 
                    ? "Yes! While we specialize in home visits, we also have clinic facilities available. For advanced treatments requiring specialized equipment, we can arrange clinic appointments."
                    : "Yes! In addition to our clinic services, we offer professional home visit physiotherapy for patients who prefer treatment at home or have difficulty traveling."
                }
              }
            ]
          })
        }}
      />
    </div>
  );
}
