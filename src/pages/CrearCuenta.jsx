import React from "react";
import Footer from "../components/Footer";
import Formulario from "../components/Formulario";
import Navbar from "../components/Navbar";

const CrearCuenta = () => {
  return (
    <>
      <Navbar activado={false} />
      <Formulario
        tituloValue={"Crear cuenta"}
        textValue={"Ya tienes una cuenta?"}
        redirectValue={" Iniciar sesion"}
        botonValue={"Crear cuenta"}
        repetirPassword={true}
        link={"/iniciarsesion"}
      />
      <Footer />
    </>
  );
};

export default CrearCuenta;
