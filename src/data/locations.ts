// Interfaces
export interface MapPin {
  lat: number;
  lng: number;
  label: string;
  address: string;
  phone: string;
}

export interface LocationEntry {
  name: string;
  fullName: string;
  type: string;
  title: string;
  phone: string;
  address: string;
  whatsapp: string;
  mapEmbed: string;
  mapPins?: MapPin[];
  description: string;
  seoDescription: string;
  highlights: string[];
  conditions: string[];
  services: string[];
  nearby: string;
  clinicBenefit?: string;
  localContent?: {
    intro: string;
    whyLocal: string;
    accessibility: string;
  };
}

export const locationData: Record<string, LocationEntry> = {
  "lb-nagar": {
    name: "LB Nagar",
    fullName: "Legend Physiotherapy Ortho and Neuro Pain Management Clinic | Kothapet | LB Nagar",
    type: "Clinic & Home Visit",
    title: "Legend Physiotherapy Ortho and Neuro Pain Management Clinic | Kothapet | Lb Nagar",
    phone: "+91 81430 15455",
    whatsapp: "918143015455",
    address: "Shop No.2 Ground Floor, Road No: 4, HNO: 11-13-714, Dwarka Nagar, Green Hills Colony, Kothapet, L. B. Nagar, Hyderabad, Telangana 500102",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.5!2d78.5457583!3d17.3597024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb990043784b77%3A0x55126327d4caeb32!2sLegend%20Physiotherapy%20Ortho%20and%20Neuro%20Pain%20Management%20Clinic%20%7C%20Kothapet%20%7C%20Lb%20Nagar!5e0!3m2!1sen!2sin!4v1",
    mapPins: [
      {
        lat: 17.3597024,
        lng: 78.5457583,
        label: "Legend Physiotherapy � Kothapet / LB Nagar",
        address: "Shop No.2 Ground Floor, Road No: 4, HNO: 11-13-714, Dwarka Nagar, Green Hills Colony, Kothapet, LB Nagar",
        phone: "+91 81430 15455"
      }
    ],
    description: "Legend Physiotherapy Ortho and Neuro Pain Management Clinic in Kothapet, LB Nagar is Hyderabad's trusted destination for advanced physiotherapy. Our flagship clinic is equipped with hospital-grade robotic physiotherapy systems, spinal decompression tables, high-intensity laser therapy, and ultrasound-guided treatment. Led by Dr. Sirish, our senior consultant team specialises in orthopaedic and neurological rehabilitation, treating everything from acute sports injuries to complex post-surgical recovery. We also offer home visit services across Hyderabad for patients who cannot travel.",
    seoDescription: "Professional physiotherapy clinic in LB Nagar & Kothapet, Hyderabad. Legend Physiotherapy offers advanced ortho and neuro pain management, robotic therapy, laser treatment, and home visits. Book now.",
    highlights: [
      "Clinic at Shop No.2, Dwarka Nagar, Green Hills Colony, Kothapet",
      "Hospital-grade robotic physiotherapy & spinal decompression",
      "High-intensity laser therapy & ultrasound-guided treatment",
      "Led by Dr. Sirish � 20+ years ortho & neuro expertise",
      "Home visit service available across Hyderabad",
      "Open 7 days a week, 6 AM � 11 PM"
    ],
    conditions: [
      "Chronic & acute back pain",
      "Neck pain & cervical spondylosis",
      "Knee pain & osteoarthritis",
      "Frozen shoulder & rotator cuff injuries",
      "Sports injuries & ligament tears",
      "Post-operative rehabilitation",
      "Stroke & neurological rehabilitation",
      "Sciatica & disc herniation",
      "Parkinson's disease physiotherapy",
      "Paediatric physiotherapy"
    ],
    services: [
      "Robotic physiotherapy",
      "Spinal decompression therapy",
      "High-intensity laser therapy",
      "Manual therapy & mobilisation",
      "Dry needling & cupping",
      "TENS & IFT electrotherapy",
      "Ultrasound therapy",
      "Home visit physiotherapy"
    ],
    nearby: "Dwarka Nagar, Green Hills Colony, Kothapet, LB Nagar, Hyderabad",
    clinicBenefit: "Visit our premium clinic with advanced robotic & laser equipment, or book a professional home visit anywhere in Hyderabad.",
    localContent: {
      intro: "LB Nagar and Kothapet form one of Hyderabad's busiest residential-commercial corridors along the Old Dilsukhnagar–Hayathnagar stretch. Residents here — from working professionals commuting via the LB Nagar Metro station to senior citizens in Green Hills Colony and Dwarka Nagar — frequently face back pain from long auto or bus rides, knee stiffness from climbing apartment stairs, and neck strain from desk-bound IT jobs at the nearby Nagole–Uppal tech parks. Our flagship clinic at Shop No.2, Dwarka Nagar is purpose-built for these needs, with hospital-grade robotic physiotherapy, spinal decompression, and high-intensity laser therapy under one roof.",
      whyLocal: "Unlike home-only services, our LB Nagar clinic gives you access to equipment that cannot travel — the robotic rehabilitation system for precise joint mobilisation, the spinal decompression table for disc herniation, and the Class IV laser for deep tissue healing. The clinic sits just 2 minutes from the LB Nagar X Roads bus stop and 5 minutes from Kothapet Signal, making it easy to reach from Sagar Ring Road, Champapet, Saroornagar, and Vanasthalipuram. For patients recovering from surgery or managing stroke rehabilitation who cannot visit the clinic, our therapists bring portable TENS, ultrasound, and resistance equipment directly to your home anywhere in greater LB Nagar.",
      accessibility: "Our clinic operates 7 days a week from 6 AM to 11 PM, with dedicated early-morning slots for working professionals before their commute and late-evening sessions for those returning from Gachibowli or HITEC City IT offices. Walk-ins are welcome, but booking via WhatsApp ensures zero waiting time. We are located opposite the Green Hills Colony park entrance — look for the Legend Physiotherapy signboard on the ground floor of the Dwarka Nagar building, Road No. 4."
    }
  },
  "nagole": {
    name: "Nagole",
    fullName: "Legend Physiotherapy Home Visit Service | Nagole, Hyderabad",
    type: "Home Visit",
    title: "Legend Physiotherapy Home Visit Service | Nagole",
    phone: "+91 99661 93413",
    whatsapp: "919966193413",
    address: "NUMBER 1A, 2-4-813, New Nagole Main Rd, Snehapuri, Snehapuri Colony, Nagole, Hyderabad, Telangana 500068",
    mapEmbed: "https://maps.google.com/maps?q=NUMBER+1A+2-4-813+New+Nagole+Main+Rd+Snehapuri+Snehapuri+Colony+Nagole+Hyderabad+Telangana+500068&output=embed",
    mapPins: [
      {
        lat: 17.3780,
        lng: 78.5580,
        label: "Legend Physiotherapy � Nagole",
        address: "NUMBER 1A, 2-4-813, New Nagole Main Rd, Snehapuri Colony, Nagole, Hyderabad",
        phone: "+91 99661 93413"
      }
    ],
    description: "Legend Physiotherapy's Nagole home visit service brings certified physiotherapy care directly to your doorstep in Nagole, Snehapuri Colony, and surrounding areas. Our expert therapists are trained in orthopaedic and neurological rehabilitation, providing personalised treatment plans for back pain, knee pain, post-surgical recovery, and sports injuries. We use portable clinical-grade equipment including TENS, ultrasound, and resistance therapy tools, ensuring you receive the same quality of care as our clinic � in the comfort of your home. Flexible morning and evening slots are available to suit your schedule.",
    seoDescription: "Expert physiotherapist home visit in Nagole, Hyderabad. Legend Physiotherapy provides expert treatment for back pain, knee pain, sports injuries, and post-surgery recovery at your doorstep.",
    highlights: [
      "Certified physiotherapists serving Nagole & Snehapuri Colony",
      "Portable clinical-grade equipment brought to your home",
      "Flexible slots: 6 AM � 11 PM, 7 days a week",
      "Specialised ortho & neuro rehabilitation",
      "Same-day appointments available"
    ],
    conditions: [
      "Back pain & sciatica",
      "Knee pain & arthritis",
      "Neck pain & cervical spondylosis",
      "Frozen shoulder",
      "Sports injuries",
      "Post-operative rehabilitation",
      "Stroke rehabilitation",
      "Elderly mobility & balance"
    ],
    services: [
      "Home visit physiotherapy",
      "Manual therapy",
      "TENS & electrotherapy",
      "Ultrasound therapy",
      "Exercise rehabilitation",
      "Neurological physiotherapy"
    ],
    nearby: "New Nagole Main Rd, Snehapuri Colony, Nagole, Hyderabad",
    localContent: {
      intro: "Nagole sits at the eastern edge of Hyderabad where the Metro Blue Line terminates, making it a transit hub for thousands of commuters heading to Uppal, Habsiguda, and ECIL. The Snehapuri Colony and New Nagole Main Road neighbourhoods are home to a mix of young families, retired defence personnel from the nearby Bolarum cantonment settlers, and IT professionals who relocated for affordable housing. Common physiotherapy needs here include lower back pain from long metro commutes, knee osteoarthritis among the elderly population, and sports injuries from the active cricket and badminton culture at local grounds near Nagole Lake.",
      whyLocal: "Our Nagole home visit team operates from the Snehapuri Colony base, reaching patients within 20–30 minutes across Nagole, Boduppal, Peerzadiguda, and Uppal Depot. We carry portable TENS units, ultrasound machines, and therapeutic resistance equipment — everything needed for a full rehabilitation session at your home. For residents near Nagole Metro station, our therapists can coordinate sessions around your commute schedule, offering early 6 AM slots before office and late 9 PM sessions after you return.",
      accessibility: "Nagole's rapid apartment growth means many patients are elderly parents living in high-rise buildings while their children work in HITEC City. Our home visit service eliminates the need to navigate traffic on the congested Nagole–Uppal Road or find parking at a clinic. We serve all apartments along New Nagole Main Road, Snehapuri Colony, and the new gated communities near Nagole Lake. Book via WhatsApp for same-day appointments — our Nagole team typically arrives within 2 hours of confirmation."
    }
  },
  "dilsukhnagar": {
    name: "Dilsukhnagar",
    fullName: "Legend Physiotherapy at Home | Expert Physiotherapist in Dilsukhnagar near Gaddiannaram, Hyderabad",
    type: "Home Visit",
    title: "Legend Physiotherapy at Home | Expert Physiotherapist in Dilsukhnagar near Gaddiannaram, Hyderabad",
    phone: "+91 79977 46927",
    whatsapp: "917997746927",
    address: "No. 16, Gaddiannaram Rd, behind Kamala Hospital, Gaddiannaram, Gowtham Nagar, Madhura Puri Colony, Dilsukhnagar, Hyderabad, Telangana 500036",
    mapEmbed: "https://maps.google.com/maps?q=No.+16+Gaddiannaram+Rd+behind+Kamala+Hospital+Gaddiannaram+Gowtham+Nagar+Madhura+Puri+Colony+Dilsukhnagar+Hyderabad+Telangana+500036&output=embed",
    mapPins: [
      {
        lat: 17.3690,
        lng: 78.5270,
        label: "Legend Physiotherapy � Dilsukhnagar / Gaddiannaram",
        address: "No. 16, Gaddiannaram Rd, behind Kamala Hospital, Gaddiannaram, Dilsukhnagar, Hyderabad",
        phone: "+91 79977 46927"
      }
    ],
    description: "Legend Physiotherapy's Dilsukhnagar branch, located near Gaddiannaram behind Kamala Hospital, is one of Hyderabad's most accessible physiotherapy home visit services. We serve patients across Dilsukhnagar, Gaddiannaram, Gowtham Nagar, Madhura Puri Colony, and Chaitanyapuri. Our therapists specialise in treating work-related musculoskeletal disorders, chronic back pain, knee osteoarthritis, and post-surgical rehabilitation. We bring advanced portable equipment including ultrasound, TENS, and resistance bands, delivering a complete clinical experience at your home. Early morning and late evening slots are available for working professionals.",
    seoDescription: "Expert physiotherapist in Dilsukhnagar near Gaddiannaram, Hyderabad. Legend Physiotherapy home visit service for back pain, knee pain, sports injuries, and post-surgery rehab. Call now.",
    highlights: [
      "Located near Kamala Hospital, Gaddiannaram",
      "Serving Dilsukhnagar, Gaddiannaram & Chaitanyapuri",
      "Early morning & late evening slots for professionals",
      "Advanced portable equipment at your home",
      "Expert in work-related musculoskeletal disorders"
    ],
    conditions: [
      "Chronic back pain & sciatica",
      "Knee pain & osteoarthritis",
      "Neck & shoulder pain",
      "Work-related repetitive strain injuries",
      "Post-operative rehabilitation",
      "Sports injuries",
      "Frozen shoulder",
      "Neurological rehabilitation"
    ],
    services: [
      "Home visit physiotherapy",
      "Manual therapy & mobilisation",
      "TENS & IFT electrotherapy",
      "Ultrasound therapy",
      "Postural correction",
      "Exercise rehabilitation"
    ],
    nearby: "Gaddiannaram Rd, behind Kamala Hospital, Dilsukhnagar, Hyderabad",
    localContent: {
      intro: "Dilsukhnagar is one of Hyderabad's most densely populated commercial hubs, with bustling markets, coaching centres, and a massive daily footfall around the Dilsukhnagar bus station and metro stop. The area — spanning Gaddiannaram, Gowtham Nagar, Madhura Puri Colony, and Chaitanyapuri — is home to students, small business owners, and families who often neglect chronic pain due to busy schedules. Common conditions we treat here include work-related repetitive strain injuries from shopkeepers standing all day, back pain from coaching centre teachers hunched over desks, and knee problems in the sizeable senior citizen community of Gaddiannaram's older colonies.",
      whyLocal: "Our Dilsukhnagar team operates from behind Kamala Hospital on Gaddiannaram Road, giving us quick access to patients across the Dilsukhnagar–Malakpet–Chaitanyapuri belt. We bring portable ultrasound, TENS, and manual therapy equipment directly to your home — particularly valuable in this area where traffic congestion around BN Reddy Nagar and the Dilsukhnagar crossroads makes clinic visits stressful. Our physiotherapists understand the occupational hazards common to this commercial district and design treatment plans accordingly.",
      accessibility: "Dilsukhnagar Metro station is just 5 minutes from our Gaddiannaram base, and we cover all colonies within a 5 km radius including Moosarambagh, Malakpet, and Kothapet. Early morning slots starting at 6 AM are popular with market vendors who need treatment before their shops open, while evening sessions suit students and working professionals. We accept walk-in bookings via phone or WhatsApp, with most appointments confirmed within 30 minutes."
    }
  },
  "habsiguda": {
    name: "Habsiguda",
    fullName: "Legend Physiotherapy Home Visit Service Near Habsiguda, Hyderabad",
    type: "Home Visit",
    title: "Legend Physiotherapy Home Visit Service Near Habsiguda, Hyderabad",
    phone: "+91 99661 93413",
    whatsapp: "919966193413",
    address: "1-4-37, Captain Veera Raja Reddy Marg, Vasant Vihar, Habsiguda, Hyderabad, Telangana 500007",
    mapEmbed: "https://maps.google.com/maps?q=1-4-37+Captain+Veera+Raja+Reddy+Marg+Vasant+Vihar+Habsiguda+Hyderabad+Telangana+500007&output=embed",
    mapPins: [
      {
        lat: 17.3820,
        lng: 78.5490,
        label: "Legend Physiotherapy � Habsiguda",
        address: "1-4-37, Captain Veera Raja Reddy Marg, Vasant Vihar, Habsiguda, Hyderabad",
        phone: "+91 99661 93413"
      }
    ],
    description: "Legend Physiotherapy's Habsiguda home visit service covers Vasant Vihar, Habsiguda, Tarnaka, and Uppal areas. Our certified physiotherapists provide expert treatment for orthopaedic and neurological conditions at your home. Located on Captain Veera Raja Reddy Marg, our team is well-positioned to reach patients quickly across the east Hyderabad corridor. We specialise in post-operative rehabilitation, sports injury recovery, and chronic pain management, using portable clinical equipment to deliver hospital-quality care at your doorstep.",
    seoDescription: "Expert physiotherapist near Habsiguda, Hyderabad. Legend Physiotherapy home visit service for back pain, knee pain, post-surgery rehab, and sports injuries. Expert care at your doorstep.",
    highlights: [
      "Serving Habsiguda, Vasant Vihar & Tarnaka",
      "Quick response � same-day appointments available",
      "Portable clinical equipment at your home",
      "Specialised post-operative rehabilitation",
      "Expert ortho & neuro physiotherapists"
    ],
    conditions: [
      "Back pain & disc herniation",
      "Knee pain & ligament injuries",
      "Neck pain & cervical spondylosis",
      "Post-operative rehabilitation",
      "Sports injuries",
      "Stroke & neurological conditions",
      "Frozen shoulder",
      "Elderly mobility & fall prevention"
    ],
    services: [
      "Home visit physiotherapy",
      "Manual therapy",
      "TENS & electrotherapy",
      "Ultrasound therapy",
      "Neurological rehabilitation",
      "Exercise therapy"
    ],
    nearby: "Captain Veera Raja Reddy Marg, Vasant Vihar, Habsiguda, Hyderabad",
    localContent: {
      intro: "Habsiguda is a well-established residential area in east Hyderabad, known for the NGRI (National Geophysical Research Institute) campus, Vasant Vihar colony, and its proximity to Osmania University. The neighbourhood attracts a mix of research professionals, university staff, and families who have lived here for decades. Physiotherapy needs in Habsiguda typically include age-related joint degeneration among long-term residents, cervical spondylosis from academic and research desk work, and sports injuries from the active athletics community around the OU grounds and Habsiguda stadium.",
      whyLocal: "Our Habsiguda team is positioned on Captain Veera Raja Reddy Marg in Vasant Vihar, allowing us to reach patients quickly across Habsiguda, Tarnaka, Nacharam, and the ECIL corridor. We specialise in treating the orthopaedic conditions common to this area's older population — hip replacements, knee arthritis, and spinal stenosis — using portable clinical equipment that replicates the clinic experience. For the younger academic community, we offer ergonomic assessments and postural correction programmes designed around long study and research hours.",
      accessibility: "Habsiguda is well-connected via the Habsiguda Metro station on the Blue Line, and our base on Captain Veera Raja Reddy Marg is a 3-minute walk from the metro exit. We serve all floors of walk-up apartments and independent houses across Vasant Vihar, NGRI Layout, and the colonies along Habsiguda Road. Home visits are available 7 days a week, with priority slots for post-surgical patients who need daily rehabilitation sessions."
    }
  },
  "kharmanghat": {
    name: "Kharmanghat",
    fullName: "Legend Physiotherapy Home Visit Service near Kharmanghat, Hyderabad",
    type: "Home Visit",
    title: "Legend Physiotherapy Home Visit Service near Kharmanghat, Hyderabad",
    phone: "+91 79977 46927",
    whatsapp: "917997746927",
    address: "10-01-802, Karmanghat Rd, Sri Raghavendra Nagar Colony, Padma Nagar Colony, Kharmanghat, Hyderabad, Telangana 500079",
    mapEmbed: "https://maps.google.com/maps?q=10-01-802+Karmanghat+Rd+Sri+Raghavendra+Nagar+Colony+Padma+Nagar+Colony+Kharmanghat+Hyderabad+Telangana+500079&output=embed",
    mapPins: [
      {
        lat: 17.3580,
        lng: 78.5310,
        label: "Legend Physiotherapy � Kharmanghat",
        address: "10-01-802, Karmanghat Rd, Sri Raghavendra Nagar Colony, Padma Nagar Colony, Kharmanghat, Hyderabad",
        phone: "+91 79977 46927"
      }
    ],
    description: "Legend Physiotherapy's Kharmanghat home visit service is based on Karmanghat Road, serving Sri Raghavendra Nagar Colony, Padma Nagar Colony, Karmanghat, and surrounding south Hyderabad localities. Our physiotherapists are experienced in treating chronic musculoskeletal pain, post-surgical recovery, and neurological conditions. We bring portable clinical equipment to your home, providing TENS therapy, ultrasound, manual therapy, and customised exercise programmes. Our team is known for compassionate, patient-focused care with flexible appointment timings.",
    seoDescription: "Expert physiotherapist near Kharmanghat, Hyderabad. Legend Physiotherapy home visit for back pain, knee pain, post-surgery rehab, and neurological conditions. Book today.",
    highlights: [
      "Serving Kharmanghat, Sri Raghavendra Nagar & Padma Nagar Colony",
      "Flexible appointment timings 6 AM � 11 PM",
      "Portable clinical equipment at your home",
      "Compassionate, patient-focused care",
      "Specialised in chronic pain & neuro rehab"
    ],
    conditions: [
      "Chronic back pain",
      "Knee pain & arthritis",
      "Neck & shoulder pain",
      "Post-operative rehabilitation",
      "Neurological conditions",
      "Sports injuries",
      "Elderly mobility improvement",
      "Sciatica & disc problems"
    ],
    services: [
      "Home visit physiotherapy",
      "Manual therapy",
      "TENS & electrotherapy",
      "Ultrasound therapy",
      "Exercise rehabilitation",
      "Neurological physiotherapy"
    ],
    nearby: "Karmanghat Rd, Sri Raghavendra Nagar Colony, Kharmanghat, Hyderabad",
    localContent: {
      intro: "Kharmanghat is a residential locality in south Hyderabad situated between LB Nagar and Sagar Ring Road, known for its older independent house colonies like Sri Raghavendra Nagar and Padma Nagar. The area has a large population of retired government employees and middle-aged homeowners who commonly present with knee osteoarthritis from years of stair climbing, chronic lower back pain, and age-related balance disorders. Younger residents working in the Shamshabad airport corridor and Adibatla industrial zone often seek treatment for occupational back strain and commute-related neck stiffness.",
      whyLocal: "Our Kharmanghat home visit service operates from Karmanghat Road, covering Sri Raghavendra Nagar Colony, Padma Nagar Colony, Sagar Ring Road apartments, and the adjacent Champapet area. The south Hyderabad road network can be challenging for elderly patients — narrow lanes, speed bumps, and limited auto-rickshaw availability make clinic visits difficult. Our home visit model eliminates this barrier entirely. We bring TENS, ultrasound, and manual therapy tools to your door, and our therapists are experienced with the specific mobility challenges faced by residents of older two-storey independent houses.",
      accessibility: "Kharmanghat is accessible via the Sagar Ring Road and Karmanghat X Roads bus stop, with TSRTC buses running frequently from LB Nagar, Dilsukhnagar, and Mehdipatnam. Our physiotherapists reach most Kharmanghat addresses within 25 minutes. We offer dedicated geriatric physiotherapy packages with thrice-weekly sessions for knee replacement recovery and stroke rehabilitation — conditions that are particularly common in this area's senior population."
    }
  },
  "abids": {
    name: "Abids",
    fullName: "Legend Physiotherapy Home Visit Service | Abids, Hyderabad",
    type: "Home Visit",
    title: "Legend Physiotherapy Home Visit Service abids",
    phone: "+91 99661 93413",
    whatsapp: "919966193413",
    address: "3rd Floor, Triveni Complex, Swapna Theater, Abids Road, opposite Santhosh, Sultan Bazar, Abids, Hyderabad, Telangana 500001",
    mapEmbed: "https://maps.google.com/maps?q=3rd+Floor+Triveni+Complex+Swapna+Theater+Abids+Road+opposite+Santhosh+Sultan+Bazar+Abids+Hyderabad+Telangana+500001&output=embed",
    mapPins: [
      {
        lat: 17.3900,
        lng: 78.4730,
        label: "Legend Physiotherapy � Abids",
        address: "3rd Floor, Triveni Complex, Swapna Theater, Abids Road, opposite Santhosh, Sultan Bazar, Abids, Hyderabad",
        phone: "+91 99661 93413"
      }
    ],
    description: "Legend Physiotherapy's Abids centre is located on the 3rd Floor of Triveni Complex, Abids Road, opposite Santhosh, Sultan Bazar � in the heart of central Hyderabad. We serve patients across Abids, Sultan Bazar, Koti, Nampally, and Lakdi Ka Pul. Our physiotherapists are experts in treating chronic pain, post-surgical rehabilitation, and neurological conditions. The Abids location also provides home visit services for patients who prefer treatment at home. With central Hyderabad's best connectivity, reaching us is easy from any part of the city.",
    seoDescription: "Professional physiotherapy clinic & home visit service in Abids, Hyderabad. Legend Physiotherapy at Triveni Complex, Abids Road. Expert treatment for back pain, knee pain, and rehabilitation.",
    highlights: [
      "Centrally located at Triveni Complex, Abids Road",
      "Serving Abids, Sultan Bazar, Koti & Nampally",
      "Home visit service also available",
      "Expert in chronic pain & post-surgical rehab",
      "Easy access from all parts of Hyderabad"
    ],
    conditions: [
      "Chronic back pain & sciatica",
      "Knee pain & osteoarthritis",
      "Neck & shoulder pain",
      "Post-operative rehabilitation",
      "Sports injuries",
      "Neurological rehabilitation",
      "Frozen shoulder",
      "Postural disorders"
    ],
    services: [
      "Clinic & home visit physiotherapy",
      "Manual therapy",
      "TENS & electrotherapy",
      "Ultrasound therapy",
      "Exercise rehabilitation",
      "Postural correction"
    ],
    nearby: "Triveni Complex, Abids Road, opposite Santhosh, Sultan Bazar, Abids, Hyderabad",
    localContent: {
      intro: "Abids is the historic commercial heart of Hyderabad, home to the iconic GPO, Sultan Bazar wholesale market, and Chermas shopping street. Thousands of shopkeepers, office workers, and daily-wage labourers pass through Abids every day, many carrying chronic musculoskeletal problems they never address due to time constraints. Common conditions here include standing-related varicose vein complications, lower back pain from lifting heavy goods in Sultan Bazar, chronic neck strain among banking and insurance professionals on Bank Street, and knee degeneration in the elderly residents of the Koti and Nampally colonies.",
      whyLocal: "Our Abids centre at Triveni Complex sits right on Abids Road opposite Santhosh, making it one of the most centrally accessible physiotherapy locations in Hyderabad. Patients from Sultan Bazar, Koti, Nampally, Lakdi Ka Pul, and Basheerbagh can reach us within 10 minutes. For patients who cannot visit — particularly elderly residents in the narrow-lane old city quarters nearby — we provide home visit services with the same portable clinical equipment used across all our locations.",
      accessibility: "Abids benefits from exceptional public transport connectivity: the Nampally MMTS station is a 5-minute walk, Abids Road is served by dozens of TSRTC bus routes, and the upcoming Metro corridor will further improve access. Our location at Triveni Complex, 3rd floor, has lift access for patients with mobility difficulties. We offer lunchtime appointment slots popular with office workers from Bank Street and Basheerbagh who can complete a 45-minute session during their break."
    }
  },
  "himayatnagar": {
    name: "Himayatnagar",
    fullName: "Legend Physiotherapy � Physiotherapy Clinic in Himayatnagar, Hyderabad",
    type: "Home Visit",
    title: "Legend Physiotherapy - physio therapy center & physiotherapy clinic in Himayatnagar",
    phone: "+91 99661 93413",
    whatsapp: "919966193413",
    address: "3-6-459/A, Street No. 5, beside Hyundai Showroom, Devi Laxmi Bagh, Domalguda, Himayatnagar, Hyderabad, Telangana 500029",
    mapEmbed: "https://maps.google.com/maps?q=3-6-459+Street+No.+5+beside+Hyundai+Showroom+Devi+Laxmi+Bagh+Domalguda+Himayatnagar+Hyderabad+Telangana+500029&output=embed",
    mapPins: [
      {
        lat: 17.4050,
        lng: 78.4820,
        label: "Branch 1 � Domalguda, beside Hyundai Showroom",
        address: "3-6-459/A, Street No. 5, beside Hyundai Showroom, Devi Laxmi Bagh, Domalguda, Himayatnagar",
        phone: "+91 99661 93413"
      },
      {
        lat: 17.4030,
        lng: 78.4800,
        label: "Branch 2 � Himayat Nagar Rd, New SBH Colony",
        address: "3-6-203, Himayat Nagar Rd, New SBH Colony, AP State Housing Board, Himayatnagar",
        phone: "+91 99661 93413"
      }
    ],
    description: "Legend Physiotherapy operates two branches in Himayatnagar, making it the most accessible physiotherapy provider in central Hyderabad. Branch 1 is located at 3-6-459/A, Street No. 5, beside the Hyundai Showroom, Devi Laxmi Bagh, Domalguda. Branch 2 is at 3-6-203, Himayat Nagar Road, New SBH Colony, AP State Housing Board. Together, these two centres serve patients across Himayatnagar, Domalguda, Narayanguda, Himayath Nagar, and Basheerbagh. Our expert physiotherapists treat orthopaedic and neurological conditions using advanced manual therapy, electrotherapy, and customised rehabilitation programmes. Home visit services are also available for patients who prefer treatment at home.",
    seoDescription: "Professional physiotherapy clinic in Himayatnagar, Hyderabad. Two branches � Domalguda & Himayat Nagar Rd. Expert treatment for back pain, knee pain, sports injuries, and neuro rehab. Book now.",
    highlights: [
      "Two branches in Himayatnagar � Domalguda & Himayat Nagar Rd",
      "Expert physiotherapists led by Dr. Sirish",
      "Advanced manual therapy & electrotherapy",
      "Home visit service also available",
      "Serving Himayatnagar, Domalguda & Narayanguda",
      "Open 7 days a week"
    ],
    conditions: [
      "Chronic back pain & sciatica",
      "Knee pain & osteoarthritis",
      "Neck & shoulder pain",
      "Frozen shoulder",
      "Sports injuries",
      "Post-operative rehabilitation",
      "Stroke & neurological rehabilitation",
      "Postural disorders"
    ],
    services: [
      "Clinic & home visit physiotherapy",
      "Manual therapy & mobilisation",
      "TENS & IFT electrotherapy",
      "Ultrasound therapy",
      "Dry needling",
      "Exercise rehabilitation",
      "Neurological physiotherapy"
    ],
    nearby: "Domalguda & Himayat Nagar Rd, Himayatnagar, Hyderabad",
    clinicBenefit: "Two conveniently located branches in Himayatnagar ensure you are always close to expert physiotherapy care.",
    localContent: {
      intro: "Himayatnagar is one of Hyderabad's most sought-after central residential areas, known for its tree-lined streets, popular restaurants along Himayat Nagar Road, and proximity to the Assembly and Secretariat. The neighbourhood houses a mix of professionals, government employees, and affluent families who value convenience and quality healthcare. Physiotherapy needs here range from cervical spondylosis and frozen shoulder among desk-bound professionals to post-surgical rehabilitation for residents who undergo procedures at nearby hospitals like Care, NIMS, and Yashoda.",
      whyLocal: "With two branches in Himayatnagar — one at Domalguda beside the Hyundai Showroom and another on Himayat Nagar Road at New SBH Colony — we offer unmatched accessibility in central Hyderabad. This dual-branch setup means residents of Domalguda, Narayanguda, Basheerbagh, and Hyderguda are always within 5 minutes of expert physiotherapy. Both branches provide advanced manual therapy, electrotherapy, and dry needling. For patients who prefer home treatment, our therapists cover all of Himayatnagar and the surrounding Nampally, Red Hills, and Khairatabad areas.",
      accessibility: "Both Himayatnagar branches are easily reachable via the Himayatnagar–Domalguda Road, with ample parking near the Hyundai showroom (Branch 1) and along Himayat Nagar Road (Branch 2). TSRTC buses from Secunderabad, Ameerpet, and Dilsukhnagar stop within walking distance. The Lakdi Ka Pul MMTS station is a short auto ride away, and the upcoming Metro connectivity will further improve access. We offer flexible timing from 6 AM to 11 PM at both branches."
    }
  },
  "attapur": {
    name: "Attapur",
    fullName: "Legend Physiotherapy at Home | Expert Physiotherapist near Attapur, Hyderabad",
    type: "Home Visit",
    title: "Legend Physiotherapy at Home | Expert Physiotherapist near Attapur, Hyderabad",
    phone: "+91 99661 93413",
    whatsapp: "919966193413",
    address: "Pillar No. 13, Janpriya, Anandi Devi Complex, 3-5-1, Upparpally Rd, Hyderguda, Hyderaguda, Hyderabad, Telangana 500048",
    mapEmbed: "https://maps.google.com/maps?q=pillar+no.+13+janpriya+Anandi+Devi+complex+3-5-1+Upparpally+Rd+Hyderguda+Hyderaguda+Hyderabad+Telangana+500048&output=embed",
    mapPins: [
      {
        lat: 17.3510,
        lng: 78.4450,
        label: "Legend Physiotherapy � Attapur / Hyderguda",
        address: "Pillar No. 13, Janpriya, Anandi Devi Complex, Upparpally Rd, Hyderguda, Hyderabad",
        phone: "+91 99661 93413"
      }
    ],
    description: "Legend Physiotherapy's Attapur home visit service is based at Anandi Devi Complex, Upparpally Road, Hyderguda � near Pillar No. 13. We serve patients across Attapur, Hyderguda, Upparpally, Rajendra Nagar, and Mehdipatnam. Our certified physiotherapists provide expert home visit treatment for back pain, knee pain, post-surgical recovery, and neurological rehabilitation. We bring portable clinical equipment to your home, ensuring you receive the same quality of care as our clinic. Flexible appointment slots are available throughout the day.",
    seoDescription: "Expert physiotherapist near Attapur, Hyderabad. Legend Physiotherapy home visit service at Hyderguda, Upparpally Rd. Expert treatment for back pain, knee pain, and post-surgery rehab.",
    highlights: [
      "Located near Pillar No. 13, Upparpally Rd, Hyderguda",
      "Serving Attapur, Hyderguda & Upparpally",
      "Portable clinical equipment at your home",
      "Flexible appointment slots 6 AM � 11 PM",
      "Expert ortho & neuro physiotherapists"
    ],
    conditions: [
      "Back pain & sciatica",
      "Knee pain & arthritis",
      "Neck & shoulder pain",
      "Post-operative rehabilitation",
      "Sports injuries",
      "Neurological rehabilitation",
      "Frozen shoulder",
      "Elderly mobility & balance"
    ],
    services: [
      "Home visit physiotherapy",
      "Manual therapy",
      "TENS & electrotherapy",
      "Ultrasound therapy",
      "Exercise rehabilitation",
      "Neurological physiotherapy"
    ],
    nearby: "Pillar No. 13, Upparpally Rd, Hyderguda, near Attapur, Hyderabad",
    localContent: {
      intro: "Attapur and Hyderguda are rapidly growing residential areas along the Attapur–Rajendra Nagar corridor in southwest Hyderabad. The neighbourhood runs parallel to the PVNR Expressway pillars, with Pillar No. 13 serving as a well-known local landmark. Residents here include young families in newly built apartment complexes, retired government employees in older Hyderguda colonies, and students from the nearby JNTU and university hostels. Physiotherapy demand in Attapur centres around post-pregnancy recovery for young mothers, knee and hip problems in the elderly, and sports injuries from the active gym and running culture among younger residents.",
      whyLocal: "Our Attapur base at Anandi Devi Complex near Pillar No. 13 on Upparpally Road gives us quick access to the entire Attapur–Rajendra Nagar–Upparpally belt. The PVNR Expressway corridor experiences heavy traffic, especially during office hours, making clinic visits time-consuming for patients. Our home visit service bypasses this completely — our therapists navigate the internal colony roads of Hyderguda and Attapur to reach you within 30 minutes. We carry portable TENS, ultrasound, and manual therapy equipment for a complete session at your home.",
      accessibility: "Attapur is connected by the PVNR Expressway to Mehdipatnam and Tolichowki, and by Upparpally Road to Rajendra Nagar and Shamshabad. TSRTC buses along the expressway stop at Pillar No. 13, right outside our centre. For patients in the apartment towers along the expressway, we offer dedicated floor-by-floor home visit scheduling to serve multiple patients in the same building efficiently. Appointments are available 6 AM to 11 PM, including weekends."
    }
  },
  "mrc-colony": {
    name: "MRC Colony",
    fullName: "Legend Physiotherapy Home Visit Service | MRC Colony, Rock Gardens, Hyderabad",
    type: "Home Visit",
    title: "Legend Physiotherapy - Physio therapy center Home Visit Service",
    phone: "+91 99661 93413",
    whatsapp: "919966193413",
    address: "B/44 Road Number 6, MRC Colony, Rock Gardens, Shop Number 2-3-734, Hyderabad, Telangana 500104",
    mapEmbed: "https://maps.google.com/maps?q=B+44+road+number+6+MRC+colony+rock+gardens+Shop+number+2-3-734+Hyderabad+Telangana+500104&output=embed",
    mapPins: [
      {
        lat: 17.3760,
        lng: 78.5600,
        label: "Legend Physiotherapy � MRC Colony, Rock Gardens",
        address: "B/44 Road Number 6, MRC Colony, Rock Gardens, Hyderabad",
        phone: "+91 99661 93413"
      }
    ],
    description: "Legend Physiotherapy's MRC Colony home visit service is located at B/44, Road Number 6, MRC Colony, Rock Gardens � serving one of Hyderabad's well-established residential communities. We provide expert physiotherapy home visits for patients across MRC Colony, Rock Gardens, Uppal, and Habsiguda. Our therapists specialise in orthopaedic rehabilitation, chronic pain management, and neurological physiotherapy. We bring portable clinical equipment to your home, providing TENS, ultrasound, manual therapy, and personalised exercise programmes.",
    seoDescription: "Expert physiotherapist home visit in MRC Colony, Rock Gardens, Hyderabad. Legend Physiotherapy expert treatment for back pain, knee pain, sports injuries, and neuro rehab.",
    highlights: [
      "Serving MRC Colony, Rock Gardens & Uppal",
      "Portable clinical equipment at your home",
      "Expert ortho & neuro physiotherapists",
      "Flexible appointment timings",
      "Personalised treatment plans"
    ],
    conditions: [
      "Back pain & sciatica",
      "Knee pain & arthritis",
      "Neck & shoulder pain",
      "Post-operative rehabilitation",
      "Sports injuries",
      "Neurological rehabilitation",
      "Frozen shoulder",
      "Elderly mobility"
    ],
    services: [
      "Home visit physiotherapy",
      "Manual therapy",
      "TENS & electrotherapy",
      "Ultrasound therapy",
      "Exercise rehabilitation",
      "Neurological physiotherapy"
    ],
    nearby: "Road Number 6, MRC Colony, Rock Gardens, Hyderabad",
    localContent: {
      intro: "MRC Colony and Rock Gardens are established residential enclaves in east Hyderabad, situated between Uppal and Habsiguda along the Nagole corridor. These colonies are known for their quiet, family-oriented atmosphere and a population that includes many Defence and BHEL retirees alongside younger IT professionals. Common physiotherapy needs include degenerative joint conditions among the sizeable retired community, post-surgical rehabilitation for residents who undergo knee or hip replacements at nearby hospitals, and chronic neck and back pain among software professionals commuting to Uppal's IT parks.",
      whyLocal: "Our MRC Colony service point at B/44, Road Number 6, Rock Gardens puts us in the heart of this residential community. Unlike locations that require navigating main roads, our therapists are based within the colony itself — meaning shorter wait times and familiarity with the local layout. We serve all roads within MRC Colony, Rock Gardens, and extend coverage to Ramanthapur, Uppal Depot, and the apartments along Nagole–Uppal Road. Our therapists bring portable clinical-grade equipment and design treatment plans tailored to the specific needs of this community.",
      accessibility: "MRC Colony is accessible from the Nagole Metro terminus (10-minute auto ride) and the Uppal Ring Road. Internal colony roads are well-maintained, making home visits straightforward even for ground-floor independent houses. We offer morning physiotherapy sessions starting at 6 AM — popular with retirees who prefer early treatment — and evening slots from 6 PM to 9 PM for working professionals returning from Uppal and HITEC City."
    }
  },
  "jubilee-hills": {
    name: "Jubilee Hills",
    fullName: "Legend Physiotherapy Home Visit Service Near Jubilee Hills, Hyderabad",
    type: "Home Visit",
    title: "Legend Physiotherapy Home Visit Service Near Jubilee Hills, Hyderabad",
    phone: "+91 79977 46927",
    whatsapp: "917997746927",
    address: "107, Rd Number 44, Kavuri Hills, Madhapur, Jubilee Hills, Hyderabad, Telangana 500034",
    mapEmbed: "https://maps.google.com/maps?q=107+Rd+Number+44+Kavuri+Hills+Madhapur+Jubilee+Hills+Hyderabad+Telangana+500034&output=embed",
    mapPins: [
      {
        lat: 17.4100,
        lng: 78.3980,
        label: "Legend Physiotherapy � Jubilee Hills / Kavuri Hills",
        address: "107, Rd Number 44, Kavuri Hills, Madhapur, Jubilee Hills, Hyderabad",
        phone: "+91 79977 46927"
      }
    ],
    description: "Legend Physiotherapy's Jubilee Hills home visit service is based at Road Number 44, Kavuri Hills, Madhapur � serving the premium residential and commercial areas of Jubilee Hills, Kavuri Hills, Madhapur, and Banjara Hills. Our certified physiotherapists provide discreet, professional home visit treatment for back pain, neck pain, sports injuries, post-surgical recovery, and neurological rehabilitation. We bring portable clinical-grade equipment to your home, ensuring a complete clinical experience. Flexible appointment slots are available to suit your busy schedule.",
    seoDescription: "Expert physiotherapist near Jubilee Hills, Hyderabad. Legend Physiotherapy home visit at Kavuri Hills, Rd No. 44. Expert treatment for back pain, sports injuries, and post-surgery rehab.",
    highlights: [
      "Located at Kavuri Hills, Road No. 44, Madhapur",
      "Serving Jubilee Hills, Kavuri Hills & Banjara Hills",
      "Discreet, professional home visit service",
      "Portable clinical-grade equipment",
      "Flexible appointment slots"
    ],
    conditions: [
      "Chronic back pain & sciatica",
      "Knee pain & sports injuries",
      "Neck & shoulder pain",
      "Post-operative rehabilitation",
      "Frozen shoulder",
      "Neurological rehabilitation",
      "Postural correction",
      "Ergonomic-related pain"
    ],
    services: [
      "Home visit physiotherapy",
      "Manual therapy & mobilisation",
      "TENS & electrotherapy",
      "Ultrasound therapy",
      "Sports injury rehabilitation",
      "Exercise therapy"
    ],
    nearby: "Rd Number 44, Kavuri Hills, Madhapur, Jubilee Hills, Hyderabad",
    localContent: {
      intro: "Jubilee Hills is Hyderabad's premier residential district, home to film industry professionals, corporate executives, and affluent families living in independent bungalows and luxury villas across Roads 1 through 92. The area around Kavuri Hills and Road No. 44 where we operate bridges Jubilee Hills with Madhapur's tech corridor. Physiotherapy needs here are diverse — from post-cosmetic surgery recovery and sports injuries among fitness-conscious residents to geriatric rehabilitation for elderly parents living in large homes while their children work abroad.",
      whyLocal: "Our Jubilee Hills home visit service is designed for discretion and convenience that matches the neighbourhood's expectations. Our therapists arrive in professional attire with portable clinical equipment, conduct sessions in your private space, and maintain complete confidentiality. We cover all of Jubilee Hills including Road No. 36 (Film Nagar), Road No. 45 (Peddamma Temple area), Kavuri Hills, and the gated communities along Road No. 10 and Road No. 12. For patients recovering from orthopaedic procedures at nearby hospitals like Apollo, Continental, and KIMS, we coordinate directly with your surgeon for an aligned rehabilitation plan.",
      accessibility: "Jubilee Hills is well-connected via Road No. 36 to Banjara Hills and via Kavuri Hills to Madhapur and HITEC City. Our base on Road No. 44, Kavuri Hills allows us to reach any part of Jubilee Hills within 15 minutes. We offer flexible scheduling including weekend sessions and can accommodate urgent requests for post-surgical patients. For residents in gated communities, we coordinate entry in advance so sessions start on time without delays."
    }
  },
  "kompally": {
    name: "Kompally",
    fullName: "Legend Physiotherapy | Expert Physiotherapist & Rehabilitation Services near Kompally, Hyderabad",
    type: "Home Visit",
    title: "Legend Physiotherapy | Expert Physiotherapist And Rehabilitation Services Near | Kompally | Hyderabad",
    phone: "+91 99661 93413",
    whatsapp: "919966193413",
    address: "Plot No. 34, 34/A, Medchal Rd, Petbasheerabad, NCL Enclave South, Caton Residential Twp, Kompally, Secunderabad, Telangana 500055",
    mapEmbed: "https://maps.google.com/maps?q=Plot+No.+34+34A+Medchal+Rd+Petbasheerabad+NCL+Enclave+South+Caton+Residential+Twp+Kompally+Secunderabad+Telangana+500055&output=embed",
    mapPins: [
      {
        lat: 17.4600,
        lng: 78.4650,
        label: "Legend Physiotherapy � Kompally",
        address: "Plot No. 34, 34/A, Medchal Rd, Petbasheerabad, NCL Enclave South, Kompally, Secunderabad",
        phone: "+91 99661 93413"
      }
    ],
    description: "Legend Physiotherapy's Kompally branch is located at Plot No. 34, Medchal Road, Petbasheerabad, NCL Enclave South � serving the rapidly growing residential communities of Kompally, Suchitra, Petbasheerabad, and Medchal Road corridor. Our expert physiotherapists provide comprehensive rehabilitation services for orthopaedic and neurological conditions. We specialise in post-surgical recovery, sports injury rehabilitation, geriatric physiotherapy, and chronic pain management. Home visit services are available across Kompally and surrounding areas with portable clinical equipment.",
    seoDescription: "Expert physiotherapist near Kompally, Hyderabad. Legend Physiotherapy at Medchal Rd, Petbasheerabad. Expert rehabilitation for back pain, knee pain, sports injuries, and post-surgery recovery.",
    highlights: [
      "Located at Medchal Rd, Petbasheerabad, NCL Enclave",
      "Serving Kompally, Suchitra & Petbasheerabad",
      "Expert in geriatric & post-surgical rehabilitation",
      "Portable clinical equipment for home visits",
      "Comprehensive ortho & neuro rehab programmes"
    ],
    conditions: [
      "Chronic back pain & sciatica",
      "Knee pain & osteoarthritis",
      "Neck & shoulder pain",
      "Post-operative rehabilitation",
      "Sports injuries",
      "Stroke & neurological rehabilitation",
      "Geriatric mobility & balance",
      "Frozen shoulder"
    ],
    services: [
      "Home visit physiotherapy",
      "Manual therapy",
      "TENS & electrotherapy",
      "Ultrasound therapy",
      "Geriatric rehabilitation",
      "Exercise therapy"
    ],
    nearby: "Medchal Rd, Petbasheerabad, NCL Enclave South, Kompally, Secunderabad",
    localContent: {
      intro: "Kompally is one of Hyderabad's fastest-growing northern suburbs, stretching along Medchal Road with a mix of gated communities, apartment towers, and plotted developments. The NCL Enclave, Caton Residential Township, and Petbasheerabad colonies house many IT professionals who commute to HITEC City and Gachibowli, as well as retirees who moved here for the relatively quieter environment. Common physiotherapy needs include commute-related back and neck pain from long drives on the Kompally–Secunderabad–HITEC City route, osteoarthritis in the growing senior population, and sports injuries from the active gym and running groups in the gated communities.",
      whyLocal: "Our Kompally service operates from Medchal Road, Petbasheerabad, covering all of Kompally, Suchitra Circle, Bowenpally, and the new developments along the Kompally–Medchal highway. Kompally residents face a genuine challenge accessing quality physiotherapy — most specialist clinics are 45–60 minutes away in Secunderabad or Ameerpet via the congested Medchal Road. Our home visit service brings expert physiotherapy to your doorstep, eliminating the commute entirely. We carry portable TENS, ultrasound, manual therapy tools, and resistance equipment for comprehensive at-home rehabilitation.",
      accessibility: "Kompally is accessible from Secunderabad via Suchitra Circle and from the ORR (Outer Ring Road) via the Medchal interchange. Our therapists navigate internal gated community roads efficiently, arriving within 30 minutes for most Kompally addresses. We offer early morning sessions from 6 AM for professionals heading to work and late evening sessions until 11 PM for those returning from IT offices. Weekend appointments are available for families who prefer joint rehabilitation sessions."
    }
  },
  "secunderabad": {
    name: "Secunderabad",
    fullName: "Legend Physiotherapy at Home | Expert Physiotherapist near Mahendra Hills, Secunderabad",
    type: "Home Visit",
    title: "Legend Physiotherapy at Home | Expert Physiotherapist near Mahendra Hills, Secunderabad",
    phone: "+91 99661 93413",
    whatsapp: "919966193413",
    address: "Government Institute Of Electronics, Dhanalaxmi Colony, Trimoorthy Colony, Coop, East Marredpally, Secunderabad, Telangana 500026",
    mapEmbed: "https://maps.google.com/maps?q=Government+Institute+Of+Electronics+Dhanalaxmi+Colony+Trimoorthy+Colony+East+Marredpally+Secunderabad+Telangana+500026&output=embed",
    mapPins: [
      {
        lat: 17.4200,
        lng: 78.5050,
        label: "Legend Physiotherapy � Mahendra Hills / East Marredpally",
        address: "Dhanalaxmi Colony, Trimoorthy Colony, East Marredpally, Secunderabad",
        phone: "+91 99661 93413"
      }
    ],
    description: "Legend Physiotherapy's Secunderabad home visit service is based near Mahendra Hills, East Marredpally � serving Dhanalaxmi Colony, Trimoorthy Colony, East Marredpally, West Marredpally, Sindhi Colony, and Begumpet. Our certified physiotherapists provide expert home visit treatment for orthopaedic and neurological conditions. We specialise in post-surgical rehabilitation, chronic pain management, and geriatric physiotherapy. Portable clinical equipment is brought to your home for a complete clinical experience.",
    seoDescription: "Expert physiotherapist near Mahendra Hills, Secunderabad. Legend Physiotherapy home visit at East Marredpally. Expert treatment for back pain, knee pain, and post-surgery rehab.",
    highlights: [
      "Serving Mahendra Hills, East Marredpally & Sindhi Colony",
      "Expert in post-surgical & geriatric rehabilitation",
      "Portable clinical equipment at your home",
      "Flexible appointment timings",
      "Certified ortho & neuro physiotherapists"
    ],
    conditions: [
      "Chronic back pain",
      "Knee pain & arthritis",
      "Neck & shoulder pain",
      "Post-operative rehabilitation",
      "Sports injuries",
      "Neurological rehabilitation",
      "Geriatric mobility",
      "Frozen shoulder"
    ],
    services: [
      "Home visit physiotherapy",
      "Manual therapy",
      "TENS & electrotherapy",
      "Ultrasound therapy",
      "Geriatric rehabilitation",
      "Exercise therapy"
    ],
    nearby: "Dhanalaxmi Colony, East Marredpally, near Mahendra Hills, Secunderabad",
    localContent: {
      intro: "Secunderabad's Mahendra Hills and East Marredpally area is one of the twin cities' most established residential zones, with tree-lined avenues, Defence colonies, and a mix of heritage bungalows and modern apartments. The Dhanalaxmi Colony and Trimoorthy Colony neighbourhoods are home to many retired military and government families, along with professionals working in the Secunderabad cantonment area, Begumpet, and Paradise commercial district. Geriatric physiotherapy is in high demand here — knee replacements, hip surgeries, and stroke rehabilitation are common among the area's senior residents.",
      whyLocal: "Our Secunderabad team is based near Mahendra Hills in East Marredpally, giving us direct access to both the East and West Marredpally colonies, Sindhi Colony, Trimulgherry, and the Secunderabad cantonment area. We specialise in geriatric rehabilitation — a critical need in this neighbourhood where many elderly residents live independently or with limited family support. Our therapists are trained to work with post-surgical knee and hip replacement patients, guiding them through progressive mobility exercises at home with patience and clinical precision.",
      accessibility: "East Marredpally is well-connected via Mahendra Hills Road to Secunderabad Railway Station and Begumpet. TSRTC buses from Paradise, Tarnaka, and Kompally stop within walking distance of our Dhanalaxmi Colony base. For patients in the West Marredpally and Sindhi Colony areas, we provide consistent scheduling — the same therapist visits at the same time each session, building continuity and trust that is especially important for elderly patients managing long-term rehabilitation."
    }
  },
  "borabanda": {
    name: "Borabanda",
    fullName: "Legend Physiotherapy Home Visit Service Near Borabanda, Hyderabad",
    type: "Home Visit",
    title: "Legend Physiotherapy Home Visit Service Near Borabanda, Hyderabad",
    phone: "+91 79977 46927",
    whatsapp: "917997746927",
    address: "R.K Society, Borabanda - Allapur Rd, Allapur, Borabanda, Hyderabad, Telangana 500114",
    mapEmbed: "https://maps.google.com/maps?q=R.K+Society+Borabanda+Allapur+Rd+Allapur+Borabanda+Hyderabad+Telangana+500114&output=embed",
    mapPins: [
      {
        lat: 17.4050,
        lng: 78.4280,
        label: "Legend Physiotherapy � Borabanda / Allapur",
        address: "R.K Society, Borabanda - Allapur Rd, Allapur, Borabanda, Hyderabad",
        phone: "+91 79977 46927"
      }
    ],
    description: "Legend Physiotherapy's Borabanda home visit service is located at R.K. Society, Borabanda-Allapur Road � serving Borabanda, Allapur, Erragadda, Sanjeeva Reddy Nagar, and Ameerpet. Our physiotherapists are experts in treating chronic musculoskeletal pain, post-surgical recovery, and neurological conditions. We bring portable clinical equipment to your home, providing TENS, ultrasound, manual therapy, and customised exercise programmes. Flexible appointment slots are available throughout the day.",
    seoDescription: "Expert physiotherapist near Borabanda, Hyderabad. Legend Physiotherapy home visit at Allapur Rd. Expert treatment for back pain, knee pain, sports injuries, and post-surgery rehab.",
    highlights: [
      "Located at R.K. Society, Borabanda-Allapur Rd",
      "Serving Borabanda, Allapur & Erragadda",
      "Portable clinical equipment at your home",
      "Flexible appointment timings",
      "Expert ortho & neuro physiotherapists"
    ],
    conditions: [
      "Back pain & sciatica",
      "Knee pain & arthritis",
      "Neck & shoulder pain",
      "Post-operative rehabilitation",
      "Sports injuries",
      "Neurological rehabilitation",
      "Frozen shoulder",
      "Elderly mobility"
    ],
    services: [
      "Home visit physiotherapy",
      "Manual therapy",
      "TENS & electrotherapy",
      "Ultrasound therapy",
      "Exercise rehabilitation",
      "Neurological physiotherapy"
    ],
    nearby: "R.K. Society, Borabanda - Allapur Rd, Borabanda, Hyderabad",
    localContent: {
      intro: "Borabanda is a densely populated residential area in west-central Hyderabad, nestled between Ameerpet, Erragadda, and Sanjeeva Reddy Nagar. The Allapur and R.K. Society areas house a diverse community of middle-income families, small traders, and working professionals. Borabanda's proximity to the Yousufguda and SR Nagar IT offices means many residents are software professionals dealing with ergonomic-related pain — chronic neck stiffness, lower back strain, and carpal tunnel symptoms from prolonged computer use. The area also has a significant elderly population in the older Allapur colonies who need regular physiotherapy for arthritis and mobility issues.",
      whyLocal: "Our Borabanda home visit service operates from R.K. Society on Borabanda–Allapur Road, providing quick coverage across Borabanda, Allapur, Erragadda, Sanjeeva Reddy Nagar, and Yousufguda. Borabanda's narrow internal lanes and limited parking make clinic visits inconvenient, especially for patients with mobility restrictions. Our home visit model is ideal for this area — therapists arrive with portable equipment and can work in even compact apartment spaces. We design treatment plans that account for the ergonomic challenges specific to this area's IT workforce.",
      accessibility: "Borabanda is accessible from the Erragadda X Roads and Sanjeeva Reddy Nagar via internal colony roads. The Ameerpet Metro station is a short auto ride away. Our therapists are familiar with Borabanda's lane network and reach most addresses within 20 minutes. We offer flexible scheduling including lunchtime sessions for work-from-home professionals and early morning slots for elderly patients who prefer to complete their therapy before the day heats up."
    }
  },
  "begumpet": {
    name: "Begumpet",
    fullName: "Dr. Sirish | Expert Physiotherapist near Begumpet, Secunderabad, Hyderabad",
    type: "Home Visit",
    title: "Dr. SIRISH | Expert Physiotherapist near Secunderabad, Hyderabad",
    phone: "+91 79977 46927",
    whatsapp: "917997746927",
    address: "46, PG Road, opposite Parsi Dharamsala Paradise, Sappu Bagh Apartment, Sindhi Colony, Begumpet, Secunderabad, Hyderabad, Telangana 500003",
    mapEmbed: "https://maps.google.com/maps?q=46+PG+Road+opposite+Parsi+Dharamsala+Paradise+Sappu+Bagh+Apartment+Sindhi+Colony+Begumpet+Secunderabad+Hyderabad+Telangana+500003&output=embed",
    mapPins: [
      {
        lat: 17.4380,
        lng: 78.4780,
        label: "Dr. Sirish � Legend Physiotherapy, Begumpet",
        address: "46, PG Road, opposite Parsi Dharamsala Paradise, Sindhi Colony, Begumpet, Secunderabad",
        phone: "+91 79977 46927"
      }
    ],
    description: "Dr. Sirish's Legend Physiotherapy clinic in Begumpet is located at 46, PG Road, opposite Parsi Dharamsala Paradise, Sindhi Colony � one of Secunderabad's most accessible physiotherapy centres. Dr. Sirish brings over 15 years of expertise in orthopaedic and neurological rehabilitation, treating patients from Begumpet, Sindhi Colony, Ameerpet, Secunderabad, and Marredpally. The clinic offers advanced manual therapy, electrotherapy, dry needling, and customised rehabilitation programmes. Home visit services are also available for patients who prefer treatment at home.",
    seoDescription: "Expert physiotherapist near Begumpet & Secunderabad. Dr. Sirish at Legend Physiotherapy, 46 PG Road, Sindhi Colony. Expert treatment for back pain, knee pain, and neuro rehab. Book now.",
    highlights: [
      "Led by Dr. Sirish � 15+ years ortho & neuro expertise",
      "Located at PG Road, Sindhi Colony, Begumpet",
      "Serving Begumpet, Ameerpet & Secunderabad",
      "Advanced manual therapy & dry needling",
      "Home visit service also available"
    ],
    conditions: [
      "Chronic back pain & sciatica",
      "Knee pain & osteoarthritis",
      "Neck & shoulder pain",
      "Frozen shoulder",
      "Sports injuries",
      "Post-operative rehabilitation",
      "Stroke & neurological rehabilitation",
      "Postural disorders"
    ],
    services: [
      "Clinic & home visit physiotherapy",
      "Manual therapy & mobilisation",
      "TENS & IFT electrotherapy",
      "Dry needling",
      "Ultrasound therapy",
      "Exercise rehabilitation",
      "Neurological physiotherapy"
    ],
    nearby: "46, PG Road, opposite Parsi Dharamsala, Sindhi Colony, Begumpet, Secunderabad",
    clinicBenefit: "Consult directly with Dr. Sirish at our Begumpet clinic or book a home visit across Secunderabad.",
    localContent: {
      intro: "Begumpet is Secunderabad's commercial and transit hub, centred around PG Road (Padmarao Nagar–General Bazaar Road) with the old Begumpet Airport grounds, Sindhi Colony's vibrant community, and the bustling Paradise–Begumpet corridor. The area attracts a mix of business owners from the PG Road commercial strip, office workers from the Rasoolpura and Sindhi Colony corporate offices, and families in the well-maintained Sappu Bagh and Sindhi Colony residential blocks. Physiotherapy demand here includes chronic pain management for business owners who stand or sit for long hours, post-surgical rehabilitation for patients from nearby Yashoda and Continental hospitals, and sports injury treatment for the active tennis and badminton community at the Secunderabad Club.",
      whyLocal: "Dr. Sirish's clinic at 46 PG Road, opposite Parsi Dharamsala, is one of the most accessible physiotherapy centres in the twin cities. Located in Sindhi Colony, it serves walk-in patients from Begumpet, Ameerpet, Paradise, and Marredpally. Dr. Sirish personally oversees complex cases including disc herniation, frozen shoulder, and post-stroke rehabilitation, bringing over 15 years of specialised experience. The clinic offers advanced dry needling and manual therapy techniques that require hands-on expertise not replicable through home visits alone.",
      accessibility: "Begumpet benefits from excellent connectivity — the Begumpet Metro station is a 5-minute walk from our PG Road clinic, and TSRTC buses from Ameerpet, Secunderabad, and Jubilee Hills pass the Parsi Dharamsala stop. For patients who cannot travel, we provide home visit services across the Begumpet–Secunderabad belt with the same clinical standards. The clinic has dedicated appointment slots during lunch hours for nearby office workers and early morning slots for patients who prefer to complete therapy before their workday begins."
    }
  },
  "kokapet": {
    name: "Kokapet",
    fullName: "Legend Physiotherapy at Home | Expert Physiotherapist near Kokapet, Hyderabad",
    type: "Home Visit",
    title: "Legend Physiotherapy at Home | Expert Physiotherapist near kokapet, Hyderabad",
    phone: "+91 99661 93413",
    whatsapp: "919966193413",
    address: "Plot No. 14, Phoenix Greens School Rd, Power Welfare Society, Kokapet, Hyderabad, Telangana 500075",
    mapEmbed: "https://maps.google.com/maps?q=Plot+No+14+Phoenix+Greens+School+Rd+Power+Welfare+Society+Kokapet+Hyderabad+Telangana+500075&output=embed",
    mapPins: [
      {
        lat: 17.3640,
        lng: 78.3450,
        label: "Legend Physiotherapy � Kokapet",
        address: "Plot No. 14, Phoenix Greens School Rd, Power Welfare Society, Kokapet, Hyderabad",
        phone: "+91 99661 93413"
      }
    ],
    description: "Legend Physiotherapy's Kokapet home visit service is located at Plot No. 14, Phoenix Greens School Road, Power Welfare Society � serving the fast-growing residential communities of Kokapet, Narsingi, Financial District, Gachibowli, and Manikonda. Our certified physiotherapists provide expert home visit treatment for back pain, knee pain, post-surgical recovery, sports injuries, and neurological rehabilitation. We bring portable clinical-grade equipment to your home, ensuring a complete clinical experience. Flexible appointment slots are available to suit your schedule.",
    seoDescription: "Expert physiotherapist near Kokapet, Hyderabad. Legend Physiotherapy home visit at Phoenix Greens School Rd. Expert treatment for back pain, knee pain, sports injuries, and post-surgery rehab.",
    highlights: [
      "Located at Phoenix Greens School Rd, Kokapet",
      "Serving Kokapet, Narsingi & Financial District",
      "Portable clinical-grade equipment at your home",
      "Flexible appointment slots 6 AM � 11 PM",
      "Expert ortho & neuro physiotherapists"
    ],
    conditions: [
      "Back pain & sciatica",
      "Knee pain & sports injuries",
      "Neck & shoulder pain",
      "Post-operative rehabilitation",
      "Frozen shoulder",
      "Neurological rehabilitation",
      "Postural correction",
      "Ergonomic-related pain"
    ],
    services: [
      "Home visit physiotherapy",
      "Manual therapy & mobilisation",
      "TENS & electrotherapy",
      "Ultrasound therapy",
      "Sports injury rehabilitation",
      "Exercise therapy"
    ],
    nearby: "Phoenix Greens School Rd, Power Welfare Society, Kokapet, Hyderabad",
    localContent: {
      intro: "Kokapet is one of Hyderabad's newest and most upscale residential corridors, positioned between the Financial District and Narsingi along the ORR (Outer Ring Road). The area has seen explosive growth with premium villa projects, gated communities, and tech-company offices relocating here. Kokapet's residents are predominantly IT professionals, startup founders, and young families who moved for the modern infrastructure and proximity to Financial District workplaces. Common physiotherapy needs include ergonomic-related pain from remote work setups at home, sports injuries from the numerous gyms and CrossFit studios in the area, and post-maternity rehabilitation for the young family demographic.",
      whyLocal: "Our Kokapet team operates from Phoenix Greens School Road in Power Welfare Society, giving us direct access to the villa communities, apartment towers, and gated societies along the Kokapet–Narsingi stretch. Many Kokapet residents relocated from other cities for work and lack established healthcare relationships in Hyderabad — our home visit service provides a consistent, trusted physiotherapy partner from the first session. We specialise in the conditions prevalent in this area: tech-related RSI (repetitive strain injury), CrossFit and gym injuries, and post-pregnancy core strengthening.",
      accessibility: "Kokapet is accessible from the ORR Narsingi exit and via the Kokapet–Gandipet Road. Our therapists reach most Kokapet addresses — including the newer developments beyond Neopolis and My Home Bhooja — within 20 minutes. We extend coverage to Narsingi, Puppalaguda, and parts of Financial District. Appointments are available 7 days a week, with evening slots particularly popular among dual-income families who schedule treatment after their children's school hours."
    }
  },
  "banjara-hills": {
    name: "Banjara Hills",
    fullName: "Dr Sirish | Physiotherapy center | Physiotherapy near Banjara Hills Hyderabad",
    type: "Home Visit",
    title: "Dr Sirish | Physiotherapy center | Physiotherapy near Banjara Hills Hyderabad",
    phone: "+91 99661 93413",
    whatsapp: "919966193413",
    address: "Banjara Hills, Hyderabad, Telangana",
    mapEmbed: "https://maps.google.com/maps?q=Banjara+Hills+Hyderabad+Telangana&t=&z=15&ie=UTF8&iwloc=&output=embed",
    mapPins: [{ lat: 17.4100, lng: 78.4380, label: "Legend Physiotherapy � Banjara Hills", address: "Banjara Hills, Hyderabad", phone: "+91 99661 93413" }],
    description: "Experience premium physiotherapy care in the heart of Banjara Hills. Our specialised home visit services are designed for patients who prefer professional treatment in their own space. We cover all blocks of Banjara Hills, providing expert care for post-operative recovery, sports injuries, and chronic pain management with portable advanced equipment. Our therapists are trained to handle complex orthopaedic and neurological cases with a personalised approach.",
    seoDescription: "Expert physiotherapist home visit in Banjara Hills, Hyderabad. Legend Physiotherapy expert treatment for back pain, sports injuries, and rehabilitation at your doorstep.",
    highlights: ["Expert therapists available in Banjara Hills", "Flexible home visit timings (6 AM - 9 PM)", "Complete rehabilitation equipment brought to your home", "Specialised care for ortho & neuro conditions"],
    conditions: ["Back pain relief", "Neck and shoulder pain", "Sports injuries", "Knee pain management", "Post-operative rehabilitation", "Neurological conditions"],
    services: ["Home visit physiotherapy", "Manual therapy", "TENS & electrotherapy", "Ultrasound therapy", "Sports injury rehab", "Exercise therapy"],
    nearby: "Near Durgam Cheruvu & Road No. 12, Banjara Hills",
    localContent: {
      intro: "Banjara Hills is Hyderabad's most prestigious address, spanning from Road No. 1 near Panjagutta to Road No. 14 near Durgam Cheruvu lake. The neighbourhood is home to film stars, politicians, corporate leaders, and expatriate families living in sprawling bungalows and luxury apartments. Health consciousness runs high here — Banjara Hills has the highest concentration of premium gyms, yoga studios, and wellness centres in the city. Physiotherapy needs are equally sophisticated: post-cosmetic surgery rehabilitation, sports injuries from tennis at the Banjara Hills Club, running injuries from the Durgam Cheruvu jogging track, and geriatric care for elderly parents in large homes.",
      whyLocal: "Our Banjara Hills home visit service covers all road numbers from 1 through 14, including the GVK One mall area, KBR Park periphery, and the residential stretches near Nagarjuna Circle. We understand that privacy and convenience are priorities for Banjara Hills residents — our therapists arrive discreetly, work within your home's private spaces, and maintain strict confidentiality. For patients recovering from orthopaedic procedures at nearby Apollo Hospitals (Jubilee Hills), KIMS, or Continental, we begin home-based rehabilitation within 24 hours of discharge.",
      accessibility: "Banjara Hills is centrally located with Road No. 1 connecting to Panjagutta and Road No. 12 leading to Durgam Cheruvu and HITEC City. Our therapists navigate the area efficiently, reaching most Banjara Hills addresses within 15 minutes. We offer flexible scheduling — including weekend and holiday sessions — and accommodate last-minute appointment changes that are common for the busy professional profiles in this neighbourhood."
    }
  },
  "madhapur": {
    name: "Madhapur",
    fullName: "Legend Physiotherapy Home Visit | Expert Physiotherapist in Madhapur, Hyderabad",
    type: "Home Visit",
    title: "Legend Physiotherapy Home Visit Service | Madhapur",
    phone: "+91 99661 93413",
    whatsapp: "919966193413",
    address: "Madhapur, Hyderabad, Telangana",
    mapEmbed: "https://maps.google.com/maps?q=Madhapur+HITEC+City+Hyderabad+Telangana&t=&z=15&ie=UTF8&iwloc=&output=embed",
    mapPins: [{ lat: 17.4500, lng: 78.3820, label: "Legend Physiotherapy � Madhapur", address: "Madhapur, HITEC City, Hyderabad", phone: "+91 99661 93413" }],
    description: "Serving the IT hub of Hyderabad, our Madhapur home visit service specialises in ergonomic-related pains and corporate health. We provide quick and effective physiotherapy for software professionals dealing with back strain, neck stiffness, and repetitive stress injuries. Our flexible scheduling allows for sessions before or after office hours, and we bring portable clinical equipment to your home or office.",
    seoDescription: "Expert physiotherapist home visit in Madhapur, Hyderabad. Legend Physiotherapy expert treatment for back pain, neck pain, ergonomic injuries, and sports rehab.",
    highlights: ["Serving Madhapur and HITEC City areas", "Ergonomic assessment included", "Late evening slots for IT professionals", "Portable clinical equipment at your home"],
    conditions: ["Muscle strain and sprain", "Ligament injuries", "Joint pain management", "Postural correction", "Ergonomic-related pain", "General rehabilitation"],
    services: ["Home visit physiotherapy", "Manual therapy", "TENS & electrotherapy", "Postural correction", "Ergonomic assessment", "Exercise therapy"],
    nearby: "Near HITEC City & Cyber Towers, Madhapur, Hyderabad",
    localContent: {
      intro: "Madhapur is the beating heart of Hyderabad's IT industry, home to Cyber Towers, Inorbit Mall, and the sprawling HITEC City tech campuses where companies like Microsoft, Google, Amazon, and TCS employ hundreds of thousands. The residential areas around Ayyappa Society, Kavuri Hills Phase 2, and Madhapur Main Road house a young, tech-savvy population working 10-12 hour desk shifts. Ergonomic-related conditions dominate here: chronic neck stiffness from monitor posture, lower back pain from prolonged sitting, carpal tunnel syndrome, and tension headaches. Weekend warriors who hit the gym or play football at the Gachibowli stadium also frequently present with sports injuries.",
      whyLocal: "Our Madhapur home visit service is tailored specifically for IT professionals — we offer pre-office sessions starting at 6 AM, lunchtime appointments for those working from home, and late evening slots after 8 PM for those returning from extended office hours. Our therapists include ergonomic posture assessment as part of every initial evaluation, identifying workstation adjustments that can prevent pain recurrence. We bring portable TENS, manual therapy tools, and resistance equipment to your apartment or even your office cabin if your company permits.",
      accessibility: "Madhapur is connected via the Madhapur Metro station, the HITEC City elevated corridor, and multiple internal roads linking to Kondapur, Gachibowli, and Jubilee Hills. Our therapists reach all of Madhapur including Ayyappa Society, Kavuri Hills, Cyber Towers vicinity, and the apartments behind Inorbit Mall within 20 minutes. WhatsApp booking is the fastest way to schedule — most Madhapur appointments are confirmed within 15 minutes."
    }
  },
  "gachibowli": {
    name: "Gachibowli",
    fullName: "Legend Physiotherapy Home Visit | Expert Physiotherapist in Gachibowli, Hyderabad",
    type: "Home Visit",
    title: "Legend Physiotherapy Home Visit Service | Gachibowli",
    phone: "+91 99661 93413",
    whatsapp: "919966193413",
    address: "Gachibowli, Hyderabad, Telangana",
    mapEmbed: "https://maps.google.com/maps?q=Gachibowli+Financial+District+Hyderabad+Telangana&t=&z=15&ie=UTF8&iwloc=&output=embed",
    mapPins: [{ lat: 17.4400, lng: 78.3480, label: "Legend Physiotherapy � Gachibowli", address: "Gachibowli, Financial District, Hyderabad", phone: "+91 99661 93413" }],
    description: "Gachibowli residents can now access advanced physiotherapy at home. We focus on sports injury recovery and geriatric care for the growing community in Gachibowli and Financial District. Our therapists come equipped with advanced modalities like TENS and Ultrasound to ensure a clinical experience in your living room.",
    seoDescription: "Expert physiotherapist home visit in Gachibowli, Hyderabad. Legend Physiotherapy expert treatment for back pain, sports injuries, and geriatric rehab at your doorstep.",
    highlights: ["Trained therapists in Gachibowli & Financial District", "Full mobile clinic setup at your home", "Geriatric specialised care", "Sports injury experts"],
    conditions: ["Back and neck pain", "Arthritis management", "Sports injury recovery", "Mobility improvement", "Stroke rehabilitation"],
    services: ["Home visit physiotherapy", "Manual therapy", "TENS & electrotherapy", "Ultrasound therapy", "Geriatric rehab", "Sports injury rehab"],
    nearby: "Near Financial District & DLF, Gachibowli, Hyderabad",
    localContent: {
      intro: "Gachibowli has transformed from a quiet suburb into Hyderabad's corporate powerhouse, anchored by the Financial District, the International School of Business (ISB), the University of Hyderabad campus, and the Rajiv Gandhi International Cricket Stadium. The neighbourhood attracts a dual demographic: young professionals working in Financial District offices at Salarpuria, DLF, and Raheja towers, and older residents in established colonies near Gachibowli village. Sports injuries are particularly common here due to the active cricket, football, and marathon culture centred around the Gachibowli Stadium. Geriatric conditions including post-knee replacement recovery are frequent among the elderly in the area's independent house colonies.",
      whyLocal: "Our Gachibowli home visit team focuses on two specialities perfectly matched to this area: sports injury rehabilitation and geriatric care. For younger residents dealing with ACL tears, meniscus injuries, or marathon-related IT band syndrome, we provide structured return-to-sport programmes with progressive loading. For elderly patients recovering from joint replacements performed at nearby Sunshine, Continental, or AIG hospitals, we offer daily rehabilitation sessions during the critical first 6 weeks. Our therapists bring advanced modalities including TENS, ultrasound, and functional training equipment to your home.",
      accessibility: "Gachibowli is accessible from the ORR via the Biodiversity Junction, from Kondapur via Gachibowli–Miyapur Road, and from Mehdipatnam via the Gachibowli flyover. Our therapists cover the entire Gachibowli area including Financial District towers, ISB vicinity, Telecom Nagar, and the residential areas along Gachibowli–Nallagandla Road. Early morning and post-work appointments are most popular, and we accommodate the unpredictable schedules of corporate professionals with same-day rescheduling."
    }
  },
  "kondapur": {
    name: "Kondapur",
    fullName: "Legend Physiotherapy Home Visit | Expert Physiotherapist in Kondapur, Hyderabad",
    type: "Home Visit",
    title: "Legend Physiotherapy Home Visit Service | Kondapur",
    phone: "+91 99661 93413",
    whatsapp: "919966193413",
    address: "Kondapur, Hyderabad, Telangana",
    mapEmbed: "https://maps.google.com/maps?q=Kondapur+Hyderabad+Telangana&t=&z=15&ie=UTF8&iwloc=&output=embed",
    mapPins: [{ lat: 17.4600, lng: 78.3650, label: "Legend Physiotherapy � Kondapur", address: "Kondapur, Hyderabad", phone: "+91 99661 93413" }],
    description: "Our Kondapur home visit service is a preferred choice for families seeking reliable physiotherapy. We specialise in paediatric physiotherapy and post-maternity care in Kondapur. Our team ensures a safe and comfortable environment for treatment, focusing on long-term wellness and preventive exercises.",
    seoDescription: "Expert physiotherapist home visit in Kondapur, Hyderabad. Legend Physiotherapy expert treatment for back pain, knee pain, and family physiotherapy at your doorstep.",
    highlights: ["Experienced therapists serving Kondapur", "Quick 2-hour response for urgent cases", "Holistic treatment approach", "Family-centric physiotherapy"],
    conditions: ["Lower back pain", "Upper back pain", "Shoulder injuries", "Knee joint problems", "Neurological conditions"],
    services: ["Home visit physiotherapy", "Manual therapy", "TENS & electrotherapy", "Paediatric physiotherapy", "Post-maternity rehab", "Exercise therapy"],
    nearby: "Near Kondapur RTO & Botanical Garden, Hyderabad",
    localContent: {
      intro: "Kondapur is a thriving residential suburb that bridges Madhapur's IT corridor with the Gachibowli Financial District, making it one of the most sought-after areas for tech professionals and families. The neighbourhood spans from the Kondapur RTO Office and Botanical Garden to the bustling Kondapur Main Road lined with restaurants, supermarkets, and schools. With a young, family-oriented population, Kondapur sees high demand for paediatric physiotherapy, post-maternity recovery, and preventive wellness programmes. The area's IT workforce also presents frequently with the desk-job trifecta: lower back pain, cervical spondylosis, and repetitive strain injuries.",
      whyLocal: "Our Kondapur home visit service is designed for the family-centric community here. We offer paediatric physiotherapy for developmental delays and sports injuries in school-age children, post-maternity core rehabilitation for new mothers, and ergonomic consultations for work-from-home professionals — all at your doorstep. Our therapists understand the apartment layouts common in Kondapur's high-rise buildings (Aparna, My Home, Ramky complexes) and can set up effective treatment sessions in living rooms and bedrooms. We also provide couple sessions for dual-income families who both need physiotherapy but struggle to find separate appointment times.",
      accessibility: "Kondapur is connected via the Kondapur Metro station to Ameerpet and beyond, and by road to Gachibowli, Madhapur, and Kukatpally via the Kondapur–KPHB corridor. The Botanical Garden and Kondapur RTO serve as local landmarks near our coverage zone. Our therapists reach most Kondapur addresses within 20 minutes, including the newer developments along the Kondapur–Nallagandla stretch. Weekend family sessions are a popular option — book via WhatsApp for priority scheduling."
    }
  },
  "kukatpally": {
    name: "Kukatpally",
    fullName: "Legend Physiotherapy Home Visit | Expert Physiotherapist in Kukatpally, Hyderabad",
    type: "Home Visit",
    title: "Legend Physiotherapy Home Visit Service | Kukatpally",
    phone: "+91 99661 93413",
    whatsapp: "919966193413",
    address: "Kukatpally, Hyderabad, Telangana",
    mapEmbed: "https://maps.google.com/maps?q=Kukatpally+KPHB+Hyderabad+Telangana&t=&z=15&ie=UTF8&iwloc=&output=embed",
    mapPins: [{ lat: 17.4850, lng: 78.4080, label: "Legend Physiotherapy � Kukatpally", address: "Kukatpally, KPHB, Hyderabad", phone: "+91 99661 93413" }],
    description: "Legend Physiotherapy provides extensive coverage in Kukatpally, offering home visits for all age groups. We are known for our effective stroke rehabilitation and joint replacement recovery programmes in the Kukatpally area. Our therapists work closely with patients to regain independence and mobility.",
    seoDescription: "Expert physiotherapist home visit in Kukatpally, Hyderabad. Legend Physiotherapy expert treatment for back pain, stroke rehab, and post-surgery recovery at your doorstep.",
    highlights: ["Licensed therapists in Kukatpally & KPHB", "Post-surgery specialist team", "Modern exercise equipment at home", "Affordable long-term packages"],
    conditions: ["Occupational pain", "Sports injuries", "Post-operative care", "Chronic pain management", "Stroke rehabilitation"],
    services: ["Home visit physiotherapy", "Manual therapy", "TENS & electrotherapy", "Stroke rehabilitation", "Post-surgical rehab", "Exercise therapy"],
    nearby: "Near KPHB Metro & Forum Mall, Kukatpally, Hyderabad",
    localContent: {
      intro: "Kukatpally and KPHB (Kukatpally Housing Board Colony) form one of Hyderabad's largest and most populated residential zones, stretching from the Forum Mall area to Moosapet and Balanagar. The neighbourhood is a mix of the original KPHB plotted development — now a mature colony with many retired homeowners — and newer high-rise apartment complexes housing IT professionals. Kukatpally's physiotherapy needs are diverse: stroke rehabilitation and geriatric mobility for the older KPHB population, post-joint-replacement recovery for patients from nearby KIMS and Aster hospitals, and occupational pain management for the large IT workforce commuting to HITEC City and Gachibowli.",
      whyLocal: "Our Kukatpally team covers all phases of KPHB Colony (Phase 1 through Phase 15), Kukatpally Main Road, Pragathi Nagar, and the apartment clusters near Forum Mall. We are known for our stroke rehabilitation and post-surgery recovery programmes in this area, working with patients from the initial bed-bound stage through to independent walking. Our therapists bring portable equipment including TENS, ultrasound, and resistance training tools — essential for the progressive rehabilitation that joint replacement and stroke recovery demand. We coordinate with orthopaedic surgeons at KIMS and Sunshine hospitals for aligned treatment protocols.",
      accessibility: "Kukatpally is exceptionally well-connected with the KPHB Colony Metro station, JNTU Metro station, and multiple TSRTC bus routes along Kukatpally Main Road. Forum Mall and Manjeera Mall serve as local landmarks. Our therapists navigate the KPHB phase system efficiently, reaching most addresses within 25 minutes. We offer affordable long-term packages specifically designed for stroke and post-surgical patients who need 3-6 months of regular sessions — a common requirement in this area's patient profile."
    }
  },
  "miyapur": {
    name: "Miyapur",
    fullName: "Legend Physiotherapy Home Visit | Expert Physiotherapist in Miyapur, Hyderabad",
    type: "Home Visit",
    title: "Legend Physiotherapy Home Visit Service | Miyapur",
    phone: "+91 99661 93413",
    whatsapp: "919966193413",
    address: "Miyapur, Hyderabad, Telangana",
    mapEmbed: "https://maps.google.com/maps?q=Miyapur+Hyderabad+Telangana&t=&z=15&ie=UTF8&iwloc=&output=embed",
    mapPins: [{ lat: 17.4950, lng: 78.3580, label: "Legend Physiotherapy � Miyapur", address: "Miyapur, Hyderabad", phone: "+91 99661 93413" }],
    description: "Our Miyapur home visit services cater to the growing residential communities along the Miyapur-Bachupally corridor. We provide expert care for arthritis management and mobility issues, ensuring that elderly patients receive compassionate and effective treatment in the comfort of their homes.",
    seoDescription: "Expert physiotherapist home visit in Miyapur, Hyderabad. Legend Physiotherapy expert treatment for back pain, arthritis, and geriatric rehab at your doorstep.",
    highlights: ["Certified therapists serving Miyapur", "Home visit convenience", "Comprehensive assessment", "Geriatric care specialists"],
    conditions: ["Pain management", "Injury rehabilitation", "Joint care", "Muscle therapy", "Balance and coordination"],
    services: ["Home visit physiotherapy", "Manual therapy", "TENS & electrotherapy", "Geriatric rehab", "Balance therapy", "Exercise therapy"],
    nearby: "Near Miyapur Metro & Allwyn X Roads, Hyderabad",
    localContent: {
      intro: "Miyapur marks the western terminus of Hyderabad's Metro Red Line and serves as a gateway to the Bachupally, Chandanagar, and Patancheru residential belt. The area has seen rapid apartment development along the Miyapur–Bachupally corridor, attracting IT professionals, young families, and retirees who moved for affordable housing near the HITEC City tech zone. The Allwyn Colony — one of Miyapur's oldest neighbourhoods — has a particularly high proportion of elderly residents who need regular physiotherapy for arthritis management, balance disorders, and post-surgical recovery. Younger residents frequently present with gym injuries and running-related conditions from the popular jogging tracks along Miyapur Lake.",
      whyLocal: "Our Miyapur home visit service is especially valuable in this area because the nearest specialist physiotherapy clinics are 30-40 minutes away in Kukatpally or Madhapur. We fill this gap by bringing clinical-grade physiotherapy directly to homes in Miyapur, Allwyn Colony, Bachupally, Chandanagar, and the new gated communities along the Miyapur–Patancheru Road. Our geriatric care programme is particularly popular here — we work with elderly patients on fall prevention, joint mobility, and functional independence, conditions that the Allwyn Colony's senior population presents with frequently.",
      accessibility: "Miyapur Metro station provides excellent connectivity to the rest of Hyderabad, and the Allwyn X Roads junction connects to Kukatpally, Chandanagar, and the ORR. Our therapists reach most Miyapur addresses within 25 minutes, covering everything from the Allwyn Colony independent houses to the newer apartment towers along the metro corridor. We offer consistent scheduling for long-term patients — the same therapist at the same time — which is particularly valued by elderly patients and their families."
    }
  },
  "ameerpet": {
    name: "Ameerpet",
    fullName: "Legend Physiotherapy Home Visit | Expert Physiotherapist in Ameerpet, Hyderabad",
    type: "Home Visit",
    title: "Legend Physiotherapy Home Visit Service | Ameerpet",
    phone: "+91 99661 93413",
    whatsapp: "919966193413",
    address: "Ameerpet, Hyderabad, Telangana",
    mapEmbed: "https://maps.google.com/maps?q=Ameerpet+Hyderabad+Telangana&t=&z=15&ie=UTF8&iwloc=&output=embed",
    mapPins: [{ lat: 17.4380, lng: 78.4480, label: "Legend Physiotherapy � Ameerpet", address: "Ameerpet, Hyderabad", phone: "+91 99661 93413" }],
    description: "Expert physiotherapy services at your doorstep in Ameerpet. Our therapists are trained in the latest rehabilitation techniques, specifically targeting occupational-related pains common in this bustling commercial hub. We bring portable equipment to provide a complete clinical experience.",
    seoDescription: "Expert physiotherapist home visit in Ameerpet, Hyderabad. Legend Physiotherapy expert treatment for back pain, occupational injuries, and rehabilitation at your doorstep.",
    highlights: ["Trained therapists in Ameerpet & SR Nagar", "Customised treatment plans", "Equipment brought to your home", "Professional follow-ups and progress monitoring"],
    conditions: ["Muscle strains", "Joint injuries", "Pain management", "Rehabilitation services", "Preventive therapy"],
    services: ["Home visit physiotherapy", "Manual therapy", "TENS & electrotherapy", "Postural correction", "Exercise therapy", "Preventive physiotherapy"],
    nearby: "Near Ameerpet Cross Roads & Metro, Hyderabad",
    localContent: {
      intro: "Ameerpet is Hyderabad's coaching and education hub, famous for its concentration of computer training institutes, competitive exam coaching centres, and skill development academies. The Ameerpet Cross Roads area and nearby SR Nagar, Balkampet, and Sanathnagar host thousands of students and young professionals who spend long hours in cramped classrooms and at computer screens. Occupational-related conditions dominate here: forward-head posture from constant screen time, thoracic kyphosis from hunching over textbooks, lower back pain from cheap classroom chairs, and stress-related tension headaches. The residential parts of Ameerpet also house middle-class families with elderly members needing regular physiotherapy for arthritis and mobility issues.",
      whyLocal: "Our Ameerpet home visit service understands the unique demands of this area's population. For students and young professionals, we offer postural correction programmes that include workplace/study-space ergonomic adjustments alongside manual therapy and strengthening exercises. For the elderly population in Ameerpet's residential colonies — particularly the older independent houses along the Balkampet–Sanathnagar stretch — we provide geriatric physiotherapy with a focus on joint mobility, balance training, and pain management. Our therapists carry portable equipment and can conduct effective sessions in compact student PG rooms or apartment spaces.",
      accessibility: "Ameerpet Metro station is the interchange point for Hyderabad's Red and Blue metro lines, making it one of the city's most connected locations. TSRTC buses from virtually every part of Hyderabad pass through Ameerpet Cross Roads. Our therapists serve Ameerpet, SR Nagar, Balkampet, Sanathnagar, and parts of Yousufguda within a 20-minute radius. We offer student-friendly pricing for postural correction packages and flexible timing that accommodates coaching centre schedules — sessions can be booked in the afternoon gap between morning and evening batches."
    }
  },
  "tarnaka": {
    name: "Tarnaka",
    fullName: "Legend Physiotherapy Home Visit | Expert Physiotherapist in Tarnaka, Hyderabad",
    type: "Home Visit",
    title: "Legend Physiotherapy Home Visit Service | Tarnaka",
    phone: "+91 99661 93413",
    whatsapp: "919966193413",
    address: "Tarnaka, Hyderabad, Telangana",
    mapEmbed: "https://maps.google.com/maps?q=Tarnaka+Hyderabad+Telangana&t=&z=15&ie=UTF8&iwloc=&output=embed",
    mapPins: [{ lat: 17.4200, lng: 78.5380, label: "Legend Physiotherapy � Tarnaka", address: "Tarnaka, Hyderabad", phone: "+91 99661 93413" }],
    description: "Quality physiotherapy services available in Tarnaka with expert therapists providing comprehensive care. We serve the academic and residential community of Tarnaka, offering specialised programmes for sports injuries and spine care.",
    seoDescription: "Expert physiotherapist home visit in Tarnaka, Hyderabad. Legend Physiotherapy expert treatment for back pain, sports injuries, and spine care at your doorstep.",
    highlights: ["Certified therapists in Tarnaka & OU area", "Quick booking process", "Modern therapeutic techniques", "Ongoing support and exercise guidance"],
    conditions: ["Back and spine care", "Joint rehabilitation", "Sports injury treatment", "Neurological care", "General physiotherapy"],
    services: ["Home visit physiotherapy", "Manual therapy", "TENS & electrotherapy", "Spine care", "Sports injury rehab", "Exercise therapy"],
    nearby: "Near Tarnaka Metro & OU Campus, Hyderabad",
    localContent: {
      intro: "Tarnaka is a well-established residential and academic neighbourhood in east Hyderabad, anchored by the sprawling Osmania University campus, the Defence Research and Development Organisation (DRDO) complex, and the IICT (Indian Institute of Chemical Technology) campus. The area houses a mix of university faculty, research scientists, defence personnel, and long-term residents in colonies like Vasanth Nagar and Sai Nagar. Physiotherapy needs here are distinct: spinal conditions among researchers who spend decades in laboratory postures, sports injuries from the active athletics and cricket culture at OU grounds, and geriatric rehabilitation for the sizeable retired academic and defence community.",
      whyLocal: "Our Tarnaka home visit team specialises in spine care and sports injury rehabilitation — the two most common needs in this academic-athletic neighbourhood. For OU students and faculty dealing with sports injuries from intercollegiate competitions, we provide structured return-to-sport programmes. For DRDO and IICT professionals with chronic occupational pain, we combine manual therapy with ergonomic workplace recommendations. Our therapists are experienced with the specific challenges of treating patients in Tarnaka's older independent houses, which often have narrow staircases and limited space.",
      accessibility: "Tarnaka Metro station on the Blue Line provides direct connectivity to Ameerpet, Secunderabad, and Nagole. The Tarnaka X Roads bus stop is a major TSRTC junction with routes to all parts of Hyderabad. Our therapists cover Tarnaka, OU Colony, Vidyanagar, and extend to Habsiguda and Nacharam. For patients near the OU campus, we offer campus-adjacent home visits with early morning and post-class scheduling options."
    }
  },
  "uppal": {
    name: "Uppal",
    fullName: "Legend Physiotherapy Home Visit | Expert Physiotherapist in Uppal, Hyderabad",
    type: "Home Visit",
    title: "Legend Physiotherapy Home Visit Service | Uppal",
    phone: "+91 99661 93413",
    whatsapp: "919966193413",
    address: "Uppal, Hyderabad, Telangana",
    mapEmbed: "https://maps.google.com/maps?q=Uppal+Hyderabad+Telangana&t=&z=15&ie=UTF8&iwloc=&output=embed",
    mapPins: [{ lat: 17.4050, lng: 78.5590, label: "Legend Physiotherapy � Uppal", address: "Uppal, Hyderabad", phone: "+91 99661 93413" }],
    description: "Expert physiotherapy services for Uppal area residents with professional home visit options. We are dedicated to providing quality rehabilitation services for musculoskeletal issues and post-surgical recovery in the Uppal region.",
    seoDescription: "Expert physiotherapist home visit in Uppal, Hyderabad. Legend Physiotherapy expert treatment for back pain, knee pain, and post-surgery rehab at your doorstep.",
    highlights: ["Serving Uppal & Habsiguda vicinity", "Experienced and compassionate therapists", "Convenient and punctual home visits", "Affordable pricing for quality care"],
    conditions: ["Back pain", "Shoulder pain", "Knee issues", "Sports injuries", "General rehabilitation"],
    services: ["Home visit physiotherapy", "Manual therapy", "TENS & electrotherapy", "Ultrasound therapy", "Post-surgical rehab", "Exercise therapy"],
    nearby: "Near Uppal Stadium & Metro, Hyderabad",
    localContent: {
      intro: "Uppal is a major residential and commercial centre in east Hyderabad, known for the Uppal Stadium, the busy Uppal Ring Road junction, and the growing IT parks in the Uppal–Ghatkesar corridor. The area has a diverse population: long-time residents in established colonies like Ramanthapur and Nacharam, IT professionals in the newer apartment complexes along the Uppal–Boduppal stretch, and industrial workers from the Nacharam and ECIL manufacturing zones. Common physiotherapy needs include musculoskeletal injuries from factory and warehouse work, chronic back pain among IT professionals, and knee arthritis in the elderly population of Uppal's older residential areas.",
      whyLocal: "Our Uppal home visit service covers a wide radius including Uppal Depot, Boduppal, Peerzadiguda, Nacharam, and Ramanthapur. Uppal is a transit point where the NH-65 highway meets the metro network, which means heavy traffic — especially around the Uppal Ring Road junction — can make clinic visits time-consuming. Our home visit model eliminates this commute, bringing TENS, ultrasound, and manual therapy equipment directly to your home. We work with occupational injury patients from the Nacharam industrial area as well as post-surgical rehabilitation cases from nearby Kamineni and Yashoda hospitals.",
      accessibility: "Uppal Metro station connects to the Blue Line running through Habsiguda, Tarnaka, and onwards to Ameerpet interchange. The Uppal Ring Road provides bus connectivity to LB Nagar, Dilsukhnagar, and Secunderabad. Our therapists reach most Uppal addresses within 25 minutes. We offer affordable physiotherapy packages for industrial workers needing repetitive strain treatment and flexible scheduling for IT professionals with unpredictable work hours."
    }
  },
  "mehdipatnam": {
    name: "Mehdipatnam",
    fullName: "Legend Physiotherapy Home Visit | Expert Physiotherapist in Mehdipatnam, Hyderabad",
    type: "Home Visit",
    title: "Legend Physiotherapy Home Visit Service | Mehdipatnam",
    phone: "+91 99661 93413",
    whatsapp: "919966193413",
    address: "Mehdipatnam, Hyderabad, Telangana",
    mapEmbed: "https://maps.google.com/maps?q=Mehdipatnam+Hyderabad+Telangana&t=&z=15&ie=UTF8&iwloc=&output=embed",
    mapPins: [{ lat: 17.3900, lng: 78.4380, label: "Legend Physiotherapy � Mehdipatnam", address: "Mehdipatnam, Hyderabad", phone: "+91 99661 93413" }],
    description: "Residents of Mehdipatnam can now experience the expertise of Legend Physiotherapy in their own homes. We specialise in comprehensive treatment plans for musculoskeletal pain and sports-related injuries, ensuring a personalised approach for every patient in the Mehdipatnam area.",
    seoDescription: "Expert physiotherapist home visit in Mehdipatnam, Hyderabad. Legend Physiotherapy expert treatment for back pain, sports injuries, and rehabilitation at your doorstep.",
    highlights: ["Experienced team serving Mehdipatnam & Asif Nagar", "Comprehensive and personalised treatment plans", "Professional home visit facilities", "Dedicated patient care and follow-up"],
    conditions: ["Back pain treatment", "Neck care", "Sports injuries", "Joint rehabilitation", "General wellness"],
    services: ["Home visit physiotherapy", "Manual therapy", "TENS & electrotherapy", "Ultrasound therapy", "Sports injury rehab", "Exercise therapy"],
    nearby: "Near Mehdipatnam Rythu Bazar & Pillar No. 10, Hyderabad",
    localContent: {
      intro: "Mehdipatnam is a bustling commercial crossroads in southwest Hyderabad where the PVNR Expressway meets the Mehdipatnam–Tolichowki corridor. The area around the Mehdipatnam bus depot, Rythu Bazar, and Pillar No. 10 is one of the city's busiest transit points, serving commuters heading to Gachibowli, Tolichowki, and the Old City. Residents include shop owners from the busy Mehdipatnam market, students from the nearby Maulana Azad National Urdu University (MANUU) and Osmania University PG hostels, and families in the established Asif Nagar and Humayun Nagar colonies. Standing-related lower limb fatigue, chronic back pain, and sports injuries from the active student population are the most common conditions we treat here.",
      whyLocal: "Our Mehdipatnam home visit team serves the Mehdipatnam–Asif Nagar–Humayun Nagar–Masab Tank belt. The Mehdipatnam junction's notorious traffic congestion — especially during market hours and the evening rush — makes it impractical for patients with pain or mobility issues to visit a distant clinic. We bring comprehensive physiotherapy to your home, including manual therapy, electrotherapy, and functional rehabilitation exercises. For the student population, we offer sports injury programmes covering cricket, football, and volleyball injuries common in the OU and MANUU athletics community.",
      accessibility: "Mehdipatnam is a major TSRTC bus hub with routes connecting to virtually every part of Hyderabad. The PVNR Expressway provides elevated access to Attapur, Rajendra Nagar, and LB Nagar. Our therapists navigate the internal lanes of Asif Nagar and Humayun Nagar efficiently, reaching most addresses within 20 minutes. We offer early morning sessions popular with elderly patients and evening slots for students and working professionals. The Rythu Bazar and Pillar No. 10 are convenient landmarks for describing your location when booking."
    }
  },
  "tolichowki": {
    name: "Tolichowki",
    fullName: "Legend Physiotherapy Home Visit | Expert Physiotherapist in Tolichowki, Hyderabad",
    type: "Home Visit",
    title: "Legend Physiotherapy Home Visit Service | Tolichowki",
    phone: "+91 99661 93413",
    whatsapp: "919966193413",
    address: "Tolichowki, Hyderabad, Telangana",
    mapEmbed: "https://maps.google.com/maps?q=Tolichowki+Hyderabad+Telangana&t=&z=15&ie=UTF8&iwloc=&output=embed",
    mapPins: [{ lat: 17.3850, lng: 78.4180, label: "Legend Physiotherapy � Tolichowki", address: "Tolichowki, Hyderabad", phone: "+91 99661 93413" }],
    description: "Our Tolichowki home visit division provides professional physiotherapy services with a focus on recovery and long-term health. We offer expert treatment for acute and chronic pain, utilising modern therapeutic techniques to ensure optimal outcomes for our patients in Tolichowki.",
    seoDescription: "Expert physiotherapist home visit in Tolichowki, Hyderabad. Legend Physiotherapy expert treatment for back pain, chronic pain, and injury rehab at your doorstep.",
    highlights: ["Serving Tolichowki & Seven Tombs area", "Certified and compassionate therapists", "Modern treatment methods and equipment", "Reliable and punctual service"],
    conditions: ["Acute and chronic pain", "Injury rehabilitation", "Mobility enhancement", "Preventive care", "Recovery support"],
    services: ["Home visit physiotherapy", "Manual therapy", "TENS & electrotherapy", "Ultrasound therapy", "Chronic pain management", "Exercise therapy"],
    nearby: "Near Tolichowki Flyover & Galaxy Theater, Hyderabad",
    localContent: {
      intro: "Tolichowki is a culturally rich residential area in west Hyderabad, known for the historic Golconda Fort nearby, the Seven Tombs (Qutb Shahi Tombs), and the Tolichowki flyover that connects to Mehdipatnam and Gachibowli. The neighbourhood has a significant student population from the English and Foreign Languages University (EFLU), the University of Hyderabad's satellite campus, and numerous international student hostels. Residents also include old Hyderabad families in the Tolichowki village area and professionals working in Gachibowli who chose Tolichowki for its cultural atmosphere and relative affordability. Physiotherapy needs span student sports injuries, chronic pain in the elderly population of old Tolichowki, and commute-related back and neck strain among professionals.",
      whyLocal: "Our Tolichowki home visit service covers Tolichowki Main Road, Seven Tombs Road, Shaikpet, and the residential areas along the Tolichowki–Golconda Fort Road. The area's unique mix of narrow old-city lanes and modern apartment roads requires therapists who know the local geography — our team navigates both efficiently. We provide culturally sensitive care for the diverse Tolichowki community, including female physiotherapists for patients who prefer a lady therapist for home visits. Our chronic pain management programme is well-suited for the elderly population in Tolichowki's traditional residential quarters.",
      accessibility: "Tolichowki is connected via the Tolichowki flyover to Mehdipatnam and via Shaikpet Road to Gachibowli and HITEC City. The Galaxy Theater junction and Tolichowki X Roads are major bus stops with TSRTC routes to Mehdipatnam, Abids, and Secunderabad. Our therapists reach most Tolichowki addresses within 20 minutes, including the lanes behind Golconda Fort and the student accommodation areas near EFLU. We offer flexible scheduling and accommodate same-day requests for urgent pain cases."
    }
  },
  "manikonda": {
    name: "Manikonda",
    fullName: "Legend Physiotherapy Home Visit | Expert Physiotherapist in Manikonda, Hyderabad",
    type: "Home Visit",
    title: "Legend Physiotherapy Home Visit Service | Manikonda",
    phone: "+91 99661 93413",
    whatsapp: "919966193413",
    address: "Manikonda, Hyderabad, Telangana",
    mapEmbed: "https://maps.google.com/maps?q=Manikonda+Hyderabad+Telangana&t=&z=15&ie=UTF8&iwloc=&output=embed",
    mapPins: [{ lat: 17.3980, lng: 78.3780, label: "Legend Physiotherapy – Manikonda", address: "Manikonda, Hyderabad", phone: "+91 99661 93413" }],
    description: "Professional physiotherapy services in Manikonda, delivering expert care to your doorstep. We specialise in back and spine health, ensuring that residents of Manikonda have access to quality rehabilitation services without the need to travel.",
    seoDescription: "Expert physiotherapist home visit in Manikonda, Hyderabad. Legend Physiotherapy expert treatment for back pain, spine care, and post-surgery rehab at your doorstep.",
    highlights: ["Serving Manikonda & Puppalguda area", "Certified and experienced therapists", "Professional and patient-focused service", "Dedicated to long-term recovery"],
    conditions: ["Back and spine pain", "Shoulder and neck issues", "Sports injuries", "Post-operative care", "General rehabilitation"],
    services: ["Home visit physiotherapy", "Manual therapy", "TENS & electrotherapy", "Spine care", "Post-surgical rehab", "Exercise therapy"],
    nearby: "Near Manikonda Jagir & Lanco Hills, Hyderabad",
    localContent: {
      intro: "Manikonda is a rapidly developing residential suburb positioned between Gachibowli and Narsingi, with the Lanco Hills and Aparna Sarovar gated communities as its most prominent landmarks. The area has seen massive apartment construction over the past decade, attracting IT professionals working in the Financial District and Gachibowli. Manikonda Jagir, the older village centre, retains a traditional community alongside the newer developments. Common physiotherapy needs include ergonomic-related conditions among the young IT demographic, post-maternity rehabilitation in the family-oriented apartment communities, and spine and joint care for elderly residents in the Manikonda Jagir traditional area.",
      whyLocal: "Our Manikonda home visit service is tailored for the apartment-dwelling community that makes up most of this area's population. We work effectively in apartment living rooms and bedrooms, bringing portable equipment for complete rehabilitation sessions. For the large number of new mothers in Manikonda's family-oriented gated communities, we offer post-maternity core strengthening and diastasis recti rehabilitation — a growing demand in this young demographic. Our spine care programme addresses the disc herniation and chronic lower back conditions common among the IT professionals who form the majority of Manikonda's working-age residents.",
      accessibility: "Manikonda is accessible from Gachibowli via the Manikonda–Gachibowli connector road and from the ORR via the Narsingi exit. Lanco Hills, Aparna Sarovar, and My Home Jewel are the major residential landmarks. Our therapists cover all of Manikonda including Puppalguda, the new developments along Manikonda–Narsingi Road, and the Manikonda Jagir village area. We coordinate with gated community security for smooth entry and offer consistent time slots for patients on multi-week rehabilitation programmes."
    }
  },
  "jawahar-nagar": {
    name: "Jawahar Nagar",
    fullName: "Legend Physiotherapy at Home | Expert Physiotherapist near Jawahar Nagar, Hyderabad",
    type: "Home Visit",
    title: "Legend Physiotherapy at Home | Expert Physiotherapist near Jawahar Nagar, Hyderabad",
    phone: "+91 99661 93413",
    whatsapp: "919966193413",
    address: "Jawahar Nagar, Hyderabad, Telangana",
    mapEmbed: "https://maps.google.com/maps?q=Jawahar+Nagar+Hyderabad+Telangana&t=&z=15&ie=UTF8&iwloc=&output=embed",
    mapPins: [{ lat: 17.4250, lng: 78.5150, label: "Legend Physiotherapy – Jawahar Nagar", address: "Jawahar Nagar, Hyderabad", phone: "+91 99661 93413" }],
    description: "Legend Physiotherapy's Jawahar Nagar home visit service provides expert physiotherapy care directly to your doorstep. Our certified physiotherapists specialize in treating back pain, knee pain, neck pain, sports injuries, and post-surgical rehabilitation. We bring portable clinical-grade equipment to your home, ensuring you receive the same quality of care as our clinic. Flexible appointment slots are available throughout the day to suit your schedule.",
    seoDescription: "Expert physiotherapist home visit in Jawahar Nagar, Hyderabad. Legend Physiotherapy expert treatment for back pain, knee pain, sports injuries, and post-surgery rehab at your doorstep.",
    highlights: ["Serving Jawahar Nagar & surrounding areas", "Portable clinical equipment at your home", "Flexible appointment slots 6 AM – 11 PM", "Expert ortho & neuro physiotherapists", "Same-day appointments available"],
    conditions: ["Back pain & sciatica", "Knee pain & arthritis", "Neck & shoulder pain", "Post-operative rehabilitation", "Sports injuries", "Neurological rehabilitation", "Frozen shoulder", "Elderly mobility & balance"],
    services: ["Home visit physiotherapy", "Manual therapy", "TENS & electrotherapy", "Ultrasound therapy", "Exercise rehabilitation", "Neurological physiotherapy"],
    nearby: "Jawahar Nagar, Hyderabad",
    localContent: {
      intro: "Jawahar Nagar is a well-established residential colony in central-north Hyderabad, situated near RTC Cross Roads, Musheerabad, and the Indira Park area. The neighbourhood is known for its spacious independent houses, mature tree-lined streets, and a community that has lived here for generations. Many residents are retired professionals, government employees, and families with elderly members who need regular physiotherapy for age-related conditions. Knee osteoarthritis, lumbar spondylosis, and post-stroke rehabilitation are among the most common conditions we treat in Jawahar Nagar, alongside chronic pain management for residents who have delayed treatment for years.",
      whyLocal: "Our Jawahar Nagar home visit service is especially valuable for the elderly population here — many live in multi-storey independent houses without lifts, making it physically challenging to travel to a clinic. Our therapists come to your home with portable TENS, ultrasound, and manual therapy equipment, conducting comprehensive rehabilitation sessions in familiar surroundings. We cover Jawahar Nagar, Musheerabad, Kachiguda, Bholakpur, and the residential areas around RTC Cross Roads. For patients managing chronic conditions like arthritis or recovering from joint replacements, we offer regular thrice-weekly home visit packages.",
      accessibility: "Jawahar Nagar is centrally located near RTC Cross Roads — one of Hyderabad's busiest transit junctions — with TSRTC buses, MMTS trains (Kachiguda station nearby), and auto-rickshaws providing connectivity to all parts of the city. The Musheerabad Metro station is a short ride away. Our therapists reach most Jawahar Nagar addresses within 20 minutes from our east Hyderabad base. We offer morning sessions from 6 AM that are popular with the area's early-rising retired community."
    }
  },
  "secunderabad-paradise": {
    name: "Secunderabad",
    fullName: "Dr. SIRISH | Expert Physiotherapist near Secunderabad, Hyderabad",
    type: "Clinic & Home Visit",
    title: "Dr. SIRISH | Expert Physiotherapist near Secunderabad, Hyderabad",
    phone: "+91 79977 46927",
    whatsapp: "917997746927",
    address: "46, PG Road, opposite Parsi Dharamsala Paradise, Sappu Bagh Apartment, Sindhi Colony, Begumpet, Secunderabad, Hyderabad, Telangana 500003",
    mapEmbed: "https://maps.google.com/maps?q=46+PG+Road+opposite+Parsi+Dharamsala+Paradise+Sappu+Bagh+Apartment+Sindhi+Colony+Begumpet+Secunderabad+Hyderabad+Telangana+500003&output=embed",
    mapPins: [
      {
        lat: 17.4440,
        lng: 78.4620,
        label: "Dr. Sirish – Legend Physiotherapy, Secunderabad Paradise",
        address: "46, PG Road, opposite Parsi Dharamsala Paradise, Sindhi Colony, Begumpet, Secunderabad",
        phone: "+91 79977 46927"
      }
    ],
    description: "Dr. Sirish's Legend Physiotherapy clinic near Paradise, Secunderabad is located at 46, PG Road, opposite Parsi Dharamsala, Sindhi Colony, Begumpet – one of Secunderabad's most accessible physiotherapy centres. Dr. Sirish brings over 15 years of expertise in orthopaedic and neurological rehabilitation, treating patients from Secunderabad, Paradise, Sindhi Colony, Begumpet, and Marredpally. The clinic offers advanced manual therapy, electrotherapy, dry needling, and customised rehabilitation programmes. Home visit services are also available for patients who prefer treatment at home.",
    seoDescription: "Expert physiotherapist near Secunderabad Paradise. Dr. Sirish at Legend Physiotherapy, 46 PG Road, Sindhi Colony. Expert treatment for back pain, knee pain, and neuro rehab. Book now.",
    highlights: [
      "Led by Dr. Sirish – 15+ years ortho & neuro expertise",
      "Located at PG Road, opposite Paradise, Secunderabad",
      "Serving Secunderabad, Paradise, Begumpet & Sindhi Colony",
      "Advanced manual therapy & dry needling",
      "Clinic & home visit service available",
      "Open 7 days a week"
    ],
    conditions: [
      "Chronic back pain & sciatica",
      "Knee pain & osteoarthritis",
      "Neck & shoulder pain",
      "Frozen shoulder",
      "Sports injuries",
      "Post-operative rehabilitation",
      "Stroke & neurological rehabilitation",
      "Postural disorders"
    ],
    services: [
      "Clinic & home visit physiotherapy",
      "Manual therapy & mobilisation",
      "TENS & IFT electrotherapy",
      "Dry needling",
      "Ultrasound therapy",
      "Exercise rehabilitation",
      "Neurological physiotherapy"
    ],
    nearby: "46, PG Road, opposite Parsi Dharamsala Paradise, Sindhi Colony, Begumpet, Secunderabad",
    clinicBenefit: "Consult directly with Dr. Sirish at our Secunderabad Paradise clinic or book a home visit across Secunderabad.",
    localContent: {
      intro: "The Secunderabad Paradise area is the commercial nerve centre of Secunderabad, anchored by the iconic Paradise Circle, the Secunderabad Railway Station, and the bustling MG Road and SD Road commercial strips. The neighbourhood serves as a daily transit point for hundreds of thousands of commuters while also housing residential communities in Sindhi Colony, Padma Rao Nagar, and the areas behind Paradise Circle. Physiotherapy needs are driven by the area's commercial intensity: lower back pain and varicose vein symptoms among shopkeepers standing all day on MG Road, cervical strain from desk work in the numerous offices around Rasoolpura, and geriatric conditions among the established residential families of Sindhi Colony and Padma Rao Nagar.",
      whyLocal: "Dr. Sirish's clinic at 46 PG Road, opposite Parsi Dharamsala, is strategically positioned for the Secunderabad–Paradise population. This is a clinic-first location — meaning patients can access advanced dry needling, manual therapy, and clinical-grade electrotherapy equipment that home visits cannot replicate. Dr. Sirish personally consults on complex cases including chronic disc herniation, post-stroke spasticity management, and failed conservative treatment cases. For patients unable to visit, we extend home visit coverage across Paradise, MG Road, Marredpally, Trimulgherry, and the Secunderabad cantonment area.",
      accessibility: "Paradise Circle is the most connected point in Secunderabad — the Secunderabad Metro station, Secunderabad Railway Station, and the Jubilee Bus Station are all within a 10-minute radius. Our PG Road clinic is a 5-minute walk from Paradise Circle, opposite the well-known Parsi Dharamsala. Patients arriving by metro or train can reach us without needing auto-rickshaw transport. We offer walk-in consultation with Dr. Sirish during clinic hours (by appointment preferred) and home visit bookings for the broader Secunderabad area."
    }
  },
  "himayatnagar-sbh": {
    name: "Himayatnagar",
    fullName: "Dr Sirish | Professional Physiotherapy center Himayatnagar",
    type: "Clinic & Home Visit",
    title: "Dr Sirish | Professional Physiotherapy center Himayatnagar",
    phone: "+91 99661 93413",
    whatsapp: "919966193413",
    address: "3-6-203, Himayat Nagar Rd, New SBH Colony, AP State Housing Board, Himayatnagar, Hyderabad, Telangana 500029",
    mapEmbed: "https://maps.google.com/maps?q=3-6-203+Himayat+Nagar+Rd+New+SBH+Colony+AP+State+Housing+Board+Himayatnagar+Hyderabad+Telangana+500029&output=embed",
    mapPins: [
      {
        lat: 17.4012,
        lng: 78.4895,
        label: "Dr Sirish – Himayatnagar SBH Colony",
        address: "3-6-203, Himayat Nagar Rd, New SBH Colony, AP State Housing Board, Himayatnagar",
        phone: "+91 99661 93413"
      }
    ],
    description: "Dr Sirish's physiotherapy center at Himayatnagar is located at 3-6-203, Himayat Nagar Road, New SBH Colony, AP State Housing Board – serving patients across Himayatnagar, Narayanguda, and Basheerbagh. This dedicated center provides expert orthopaedic and neurological rehabilitation with advanced manual therapy, electrotherapy, and customised treatment programmes. Dr. Sirish's team specializes in treating chronic pain, post-surgical recovery, sports injuries, and neurological conditions. Home visit services are also available for patients who prefer treatment at home.",
    seoDescription: "Professional physiotherapy center in Himayatnagar SBH Colony. Dr. Sirish at 3-6-203 Himayat Nagar Rd. Expert treatment for back pain, knee pain, sports injuries, and neuro rehab. Book now.",
    highlights: [
      "Led by Dr. Sirish – expert physiotherapist",
      "Located at Himayat Nagar Rd, New SBH Colony",
      "Serving Himayatnagar, Narayanguda & Basheerbagh",
      "Advanced manual therapy & electrotherapy",
      "Clinic & home visit service available",
      "Open 7 days a week, 6 AM – 11 PM"
    ],
    conditions: [
      "Chronic back pain & sciatica",
      "Knee pain & osteoarthritis",
      "Neck & shoulder pain",
      "Frozen shoulder",
      "Sports injuries",
      "Post-operative rehabilitation",
      "Stroke & neurological rehabilitation",
      "Postural disorders"
    ],
    services: [
      "Clinic & home visit physiotherapy",
      "Manual therapy & mobilisation",
      "TENS & IFT electrotherapy",
      "Ultrasound therapy",
      "Dry needling",
      "Exercise rehabilitation",
      "Neurological physiotherapy"
    ],
    nearby: "3-6-203, Himayat Nagar Rd, New SBH Colony, AP State Housing Board, Himayatnagar",
    clinicBenefit: "Visit our dedicated Himayatnagar center at SBH Colony or book a professional home visit across Hyderabad.",
    localContent: {
      intro: "The Himayatnagar SBH Colony centre sits on Himayat Nagar Road within the AP State Housing Board colony — a well-known residential area with a mix of government employees, professionals, and long-term Hyderabad families. This location is distinct from our Domalguda branch, serving primarily the New SBH Colony, AP Housing Board, Narayanguda, and Basheerbagh residential catchment. The SBH Colony population includes many retirees from government and banking sectors who present with age-related musculoskeletal conditions, and working professionals from the Narayanguda–Red Hills commercial area dealing with desk-job-related cervical and lumbar pain.",
      whyLocal: "Dr. Sirish's SBH Colony centre offers a dedicated clinical environment for patients who prefer in-person treatment with advanced equipment. The centre provides manual therapy, TENS and IFT electrotherapy, dry needling, and ultrasound therapy — modalities that work together for conditions like frozen shoulder, chronic sciatica, and post-surgical stiffness. The SBH Colony location is particularly popular with patients from the Basheerbagh–Red Hills government office cluster who can visit during lunch breaks. For post-surgical patients from nearby NIMS, Care, and Apollo hospitals, we offer accelerated rehabilitation starting from the first week after discharge.",
      accessibility: "The SBH Colony centre is located at 3-6-203, Himayat Nagar Road — easily identifiable within the AP State Housing Board colony. TSRTC buses along Himayat Nagar Road provide direct connectivity from Abids, Nampally, and Secunderabad. The centre operates 7 days a week from 6 AM to 11 PM, with dedicated appointment slots during lunchtime for nearby office workers. Patients who need both clinic sessions and home visits can combine both — clinic for equipment-intensive treatment and home visits for exercise-based rehabilitation on alternate days."
    }
  },
};

// Main services provided at all locations
export const mainServices = [
  { id: 1, name: "Back Pain Relief", desc: "Expert treatment for acute and chronic back pain" },
  { id: 2, name: "Neck & Shoulder Care", desc: "Specialised therapies for neck and shoulder issues" },
  { id: 3, name: "Sports Injury Recovery", desc: "Professional rehabilitation for sports-related injuries" },
  { id: 4, name: "Knee Pain Management", desc: "Effective treatment for knee pain and joint issues" },
  { id: 5, name: "Post-Operative Care", desc: "Comprehensive rehabilitation after surgery" },
  { id: 6, name: "Neurological Rehabilitation", desc: "Expert neuro rehab for stroke, Parkinson's and more" },
];
