import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://richboys.life',
      changeFrequency: 'weekly',
      priority: 1,
    },
  ]
}
