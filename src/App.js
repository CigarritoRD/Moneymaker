import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CrearCuenta from "./pages/CrearCuenta";
import IniciarSesion from "./pages/IniciarSesion";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='registrarse' element={<CrearCuenta />} />
      <Route path='iniciarsesion' element={<IniciarSesion />} />
    </Routes>
  );
}

export default App;
