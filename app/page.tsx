// app/page.tsx

import Booking from './components/Booking/Booking'

export default function Home() {
  return (
    <main>
      <section className="grid grid-cols-1 md:grid-cols-3">
        <article>
          <Booking />
        </article>
        <article className="order-first col-span-2 md:order-last">Map</article>
      </section>
    </main>
  )
}
