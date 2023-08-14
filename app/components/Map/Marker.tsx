import { Marker } from 'react-map-gl'

function Markers({
  lng = -77.27349377964507,
  lat = 1.2017360010698115,
  imgUrl = '/vercel.svg'
}: {
  lng: number
  lat: number
  imgUrl?: string
}) {
  return (
    <Marker longitude={lng} latitude={lat} anchor="bottom">
      <img src={imgUrl} className="h-10 rounded-full" />
    </Marker>
  )
}

export default Markers
