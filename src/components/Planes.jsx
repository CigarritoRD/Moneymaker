import React from "react";
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

      <div className='min-h-screen w-full relative'>
        <div className='absolute h-full w-full -z-10 opacity-20 gradient-mask-t-80'>
          <img className='w-full h-full object-cover' src={bg} alt='' />
        </div>
        <h2 className='font-bold relative max-w-fit my-10 text-5xl mx-auto text-blue-900 before:bg-orange-400 before:h-[5px] before:w-[60px] before:top-14 before:left-0 before:absolute'>
          Planes
        </h2>
        <div className='card-container justify-center flex flex-col md:flex-row gap-5'>
          {/* card */}
          <div className=' md:max-w-[300px] bg-white/80 md:flex-col border rounded-xl p-5 shadow-xl flex justify-between gap-5 my-5'>
            <div className='min-w-[150px] h-40 bg-slate-700 rounded place-self-center'>
              <img src='' alt='' />
            </div>
            <div className='info flex flex-col'>
              <h4 className='font-bold relative max-w-fit my-5 text-2xl capitalize mx-auto text-blue-900 before:bg-orange-400 before:h-[5px] before:w-[60px] before:top-10 before:left-0 before:absolute'>
                plan Medio
              </h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, accusamus.</p>
              <button className='border px-6 py-2 bg-orange-400 text-white my-4'>Comenzar</button>
            </div>
          </div>
          {/* card */}

          {/* card */}
          <div className='md:max-w-[300px] md:flex-col bg-white/80 border rounded-xl p-5 shadow-xl flex justify-between gap-5 my-5'>
            <div className='min-w-[150px] h-40 bg-slate-700 rounded place-self-center'>
              <img src='' alt='' />
            </div>
            <div className='info flex flex-col'>
              <h4 className='font-bold relative max-w-fit my-5 text-2xl capitalize mx-auto text-blue-900 before:bg-orange-400 before:h-[5px] before:w-[60px] before:top-10 before:left-0 before:absolute'>
                plan Medio
              </h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, accusamus.</p>
              <button className='border px-6 py-2 bg-orange-400 text-white my-4'>Comenzar</button>
            </div>
          </div>
          {/* card */}

          {/* card */}
          <div className='md:max-w-[300px] md:flex-col bg-white/80 border rounded-xl p-5 shadow-xl flex justify-between gap-5 my-5'>
            <div className='min-w-[150px] h-40 bg-slate-700 rounded place-self-center'>
              <img src='' alt='' />
            </div>
            <div className='info flex flex-col'>
              <h4 className='font-bold relative max-w-fit my-5 text-2xl capitalize mx-auto text-blue-900 before:bg-orange-400 before:h-[5px] before:w-[60px] before:top-10 before:left-0 before:absolute'>
                plan Medio
              </h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, accusamus.</p>
              <button className='border px-6 py-2 bg-orange-400 text-white my-4'>Comenzar</button>
            </div>
          </div>
          {/* card */}
        </div>
      </div>
    </>
  );
};

export default Planes;