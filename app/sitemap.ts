import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${process.env.NEXT_PUBLIC_API_BASE_URL}/`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.7,
    },

  ]
}
