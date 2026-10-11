'use client'
import { useRef, useState } from 'react'
import { ChevronLeft, ChevronRight, Maximize2, X } from 'lucide-react'
import StockImage from '@/components/ui/StockImage'

const gallery = [
  { key: 'warehouse', label: 'Warehouse flooring' },
  { key: 'application', label: 'Industrial coating application' },
  { key: 'foodPlant', label: 'Food-production space' },
  { key: 'colourDetail', label: 'Coloured resin surface' },
  { key: 'heavyDuty', label: 'Heavy-duty floor finish' },
]
export default function FlooringGallery() {
  const dialog = useRef(null)
  const [active, setActive] = useState(0)
  function open(index) { setActive(index); dialog.current?.showModal() }
  function move(direction) { setActive(i => (i + direction + gallery.length) % gallery.length) }
  function keyDown(e) { if (e.key === 'ArrowRight') move(1); if (e.key === 'ArrowLeft') move(-1) }
  return <section id="flooring-gallery" className="section-pad bg-white" aria-labelledby="gallery-heading"><div className="container-responsive"><p className="eyebrow">Visual references</p><h2 id="gallery-heading" className="section-title">Explore industrial floor finishes</h2><p className="body-copy mt-4">Original illustrations or generated visual references. These are not SGPCC before/after photographs or evidence of completed projects.</p><div className="mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-5 md:grid md:grid-cols-3 md:overflow-visible lg:grid-cols-5">{gallery.map((item,i)=><button type="button" key={item.key} aria-label={`Open ${item.label} photograph in gallery`} aria-haspopup="dialog" onClick={() => open(i)} className="group card relative w-[80%] shrink-0 snap-start overflow-hidden text-left sm:w-[48%] md:w-auto"><StockImage name={item.key} className="aspect-[4/3]" sizes="(max-width: 768px) 85vw, 20vw"/><span className="flex min-h-12 items-center justify-between gap-2 px-3 text-sm font-bold text-slate-950">{item.label}<Maximize2 size={16}/></span></button>)}</div></div>
    <dialog ref={dialog} aria-label="Industrial flooring photo gallery" onKeyDown={keyDown} className="gallery-dialog fixed inset-0 m-auto w-[min(96vw,1050px)] max-w-none rounded-2xl border-0 bg-[#101f2e] p-3 text-white shadow-2xl sm:p-5"><div className="mb-3 flex items-center justify-between gap-3"><p className="text-sm font-semibold">{gallery[active].label} · {active + 1} of {gallery.length}</p><button type="button" autoFocus onClick={() => dialog.current?.close()} aria-label="Close gallery" className="icon-button text-white"><X size={22}/></button></div><StockImage name={gallery[active].key} className="aspect-[4/3] max-h-[70dvh] w-full rounded-xl sm:aspect-[16/10]" sizes="96vw"/><div className="mt-3 flex justify-between"><button type="button" onClick={() => move(-1)} className="btn-dark" aria-label="Previous photo"><ChevronLeft size={19}/>Previous</button><button type="button" onClick={() => move(1)} className="btn-dark" aria-label="Next photo">Next<ChevronRight size={19}/></button></div><p className="mt-2 text-xs text-slate-300">Concept visual · not a verified SGPCC project</p></dialog>
  </section>
}
