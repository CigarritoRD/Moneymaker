import React from "react";

const Footer = () => {
  return (
    <div className='bg-slate-700 text-white'>
      <div className=' max-w-[1200px]  bg-slate-700 grid md:grid-cols-2 mx-auto'>
        <div className='h-[250px] mx-auto p-4 flex-3 -mt-5 font-extrabold text-2xl text-slate-100 bg-orange-400 w-[300px] text-center '>
          Money Maker Group.
        </div>
        <div className='pl-10 flex justify-around flex-col md:flex-row gap-4 flex-1 flex-wrap pt-10 bg-slate-700'>
          <div className='redes flex flex-col gap-2 text-lg capitalize  cursor-pointer border-b border-slate-300 '>
            <p className='text-lg font-bold bg-slate-700'>REDES SOCIALES</p>
            <p className='hover:text-orange-400 hover:translate-x-2 duration-500  text-slate-100'>
              facebook
            </p>
            <p className='hover:text-orange-400 hover:translate-x-2 duration-500  text-slate-100'>
              facebook
            </p>
            <p className='hover:text-orange-400 hover:translate-x-2 duration-500  text-slate-100'>
              facebook
            </p>
          </div>
          <div className='empresa flex flex-col gap-2 text-lg capitalize  cursor-pointer border-b border-slate-300 bg-slate-700 '>
            <p className='text-lg font-bold'>EMPRESA</p>
            <p className='hover:text-orange-400 hover:translate-x-2 duration-500  text-slate-100'>
              sobre nosotros
            </p>
            <p className='hover:text-orange-400 hover:translate-x-2 duration-500  text-slate-100'>
              pregunteas frecuentes
            </p>
            <p className='hover:text-orange-400 hover:translate-x-2 duration-500  text-slate-100'>
              contacto
            </p>
            <p className='hover:text-orange-400 hover:translate-x-2 duration-500  text-slate-100'>
              como funciona
            </p>
          </div>

          <div className='menu flex flex-col gap-2 text-lg capitalize  cursor-pointer border-b border-slate-300 bg-slate-700'>
            <p className='text-lg font-bold'>MENU</p>
            <p className='hover:text-orange-400 hover:translate-x-2 duration-500  text-slate-100'>
              registrarse
            </p>
            <p className='hover:text-orange-400 hover:translate-x-2 duration-500  text-slate-100'>
              iniciar sesion
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
