import logo from "@/public/grupomatLogo.png";
import Image from "next/image";
import instagram from "@/public/icons/instagram.png";
import linkedin from "@/public/icons/linkedin.png";
import Link from "next/link";
import whatsapp from "@/public/icons/whatsapp.png";

import { useTranslations } from "next-intl";

const Footer = () => {
  const t = useTranslations("footer");

  return (
    <footer className="w-full z-40 flex justify-center pb-8 mt-[80px] px-[20px] md:px-[120px]">
      <div className="max-w-[1200px] w-full flex flex-col gap-6 items-center text-white">
        <Link href="/">
          <Image src={logo} alt="grupomat Logo" width={150} height={80} />
        </Link>
        <p className="text-center">{t("text")}</p>
        <div className="flex gap-4 items-center">
          <Link
            href="https://www.instagram.com/grupomatagency/"
            target="_blank"
            className="hover:scale-[1.1] transition-all duration-100"
          >
            <Image
              src={instagram}
              alt="Instagram Link"
              width={62}
              height={63}
            />
          </Link>
          <Link
            href="https://wa.link/i57lkq"
            target="_blank"
            className="hover:scale-[1.1] transition-all duration-100"
          >
            <Image src={whatsapp} alt="Whatsapp icon" width={62} height={63} />
          </Link>

          <Link
            href="https://www.linkedin.com/company/grupo-mat-realestate/"
            target="_blank"
            className="hover:scale-[1.1] transition-all duration-100"
          >
            <Image src={linkedin} alt="Instagram Link" width={52} height={52} />
          </Link>
        </div>
        <div className="w-[90%] h-[2px] bg-white bg-opacity-30" />
        <p className="text-center">
          © Copyright grupomat 2024. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
