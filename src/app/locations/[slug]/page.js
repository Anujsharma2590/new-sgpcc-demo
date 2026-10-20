import Link from 'next/link'
import {notFound} from 'next/navigation'
import {ArrowUpRight, MapPin, Phone} from 'lucide-react'
import config from '@/content/site.config'
import {getServiceArea, serviceAreas} from '@/content/service-areas'
import {getService} from '@/lib/services'
import QuoteSection from '@/components/QuoteSection'

export const dynamicParams = false
export function generateStaticParams() {
  return serviceAreas.map(area => ({slug: area.slug}))
}

export async function generateMetadata({params}) {
  const {slug} = await params
  const area = getServiceArea(slug)
  if (!area) return {}
  const url = `${config.siteUrl}/locations/${area.slug}`
  const title = `${area.title} | SGPCC`
  return {
    title: {absolute: title}, description: area.description,
    alternates: {canonical: url},
    openGraph: {title, description: area.description, url},
    twitter: {card: 'summary_large_image', title, description: area.description},
  }
}

export default async function LocationPage({params}) {
  const {slug} = await params
  const area = getServiceArea(slug)
  if (!area) notFound()
  const office = area.office === 'head' ? null : config.contacts.offices.find(item => item.city === area.office)
  const address = office ? office.lines.join(', ') : config.contacts.address
  const url = `${config.siteUrl}/locations/${area.slug}`
  const schema = [
    {'@context': 'https://schema.org', '@type': 'Service', name: area.title, description: area.description, url, provider: {'@id': `${config.siteUrl}/#business`}, areaServed: {'@type': 'Place', name: `${area.name}, ${area.region}, India`}},
    {'@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
      {'@type': 'ListItem', position: 1, name: 'Home', item: config.siteUrl},
      {'@type': 'ListItem', position: 2, name: 'Service Areas', item: `${config.siteUrl}/#service-areas`},
      {'@type': 'ListItem', position: 3, name: area.name, item: url},
    ]},
  ]
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(schema).replace(/</g, '\u003c')}}/>
    <section className="hero-warm section-pad border-b border-brand-border">
      <div className="container-responsive">
        <nav aria-label="Breadcrumb" className="text-sm text-slate-copy"><Link href="/" className="underline">Home</Link> / <Link href="/#service-areas" className="underline">Service Areas</Link> / {area.name}</nav>
        <p className="eyebrow mt-8">{area.region} · Project Supply</p>
        <h1 className="type-h1 mt-4 max-w-4xl font-extrabold">{area.title}</h1>
        <p className="body-copy mt-6 max-w-3xl text-lg">{area.introduction}</p>
        <div className="mt-7 flex flex-wrap gap-3"><a href="#quote" className="btn-primary">Request a {area.name} Quote <ArrowUpRight size={18}/></a><a href={`tel:${config.contacts.phones[0].number.replace(/\s/g, '')}`} className="btn-secondary"><Phone size={18}/>Call Sales</a></div>
      </div>
    </section>
    <section className="section-pad bg-white">
      <div className="container-responsive grid gap-10 lg:grid-cols-[1.3fr_.7fr]">
        <div>
          <h2 className="type-h2 font-extrabold">{area.focus}</h2>
          <p className="body-copy mt-5">{area.focusText}</p>
          <h2 className="type-h3 mt-9 font-extrabold">Materials & Services for Your Project</h2>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">{area.serviceSlugs.map(serviceSlug => {
            const service = getService(serviceSlug)
            return <li key={serviceSlug}><Link href={service.href} className="flex min-h-14 items-center justify-between gap-3 rounded-xl border border-brand-border p-4 font-semibold text-ink hover:border-brand-maroon">{service.title}<ArrowUpRight size={18} className="shrink-0"/></Link></li>
          })}</ul>
          <h2 className="type-h3 mt-9 font-extrabold">Service Area & Delivery Coordination</h2>
          <p className="body-copy mt-4">{area.coverage}</p>
        </div>
        <aside className="card h-fit p-6 sm:p-8" aria-label={`${area.name} office and quotation details`}>
          <MapPin size={25} className="text-brand-maroon" aria-hidden="true"/>
          <h2 className="type-h3 mt-4 font-extrabold">{area.name} {office ? 'Branch Office' : 'Head Office'}</h2>
          <p className="body-copy mt-4">{address}</p>
          <h3 className="mt-6 text-lg font-bold">What to Include in Your Enquiry</h3>
          <p className="body-copy mt-3">{area.quoteTip}</p>
          <a href="#quote" className="btn-primary mt-6">Request a Bulk Quote <ArrowUpRight size={17}/></a>
        </aside>
      </div>
    </section>
    <section className="border-t border-brand-border bg-canvas py-8"><div className="container-responsive"><h2 className="text-lg font-bold">Other Major Service Areas</h2><div className="mt-3 flex flex-wrap gap-3">{serviceAreas.filter(item => item.slug !== slug).map(item => <Link key={item.slug} href={`/locations/${item.slug}`} className="btn-secondary">{item.name}<ArrowUpRight size={16}/></Link>)}</div></div></section>
    <QuoteSection heading={`Request a Project Quote in ${area.name}`} description={area.quoteTip}/>
  </>
}
