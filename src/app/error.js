'use client'
import { useEffect } from 'react'
export default function Error({ error, reset }) {
  useEffect(() => { if (process.env.NODE_ENV !== 'production') console.error('Page render failed', error) }, [error])
  return <section role="alert" className="container-responsive flex min-h-[50vh] flex-col items-center justify-center py-16 text-center"><h1 className="text-3xl font-extrabold">We couldn't load this page.</h1><p className="body-copy mt-3">Please retry, or call SGPCC using the contact links below.</p><button type="button" onClick={() => reset()} className="btn-primary mt-6">Try again</button></section>
}
