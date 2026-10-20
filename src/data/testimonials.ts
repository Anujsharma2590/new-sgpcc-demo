/**
 * Illustrative perspectives are displayed with a disclosure and excluded from
 * review structured data. For a genuine testimonial, record the approved client
 * identity, quote, project and date, then set placeholder:false.
 * Only include a rating or verification when supplied and confirmed.
 */
export type Testimonial = { id:string; name:string; role:string; company:string; city:string; rating?:1|2|3|4|5; quote:string; project:string; date:string; avatar?:string; verifiedProject?:boolean; placeholder:boolean }
export const testimonials:Testimonial[] = [
  {
    id:'perspective-01',
    name:'Procurement Team',
    role:'Industrial Construction',
    company:'',
    city:'',
    quote:'A clear quotation covering brands, grades and quantities makes bulk procurement easier to plan. Coordinating cement, steel and formwork requirements together helps keep the next construction stage organised.',
    project:'Bulk Building Materials',
    date:'',
    placeholder:true,
  },
  {
    id:'perspective-02',
    name:'Plant Maintenance Team',
    role:'Manufacturing & Warehousing',
    company:'',
    city:'',
    quote:'The right industrial floor starts with understanding daily traffic, cleaning and site conditions. A proposal that explains surface preparation, the recommended system and curing time helps us plan around operations.',
    project:'Epoxy & PU Flooring',
    date:'',
    placeholder:true,
  },
  {
    id:'perspective-03',
    name:'Project Execution Team',
    role:'Commercial Construction',
    company:'',
    city:'',
    quote:'Matching waterproofing and repair materials to the project specification is essential. Clear product options, confirmed availability and a delivery plan make it easier to coordinate work at the site.',
    project:'Waterproofing & Construction Chemicals',
    date:'',
    placeholder:true,
  },
]
export const publishedTestimonials=testimonials.filter(t=>!t.placeholder)
