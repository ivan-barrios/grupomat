import Image from "next/image";
import rocket from "@/public/rocket.png";
import Title from "./Title";
import Subtitle from "./Subtitle";

const AboutUs = () => {
  return (
    <section
      id="nosotros"
      className="text-white z-40 flex flex-col items-center lg:flex-row lg:justify-between mt-[60px] lg:mt-[120px] w-full max-w-[1200px] scroll-m-[120px]"
    >
      <Image
        src={rocket}
        alt="Rocket"
        className="max-w-[400px] w-full"
        width={300}
        height={300}
      />
      <div className="">
        <Title text="Sobre nosotros" />
        <Subtitle text="¿Que hace grupomat?" />
        <p className="text-center lg:text-start text-lg md:text-xl mt-4">
          Implementamos soluciones y estrategias de marketing para agentes
          inmobiliarios, inmobiliarias y desarrolladoras, con el fin de hacer
          realidad sus objetivos de venta, basándonos en recursos como Social
          Media, Paid Media, Branding, Web Development, Web Analytics, Growth
          Marketing y Storytelling.
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
