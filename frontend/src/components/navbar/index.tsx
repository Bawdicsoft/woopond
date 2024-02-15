"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useImageContext } from "../contextApi/imageContext";
import { Menu } from "@headlessui/react";
import { Transition } from "@headlessui/react";

import { Fragment } from "react";
function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}
export default function NavBar() {
  const authModal = useImageContext();
  const setModal = authModal.authModalHandler;
  const setSwitchModal = authModal.switchModalHandler;

  const [toggle, setToggle] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setToggle(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [toggle]);

  return (
    <nav className="border-gray-200 bg-black z-50 md:z-30 relative max-w-6xl mx-auto">
      <div className="flex md:flex-wrap justify-between mx-auto md:px-4 lg:px-0 py-2 md:py-4 items-center">
        <Link href="/" className="flex items-center">
          <img
            src="/Assests/homeAssests/image.png"
            className="h-12 md:h-20 lg:h-20 px-2"
            alt="WooPond Logo"
          />
          {/* <span className="text-xl md:text-2xl lg:text-2xl -ml-2 font-bold font-inika text-primary">
            WooPond
          </span> */}
        </Link>
        <button
          type="button"
          className="ml-24 inline-flex items-center order-2 p-2  justify-center text-sm text-lightGray rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-lightGreen"
          onClick={() => setToggle(!toggle)}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto">
          <ul className="font-normal font-inter lg:text-lg xl:text-lg flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-4 xl:space-x-8 md:mt-0 md:border-0">
            <li>
              <Link
                href="#"
                className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:p-0 md:hover:text-blue-700 relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] 
              before:bottom-0 before:left-0 before:bg-lightGreen
              before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
              before:transition before:ease-in-out before:duration-700 hover:text-lightGreen focus:text-lightGreen"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="block py-2 px-3 rounded  md:border-0 md:hover:text-blue-700 md:p-0 text-white relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] 
              before:bottom-0 before:left-0 before:bg-lightGreen
              before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
              before:transition before:ease-in-out before:duration-700 hover:text-lightGreen focus:text-lightGreen"
              >
                Text to image
              </Link>
            </li>
            <li>
              <Link
                href="/text-to-video"
                className="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 text-white relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] 
              before:bottom-0 before:left-0 before:bg-lightGreen
              before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
              before:transition before:ease-in-out before:duration-700 hover:text-lightGreen focus:text-lightGreen"
              >
                Text to video
              </Link>
            </li>
            {/* <li>
              <Link
                href="#"
                className="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 text-white"
              >
                Community
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 text-white"
              >
                Bookmarks
              </Link>
            </li> */}
          </ul>
        </div>
        {/* <div className="flex gap-2">
          <button
            onClick={() => {
              setSwitchModal("signup");
              setModal(true);
            }}
          >
            <Link
              href="#"
              className="hidden md:inline bg-lightGreen hover:bg-teal-300 font-semibold lg:font-bold lg:text-lg py-2 px-4 md:border-0 md:py-3 md:px-3 rounded-full "
            >
              Sign Up
            </Link>
          </button>
          <button
            onClick={() => {
              setSwitchModal("signin");
              setModal(true);
            }}
          >
            <Link
              href="#"
              className="hidden md:inline outline-none  border-2 text-lightGreen border-lightGreen hover:bg-teal-300 font-semibold lg:font-bold lg:text-lg py-2 px-4 md:py-3 md:px-3 rounded-full text-gray-800"
            >
              Log In
            </Link>
          </button>
        </div> */}
        {/* toggle */}
        <Menu as="div" className="relative ml-3 hidden md:block">
          <div>
            <Menu.Button className="  relative flex rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
              <span className="absolute -inset-1.5" />
              <span className="sr-only">Open user menu</span>
              <img
                className="h-8 w-8 rounded-full"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
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
            <Menu.Items className=" bg-black text-white border border-lightGreen absolute right-0 z-50 mt-2 w-48 origin-top-right rounded-md  py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(
                      active ? "bg-gray-100" : "",
                      "block px-4 py-2 text-sm "
                    )}
                  >
                    Your Profile
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(
                      active ? "bg-gray-100" : "",
                      "block px-4 py-2 text-sm "
                    )}
                  >
                    Settings
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(
                      active ? "bg-gray-100" : "",
                      "block px-4 py-2 text-sm "
                    )}
                  >
                    Sign out
                  </a>
                )}
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </Menu>
        {toggle && (
          <div
            ref={dropdownRef}
            className="absolute top-16 z-30 rounded w-full border border-lightGreen"
          >
            <div className="w-full">
              <ul className="flex flex-col p-2 mt-4 font-medium border border-green-200 rounded-lg bg-black">
                <li>
                  <Link
                    onClick={() => setToggle(!toggle)}
                    href="/"
                    className="block py-2 px-3 text-white font-semibold "
                    aria-current="page"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={() => setToggle(!toggle)}
                    href="/"
                    className="block py-2 px-3 text-white font-semibold "
                    aria-current="page"
                  >
                    Text to image
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={() => setToggle(!toggle)}
                    href="/text-to-video"
                    className="block py-2 px-3 text-white font-semibold "
                  >
                    Text to video
                  </Link>
                </li>
                {/* <li>
                <Link
                  onClick={() => setToggle(!toggle)}
                  href="/donation"
                  className="block py-2 px-3 text-white font-semibold "
                >
                  Community
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => setToggle(!toggle)}
                  href="/donation"
                  className="block py-2 px-3 text-white font-semibold "
                >
                  Bookmarks
                </Link>
              </li> */}
                <hr className="my-4 h-[2px] border-t-0 bg-transparent bg-gradient-to-r from-transparent via-green-200 to-transparent opacity-25" />
              </ul>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
