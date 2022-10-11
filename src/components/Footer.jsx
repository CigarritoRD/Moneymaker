import React from "react";

const Footer = () => {
  return (
    <div>
      <div className='h-[250px] max-w-[1200px] mx-auto flex flex-wrap gap-5 justify-around'>
        <div className='p-4 flex-3 -mt-5 font-extrabold text-2xl text-blue-900 bg-orange-400 h-full'>
          Money Maker Group.
        </div>
        <div className='flex justify-around flex-col md:flex-row gap-4 flex-1 flex-wrap pt-10'>
          <div className='redes flex flex-col gap-2 text-lg capitalize  cursor-pointer border-b border-slate-300 '>
            <p className='text-lg font-bold'>REDES SOCIALES</p>
            <p className='hover:text-orange-400 hover:translate-x-2 duration-500 font-medium text-blue-900'>
              facebook
            </p>
            <p className='hover:text-orange-400 hover:translate-x-2 duration-500 font-medium text-blue-900'>
              facebook
            </p>
            <p className='hover:text-orange-400 hover:translate-x-2 duration-500 font-medium text-blue-900'>
              facebook
            </p>
          </div>
          <div className='empresa flex flex-col gap-2 text-lg capitalize  cursor-pointer border-b border-slate-300 '>
            <p className='text-lg font-bold'>EMPRESA</p>
            <p className='hover:text-orange-400 hover:translate-x-2 duration-500 font-medium text-blue-900'>
              sobre nosotros
            </p>
            <p className='hover:text-orange-400 hover:translate-x-2 duration-500 font-medium text-blue-900'>
              pregunteas frecuentes
            </p>
            <p className='hover:text-orange-400 hover:translate-x-2 duration-500 font-medium text-blue-900'>
              contacto
            </p>
            <p className='hover:text-orange-400 hover:translate-x-2 duration-500 font-medium text-blue-900'>
              como funciona
            </p>
          </div>
          <div className='menu flex flex-col gap-2 text-lg capitalize  cursor-pointer border-b border-slate-300'>
            <p className='text-lg font-bold'>MENU</p>
            <p className='hover:text-orange-400 hover:translate-x-2 duration-500 font-medium text-blue-900'>
              registrarse
            </p>
            <p className='hover:text-orange-400 hover:translate-x-2 duration-500 font-medium text-blue-900'>
              iniciar sesion
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
