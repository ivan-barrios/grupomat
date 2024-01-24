import Image from "next/image";
import rocket from "@/public/rocket.png";
import Title from "./Title";
import Subtitle from "./Subtitle";
import { useTranslations } from "next-intl";

const AboutUs = () => {
  const t = useTranslations("aboutus");

  return (
    <section
      id="aboutus"
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
        <Title text={t("title")} />
        <Subtitle text={t("subtitle")} />
        <p className="text-center lg:text-start text-lg md:text-xl mt-4">
          {t("content")}
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
