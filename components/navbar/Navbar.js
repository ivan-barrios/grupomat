import React from "react";
import logo from "@/public/grupomatLogo.png";
import Image from "next/image";
import Link from "next/link";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import { NextIntlClientProvider, useLocale } from "next-intl";

const Navbar = () => {
  const locale = useLocale();
  return (
    <nav className="fixed top-0 w-full flex justify-center px-[20px] md:px-[30px] bg-black z-50">
      <div className="max-w-[1200px] w-full flex justify-between items-center h-[80px] text-white">
        <Link href="/">
          <Image src={logo} alt="Logo" width={150} height={80} />
        </Link>
        <div className="">
          <NextIntlClientProvider>
            <MobileNav locale={locale} links={links} />
          </NextIntlClientProvider>
          <NextIntlClientProvider>
            <DesktopNav locale={locale} links={links} />
          </NextIntlClientProvider>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

const links = [
  {
    href: "/#aboutus",
    nombre: "Nosotros",
    name: "About Us",
  },
  {
    href: "/#services",
    nombre: "Servicios",
    name: "Services",
  },
  {
    href: "/#testimonials",
    nombre: "Testimonios",
    name: "Testimonials",
  },
];
