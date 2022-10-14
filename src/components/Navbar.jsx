import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { BiMenu } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = ({ activado }) => {
  const valorInicial = activado;
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [transparente, setTransparent] = useState(valorInicial);

  const [menu, setMenu] = useState(false);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;

    if (currentScrollPos === 0) {
      setTransparent(true);
      console.log(currentScrollPos);
    } else {
      setTransparent(false);
    }

    if (currentScrollPos > prevScrollPos) {
      setVisible(false);
    } else {
      setVisible(true);
    }

    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    if (activado) {
      window.addEventListener("scroll", handleScroll);

      return () => window.removeEventListener("scroll", handleScroll);
    }
  });
  if (menu) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  return (
    <>
      <div
        className={`z-[100]  ${activado && "fixed"}
      } duration-300 w-full left-0 text-white ${
        visible ? "top-0 text-white w-full" : "translate-y-[-100%]"
      } ${transparente ? "bg-transparent" : "bg-[#EC994B] text-[#15133C]"}`}
      >
        <div className=' flex justify-between items-center h-[80px] px-5 w-full max-w-[1200px] mx-auto'>
          <div>
            <Link to={"/"}>
              <h1 className='font-bold text-4xl'>M/M</h1>
            </Link>
          </div>
          <div className='hidden'>
            <ul>
              <li>contacto</li>
              <li>nostros</li>
              <li>faq</li>
            </ul>
          </div>
          <div className='hidden md:block'>
            <NavLink to={"/registrarse"}>
              <button className=' text-md font-medium hover:scale-[105%] duration-200 mr-3'>
                Registrase
              </button>
            </NavLink>
            <NavLink to={"/iniciarsesion"}>
              <button className=' text-md font-medium  hover:scale-[105%] duration-200'>
                Iniciar sesion
              </button>
            </NavLink>
          </div>
          <div onClick={() => setMenu(!menu)} className='md:hidden'>
            {!menu ? (
              <BiMenu size={40} />
            ) : (
              <AiOutlineClose className={` cursor-pointer`} size={30} />
            )}
          </div>
        </div>
      </div>
      <div>
        <div
          onClick={() => setMenu(false)}
          className={` flex flex-col justify-evenly px-5 items-center h-screen bg-slate-800 w-full ${
            !menu && "translate-y-[-110%]"
          } duration-300 z-[1000] fixed top-20 left-0`}
        >
          <ul>
            <li className='hover:text-yellow-400 cursor-pointer duration-300  text-xl text-center my-5 text-slate-100 font-bold'>
              Contacto
            </li>
            <li className='hover:text-yellow-400 cursor-pointer duration-300  text-xl text-center my-5 text-slate-100 font-bold'>
              Preguntas frecuentes
            </li>

            <li className='hover:text-yellow-400 cursor-pointer duration-300  text-xl text-center my-5 text-slate-100 font-bold'>
              {" "}
              Nosotros
            </li>
          </ul>
          <div>
            <NavLink to={"/iniciarsesion"}>
              <button
                onClick={() => setMenu(false)}
                className=' block px-4 py-3 w-[95vw] text-yellow-400 rounded  my-3 font-bold text-xl bg-slate-900'
              >
                Iniciar sesion
              </button>
            </NavLink>
            <NavLink to={"/registrarse"}>
              <button
                onClick={() => setMenu(false)}
                className=' block px-4 py-3 w-[95vw] text-slate-900 rounded  my-3 font-bold text-xl bg-yellow-400'
              >
                Registrarse
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
