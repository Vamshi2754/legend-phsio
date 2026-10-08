"use client";

import { useParams } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { blogPosts } from "@/data/blogData";

interface ContentSection {
  type: string;
  text?: string;
  items?: string[];
}

export default function BlogPost() {
  const params = useParams();
  const slug = Array.isArray(params.slug) ? params.slug[0] : params.slug;
  
  const post = slug ? blogPosts[slug as keyof typeof blogPosts] : undefined;

  if (!post) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="max-w-4xl mx-auto px-6 py-20 text-center">
          <h1 className="text-3xl font-bold mb-4">Blog Post Not Found</h1>
          <p className="text-gray-600 mb-6">The blog post you're looking for doesn't exist.</p>
          <a href="/" className="text-blue-600 font-bold hover:underline">
            Back to Home
          </a>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-6">
          <a href="/" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </a>
          <span className="inline-block bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full mb-4">
            {post.category}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "var(--font-poppins)" }}>
            {post.title}
          </h1>
          <div className="flex items-center gap-4 text-white/80 text-sm">
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {post.date}
            </span>
            <span>·</span>
            <span>{post.readTime}</span>
          </div>
        </div>
      </div>

      {/* Featured Image */}
      <div className="max-w-4xl mx-auto px-6 -mt-8">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <img
            src={post.image}
            alt={`${post.title} - Expert physiotherapy advice from Legend Physiotherapy`}
            className="w-full h-auto object-contain"
          />
        </div>
      </div>

      {/* Content */}
      <article className="max-w-4xl mx-auto px-6 py-12">
        <div className="prose prose-lg max-w-none">
          {post.content.map((section: ContentSection, index: number) => (
            <div key={index} className="mb-8">
              {section.type === "paragraph" && (
                <p className="text-gray-700 leading-relaxed mb-4">{section.text}</p>
              )}
              {section.type === "heading" && (
                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4" style={{ fontFamily: "var(--font-poppins)" }}>
                  {section.text}
                </h2>
              )}
              {section.type === "list" && (
                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                  {section.items?.map((item: string, i: number) => (
                    <li key={i} className="ml-4">{item}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-12 bg-blue-50 rounded-2xl p-8 text-center border border-blue-100">
          <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: "var(--font-poppins)" }}>
            Ready to Start Your Recovery Journey?
          </h3>
          <p className="text-gray-600 mb-6">
            Book an appointment with our expert physiotherapists today
          </p>
          <a
            href="https://legendphysiotherapyorthoandneuropainmanagementclinic.setmore.com?utm_source=qr-code&utm_medium=settings-share-bp"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Book Appointment Now
          </a>
        </div>
      </article>

      <Footer />
    </div>
  );
}
