const services = [
  {
    icon: "back",
    title: "Physiotherapy for Back Pain",
    desc: "Expert treatment for lower back pain. Walk pain-free in 2-3 weeks with our advanced manual therapy and corrective exercises.",
    color: "blue",
    image: "/assets/backpain.jpg",
  },
  {
    icon: "neck",
    title: "Physiotherapy for Neck & Shoulder",
    desc: "Relief from cervical spondylosis, neck stiffness, and frozen shoulder through personalized rehabilitation plans.",
    color: "teal",
    image: "/assets/shoulderpain.jpg",
  },
  {
    icon: "sports",
    title: "Physiotherapy for Sports Injuries",
    desc: "Return to peak performance. From ACL tears to ankle sprains, recover with strength conditioning and injury prevention.",
    color: "red",
    image: "/assets/physiotherpy.jpg",
  },
  {
    icon: "knee",
    title: "Physiotherapy for Knee Pain",
    desc: "Specialized care for knee pain, arthritis, and post-operative rehab. Regain mobility and strength.",
    color: "indigo",
    image: "/assets/kneepain2.jpg",
  },
  {
    icon: "home",
    title: "Physiotherapy at Home",
    desc: "Professional physiotherapy brought to your doorstep. Available across all areas with all necessary equipment.",
    color: "purple",
    image: "/assets/nurse.jpg",
  },
  {
    icon: "clinic",
    title: "Physiotherapy at Clinic",
    desc: "State-of-the-art facility with advanced equipment and premium clinical environment for optimal recovery.",
    color: "orange",
    image: "/assets/offline-clinic.jpg",
  },
];

const colorMap: Record<string, { bg: string; text: string; light: string }> = {
  blue: { bg: "bg-blue-500", text: "text-blue-500", light: "bg-blue-50" },
  teal: { bg: "bg-teal-500", text: "text-teal-500", light: "bg-teal-50" },
  red: { bg: "bg-red-500", text: "text-red-500", light: "bg-red-50" },
  indigo: { bg: "bg-indigo-500", text: "text-indigo-500", light: "bg-indigo-50" },
  purple: { bg: "bg-purple-500", text: "text-purple-500", light: "bg-purple-50" },
  orange: { bg: "bg-orange-500", text: "text-orange-500", light: "bg-orange-50" },
};

const iconMap: Record<string, React.ReactNode> = {
  back: <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 2a8 8 0 100 16 8 8 0 000-16zm1 3v4h3v2h-5V7h2z" /></svg>,
  neck: <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 2a8 8 0 100 16 8 8 0 000-16zm0 2c2.209 0 4 1.791 4 4s-1.791 4-4 4-4-1.791-4-4 1.791-4 4-4zm0 9c-2.667 0-8 1.343-8 4v2h16v-2c0-2.657-5.333-4-8-4z" /></svg>,
  sports: <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 2a8 8 0 100 16 8 8 0 000-16zm0 1c3.866 0 7 3.134 7 7s-3.134 7-7 7-7-3.134-7-7 3.134-7 7-7zm0 1c-3.314 0-6 2.686-6 6s2.686 6 6 6 6-2.686 6-6-2.686-6-6-6z" /></svg>,
  knee: <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 2a8 8 0 100 16 8 8 0 000-16zm0 2c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3zm0 8c-2.667 0-8 1.343-8 4v2h16v-2c0-2.657-5.333-4-8-4z" /></svg>,
  home: <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" /></svg>,
  clinic: <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M3 5h18v2H3V5zm0 6h18v2H3v-2zm0 6h18v2H3v-2z" /></svg>,
};

export default function Services() {
  return (
    <section id="services" className="py-16 sm:py-20 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <div className="text-center mb-10 sm:mb-12 md:mb-14">
          <span className="section-tag text-xs sm:text-sm">What We Offer</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mt-2 sm:mt-3 mb-3 sm:mb-4 px-4" style={{ fontFamily: "var(--font-poppins)" }}>
            Our Physiotherapy Services
          </h2>
          <p className="text-sm sm:text-base text-gray-500 max-w-xl mx-auto leading-relaxed px-4">
            We offer a wide range of specialized medical services designed to address your every healthcare need with precision and compassion.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {services.map((svc) => {
            const c = colorMap[svc.color];
            return (
              <div key={svc.title} className="service-card group border border-gray-100 rounded-xl hover:border-blue-100 bg-white cursor-pointer overflow-hidden hover:shadow-lg transition-all duration-300">
                {/* Image */}
                <div className="relative h-64 sm:h-72 md:h-80 lg:h-96 overflow-hidden bg-gray-100 rounded-t-xl">
                  <img
                    src={svc.image}
                    alt={`${svc.title} - Professional physiotherapy treatment at Legend Physiotherapy Clinic`}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-4 sm:p-5 md:p-6">
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800 mb-2 sm:mb-3" style={{ fontFamily: "var(--font-poppins)" }}>
                    {svc.title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed text-xs sm:text-sm mb-4 sm:mb-5">{svc.desc}</p>
                  <a href={`/blog/${svc.title.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and')}`} className={`${c.text} font-semibold text-xs sm:text-sm flex items-center gap-1 hover:gap-2 transition-all`}>
                    Read More
                    <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
