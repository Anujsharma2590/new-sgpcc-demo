'use client'
import {FaWhatsapp} from 'react-icons/fa'
import {usePathname} from 'next/navigation'
import {whatsappHref} from '@/content/site.config'
import {services,FLOORING_PATH} from '@/lib/services'
export function useWhatsAppLink(explicit){const path=usePathname();const current=services.find(s=>s.href===path);const name=explicit || current?.title || (path===FLOORING_PATH?'Industrial Flooring':'Building Materials');return {name,url:whatsappHref(`Hi SGPCC, I need a quote for ${name}.`)}}
export default function WhatsAppButton({service,children='Get Quote on WhatsApp',floating=false,className=''}){
 const {name,url}=useWhatsAppLink(service)
 if(floating) return <a href={url} target="_blank" rel="noopener noreferrer" aria-label={`WhatsApp SGPCC about ${name}`} className={`wa-float fixed bottom-6 right-6 z-40 hidden min-h-12 items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 font-bold text-ink shadow-xl transition hover:bg-[#1EBE5A] lg:inline-flex ${className}`}><span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#075E54] text-white"><FaWhatsapp size={20} aria-hidden="true"/></span>WhatsApp</a>
 return <a href={url} target="_blank" rel="noopener noreferrer" className={`btn-whatsapp ${className}`}><span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#075E54] text-white"><FaWhatsapp size={20} aria-hidden="true"/></span>{children}</a>
}
