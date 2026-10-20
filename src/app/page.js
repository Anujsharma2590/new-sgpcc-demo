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
import ServiceAreas from '@/components/ServiceAreas'
import {homeFaqs} from '@/content/home-faqs'
const realReviews=publishedTestimonials.filter(t=>t.rating&&t.quote&&t.date&&!t.date.includes('['))
const reviewLd=realReviews.length?{'@context':'https://schema.org','@type':'LocalBusiness','@id':`${config.siteUrl}/#business`,aggregateRating:{'@type':'AggregateRating',ratingValue:Number((realReviews.reduce((a,t)=>a+t.rating,0)/realReviews.length).toFixed(2)),reviewCount:realReviews.length,bestRating:5},review:realReviews.map(t=>({'@type':'Review',author:{'@type':'Person',name:t.name},datePublished:t.date,reviewBody:t.quote,reviewRating:{'@type':'Rating',ratingValue:t.rating,bestRating:5}}))}:null
export default function Home(){return <>{reviewLd&&<script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(reviewLd).replace(/</g,'\u003c')}}/>}<Hero/><StatsRow/><UltraTechSection/><Services/><FlooringShowcase/><Partners/><HowItWorks/><FAQ id="home-faq" items={homeFaqs} title="Frequently Asked Questions About Building Materials & Industrial Flooring" description="Find the right product and send a clear project brief." dark/><Testimonials/><Contact/><ServiceAreas/><QuoteSection/></>}
