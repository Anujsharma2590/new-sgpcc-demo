'use client'
import { useMemo, useState } from 'react'
import dynamic from 'next/dynamic'
import { Building2, Mail, MapPin, Phone, MapPinned } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import config, { whatsappHref } from '@/content/site.config'

const OfficesMap = dynamic(() => import('./OfficesMap'), { ssr: false, loading: () => <div className="h-80 animate-pulse rounded-2xl bg-slate-200" role="status" aria-label="Loading office map"/> })
export default function Contact() {
  const [showMap, setShowMap] = useState(false)
  const markers = useMemo(() => [
    { title: 'Head office', address: config.contacts.address, lat: config.contacts.lat, lng: config.contacts.lng },
    ...config.contacts.offices.map((o) => ({ title: o.city, address: o.lines.join(', '), lat: o.lat, lng: o.lng })),
  ], [])
  return <section id="contact" className="section-pad bg-[#f5f7f8]" aria-labelledby="contact-title"><div className="container-responsive">
    <p className="eyebrow">Where to find us</p><h2 className="section-title" id="contact-title">Local teams. Project supply across India.</h2><p className="body-copy mt-4 max-w-2xl">Our head office is in Bhiwadi, with listed branches in Haryana, Maharashtra and Delhi. Confirm dispatch and availability for your location when requesting a quote.</p>
    <div id="locations" className="mt-9 grid gap-5 lg:grid-cols-[1.1fr_.9fr]">
      <div className="card p-6 sm:p-8"><div className="flex items-center gap-2 text-teal-800"><Building2 size={21}/><span className="text-xs font-extrabold uppercase tracking-widest">Head office · Bhiwadi</span></div><h3 className="mt-4 text-xl font-extrabold text-slate-950">Shree Ganesh Plywood & Construction Chemicals</h3><p className="mt-3 text-sm leading-7 text-slate-600">{config.contacts.address}</p><p className="mt-3 text-xs text-slate-500">GSTIN: {config.contacts.gstin}</p><div className="mt-5 grid gap-2 sm:grid-cols-2">{config.contacts.phones.map((p) => <a key={p.number} className="flex min-h-12 items-center gap-2 rounded-xl border border-slate-200 px-3 text-sm font-semibold text-teal-900 hover:border-teal-500" href={`tel:${p.number.replace(/\s/g,'')}`}><Phone size={16}/>{p.number}<span className="sr-only">{p.label}</span></a>)}</div><div className="mt-4 flex flex-wrap gap-3"><a href={whatsappHref('Hello SGPCC, I would like to enquire about project materials.')} target="_blank" rel="noopener noreferrer" className="btn-whatsapp"><span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#075E54] text-white"><FaWhatsapp size={17}/></span>WhatsApp</a><a href={`mailto:${config.contacts.email}`} className="btn-secondary"><Mail size={17}/>Email us</a></div></div>
      <div className="grid gap-3">{config.contacts.offices.map((office) => <article key={office.city} className="card p-5"><h3 className="flex items-center gap-2 text-base font-extrabold text-slate-950"><MapPin size={17} className="text-teal-800"/>{office.city}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{office.lines.join(', ')}</p>{office.gstin && <p className="mt-2 text-xs text-slate-500">GSTIN: {office.gstin}</p>}</article>)}</div>
    </div>
    <div className="mt-7 overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 sm:p-6"><div className="flex flex-wrap items-center justify-between gap-4"><div><h3 className="flex items-center gap-2 text-lg font-extrabold"><MapPinned size={20} className="text-teal-800"/> Office locations map</h3><p className="mt-2 text-sm text-slate-600">[TODO: Verify exact map pin coordinates before publishing precise directions.]</p></div><button className="btn-secondary" type="button" onClick={() => setShowMap((v) => !v)}>{showMap ? 'Hide office map' : 'Load office map'}</button></div>{showMap && <div className="mt-5 overflow-hidden rounded-xl"><OfficesMap markers={markers} /></div>}</div>
  </div></section>
}
