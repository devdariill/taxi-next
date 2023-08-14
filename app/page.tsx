'use client'
import { useEffect, useState } from 'react'
import Booking from './components/Booking/Booking'
import MapBox from './components/Map/MapBox'
import { IndexContext } from './context/IndexContext'
// import { IndexContext } from './context/IndexContext'

export default function Home() {
  const [userLocation, setUserLocation] = useState<{ lat: number; lng: number }>({ lat: 0, lng: 0 })

  const [newLocation, setNewLocation] = useState({
    bool: true,
    lat: 1.2233194397866909,
    lng: -77.28536102920101
  })

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

  return (
    <main>
      <IndexContext.Provider value={{ userLocation, newLocation, setNewLocation }}>
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
