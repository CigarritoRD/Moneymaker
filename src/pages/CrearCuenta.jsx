import React from "react";
import Footer from "../components/Footer";
import Formulario from "../components/Formulario";
import Navbar from "../components/Navbar";

const CrearCuenta = () => {
  const guardarRegistro = async (datos) => {
    const { nombre, apellido, email, password, confirmarPassword } = datos;
    const OPTIONS = {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nombre,
        apellido,
        email,
        password,
        confirmarPassword,
      }),
    };
    try {
      const res = await fetch("http://localhost:4000/API/usuario/", OPTIONS);
      const data = await res.json();
      return { res, data };
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
      <Navbar activado={false} />
      <Formulario
        guardar={guardarRegistro}
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
