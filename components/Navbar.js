import React from "react";
import logo from "@/public/grupomatLogo.png";
import Image from "next/image";
import Link from "next/link";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full flex justify-center px-[20px] md:px-[30px] bg-black z-50">
      <div className="max-w-[1200px] w-full flex justify-between items-center h-[80px] text-white">
        <Link href="/">
          <Image src={logo} alt="Logo" width={150} height={80} />
        </Link>
        <div className="">
          <MobileNav links={links} />
          <DesktopNav links={links} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

const links = [
  {
    href: "/#nosotros",
    label: "Nosotros",
  },
  {
    href: "/#servicios",
    label: "Servicios",
  },
  {
    href: "/#testimonios",
    label: "Testimonios",
  },
];
