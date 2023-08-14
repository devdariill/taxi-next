'use client'
import { createContext } from 'react'
// imp

interface IndexContextProps {
  userLocation: {
    lat: number
    lng: number
  }
  newLocation: {
    bool: boolean
    lat: number
    lng: number
  }
  setNewLocation: React.Dispatch<
    React.SetStateAction<{
      bool: boolean
      lat: number
      lng: number
    }>
  >
}

export const IndexContext = createContext<IndexContextProps>(null as any)
