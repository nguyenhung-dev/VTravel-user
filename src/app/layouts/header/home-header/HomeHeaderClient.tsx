"use client"

import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { Bars3Icon, BellIcon, XMarkIcon, UserCircleIcon } from '@heroicons/react/24/outline';
import Link from "next/link";
import Image from 'next/image';
import AuthDialog from '@/app/(auth)/AuthDialog';
import { useState, useEffect } from 'react';
import ButtonLanguage from "@/components/buttonLanguage";
import styles from "./style.module.css";

type NavigationItem = {
  name: string;
  href: string;
  current: boolean;
};

type Props = {
  navigation: NavigationItem[];
};

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function HomeHeaderClient({ navigation }: Props) {
  const [showForm, setShowForm] = useState<boolean>(false)

  const [isAuth, setIsAuth] = useState<boolean>(false);

  const [scrolled, setScrolled] = useState(false);


  return (
    <header className={classNames(
      styles.header,
      "top-0 left-0 right-0 fixed z-10 transition-colors duration-300",
      scrolled ? "bg-white shadow-md" : ""
    )}>
      <Disclosure as="nav">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative gap-10 flex h-28 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* Mobile menu button*/}
              <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset">
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open main menu</span>
                <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
                <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
              </DisclosureButton>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-center sm:justify-between">
              <div className="flex shrink-0 items-center">
                <Image
                  alt="Your Company"
                  src="/images/logo.png"
                  className="w-[150px]"
                  width={128}
                  height={80}
                />
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      aria-current={item.current ? 'page' : undefined}
                      className={``}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <button
                type="button"
                className="relative rounded-full  p-1 text-gray-400 hover:text-white focus:ring-2 focus:ring-white focus:ring-offset-2focus:outline-hidden"
              >
                <span className="absolute -inset-1.5" />
                <span className="sr-only">View notifications</span>
                <BellIcon aria-hidden="true" />
              </button>
              <button
                onClick={() => setShowForm(true)}
                className='cursor-pointer rounded-full  p-1 text-gray-400 hover:text-white focus:ring-2 focus:ring-white focus:ring-offset-2  focus:outline-hidden'>
                <UserCircleIcon />
              </button>
              <AuthDialog open={showForm} onOpenChange={setShowForm} />
              <ButtonLanguage />
            </div>
          </div>
        </div>

        <DisclosurePanel className="sm:hidden">
          <div className="space-y-1 px-2 pt-2 pb-3">
            {navigation.map((item) => (
              <DisclosureButton
                key={item.name}
                as="a"
                href={item.href}
                aria-current={item.current ? 'page' : undefined}
                className={classNames(
                  item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                  'block rounded-md px-3 py-2 text-base font-medium',
                )}
              >
                {item.name}
              </DisclosureButton>
            ))}
          </div>
        </DisclosurePanel>
      </Disclosure>
    </header>
  )
}