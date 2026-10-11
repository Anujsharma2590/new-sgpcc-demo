'use client'
import {MotionConfig} from 'motion/react'
/** Honor the user's reduced-motion preference globally. */
export default function MotionProvider({children}){return <MotionConfig reducedMotion="user">{children}</MotionConfig>}
