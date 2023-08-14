// app/page.tsx

import Booking from './components/Booking/Booking'
import MapBox from './components/Map/MapBox'

export default function Home() {
  return (
    <main>
      <section className="grid grid-cols-1 md:grid-cols-3">
        <article className="h-full flex-1">
          <Booking />
        </article>
        <article className="order-first col-span-2 md:order-last">
          <MapBox />
        </article>
      </section>
    </main>
  )
}
