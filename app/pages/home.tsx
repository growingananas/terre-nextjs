import React from 'react';
import { Lora } from 'next/font/google'
 
const lora = Lora({subsets: ['latin']})

const Home: React.FC = () => {
  return (
    <section className="relative h-500 md:h-750 bg-cover bg-center" style={{backgroundImage: 'url("/home1.png")'}}>
      <div className="absolute inset-0 bg-gradient-to-br from-black opacity-30"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-black opacity-0 top-0 left-0"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-black opacity-50 top-0 left-0"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-black opacity-0 top-0 left-0"></div>

      <div className="relative container mx-auto top-40  md:top-80 px-2">
        <h1 className="text-5xl md:text-8xl xl:text-9xl text-white mb-6">Terre restaurant</h1>
        <div className="md:flex flex-row items-center pb-4">
          <p className="order-2 block text-white max-w-md md:ml-4">We have beautiful and fun things coming up on the patio this summer. Now it only needs to… be summer. To be continued!</p>

          <button className="order-1 mt-6 md:m-0 relative overflow-hidden rounded-full text-2xl leading-7 h-32 w-32 p-0 flex flex-col justify-center items-center bg-white transition-all duration-300 hover:bg-transparent border border-white about-us-btn" style={{ transitionDuration: '300ms' }}>
            <span className="z-10 text-black transition-all duration-300 hover:text-white">About <br/>us</span>
            <span className="absolute inset-0 bg-black opacity-0 transition-all duration-300"></span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;