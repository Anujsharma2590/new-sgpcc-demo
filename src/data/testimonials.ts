/**
 * How to add a genuine testimonial: obtain written consent and record the real
 * client identity, verbatim quote, project/product and date. Set placeholder:false.
 * Never publish fabricated reviews. Leave rating undefined if not supplied.
 */
export type Testimonial = { id:string; name:string; role:string; company:string; city:string; rating?:1|2|3|4|5; quote:string; project:string; date:string; avatar?:string; verifiedProject?:boolean; placeholder:boolean }
export const testimonials:Testimonial[] = [
  {id:'sample-01',name:'Client Name',role:'[Role]',company:'[Company]',city:'[City]',quote:'[Sample — replace with a real client’s feedback]',project:'[Product or project]',date:'[YYYY-MM-DD]',placeholder:true},
  {id:'sample-02',name:'Client Name',role:'[Role]',company:'[Company]',city:'[City]',quote:'[Sample — replace with a real client’s feedback]',project:'[Product or project]',date:'[YYYY-MM-DD]',placeholder:true},
  {id:'sample-03',name:'Client Name',role:'[Role]',company:'[Company]',city:'[City]',quote:'[Sample — replace with a real client’s feedback]',project:'[Product or project]',date:'[YYYY-MM-DD]',placeholder:true},
]
export const publishedTestimonials=testimonials.filter(t=>!t.placeholder)
