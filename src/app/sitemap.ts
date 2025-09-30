import type { MetadataRoute } from 'next'
import { seriousProjects } from '@/app/projects/data'

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://david-obonyano.vercel.app'

  const routes: MetadataRoute.Sitemap = [
    '',
  ].map((route) => ({
    url: `${siteUrl}/${route}`.replace(/\/$\//, '/'),
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.7,
  }))

  const projectRoutes: MetadataRoute.Sitemap = seriousProjects.map((p) => ({
    url: `${siteUrl}/projects/${p.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.6,
  }))

  return [...routes, ...projectRoutes]
}


