import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { blogPosts } from "@/data/blogData";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Physiotherapy Health Articles & Tips | Legend Physiotherapy Blog",
  description: "Expert physiotherapy articles, recovery tips, and health insights. Learn about back pain relief, sports injury recovery, neck pain treatment, and rehabilitation techniques from experienced physiotherapists.",
  keywords: [
    "physiotherapy articles",
    "physiotherapy tips",
    "back pain relief",
    "sports injury recovery",
    "neck pain treatment",
    "knee pain exercises",
    "physiotherapy exercises",
    "rehabilitation tips",
    "pain management",
    "physiotherapy blog",
  ],
  openGraph: {
    title: "Physiotherapy Health Articles & Tips | Legend Physiotherapy Blog",
    description: "Expert physiotherapy articles, recovery tips, and health insights from experienced physiotherapists.",
    type: "website",
  },
  alternates: {
    canonical: "https://legend-physiotherapist.vercel.app/blog",
  },
};

export default function BlogPage() {
  const allPosts = Object.entries(blogPosts).map(([slug, post]) => ({
    slug,
    ...post,
  }));

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

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl font-bold mb-6" style={{ fontFamily: "var(--font-poppins)" }}>
            Health Articles & Tips
          </h1>
          <p className="text-xl text-white/90 max-w-3xl">
            Stay informed with evidence-based health insights, recovery tips, and expert advice from our physiotherapy professionals.
          </p>
        </div>
      </div>

      {/* Blog Grid */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allPosts.map((post) => (
            <article
              key={post.slug}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300 group"
            >
              {/* Image */}
              <div className="relative overflow-hidden h-64 bg-gray-100">
                <img
                  src={post.image}
                  alt={`${post.title} - Physiotherapy health article by Legend Physiotherapy`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
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

                <p className="text-gray-500 text-sm leading-relaxed mb-5 line-clamp-3">{post.excerpt}</p>

                <div className="flex items-center justify-between">
                  <a href={`/blog/${post.slug}`} className="text-blue-500 text-sm font-semibold hover:underline flex items-center gap-1">
                    Read More
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: "var(--font-poppins)" }}>
            Need Professional Physiotherapy Care?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Book an appointment with our expert physiotherapists and start your recovery journey today
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="https://legendphysiotherapyorthoandneuropainmanagementclinic.setmore.com?utm_source=qr-code&utm_medium=settings-share-bp"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold hover:bg-blue-50 transition-colors inline-flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Book Appointment
            </a>
            <a
              href="tel:+919966193413"
              className="bg-blue-800 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-900 transition-colors inline-flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              Call +91 99661 93413
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
