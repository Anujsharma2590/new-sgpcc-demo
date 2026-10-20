import config from '@/content/site.config'
import { allServices, FLOORING_PATH } from '@/content/services'
import {serviceAreas} from '@/content/service-areas'
export default function sitemap() {
  return [
    { url: config.siteUrl, changeFrequency: 'monthly', priority: 1 },
    { url: `${config.siteUrl}${FLOORING_PATH}`, changeFrequency: 'monthly', priority: 0.9 },
    ...serviceAreas.map(area => ({url: `${config.siteUrl}/locations/${area.slug}`, changeFrequency: 'monthly', priority: 0.7})),
    ...allServices.filter((s)=>s.href!==FLOORING_PATH).map((service)=>({url:`${config.siteUrl}${service.href}`,changeFrequency:'monthly',priority:0.65})),
  ]
}
