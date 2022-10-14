import React from "react";

const WhyGold = () => {
  return (
    <div>
      <h2 className='text-5xl font-bold relative max-w-fit mt-20 mb-10 md:text-6xl mx-auto text-blue-900 before:bg-orange-400 before:h-[5px] before:w-[60px] before:top-14 before:left-0 before:absolute'>
        Por que <span className='text-orange-400 font-extrabold'>oro</span> ?
      </h2>
      <div className='max-w-[1200px] relative  mb-20 mx-auto flex-col md:flex-row flex justify-center items-center'>
        <div className='max-w-[600px]' data-aos='fade-right'>
          <h4 className='text-4xl pb-5 font-medium leading-[60px] text-slate-700 px-10'>
            Lorem ipsum <span className='text-yellow-500'>dolor sit </span>amet consectetur
          </h4>
          <p className='px-10 text-lg leading-[40px]'>
            adipisicing elit. Fugit totam illo error mollitia iusto iure earum perspiciatis
            explicabo quasi. Earum autem sed recusandae assumenda quo.
          </p>
        </div>
        <div data-aos='fade-left' className='-z-10  absolute -top-[60px] left-[0px] opacity-30'>
          <img
            className=' w-[600px] opacity-30 object-cover object-center'
            src={require("../assets/images/beneficiosengranajes.png")}
            alt=''
          />
        </div>
        <div data-aos='fade-left' className='w-[400px] py-5'>
          <img className='w-full' src={require("../assets/images/goldbars.png")} alt='' />
        </div>
      </div>
    </div>
  );
};

export default WhyGold;
