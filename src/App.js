import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CrearCuenta from "./pages/CrearCuenta";
import IniciarSesion from "./pages/IniciarSesion";

import Dashboard from "./pages/admin/Dashboard";
import ConfirmarCuenta from "./pages/ConfirmarCuenta";
import { AuthProvider } from "./context/AuthContext";
import { PlanesProvider } from "./context/PlanesContext";
import AdquirirPlan from "./pages/admin/AdquirirPlan";

function App() {
  return (
    <AuthProvider>
      <PlanesProvider>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='registrarse' element={<CrearCuenta />} />
          <Route path='iniciarsesion' element={<IniciarSesion />} />
          <Route path='confirmar/:token' element={<ConfirmarCuenta />} />

          {/* rutas protegidas */}
          <Route path='/admin' element={<Dashboard />} />
          <Route path='/admin/adquirirPlan' element={<AdquirirPlan />} />
        </Routes>
      </PlanesProvider>
    </AuthProvider>
  );
}

export default App;
