import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import config from '@/content/site.config'
import { getService, allServices } from '@/content/services'
import StockImage from '@/components/ui/StockImage'
import QuoteSection from '@/components/QuoteSection'

export function generateStaticParams() { return allServices.filter((s)=>s.slug!=='flooring').map((service) => ({slug:service.slug})) }
export async function generateMetadata({ params }) {
  const { slug } = await params
  const s = getService(slug)
  if (!s || s.slug==='flooring') return {}
  const title = `${s.title} Supplier | SGPCC`
  return { title:{absolute:title}, description: `${s.shortDescription} Request a project quotation from SGPCC.`, alternates:{canonical:`${config.siteUrl}${s.href}`}, openGraph:{title,description:s.shortDescription,url:`${config.siteUrl}${s.href}`}, twitter:{card:'summary_large_image'} }
}
export default async function ServicePage({ params }) {
  const { slug } = await params
  const service = getService(slug)
  if (!service || service.slug==='flooring') notFound()
  const pageUrl = `${config.siteUrl}${service.href}`
  const jsonLd = [
    {'@context':'https://schema.org','@type':'Service','@id':`${pageUrl}#service`,name:service.title,description:service.shortDescription,url:pageUrl,provider:{'@id':`${config.siteUrl}/#business`},areaServed:{'@type':'Country',name:'India'}},
    {'@context':'https://schema.org','@type':'BreadcrumbList',itemListElement:[{'@type':'ListItem',position:1,name:'Home',item:config.siteUrl},{'@type':'ListItem',position:2,name:'Services',item:`${config.siteUrl}/#services`},{'@type':'ListItem',position:3,name:service.title,item:pageUrl}]},
  ]
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(jsonLd).replace(/</g,'\\u003c')}}/><section className="bg-[#142333] text-white"><div className="container-responsive grid items-center gap-8 py-12 lg:grid-cols-2 lg:py-20"><div><nav aria-label="Breadcrumb" className="text-sm text-slate-300"><Link href="/" className="underline">Home</Link> / <Link href="/#services" className="underline">Services</Link> / {service.title}</nav><p className="mt-8 text-xs font-extrabold uppercase tracking-widest text-amber-300">B2B project supply</p><h1 className="mt-3 text-4xl font-extrabold leading-tight sm:text-5xl">{service.title}</h1><p className="mt-5 text-lg leading-8 text-slate-200">{service.shortDescription}</p><div className="mt-8 flex flex-wrap gap-3"><a href="#quote" className="btn-primary">Request a quote <ArrowUpRight size={17}/></a><Link href="/#services" className="btn-dark"><ArrowLeft size={17}/> All services</Link></div></div><StockImage name={service.image} className="aspect-[5/4] rounded-2xl" sizes="(max-width: 1024px) 100vw, 46vw"/></div></section><section className="section-pad bg-white"><div className="container-responsive max-w-5xl"><p className="eyebrow">Specify your requirement</p><h2 className="section-title">Send us your project details</h2><p className="body-copy mt-5">For an accurate quotation, share your product specification or manufacturer preference, estimated area or quantity, delivery city and required date. Availability, suitability, lead times and pricing are confirmed per enquiry.</p><p className="mt-5 rounded-xl bg-amber-50 p-4 text-sm leading-7 text-slate-700">[TODO: Add manufacturer-approved product grades, sizes, relevant technical data and verified project photographs for this category.]</p></div></section><QuoteSection defaultService={service.slug}/></>
}
