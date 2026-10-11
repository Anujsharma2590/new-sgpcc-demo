'use client'
import {motion, useReducedMotion} from 'motion/react'
export default function Reveal({children,className='',delay=0,as='div'}){
 const reduced=useReducedMotion();const M=motion[as]||motion.div
 return <M className={className} initial={reduced?false:{opacity:0,y:16}} whileInView={reduced?undefined:{opacity:1,y:0}} viewport={{once:true,amount:.1}} transition={{duration:.42,delay}}>{children}</M>
}
