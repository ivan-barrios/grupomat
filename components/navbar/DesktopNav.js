import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import LanguageOption from "../LanguageOption";

const DesktopNav = ({ links, locale }) => {
  return (
    <div className="flex justify-between items-center gap-8">
      <ul className="md:flex justify-between items-center gap-8 hidden">
        {links.map((link) => (
          <li
            key={link.href}
            className="font-semibold hover:scale-[1.1] transition-all duration-100"
          >
            <Link href={link.href}>
              {locale === "es" ? link.nombre : link.name}
            </Link>
          </li>
        ))}
      </ul>
      <div className="md:flex gap-8 items-center hidden">
        <DropdownMenu>
          <DropdownMenuTrigger className="font-bold uppercase">
            {locale}
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Lenguaje</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <LanguageOption language="Español" willLocale="es" />
            </DropdownMenuItem>
            <DropdownMenuItem>
              <LanguageOption language="English" willLocale="en" />
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <button className="font-semibold hidden md:block border-2 p-2 rounded-[15px] hover:scale-[1.1] transition-all duration-100">
          <Link href="/#contacto">
            {locale === "es" ? "Contactanos" : "Contact Us"}
          </Link>
        </button>
      </div>
    </div>
  );
};

export default DesktopNav;
