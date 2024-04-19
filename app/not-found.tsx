import React from 'react';
import Link from 'next/link';
import Image from "next/image";
import Footer from "./components/footer";

import pan from '../public/pan.svg';
import eggs from '../public/eggs.svg';





const Custom404 = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-1/2">
        <div className="relative">
          <div className="relative px-5 pt-5 mb-16 md:mb-0 lg:mb-0 xl:mb-0">
            <Image src={pan} alt="Error" width={600} height={600} priority={true}/>
          </div>

          <div className="absolute top-16 left-1/2  -translate-x-32  mg:-translate-y-1 md:-translate-x-64 flex flex-col space-y-2 items-center">
            <h1 className="text-2xl md:text-5xl text-white ">oo0ps!!!</h1>

            <Image src={eggs} alt="Error" width={480} height={248} priority={true} className="image"/>

            <p className="text-xl text-white">Please, come back later</p>

            <Link href="/">
              <button  className="h-10 w-36 md:max-w-72 bg-white text-black font-bold">
                  <span className="lowercase p-3 ">back home</span>
              </button>
            </Link>
          </div>
        </div>
      </div>



      <Footer />
    </>
  );
};

export default Custom404;
