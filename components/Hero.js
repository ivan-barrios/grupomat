import Image from "next/image";
import Link from "next/link";
import abstract from "@/public/abstractHero.svg";

import { getScopedI18n } from "@/locales/server";

const Hero = async () => {
  const t = await getScopedI18n("hero");

  return (
    <section className="mt-[80px] pt-[50px] sm:pt-[70px] lg:pt-[120px] pb-12 text-white w-full max-w-[1200px] flex flex-col justify-center items-center relative">
      <div className="flex flex-col items-center gap-6 relative">
        <h1 className="text-center font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl z-40">
          {t("title1")}
          <br /> {t("title2")}
        </h1>
        <p className="text-center text-lg sm:text-xl lg:text-2xl z-40">
          {t("subtitle")}
        </p>
        <Link
          href="/#services"
          className="btn z-40 hover:scale-[1.1] transition-all duration-100"
        >
          {t("cta")}
        </Link>
        <Image
          src={abstract}
          alt="Abstract Image"
          className="absolute -top-[30px] sm:-top-[40px] md:-top-[60px] lg:-top-[80px] z-10"
        />
      </div>
      <div className="z-0 absolute w-[180px] h-[100px] xs:w-[200px] xs:h-[200px] gradient left-0 bottom-[40%] xs:bottom-0 md:w-[300px] lg:w-[400px] lg:left-[10%]" />
      <div className="z-0 absolute w-[180px] h-[100px] xs:w-[200px] xs:h-[200px] gradient right-0 bottom-[40%] xs:bottom-0 md:w-[300px] lg:w-[400px] lg:right-[10%]" />
    </section>
  );
};

export default Hero;
