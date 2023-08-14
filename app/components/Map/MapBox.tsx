'use client'
import { IndexContext } from '@/app/context/IndexContext'
import { useContext } from 'react'
import { Map, Marker } from 'react-map-gl'

function MapBox() {
  const { userLocation } = useContext(IndexContext)
  return (
    <div className="grid gap-3 py-5 pr-3">
      <h2 className="text-xl font-semibold">Map</h2>

      <div className="overflow-hidden rounded">
        <Map
          mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
          initialViewState={{
            longitude: userLocation?.lat ?? -77.27349377964507,
            latitude: userLocation?.lng ?? 1.2017360010698115,
            zoom: 14
          }}
          cursor="pointer"
          style={{ width: '100%', height: 400 }}
          mapStyle="mapbox://styles/mapbox/streets-v9"
        />
        <Marker />
      </div>
    </div>
  )
}

export default MapBox
