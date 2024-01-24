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
    <div className="md:flex gap-8 items-center hidden">
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
