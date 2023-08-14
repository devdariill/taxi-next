import { NextResponse } from 'next/server'

const BASE_URL = 'https://api.mapbox.com/search/searchbox/v1/suggest'
const LIMITS = 6
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const searchText = searchParams.get('q') ?? ''
  console.log('🚀 ~ file: route.tsx:7 ~ GET ~ searchText:', searchText)
  console.log(
    '🚀 ~ file: route.tsx:12 ~ GET ~ process.env.MAPBOX_ACCESS_TOKEN:',
    process.env.MAPBOX_ACCESS_TOKEN,
  )

  const res = await fetch(
    `${BASE_URL}?q=${searchText}?language=en&limit=${LIMITS}&session_token=00d509d2-42f1-4b91-889f-2f36b0204d0d&country=CO&access_token=${
      process.env.MAPBOX_ACCESS_TOKEN ?? ''
    }`,
    {
      headers: {
        'Content-Type': 'application/json',
      },
    },
  )
  const searchResults = await res.json()
  return NextResponse.json(searchResults)
}
