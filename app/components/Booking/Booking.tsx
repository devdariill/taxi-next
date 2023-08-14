import AutocompleteAddress from './AutocompleteAddress'

function Booking() {
  // const screenHight = window != null ? window.innerHeight : 0
  return (
    <div className="flex h-full flex-col gap-3 p-5">
      <h2 className="text-xl font-semibold">Booking</h2>
      <div className="h-full rounded-md border p-5">
        <AutocompleteAddress />
      </div>
    </div>
  )
}

export default Booking
