"use client"

import { useState } from "react";
import Image from "next/image";
import { usePathname, useRouter } from "@/i18n/navigation";
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'

export default function ButtonLanguage() {
  const router = useRouter();
  const pathname = usePathname();

  const currentLocale = pathname.split("/")[1];
  const currentLang = currentLocale === "en" ? "en" : "vi";

  const [position, setPosition] = useState<string>(currentLang);

  const changeLanguage = (lang: "en" | "vi") => {
    router.push(pathname, { locale: lang });
    setPosition(lang);
  };

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md  px-3 py-2 text-sm font-semibold cursor-pointer">
          <Image
            alt={position === "en" ? "English" : "Tiếng Việt"}
            src={`/svg/language/${position}.svg`}
            width={20}
            height={20}
            className="w-[25px] h-[25px]"
          />
        </MenuButton>
      </div>

      <MenuItems
        transition
        className="absolute right-0 z-10 mt-2 w-36 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
      >
        <div className="py-1">
          <MenuItem>
            <button
              onClick={() => changeLanguage("vi")}
              className="w-full px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden flex items-center gap-3"
            >
              <Image alt="Tiếng Việt" src="/svg/language/vi.svg" width={20} height={20} />
              Tiếng Việt
            </button>
          </MenuItem>
          <MenuItem>
            <button
              onClick={() => changeLanguage("en")}
              className="w-full px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden flex items-center gap-3"
            >
              <Image alt="English" src="/svg/language/en.svg" width={20} height={20} />
              English
            </button>
          </MenuItem>
        </div>
      </MenuItems>
    </Menu >
  )
}
