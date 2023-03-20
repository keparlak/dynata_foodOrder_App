import React from "react";
import {
  ShoppingBagIcon,
  Bars3Icon,
  HeartIcon,
  UserCircleIcon,
} from "@heroicons/react/24/solid";

function Navbar() {
  return (
    <>
      {/* navbar */}
      <nav className="flex justify-between bg-gray-900 text-white">
        <div className="px-5 xl:px-12 py-6 flex w-full items-center">
          <a className="text-3xl font-bold font-heading" href="#">
            <img className="h-9" src="./logo.png" alt="logo" />
          </a>
          {/* Nav Links */}
          <ul className="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
            <li>
              <a className="hover:text-gray-200" href="#">
                Home
              </a>
            </li>
            <li>
              <a className="hover:text-gray-200" href="#">
                Catagory
              </a>
            </li>
            <li>
              <a className="hover:text-gray-200" href="#">
                Collections
              </a>
            </li>
            <li>
              <a className="hover:text-gray-200" href="#">
                Contact Us
              </a>
            </li>
          </ul>
          {/* Header Icons */}
          <div className="hidden xl:flex items-center space-x-5">
            <a className="hover:text-gray-200" href="#">
              <HeartIcon className="h-6 w-6" />
            </a>
            <a className="flex items-center hover:text-gray-200" href="#">
              <ShoppingBagIcon className="h-6 w-6" />
              <span className="flex absolute -mt-5 ml-4">
                <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500"></span>
              </span>
            </a>
            {/* Sign In / Register      */}
            <a className="flex items-center gap-2 hover:text-gray-200" href="#">
              <UserCircleIcon className="h-6 w-6 hover:text-gray-200" />
              Login
            </a>
          </div>
        </div>
        {/* Responsive navbar */}
        <a className="xl:hidden flex mr-6 items-center" href="#">
          <ShoppingBagIcon className="h-6 w-6 hover:text-gray-200" />
          <span className="flex absolute -mt-5 ml-4">
            <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500"></span>
          </span>
        </a>
        <a className="navbar-burger self-center mr-12 xl:hidden" href="#">
          <Bars3Icon className="h-6 w-6 hover:text-gray-200" />
        </a>
      </nav>
    </>
  );
}

export default Navbar;
