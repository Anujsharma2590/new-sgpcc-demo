'use client'
import {useEffect,useRef,useState} from 'react'
import {useInView,useReducedMotion} from 'motion/react'
import config from '@/content/site.config'
import {services} from '@/lib/services'
function Count({value}){const ref=useRef(null);const active=useInView(ref,{once:true,amount:.2});const reduced=useReducedMotion();const [n,setN]=useState(reduced?value:0);useEffect(()=>{if(!active)return;if(reduced){setN(value);return}let raf;const start=performance.now();const tick=now=>{const t=Math.min(1,(now-start)/550);setN(Math.round(value*(1-Math.pow(1-t,3))));if(t<1)raf=requestAnimationFrame(tick)};raf=requestAnimationFrame(tick);return()=>cancelAnimationFrame(raf)},[active,reduced,value]);return <span ref={ref} className="tabular-nums">{n}</span>}
export default function StatsRow(){const stats=[{n:services.length,label:'service categories'},{n:config.partners.length,label:'listed partner brands'},{n:config.contacts.offices.length+1,label:'office locations'}];return <section className="bg-[#22254E] text-white" aria-label="SGPCC catalogue at a glance"><div className="container-responsive grid grid-cols-3 gap-3 py-8 sm:py-10">{stats.map(s=><div key={s.label} className="text-center"><p className="text-[clamp(1.7rem,3.6vw,3rem)] font-extrabold"><Count value={s.n}/></p><p className="mt-1 text-xs font-medium text-[#E5E7F1] sm:text-base">{s.label}</p></div>)}</div></section>}
