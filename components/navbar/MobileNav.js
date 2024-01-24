"use client";
import menu from "@/public/icons/menu.svg";
import close from "@/public/icons/closeIcon.svg";
import linkedin from "@/public/icons/linkedin.png";
import instagram from "@/public/icons/instagram.png";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import whatsapp from "@/public/icons/whatsapp.png";
import LocaleSwitcherM from "./LocaleSwitcherM";

const MobileNav = ({ links, us, services, testimonials, contact }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const linkslayers = [us, services, testimonials];

  return (
    <div className="md:hidden z-50">
      {menuOpen ? (
        <Image
          src={close}
          alt="Close Icon"
          width={30}
          height={30}
          className="cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        />
      ) : (
        <Image
          src={menu}
          alt="Menu Icon"
          width={33}
          height={26}
          className="cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        />
      )}
      {/*  */}
      <div
        className={`bg-black fixed z-50 h-[calc(100vh-80px)] top-[80px] pt-12 w-screen md:hidden text-white ${
          menuOpen ? "left-0" : "-left-full"
        } transition-all duration-100 flex flex-col items-center border-t-2 border-black`}
      >
        {links.map((link, i) => (
          <Link
            onClick={() => setMenuOpen(false)}
            key={link.href}
            href={link.href}
            className="uppercase text-2xl shadow-lg px-4 py-3 w-full text-center"
          >
            {linkslayers[i]}
          </Link>
        ))}
        <div className="uppercase text-2xl shadow-lg px-4 py-3 w-full text-center">
          <LocaleSwitcherM />
          <button
            className="font-semibold border-2 border-white py-2 px-4 rounded-[15px] mt-8 text-2xl"
            onClick={() => setMenuOpen(false)}
          >
            <Link href="/#contacto">{contact}</Link>
          </button>
        </div>

        <div className="absolute bottom-0 w-full flex justify-center gap-4 py-8">
          <Link
            href="https://www.instagram.com/grupomatagency/"
            target="_blank"
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
          >
            <Image src={linkedin} alt="Instagram Link" width={52} height={52} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
