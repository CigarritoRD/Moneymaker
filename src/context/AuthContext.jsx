import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [usuario, setUsuario] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [token, setToken] = useState("");
  const navigate = useNavigate();

  // VERIFICA SI HAY token para inciar sesion
  useEffect(() => {
    const token = localStorage.getItem("userToken_goldenminers");

    const autenticarUsuario = async () => {
      if (!token) {
        setCargando(false);
        console.log("entre aqui por que no hay token");
        return;
      }
      setToken(token);
      try {
        const res = await fetch("http://localhost:4000/API/usuario/perfil", {
          method: "GET",
          mode: "cors",
          headers: { "content-Type": "application/json", authorization: "Bearer " + token },
        });
        const data = await res.json();
        setUsuario(data);
      } catch (err) {
        console.log(err);
      }
      setCargando(false);
    };
    autenticarUsuario();
  }, [token]);

  // elimina el token actual y cierra sesion
  const cerrarSesion = async () => {
    if (token) {
      navigate("/");
      localStorage.removeItem("userToken_goldenminers");
    }
  };

  return (
    <AuthContext.Provider value={{ usuario, setToken, cargando, cerrarSesion }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
