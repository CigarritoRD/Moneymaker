import { useContext } from "react";
import AuthContext from "../context/AuthContext";

const useAuth = () => {
  const { usuario, cargando, setToken, cerrarSesion } = useContext(AuthContext);

  return { usuario, cargando, setToken, cerrarSesion };
};

export default useAuth;
