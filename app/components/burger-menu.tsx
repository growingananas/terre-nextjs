import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import facebookWhite from '../../public/facebook-white.svg';
import instaWhite from '../../public/insta-white.svg';
import LanguageSwitcher from './languageSwitcher';

interface BurgerMenuProps {
  isOpen: boolean;
  toggleMenu: () => void;
}
const BurgerMenu = ({ isOpen, toggleMenu }: BurgerMenuProps) => {
  return (
    <div className="md:hidden">
      {isOpen ? (
        <button className="w-10 h-10 flex items-center justify-center " onClick={toggleMenu}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-8 h-7">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </button>
      ) : (
        <button className="w-10 h-10 flex items-center justify-center bg-white" onClick={toggleMenu}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="black" className="w-8 h-7">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      )}

      {isOpen && (
        <div className="fixed nav-height right-0 left-0 bottom-0 z-50 bg-white p-4 shadow-md">
          <ul className='text-xl text-black space-y-1 md:text-base mt-2'>
            <li className='input'><a href="">menu</a></li>
            <li className='input'><a href="">book now</a></li>
            <li className='input'><a href="">gift cards</a></li>
          </ul>

          <div className='flex justify-between items-center py-4'> 
            <div className='flex justify-start space-x-4 '>
              <div className='flex items-center justify-center w-10 h-10  bg-black'>
                <Link href="/">
                  <Image 
                    src={instaWhite}
                    alt="Instagram Logo" 
                    loading="lazy"
                  />
                </Link>
              </div>

              <div className='flex items-center justify-center w-10 h-10 bg-black'>
                <Link href="/">
                  <Image 
                    src={facebookWhite}
                    alt="Facebook Logo" 
                    loading="lazy"
                  />
                </Link>
              </div>
            </div>

            <LanguageSwitcher />
          </div>

        </div>
      )}
    </div>
  );
};

export default BurgerMenu;

