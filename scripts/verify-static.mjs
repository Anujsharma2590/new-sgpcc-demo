import fs from 'node:fs'
import path from 'node:path'
import {fileURLToPath} from 'node:url'
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..')
const read=file=>fs.readFileSync(path.join(root,file),'utf8')
const exists=file=>fs.existsSync(path.join(root,file))
let fails=0
function check(value,label){console.log(`${value?'PASS':'FAIL'} ${label}`);if(!value)fails++}
const srcServices=read('src/lib/services.ts'),srcImages=read('src/lib/images.ts'),home=read('src/app/page.js'),floor=read('src/app/epoxy-pu-uncrete-flooring/page.js'),layout=read('src/app/layout.js'),head=read('src/components/Header.jsx'),foot=read('src/components/Footer.jsx'),site=read('src/content/site.config.js')
check(srcServices.includes("'/epoxy-pu-uncrete-flooring'"),'canonical flooring path')
check((srcServices.match(/slug:'/g)||[]).length===7,'seven synced services')
check(head.includes('services.map(')&&foot.includes('services.map('),'header/footer shared service list')
check(home.includes('<FlooringShowcase')&&home.includes('<Services'),'flooring homepage entry points')
check(floor.includes('flooring-quote')&&floor.includes('related-heading')&&floor.includes('BreadcrumbList'),'flooring contact and breadcrumbs')
check(layout.includes('LocalBusiness')&&layout.includes('services.map('),'structured business schema')
check(site.includes('https://www.sgpcc.in')&&!site.includes('sgpcc.com'),'canonical www domain')
check(!foot.includes('9610967777'),'no outdated footer number')
check(read('src/data/testimonials.ts').includes('placeholder:true'),'sample reviews flagged')
check(home.includes('publishedTestimonials'),'Review markup restricted to verified entries')
check(read('src/app/globals.css').includes('--color-ink:#22254E'),'logo-derived token palette')
check(srcImages.includes('/images/generated/')&&read('src/components/ui/StockImage.jsx').includes('onError'),'generated image fallback')
check(read('src/components/Hero.jsx').includes('priority'),'priority hero image')
for(const asset of ['public/logo.png','public/og-image.png','public/favicon.ico','public/apple-touch-icon.png','public/icons/icon-192.png','public/icons/icon-512.png','public/manifest.webmanifest','public/patterns/pinwheel-pattern.svg'])check(exists(asset),`brand asset ${asset}`)
for(const route of ['src/app/sitemap.js','src/app/robots.js','src/app/not-found.js','src/app/error.js','src/app/services/[slug]/page.js'])check(exists(route),`route ${route}`)
const imageKeys=['construction','cement','steel','aac','plywood','chemicals','insulation','flooring','warehouse','foodPlant','heavyDuty','application','colourDetail']
for(const key of imageKeys)check(srcImages.includes(`${key}:{src:`),`illustration-backed image key ${key}`)
console.log(`\nStatic tests: ${fails?'FAILED':'PASSED'}`)
process.exitCode=fails?1:0
