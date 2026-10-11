'use client'
import {useEffect,useState} from 'react'
import {AnimatePresence,motion} from 'motion/react'
import {usePathname} from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import {ChevronDown,Menu,X,ArrowUpRight,Phone} from 'lucide-react'
import config from '@/content/site.config'
import {services,FLOORING_PATH} from '@/lib/services'

export default function Header(){
 const [open,setOpen]=useState(false),[servicesOpen,setServicesOpen]=useState(false)
 const pathname=usePathname()
 const quoteHref=pathname===FLOORING_PATH?'#flooring-quote':pathname?.startsWith('/services/')?'#quote':'/#quote'
 useEffect(()=>{setOpen(false);setServicesOpen(false)},[pathname])
 useEffect(()=>{const onKey=e=>{if(e.key==='Escape'){setOpen(false);setServicesOpen(false)}};window.addEventListener('keydown',onKey);return()=>window.removeEventListener('keydown',onKey)},[])
 const close=()=>{setOpen(false);setServicesOpen(false)}
 return <><a href="#main-content" className="skip-link">Skip to main content</a>
 <header className="sticky top-0 z-50 border-b border-brand-border bg-[#FBFAF7]/95 backdrop-blur-lg"><div className="rainbow-divider" aria-hidden="true"/>
 <div className="container-responsive flex h-[74px] items-center justify-between gap-3">
 <Link href="/" onClick={close} aria-label="SGPCC home" className="flex min-w-0 items-center gap-2.5 rounded-lg"><Image src={config.company.logo} alt="" width={56} height={56} className="h-12 w-12 shrink-0 object-contain"/><span className="leading-tight"><strong className="block text-lg font-extrabold tracking-tight text-ink">SGPCC</strong><span className="hidden text-[11px] font-medium text-slate-copy sm:block">Building materials & industrial flooring</span></span></Link>
 <nav className="hidden items-center gap-4 lg:flex" aria-label="Main navigation"><Link className="nav-link" href="/">Home</Link><details className="group relative"><summary className="nav-link cursor-pointer list-none gap-1 [&::-webkit-details-marker]:hidden">Services <ChevronDown size={16}/></summary><div className="absolute left-1/2 top-full z-50 w-[450px] -translate-x-1/2 rounded-2xl border border-brand-border bg-white p-3 shadow-xl"><div className="grid grid-cols-2 gap-1">{services.map(s=><Link href={s.href} key={s.slug} className="rounded-xl px-3 py-3 text-sm font-medium text-ink hover:bg-[#FFF7D9]">{s.title}</Link>)}</div><Link href="/#services" className="mt-2 flex items-center justify-between border-t border-brand-border px-3 py-3 text-sm font-bold text-brand-maroon">All services <ArrowUpRight size={17}/></Link></div></details><Link className="nav-link" href="/#partners">Brands</Link><Link className="nav-link" href="/#locations">Locations</Link><Link className="nav-link" href="/#contact">Contact</Link><Link href={quoteHref} className="btn-primary">Request quote <ArrowUpRight size={17}/></Link></nav>
 <div className="flex gap-2 lg:hidden"><a href={`tel:${config.contacts.phones[0].number.replace(/\s/g,'')}`} className="icon-button border border-brand-border" aria-label="Call SGPCC sales"><Phone size={19}/></a><button aria-expanded={open} aria-controls="mobile-nav" aria-label={open?'Close menu':'Open menu'} onClick={()=>setOpen(v=>!v)} type="button" className="icon-button border border-brand-border">{open?<X size={23}/>:<Menu size={23}/>}</button></div></div>
 <AnimatePresence>{open&&<motion.nav id="mobile-nav" key="mobile-nav" aria-label="Mobile navigation" initial={{opacity:0,height:0}} animate={{opacity:1,height:'auto'}} exit={{opacity:0,height:0}} transition={{duration:.23}} className="max-h-[calc(100dvh-78px)] overflow-y-auto border-t border-brand-border bg-white px-4 pb-8 pt-3 lg:hidden"><Link onClick={close} className="mobile-link" href="/">Home</Link><button type="button" onClick={()=>setServicesOpen(v=>!v)} aria-expanded={servicesOpen} aria-controls="mobile-services" className="mobile-link flex w-full items-center justify-between">Products & Services <ChevronDown size={17} className={servicesOpen?'rotate-180':''}/></button><AnimatePresence>{servicesOpen&&<motion.div id="mobile-services" initial={{height:0,opacity:0}} animate={{height:'auto',opacity:1}} exit={{height:0,opacity:0}} className="ml-2 overflow-hidden border-l-2 border-brand-yellow pl-3">{services.map(s=><Link key={s.slug} href={s.href} onClick={close} className="mobile-link text-sm">{s.title}</Link>)}</motion.div>}</AnimatePresence><Link href="/#partners" onClick={close} className="mobile-link">Brands we supply</Link><Link href="/#locations" onClick={close} className="mobile-link">Our locations</Link><Link href="/#contact" onClick={close} className="mobile-link">Contact</Link><Link href={quoteHref} onClick={close} className="btn-primary mt-3 w-full">Request quote <ArrowUpRight size={17}/></Link></motion.nav>}</AnimatePresence></header></>
}
