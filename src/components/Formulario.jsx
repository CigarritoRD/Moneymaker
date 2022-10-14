import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import bg from "../assets/images/bg.png";
import { Alerta } from "../components/Alerta";

const INITIAL_VALUES = {
  email: "",
  password: "",
  passwordRepeat: "",
};
const Formulario = ({
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

  const { email, password, passwordRepeat } = values;

  const navigate = useNavigate();
  const validarFormulario = (values) => {
    const { email, password, passwordRepeat } = values;

    if ([email, password, passwordRepeat].includes(""))
      return setAlert({ msg: "hay campos vacios", error: true });

    if (password.length < 5)
      return setAlert({ msg: "la contraseña debe tener almenos 5 caracteres", error: true });

    if (password !== passwordRepeat)
      return setAlert({ msg: "las contraseñas no coinciden", error: true });

    return setAlert({ msg: "cuenta creada exitosamente", error: false });
  };

  const handleChange = (e) => {
    setValues((oldValues) => {
      return { ...oldValues, [e.target.name]: e.target.value };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    validarFormulario(values) && navigate("/admin");
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
          name='passwordRepeat'
          placeholder='Repetir contraseña'
          value={passwordRepeat}
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
