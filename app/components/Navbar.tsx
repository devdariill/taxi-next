import { UserButton } from '@clerk/nextjs'

function Navbar () {
  return (
    <nav className='flex justify-around py-3 px-10 border-b shadow-xs border-white/20 shadow-white/20 items-center'>
      <img src='/next.svg' alt='' className='h-5' />
      <ul className='flex gap-6 [&>li]:cursor-pointer'>
        <li>Home</li>
        <li>History</li>
        <li>Help</li>
      </ul>
      <UserButton />
    </nav>
  )
}

export default Navbar
