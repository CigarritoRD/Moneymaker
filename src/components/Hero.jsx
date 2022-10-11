import React from "react";
import goldvideo from "../assets/videos/gold-video.mp4";
const Hero = () => {
  return (
    <div className='h-screen w-full relative z-10 '>
      <div className='bg-black/60 w-full h-full absolute grid place-content-center '>
        <h1 className=' drop-shadow-lg text-white text-4xl md:text-6xl uppercase text-center font-extrabold'>
          <span className='text-6xl'>Invierte </span>en el{" "}
          <span className='text-4xl md:text-6xl'>mejor</span> pasivo
        </h1>
        <h2 className='drop-shadow-lg uppercase text-4xl md:text-6xl text-center font-extrabold text-orange-500'>
          del <span className='text-6xl md:text-8xl'>planeta!</span>
        </h2>
      </div>
      <video src={goldvideo} autoPlay loop muted className='h-full object-cover w-full'></video>
      <div className='absolute bottom-[80px] left-[50%] translate-x-[-50%]'>
        <button className=' border-2 min-w-[300px] animate-pulse hover:animate-none hover:bg-[#EC994B] hover:border-none hover:shadow-xl hover:shadow-black hover:scale-105 duration-300 font-bold py-3 px-6 text-xl text-white rounded-xl uppercase '>
          nuestros planes
        </button>
      </div>
    </div>
  );
};

export default Hero;
