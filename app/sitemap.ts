import { MetadataRoute } from 'next'
import { issues } from '@/lib/isu-data'

export default function sitemap(): MetadataRoute.Sitemap {
  const issueEntries = issues.map((issue) => ({
    url: `https://indoliberty.site/isu/${issue.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [
    {
      url: 'https://indoliberty.site',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1.0,
    },
    {
      url: 'https://indoliberty.site/isu',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    ...issueEntries,
  ]
}
