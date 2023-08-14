import AutocompleteAddress from './AutocompleteAddress'

function Booking() {
  // const screenHight = window != null ? window.innerHeight : 0
  return (
    <div className="grid gap-3 p-5">
      <h2 className="text-xl font-semibold">Booking</h2>
      <div className="h-screen max-h-[80vh] rounded-md border p-5">
        <AutocompleteAddress />
      </div>
    </div>
  )
}

export default Booking
