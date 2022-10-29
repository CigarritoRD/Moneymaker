import { IoWalletSharp } from "react-icons/io5";
import { MdManageAccounts } from "react-icons/md";
import { TbBusinessplan } from "react-icons/tb";
import { RiAccountPinCircleFill } from "react-icons/ri";
import { BiSupport, BiLogOut } from "react-icons/bi";

import { HiMenuAlt3 } from "react-icons/hi";

import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { usePlanes } from "../../hooks/usePlan";

const Dashboard = () => {
  const [ShowMenu, setShowMenu] = useState(false);
  const [planToBuy, setPlanToBuy] = useState("");
  const [totalInvertir, setTotalInvertir] = useState("");
  const { planes } = usePlanes();
  const navigate = useNavigate();

  const [planActived, setPlanActived] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("comprando plan");
    await comprarPlan(planToBuy, totalInvertir);
  };

  useEffect(() => {
    if (planes?.invertido) setPlanActived(true);
    setTimeout(() => {
      navigate("/admin");
    }, 3000);
  }, [planes?.invertido, navigate]);

  const comprarPlan = async (plantobuy, totalinvertir) => {
    const token = localStorage.getItem("userToken_goldenminers");
    if (token) {
      try {
        const res = await fetch("http://192.168.100.182:4000/API/planes", {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
          body: JSON.stringify({
            nombre: plantobuy,
            invertido: totalinvertir,
          }),
        });
        console.log(res);
        navigate("/admin");
      } catch (error) {
        console.log(error);
      }
    } else {
      return;
    }
  };

  return (
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
            <li className='hover:cursor-pointer hover:bg-slate-900  hover:translate-x-2 px-2 py-5 duration-300 rounded flex gap-2 items-center'>
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
        <div className='border h-full'>
          <h3 className=' text-4xl text-center py-5 text-slate-200'> Planes Disponibles</h3>
          <div className=' grid place-content-center h-full mx-2'>
            {planActived ? (
              <div className='py-2 text-center'>
                <h1 className='text-slate-200 text-4xl font-bold '>Ya tienes un plan activo!</h1>
                <p className='text-slate-200 text-xl'>Al Culminar el plan puedes adquirir otro</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className={"bg-slate-200 rounded-lg overflow-hidden "}>
                <div className='bg-yellow-400 p-5 text-center'>
                  <p className='text-lg font-bold text-slate-800 rounded uppercase'>
                    elija un plan para empezar a generar Ganacias!
                  </p>
                </div>
                <div className='flex items-center p-2 gap-2 w-full'>
                  <p className='text-lg flex-1'>Elija un Plan</p>
                  <select
                    defaultValue={"Selecciona"}
                    onChange={(e) => setPlanToBuy(e.target.value)}
                    className='flex-1 p-2 text-lg rounded block w-full'
                    name='planes'
                    id=''
                  >
                    <option className='p-2' disabled value='Selecciona'>
                      --Selecciona un Plan --
                    </option>
                    <option className='p-2' value='basico'>
                      Plan Basico
                    </option>
                    <option className='p-2' value='avanzado'>
                      Plan Avanzado
                    </option>
                    <option className='p-2' value='premium'>
                      Plan Premium
                    </option>
                  </select>
                </div>
                <div className='flex items-center p-2 gap-2 w-full'>
                  <p className='flex-1 text-lg '>Total a Invertir</p>
                  <input
                    onChange={(e) => setTotalInvertir(e.target.value)}
                    className='block rounded w-full p-2 flex-1'
                    type='number'
                    min={10}
                    placeholder='Min. $10.00'
                  />
                </div>
                <div className='border bg-slate-100 rounded-xl p-5 text-center'>
                  <p className='mb-5'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet natus voluptas
                    quae quam dolor eius nam dolorem asperiores? Exercitationem ex voluptatum qui
                    laboriosam nesciunt amet?
                  </p>
                  <ul>
                    <li>
                      <p className='font-bold'>
                        Duracion:<span className='font-normal'> 3 meses</span>
                      </p>
                    </li>
                    <li>
                      <p className='font-bold'>
                        Ganacias diarias:<span className='font-normal'> 2 %</span>
                      </p>
                    </li>
                    <li>
                      <p className='font-bold'>
                        Ganacias al ompletar el ciclo:<span className='font-normal'> 100 %</span>
                      </p>
                    </li>
                  </ul>
                </div>
                <input
                  className='cursor-pointer font-bold uppercase text-xl w-full my-5 rounded-xl border px-6 py-3 bg-yellow-400 text-slate-800'
                  type='submit'
                  value='Comprar Plan'
                />
              </form>
            )}

            {/* formulario de compra de plan */}
          </div>
        </div>
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
      </div>
    </div>
  );
};

export default Dashboard;
