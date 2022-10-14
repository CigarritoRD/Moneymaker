import React from "react";
import Beneficios from "../components/Beneficios";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Planes from "../components/Planes";
import WhyGold from "../components/WhyGold";

const Home = () => {
  return (
    <div className='overflow-x-hidden'>
      <Navbar activado={true} />
      <Hero />
      <Planes />
      <Beneficios />
      <WhyGold />
      <Footer />
    </div>
  );
};

export default Home;
