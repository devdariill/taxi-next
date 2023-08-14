'use client'
import { IndexContext } from '@/app/context/IndexContext'
import { useUser } from '@clerk/nextjs'
import 'mapbox-gl/dist/mapbox-gl.css'
import { useContext, useEffect, useRef } from 'react'
import { Map } from 'react-map-gl'
import Markers from './Marker'

function MapBox() {
  const { userLocation, newLocation } = useContext(IndexContext)

  const user = useUser()

  const mapRef = useRef<any>()

  // center map on user location
  useEffect(() => {
    if (newLocation.bool && mapRef.current != null) {
      mapRef.current.flyTo({
        center: [newLocation.lng, newLocation.lat],
        duration: 2500,
        zoom: 12
      })
    }
  }, [newLocation.bool])

  return (
    <div className="grid gap-3 py-5 pr-3">
      <h2 className="text-xl font-semibold">Map</h2>

      <div className="overflow-hidden rounded">
        <Map
          ref={mapRef}
          mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
          initialViewState={{
            longitude: -77.27349377964507,
            latitude: 1.2017360010698115,
            zoom: 12
          }}
          cursor="pointer"
          style={{ width: '100%', height: 400 }}
          mapStyle="mapbox://styles/mapbox/streets-v9"
        >
          <Markers imgUrl={user.user?.imageUrl} lat={userLocation.lat} lng={userLocation.lng} />
          {/* <Marker
            longitude={userLocation.lng ?? -77.27349377964507}
            latitude={userLocation.lat ?? 1.2017360010698115}
            anchor="bottom"
          >
            <img src={user.user?.imageUrl ?? '/vercel.svg'} className="h-10 rounded-full" />
          </Marker> */}

          {newLocation.bool && (
            <Markers imgUrl="/vercel.svg" lat={newLocation.lat} lng={newLocation.lng} />
            // <Marker longitude={newLocation.lng} latitude={newLocation.lat} anchor="bottom">
            //   <img src="/vercel.svg" className="h-9 rounded-full" />
            // </Marker>
          )}
        </Map>
      </div>
    </div>
  )
}

export default MapBox
