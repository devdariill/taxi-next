'use client'
import { UserButton, useUser } from '@clerk/nextjs'

function Navbar() {
  const user = useUser()

  return (
    <nav className="shadow-xs flex items-center justify-around border-b border-white/20 px-10 py-3 shadow-white/20">
      <a href="/">
        <img src="/next.svg" alt="" className="h-5" />
      </a>
      <ul className="flex gap-6 [&>li]:cursor-pointer">
        <li>Home</li>
        <li>History</li>
        <li>Help</li>
      </ul>
      {user.isSignedIn === true ? (
        <UserButton />
      ) : (
        <a href="/sign-in" className="rounded-md bg-white px-4 py-2 font-bold text-black">
          Iniciar Sesión
        </a>
      )}
    </nav>
  )
}

export default Navbar
