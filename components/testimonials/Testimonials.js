import React from "react";
import Title from "../Title";
import Subtitle from "../Subtitle";
import TestimonialsCarousel from "./TestimonialsCarousel";
import { NextIntlClientProvider, useTranslations } from "next-intl";

const Testimonials = () => {
  const t = useTranslations("testimonials");

  return (
    <section
      id="testimonials"
      className="w-full max-w-[1200px] text-white z-40 mt-[100px] md:mt-[150px] lg:mt-[220px] scroll-m-[120px]"
    >
      <div className="w-full flex flex-col items-center gap-8">
        <div className="flex flex-col items-center">
          <Title text={t("title")} />
          <Subtitle text={t("subtitle")} />
        </div>
        <NextIntlClientProvider>
          <TestimonialsCarousel />
        </NextIntlClientProvider>
      </div>
    </section>
  );
};

export default Testimonials;
