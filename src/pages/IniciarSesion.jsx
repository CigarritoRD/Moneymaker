import React from "react";
import Footer from "../components/Footer";
import Formulario from "../components/Formulario";
import Navbar from "../components/Navbar";

const IniciarSesion = () => {
  return (
    <>
      <Navbar activado={false} />
      <Formulario
        repetirPassword={false}
        tituloValue={"Iniciar sesion"}
        textValue={"Aun no tienes una cuenta?"}
        redirectValue={" Crear cuenta"}
        link={"/registrarse"}
        botonValue={"Iniciar sesion"}
      />
      <Footer />
    </>
  );
};

export default IniciarSesion;
