import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const DesktopNav = ({ links }) => {
  return (
    <div className="flex justify-between items-center gap-8">
      <ul className="md:flex justify-between items-center gap-8 hidden">
        {links.map((link) => (
          <li
            key={link.href}
            className="font-semibold hover:scale-[1.1] transition-all duration-100"
          >
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
      <div className="md:flex gap-8 items-center hidden">
        <DropdownMenu>
          <DropdownMenuTrigger className="font-bold">ES ^</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Lenguaje</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Español</DropdownMenuItem>
            <DropdownMenuItem>English</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <button className="font-semibold hidden md:block border-2 p-2 rounded-[15px]">
          <Link href="/#contacto">Contactanos</Link>
        </button>
      </div>
    </div>
  );
};

export default DesktopNav;
