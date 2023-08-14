'use client'
import { useEffect, useState } from 'react';

function UseLocation() {
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
  return {userLocation}
}

export default UseLocation
