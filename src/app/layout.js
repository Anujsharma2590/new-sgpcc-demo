import {Inter,Plus_Jakarta_Sans,Noto_Sans_Devanagari} from 'next/font/google'
import config from '@/content/site.config'
import {services} from '@/lib/services'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import MobileActions from '@/components/MobileActions'
import MotionProvider from '@/components/MotionProvider'
import {Toaster} from 'sonner'
import './globals.css'
const inter=Inter({subsets:['latin'],variable:'--font-inter',display:'swap'})
const jakarta=Plus_Jakarta_Sans({subsets:['latin'],variable:'--font-jakarta',display:'swap'})
const devanagari=Noto_Sans_Devanagari({subsets:['devanagari','latin'],variable:'--font-devanagari',display:'swap'})
// TODO: Insert real Search Console verification code once verified.
export const metadata={metadataBase:new URL(config.siteUrl),title:{default:config.seo.title,template:`%s | ${config.company.shortName}`},description:config.seo.description,alternates:{canonical:'/'},openGraph:{type:'website',locale:'en_IN',url:config.siteUrl,title:config.seo.title,description:config.seo.description,siteName:config.company.name,images:[{url:'/og-image.png',width:1200,height:630,alt:'SGPCC building materials and industrial flooring'}]},twitter:{card:'summary_large_image',images:['/og-image.png']},robots:{index:true,follow:true,googleBot:{index:true,follow:true,'max-image-preview':'large'}},icons:{icon:'/favicon.ico',apple:'/apple-touch-icon.png'},manifest:'/manifest.webmanifest',other:{'theme-color':'#22254E'}}
const businessSchema={'@context':'https://schema.org','@type':['Organization','LocalBusiness'],'@id':`${config.siteUrl}/#business`,name:config.company.name,alternateName:config.company.shortName,url:config.siteUrl,logo:`${config.siteUrl}/logo.png`,image:`${config.siteUrl}/og-image.png`,description:config.company.about,email:config.contacts.email,telephone:config.contacts.phones[0].number,address:{'@type':'PostalAddress',streetAddress:config.contacts.streetAddress,addressLocality:'Bhiwadi',addressRegion:'Rajasthan',postalCode:config.contacts.postalCode,addressCountry:'IN'},contactPoint:config.contacts.phones.map(p=>({'@type':'ContactPoint',telephone:p.number,contactType:p.label,areaServed:'IN',availableLanguage:['en','hi']})),areaServed:{'@type':'Country',name:'India'},hasOfferCatalog:{'@type':'OfferCatalog',name:'Building materials and industrial flooring',itemListElement:services.map(s=>({'@type':'OfferCatalog',name:s.title,description:s.shortDescription}))}}
export default function RootLayout({children}){return <html lang="en-IN"><body className={`${inter.variable} ${jakarta.variable} ${devanagari.variable} bg-canvas text-ink antialiased`}><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(businessSchema).replace(/</g,'\u003c')}}/><MotionProvider><Header/><main id="main-content" className="min-h-[calc(100vh-76px)]">{children}</main><Footer/><MobileActions/><Toaster richColors closeButton position="top-right"/></MotionProvider></body></html>}
