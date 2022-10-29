const getUserToken = async (email, password) => {
  try {
    const res = await fetch("http://192.168.100.182:4000/API/usuario/iniciarsesion", {
      method: "POST",
      mode: "cors",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};

export { getUserToken };
