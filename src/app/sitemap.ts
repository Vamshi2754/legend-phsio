import { MetadataRoute } from 'next'
import { locationData } from '@/data/locations'
import { blogPosts } from '@/data/blogData'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.legendphysiotherapy.com'
  
  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/book-appointment`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/locations`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
  ]

  // Condition / service pages
  const conditionPages = [
    'knee-pain-physiotherapy-lb-nagar',
    'back-pain-physiotherapy-lb-nagar',
    'neck-pain-cervical-physiotherapy-lb-nagar',
    'sciatica-physiotherapy-lb-nagar',
    'shoulder-pain-physiotherapy-lb-nagar',
    'sports-injury-rehabilitation-lb-nagar',
    'neuro-rehabilitation-lb-nagar',
    'post-surgery-rehabilitation-lb-nagar',
    'best-physiotherapy-in-hyderabad',
    'tennis-elbow-treatment-hyderabad',
    'frozen-shoulder-treatment-hyderabad',
    'slip-disc-treatment-hyderabad',
    'vertigo-balance-rehabilitation-hyderabad',
    'paralysis-treatment-hyderabad',
    'acl-tear-recovery-hyderabad',
    'cervical-spondylosis-treatment-hyderabad',
    'arthritis-physiotherapy-hyderabad',
    'plantar-fasciitis-treatment-hyderabad',
    'hip-pain-physiotherapy-hyderabad',
    'dry-needling-physiotherapy-hyderabad',
    'shockwave-therapy-hyderabad',
    'laser-therapy-physiotherapy-hyderabad',
    'robotic-physiotherapy-hyderabad',
    'spinal-decompression-therapy-hyderabad',
  ].map((slug) => ({
    url: `${baseUrl}/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }))

  // Location pages - HIGH PRIORITY for SEO
  const locationPages = Object.keys(locationData).map((slug) => ({
    url: `${baseUrl}/locations/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.95, // Very high priority for location pages
  }))

  // Blog post pages - Important for content SEO
  const blogPages = Object.keys(blogPosts).map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(blogPosts[slug].date),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...staticPages, ...conditionPages, ...locationPages, ...blogPages]
}
