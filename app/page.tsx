'use client'
import { useEffect, useState } from 'react'
import Booking from './components/Booking/Booking'
import MapBox from './components/Map/MapBox'
import { IndexContext } from './context/IndexContext'

export default function Home() {
  const [userLocation, setUserLocation] = useState<{lat: number; lng: number}>({lat: 0, lng: 0})

  const getUseLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position)
      setUserLocation({
        lat: position.coords.latitude,
        lng: position.coords.longitude
      })
    })
  }
  useEffect(() => {
    getUseLocation()
  }, [])

  if (!userLocation) return <div>Loading...</div>

  return (
    <main>
      <IndexContext.Provider value={{ userLocation }}>
        <section className="grid grid-cols-1 md:grid-cols-3">
          <article className="h-full flex-1">
            <Booking />
          </article>
          <article className="order-first col-span-2 md:order-last">
            <MapBox />
          </article>
        </section>
      </IndexContext.Provider>
    </main>
  )
}
