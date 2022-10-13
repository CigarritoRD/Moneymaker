import React from "react";
import Beneficios from "../components/Beneficios";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Planes from "../components/Planes";

const Home = () => {
  return (
    <>
      <Navbar activado={true} />
      <Hero />
      <Planes />
      <Beneficios />
      <Footer />
    </>
  );
};

export default Home;
