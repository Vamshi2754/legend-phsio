"use client";
import { useState, useEffect, useRef } from "react";

interface Testimonial {
  name: string;
  role: string;
  gender: string;
  rating: number;
  text: string;
}

// Real Google Reviews from Legend Physiotherapy GMB listing (5.0 rating, 492 reviews)
const allReviews: Testimonial[] = [
  {
    name: "Maha Lakshmi",
    role: "Rheumatoid Arthritis",
    gender: "female",
    rating: 5,
    text: "I am suffering from rheumatoid arthritis from past 20 years and was unable to walk without support from past 3 months. After daily home visits over 20 days at Legend Physiotherapy, I am now able to walk with walker. Very grateful to the team.",
  },
  {
    name: "Sravya Samanapelli",
    role: "Ankle Sprain Recovery",
    gender: "female",
    rating: 5,
    text: "I recovered from an ankle sprain with balance and strength training at Legend Physiotherapy. The structured rehab helped me return to sports without any instability. Excellent physiotherapy.",
  },
  {
    name: "Rakshi Shyamrao",
    role: "Plantar Fasciitis",
    gender: "female",
    rating: 5,
    text: "My plantar fasciitis heel pain was treated with stretching, strengthening and gait correction exercises. The pain dropped substantially and I can walk comfortably now. Highly recommend Legend Physiotherapy.",
  },
  {
    name: "Raghu Malyala",
    role: "Knee Osteoarthritis",
    gender: "male",
    rating: 5,
    text: "I had early knee osteoarthritis and the pain eased after treatment at Legend Physiotherapy. I can now climb stairs comfortably. The improvement has been remarkable.",
  },
  {
    name: "Lokendra Mandloi",
    role: "Pain Relief",
    gender: "male",
    rating: 5,
    text: "My grandfather got immense pain relief here. Good doctors, good environment, good service. Very happy with the treatment at Legend Physiotherapy.",
  },
  {
    name: "Sayali Joshi",
    role: "Clinic Visit",
    gender: "female",
    rating: 5,
    text: "Professional treatment with quick results. The doctor explained everything clearly and the clinic is very clean. Friendly staff and I got relief much faster than expected.",
  },
  {
    name: "Shahid Afrid Mohammad",
    role: "Sciatica Treatment",
    gender: "male",
    rating: 5,
    text: "I had sciatica and it was treated gently at Legend Physiotherapy. The treatment was effective and now the pain is almost gone. Very thankful for the care.",
  },
  {
    name: "Buram Dinesh",
    role: "Post-ACL Surgery Rehab",
    gender: "male",
    rating: 5,
    text: "I had ACL reconstruction surgery and did my structured, progressive rehab at Legend Physiotherapy. Now I can walk and climb stairs easily. The recovery program was excellent.",
  },
  {
    name: "Prashanth Raparthi",
    role: "Lower Back Pain",
    gender: "male",
    rating: 5,
    text: "I had chronic lower back pain and it improved within a week of treatment. The clinic is clean and calm. Now I can sit and walk comfortably again.",
  },
  {
    name: "Shiva Kumar",
    role: "Shoulder Pain",
    gender: "male",
    rating: 5,
    text: "I had shoulder pain from heavy lifting at work. After physiotherapy at Legend, the pain improved session by session. Now I can work without discomfort.",
  },
  {
    name: "Podishetty Likvith",
    role: "Neck Pain",
    gender: "male",
    rating: 5,
    text: "I had neck stiffness from constant mobile use. It improved in just a few sessions at Legend Physiotherapy. They also gave me home exercises. Highly satisfied with the results.",
  },
  {
    name: "Rishik Bandari",
    role: "Cervical Pain",
    gender: "male",
    rating: 5,
    text: "My cervical pain and headaches eased gradually in a calm, cooperative setting at Legend Physiotherapy. Feeling much better now. The team is very knowledgeable.",
  },
  {
    name: "Sateesh",
    role: "Muscle Stiffness",
    gender: "male",
    rating: 5,
    text: "I recovered quickly from severe muscle stiffness after a gym workout. The physiotherapy treatment at Legend resolved it completely. Very thankful for the care.",
  },
  {
    name: "Saketh Paka",
    role: "Wrist Pain",
    gender: "male",
    rating: 5,
    text: "I had wrist pain from constant typing at work. After treatment at Legend Physiotherapy, I can now work without pain. Great treatment and caring staff.",
  },
  {
    name: "Sathvika Kavali",
    role: "Knee Stiffness",
    gender: "female",
    rating: 5,
    text: "My knee stiffness is easing steadily. Slowly I can bend my knee better now and walking is getting easier. Thank you Legend Physiotherapy team.",
  },
  {
    name: "Vamshikrishna Gaddam",
    role: "Hand Weakness",
    gender: "male",
    rating: 5,
    text: "I had hand weakness and after treatment at Legend Physiotherapy, I can feel some strength coming back now. The physiotherapy is helping me recover well.",
  },
  {
    name: "Karthik",
    role: "Back Pain Relief",
    gender: "male",
    rating: 5,
    text: "I had back pain after long hours of travel. The treatment at Legend Physiotherapy gave good relief. Professional and caring team.",
  },
  {
    name: "Shubham Sharma",
    role: "Leg Injury Recovery",
    gender: "male",
    rating: 5,
    text: "I had a leg injury and they treated me very well. They got my damaged leg cured. Excellent work by the Legend Physiotherapy team.",
  },
  {
    name: "Konda Rajkumar",
    role: "Home Visit Physiotherapy",
    gender: "male",
    rating: 5,
    text: "I had hand pain and consulted their home visiting service. The service was great and I had good recovery. My hand is fine now.",
  },
  {
    name: "Kuldeep Sharma",
    role: "Home Visit Service",
    gender: "male",
    rating: 5,
    text: "They give home service and they are very accurate with the treatment. Convenient and professional physiotherapy at your doorstep.",
  },
  {
    name: "Mallareddy Pasunuri",
    role: "Post-Surgery Rehab",
    gender: "male",
    rating: 5,
    text: "I took physiotherapy treatment from Dr. Sirish for my lumbar spondylitis post-surgery discectomy. Home visit in Uppal. The rehabilitation was excellent and thorough.",
  },
  {
    name: "Karthik Nukapongu",
    role: "General Treatment",
    gender: "male",
    rating: 5,
    text: "Nice treatment and they really care about us. I like that passion in their work. Very dedicated physiotherapy team at Legend.",
  },
  {
    name: "Dhanavath Ranga",
    role: "Ankle Sprain",
    gender: "male",
    rating: 5,
    text: "Best treatment for my ankle sprain. Thank you doctor for the excellent care at Legend Physiotherapy. Recovered quickly.",
  },
  {
    name: "Peddi Manognya",
    role: "General Physiotherapy",
    gender: "female",
    rating: 5,
    text: "Very good service at Legend Physiotherapy. The environment is friendly and the staff is very welcoming. Highly recommend.",
  },
  {
    name: "Yashwanth Ellandula",
    role: "Back Pain Treatment",
    gender: "male",
    rating: 5,
    text: "Best treatment for back pain I have received. The physiotherapy at Legend is professional and effective. Feeling much better.",
  },
  {
    name: "Manish Charry",
    role: "Pain Management",
    gender: "male",
    rating: 5,
    text: "Good treatment, the best I have ever received. Legend Physiotherapy really knows their work. Very satisfied with the results.",
  },
  {
    name: "Bollampally Pranay",
    role: "Leg Pain Treatment",
    gender: "male",
    rating: 5,
    text: "My friend referred me to Legend Physiotherapy for my leg pain. I joined for treatment and got great results within just 3 days. Highly recommend.",
  },
  {
    name: "Naveen Polla",
    role: "Physiotherapy Treatment",
    gender: "male",
    rating: 5,
    text: "The physiotherapy here is very good and excellent. Professional treatment and caring staff at Legend Physiotherapy clinic. Feeling better now.",
  },
  {
    name: "Dhanush",
    role: "Back Pain Treatment",
    gender: "male",
    rating: 5,
    text: "The treatment given here is very good and excellent. It cured my back pain. I had a great experience at Legend Physiotherapy.",
  },
  {
    name: "Amgothu Sathish",
    role: "Ankle Sprain Treatment",
    gender: "male",
    rating: 5,
    text: "Best treatment for ankle sprain at Legend Physiotherapy. The recovery was fast and the team was very supportive throughout.",
  },
  {
    name: "Kranthi Pasula",
    role: "Recovery Treatment",
    gender: "male",
    rating: 5,
    text: "Good recovery after treatment at Legend Physiotherapy. The physiotherapists are skilled and professional. Highly recommend their services.",
  },
  {
    name: "Aravind Nani",
    role: "Back Pain Relief",
    gender: "male",
    rating: 5,
    text: "Best treatment for back pain at Legend Physiotherapy. The treatment was thorough and I feel much better after the sessions.",
  },
  {
    name: "Yerrolla Krishnavamshi",
    role: "Recovery Treatment",
    gender: "male",
    rating: 5,
    text: "Good recovery after physiotherapy treatment. The team at Legend Physiotherapy is very professional and the results speak for themselves.",
  },
  {
    name: "Model Vishnu",
    role: "General Treatment",
    gender: "male",
    rating: 5,
    text: "Good treatment, the best I have ever received before. Legend Physiotherapy provides excellent care and great results.",
  },
  {
    name: "Model Vinnu",
    role: "Pain Relief",
    gender: "male",
    rating: 5,
    text: "Better pain relief at Legend Physiotherapy. The treatment was effective and the staff is very supportive. Happy with the results.",
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
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const [scrollPosition, setScrollPosition] = useState(0);
  const horizontalScrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const scrollContainer = horizontalScrollRef.current;
    if (!scrollContainer) return;

    const scrollSpeed = 0.5;
    let animationId: number;

    const animate = () => {
      setScrollPosition((prev) => {
        const newPos = prev + scrollSpeed;
        if (scrollContainer.scrollWidth / 2 <= newPos) {
          return 0;
        }
        return newPos;
      });
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, []);

  useEffect(() => {
    if (horizontalScrollRef.current) {
      horizontalScrollRef.current.scrollLeft = scrollPosition;
    }
  }, [scrollPosition]);

  const active = testimonials[activeIndex];

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-14">
          <span className="section-tag text-xs sm:text-sm">Google Reviews</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mt-2 mb-3" style={{ fontFamily: "var(--font-poppins)" }}>
            What Our Patients Say
          </h2>
          <p className="text-sm sm:text-base text-gray-500 max-w-xl mx-auto">
            Real reviews from our patients on Google
          </p>
        </div>

        {/* Featured Testimonial */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-10 relative overflow-hidden border border-blue-100">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-50 rounded-full opacity-50"></div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-blue-50 rounded-full opacity-50"></div>

            <div className="relative">
              <svg className="w-10 h-10 sm:w-12 sm:h-12 text-blue-200 mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
              </svg>

              <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed mb-6 min-h-[80px]">
                &ldquo;{active.text}&rdquo;
              </p>

              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <AvatarIcon gender={active.gender} />
                </div>
                <div>
                  <p className="font-bold text-gray-900">{active.name}</p>
                  <p className="text-blue-500 text-sm">{active.role}</p>
                </div>
              </div>
            </div>

            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${i === activeIndex ? "bg-blue-500 w-6" : "bg-gray-300"}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Rating Summary */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-lg border border-amber-100">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="font-bold text-gray-800 text-sm">Rated 5.0 on Google (492+ Reviews)</p>
          </div>
        </div>

        {/* Horizontal Sliding Reviews Section */}
        <div className="mt-8">
          <h3 className="text-xl sm:text-2xl font-bold text-center text-gray-800 mb-6" style={{ fontFamily: "var(--font-poppins)" }}>
            Patient Reviews
          </h3>

          <div
            ref={horizontalScrollRef}
            className="flex gap-4 overflow-hidden py-4"
            style={{ scrollBehavior: "auto" }}
          >
            {[...allReviews, ...allReviews].map((review, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-72 sm:w-80 bg-white rounded-xl p-5 shadow-md border border-gray-100 hover:shadow-lg transition-shadow"
              >
                <div className="flex gap-0.5 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-4">
                  &ldquo;{review.text}&rdquo;
                </p>

                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0">
                    <AvatarIcon gender={review.gender} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 text-sm">{review.name}</p>
                    <p className="text-blue-500 text-xs">{review.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
