'use client'
import {useMemo, useState} from 'react'
import dynamic from 'next/dynamic'
import {Building2, Mail, MapPin, Phone, MapPinned, Navigation} from 'lucide-react'
import {FaWhatsapp} from 'react-icons/fa'
import config, {whatsappHref} from '@/content/site.config'
import {directionsHref} from '@/lib/maps'

const OfficesMap = dynamic(() => import('./OfficesMap'), {
  ssr: false,
  loading: () => <div className="flex h-80 items-center justify-center rounded-2xl bg-slate-100 text-sm text-slate-copy" role="status">Loading Office Map…</div>,
})

function DirectionsLink({address, office, className = 'btn-secondary'}) {
  return <a href={directionsHref(address)} target="_blank" rel="noopener noreferrer" className={className} aria-label={`Get directions to ${office} (opens Google Maps in a new tab)`}>
    <Navigation size={17} className="shrink-0" aria-hidden="true"/>Get Directions
  </a>
}

export default function Contact() {
  const [showMap, setShowMap] = useState(false)
  const markers = useMemo(() => [
    {title: 'Bhiwadi — Head Office', address: config.contacts.address, lat: config.contacts.lat, lng: config.contacts.lng},
    ...config.contacts.offices.map(office => ({title: office.city, address: office.lines.join(', '), lat: office.lat, lng: office.lng})),
  ], [])

  return <section id="contact" className="section-pad bg-[#f5f7f8]" aria-labelledby="contact-title">
    <div className="container-responsive">
      <p className="eyebrow">Where to Find Us</p>
      <h2 className="section-title" id="contact-title">Our Locations | Pan-India Construction Material Supply</h2>
      <p className="body-copy mt-4 max-w-2xl">Our head office is in Bhiwadi, with branches in Haryana, Maharashtra and Delhi. Contact our team for delivery availability or help planning your visit.</p>
      <div id="locations" className="mt-9 grid gap-5 lg:grid-cols-[1.1fr_.9fr]">
        <article className="card min-w-0 p-6 sm:p-8" aria-labelledby="head-office-title">
          <div className="flex items-center gap-2 text-brand-maroon"><Building2 size={21} aria-hidden="true"/><span className="text-xs font-extrabold uppercase tracking-widest">Head Office · Bhiwadi</span></div>
          <h3 id="head-office-title" className="mt-4 text-xl font-extrabold text-ink">{config.company.name}</h3>
          <address className="mt-3 text-base not-italic leading-7 text-slate-copy">{config.contacts.address}</address>
          {config.contacts.gstin && <p className="mt-3 text-xs text-slate-copy">GSTIN: {config.contacts.gstin}</p>}
          <div className="mt-5 grid gap-2 sm:grid-cols-2">
            {config.contacts.phones.map(phone => <a key={phone.number} className="flex min-h-12 items-center gap-2 rounded-xl border border-brand-border px-3 py-3 text-sm font-semibold text-ink hover:border-brand-maroon" href={`tel:${phone.number.replace(/\s/g, '')}`} aria-label={`${phone.label}: ${phone.number}`}>
              <Phone size={16} className="shrink-0" aria-hidden="true"/>{phone.number}
            </a>)}
          </div>
          <div className="mt-5 flex flex-wrap gap-3">
            <a href={whatsappHref('Hello SGPCC, I would like to enquire about project materials.')} target="_blank" rel="noopener noreferrer" className="btn-whatsapp" aria-label="Enquire on WhatsApp (opens in a new tab)"><span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#075E54] text-white"><FaWhatsapp size={17} aria-hidden="true"/></span>WhatsApp</a>
            <a href={`mailto:${config.contacts.email}`} className="btn-secondary"><Mail size={17} aria-hidden="true"/>Email Us</a>
            <DirectionsLink address={config.contacts.address} office="the Bhiwadi head office"/>
          </div>
        </article>
        <div className="grid gap-4">
          {config.contacts.offices.map((office, index) => <article key={office.city} className="card min-w-0 p-5" aria-labelledby={`branch-office-${index}`}>
            <p className="text-xs font-bold uppercase tracking-widest text-brand-maroon">{office.label || 'Branch Office'}</p>
            <h3 id={`branch-office-${index}`} className="mt-2 flex items-center gap-2 text-lg font-extrabold text-ink"><MapPin size={18} className="shrink-0 text-brand-maroon" aria-hidden="true"/>{office.city}</h3>
            <address className="mt-2 text-sm not-italic leading-6 text-slate-copy">{office.lines.join(', ')}</address>
            {office.gstin && <p className="mt-2 text-xs text-slate-copy">GSTIN: {office.gstin}</p>}
            <DirectionsLink address={office.lines.join(', ')} office={`the ${office.city} branch office`} className="mt-3 inline-flex min-h-11 items-center gap-2 rounded-lg text-sm font-bold text-brand-maroon underline underline-offset-4 hover:text-ink"/>
          </article>)}
        </div>
      </div>
      <div className="mt-7 overflow-hidden rounded-2xl border border-brand-border bg-white p-4 sm:p-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h3 className="flex items-center gap-2 text-lg font-extrabold text-ink"><MapPinned size={20} className="shrink-0 text-brand-maroon" aria-hidden="true"/>Office Coverage Map</h3>
            <p id="office-map-description" className="mt-2 max-w-2xl text-sm leading-6 text-slate-copy">Explore our office cities on the overview map. Markers show approximate city locations; use Get Directions on an office card to navigate using its full address.</p>
          </div>
          <button className="btn-secondary" type="button" aria-expanded={showMap} aria-controls="office-map-panel" onClick={() => setShowMap(value => !value)}>{showMap ? 'Hide Office Map' : 'Load Office Map'}</button>
        </div>
        <div id="office-map-panel" hidden={!showMap} aria-describedby="office-map-description">
          {showMap && <div className="relative z-0 mt-5 overflow-hidden rounded-xl"><OfficesMap markers={markers}/></div>}
        </div>
      </div>
    </div>
  </section>
}
