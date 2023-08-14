import { IndexContext } from '@/app/context/IndexContext'
import { useContext } from 'react'
import AutocompleteAddress from './AutocompleteAddress'

function Booking() {
  const { setNewLocation } = useContext(IndexContext)

  // const screenHight = window != null ? window.innerHeight : 0
  return (
    <div className="flex h-full flex-col gap-3 p-5">
      <h2 className="text-xl font-semibold">Booking</h2>
      <div className="grid h-full gap-3 rounded-md border p-5">
        <AutocompleteAddress />
        <button
          className="rounded bg-white p-2 font-bold text-black"
          onClick={() => setNewLocation((state) => ({ ...state, bool: !state.bool }))}
        >
          Agrega tu negocio
        </button>
      </div>
    </div>
  )
}

export default Booking
