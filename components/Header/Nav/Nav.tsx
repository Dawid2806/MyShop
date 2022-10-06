import React from "react";
import { Disclosure } from "@headlessui/react";
import {
  Bars3Icon,
  ShoppingCartIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { Profil } from "../Profil/Profil";
import { DropBox } from "../dropsbox/Dropbox";

export const Nav = () => {
  const styleMenuWithMobileNav =
    " text-gray-300    px-3 py-2 rounded-md text-base font-medium";

  const styleMenuDesktop =
    "text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium";

  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* Mobile menu button*/}
              <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                <span className="sr-only">Open main menu</span>
                {open ? (
                  <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                )}
              </Disclosure.Button>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center">
                <span className="block text-white font-bold h-8 w-auto lg:hidden">
                  Dave Shop
                </span>
                <span className="hidden h-8 w-auto lg:block text-white font-bold">
                  Dave Shop
                </span>
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  <Link href={"/"}>
                    <a className={styleMenuDesktop}>Home</a>
                  </Link>
                  <Link href={"/about"}>
                    <a className={styleMenuDesktop}>About</a>
                  </Link>
                  <DropBox />
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <button
                type="button"
                className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                <span className="sr-only">Cart</span>
                <ShoppingCartIcon
                  className="h-6 w-6 mr-10"
                  aria-hidden="true"
                />
              </button>
            </div>
            <Profil />
          </div>
          <Disclosure.Panel className="sm:hidden">
            <div className="flex flex-col space-y-1 px-2 pt-2 pb-3">
              <Disclosure.Button as="a" className={styleMenuWithMobileNav}>
                Home
              </Disclosure.Button>
              <Disclosure.Button as="a" className={styleMenuWithMobileNav}>
                About
              </Disclosure.Button>
              <Disclosure.Button as="a" className={styleMenuWithMobileNav}>
                <DropBox />
              </Disclosure.Button>
            </div>
          </Disclosure.Panel>
        </div>
      )}
    </Disclosure>
  );
};
