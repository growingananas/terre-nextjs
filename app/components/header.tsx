'use client'
import React from 'react'
import Image from 'next/image';
import LanguageSwitcher from './languageSwitcher';
import Link from 'next/link';
import logo from '../../public/logo.png'

const Header: React.FC  = () => {
  return (
    <header className="absolute z-10 top-0 left-0 right-0 text-white py-4 px-2 md:px-8 xl:px-0">
      <div className="container mx-auto border-b border-solid border-white border-opacity-40 mb-6">
        <nav className="flex justify-between items-end pb-4">
          <div >
            <Link href="/">
              <div>
              <Image 
                src={logo}
                alt="Terre Logo" 
                style={{ filter: 'brightness(0) invert(1)'}} 
                loading="lazy"
                className="w-32 h-auto md:w-32 lg:w-36"
              />
              </div>
            </Link>
          </div>

          <div className="hidden lg:flex space-x-8 items-center">
            <ul className="flex space-x-8">
              <li><Link href="#" className="hover-underline">menu</Link></li>
              <li><Link href="#" className="hover-underline">book now</Link></li>
              <li><Link href="#" className="hover-underline">gift cards</Link></li>
            </ul>
            <LanguageSwitcher />
          </div>
        </nav>
      </div>

      <div className='flex justify-end  container mx-auto'>
        <p className="border-l border-solid border-white border-opacity-40 pl-4">{`125 Water street st. john's, nl 709 383 2136`}</p>
      </div>
    </header>
  )
}

export default Header