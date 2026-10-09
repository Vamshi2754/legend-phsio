"use client";
import { useState } from "react";

// SEO Locations - All locations from legendphysiotherapy.com excluding main 19 locations
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
  { name: "Kachiguda", slug: "kachiguda" },
  { name: "Kakaguda", slug: "kakaguda" },
  { name: "Kalasiguda", slug: "kalasiguda" },
  { name: "Kanchan Bagh", slug: "kanchan-bagh" },
  { name: "Kandukur", slug: "kandukur" },
  { name: "Kapra", slug: "kapra" },
  { name: "Karkhana", slug: "karkhana" },
  { name: "Karmanghat", slug: "karmanghat" },
  { name: "Karwan", slug: "karwan" },
  { name: "Katedan", slug: "katedan" },
  { name: "Kavdiguda", slug: "kavdiguda" },
  { name: "Kavuri Hills", slug: "kavuri-hills" },
  { name: "Kazipallyy", slug: "kazipallyy" },
  { name: "Keesara", slug: "keesara" },
  { name: "Khairatabad", slug: "khairatabad" },
  { name: "Kismatpur", slug: "kismatpur" },
  { name: "Kokapel", slug: "kokapel" },
  { name: "Kongara Kalan", slug: "kongara-kalan" },
  { name: "Kothaguda", slug: "kothaguda" },
  { name: "Kothapet", slug: "kothapet" },
  { name: "Koti", slug: "koti" },
  { name: "Kottur", slug: "kottur" },
  { name: "Kowkur", slug: "kowkur" },
  { name: "Kurmaguda", slug: "kurmaguda" },
  { name: "Kushaiguda", slug: "kushaiguda" },
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
  { name: "Musheerabad", slug: "musheerabad" },
  { name: "Muthangii", slug: "muthangii" },
  { name: "Mylargada", slug: "mylargada" },
  { name: "Nacharam", slug: "nacharam" },
  { name: "Nadergul", slug: "nadergul" },
  { name: "Nagaram", slug: "nagaram" },
  { name: "Nagarjuna Sagar Road", slug: "nagarjuna-sagar-road" },
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

// Proximity map: footer location name → nearest clinic slug (within 5km)
const nearestClinic: Record<string, string> = {
  "Afzal Gunj": "abids", "Anandbagh": "lb-nagar", "Badangpet": "kharmanghat",
  "Basheerabad": "kompally", "Dasarlapally": "kukatpally", "Golkonda": "tolichowki",
  "Habsiguda": "habsiguda", "Hastinapuram": "kharmanghat", "Kachiguda": "himayatnagar",
  "Katedan": "attapur", "Kavuri Hills": "jubilee-hills", "Kowkur": "secunderabad",
  "Lakdi Ka Pul": "abids", "Lumbini Park": "himayatnagar", "Manneguda": "kharmanghat",
  "Mansoorabad": "nagole", "Mettuguda": "secunderabad", "Nanakramguda": "gachibowli",
  "Neeladri Nagar": "nagole", "NTR Nagar": "himayatnagar", "Peerzadiguda": "habsiguda",
  "Rajendra Nagar": "attapur", "Ram Nagar": "mrc-colony", "Santosh Nagar": "kharmanghat",
  "Upparpally": "attapur", "Walker Town": "secunderabad", "West Marredpally": "secunderabad",
  "Adikmet": "mrc-colony", "Chikkadpally": "himayatnagar", "Erragadda": "borabanda",
  "Film Nagar": "banjara-hills", "Himayath Nagar": "himayatnagar", "Karmanghat": "kharmanghat",
  "Khairatabad": "ameerpet", "Kothaguda": "madhapur", "Malakpet": "dilsukhnagar",
  "Maruti Nagar": "begumpet", "Mehadipatnam": "mehdipatnam", "Nallakunta": "himayatnagar",
  "Ramchandra Puram": "begumpet", "Srinagar Colony": "ameerpet", "Subhash Nagar": "begumpet",
  "Suchitra Road": "kompally", "Suraram": "kukatpally", "Trimulgherry": "secunderabad",
  "Yakhutpura": "abids", "Bala Nagar": "kukatpally", "Gudimalkapur": "attapur",
  "Kushaiguda": "tarnaka", "Lingampally": "miyapur", "Musheerabad": "himayatnagar",
  "Nacharam": "uppal", "Nampally": "abids", "Neredmet": "secunderabad",
  "Peerancheeru": "kondapur", "Quthbullapur": "kompally", "Shaikpet": "tolichowki",
  "Sindhi Colony": "begumpet", "Sri Nagar Colony": "ameerpet", "Tarnaka": "tarnaka",
  "Amberpet": "mrc-colony", "Bahadurpally": "kompally", "Champapet": "kharmanghat",
  "East Marredpally": "secunderabad", "Financial District": "gachibowli",
  "Kalasiguda": "secunderabad", "Lal Darwaza": "abids", "Lalapet": "tarnaka",
  "Masab Tank": "abids", "Meerpet": "kharmanghat", "New Malakpet": "dilsukhnagar",
  "Old Bowenpally": "secunderabad", "Prashanth Nagar": "secunderabad",
  "Punjagutta": "ameerpet", "Rasoolpura": "begumpet", "Saifabad": "abids",
  "Sitaphalmandir": "secunderabad", "Venkatapuram": "secunderabad",
  "Bairagiguda": "kharmanghat", "Chintal": "kukatpally", "Chintalkunta": "kharmanghat",
  "Gandhi Nagar": "abids", "Gandipet": "kokapet", "Koti": "abids",
  "Moula Ali": "habsiguda", "New Mallepally": "abids", "Nizampet Road": "kukatpally",
  "Ramanthapur": "uppal", "Somajiguda": "ameerpet", "Toli Chowki": "tolichowki",
  "Basheer Bagh": "abids", "Bowenpally": "secunderabad", "Domalguda": "himayatnagar",
  "Dullapally": "kukatpally", "Hyderguda": "abids", "Jeedimetla": "kukatpally",
  "Karkhana": "secunderabad", "Madhura Nagar": "ameerpet", "Mallapur": "habsiguda",
  "Narayanguda": "himayatnagar", "Outer Ring Road": "madhapur", "Raj Bhavan Road": "begumpet",
  "Rajeev Nagar": "begumpet", "Ramakrishnapuram": "begumpet", "Saidabad": "dilsukhnagar",
  "Sanjeeva Reddy Nagar": "ameerpet", "Saroor Nagar": "kharmanghat",
  "Shamirpet": "kompally", "Vanasthalipuram": "kharmanghat", "Yousufguda": "ameerpet",
  "Ameerpet": "ameerpet", "Abids": "abids", "Borabanda": "borabanda",
  "Kothapet": "lb-nagar", "Nagole": "nagole", "Gatkesar": "secunderabad",
};

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) { setSubscribed(true); setEmail(""); }
  };

  return (
    <footer id="contact" className="bg-gray-900 text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <a href="/" className="flex items-center gap-2 mb-5 group">
            <img 
              src="/logo.png" 
              alt="Legend Physiotherapy Logo" 
              className="h-9 w-auto object-contain transition-transform group-hover:scale-105"
            />
            <span className="text-xl font-bold" style={{ fontFamily: "var(--font-poppins)" }}>
              <span className="text-blue-400">Legend</span> Physiotherapy
            </span>
          </a>
          <p className="text-gray-400 text-sm leading-relaxed mb-5">
            Expert physiotherapy for pain-free living. Serving Hyderabad with 20+ years of experience in ortho and neuro rehabilitation.
          </p>
          
          <div className="flex flex-wrap gap-2.5">
            <a
              href="https://wa.me/919966193413"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              title="Chat on WhatsApp"
              className="w-9 h-9 bg-gray-800 hover:bg-green-500 rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200 shadow-md"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 448 512">
                <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.7 17.7 69.4 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.1 0-65.6-8.9-93.7-25.7l-6.7-4-69.8 18.3 18.6-68-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-5.5-2.8-23.2-8.5-44.2-27.1-16.4-14.6-27.4-32.7-30.6-38.2-3.2-5.6-.3-8.6 2.5-11.3 2.5-2.5 5.6-6.5 8.3-9.7 2.8-3.3 3.7-5.6 5.6-9.3 1.9-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 13.2 5.8 23.5 9.2 31.5 11.8 13.3 4.2 25.4 3.6 35 2.2 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
              </svg>
            </a>
            <a
              href="tel:+918143015455"
              aria-label="Phone"
              title="Call Us"
              className="w-9 h-9 bg-gray-800 hover:bg-blue-500 rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200 shadow-md"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/dr.sirish_legend_physio?stkn=MWRmeHFlZnY3ZXBxZQ=="
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              title="Follow Dr. Sirish on Instagram"
              className="w-9 h-9 bg-gray-800 hover:bg-gradient-to-tr hover:from-amber-500 hover:via-rose-500 hover:to-purple-600 rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200 shadow-md"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a
              href="https://www.facebook.com/share/1DTdMkDcju/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              title="Follow us on Facebook"
              className="w-9 h-9 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200 shadow-md"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/sirish-physiotherapist?utm_source=share_via&utm_content=profile&utm_medium=member_android"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              title="Connect with Dr. Sirish on LinkedIn"
              className="w-9 h-9 bg-gray-800 hover:bg-blue-700 rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200 shadow-md"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.74a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24z"/>
              </svg>
            </a>
            <a
              href="https://www.justdial.com/Hyderabad/Legend-Physiotherapy-Ortho-And-Neuro-Pain-Management-Clinic-Behind-Ozone-Hospital-Kothapet/040PXX40-XX40-230919131238-A3N4_BZDET"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Justdial"
              title="View Legend Physiotherapy on Justdial"
              className="w-9 h-9 bg-gray-800 hover:bg-white rounded-full flex items-center justify-center transition-all duration-200 shadow-md group/jd"
            >
              <span className="font-extrabold text-xs tracking-tighter" style={{ fontFamily: "Inter, sans-serif" }}>
                <span className="text-[#0076d7]">J</span>
                <span className="text-[#ff6e00]">d</span>
              </span>
            </a>
            <a
              href="mailto:Info@legendphysiotherapy.com"
              aria-label="Email"
              title="Email Us"
              className="w-9 h-9 bg-gray-800 hover:bg-blue-500 rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200 shadow-md"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold text-white mb-5 text-sm uppercase tracking-wider" style={{ fontFamily: "var(--font-poppins)" }}>
            Quick Links
          </h4>
          <ul className="space-y-3">
            {[
              { label: "Home", href: "/" },
              { label: "Services", href: "/#services" },
              { label: "About", href: "/about" },
              { label: "Blog", href: "/blog" },
              { label: "Contact Us", href: "/contact" }
            ].map((link) => (
              <li key={link.label}>
                <a href={link.href} className="text-gray-400 hover:text-blue-400 text-sm flex items-center gap-2 transition-colors">
                  <svg className="w-3 h-3 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Opening Hours */}
        <div>
          <h4 className="font-semibold text-white mb-5 text-sm uppercase tracking-wider" style={{ fontFamily: "var(--font-poppins)" }}>
            Opening Hours
          </h4>
          <ul className="space-y-3 text-sm">
            {[
              { day: "Monday – Sunday", hours: "9:00 am – 9:00 pm" },
              { day: "Emergency 24/7", hours: "+91 81430 15455" },
            ].map((item) => (
              <li key={item.day} className="flex justify-between text-gray-400 border-b border-gray-800 pb-2 last:border-0">
                <span>{item.day}</span>
                <span className={item.day === "Emergency 24/7" ? "text-blue-400" : "text-gray-300"}>
                  {item.hours}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="font-semibold text-white mb-5 text-sm uppercase tracking-wider" style={{ fontFamily: "var(--font-poppins)" }}>
            Newsletter
          </h4>
          <p className="text-gray-400 text-sm mb-4 leading-relaxed">
            Subscribe for health tips, news, and appointment reminders.
          </p>
          <div className="flex flex-col gap-4 mt-2">
            <a
              href="https://legendphysiotherapyorthoandneuropainmanagementclinic.setmore.com?utm_source=qr-code&utm_medium=settings-share-bp"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-3 rounded-lg text-sm font-bold transition-all flex items-center justify-center gap-2 shadow-lg"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Book Appointment
            </a>
            <p className="text-gray-500 text-[10px] uppercase tracking-widest text-center">
              Secure Online Booking
            </p>
          </div>

          {/* Contact info */}
          <div className="mt-6 space-y-2 text-sm text-gray-400">
            <p className="flex items-center gap-2">
              <svg className="w-4 h-4 text-blue-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              Shop No.2, Dwarka Nagar, Green Hills Colony, Kothapet, L. B. Nagar, Hyderabad, Telangana 500102
            </p>
            <p className="flex items-center gap-2">
              <svg className="w-4 h-4 text-blue-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              +91 81430 15455
            </p>
            <p className="flex items-center gap-2">
              <svg className="w-4 h-4 text-blue-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              Info@legendphysiotherapy.com
            </p>
          </div>
        </div>
      </div>

      {/* SEO Locations Section */}
      <div className="max-w-7xl mx-auto px-6 py-12 border-t border-gray-800">
        <h4 className="font-semibold text-white mb-6 text-base uppercase tracking-wider text-center" style={{ fontFamily: "var(--font-poppins)" }}>
          Physiotherapy Near You
        </h4>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 text-xs">
          {seoLocations.map((location) => {
            const clinicSlug = nearestClinic[location.name];
            const href = clinicSlug ? `/locations/${clinicSlug}` : "/contact";
            return (
              <a
                key={location.slug}
                href={href}
                className="text-gray-400 hover:text-blue-400 transition-colors break-words"
                title={`Physiotherapy in ${location.name}`}
              >
                Physiotherapy in {location.name}
              </a>
            );
          })}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800 py-5 text-center text-gray-500 text-sm">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p>© 2026 Legend Physiotherapy. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
