"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import TestimonialCard from "./TestimonialCard";
import { useEffect, useState } from "react";

import manese from "@/public/testimonials/Manese.jpeg";
import ba from "@/public/testimonials/b&a.jpeg";
import frizco from "@/public/testimonials/frizco.jpeg";
import mendozabr from "@/public/testimonials/mendozabr.jpeg";

const TestimonialsCarousel = () => {
  const [api, setApi] = useState();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="w-full flex flex-col items-center gap-4">
      <Carousel setApi={setApi} className="w-full max-lg:max-w-[400px]">
        <CarouselContent className="">
          {testimonials.map((testimonial, i) => (
            <CarouselItem key={i} className="lg:basis-1/2 xl:basis-1/3">
              <TestimonialCard testimonial={testimonial} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="text-black hidden sm:flex drop-shadow-[0_0px_10px_#FFF]" />
        <CarouselNext className="text-black hidden sm:flex drop-shadow-[0_0px_10px_#FFF]" />
      </Carousel>
      <div className="flex items-center justify-center gap-2 md:hidden z-10 h-[20px]">
        {testimonials.map((_, i) => (
          <div
            key={i}
            className={`transition-all duration-300 w-2 h-2 rounded-full bg-white ${
              current === i + 1
                ? "p-2 drop-shadow-[0_0px_10px_#FFF]"
                : "bg-opacity-40"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialsCarousel;

const testimonials = [
  {
    name: "Manuel Manese",
    words:
      "Son un equipo bárbaro, muy responsable, muy dedicado, que planifican cada uno de los pasos, que van ajustando la estrategia en relación a cada uno de los objetivos que nos planteamo y me ha permitido posicionarme muy bien dentro del mercado inmobiliario de la ciudad de La Plata.",
    profilePicture: manese,
  },
  {
    name: "Barrios & Asociados",
    words:
      "Trabajamos en la misma línea, muy serios, responsabilidad, puntualidad, la verdad que muy contento de trabajar con ellos.",
    profilePicture: ba,
  },
  {
    name: "Mendoza Bienes Raíces",
    words:
      "El trabajo ha sido totalmente progresivo y venimos creciendo a pasos agintados. Como experiencia Grupo Mat es de excelencia para las redes sociales y para el marketing digital.",
    profilePicture: mendozabr,
  },
  {
    name: "Frizco Real Estate",
    words:
      "Son muy recomendados para marketing digital y si quieren hacer crecer su marca.",
    profilePicture: frizco,
  },
];
