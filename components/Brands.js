import Image from "next/image";
import {
  ba,
  bgb,
  century,
  carlaZubieta,
  claudia,
  gc,
  juarez,
  mm,
  massolorocha,
  mendozabr,
  perdriel,
} from "@/public/brands/index.js";
import { useTranslations } from "next-intl";

const Brands = () => {
  const t = useTranslations("brands");

  return (
    <section className="max-w-[1200px] w-full overflow-hidden relative mt-[30px] lg:mt-[150px] z-40">
      <p className="text-[16px] text-white text-center font-bold pb-2">
        {t("sentence")}
      </p>
      <div className="bg-gradient-to-r from-black from-0% to-20%  to-transparent absolute left-0 h-full w-full z-40"></div>
      <div className="bg-gradient-to-l from-black from-0% to-20%  to-transparent absolute right-0 h-full w-full z-40"></div>
      <div className="flex items-center gap-4 md:gap-[8rem] w-max animate-loop-scroll md:animate-loop-scrollmd h-[100px] bg-white">
        {brands.map((brand, index) => (
          <Image
            key={index}
            src={brand}
            alt="brand"
            width={120}
            height={80}
            className="object-contain max-h-[80px]"
          />
        ))}
        {brands.map((brand, index) => (
          <Image
            key={index}
            src={brand}
            alt="brand"
            width={120}
            height={80}
            className="object-contain max-h-[80px]"
          />
        ))}
      </div>
    </section>
  );
};

export default Brands;

const brands = [
  ba,
  bgb,
  century,
  carlaZubieta,
  claudia,
  gc,
  juarez,
  mm,
  massolorocha,
  mendozabr,
  perdriel,
];
