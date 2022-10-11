import React from "react";
import { Link } from "react-router-dom";
import bg from "../assets/images/bg.png";

const Formulario = ({
  botonValue,
  tituloValue,
  textValue,
  redirectValue,
  repetirPassword,
  link,
}) => {
  return (
    <div className='h-screen grid place-content-center relative'>
      <div className='h-screen absolute -z-10 w-full'>
        <img className='w-full h-full object-cover opacity-20' src={bg} alt='' />
      </div>
      <form action='' className='shadow-xl rounded-xl w-screen max-w-[600px] bg-white p-8'>
        <h2 className='mb-14 font-bold relative max-w-fit my-10 text-4xl mx-auto text-blue-900 before:bg-orange-400 before:h-[5px] before:w-[60px] before:top-14 before:left-0 before:absolute'>
          {tituloValue}
        </h2>
        <input
          className='bg-orange-100 p-4 rounded my-4 block w-full'
          type='email'
          name='email'
          id=''
          placeholder='Correo electronico'
        />
        <input
          className='bg-orange-100 p-4 rounded my-4 block w-full'
          type='password'
          name='password'
          id=''
          placeholder='Contraseña'
        />
        {repetirPassword && (
          <input
            className='bg-orange-100 p-4 rounded my-4 block w-full'
            type='password'
            name='repeatPassword'
            id=''
            placeholder='Repetir contraseña'
          />
        )}
        <input
          className='md:w-auto bg-orange-300 hover:bg-orange-400 duration-300 cursor-pointer text-white font-medium uppercase text-xl p-4 rounded my-4 block w-full'
          type='button'
          value={botonValue}
        />
        <Link to={link}>
          <p>
            {textValue}
            <span className='underline text-lg font-bold text-blue-900'>{redirectValue}</span>
          </p>
        </Link>
      </form>
    </div>
  );
};

export default Formulario;
