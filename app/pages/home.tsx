'use client'
import React from 'react';

import Image from 'next/image';
import home2 from '../../public/home2.png';
import home3 from '../../public/home3.png';
import home4 from '../../public/home4.png';
import clock from '../../public/clock.svg';
import logo from '../../public/logo.png';
import facebook from '../../public/facebook.svg';
import insta from '../../public/inst.svg';

import { SwiperImage } from '../types';
import { useState } from "react";
import CarouselThumbs from '../components/carouselThumbs';
import CarouselImage from '../components/carouselImage';
import FormComponent from '../components/form';
import Link from 'next/link';

const images: SwiperImage[] = [
  { src: '/swiper1.png', alt: 'Image 1' },
  { src: '/swiper2.png', alt: 'Image 2' },
  { src: '/swiper3.png', alt: 'Image 3' },
];

const Home: React.FC = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <>
      <section className="relative h-500 md:h-750 bg-cover bg-center" style={{backgroundImage: 'url("/home1.png")'}}>
        <div className="absolute inset-0 bg-gradient-to-br from-black opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-black opacity-0 top-0 left-0"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-black opacity-50 top-0 left-0"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-black opacity-0 top-0 left-0"></div>

        <div className="relative container mx-auto top-40  md:top-80 px-2 md:px-8 xl:px-0">
          <h1 className="text-5xl md:text-8xl lg:text-9xl text-white mb-6">Terre restaurant</h1>
          <div className="md:flex flex-row items-center pb-4 md: text-lg">
            <p className="order-2 block text-white max-w-md md:ml-4 ">We have beautiful and fun things coming up on the patio this summer. Now it only needs to… be summer. To be continued!</p>

            <button className="order-1 mt-6 md:m-0 relative overflow-hidden rounded-full text-2xl leading-7 h-32 w-32 p-0 flex flex-col justify-center items-center bg-white transition-all duration-300 hover:bg-transparent border border-white about-us-btn" style={{ transitionDuration: '300ms' }}>
              <span className="z-10 text-black transition-all duration-300 hover:text-white">About <br/>us</span>
              <span className="absolute inset-0 bg-black opacity-0 transition-all duration-300"></span>
            </button>
          </div>
        </div>
      </section>

      <section className='overflow-hidden'>
        <div className="container mx-auto  max-h-min xl:max-h-[750px] px-2 md:px-8 xl:px-0 py-8 md:pb-0">
          <div className='xl:flex flex-row justify-between'>
            <p className="montez md:text-xl lg:text-2xl xl:text-right order-2">We could not be prouder to be.</p>

            <h2 className="subtitle md:text-5xl lg:text-6xl mb-3">our history</h2>
          </div>

          <div className="xl:flex xl:ml-auto xl:max-w-3xl">
            <div className="text-sm xl:justify-end text-black">
              <p className='mb-2'>It only took one visit to Newfoundland & Labrador for Chef Matthew Swift to pack-up everything he owned and make St. John’s his new home.</p>
              <p className='mb-2'>Heading kitchens in Ontario and Quebec restaurants, including Montreal institution Joe Beef, for two decades was the perfect primer for Matthew to break out on his own. Inspired by the provinces people, food, produce, history and jaw-dropping landscapes, Matthew and his incredible team have created a welcoming comfortable space that reflects and respects it’s environment.</p>
              <p className='mb-6'>In 2021, Terre was selected as one of ‘Canada’s Best New Restaurants’ by enRoute Magazine’s expert food panel. We could not be prouder to be part of this prestigious list.
              </p>
            </div>
          </div>

          <div className="xl:flex justify-end">
            <button className="h-12 w-full md:max-w-72 border-solid border-2 text-black font-bold border-[#00857A] hover:bg-[#00857A] hover:text-white">
              <span className="lowercase p-3 ">Read the full enroute story</span>
            </button>
          </div>

          <div className='relative w-full md:max-w-sm lg:max-w-md xl:w-96 mb-9 mt-14 md:mt-0 md:mb-0 -rotate-12 -right-2 md:-right-96 xl:rotate-12 xl:translate-x-40'>
            <Image 
              src={home2} 
              alt="" 
              className="w-full h-96 xl:h-80"
              loading="lazy"
            />
          </div>
          <div className='hidden relative md:block md:w-80 lg:max-w-md mb-9 mt-9 md:mt-14 md:mb-0 rotate-12 bottom-80 left-10 xl:-rotate-12 xl:w-96 xl:-translate-y-40 xl:translate-x-20'>
            <Image 
              src={home2} 
              alt="" 
              className="w-full h-72 xl:h-auto"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <CarouselImage images={images} thumbsSwiper={thumbsSwiper} />
      <CarouselThumbs images={images} setThumbsSwiper={setThumbsSwiper} />

      <section className='-translate-y-16'>
        <div className="container mx-auto max-h-min xl:max-h-[750px] px-2 md:px-8 xl:px-0">
          <div className='mb-8 xl:flex items-center'>
            <div className='order-2 xl:mr-auto xl:pl-20'>
              <p className="montez md:text-xl">work time</p>

              <h2 className="subtitle md:text-5xl lg:text-6xl mb-3">restaurant</h2>
      
              <div className='mb-7 md:flex flex-row xl:flex-col md:space-x-32 xl:space-x-0'>
                <div className='flex flex-row items-center py-2'>
                  <Image src={clock} alt="" />
                  <p className="text-black lowercase ml-4 md:text-xl"><span className=" font-bold">Friday:</span> 8AM {'\u2013'} 11:30AM</p>
                </div>

                <div className='flex flex-row items-center py-2'>
                  <Image src={clock} alt="" />
                  <p className="text-black lowercase ml-4 md:text-xl"><span className=" font-bold">Saturday & Sunday:</span> 9AM {'\u2013'} 2:00PM</p>
                </div>
              </div>
            </div>
            
              <div className="order-1 -mx-2 md:mx-0 xl:w-[650px] xl:h-[500px]"> 
                <Image src={home3} alt='' className='w-screen'/>
              </div>
          </div>

          <div className='xl:flex xl:justify-between items-center'>
            <div className='order-1'>
              <p className="montez md:text-xl lg:text-2xl">work time</p>

              <h2 className="subtitle md:text-5xl lg:text-6xl mb-3 lowercase">CAFÉ</h2>

              <div className='mb-7'>
                <div className='flex flex-row items-center py-2'>
                  <Image src={clock} alt="" />
                  <p className="text-black lowercase ml-4 md: text-xl"><span className=" font-bold">Breakfast & Lunch:</span> Every day from 8AM {'\u2013'} 3PM</p>
                </div>
              </div>
            </div>
  
            <div className="order-2 -mx-2 md:mx-0 xl:w-[650px] xl:h-[500px]"> 
              <Image src={home4} alt='' className='w-screen h-full'/>
            </div>
          </div>
        </div>
      </section>

      <section className='-translate-y-16 md:translate-y-0 xl:pt-72'>
        <div className="relative max-h-max md:h-750 bg-cover bg-center" style={{backgroundImage: 'url("/form.png")'}}>
          <div className="absolute inset-0 bg-black opacity-70"></div>
          
          <div className='relative top-1/4 container mx-auto max-w-2xl text-center py-12  px-2 md:px-8 xl:px-0 '>
            <p className="montez-white md:text-xl lg:text-2xl !important">book a table</p>

            <h2 className="subtitle-white md:text-5xl lg:text-6xl mb-3 lowercase">book a table</h2>
            
            <FormComponent />
          </div>
        </div>
      </section>

      <footer className='-mt-16 md:mt-0 h-max bg-black text-white'>
        <div className="py-10 px-6">
          <div className="flex justify-center xl:block xl:relative xl:top-16 xl:left-16">
            <Link href="/">
              <Image 
                src={logo}
                alt="Terre Logo" 
                style={{ filter: 'brightness(0) invert(1)'}} 
                loading="lazy"
                className="w-32 h-auto md:w-60 lg:w-60 lg:w-36"
              />
            </Link>
          </div>

          <div className='grid grid-cols-2 gap-x-7 gap-y-6 md:grid-cols-4 mt-6 md:text-base xl:w-2/4 xl:ml-auto'>
            <div className=''>
              <h2 className="footer-title">sitemap</h2>
              <ul className='text-sm space-y-2 md:text-base'>
                <li><a href="">menu</a></li>
                <li><a href="">book now</a></li>
              </ul>
            </div>

            <div className=''>
              <h2 className="footer-title">Address</h2>
              <p className='text-sm md:text-base'>125 water streetst. john’s, nl a1c 5x4</p>
            </div>

            <div className='space-y-2 md:text-base'>
              <h2 className="footer-title">contacts</h2>
              <p>+7 09 383 2136</p>
              <p>info@terrerestaurant.com</p>
            </div>
    
            <div className=''>
              <h2 className="footer-title">other</h2>
              <ul className='text-sm space-y-2 md:text-base'>
                <li><a href="">privacy</a></li>
                <li><a href="">terms</a></li>
              </ul>
            </div>
          </div>

          <div className='container mx-auto flex justify-center space-x-4 mt-6 xl:relative xl:justify-start xl:bottom-10'>
            <div className='inline-block w-10 h-10'>
              <Link href="/">
                <Image 
                  src={facebook}
                  alt="Facebook Logo" 
                  loading="lazy"
                />
              </Link>
            </div>

            <div className='inline-block w-10 h-10'>
              <Link href="/">
                <Image 
                  src={insta}
                  alt="Facebook Logo" 
                  loading="lazy"
                />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Home;