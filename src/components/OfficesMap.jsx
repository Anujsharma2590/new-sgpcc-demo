'use client'
import {useEffect, useRef, useState} from 'react'
import {directionsHref} from '@/lib/maps'
import 'leaflet/dist/leaflet.css'

/** City overview only. Navigation always uses each office's full address. */
export default function OfficesMap({markers}) {
  const containerRef = useRef(null)
  const mapRef = useRef(null)
  const [notice, setNotice] = useState('')

  useEffect(() => {
    let cancelled = false
    let resizeObserver

    async function init() {
      const L = (await import('leaflet')).default
      if (cancelled || !containerRef.current || mapRef.current) return

      const validMarkers = markers.filter(marker =>
        Number.isFinite(marker.lat) && Number.isFinite(marker.lng) &&
        Math.abs(marker.lat) <= 90 && Math.abs(marker.lng) <= 180,
      )
      if (!validMarkers.length) {
        setNotice('The overview map is unavailable. Use Get Directions on an office card to plan your visit.')
        return
      }

      const map = L.map(containerRef.current, {scrollWheelZoom: false, maxZoom: 10})
      mapRef.current = map
      const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer">OpenStreetMap</a> contributors',
        maxZoom: 19,
      })
      tiles.on('tileerror', () => {
        if (!cancelled) setNotice('Some map tiles could not load. Get Directions on each office card is still available.')
      })
      tiles.addTo(map)

      validMarkers.forEach(marker => {
        // DOM text nodes keep office data out of interpreted popup HTML.
        const popup = document.createElement('div')
        const title = document.createElement('strong')
        title.textContent = marker.title
        const description = document.createElement('p')
        description.textContent = 'Approximate city location. Directions use the office address.'
        const address = document.createElement('p')
        address.textContent = marker.address || ''
        popup.append(title, description, address)
        if (marker.address) {
          const link = document.createElement('a')
          link.href = directionsHref(marker.address)
          link.target = '_blank'
          link.rel = 'noopener noreferrer'
          link.textContent = 'Get Directions'
          link.setAttribute('aria-label', `Get directions to ${marker.title} (opens Google Maps in a new tab)`)
          popup.append(link)
        }
        const point = L.circleMarker([marker.lat, marker.lng], {
          radius: 10, color: '#FFFFFF', weight: 2, fillColor: '#444791', fillOpacity: 1,
        }).addTo(map).bindPopup(popup)
        // Circle markers have no external icon dependency and remain keyboard accessible.
        const element = point.getElement()
        if (element) {
          element.setAttribute('tabindex', '0')
          element.setAttribute('role', 'button')
          element.setAttribute('aria-label', `${marker.title}, approximate city location`)
          L.DomEvent.on(element, 'keydown', event => {
            if (event.key === 'Enter' || event.key === ' ') {
              L.DomEvent.preventDefault(event)
              point.openPopup()
            }
          })
        }
      })

      if (validMarkers.length === 1) map.setView([validMarkers[0].lat, validMarkers[0].lng], 9)
      else map.fitBounds(L.latLngBounds(validMarkers.map(marker => [marker.lat, marker.lng])), {padding: [36, 36], maxZoom: 9})

      if (typeof ResizeObserver !== 'undefined') {
        resizeObserver = new ResizeObserver(() => map.invalidateSize())
        resizeObserver.observe(containerRef.current)
      }
    }

    init().catch(() => {
      if (!cancelled) {
        mapRef.current?.remove()
        mapRef.current = null
        setNotice('The overview map could not load. Use Get Directions on an office card to open Google Maps.')
      }
    })

    return () => {
      cancelled = true
      resizeObserver?.disconnect()
      mapRef.current?.remove()
      mapRef.current = null
    }
  }, [markers])

  return <>
    {notice && <p role="status" className="mb-3 rounded-xl border border-brand-border bg-canvas p-4 text-sm leading-6 text-slate-copy">{notice}</p>}
    <div ref={containerRef} className="h-[320px] w-full rounded-xl border border-brand-border sm:h-[420px] lg:h-[480px]" role="region" aria-label="Overview map of office cities; locations are approximate"/>
  </>
}
