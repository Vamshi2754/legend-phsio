"use client";
import { useState, useEffect } from "react";

const slides = [
  {
    title: "Heal Faster. Move Better. Live Fully.",
    subtitle: "Expert physiotherapy delivered by Dr. Sirish with 20+ years experience. State-of-the-art treatment at our LB Nagar clinic or at your home.",
    bg: "hero-gradient",
    video: "/ladyvideo.mp4",
    badge: "Expert Physiotherapy",
  },
  {
    title: "Your Pain Ends Here.",
    subtitle: "From back pain to sports injuries, neck stiffness to neuro rehab. We specialise in ortho and neuro pain management with proven results.",
    bg: "hero-gradient-2",
    video: "/assets/video2.mp4",
    badge: "20+ Years Experience",
  },
  {
    title: "Care That Comes to You.",
    subtitle: "Choose between our state-of-the-art LB Nagar clinic or our professional home visit service. Available across all Hyderabad locations.",
    bg: "hero-gradient",
    video: "/assets/video1.mp4",
    badge: "Clinic & Home Visits",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(true);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    if (!isAutoPlay) return;
    
    const timer = setInterval(() => {
      setAnimating(false);
      setTimeout(() => {
        setCurrent((c) => (c + 1) % slides.length);
        setAnimating(true);
      }, 100);
    }, 8000); // Increased to 8 seconds to allow video to play longer
    return () => clearInterval(timer);
  }, [isAutoPlay]);

  const slide = slides[current];

  const goToSlide = (index: number) => {
    setIsAutoPlay(false); // Stop autoplay when manually changing slides
    setAnimating(false);
    setTimeout(() => {
      setCurrent(index);
      setAnimating(true);
      // Resume autoplay after 10 seconds
      setTimeout(() => setIsAutoPlay(true), 10000);
    }, 100);
  };

  return (
    <section id="home" className={`relative overflow-hidden ${slide.bg}`}>
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 rounded-full border-4 border-white" />
        <div className="absolute bottom-10 right-20 w-48 h-48 rounded-full border-2 border-white" />
        <div className="absolute top-1/2 left-1/3 w-32 h-32 rounded-full border border-white" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-24 flex flex-col lg:flex-row items-center gap-8 sm:gap-12">
        {/* Text side */}
        <div className={`flex-1 text-white transition-all duration-700 ${animating ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}>
          <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-xs sm:text-sm font-semibold px-3 sm:px-4 py-1 sm:py-1.5 rounded-full mb-4 sm:mb-5 tracking-widest uppercase">
            {slide.badge}
          </span>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-4 sm:mb-6" style={{ fontFamily: "'Georgia', 'Palatino Linotype', serif", fontStyle: "italic", letterSpacing: "-0.01em" }}>
            {slide.title}
          </h1>
          <p className="text-white/85 text-sm sm:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8 max-w-xl">
            {slide.subtitle}
          </p>
          <div className="flex flex-wrap gap-3 sm:gap-4">
            <a href="https://legendphysiotherapyorthoandneuropainmanagementclinic.setmore.com?utm_source=qr-code&utm_medium=settings-share-bp" target="_blank" rel="noopener noreferrer" className="bg-white text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold hover:bg-blue-50 transition-colors inline-flex items-center gap-2 text-sm sm:text-base shadow-xl border-2 border-white" style={{ fontFamily: "var(--font-poppins)" }}>
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
              </svg>
              Book Appointment
            </a>
          </div>

          {/* Slide indicators */}
          <div className="flex gap-2 mt-8 sm:mt-10">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => goToSlide(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${i === current ? "w-8 bg-white" : "w-3 bg-white/40"}`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Video side */}
        <div className={`flex-1 flex justify-center transition-all duration-700 ${animating ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"} w-full`}>
          <div className="relative w-full max-w-md">
            <div className="absolute inset-0 bg-white/10 rounded-2xl blur-3xl scale-90" />
            <div className="relative z-10 rounded-2xl shadow-2xl overflow-hidden bg-gray-900 w-full" style={{ aspectRatio: "9/16" }}>
              <video
                key={slide.video}
                src={slide.video}
                loop
                muted
                autoPlay
                playsInline
                preload="metadata"
                className="w-full h-full object-contain"
                aria-label={`${slide.badge} - Physiotherapy treatment video`}
              />
            </div>
            {/* Floating stats card */}
            <div className="absolute -bottom-4 sm:-bottom-6 -left-4 sm:-left-6 bg-white rounded-xl shadow-lg px-3 sm:px-5 py-3 sm:py-4 z-20">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-semibold text-gray-800" style={{ fontFamily: "var(--font-poppins)" }}>Expert Physiotherapist</p>
                </div>
              </div>
            </div>
            {/* Floating badge top-right */}
            <div className="absolute -top-3 sm:-top-4 -right-3 sm:-right-4 bg-blue-500 text-white rounded-xl shadow-lg px-3 sm:px-4 py-2 sm:py-3 z-20 text-center">
              <p className="text-xl sm:text-2xl font-bold" style={{ fontFamily: "var(--font-poppins)" }}>20+</p>
              <p className="text-[10px] sm:text-xs opacity-90">Years of<br />Experience</p>
            </div>
          </div>
        </div>
      </div>

      {/* Quick info bar - Now properly positioned below video */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 pb-0 mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 bg-white shadow-xl rounded-t-2xl overflow-hidden -mb-1" role="list">
          {[
            {
              icon: (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              ),
              color: "bg-blue-500",
              title: "Emergency Cases",
              desc: "24/7 emergency care always available",
              value: "+91 9966193413",
              value2: "+91 8143015455",
              isPhone: true,
            },
            {
              icon: (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              ),
              color: "bg-indigo-500",
              title: "Opening Hours",
              desc: "Mon–Sun: 9am–9pm",
              value: "Available 7 Days",
              isPhone: false,
            },
          ].map((item) => (
            <div key={item.title} className="flex items-center gap-3 sm:gap-4 p-4 sm:p-6 border-r last:border-r-0 border-gray-100 hover:bg-blue-50/50 transition-colors" role="listitem">
              <div className={`w-10 h-10 sm:w-12 sm:h-12 ${item.color} rounded-xl flex items-center justify-center flex-shrink-0`} aria-hidden="true">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {item.icon}
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 text-xs sm:text-sm" style={{ fontFamily: "var(--font-poppins)" }}>{item.title}</h3>
                <p className="text-gray-500 text-[10px] sm:text-xs mt-0.5">{item.desc}</p>
                {item.isPhone ? (
                  <div className="space-y-0.5 mt-0.5">
                    <a href={`tel:${item.value.replace(/\s/g, '')}`} className="block text-blue-500 hover:text-blue-600 hover:underline font-medium text-[10px] sm:text-xs">
                      {item.value}
                    </a>
                    {item.value2 && (
                      <a href={`tel:${item.value2.replace(/\s/g, '')}`} className="block text-blue-500 hover:text-blue-600 hover:underline font-medium text-[10px] sm:text-xs">
                        {item.value2}
                      </a>
                    )}
                  </div>
                ) : (
                  <p className="text-blue-500 font-medium text-[10px] sm:text-xs mt-0.5">{item.value}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
