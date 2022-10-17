import React from "react";
import primera from "../assets/images/svg/Bank note_Isometric.svg";
import segunda from "../assets/images/svg/Online payment_Two Color.svg";
import tercera from "../assets/images/svg/Coins_Isometric.svg";
import { BsFillArrowRightSquareFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Beneficios = () => {
  return (
    <div className=' mb-20'>
      <h2 className='text-5xl font-bold relative max-w-fit mt-20 mb-10 md:text-6xl mx-auto text-blue-900 before:bg-orange-400 before:h-[5px] before:w-[60px] before:top-14 before:left-0 before:absolute'>
        Beneficios de <span className='text-orange-400 font-extrabold'>M/M</span>
      </h2>
      <div className='relative max-w-[1200px] mx-auto flex justify-center items-center'>
        <h4
          data-aos='fade-right'
          className='max-w-[1200px] mx-auto text-4xl font-medium leading-[60px] text-slate-700 mb-20 px-10'
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit totam illo error mollitia
          iusto iure earum perspiciatis explicabo quasi. Earum autem sed recusandae assumenda quo.
        </h4>
        <div className='-z-10  absolute -top-[100px] right-[0px]'>
          <img
            className=' w-[600px] opacity-30 object-cover object-center'
            src={require("../assets/images/Money.png")}
            alt=''
          />
        </div>
      </div>

      <div className='bg-slate-100 rounded card__container grid md:grid-cols-3 max-w-[1200px] mx-auto'>
        {/* cards */}
        <div
          data-aos='fade-up'
          data-aos-delay='50'
          className='mx-auto flex flex-col items-center justify-center my-4 p-4 max-w-[400px]'
        >
          <div>
            <img className='w-full' src={primera} alt='' />
          </div>
          <p className=' text-center my-3'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore suscipit aliquid
            consectetur soluta velit tempore.
          </p>
          <Link to={"/registrarse"}>
            <button className='w-full justify-center md:w-auto group hover:shadow-2xl hover:scale-105 duration-300  hover:shadow-orange-400/40 text-lg font-bold flex gap-2 items-center  py-3 px-4 rounded bg-slate-700 text-white'>
              Registrate
              <BsFillArrowRightSquareFill
                className='group-hover:translate-x-3 duration-300'
                fill='gold'
              />
            </button>
          </Link>
        </div>
        {/* fin - cards */}

        {/* cards */}
        <div
          data-aos='fade-up'
          data-aos-delay='100'
          className='mx-auto flex flex-col items-center justify-center my-4 p-4 max-w-[400px]'
        >
          <div>
            <img className='w-full' src={segunda} alt='' />
          </div>
          <p className=' text-center my-3'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore suscipit aliquid
            consectetur soluta velit tempore.
          </p>
          <Link to={"/registrarse"}>
            <button className='w-full justify-center md:w-auto group hover:shadow-2xl hover:scale-105 duration-300  hover:shadow-orange-400/40 text-lg font-bold flex gap-2 items-center  py-3 px-4 rounded bg-slate-700 text-white'>
              Registrate
              <BsFillArrowRightSquareFill
                className='group-hover:translate-x-3 duration-300'
                fill='gold'
              />
            </button>
          </Link>
        </div>
        {/* fin - cards */}

        {/* cards */}
        <div
          data-aos='fade-up'
          data-aos-delay='150'
          className='mx-auto flex flex-col items-center justify-center my-4 p-4 max-w-[400px]'
        >
          <div>
            <img className='w-full' src={tercera} alt='' />
          </div>
          <p className=' text-center my-3'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore suscipit aliquid
            consectetur soluta velit tempore.
          </p>
          <Link to={"/registrarse"}>
            <button className='w-full justify-center md:w-auto group hover:shadow-2xl hover:scale-105 duration-300  hover:shadow-orange-400/40 text-lg font-bold flex gap-2 items-center  py-3 px-4 rounded bg-slate-700 text-white'>
              Registrate
              <BsFillArrowRightSquareFill
                className='group-hover:translate-x-3 duration-300'
                fill='gold'
              />
            </button>
          </Link>
        </div>
        {/* fin - cards */}
      </div>
    </div>
  );
};

export default Beneficios;
