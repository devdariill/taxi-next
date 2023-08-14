'use client'
import { useEffect, useState } from 'react'

function AutocompleteAddress() {
  const [source, setSource] = useState('')
  const [addressList, setAddressList] = useState<SearchProduct>()
  const getAddressList = async () => {
    const res = await fetch(`/api/search-address?q=${source}`, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const result = await res.json()
    console.log('🚀 ~ file: AutocompleteAddress.tsx:13 ~ getAddressList ~ result:', result)
    setAddressList(result)
  }
  useEffect(() => {
    if (source.length < 3) return
    const delayDebounceFn = setTimeout(() => {
      void getAddressList()
    }, 1000)
    return () => clearTimeout(delayDebounceFn)
  }, [source])
  return (
    <div>
      <div>
        <label>Where From</label>
        <input
          type="text"
          className="w-full rounded-md border bg-white/90 px-2 text-black outline-none"
          value={source}
          onChange={(e) => setSource(e.target.value)}
        />
        {addressList?.suggestions != null ? (
          <div>
            {addressList.suggestions.map((item: any, i: number) => (
              <h2 key={i}>{item.full_address}</h2>
            ))}
          </div>
        ) : null}
        <label>Where To</label>
        <input type="text" className="w-full rounded-md border bg-white/90 outline-none" />
      </div>
    </div>
  )
}

export default AutocompleteAddress

interface SearchProduct {
  suggestions: any[]
  attribution: string
}
