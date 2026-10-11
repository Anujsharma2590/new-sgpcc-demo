import config from '@/content/site.config'

export default function robots() {
  return {
    rules: [{ userAgent: '*', allow: '/', disallow: ['/api/'] }],
    sitemap: `${config.siteUrl}/sitemap.xml`,
    host: config.siteUrl,
  }
}
