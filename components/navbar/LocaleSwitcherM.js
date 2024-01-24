"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { useChangeLocale, useCurrentLocale } from "@/locales/client";
import Link from "next/link";

const LocaleSwitcher = () => {
  const changeLocale = useChangeLocale();
  const currentLocale = useCurrentLocale();

  return (
    <div className="uppercase text-2xl shadow-lg px-4 py-3 w-full text-center">
      <DropdownMenu>
        <DropdownMenuTrigger className="font-bold uppercase">
          {currentLocale}
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Lenguaje</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <button
              className="w-full h-full"
              onClick={() => changeLocale("en")}
            >
              EN
            </button>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <button
              className="w-full h-full"
              onClick={() => changeLocale("es")}
            >
              ES
            </button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default LocaleSwitcher;

{
  /* <div
  onClick={() => setMenuOpen(false)}
  className="uppercase text-2xl shadow-lg px-4 py-3 w-full text-center"
>
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
</div>; */
}
