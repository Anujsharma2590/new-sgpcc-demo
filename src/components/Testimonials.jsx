'use client'
import useEmblaCarousel from 'embla-carousel-react'
import {ArrowLeft, ArrowRight, Quote, ShieldCheck, Star} from 'lucide-react'
import {testimonials, publishedTestimonials} from '@/data/testimonials'

export default function Testimonials() {
  const [ref, carousel] = useEmblaCarousel({
    align: 'start',
    containScroll: 'trimSnaps',
    breakpoints: {'(min-width: 768px)': {active: false}},
  })
  const hasClientFeedback = publishedTestimonials.length > 0
  const items = hasClientFeedback ? publishedTestimonials : testimonials
  if (!items.length) return null

  return <section className="section-pad bg-[#F7F6F2]" aria-labelledby="testimonials-title">
    <div className="container-responsive">
      <div className="flex items-end justify-between gap-5">
        <div>
          <p className="eyebrow">Project Perspectives</p>
          <h2 id="testimonials-title" className="section-title">{hasClientFeedback ? 'What Clients Say' : 'What Project Teams Value'}</h2>
          <p className="body-copy mt-4 max-w-2xl">{hasClientFeedback
            ? 'Feedback from the people behind the projects we support.'
            : 'Illustrative perspectives on material supply and industrial flooring, rather than actual client reviews.'}</p>
        </div>
        {items.length > 1 && <div className="hidden shrink-0 gap-2 sm:flex md:hidden">
          <button type="button" className="icon-button border border-brand-border bg-white hover:bg-[#FFF3CB]" onClick={() => carousel?.scrollPrev()} aria-label="Previous feedback card"><ArrowLeft size={19}/></button>
          <button type="button" className="icon-button border border-brand-border bg-white hover:bg-[#FFF3CB]" onClick={() => carousel?.scrollNext()} aria-label="Next feedback card"><ArrowRight size={19}/></button>
        </div>}
      </div>
      <div ref={ref} className="mt-8 overflow-hidden">
        <div className="-ml-4 flex touch-pan-y md:ml-0 md:grid md:grid-cols-3 md:gap-5">
          {items.map((item, index) => <div key={item.id} className="min-w-0 flex-[0_0_88%] pl-4 sm:flex-[0_0_55%] md:pl-0">
            <article className="card flex h-full flex-col border-t-4 p-6 sm:p-7" style={{borderTopColor: ['#F6C100', '#444791', '#32B088'][index % 3]}}>
              <Quote size={30} strokeWidth={1.5} className="text-brand-maroon" aria-hidden="true"/>
              {!item.placeholder && typeof item.rating === 'number' && <div role="img" aria-label={`${item.rating} of 5 stars`} className="mt-4 flex gap-1">
                {Array.from({length: 5}, (_, i) => <Star key={i} size={16} fill={i < item.rating ? '#F6C100' : 'none'} color="#8D6B00"/>)}
              </div>}
              <blockquote className="mt-5 flex-1 text-lg leading-8 text-ink">&ldquo;{item.quote}&rdquo;</blockquote>
              <div className="mt-6 border-t border-brand-border pt-5">
                <p className="text-base font-bold text-ink">{item.name}</p>
                <p className="mt-1 text-sm text-slate-copy">{[item.role, item.company].filter(Boolean).join(' · ')}</p>
                <p className="mt-4 inline-flex rounded-full bg-[#F5F1E8] px-3 py-2 text-xs font-bold text-ink">{item.project}</p>
                {!item.placeholder && item.verifiedProject && <p className="mt-3 flex items-center gap-1 text-xs font-bold text-[#17633C]"><ShieldCheck size={15}/>Verified Project</p>}
              </div>
            </article>
          </div>)}
        </div>
      </div>
      <p className="mt-4 text-sm text-slate-copy md:hidden">Swipe to Explore More Perspectives <span aria-hidden="true">→</span></p>
    </div>
  </section>
}
