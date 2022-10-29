const getSesionUser = async (token) => {
  try {
    const res = await fetch("http://192.168.100.182:4000/API/usuario/perfil", {
      method: "GET",
      mode: "cors",
      headers: { authorization: "Bearer " + token },
    });
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};

export { getSesionUser };
