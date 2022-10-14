import React from "react";

export const Alerta = ({ mensaje, error }) => {
  console.log(error);
  return (
    <div className={`p-2 ${error ? "bg-red-500" : "bg-blue-500"}`}>
      <p className='text-white font-bold text-sm text-center uppercase'>{mensaje}</p>
    </div>
  );
};

export default Alerta;
