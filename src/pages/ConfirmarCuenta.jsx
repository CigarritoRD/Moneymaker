import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import bg from "../../src/assets/images/bg.png";
import { useParams } from "react-router-dom";

const ConfirmarCuenta = () => {
  const [datos, setDatos] = useState({});

  const { token } = useParams();

  useEffect(() => {
    // if (token) {
    const confirmaToken = async () => {
      try {
        const res = await fetch(`http://localhost:4000/API/usuario/confirmarcuenta/${token}`);
        const data = await res.json();
        setDatos(data);
        console.log(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    confirmaToken();
    // }
  }, [token]);

  //   const { msg, error } = alert;
  return (
    <>
      <Navbar />
      <div className='h-screen grid place-content-center relative'>
        <div className='h-screen absolute -z-10 w-full'>
          <img className='w-full h-full object-cover opacity-20' src={bg} alt='' />
        </div>
        <div className='shadow-xl rounded-xl w-screen max-w-[600px] bg-white p-8'>
          <h2 className='mb-14 font-bold relative max-w-fit my-10 text-4xl mx-auto text-blue-900 before:bg-orange-400 before:h-[5px] before:w-[60px] before:top-14 before:left-0 before:absolute'>
            {datos && datos.msg}
          </h2>
          {/* {msg && <Alerta mensaje={msg} error={error} />} */}

          <Link to={"/inciarsesion"} className='flex justify-center gap-5'>
            <p>Ya puedes iniciar sesion!</p>
            <span className='underline text-xl font-bold text-blue-900'> Iniciar sesion</span>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ConfirmarCuenta;
