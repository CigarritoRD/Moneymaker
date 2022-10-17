import React from "react";
import { Link } from "react-router-dom";
import bg from "../assets/images/bg.png";
const Planes = () => {
  return (
    <>
      <div className=' overflow-hidden h-[150px] -mt-[120px] pointer-events-none absolute z-10 w-full'>
        <svg viewBox='0 0 500 150' preserveAspectRatio='none' className='h-full w-full'>
          <path
            stroke='none'
            fill='white'
            d='M-5.92,110.05 C271.72,95.23 253.67,-9.36 507.05,115.97 L500.00,150.00 L0.00,150.00 Z'
          ></path>
        </svg>
      </div>

      <div className='min-h-screen w-full'>
        <div className='absolute h-full w-full -z-10 opacity-20 gradient-mask-t-80'>
          <img className='w-full h-full object-cover' src={bg} alt='' />
        </div>
        <h2 className='font-bold relative max-w-fit my-10 text-5xl mx-auto text-blue-900 before:bg-orange-400 before:h-[5px] before:w-[60px] before:top-14 before:left-0 before:absolute'>
          Planes
        </h2>
        <div className='relative '>
          <h4
            data-aos='fade-right'
            data-aos-delay='50'
            className='max-w-[1200px] mx-auto text-4xl font-medium leading-[60px] text-slate-700 mb-20 px-10'
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit totam illo error mollitia
            iusto iure earum perspiciatis explicabo quasi. Earum autem sed recusandae assumenda quo.
          </h4>
          {/* <div className='-z-10  absolute -top-[100px] right-[0px]'>
            <img
              className=' w-[600px] opacity-30 object-cover object-center'
              src={require("../assets/images/Money.png")}
              alt=''
            />
          </div> */}
        </div>
        <div className='card-container justify-center flex flex-col md:flex-row gap-5'>
          {/* card */}
          <div data-aos='fade-up' data-aos-delay='125'>
            <div className='w-[90%] md:w-full mx-auto  cursor-pointer group hover:scale-110 hover:bg-slate-100 duration-300 md:max-w-[300px] bg-white/80 md:flex-col border rounded-xl p-5 shadow-xl flex justify-between gap-5 my-5'>
              <div className='min-w-[150px] h-40 bg-slate-700 rounded place-self-center'>
                <img src='' alt='' />
              </div>
              <div className='info flex flex-col'>
                <h4 className='font-bold relative max-w-fit my-5 text-2xl capitalize mx-auto text-blue-900 before:bg-orange-400 before:h-[5px] before:w-[60px] before:top-10 before:left-0 before:absolute'>
                  plan Medio
                </h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, accusamus.</p>
                <Link to={"/registrarse"}>
                  <button className='w-full group-hover:translate-y-2 group-hover:bg-slate-700 font-bold text-lg rounded-lg group-hover:text-yellow-400 gr duration-300 border px-6 py-2 bg-orange-400 text-white my-4'>
                    Comenzar
                  </button>
                </Link>
              </div>
            </div>
          </div>
          {/* card */}

          {/* card */}
          <div data-aos='fade-up' data-aos-delay='200'>
            <div className=' w-[90%] md:w-full mx-auto cursor-pointer group hover:scale-110 hover:bg-slate-100 duration-300 md:max-w-[300px] bg-white/80 md:flex-col border rounded-xl p-5 shadow-xl flex justify-between gap-5 my-5'>
              <div className='min-w-[150px] h-40 bg-slate-700 rounded place-self-center'>
                <img src='' alt='' />
              </div>
              <div className='info flex flex-col'>
                <h4 className='font-bold relative max-w-fit my-5 text-2xl capitalize mx-auto text-blue-900 before:bg-orange-400 before:h-[5px] before:w-[60px] before:top-10 before:left-0 before:absolute'>
                  plan Medio
                </h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, accusamus.</p>
                <Link to={"/registrarse"}>
                  <button className='w-full group-hover:translate-y-2 group-hover:bg-slate-700 font-bold text-lg rounded-lg group-hover:text-yellow-400 gr duration-300 border px-6 py-2 bg-orange-400 text-white my-4'>
                    Comenzar
                  </button>
                </Link>
              </div>
            </div>
          </div>
          {/* card */}

          {/* card */}
          <div data-aos='fade-up' data-aos-delay='300'>
            <div className=' w-[90%] md:w-full mx-auto cursor-pointer group hover:scale-110 hover:bg-slate-100 duration-300 md:max-w-[300px] bg-white/80 md:flex-col border rounded-xl p-5 shadow-xl flex justify-between gap-5 my-5'>
              <div className='min-w-[150px] h-40 bg-slate-700 rounded place-self-center'>
                <img src='' alt='' />
              </div>
              <div className='info flex flex-col'>
                <h4 className='font-bold relative max-w-fit my-5 text-2xl capitalize mx-auto text-blue-900 before:bg-orange-400 before:h-[5px] before:w-[60px] before:top-10 before:left-0 before:absolute'>
                  plan Medio
                </h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, accusamus.</p>
                <Link to={"/registrarse"}>
                  <button className='w-full group-hover:translate-y-2 group-hover:bg-slate-700 font-bold text-lg rounded-lg group-hover:text-yellow-400 gr duration-300 border px-6 py-2 bg-orange-400 text-white my-4'>
                    Comenzar
                  </button>
                </Link>
              </div>
            </div>
          </div>
          {/* card */}
        </div>
      </div>
    </>
  );
};

export default Planes;
