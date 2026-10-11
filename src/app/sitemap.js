import config from '@/content/site.config'
import { services, FLOORING_PATH } from '@/content/services'
export default function sitemap() {
  return [
    { url: config.siteUrl, changeFrequency: 'monthly', priority: 1 },
    { url: `${config.siteUrl}${FLOORING_PATH}`, changeFrequency: 'monthly', priority: 0.9 },
    ...services.filter((s)=>s.href!==FLOORING_PATH).map((service)=>({url:`${config.siteUrl}${service.href}`,changeFrequency:'monthly',priority:0.65})),
  ]
}
