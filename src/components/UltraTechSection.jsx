'use client'
import Image from 'next/image'
import Link from 'next/link'
import {useCallback, useEffect, useState} from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import {useReducedMotion} from 'motion/react'
import {ArrowUpRight, Check, ChevronLeft, ChevronRight, Pause, Play} from 'lucide-react'

const photos = [
  {src: '/ultra-tech-truck.png', alt: 'UltraTech cement delivery truck'},
  {src: '/ultratech-cement.webp', alt: 'UltraTech cement warehouse'},
  {src: '/ultra-tech-bags.jpg', alt: 'Stacked UltraTech cement bags'},
]
const benefits = ['Building Products Division', 'Grey Cement Supply', 'Ready Mix Concrete (RMC)', 'Pan-India Delivery', 'Serving Project-Based Orders']

export default function UltraTechSection() {
  const reducedMotion = useReducedMotion()
  const [viewportRef, carousel] = useEmblaCarousel({loop: photos.length > 1})
  const [selected, setSelected] = useState(0)
  const [paused, setPaused] = useState(false)
  const [hovered, setHovered] = useState(false)
  const [focused, setFocused] = useState(false)
  const onSelect = useCallback(api => setSelected(api.selectedScrollSnap()), [])

  useEffect(() => {
    if (!carousel) return
    carousel.on('select', onSelect)
    return () => { carousel.off('select', onSelect) }
  }, [carousel, onSelect])

  useEffect(() => {
    if (!carousel || reducedMotion || paused || hovered || focused || photos.length < 2) return
    const timer = window.setInterval(() => carousel.scrollNext(), 3000)
    return () => window.clearInterval(timer)
  }, [carousel, reducedMotion, paused, hovered, focused])

  const move = direction => {
    setPaused(true)
    if (direction === 'previous') carousel?.scrollPrev()
    else carousel?.scrollNext()
  }

  return <section className="bg-gradient-to-r from-[#F5C518] to-[#D6A317] py-12 text-[#162C65] sm:py-16" aria-labelledby="ultratech-heading">
    <div className="container-responsive">
      <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-10">
        <div className="order-2 lg:order-1">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#162C65]/10 px-3 py-2 text-sm font-semibold"><span className="h-2 w-2 rounded-full bg-[#162C65]" aria-hidden="true"/>Authorised Dealer</p>
          <h2 id="ultratech-heading" className="type-h2 font-extrabold">UltraTech Cement<span className="mt-2 block text-xl font-medium tracking-normal sm:text-2xl">The Engineer&apos;s Choice</span></h2>
          <p className="mt-5 max-w-xl text-lg leading-8">Authorised Dealer of Non-Trade UltraTech Grey Cement & RMC for Projects Across India</p>
          <ul className="mt-5 space-y-3">{benefits.map(item => <li key={item} className="flex items-center gap-3 text-base font-semibold"><span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#162C65] text-white"><Check size={15} aria-hidden="true"/></span>{item}</li>)}</ul>
          <p className="mt-4 text-sm leading-6">Availability, freight and RMC plant serviceability are confirmed for each project.</p>
          <Link href="/services/cement-rmc#quote" className="mt-7 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#162C65] px-5 py-3 font-bold text-white hover:bg-[#243E83]">Get UltraTech Quote <ArrowUpRight size={18} aria-hidden="true"/></Link>
        </div>
        <div className="relative order-1 pb-20 pr-3 sm:pr-6 lg:order-2">
          <div className="relative overflow-hidden rounded-2xl bg-white shadow-2xl sm:rounded-3xl" role="region" aria-roledescription="carousel" aria-label="UltraTech Cement Photos" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} onFocusCapture={() => setFocused(true)} onBlurCapture={event => { if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false) }}>
            <div ref={viewportRef} className="overflow-hidden">
              <div className="flex touch-pan-y">
                {photos.map((photo, index) => <div key={photo.src} className="relative aspect-[4/3] min-w-0 flex-[0_0_100%]" role="group" aria-roledescription="slide" aria-label={`${index + 1} of ${photos.length}`} aria-hidden={selected !== index}>
                  <Image src={photo.src} alt={photo.alt} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover"/>
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/60 to-transparent" aria-hidden="true"/>
                </div>)}
              </div>
            </div>
            <div className="absolute inset-x-3 bottom-3 flex items-center justify-between gap-3">
              <div className="flex gap-1"><button type="button" className="flex h-11 w-11 items-center justify-center rounded-full bg-[#162C65] text-white hover:bg-[#243E83]" aria-label="Previous UltraTech Photo" onClick={() => move('previous')}><ChevronLeft size={21}/></button><button type="button" className="flex h-11 w-11 items-center justify-center rounded-full bg-[#162C65] text-white hover:bg-[#243E83]" aria-label="Next UltraTech Photo" onClick={() => move('next')}><ChevronRight size={21}/></button></div>
              <div className="flex items-center rounded-full bg-[#162C65] px-1">{photos.map((photo, index) => <button type="button" key={photo.src} onClick={() => {setPaused(true); carousel?.scrollTo(index)}} aria-label={`Show UltraTech Photo ${index + 1}`} aria-current={selected === index ? 'true' : undefined} className="flex h-11 w-9 items-center justify-center"><span className={`h-2.5 w-2.5 rounded-full ${selected === index ? 'bg-white' : 'bg-white/50'}`}/></button>)}</div>
              {<button type="button" className="flex h-11 w-11 items-center justify-center rounded-full bg-[#162C65] text-white motion-reduce:hidden" onClick={() => setPaused(value => !value)} aria-label={paused ? 'Play UltraTech Slideshow' : 'Pause UltraTech Slideshow'}>{paused ? <Play size={18}/> : <Pause size={18}/>}</button>}
            </div>
          </div>
          <div className="absolute bottom-0 right-0 rounded-xl border border-brand-border bg-white p-3 shadow-lg sm:p-4"><p className="text-xl font-extrabold text-[#162C65]">Project</p><p className="text-sm text-slate-copy">Material Supply</p></div>
        </div>
      </div>
    </div>
  </section>
}
