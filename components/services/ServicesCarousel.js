"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import instagram from "@/public/icons/instagram.png";
import meta from "@/public/icons/meta.png";
import code from "@/public/icons/code.png";
import googleads from "@/public/icons/googleads.png";
import handshake from "@/public/icons/handshake.png";
import art from "@/public/icons/art.png";
import brush from "@/public/icons/brush.png";

import ServiceCard from "./ServiceCard";
import { useEffect, useState } from "react";

const ServicesCarousel = () => {
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
          {services.map((service, i) => (
            <CarouselItem key={i} className="lg:basis-1/2 xl:basis-1/3">
              <ServiceCard service={service} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="text-black hidden sm:flex drop-shadow-[0_0px_10px_#FFF]" />
        <CarouselNext className="text-black hidden sm:flex drop-shadow-[0_0px_10px_#FFF]" />
      </Carousel>
      <div className="flex items-center justify-center gap-2 md:hidden z-10 h-[20px]">
        {services.map((_, i) => (
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

export default ServicesCarousel;

const services = [
  {
    title: "Social Media",
    description:
      "Estrategia de Marketing, Gestión de redes, Creación de contenido, Pauta publicitaria, Asesorías y capacitaciones.",
    icon: instagram,
  },
  {
    title: "Diseño Web",
    description:
      "Desarrollamos tu sitio web, landing page o carta de presentación adaptables a todas las plataformas.",
    icon: code,
  },
  {
    title: "Google Ads",
    description:
      "Nos aseguramos de que tu empresa tenga una correcta presencia en el buscador de Google con el objetivo de llegar a clientes potenciales y recibir consultas.",
    icon: googleads,
  },
  {
    title: "Meta Ads",
    description:
      "Desarrollamos, planificamos y gestionamos anuncios pagados en Facebook e Instagram. Trabajamos con campañas de prospecting y de retargeting.",
    icon: meta,
  },
  {
    title: "Branding",
    description:
      "Creamos una identidad e imagen única para tu marca. Trabajamos en el diseño, la identidad y la comunicación tanto para tu empresa como para un desarrollo en particular.",
    icon: art,
  },
  {
    title: "Asesoramiento",
    description:
      "Asesoramos y capacitamos a empresas o asesores para que potencien y posicionen su marca y sus redes sociales, definiendo objetivos y estrategias.",
    icon: handshake,
  },
  {
    title: "Diseño Grafico Profesional",
    description:
      "Cautivamos con diseño. Desde logotipos hasta materiales publicitarios, creamos elementos visuales únicos que resaltan tu marca con creatividad y estilo.",
    icon: brush,
  },
];
