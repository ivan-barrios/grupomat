import Image from "next/image";
import {
  ba,
  bgb,
  century,
  carlaZubieta,
  claudia,
  gc,
  juarez,
  massolorocha,
  mendozabr,
  perdriel,
  rodo,
  nieves,
  mati_rios,
  mati_goñi,
  enriquez,
  xv,
  ca,
  siete,
  houseland,
  inmo,
  camifede,
  teamali,
  solari,
  rentahouse,
  anexa,
  nicofleisman,
  puebla,
  rambla,
} from "@/public/brands/index.js";

import { getScopedI18n } from "@/locales/server";

const Brands = async () => {
  const t = await getScopedI18n("brands");

  return (
    <section className="max-w-[1200px] w-full overflow-hidden relative mt-[30px] lg:mt-[150px] z-30">
      <p className="text-[16px] text-white text-center font-bold pb-2">
        {t("sentence")}
      </p>
      <div className="bg-gradient-to-r from-black from-0% to-20% to-transparent absolute left-0 h-full w-full z-40"></div>
      <div className="bg-gradient-to-l from-black from-0% to-20% to-transparent absolute right-0 h-full w-full z-40"></div>
      <div className="flex items-center gap-4 md:gap-[8rem] min-w-max max-md:animate-loop-scroll md:animate-loop-scrollmd h-[100px] bg-white">
        {brands.map((brand, index) => (
          <Image
            key={index}
            src={brand}
            alt="brand"
            width={120}
            height={80}
            priority
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
            priority
            className="object-contain max-h-[80px]"
          />
        ))}
      </div>
    </section>
  );
};

export default Brands;

const brands = [
  nicofleisman,
  puebla,
  rambla,
  ba,
  bgb,
  anexa,
  solari,
  rentahouse,
  century,
  carlaZubieta,
  claudia,
  gc,
  juarez,
  massolorocha,
  mendozabr,
  perdriel,
  rodo,
  nieves,
  mati_rios,
  mati_goñi,
  enriquez,
  xv,
  ca,
  siete,
  houseland,
  inmo,
  camifede,
  teamali,
];
