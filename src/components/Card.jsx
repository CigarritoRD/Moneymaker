import React from "react";
import { Link } from "react-router-dom";

const Card = () => {
  return (
    <div data-aos='fade-up' data-aos-delay='125'>
      <div className='w-[90%] md:w-full mx-auto  cursor-pointer group hover:scale-110 hover:bg-slate-100 duration-300 md:max-w-[300px] bg-white/80 md:flex-col border rounded-xl p-5 shadow-xl flex justify-between gap-5 my-5'>
        <div className='min-w-[150px] h-40 bg-slate-700 rounded place-self-center'>
          <img src='' alt='' />
        </div>
        <div className='info flex flex-col'>
          <h4 className='font-bold relative max-w-fit my-5 text-2xl capitalize mx-auto text-blue-900 before:bg-orange-400 before:h-[5px] before:w-[60px] before:top-10 before:left-0 before:absolute'>
            plan Medio
          </h4>
          <ul>
            <li className='border-b-[1px] py-1 border-slate-400'>Lorem ipsum dolor sit amet.</li>
            <li className='border-b-[1px] py-1 border-slate-400'>Lorem ipsum dolor sit amet.</li>
            <li className='border-b-[1px] py-1 border-slate-400'>Lorem ipsum dolor sit amet.</li>
            <li className='border-b-[1px] py-1 border-slate-400'>Lorem ipsum dolor sit amet.</li>
            <li className='border-b-[1px] py-1 border-slate-400'>Lorem ipsum dolor sit amet.</li>
          </ul>
          <Link to={"/registrarse"}>
            <button className='w-full group-hover:translate-y-2 group-hover:bg-slate-700 font-bold text-lg rounded-lg group-hover:text-yellow-400 gr duration-300 border px-6 py-2 bg-orange-400 text-white my-4'>
              Adquirir
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
