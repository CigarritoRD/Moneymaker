import { createContext, useState } from "react";

const PlanesContext = createContext();

const PlanesProvider = ({ children }) => {
  const [planes, setPlanes] = useState({});
  const [loading, setLoading] = useState(true);

  const tokenlocal = localStorage.getItem("userToken_goldenminers");

  const fetchPlan = async () => {
    if (!tokenlocal) {
      console.log("no hay toquen");
      return setLoading(false);
    }
    try {
      const res = await fetch("http://192.168.100.182:4000/API/planes", {
        headers: {
          method: "GET",
          mode: "cors",
          "Content-Type": "application/json",
          Authorization: "Bearer " + tokenlocal,
        },
      });
      const data = await res.json();
      setPlanes(data);
      return data;
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  return (
    <PlanesContext.Provider value={{ fetchPlan, planes, loading, setLoading }}>
      {children}
    </PlanesContext.Provider>
  );
};
export { PlanesProvider };

export default PlanesContext;
