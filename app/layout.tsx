import { ClerkProvider } from '@clerk/nextjs'
import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import Navbar from './components/Navbar'
import './globals.css'

const outfit = Outfit({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Restaurantes Comida Rapida Pasto',
  description: 'Reserva una cita gratuita para agregar tu restaurante a la lista'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="es">
        <body className={outfit.className + 'h-full min-h-screen'}>
          <Navbar />
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}
