import React from "react";
import Title from "../Title";
import Subtitle from "../Subtitle";
import ServicesCarousel from "./ServicesCarousel";
import Image from "next/image";
import abstractServices from "@/public/abstractServices.png";
import { NextIntlClientProvider, useTranslations } from "next-intl";

const Services = () => {
  const t = useTranslations("services");

  return (
    <section
      id="services"
      className="text-white w-full max-w-[1200px] z-40 mt-[80px] lg:mt-[120px] relative scroll-m-[120px]"
    >
      <div className="flex flex-col gap-8 items-center w-full">
        <div className="w-full flex flex-col items-center">
          <Title text={t("title")} />
          <Subtitle text={t("subtitle")} />
        </div>
        <NextIntlClientProvider>
          <ServicesCarousel />
        </NextIntlClientProvider>
      </div>
      <div className="absolute pt-4 z-20">
        <div className="absolute w-[75px] h-full left-0 top-0 bg-gradient-to-r from-black to-transparent" />
        <div className="absolute w-[75px] h-full right-0 top-0 bg-gradient-to-l from-black to-transparent" />
        <Image src={abstractServices} alt="Abstract Lines" className="" />
      </div>
    </section>
  );
};

export default Services;
