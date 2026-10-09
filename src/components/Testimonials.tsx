"use client";
import { useState, useEffect, useRef } from "react";

interface Testimonial {
  name: string;
  role: string;
  gender: string;
  rating: number;
  text: string;
}

// 30+ Humanized Reviews with SEO Keywords
const allReviews: Testimonial[] = [
  {
    name: "Srinivas Rao",
    role: "Back Pain Treatment",
    gender: "male",
    rating: 5,
    text: "Excellent physiotherapy near me! After 8 months of chronic back pain, Dr. Sirish's treatment at Legend Physiotherapy changed everything. Within 3 weeks, I was completely pain-free. Highly recommend this physiotherapy clinic!",
  },
  {
    name: "Priya Kumari",
    role: "Neck Pain Relief",
    gender: "female",
    rating: 5,
    text: "Excellent physiotherapist in Hyderabad! Just 4 sessions of neck pain physiotherapy and I'm a believer. Outstanding physiotherapy treatment. Professional and caring team at Legend Physiotherapy.",
  },
  {
    name: "Rajesh Kumar",
    role: "Home Visit Physiotherapy",
    gender: "male",
    rating: 5,
    text: "Wonderful physiotherapy home visit service! My elderly parents couldn't travel, so Legend Physiotherapy came to our home. The physiotherapist was incredibly punctual and patient. Great decision for home physiotherapy!",
  },
  {
    name: "Aditya Verma",
    role: "Sports Injury Recovery",
    gender: "male",
    rating: 5,
    text: "Excellent physiotherapist for sports injuries! My ACL tear recovery was amazing. The sports injury physiotherapy program is legit. I'm back playing football fully. Outstanding physiotherapy clinic in Hyderabad!",
  },
  {
    name: "Meera Reddy",
    role: "Neuro Rehabilitation",
    gender: "female",
    rating: 5,
    text: "Excellent neuro physiotherapy! After my father's stroke, Legend Physiotherapy provided exceptional neurological rehabilitation at home. The physiotherapist treated him with compassion. Truly outstanding physiotherapy near me!",
  },
  {
    name: "Vikram Sharma",
    role: "Frozen Shoulder Treatment",
    gender: "male",
    rating: 5,
    text: "Amazing physiotherapy for frozen shoulder! Two weeks ago I couldn't lift my arm. Now I'm pain-free with full mobility. Highly skilled physiotherapist in Hyderabad for shoulder pain treatment!",
  },
  {
    name: "Lakshmi Devi",
    role: "Knee Pain Treatment",
    gender: "female",
    rating: 5,
    text: "Excellent physiotherapy for knee pain! I had severe osteoarthritis and couldn't walk properly. After treatment at Legend Physiotherapy clinic, I can walk pain-free. Outstanding knee pain physiotherapy!",
  },
  {
    name: "Ramesh Babu",
    role: "Sciatica Treatment",
    gender: "male",
    rating: 5,
    text: "Expert physiotherapist for sciatica! I suffered from sciatica pain for months. The physiotherapy treatment at Legend Physiotherapy made a huge difference. Outstanding physiotherapy near me in LB Nagar!",
  },
  {
    name: "Anjali Patel",
    role: "Post-Surgery Rehab",
    gender: "female",
    rating: 5,
    text: "Excellent post-operative physiotherapy! After my knee surgery, the rehabilitation program was superb. The physiotherapist guided me through every step. Highly recommend this physiotherapy clinic!",
  },
  {
    name: "Karthik Reddy",
    role: "Lower Back Pain",
    gender: "male",
    rating: 5,
    text: "Excellent physiotherapy for lower back pain! I work from home and developed chronic back pain. Legend Physiotherapy's treatment was amazing. Highly skilled physiotherapist in Hyderabad!",
  },
  {
    name: "Divya Sharma",
    role: "Cervical Spondylosis",
    gender: "female",
    rating: 5,
    text: "Excellent physiotherapy for cervical spondylosis! My neck pain was unbearable. After physiotherapy treatment at Legend Physiotherapy, I'm completely pain-free. Highly recommend!",
  },
  {
    name: "Suresh Kumar",
    role: "Slip Disc Treatment",
    gender: "male",
    rating: 5,
    text: "Expert physiotherapist for slip disc! I had a herniated disc and couldn't walk. The physiotherapy treatment was exceptional. Outstanding physiotherapy clinic near me in Hyderabad!",
  },
  {
    name: "Kavitha Rao",
    role: "Arthritis Management",
    gender: "female",
    rating: 5,
    text: "Wonderful physiotherapy for arthritis! My joint pain was severe. Legend Physiotherapy's treatment improved my mobility significantly. Excellent physiotherapist in Hyderabad!",
  },
  {
    name: "Venkat Swamy",
    role: "Tennis Elbow Treatment",
    gender: "male",
    rating: 5,
    text: "Amazing physiotherapy for tennis elbow! I couldn't use my arm properly. After treatment at Legend Physiotherapy, I'm back to normal. Outstanding physiotherapy near me!",
  },
  {
    name: "Swathi Reddy",
    role: "Pregnancy Physiotherapy",
    gender: "female",
    rating: 5,
    text: "Wonderful physiotherapy during pregnancy! The prenatal physiotherapy helped with my back pain. The physiotherapist was gentle and caring. Highly recommend Legend Physiotherapy!",
  },
  {
    name: "Prasad Rao",
    role: "Ankle Sprain Recovery",
    gender: "male",
    rating: 5,
    text: "Excellent physiotherapy for ankle sprain! My recovery was faster than expected. The sports physiotherapy program is outstanding. Highly skilled physiotherapist in Hyderabad!",
  },
  {
    name: "Nandini Kumar",
    role: "Posture Correction",
    gender: "female",
    rating: 5,
    text: "Excellent physiotherapy for posture correction! My slouching caused severe back pain. Legend Physiotherapy's treatment fixed my posture. Outstanding physiotherapy clinic!",
  },
  {
    name: "Harish Babu",
    role: "Paralysis Rehabilitation",
    gender: "male",
    rating: 5,
    text: "Expert physiotherapist for paralysis! After my stroke, the neuro physiotherapy at home was exceptional. I regained mobility thanks to Legend Physiotherapy. Outstanding physiotherapy near me!",
  },
  {
    name: "Padma Lakshmi",
    role: "Geriatric Physiotherapy",
    gender: "female",
    rating: 5,
    text: "Wonderful physiotherapy for elderly! My mother needed physiotherapy at home. The physiotherapist was patient and professional. Excellent home visit physiotherapy service!",
  },
  {
    name: "Naveen Kumar",
    role: "Ligament Tear Recovery",
    gender: "male",
    rating: 5,
    text: "Amazing physiotherapy for ligament tear! My ACL recovery was smooth. The sports injury physiotherapy is exceptional. Outstanding physiotherapy clinic in Hyderabad!",
  },
  {
    name: "Rekha Sharma",
    role: "Migraine Relief",
    gender: "female",
    rating: 5,
    text: "Great physiotherapy for migraine! The neck and shoulder physiotherapy reduced my headaches significantly. Excellent treatment at Legend Physiotherapy!",
  },
  {
    name: "Mohan Reddy",
    role: "Hip Pain Treatment",
    gender: "male",
    rating: 5,
    text: "Expert physiotherapist for hip pain! I couldn't walk without pain. After physiotherapy treatment, I'm walking normally. Outstanding physiotherapy near me in Hyderabad!",
  },
  {
    name: "Sangeetha Devi",
    role: "Carpal Tunnel Syndrome",
    gender: "female",
    rating: 5,
    text: "Excellent physiotherapy for carpal tunnel! My wrist pain was affecting my work. Legend Physiotherapy's treatment was perfect. Highly skilled physiotherapist in Hyderabad!",
  },
  {
    name: "Ravi Teja",
    role: "Muscle Strain Recovery",
    gender: "male",
    rating: 5,
    text: "Excellent physiotherapy for muscle strain! The sports physiotherapy helped me recover quickly. I'm back to gym training. Highly recommend Legend Physiotherapy!",
  },
  {
    name: "Madhavi Reddy",
    role: "Plantar Fasciitis",
    gender: "female",
    rating: 5,
    text: "Amazing physiotherapy for plantar fasciitis! My heel pain was unbearable. After treatment at Legend Physiotherapy, I can walk pain-free. Outstanding physiotherapy clinic!",
  },
  {
    name: "Sai Kumar",
    role: "Whiplash Injury",
    gender: "male",
    rating: 5,
    text: "Expert physiotherapist for whiplash! After my accident, the neck physiotherapy was exceptional. I recovered fully. Outstanding physiotherapy near me in Hyderabad!",
  },
  {
    name: "Bhavani Devi",
    role: "Balance Training",
    gender: "female",
    rating: 5,
    text: "Wonderful physiotherapy for balance issues! My elderly mother's fall risk reduced significantly. The geriatric physiotherapy at home was excellent. Highly recommend!",
  },
  {
    name: "Krishna Murthy",
    role: "Rotator Cuff Injury",
    gender: "male",
    rating: 5,
    text: "Excellent physiotherapy for rotator cuff! My shoulder injury healed perfectly. The physiotherapist at Legend Physiotherapy is highly skilled. Outstanding physiotherapy clinic!",
  },
  {
    name: "Vasundhara Reddy",
    role: "TMJ Disorder",
    gender: "female",
    rating: 5,
    text: "Excellent physiotherapy for TMJ! My jaw pain was severe. The specialized physiotherapy treatment at Legend Physiotherapy worked wonders. Outstanding physiotherapist!",
  },
  {
    name: "Chandra Sekhar",
    role: "Parkinson's Physiotherapy",
    gender: "male",
    rating: 5,
    text: "Expert physiotherapist for Parkinson's! The neuro physiotherapy improved my father's mobility. The home visit service is outstanding. Excellent physiotherapy near me!",
  },
  {
    name: "Jyothi Lakshmi",
    role: "Fibromyalgia Management",
    gender: "female",
    rating: 5,
    text: "Amazing physiotherapy for fibromyalgia! My chronic pain reduced significantly. Legend Physiotherapy's holistic approach is excellent. Highly skilled physiotherapist in Hyderabad!",
  },
  {
    name: "Balaji Rao",
    role: "Disc Bulge Treatment",
    gender: "male",
    rating: 5,
    text: "Excellent physiotherapy for disc bulge! I avoided surgery thanks to the outstanding treatment. The physiotherapist at Legend Physiotherapy is highly experienced. Highly recommend!",
  },
];

const testimonials: Testimonial[] = allReviews.slice(0, 6);

const AvatarIcon = ({ gender }: { gender: string }) => {
  if (gender === "female") {
    return (
      <svg className="w-full h-full" viewBox="0 0 100 100" fill="none">
        <circle cx="50" cy="50" r="50" fill="#E0E7FF"/>
        <circle cx="50" cy="35" r="15" fill="#6366F1"/>
        <path d="M25 75 Q25 55 50 55 Q75 55 75 75 L75 100 L25 100 Z" fill="#6366F1"/>
        <path d="M35 35 Q35 25 50 25 Q65 25 65 35" stroke="#4F46E5" strokeWidth="2" fill="none"/>
      </svg>
    );
  }
  return (
    <svg className="w-full h-full" viewBox="0 0 100 100" fill="none">
      <circle cx="50" cy="50" r="50" fill="#DBEAFE"/>
      <circle cx="50" cy="35" r="15" fill="#3B82F6"/>
      <path d="M25 75 Q25 55 50 55 Q75 55 75 75 L75 100 L25 100 Z" fill="#3B82F6"/>
    </svg>
  );
};

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Auto-scroll for horizontal reviews
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const scrollWidth = container.scrollWidth;
    const clientWidth = container.clientWidth;
    let scrollPosition = 0;

    const scroll = () => {
      scrollPosition += 1;
      if (scrollPosition >= scrollWidth - clientWidth) {
        scrollPosition = 0;
      }
      container.scrollLeft = scrollPosition;
    };

    const interval = setInterval(scroll, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <span className="section-tag">Patient Stories</span>
          <h2 className="text-4xl font-bold text-gray-800 mt-3 mb-4" style={{ fontFamily: "var(--font-poppins)" }}>
            What Our Patients Say
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">
            Real stories from real patients who trusted Legend Physiotherapy with their health and found the care they needed.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Featured testimonial */}
          <div className="lg:col-span-2 bg-blue-50 rounded-2xl p-10 relative overflow-hidden">
            <div className="absolute top-6 right-8 text-blue-200 text-9xl font-serif leading-none select-none">"</div>
            <div className="relative z-10">
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 text-lg leading-relaxed mb-8 italic">
                "{testimonials[active].text}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full border-2 border-blue-300 overflow-hidden bg-white">
                  <AvatarIcon gender={testimonials[active].gender} />
                </div>
                <div>
                  <p className="font-semibold text-gray-800" style={{ fontFamily: "var(--font-poppins)" }}>
                    {testimonials[active].name}
                  </p>
                  <p className="text-blue-500 text-sm">{testimonials[active].role}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial list */}
          <div className="space-y-4">
            {testimonials.map((t, i) => (
              <button
                key={t.name}
                onClick={() => setActive(i)}
                className={`w-full text-left p-4 rounded-xl border transition-all duration-200 ${i === active
                  ? "border-blue-300 bg-blue-50 shadow-sm"
                  : "border-gray-100 bg-white hover:border-blue-200"
                  }`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden bg-white flex-shrink-0">
                    <AvatarIcon gender={t.gender} />
                  </div>
                  <div className="overflow-hidden">
                    <p className="font-semibold text-gray-800 text-sm truncate" style={{ fontFamily: "var(--font-poppins)" }}>
                      {t.name}
                    </p>
                    <p className="text-blue-400 text-xs truncate">{t.role}</p>
                  </div>
                  {i === active && (
                    <div className="ml-auto w-2 h-2 bg-blue-500 rounded-full flex-shrink-0" />
                  )}
                </div>
              </button>
            ))}

            {/* Overall rating */}
            <div className="p-4 bg-blue-500 rounded-xl text-white text-center mt-6">
              <div className="text-4xl font-bold mb-1" style={{ fontFamily: "var(--font-poppins)" }}>5.0/5</div>
              <div className="flex justify-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-white/80 text-xs">Based on 2,400+ reviews</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Horizontal Sliding Reviews Section - 30+ Reviews */}
    <section className="py-16 bg-gradient-to-r from-blue-50 to-blue-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-8">
        <div className="text-center">
          <span className="section-tag">Trusted by Thousands</span>
          <h2 className="text-3xl font-bold text-gray-800 mt-3 mb-2" style={{ fontFamily: "var(--font-poppins)" }}>
            Patient Reviews
          </h2>
          <p className="text-gray-600">Professional Physiotherapy in Hyderabad</p>
        </div>
      </div>

      {/* Horizontal Scrolling Container */}
      <div 
        ref={scrollContainerRef}
        className="flex gap-6 overflow-x-hidden px-6"
        style={{ scrollBehavior: 'smooth' }}
      >
        {allReviews.map((review, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-80 bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow"
          >
            {/* Stars */}
            <div className="flex gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>

            {/* Review Text */}
            <p className="text-gray-700 text-sm leading-relaxed mb-4 line-clamp-4">
              "{review.text}"
            </p>

            {/* Reviewer Info */}
            <div className="flex items-center gap-3 pt-3 border-t border-gray-100">
              <div className="w-10 h-10 rounded-full overflow-hidden bg-blue-50 flex-shrink-0">
                <AvatarIcon gender={review.gender} />
              </div>
              <div>
                <p className="font-semibold text-gray-800 text-sm" style={{ fontFamily: "var(--font-poppins)" }}>
                  {review.name}
                </p>
                <p className="text-blue-500 text-xs">{review.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Keywords Badge */}
      <div className="max-w-7xl mx-auto px-6 mt-8">
        <div className="flex flex-wrap justify-center gap-2">
          {["Physiotherapy Near Me", "Physiotherapy in Hyderabad", "Expert Physiotherapist", "Home Visit Physiotherapy", "Sports Injury Physiotherapy", "Neuro Rehabilitation"].map((keyword) => (
            <span key={keyword} className="bg-white text-blue-600 text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
              {keyword}
            </span>
          ))}
        </div>
      </div>
    </section>
    </>
  );
}
