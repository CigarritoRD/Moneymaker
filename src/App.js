import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CrearCuenta from "./pages/CrearCuenta";
import IniciarSesion from "./pages/IniciarSesion";
import { UserProvider } from "./context/AuthContext";
import Dashboard from "./pages/admin/Dashboard";

function App() {
  return (
    <UserProvider>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='registrarse' element={<CrearCuenta />} />
        <Route path='iniciarsesion' element={<IniciarSesion />} />

        {/* rutas protegidas */}
        <Route path='/admin' element={<Dashboard />} />
      </Routes>
    </UserProvider>
  );
}

export default App;
