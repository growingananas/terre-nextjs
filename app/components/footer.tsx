import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../public/logo.png';
import facebook from '../../public/facebook.svg';
import insta from '../../public/inst.svg';

const Footer: React.FC  = () => {
  return (
    <footer className='-mt-16 md:mt-0 h-max bg-black text-white'>
    <div className="py-10 px-6">
      <div className="flex justify-center xl:block xl:relative xl:top-16 xl:left-6">
        <Link href="/">
          <Image 
            src={logo}
            alt="Terre Logo" 
            style={{ filter: 'brightness(0) invert(1)'}} 
            loading="lazy"
            className="w-32 h-auto md:w-60 lg:w-60"
          />
        </Link>
      </div>

      <div className='grid grid-cols-2 gap-x-7 gap-y-6 md:grid-cols-4 mt-6 md:text-base xl:w-2/4 xl:ml-auto'>
        <div className=''>
          <h2 className="footer-title">sitemap</h2>
          <ul className='text-sm space-y-1 md:text-base mt-2'>
            <li><a href="">menu</a></li>
            <li><a href="">book now</a></li>
          </ul>
        </div>

        <div className=''>
          <h2 className="footer-title">Address</h2>
          <p className='text-sm md:text-base mt-2'>125 water streetst. john’s, nl a1c 5x4</p>
        </div>

        <div className='space-y-1 md:text-base'>
          <h2 className="footer-title">contacts</h2>
          <p className='mt-2'>+7 09 383 2136</p>
          <p>info@terrerestaurant.com</p>
        </div>

        <div className=''>
          <h2 className="footer-title">other</h2>
          <ul className='text-sm space-y-1 md:text-base mt-2'>
            <li><a href="">privacy</a></li>
            <li><a href="">terms</a></li>
          </ul>
        </div>
      </div>

      <div className='container mx-auto flex justify-center space-x-4 mt-6 xl:relative xl:justify-start xl:bottom-10'>
        <div className='inline-block w-10 h-10'>
          <Link href="/">
            <Image 
              src={insta}
              alt="Instagram Logo" 
              loading="lazy"
            />
          </Link>
        </div>
        <div className='inline-block w-10 h-10'>
          <Link href="/">
            <Image 
              src={facebook}
              alt="Facebook Logo" 
              loading="lazy"
            />
          </Link>
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer