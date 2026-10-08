const posts = [
  {
    title: "Physiotherapy vs Surgery for Slip Disc & Sciatica in Hyderabad: Non-Surgical Recovery Guide",
    date: "October 8, 2026",
    category: "Spine Care",
    image: "/assets/backpain2.jpg",
    excerpt: "Should you get surgery or physiotherapy for a herniated slip disc or sciatica? Discover why 85%+ of slip disc patients in Hyderabad recover completely using non-surgical robotic physiotherapy.",
    readTime: "8 min read",
  },
  {
    title: "Robotic Physiotherapy vs Traditional Physical Therapy in Hyderabad: Which Heals Faster?",
    date: "October 6, 2026",
    category: "Advanced Rehab",
    image: "/assets/bed.jpg",
    excerpt: "Compare traditional manual physiotherapy with cutting-edge robotic rehabilitation in Hyderabad. Learn how robotic pain management accelerates recovery for stroke, paralysis, and knee arthritis.",
    readTime: "7 min read",
  },
  {
    title: "Top 5 Physiotherapy Exercises for Lower Back Pain Relief",
    date: "April 18, 2026",
    category: "Physiotherapy",
    image: "/assets/backpain2.jpg",
    excerpt: "Discover proven physiotherapy techniques that provide effective relief from chronic lower back pain and improve spinal health.",
    readTime: "5 min read",
  },
  {
    title: "Recovery After Sports Injuries: A Physiotherapy Guide",
    date: "March 30, 2026",
    category: "Physiotherapy",
    image: "/assets/physiotherpy.jpg",
    excerpt: "Learn how structured physiotherapy programs accelerate healing and help athletes return to peak performance safely.",
    readTime: "4 min read",
  },
  {
    title: "Improving Mobility and Flexibility: Physiotherapy Techniques for Seniors",
    date: "March 12, 2026",
    category: "Physiotherapy",
    image: "/assets/neckpain.jpg",
    excerpt: "Gentle physiotherapy methods to enhance mobility, balance, and independence while reducing fall risk in older adults.",
    readTime: "6 min read",
  },
  {
    title: "Hospital Ward Physiotherapy: Essential Care for Bedridden Patients",
    date: "May 5, 2026",
    category: "Ward Care",
    image: "/assets/wardroom.jpg",
    excerpt: "Comprehensive guide to bedside physiotherapy, respiratory care, and early mobilization programs for hospitalized patients.",
    readTime: "7 min read",
  },
  {
    title: "Home Physiotherapy Services: Bringing Expert Care to Your Doorstep",
    date: "May 2, 2026",
    category: "Home Care",
    image: "/assets/nurse.jpg",
    excerpt: "Explore the benefits of professional home physiotherapy services and how they provide convenient, effective treatment at home.",
    readTime: "5 min read",
  },
  {
    title: "Clinic vs Home Physiotherapy: Which is Right for You?",
    date: "April 28, 2026",
    category: "Treatment Options",
    image: "/assets/offline-clinic.jpg",
    excerpt: "Compare the advantages of clinic-based and home visit physiotherapy to make the best choice for your recovery needs.",
    readTime: "6 min read",
  },
  {
    title: "Neurological Rehabilitation: Recovery After Stroke and Brain Injury",
    date: "April 25, 2026",
    category: "Neuro Rehab",
    image: "/assets/bed.jpg",
    excerpt: "Advanced neurological physiotherapy techniques for stroke recovery, paralysis rehabilitation, and regaining independence.",
    readTime: "8 min read",
  },
  {
    title: "Sports Injury Prevention: Essential Physiotherapy Tips for Athletes",
    date: "April 22, 2026",
    category: "Sports Medicine",
    image: "/assets/doctor2.jpg",
    excerpt: "Expert physiotherapy strategies to prevent common sports injuries and maintain peak athletic performance throughout the season.",
    readTime: "5 min read",
  },
  {
    title: "Shoulder Pain Relief: Effective Physiotherapy for Frozen Shoulder",
    date: "April 15, 2026",
    category: "Pain Management",
    image: "/assets/shoulderpain2.jpg",
    excerpt: "Proven physiotherapy treatments for frozen shoulder, rotator cuff injuries, and chronic shoulder pain with lasting results.",
    readTime: "6 min read",
  },
  {
    title: "Knee Arthritis Management: Physiotherapy Solutions That Work",
    date: "April 10, 2026",
    category: "Joint Care",
    image: "/assets/kneepain2.jpg",
    excerpt: "Comprehensive physiotherapy approach to managing knee osteoarthritis, reducing pain, and improving mobility without surgery.",
    readTime: "7 min read",
  },
  {
    title: "Post-Operative Physiotherapy: Accelerating Your Surgical Recovery",
    date: "April 5, 2026",
    category: "Rehabilitation",
    image: "/assets/backpain.jpg",
    excerpt: "Essential physiotherapy protocols for post-surgical recovery, including ACL reconstruction, joint replacement, and spinal surgery.",
    readTime: "8 min read",
  },
  {
    title: "Cervical Spondylosis Treatment: Physiotherapy for Neck Pain",
    date: "March 28, 2026",
    category: "Spine Health",
    image: "/assets/shoulderpain.jpg",
    excerpt: "Effective physiotherapy techniques for cervical spondylosis, neck stiffness, and chronic neck pain with proven outcomes.",
    readTime: "6 min read",
  },
  {
    title: "Geriatric Physiotherapy: Maintaining Independence in Senior Years",
    date: "March 20, 2026",
    category: "Elderly Care",
    image: "/assets/homeservices.jpg",
    excerpt: "Specialized physiotherapy programs for elderly patients focusing on balance, strength, fall prevention, and quality of life.",
    readTime: "7 min read",
  },
];

const categoryColors: Record<string, string> = {
  Physiotherapy: "bg-blue-100 text-blue-600",
  "Spine Care": "bg-emerald-100 text-emerald-700",
  "Advanced Rehab": "bg-indigo-100 text-indigo-700",
  "Ward Care": "bg-purple-100 text-purple-600",
  "Home Care": "bg-green-100 text-green-600",
  "Treatment Options": "bg-orange-100 text-orange-600",
  "Neuro Rehab": "bg-indigo-100 text-indigo-600",
  "Sports Medicine": "bg-red-100 text-red-600",
  "Pain Management": "bg-pink-100 text-pink-600",
  "Joint Care": "bg-teal-100 text-teal-600",
  "Rehabilitation": "bg-cyan-100 text-cyan-600",
  "Spine Health": "bg-amber-100 text-amber-600",
  "Elderly Care": "bg-lime-100 text-lime-600",
};

export default function Blog() {
  return (
    <section id="blog" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-2">
        {/* Heading */}
        <div className="text-center mb-14">
          <span className="section-tag">Latest News</span>
          <h2 className="text-4xl font-bold text-gray-800 mt-3 mb-4" style={{ fontFamily: "var(--font-poppins)" }}>
            Health Articles & Tips
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">
            Stay informed with evidence-based health insights and recovery tips.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article
              key={post.title}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300 group"
            >
              {/* Image */}
              <div className="relative overflow-hidden h-72 sm:h-80 md:h-96 bg-gray-100">
                <img
                  src={post.image}
                  alt={`${post.title} - Physiotherapy health article by Legend Physiotherapy`}
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                />
                <span className={`absolute top-3 left-3 text-xs font-semibold px-3 py-1 rounded-full ${categoryColors[post.category]}`}>
                  {post.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-3 text-xs text-gray-400 mb-3">
                  <span className="flex items-center gap-1">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {post.date}
                  </span>
                  <span>·</span>
                  <span>{post.readTime}</span>
                </div>

                <h3 className="font-semibold text-gray-800 leading-snug mb-3 line-clamp-2 group-hover:text-blue-500 transition-colors" style={{ fontFamily: "var(--font-poppins)" }}>
                  {post.title}
                </h3>

                <p className="text-gray-500 text-sm leading-relaxed mb-5 line-clamp-2">{post.excerpt}</p>

                <div className="flex items-center justify-end">
                  <a href={`/blog/${post.title.toLowerCase().replace(/\s+/g, '-').replace(/:/g, '')}`} className="text-blue-500 text-xs font-semibold hover:underline">
                    Read More →
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-10">
          <a href="/blog" className="btn-primary">
            View All Articles
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
