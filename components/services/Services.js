import React from "react";
import Title from "../Title";
import Subtitle from "../Subtitle";
import ServicesCarousel from "./ServicesCarousel";

const Services = () => {
  return (
    <section className="text-white w-full max-w-[1200px] z-40 mt-[80px] lg:mt-[120px]">
      <div className="flex flex-col gap-8 items-center w-full">
        <div className="w-full flex flex-col items-center">
          <Title text="Servicios" />
          <Subtitle text="Potenciando Tu Éxito con Nuestros Servicios Especializados" />
        </div>
        <ServicesCarousel />
      </div>
    </section>
  );
};

export default Services;
