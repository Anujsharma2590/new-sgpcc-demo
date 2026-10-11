import Hero from '@/components/Hero'
import StatsRow from '@/components/StatsRow'
import UltraTechSection from '@/components/UltraTechSection'
import Services from '@/components/Services'
import FlooringShowcase from '@/components/FlooringShowcase'
import Partners from '@/components/Partners'
import HowItWorks from '@/components/HowItWorks'
import FAQ from '@/components/FAQ'
import Contact from '@/components/Contact'
import QuoteSection from '@/components/QuoteSection'
import Testimonials from '@/components/Testimonials'
import {publishedTestimonials} from '@/data/testimonials'
import config from '@/content/site.config'
const faqs=[{q:'Can I request bulk building materials for an industrial project?',a:'Yes. Share the material list, grades, quantity, delivery location and expected date for a project-based quotation.'},{q:'Which products does SGPCC supply?',a:'Cement, ready-mix concrete, steel and steel fibres, AAC blocks, shuttering plywood, pinewood, construction chemicals, insulation and industrial flooring.'},{q:'Do you handle epoxy and PU flooring?',a:'Yes. Our flooring page explains epoxy, polyurethane and polyurethane-cementitious flooring options, and how to request application support.'},{q:'Can SGPCC supply outside Rajasthan?',a:'SGPCC handles pan-India project enquiries. Delivery arrangements and availability are confirmed for each enquiry.'},{q:'What details help you prepare a quote?',a:'Send your project city, specifications or grade, approximate area or quantity and target delivery date.'}]
const realReviews=publishedTestimonials.filter(t=>t.rating&&t.quote&&t.date&&!t.date.includes('['))
const reviewLd=realReviews.length?{'@context':'https://schema.org','@type':'LocalBusiness','@id':`${config.siteUrl}/#business`,aggregateRating:{'@type':'AggregateRating',ratingValue:Number((realReviews.reduce((a,t)=>a+t.rating,0)/realReviews.length).toFixed(2)),reviewCount:realReviews.length,bestRating:5},review:realReviews.map(t=>({'@type':'Review',author:{'@type':'Person',name:t.name},datePublished:t.date,reviewBody:t.quote,reviewRating:{'@type':'Rating',ratingValue:t.rating,bestRating:5}}))}:null
export default function Home(){return <>{reviewLd&&<script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(reviewLd).replace(/</g,'\u003c')}}/>}<Hero/><StatsRow/><UltraTechSection/><Services/><FlooringShowcase/><Partners/><HowItWorks/><FAQ id="home-faq" items={faqs} title="Questions before you enquire" description="Find the right product and send a clear project brief." dark/><Testimonials/><Contact/><QuoteSection/></>}
