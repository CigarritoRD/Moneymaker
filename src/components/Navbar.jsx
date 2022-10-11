import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = ({ activado }) => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [transparente, setTransparent] = useState(true);

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

  return (
    <div
      className={`z-[100]  ${
        activado ? "fixed" : "relative bg-[#EC994B]"
      } duration-300 w-full text-white ${visible ? "top-0 text-white" : "top-[-100px]"} ${
        transparente ? "bg-transparent" : "bg-[#EC994B] text-[#15133C]"
      }`}
    >
      <div className=' flex justify-between items-center h-[80px] px-5 max-w-[1200px] mx-auto'>
        <div>
          <h1 className='font-bold text-2xl'>M/M</h1>
        </div>
        <div className='hidden'>
          <ul>
            <li>contacto</li>
            <li>nostros</li>
            <li>faq</li>
          </ul>
        </div>
        <div className=''>
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
      </div>
    </div>
  );
};

export default Navbar;
