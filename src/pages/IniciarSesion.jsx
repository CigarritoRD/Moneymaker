import React, { useEffect } from "react";
import Footer from "../components/Footer";
import Formulario from "../components/Formulario";
import Navbar from "../components/Navbar";
import userContext from "../context/AuthContext";
import { useContext } from "react";

import { useNavigate } from "react-router-dom";

const IniciarSesion = () => {
  const navigate = useNavigate();
  const { usuario, authUser } = useContext(userContext);
  console.log(usuario);
  useEffect(() => {
    if (usuario) {
      navigate("/admin");
    }
  }, [usuario]);

  const handleSubmit = (e) => {
    e.preventDefault();
    authUser();
  };
  return (
    <>
      <Navbar activado={false} />
      <Formulario
        handleSubmit={handleSubmit}
        repetirPassword={false}
        tituloValue={"Iniciar sesion"}
        textValue={"Aun no tienes una cuenta?"}
        redirectValue={" Crear cuenta"}
        link={"/registrarse"}
        botonValue={"Iniciar sesion"}
        textValue2={`Olvide la contraseña: `}
        passwordreset={"restablecer"}
      />
      <Footer />
    </>
  );
};

export default IniciarSesion;
