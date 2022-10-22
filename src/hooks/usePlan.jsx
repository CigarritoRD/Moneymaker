import { useContext } from "react";
import PlanesContext from "../context/PlanesContext";

const usePlanes = () => {
  const { fetchPlan, planes, loading, setLoading } = useContext(PlanesContext);
  return { fetchPlan, planes, loading, setLoading };
};

export { usePlanes };
