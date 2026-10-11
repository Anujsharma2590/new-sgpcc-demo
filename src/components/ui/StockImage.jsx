'use client'
import {useState} from 'react'
import Image from 'next/image'
import {images} from '@/lib/images'
import IndustrialIllustration from '@/components/illustrations/IndustrialIllustration'
const blurData='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjE2IiBoZWlnaHQ9IjEwIiBmaWxsPSIjZTllYmY0Ii8+PC9zdmc+'
/** Image first. A missing generated file triggers the matching original SVG scene. */
export default function StockImage({name,image,priority=false,className='',sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'}){
 const [failed,setFailed]=useState(false)
 const record=image ?? images[name];const src=record?.src; const fallback=record?.illustration || 'flooring'
 if(!record||failed) return <div className={`relative overflow-hidden bg-[#e9ebf4] ${className}`}><IndustrialIllustration type={fallback} className="absolute inset-0 h-full w-full object-cover" title={record?.alt||'Construction materials illustration'}/></div>
 return <div className={`relative overflow-hidden bg-[#e9ebf4] ${className}`}><Image src={src} alt={record.alt} fill sizes={sizes} priority={priority} placeholder="blur" blurDataURL={blurData} onError={()=>setFailed(true)} className="object-cover transition-transform duration-500 motion-reduce:transition-none group-hover:scale-[1.025]"/></div>
}
