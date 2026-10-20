import Link from 'next/link'
import {ArrowRight, ArrowUpRight, ClipboardList, MessageSquareText, PackageCheck, Truck} from 'lucide-react'
import Reveal from '@/components/Reveal'

const steps = [
  {title: 'Share Your Requirement', text: 'Tell us your project location, required materials, specifications and quantities.', icon: MessageSquareText},
  {title: 'Technical & Product Review', text: 'We review the brand, grade, specifications and project requirements.', icon: ClipboardList},
  {title: 'Get Your Best Quote', text: 'Receive a project-based quotation with pricing, availability and delivery terms.', icon: PackageCheck},
  {title: 'Supply to Your Site', text: 'We coordinate material dispatch and delivery according to agreed terms.', icon: Truck},
]

export default function HowItWorks() {
  return <section className="section-pad bg-white" aria-labelledby="process-title">
    <div className="container-responsive">
      <p className="eyebrow">A Straightforward Process</p>
      <h2 id="process-title" className="section-title">From Enquiry to Site Supply</h2>
      <ol className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, i) => <li key={step.title} className="relative">
          <Reveal delay={i * .07} className="h-full">
            <article className="card h-full p-6">
              <div className="flex justify-between">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#F9EFCB] text-ink"><step.icon size={23} strokeWidth={1.75} aria-hidden="true"/></span>
                <span className="text-2xl font-bold tabular-nums text-[#7A7F96]">0{i + 1}</span>
              </div>
              <h3 className="type-h4 mt-6 font-extrabold">{step.title}</h3>
              <p className="mt-3 text-base leading-7 text-slate-copy">{step.text}</p>
            </article>
          </Reveal>
          {i < steps.length - 1 && <span aria-hidden="true" className="absolute -right-5 top-10 z-10 hidden h-5 w-5 items-center justify-center rounded-full bg-brand-yellow text-ink lg:flex"><ArrowRight size={15}/></span>}
        </li>)}
      </ol>
      <div className="mt-9 text-center">
        <Link href="/#quote" className="btn-primary">Request a Bulk Quote <ArrowUpRight size={18} aria-hidden="true"/></Link>
        <p className="mt-3 text-sm text-slate-copy">For Industrial and Commercial Project Enquiries</p>
      </div>
    </div>
  </section>
}
