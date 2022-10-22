import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import bg from "../assets/images/bg.png";
import { Alerta } from "../components/Alerta";

const INITIAL_VALUES = {
  nombre: "",
  apellido: "",
  email: "",
  password: "",
  confirmarPassword: "",
};
const Formulario = ({
  guardar,
  botonValue,
  tituloValue,
  textValue,
  redirectValue,
  textValue2,
  link,
  passwordreset,
}) => {
  const [values, setValues] = useState(INITIAL_VALUES);
  const [alert, setAlert] = useState({ msg: "", error: false });

  const { nombre, apellido, email, password, confirmarPassword } = values;

  const navigate = useNavigate();
  const validarFormulario = (values) => {
    const { email, password, confirmarPassword } = values;

    if ([email, password, confirmarPassword].includes(""))
      return setAlert({ msg: "hay campos vacios", error: true });

    if (password.length < 5)
      return setAlert({ msg: "la contraseña debe tener almenos 6 caracteres", error: true });

    if (password !== confirmarPassword)
      return setAlert({ msg: "las contraseñas no coinciden", error: true });

    return values;
  };

  const handleChange = (e) => {
    setValues((oldValues) => {
      return { ...oldValues, [e.target.name]: e.target.value };
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validarFormulario(values)) {
      try {
        const { res, data } = await guardar(values);
        if (!res.ok) return setAlert({ msg: data.msg, error: true });
        if (res.ok) {
          setAlert({ msg: data.msg, error: false });
          setTimeout(() => navigate("/iniciarsesion"), 4000);
        }
      } catch (error) {
        console.log(error.message);
      }
    }
  };

  const { msg, error } = alert;
  return (
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
          {tituloValue}
        </h2>
        {msg && <Alerta mensaje={msg} error={error} />}
        <input
          onChange={handleChange}
          className='bg-orange-100 p-4 rounded my-4 block w-full'
          type='text'
          name='nombre'
          placeholder='Nombre'
          value={nombre}
        />
        <input
          onChange={handleChange}
          className='bg-orange-100 p-4 rounded my-4 block w-full'
          type='text'
          name='apellido'
          placeholder='Primer apellido'
          value={apellido}
        />
        <input
          onChange={handleChange}
          className='bg-orange-100 p-4 rounded my-4 block w-full'
          type='email'
          name='email'
          placeholder='Correo electronico'
          value={email}
        />
        <input
          onChange={handleChange}
          className='bg-orange-100 p-4 rounded my-4 block w-full'
          type='password'
          name='password'
          placeholder='Contraseña'
          value={password}
        />

        <input
          onChange={handleChange}
          className='bg-orange-100 p-4 rounded my-4 block w-full'
          type='password'
          name='confirmarPassword'
          placeholder='Repetir contraseña'
          value={confirmarPassword}
        />

        <input
          className='md:w-auto bg-orange-300 hover:bg-orange-400 duration-300 cursor-pointer text-white font-medium uppercase text-xl p-4 rounded my-4 block w-full'
          type='submit'
          value={botonValue}
        />
        <Link to={link}>
          <p>
            {textValue}
            <span className='underline text-lg font-bold text-blue-900'>{redirectValue}</span>
          </p>
        </Link>
        <Link to={link}>
          <p>
            {textValue2}
            <span className='underline text-lg font-bold text-blue-900'>{passwordreset}</span>
          </p>
        </Link>
      </form>
    </div>
  );
};

export default Formulario;
