'use client'

import { useEffect, useState, useRef } from 'react'
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api'

const containerStyle = {
  width: '100%',
  height: '100%',
}

// Выносим libraries в константу вне компонента
const libraries: ('places' | 'marker')[] = ['places']

interface MapProps {
  center: {
    lat: number
    lng: number
  }
}

export default function Map({ center }: MapProps) {
  const [isMounted, setIsMounted] = useState(false)
  const mapRef = useRef<google.maps.Map | null>(null)

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '',
    libraries,
  })

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted || loadError) {
    return <div>Loading map...</div>
  }

  if (!isLoaded) {
    return <div>Loading map...</div>
  }

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={15}
      onLoad={(map) => {
        mapRef.current = map
      }}
      options={{
        mapTypeId: 'satellite',
        styles: [
          {
            featureType: 'all',
            elementType: 'geometry',
            stylers: [{ color: '#f5f5f5' }],
          },
          {
            featureType: 'water',
            elementType: 'geometry',
            stylers: [{ color: '#e9e9e9' }],
          },
        ],
      }}
    >
      <Marker position={center} />
    </GoogleMap>
  )
}
