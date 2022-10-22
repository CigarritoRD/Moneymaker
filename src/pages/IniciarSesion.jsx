import { useState } from "react";
import Footer from "../components/Footer";
import bg from "../../src/assets/images/bg.png";
import Navbar from "../components/Navbar";
import { Link, Navigate } from "react-router-dom";
import Alerta from "../components/Alerta";
import { getUserToken } from "../services/getUserToken";
import useAuth from "../hooks/useAuth";

const IniciarSesion = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState({ msg: "", error: false });

  const { setToken, cargando, usuario } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if ([email, password].includes(""))
      return setAlert({ msg: "llena ambos campos para inciar sesion", error: true });
    try {
      const { token, msg } = await getUserToken(email, password);

      if (!token) return setAlert({ msg: msg, error: true });

      localStorage.setItem("userToken_goldenminers", token);
      setToken(token);
    } catch (error) {
      console.log(error);
    }
  };

  //REDIRECT SI HAY USUARIO INICIADO
  if (cargando) return <h1>cargando</h1>;
  if (usuario?._id) {
    return <Navigate to={"/admin"} />;
  }
  const { msg, error } = alert;

  return (
    <>
      <Navbar />
      <div className='h-screen grid place-content-center relative'>
        <div className='h-screen absolute -z-10 w-full'>
          <img className='w-full h-full object-cover opacity-20' src={bg} alt='' />
        </div>
        <form
          onSubmit={handleSubmit}
          action=''
          className='shadow-xl rounded-xl w-screen max-w-[600px] bg-white p-8'
        >
          <h2 className='mb-14 font-bold relative max-w-fit my-10 text-4xl mx-auto text-blue-900 before:bg-orange-400 before:h-[5px] before:w-[60px] before:top-14 before:left-0 before:absolute'>
            {"Iniciar Sesión"}
          </h2>
          {msg && <Alerta mensaje={msg} error={error} />}

          <input
            onChange={(e) => setEmail(e.target.value)}
            className='bg-orange-100 p-4 rounded my-4 block w-full'
            type='email'
            name='email'
            autoComplete='email'
            placeholder='Correo electronico'
            value={email}
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            className='bg-orange-100 p-4 rounded my-4 block w-full'
            type='password'
            name='password'
            placeholder='Contraseña'
            autoComplete='current-password'
            value={password}
          />
          <input
            className='md:w-auto bg-orange-300 hover:bg-orange-400 duration-300 cursor-pointer text-white font-medium uppercase text-xl p-4 rounded my-4 block w-full'
            type='submit'
            value={"Iniciar Sesión"}
          />
          <Link to={"/registrarse"}>
            <p>
              Aun no tienes una cuenta?
              <span className='underline text-lg font-bold text-blue-900'> Crear cuenta</span>
            </p>
          </Link>
          <Link to={`/olvidePassword`}>
            <p>
              Olvide la contraseña:
              <span className='underline text-lg font-bold text-blue-900'> restablecer</span>
            </p>
          </Link>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default IniciarSesion;
