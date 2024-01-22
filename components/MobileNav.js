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

const MobileNav = ({ links }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="md:hidden">
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
      <div
        className={`bg-black fixed z-50 h-[calc(100vh-80px)] top-[80px] w-screen md:hidden text-white ${
          menuOpen ? "left-0" : "-left-full"
        } transition-all duration-100 flex flex-col items-center border-t-2 border-black`}
      >
        {links.map((link) => (
          <Link
            onClick={() => setMenuOpen(false)}
            key={link.href}
            href={link.href}
            className="uppercase text-2xl shadow-lg px-4 py-3 w-full text-center"
          >
            {link.label}
          </Link>
        ))}
        <div
          onClick={() => setMenuOpen(false)}
          className="uppercase text-2xl shadow-lg px-4 py-3 w-full text-center"
        >
          <DropdownMenu>
            <DropdownMenuTrigger>ES ^</DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Lenguaje</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Español</DropdownMenuItem>
              <DropdownMenuItem>English</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <button
          onClick={() => setMenuOpen(false)}
          className="uppercase font-semibold border-2 border-white py-2 px-4 rounded-[15px] mt-8 text-2xl"
        >
          <Link href="/#contacto">Contactanos</Link>
        </button>
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
