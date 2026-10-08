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

  return [...staticPages, ...locationPages, ...blogPages]
}
