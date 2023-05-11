import Link from 'next/link'
import React from 'react'
import Search from './Search'
import SigninButton from './SignInButton'

const Navbar = () => {
  return (
    <nav className="sticky top-0 flex flex-col justify-between p-4 bg-slate-600 md:flex-row drop-shadow-xl">
      <div className="flex flex-row justify-between items-center space-x-4 md:space-x-8 w-[70%]">
        <h1 className="grid mb-2 text-3xl font-bold text-white place-content-center md:mb-0">
          <Link href={'/'}>JuliRocket</Link>
        </h1>
        <Link href={'/products'} className="btn">
          Products
        </Link>
        <Search />
      </div>

      <SigninButton />
    </nav>
  )
}

export default Navbar
