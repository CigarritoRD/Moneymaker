import { createContext, useState } from "react";

const userContext = createContext();

export const UserProvider = ({ children }) => {
  const [usuario, setUsuario] = useState(false);
  const authUser = () => {
    return setUsuario(true);
  };
  return <userContext.Provider value={{ usuario, authUser }}>{children}</userContext.Provider>;
};

export default userContext;
