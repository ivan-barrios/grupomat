import React from "react";
import Title from "../Title";
import Subtitle from "../Subtitle";
import TestimonialsCarousel from "./TestimonialsCarousel";

const Testimonials = () => {
  return (
    <section className="w-full max-w-[1200px] text-white z-40 mt-[100px] md:mt-[150px] lg:mt-[220px]">
      <div className="w-full flex flex-col items-center gap-8">
        <div className="flex flex-col items-center">
          <Title text="Testimonios" />
          <Subtitle text="Voces que Avalan nuestra Excelencia" />
        </div>
        <TestimonialsCarousel />
      </div>
    </section>
  );
};

export default Testimonials;
