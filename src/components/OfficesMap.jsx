'use client'

import { useEffect, useRef } from 'react'

/**
 * Renders an OpenStreetMap (via Leaflet) with one pin per office.
 * Loaded through next/dynamic with { ssr: false } from Contact.jsx,
 * since Leaflet touches `window` and can't run on the server.
 *
 * Install once:
 *   npm install leaflet
 */
export default function OfficesMap({ markers }) {
  const containerRef = useRef(null)
  const mapRef = useRef(null)

  useEffect(() => {
    let cancelled = false

    async function init() {
      const L = (await import('leaflet')).default
      await import('leaflet/dist/leaflet.css')

      if (cancelled || !containerRef.current || mapRef.current) return

      // Fix default marker icons (Leaflet's bundled paths break under bundlers)
      delete L.Icon.Default.prototype._getIconUrl
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
        iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
        shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
      })

      const validMarkers = markers.filter((m) => m.lat && m.lng)
      if (validMarkers.length === 0) return

      const map = L.map(containerRef.current, {
        scrollWheelZoom: false,
      })
      mapRef.current = map

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors',
        maxZoom: 19,
      }).addTo(map)

      const bounds = L.latLngBounds(validMarkers.map((m) => [m.lat, m.lng]))

      validMarkers.forEach((m) => {
        L.marker([m.lat, m.lng])
          .addTo(map)
          .bindPopup(
            `<strong>${m.title}</strong><br/>${m.subtitle ? `${m.subtitle}<br/>` : ''}${
              m.address || ''
            }`
          )
      })

      if (validMarkers.length === 1) {
        map.setView([validMarkers[0].lat, validMarkers[0].lng], 12)
      } else {
        map.fitBounds(bounds, { padding: [32, 32] })
      }
    }

    init()

    return () => {
      cancelled = true
      if (mapRef.current) {
        mapRef.current.remove()
        mapRef.current = null
      }
    }
  }, [markers])

  return (
    <div
      ref={containerRef}
      className="w-full h-[320px] sm:h-[420px] lg:h-[480px] rounded-xl border"
      aria-label="Map of all office locations"
    />
  )
}
