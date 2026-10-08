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
    description: "Legend Physiotherapy Ortho and Neuro Pain Management Clinic in Kothapet, LB Nagar is Hyderabad's premier destination for advanced physiotherapy. Our flagship clinic is equipped with hospital-grade robotic physiotherapy systems, spinal decompression tables, high-intensity laser therapy, and ultrasound-guided treatment. Led by Dr. Sirish, our senior consultant team specialises in orthopaedic and neurological rehabilitation, treating everything from acute sports injuries to complex post-surgical recovery. We also offer home visit services across Hyderabad for patients who cannot travel.",
    seoDescription: "Best physiotherapy clinic in LB Nagar & Kothapet, Hyderabad. Legend Physiotherapy offers advanced ortho and neuro pain management, robotic therapy, laser treatment, and home visits. Book now.",
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
    clinicBenefit: "Visit our premium clinic with advanced robotic & laser equipment, or book a professional home visit anywhere in Hyderabad."
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
    seoDescription: "Best physiotherapist home visit in Nagole, Hyderabad. Legend Physiotherapy provides expert treatment for back pain, knee pain, sports injuries, and post-surgery recovery at your doorstep.",
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
    nearby: "New Nagole Main Rd, Snehapuri Colony, Nagole, Hyderabad"
  },
  "dilsukhnagar": {
    name: "Dilsukhnagar",
    fullName: "Legend Physiotherapy at Home | Best Physiotherapist in Dilsukhnagar near Gaddiannaram, Hyderabad",
    type: "Home Visit",
    title: "Legend Physiotherapy at Home | Best Physiotherapist in Dilsukhnagar near Gaddiannaram, Hyderabad",
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
    seoDescription: "Best physiotherapist in Dilsukhnagar near Gaddiannaram, Hyderabad. Legend Physiotherapy home visit service for back pain, knee pain, sports injuries, and post-surgery rehab. Call now.",
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
    nearby: "Gaddiannaram Rd, behind Kamala Hospital, Dilsukhnagar, Hyderabad"
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
    seoDescription: "Best physiotherapist near Habsiguda, Hyderabad. Legend Physiotherapy home visit service for back pain, knee pain, post-surgery rehab, and sports injuries. Expert care at your doorstep.",
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
    nearby: "Captain Veera Raja Reddy Marg, Vasant Vihar, Habsiguda, Hyderabad"
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
    seoDescription: "Best physiotherapist near Kharmanghat, Hyderabad. Legend Physiotherapy home visit for back pain, knee pain, post-surgery rehab, and neurological conditions. Book today.",
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
    nearby: "Karmanghat Rd, Sri Raghavendra Nagar Colony, Kharmanghat, Hyderabad"
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
    seoDescription: "Best physiotherapy clinic & home visit service in Abids, Hyderabad. Legend Physiotherapy at Triveni Complex, Abids Road. Expert treatment for back pain, knee pain, and rehabilitation.",
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
    nearby: "Triveni Complex, Abids Road, opposite Santhosh, Sultan Bazar, Abids, Hyderabad"
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
    seoDescription: "Best physiotherapy clinic in Himayatnagar, Hyderabad. Two branches � Domalguda & Himayat Nagar Rd. Expert treatment for back pain, knee pain, sports injuries, and neuro rehab. Book now.",
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
    clinicBenefit: "Two conveniently located branches in Himayatnagar ensure you are always close to expert physiotherapy care."
  },
  "attapur": {
    name: "Attapur",
    fullName: "Legend Physiotherapy at Home | Best Physiotherapist near Attapur, Hyderabad",
    type: "Home Visit",
    title: "Legend Physiotherapy at Home | Best Physiotherapist near Attapur, Hyderabad",
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
    seoDescription: "Best physiotherapist near Attapur, Hyderabad. Legend Physiotherapy home visit service at Hyderguda, Upparpally Rd. Expert treatment for back pain, knee pain, and post-surgery rehab.",
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
    nearby: "Pillar No. 13, Upparpally Rd, Hyderguda, near Attapur, Hyderabad"
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
    seoDescription: "Best physiotherapist home visit in MRC Colony, Rock Gardens, Hyderabad. Legend Physiotherapy expert treatment for back pain, knee pain, sports injuries, and neuro rehab.",
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
    nearby: "Road Number 6, MRC Colony, Rock Gardens, Hyderabad"
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
    seoDescription: "Best physiotherapist near Jubilee Hills, Hyderabad. Legend Physiotherapy home visit at Kavuri Hills, Rd No. 44. Expert treatment for back pain, sports injuries, and post-surgery rehab.",
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
    nearby: "Rd Number 44, Kavuri Hills, Madhapur, Jubilee Hills, Hyderabad"
  },
  "kompally": {
    name: "Kompally",
    fullName: "Legend Physiotherapy | Best Physiotherapist & Rehabilitation Services near Kompally, Hyderabad",
    type: "Home Visit",
    title: "Legend Physiotherapy | Best Physiotherapist And Rehabilitation Services Near | Kompally | Hyderabad",
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
    seoDescription: "Best physiotherapist near Kompally, Hyderabad. Legend Physiotherapy at Medchal Rd, Petbasheerabad. Expert rehabilitation for back pain, knee pain, sports injuries, and post-surgery recovery.",
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
    nearby: "Medchal Rd, Petbasheerabad, NCL Enclave South, Kompally, Secunderabad"
  },
  "secunderabad": {
    name: "Secunderabad",
    fullName: "Legend Physiotherapy at Home | Best Physiotherapist near Mahendra Hills, Secunderabad",
    type: "Home Visit",
    title: "Legend Physiotherapy at Home | Best Physiotherapist near Mahendra Hills, Secunderabad",
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
    seoDescription: "Best physiotherapist near Mahendra Hills, Secunderabad. Legend Physiotherapy home visit at East Marredpally. Expert treatment for back pain, knee pain, and post-surgery rehab.",
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
    nearby: "Dhanalaxmi Colony, East Marredpally, near Mahendra Hills, Secunderabad"
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
    seoDescription: "Best physiotherapist near Borabanda, Hyderabad. Legend Physiotherapy home visit at Allapur Rd. Expert treatment for back pain, knee pain, sports injuries, and post-surgery rehab.",
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
    nearby: "R.K. Society, Borabanda - Allapur Rd, Borabanda, Hyderabad"
  },
  "begumpet": {
    name: "Begumpet",
    fullName: "Dr. Sirish | Best Physiotherapist near Begumpet, Secunderabad, Hyderabad",
    type: "Home Visit",
    title: "Dr. SIRISH | Best Physiotherapist near Secunderabad, Hyderabad",
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
    seoDescription: "Best physiotherapist near Begumpet & Secunderabad. Dr. Sirish at Legend Physiotherapy, 46 PG Road, Sindhi Colony. Expert treatment for back pain, knee pain, and neuro rehab. Book now.",
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
    clinicBenefit: "Consult directly with Dr. Sirish at our Begumpet clinic or book a home visit across Secunderabad."
  },
  "kokapet": {
    name: "Kokapet",
    fullName: "Legend Physiotherapy at Home | Best Physiotherapist near Kokapet, Hyderabad",
    type: "Home Visit",
    title: "Legend Physiotherapy at Home | Best Physiotherapist near kokapet, Hyderabad",
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
    seoDescription: "Best physiotherapist near Kokapet, Hyderabad. Legend Physiotherapy home visit at Phoenix Greens School Rd. Expert treatment for back pain, knee pain, sports injuries, and post-surgery rehab.",
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
    nearby: "Phoenix Greens School Rd, Power Welfare Society, Kokapet, Hyderabad"
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
    seoDescription: "Best physiotherapist home visit in Banjara Hills, Hyderabad. Legend Physiotherapy expert treatment for back pain, sports injuries, and rehabilitation at your doorstep.",
    highlights: ["Expert therapists available in Banjara Hills", "Flexible home visit timings (6 AM - 9 PM)", "Complete rehabilitation equipment brought to your home", "Specialised care for ortho & neuro conditions"],
    conditions: ["Back pain relief", "Neck and shoulder pain", "Sports injuries", "Knee pain management", "Post-operative rehabilitation", "Neurological conditions"],
    services: ["Home visit physiotherapy", "Manual therapy", "TENS & electrotherapy", "Ultrasound therapy", "Sports injury rehab", "Exercise therapy"],
    nearby: "Near Durgam Cheruvu & Road No. 12, Banjara Hills"
  },
  "madhapur": {
    name: "Madhapur",
    fullName: "Legend Physiotherapy Home Visit | Best Physiotherapist in Madhapur, Hyderabad",
    type: "Home Visit",
    title: "Legend Physiotherapy Home Visit Service | Madhapur",
    phone: "+91 99661 93413",
    whatsapp: "919966193413",
    address: "Madhapur, Hyderabad, Telangana",
    mapEmbed: "https://maps.google.com/maps?q=Madhapur+HITEC+City+Hyderabad+Telangana&t=&z=15&ie=UTF8&iwloc=&output=embed",
    mapPins: [{ lat: 17.4500, lng: 78.3820, label: "Legend Physiotherapy � Madhapur", address: "Madhapur, HITEC City, Hyderabad", phone: "+91 99661 93413" }],
    description: "Serving the IT hub of Hyderabad, our Madhapur home visit service specialises in ergonomic-related pains and corporate health. We provide quick and effective physiotherapy for software professionals dealing with back strain, neck stiffness, and repetitive stress injuries. Our flexible scheduling allows for sessions before or after office hours, and we bring portable clinical equipment to your home or office.",
    seoDescription: "Best physiotherapist home visit in Madhapur, Hyderabad. Legend Physiotherapy expert treatment for back pain, neck pain, ergonomic injuries, and sports rehab.",
    highlights: ["Serving Madhapur and HITEC City areas", "Ergonomic assessment included", "Late evening slots for IT professionals", "Portable clinical equipment at your home"],
    conditions: ["Muscle strain and sprain", "Ligament injuries", "Joint pain management", "Postural correction", "Ergonomic-related pain", "General rehabilitation"],
    services: ["Home visit physiotherapy", "Manual therapy", "TENS & electrotherapy", "Postural correction", "Ergonomic assessment", "Exercise therapy"],
    nearby: "Near HITEC City & Cyber Towers, Madhapur, Hyderabad"
  },
  "gachibowli": {
    name: "Gachibowli",
    fullName: "Legend Physiotherapy Home Visit | Best Physiotherapist in Gachibowli, Hyderabad",
    type: "Home Visit",
    title: "Legend Physiotherapy Home Visit Service | Gachibowli",
    phone: "+91 99661 93413",
    whatsapp: "919966193413",
    address: "Gachibowli, Hyderabad, Telangana",
    mapEmbed: "https://maps.google.com/maps?q=Gachibowli+Financial+District+Hyderabad+Telangana&t=&z=15&ie=UTF8&iwloc=&output=embed",
    mapPins: [{ lat: 17.4400, lng: 78.3480, label: "Legend Physiotherapy � Gachibowli", address: "Gachibowli, Financial District, Hyderabad", phone: "+91 99661 93413" }],
    description: "Gachibowli residents can now access world-class physiotherapy at home. We focus on sports injury recovery and geriatric care for the growing community in Gachibowli and Financial District. Our therapists come equipped with advanced modalities like TENS and Ultrasound to ensure a clinical experience in your living room.",
    seoDescription: "Best physiotherapist home visit in Gachibowli, Hyderabad. Legend Physiotherapy expert treatment for back pain, sports injuries, and geriatric rehab at your doorstep.",
    highlights: ["Trained therapists in Gachibowli & Financial District", "Full mobile clinic setup at your home", "Geriatric specialised care", "Sports injury experts"],
    conditions: ["Back and neck pain", "Arthritis management", "Sports injury recovery", "Mobility improvement", "Stroke rehabilitation"],
    services: ["Home visit physiotherapy", "Manual therapy", "TENS & electrotherapy", "Ultrasound therapy", "Geriatric rehab", "Sports injury rehab"],
    nearby: "Near Financial District & DLF, Gachibowli, Hyderabad"
  },
  "kondapur": {
    name: "Kondapur",
    fullName: "Legend Physiotherapy Home Visit | Best Physiotherapist in Kondapur, Hyderabad",
    type: "Home Visit",
    title: "Legend Physiotherapy Home Visit Service | Kondapur",
    phone: "+91 99661 93413",
    whatsapp: "919966193413",
    address: "Kondapur, Hyderabad, Telangana",
    mapEmbed: "https://maps.google.com/maps?q=Kondapur+Hyderabad+Telangana&t=&z=15&ie=UTF8&iwloc=&output=embed",
    mapPins: [{ lat: 17.4600, lng: 78.3650, label: "Legend Physiotherapy � Kondapur", address: "Kondapur, Hyderabad", phone: "+91 99661 93413" }],
    description: "Our Kondapur home visit service is a preferred choice for families seeking reliable physiotherapy. We specialise in paediatric physiotherapy and post-maternity care in Kondapur. Our team ensures a safe and comfortable environment for treatment, focusing on long-term wellness and preventive exercises.",
    seoDescription: "Best physiotherapist home visit in Kondapur, Hyderabad. Legend Physiotherapy expert treatment for back pain, knee pain, and family physiotherapy at your doorstep.",
    highlights: ["Experienced therapists serving Kondapur", "Quick 2-hour response for urgent cases", "Holistic treatment approach", "Family-centric physiotherapy"],
    conditions: ["Lower back pain", "Upper back pain", "Shoulder injuries", "Knee joint problems", "Neurological conditions"],
    services: ["Home visit physiotherapy", "Manual therapy", "TENS & electrotherapy", "Paediatric physiotherapy", "Post-maternity rehab", "Exercise therapy"],
    nearby: "Near Kondapur RTO & Botanical Garden, Hyderabad"
  },
  "kukatpally": {
    name: "Kukatpally",
    fullName: "Legend Physiotherapy Home Visit | Best Physiotherapist in Kukatpally, Hyderabad",
    type: "Home Visit",
    title: "Legend Physiotherapy Home Visit Service | Kukatpally",
    phone: "+91 99661 93413",
    whatsapp: "919966193413",
    address: "Kukatpally, Hyderabad, Telangana",
    mapEmbed: "https://maps.google.com/maps?q=Kukatpally+KPHB+Hyderabad+Telangana&t=&z=15&ie=UTF8&iwloc=&output=embed",
    mapPins: [{ lat: 17.4850, lng: 78.4080, label: "Legend Physiotherapy � Kukatpally", address: "Kukatpally, KPHB, Hyderabad", phone: "+91 99661 93413" }],
    description: "Legend Physiotherapy provides extensive coverage in Kukatpally, offering home visits for all age groups. We are known for our effective stroke rehabilitation and joint replacement recovery programmes in the Kukatpally area. Our therapists work closely with patients to regain independence and mobility.",
    seoDescription: "Best physiotherapist home visit in Kukatpally, Hyderabad. Legend Physiotherapy expert treatment for back pain, stroke rehab, and post-surgery recovery at your doorstep.",
    highlights: ["Licensed therapists in Kukatpally & KPHB", "Post-surgery specialist team", "Modern exercise equipment at home", "Affordable long-term packages"],
    conditions: ["Occupational pain", "Sports injuries", "Post-operative care", "Chronic pain management", "Stroke rehabilitation"],
    services: ["Home visit physiotherapy", "Manual therapy", "TENS & electrotherapy", "Stroke rehabilitation", "Post-surgical rehab", "Exercise therapy"],
    nearby: "Near KPHB Metro & Forum Mall, Kukatpally, Hyderabad"
  },
  "miyapur": {
    name: "Miyapur",
    fullName: "Legend Physiotherapy Home Visit | Best Physiotherapist in Miyapur, Hyderabad",
    type: "Home Visit",
    title: "Legend Physiotherapy Home Visit Service | Miyapur",
    phone: "+91 99661 93413",
    whatsapp: "919966193413",
    address: "Miyapur, Hyderabad, Telangana",
    mapEmbed: "https://maps.google.com/maps?q=Miyapur+Hyderabad+Telangana&t=&z=15&ie=UTF8&iwloc=&output=embed",
    mapPins: [{ lat: 17.4950, lng: 78.3580, label: "Legend Physiotherapy � Miyapur", address: "Miyapur, Hyderabad", phone: "+91 99661 93413" }],
    description: "Our Miyapur home visit services cater to the growing residential communities along the Miyapur-Bachupally corridor. We provide expert care for arthritis management and mobility issues, ensuring that elderly patients receive compassionate and effective treatment in the comfort of their homes.",
    seoDescription: "Best physiotherapist home visit in Miyapur, Hyderabad. Legend Physiotherapy expert treatment for back pain, arthritis, and geriatric rehab at your doorstep.",
    highlights: ["Certified therapists serving Miyapur", "Home visit convenience", "Comprehensive assessment", "Geriatric care specialists"],
    conditions: ["Pain management", "Injury rehabilitation", "Joint care", "Muscle therapy", "Balance and coordination"],
    services: ["Home visit physiotherapy", "Manual therapy", "TENS & electrotherapy", "Geriatric rehab", "Balance therapy", "Exercise therapy"],
    nearby: "Near Miyapur Metro & Allwyn X Roads, Hyderabad"
  },
  "ameerpet": {
    name: "Ameerpet",
    fullName: "Legend Physiotherapy Home Visit | Best Physiotherapist in Ameerpet, Hyderabad",
    type: "Home Visit",
    title: "Legend Physiotherapy Home Visit Service | Ameerpet",
    phone: "+91 99661 93413",
    whatsapp: "919966193413",
    address: "Ameerpet, Hyderabad, Telangana",
    mapEmbed: "https://maps.google.com/maps?q=Ameerpet+Hyderabad+Telangana&t=&z=15&ie=UTF8&iwloc=&output=embed",
    mapPins: [{ lat: 17.4380, lng: 78.4480, label: "Legend Physiotherapy � Ameerpet", address: "Ameerpet, Hyderabad", phone: "+91 99661 93413" }],
    description: "Expert physiotherapy services at your doorstep in Ameerpet. Our therapists are trained in the latest rehabilitation techniques, specifically targeting occupational-related pains common in this bustling commercial hub. We bring portable equipment to provide a complete clinical experience.",
    seoDescription: "Best physiotherapist home visit in Ameerpet, Hyderabad. Legend Physiotherapy expert treatment for back pain, occupational injuries, and rehabilitation at your doorstep.",
    highlights: ["Trained therapists in Ameerpet & SR Nagar", "Customised treatment plans", "Equipment brought to your home", "Professional follow-ups and progress monitoring"],
    conditions: ["Muscle strains", "Joint injuries", "Pain management", "Rehabilitation services", "Preventive therapy"],
    services: ["Home visit physiotherapy", "Manual therapy", "TENS & electrotherapy", "Postural correction", "Exercise therapy", "Preventive physiotherapy"],
    nearby: "Near Ameerpet Cross Roads & Metro, Hyderabad"
  },
  "tarnaka": {
    name: "Tarnaka",
    fullName: "Legend Physiotherapy Home Visit | Best Physiotherapist in Tarnaka, Hyderabad",
    type: "Home Visit",
    title: "Legend Physiotherapy Home Visit Service | Tarnaka",
    phone: "+91 99661 93413",
    whatsapp: "919966193413",
    address: "Tarnaka, Hyderabad, Telangana",
    mapEmbed: "https://maps.google.com/maps?q=Tarnaka+Hyderabad+Telangana&t=&z=15&ie=UTF8&iwloc=&output=embed",
    mapPins: [{ lat: 17.4200, lng: 78.5380, label: "Legend Physiotherapy � Tarnaka", address: "Tarnaka, Hyderabad", phone: "+91 99661 93413" }],
    description: "Quality physiotherapy services available in Tarnaka with expert therapists providing comprehensive care. We serve the academic and residential community of Tarnaka, offering specialised programmes for sports injuries and spine care.",
    seoDescription: "Best physiotherapist home visit in Tarnaka, Hyderabad. Legend Physiotherapy expert treatment for back pain, sports injuries, and spine care at your doorstep.",
    highlights: ["Certified therapists in Tarnaka & OU area", "Quick booking process", "Modern therapeutic techniques", "Ongoing support and exercise guidance"],
    conditions: ["Back and spine care", "Joint rehabilitation", "Sports injury treatment", "Neurological care", "General physiotherapy"],
    services: ["Home visit physiotherapy", "Manual therapy", "TENS & electrotherapy", "Spine care", "Sports injury rehab", "Exercise therapy"],
    nearby: "Near Tarnaka Metro & OU Campus, Hyderabad"
  },
  "uppal": {
    name: "Uppal",
    fullName: "Legend Physiotherapy Home Visit | Best Physiotherapist in Uppal, Hyderabad",
    type: "Home Visit",
    title: "Legend Physiotherapy Home Visit Service | Uppal",
    phone: "+91 99661 93413",
    whatsapp: "919966193413",
    address: "Uppal, Hyderabad, Telangana",
    mapEmbed: "https://maps.google.com/maps?q=Uppal+Hyderabad+Telangana&t=&z=15&ie=UTF8&iwloc=&output=embed",
    mapPins: [{ lat: 17.4050, lng: 78.5590, label: "Legend Physiotherapy � Uppal", address: "Uppal, Hyderabad", phone: "+91 99661 93413" }],
    description: "Expert physiotherapy services for Uppal area residents with professional home visit options. We are dedicated to providing the best rehabilitation services for musculoskeletal issues and post-surgical recovery in the Uppal region.",
    seoDescription: "Best physiotherapist home visit in Uppal, Hyderabad. Legend Physiotherapy expert treatment for back pain, knee pain, and post-surgery rehab at your doorstep.",
    highlights: ["Serving Uppal & Habsiguda vicinity", "Experienced and compassionate therapists", "Convenient and punctual home visits", "Affordable pricing for quality care"],
    conditions: ["Back pain", "Shoulder pain", "Knee issues", "Sports injuries", "General rehabilitation"],
    services: ["Home visit physiotherapy", "Manual therapy", "TENS & electrotherapy", "Ultrasound therapy", "Post-surgical rehab", "Exercise therapy"],
    nearby: "Near Uppal Stadium & Metro, Hyderabad"
  },
  "mehdipatnam": {
    name: "Mehdipatnam",
    fullName: "Legend Physiotherapy Home Visit | Best Physiotherapist in Mehdipatnam, Hyderabad",
    type: "Home Visit",
    title: "Legend Physiotherapy Home Visit Service | Mehdipatnam",
    phone: "+91 99661 93413",
    whatsapp: "919966193413",
    address: "Mehdipatnam, Hyderabad, Telangana",
    mapEmbed: "https://maps.google.com/maps?q=Mehdipatnam+Hyderabad+Telangana&t=&z=15&ie=UTF8&iwloc=&output=embed",
    mapPins: [{ lat: 17.3900, lng: 78.4380, label: "Legend Physiotherapy � Mehdipatnam", address: "Mehdipatnam, Hyderabad", phone: "+91 99661 93413" }],
    description: "Residents of Mehdipatnam can now experience the expertise of Legend Physiotherapy in their own homes. We specialise in comprehensive treatment plans for musculoskeletal pain and sports-related injuries, ensuring a personalised approach for every patient in the Mehdipatnam area.",
    seoDescription: "Best physiotherapist home visit in Mehdipatnam, Hyderabad. Legend Physiotherapy expert treatment for back pain, sports injuries, and rehabilitation at your doorstep.",
    highlights: ["Experienced team serving Mehdipatnam & Asif Nagar", "Comprehensive and personalised treatment plans", "Professional home visit facilities", "Dedicated patient care and follow-up"],
    conditions: ["Back pain treatment", "Neck care", "Sports injuries", "Joint rehabilitation", "General wellness"],
    services: ["Home visit physiotherapy", "Manual therapy", "TENS & electrotherapy", "Ultrasound therapy", "Sports injury rehab", "Exercise therapy"],
    nearby: "Near Mehdipatnam Rythu Bazar & Pillar No. 10, Hyderabad"
  },
  "tolichowki": {
    name: "Tolichowki",
    fullName: "Legend Physiotherapy Home Visit | Best Physiotherapist in Tolichowki, Hyderabad",
    type: "Home Visit",
    title: "Legend Physiotherapy Home Visit Service | Tolichowki",
    phone: "+91 99661 93413",
    whatsapp: "919966193413",
    address: "Tolichowki, Hyderabad, Telangana",
    mapEmbed: "https://maps.google.com/maps?q=Tolichowki+Hyderabad+Telangana&t=&z=15&ie=UTF8&iwloc=&output=embed",
    mapPins: [{ lat: 17.3850, lng: 78.4180, label: "Legend Physiotherapy � Tolichowki", address: "Tolichowki, Hyderabad", phone: "+91 99661 93413" }],
    description: "Our Tolichowki home visit division provides professional physiotherapy services with a focus on recovery and long-term health. We offer expert treatment for acute and chronic pain, utilising modern therapeutic techniques to ensure the best outcomes for our patients in Tolichowki.",
    seoDescription: "Best physiotherapist home visit in Tolichowki, Hyderabad. Legend Physiotherapy expert treatment for back pain, chronic pain, and injury rehab at your doorstep.",
    highlights: ["Serving Tolichowki & Seven Tombs area", "Certified and compassionate therapists", "Modern treatment methods and equipment", "Reliable and punctual service"],
    conditions: ["Acute and chronic pain", "Injury rehabilitation", "Mobility enhancement", "Preventive care", "Recovery support"],
    services: ["Home visit physiotherapy", "Manual therapy", "TENS & electrotherapy", "Ultrasound therapy", "Chronic pain management", "Exercise therapy"],
    nearby: "Near Tolichowki Flyover & Galaxy Theater, Hyderabad"
  },
  "manikonda": {
    name: "Manikonda",
    fullName: "Legend Physiotherapy Home Visit | Best Physiotherapist in Manikonda, Hyderabad",
    type: "Home Visit",
    title: "Legend Physiotherapy Home Visit Service | Manikonda",
    phone: "+91 99661 93413",
    whatsapp: "919966193413",
    address: "Manikonda, Hyderabad, Telangana",
    mapEmbed: "https://maps.google.com/maps?q=Manikonda+Hyderabad+Telangana&t=&z=15&ie=UTF8&iwloc=&output=embed",
    mapPins: [{ lat: 17.3980, lng: 78.3780, label: "Legend Physiotherapy – Manikonda", address: "Manikonda, Hyderabad", phone: "+91 99661 93413" }],
    description: "Professional physiotherapy services in Manikonda, delivering expert care to your doorstep. We specialise in back and spine health, ensuring that residents of Manikonda have access to the best rehabilitation services without the need to travel.",
    seoDescription: "Best physiotherapist home visit in Manikonda, Hyderabad. Legend Physiotherapy expert treatment for back pain, spine care, and post-surgery rehab at your doorstep.",
    highlights: ["Serving Manikonda & Puppalguda area", "Certified and experienced therapists", "Professional and patient-focused service", "Dedicated to long-term recovery"],
    conditions: ["Back and spine pain", "Shoulder and neck issues", "Sports injuries", "Post-operative care", "General rehabilitation"],
    services: ["Home visit physiotherapy", "Manual therapy", "TENS & electrotherapy", "Spine care", "Post-surgical rehab", "Exercise therapy"],
    nearby: "Near Manikonda Jagir & Lanco Hills, Hyderabad"
  },
  "jawahar-nagar": {
    name: "Jawahar Nagar",
    fullName: "Legend Physiotherapy at Home | Best Physiotherapist near Jawahar Nagar, Hyderabad",
    type: "Home Visit",
    title: "Legend Physiotherapy at Home | Best Physiotherapist near Jawahar Nagar, Hyderabad",
    phone: "+91 99661 93413",
    whatsapp: "919966193413",
    address: "Jawahar Nagar, Hyderabad, Telangana",
    mapEmbed: "https://maps.google.com/maps?q=Jawahar+Nagar+Hyderabad+Telangana&t=&z=15&ie=UTF8&iwloc=&output=embed",
    mapPins: [{ lat: 17.4250, lng: 78.5150, label: "Legend Physiotherapy – Jawahar Nagar", address: "Jawahar Nagar, Hyderabad", phone: "+91 99661 93413" }],
    description: "Legend Physiotherapy's Jawahar Nagar home visit service provides expert physiotherapy care directly to your doorstep. Our certified physiotherapists specialize in treating back pain, knee pain, neck pain, sports injuries, and post-surgical rehabilitation. We bring portable clinical-grade equipment to your home, ensuring you receive the same quality of care as our clinic. Flexible appointment slots are available throughout the day to suit your schedule.",
    seoDescription: "Best physiotherapist home visit in Jawahar Nagar, Hyderabad. Legend Physiotherapy expert treatment for back pain, knee pain, sports injuries, and post-surgery rehab at your doorstep.",
    highlights: ["Serving Jawahar Nagar & surrounding areas", "Portable clinical equipment at your home", "Flexible appointment slots 6 AM – 11 PM", "Expert ortho & neuro physiotherapists", "Same-day appointments available"],
    conditions: ["Back pain & sciatica", "Knee pain & arthritis", "Neck & shoulder pain", "Post-operative rehabilitation", "Sports injuries", "Neurological rehabilitation", "Frozen shoulder", "Elderly mobility & balance"],
    services: ["Home visit physiotherapy", "Manual therapy", "TENS & electrotherapy", "Ultrasound therapy", "Exercise rehabilitation", "Neurological physiotherapy"],
    nearby: "Jawahar Nagar, Hyderabad"
  },
  "secunderabad-paradise": {
    name: "Secunderabad",
    fullName: "Dr. SIRISH | Best Physiotherapist near Secunderabad, Hyderabad",
    type: "Clinic & Home Visit",
    title: "Dr. SIRISH | Best Physiotherapist near Secunderabad, Hyderabad",
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
    seoDescription: "Best physiotherapist near Secunderabad Paradise. Dr. Sirish at Legend Physiotherapy, 46 PG Road, Sindhi Colony. Expert treatment for back pain, knee pain, and neuro rehab. Book now.",
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
    clinicBenefit: "Consult directly with Dr. Sirish at our Secunderabad Paradise clinic or book a home visit across Secunderabad."
  },
  "himayatnagar-sbh": {
    name: "Himayatnagar",
    fullName: "Dr Sirish | Best Physiotherapy center Himayatnagar",
    type: "Clinic & Home Visit",
    title: "Dr Sirish | Best Physiotherapy center Himayatnagar",
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
    seoDescription: "Best physiotherapy center in Himayatnagar SBH Colony. Dr. Sirish at 3-6-203 Himayat Nagar Rd. Expert treatment for back pain, knee pain, sports injuries, and neuro rehab. Book now.",
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
    clinicBenefit: "Visit our dedicated Himayatnagar center at SBH Colony or book a professional home visit across Hyderabad."
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
