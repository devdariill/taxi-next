'use client'
import { createContext } from 'react';
// imp

export const IndexContext = createContext<{ userLocation: { lat: number; lng: number } }>(null as any)
