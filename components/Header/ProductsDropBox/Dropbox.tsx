import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

export const DropBox = () => {
  const categoryStyle =
    "text-gray-300 hover:text-gray-600 block px-4 py-2 text-sm";

  return (
    <Menu as="div" className="relative flex items-center text-left">
      <div>
        <Menu.Button className="flex justify-center items-center py-2 rounded-md text-base px-2  text-gray-300 hover:bg-gray-700 hover:text-white   bg-gray-800 ">
          Products
          <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute left-14 top-6 z-10 mt-2 w-56 origin-top-right rounded-md bg-gray-800 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              <span>
                <Link href="/watch">
                  <a className={categoryStyle}>Watches</a>
                </Link>
              </span>
            </Menu.Item>
            <Menu.Item>
              <span>
                <Link href="/shoes">
                  <a className={categoryStyle}>Shoes</a>
                </Link>
              </span>
            </Menu.Item>
            <Menu.Item>
              <span>
                <Link href="/t-shirts">
                  <a className={categoryStyle}>T-Shirtses</a>
                </Link>
              </span>
            </Menu.Item>
            <Menu.Item>
              <span>
                <Link href="/hoodies">
                  <a className={categoryStyle}>Sweatshirts</a>
                </Link>
              </span>
            </Menu.Item>
            <Menu.Item>
              <span>
                <Link href="/accessories">
                  <a className={categoryStyle}>Accessories</a>
                </Link>
              </span>
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};
