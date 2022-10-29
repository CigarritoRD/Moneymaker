import { IoWalletSharp } from "react-icons/io5";
import { MdManageAccounts } from "react-icons/md";
import { TbBusinessplan } from "react-icons/tb";
import { RiAccountPinCircleFill } from "react-icons/ri";
import { BiSupport, BiLogOut } from "react-icons/bi";

import { HiMenuAlt3 } from "react-icons/hi";
import useAuth from "../../hooks/useAuth";

import { usePlanes } from "../../hooks/usePlan";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { BarLoader } from "react-spinners";

const Dashboard = () => {
  const { usuario, cargando, cerrarSesion } = useAuth();
  const { fetchPlan, planes } = usePlanes();
  const [ShowMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();

  const clickHandler = (e) => {
    e.preventDefault();
    if (usuario._id) cerrarSesion();
  };

  useEffect(() => {
    if (cargando) {
      console.log(cargando, usuario);
      //
    } else {
      console.log(cargando, usuario);
      if (!usuario?._id) navigate("/");
    }
    //
    if (usuario?.planActivado && !planes?.invertido) fetchPlan();
  });

  const { invertido, plan } = planes ?? {};

  return cargando ? (
    <div className='w-full h-screen grid place-content-center'>
      <BarLoader color='#114e6d' height={10} width={400} />
    </div>
  ) : (
    <div className='bg-slate-800 min-h-screen pb-5 grid'>
      {/* menu movil */}
      <div
        onClick={() => setShowMenu(false)}
        className={`fixed md:w-[300px] ${
          ShowMenu ? "translate-x-[0%]" : "translate-x-[-100%] md:translate-x-[0%]"
        } w-2/3 h-full bg-slate-800 text-yellow-400 flex flex-col justify-between pt-10 duration-300 shadow-xl shadow-black md:shadow-none`}
      >
        <div className=''>
          <ul className='text-lg h-full p-2'>
            <Link to={"/admin/adquirirPlan"}>
              <li className='hover:cursor-pointer hover:bg-slate-900  hover:translate-x-2 px-2 py-5 duration-300 rounded flex gap-2 items-center'>
                <TbBusinessplan size={30} />
                <p>Adquirir Plan</p>
              </li>
            </Link>
            <li className='hover:cursor-pointer hover:bg-slate-900  hover:translate-x-2 px-2 py-5 duration-300 rounded flex gap-2 items-center'>
              <IoWalletSharp size={30} />
              <p>Cartera</p>
            </li>
            <li className='hover:cursor-pointer hover:bg-slate-900  hover:translate-x-2 px-2 py-5 duration-300 rounded flex gap-2 items-center'>
              <BiSupport size={30} />
              <p>Soporte</p>
            </li>
            <li className='hover:cursor-pointer hover:bg-slate-900  hover:translate-x-2 px-2 py-5 duration-300 rounded flex gap-2 items-center'>
              <p>Guias</p>
            </li>
            <li className='hover:cursor-pointer hover:bg-slate-900  hover:translate-x-2 px-2 py-5 duration-300 rounded flex gap-2 items-center'>
              <MdManageAccounts size={30} />
              <p>Configuracion</p>
            </li>
            <li
              onClick={clickHandler}
              className='hover:cursor-pointer hover:bg-slate-900  hover:translate-x-2 px-2 py-5 duration-300 rounded flex gap-2 items-center'
            >
              <BiLogOut size={30} />
              <p>Cerrar sesion</p>
            </li>
          </ul>
        </div>
        <div className='bg-slate-200 px-2 py-5 text-slate-800 flex items-center gap-1'>
          <div>
            <RiAccountPinCircleFill size={40} />
          </div>
          <div>
            <h5 className='font-bold text-lg'>Sr. Maycolk Hernandez</h5>
            <p className='text-slate-400'>Plan: Basico</p>
          </div>
        </div>
      </div>
      {/* menu movil final*/}

      <div className=' contenedor md:ml-[300px]'>
        {/* boton menu movil */}

        <div
          onClick={() => {
            setShowMenu(!ShowMenu);
          }}
          className='md:hidden fixed bottom-10  bg-slate-200 right-0 rounded-full p-4 shadow-lg shadow-black/80'
        >
          <HiMenuAlt3 size={30} className='cursor-pointer' />
        </div>

        {/* boton menu movil */}
        <div className='grid md:grid-cols-3 md:my-10 mx-4'>
          {/* elemento del dashboard */}
          <div className='min-w-[140px] bg-slate-100 rounded-xl mx-1 my-3 shadow-lg'>
            <div className='pr-5 flex  border-b-2 p-1 gap-2'>
              <IoWalletSharp size={30} fill={"green"} />
              <p className='my-1'>Capital total</p>
            </div>
            <div className='grid h-[80px] place-content-center'>
              <p className='font-bold text-3xl'>${plan?.gananciasTotales + invertido}</p>
            </div>
          </div>
          {/* elemento del dashboard */}

          {/* elemento del dashboard */}
          <div className='min-w-[140px] bg-slate-100 rounded-xl mx-1  my-3 shadow-lg'>
            <div className='pr-5 flex  border-b-2 p-1 gap-2'>
              <IoWalletSharp size={30} fill={"green"} />
              <p className='my-1'>Invertido</p>
            </div>
            <div className='grid h-[80px] place-content-center'>
              <p className='font-bold text-3xl'>${invertido}</p>
            </div>
          </div>
          {/* elemento del dashboard */}

          {/* elemento del dashboard */}
          <div className='min-w-[140px] bg-slate-100 rounded-xl mx-1  my-3 shadow-lg'>
            <div className='pr-5 flex border-b-2 p-1 gap-2'>
              <IoWalletSharp size={30} fill={"green"} />
              <p className='my-1'>Ganado Total</p>
            </div>
            <div className='grid h-[80px] place-content-center'>
              <p className='font-bold text-3xl'>${plan?.gananciasTotales}</p>
            </div>
          </div>
          {/* elemento del dashboard */}
        </div>
        <div className='grid md:grid-cols-2'>
          {/* ganacias diarias */}
          <div className='shadow-lg bg-slate-100 rounded-xl text-center  mx-4 '>
            <div className='border-b '>
              <h3 className='py-2'>Ganancias diarias</h3>
            </div>
            <div className='grid grid-cols-2 place-content-center h-[200px]'>
              <div className='border-slate-300 border-r text-green-500 text-6xl flex justify-center items-center font-bold'>
                <p>1.5%</p>
              </div>
              <div className='flex-1'>
                <p>plan basico</p>

                <p className='font-bold text-lg'>${plan?.gananciasPorDia?.ganado}</p>
              </div>
            </div>
          </div>
          {/* ganacias diarias */}

          <div className='shadow-lg bg-slate-100 rounded-xl text-center mt-5 md:mt-0 mx-4 '>
            <div className='border-b '>
              <h3 className='py-2'>Ganancias al Completar</h3>
            </div>
            <div className='grid grid-cols-2 place-content-center h-[200px]'>
              <div className='border-slate-300 border-r text-green-500 text-6xl flex justify-center items-center font-bold'>
                <p>45%</p>
              </div>
              <div className='flex-1'>
                <p>plan basico</p>

                <p className='font-bold text-lg'>${plan?.gananciasPorDia?.ganado * 90}</p>
              </div>
            </div>
          </div>
        </div>

        {/* historial de gananciasl */}

        <div className=' shadow-lg bg-slate-100 rounded-xl text-center px-4 m-5'>
          <div className='border-b '>
            <h3 className='py-2'>Historial de ganancias</h3>
          </div>
          <div className=''>
            <ul className='flex flex-col max-h-[400px] overflow-y-auto'>
              {plan?.historialXdia.map((elemento, index) => {
                return (
                  <li key={index} className='flex justify-between p-2 border-b-2'>
                    <p>
                      <span className='font-bold'> Fecha: </span>
                      {new Date(elemento?.fecha).toDateString("es-ES")}
                    </p>
                    <p>
                      <span className='font-bold'>Ganado: $</span>
                      {elemento.ganado}
                    </p>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
