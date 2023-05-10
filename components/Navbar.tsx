import Link from 'next/link';
import React from 'react';
import Search from './Search';

const Navbar = () => {
  return (
    <nav className="sticky top-0 flex flex-col justify-between p-4 bg-slate-600 md:flex-row drop-shadow-xl">
      <h1 className="grid mb-2 text-3xl font-bold text-white place-content-center md:mb-0">
        <Link href={'/'}>JuliRocket</Link>
      </h1>
      <Link href={'/products'} className="btn">
        Products
      </Link>
      <Search />
    </nav>
  );
};

export default Navbar;
