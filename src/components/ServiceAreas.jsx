import Link from 'next/link'
import {ArrowUpRight, MapPin} from 'lucide-react'
import {serviceAreas} from '@/content/service-areas'

export default function ServiceAreas() {
  return <section id="service-areas" className="section-pad bg-white" aria-labelledby="service-areas-title">
    <div className="container-responsive">
      <p className="eyebrow">Regional Project Support</p>
      <h2 id="service-areas-title" className="section-title">Major Service Areas</h2>
      <p className="body-copy mt-4 max-w-3xl">Explore construction material supply and industrial flooring support for your project location. We also handle enquiries across India, with availability and delivery confirmed per order.</p>
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {serviceAreas.map(area => <Link key={area.slug} href={`/locations/${area.slug}`} className="card group p-6 transition hover:border-brand-maroon hover:shadow-lg">
          <MapPin size={25} className="text-brand-maroon" aria-hidden="true"/>
          <h3 className="type-h3 mt-5 font-extrabold">{area.name}</h3>
          <p className="mt-3 text-base leading-7 text-slate-copy">{area.description}</p>
          <span className="mt-5 inline-flex min-h-11 items-center gap-2 text-sm font-bold text-brand-maroon">Explore Local Supply <ArrowUpRight size={17} aria-hidden="true"/></span>
        </Link>)}
      </div>
    </div>
  </section>
}
