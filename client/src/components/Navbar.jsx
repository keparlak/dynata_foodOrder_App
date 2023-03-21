import React from "react";
import {
  ShoppingBagIcon,
  Bars3Icon,
  HeartIcon,
  UserCircleIcon,
} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {
  const cartState = useSelector((state) => state.addToCartReducer);
  const { cartItems } = cartState;
  return (
    <>
      {/* navbar */}
      <nav className="flex justify-between bg-gray-900 text-white">
        <div className="px-5 xl:px-12 py-6 flex w-full items-center">
          <Link to="/" className="text-3xl font-bold font-heading">
            <img className="h-9" src="./logo.png" alt="logo" />
          </Link>
          {/* Nav Links */}
          <ul className="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
            <li>
              <Link to="/" className="hover:text-gray-200">
                Home
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-gray-200">
                Catagory
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-gray-200">
                Collections
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-gray-200">
                Contact Us
              </Link>
            </li>
          </ul>
          {/* Header Icons */}
          <div className="hidden xl:flex items-center space-x-5">
            <Link to="" className="hover:text-gray-200">
              <HeartIcon className="h-6 w-6" />
            </Link>
            <Link to="/sepet" className="flex items-center hover:text-gray-200">
              <ShoppingBagIcon className="h-6 w-6" />
              <span className="flex absolute -mt-5 ml-4">
                <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-4 w-4 bg-pink-500 text-xs place-content-center font-bold">
                  {cartItems.length}
                </span>
              </span>
            </Link>
            {/* Sign In / Register      */}
            <Link
              to="/login"
              className="flex items-center gap-2 hover:text-gray-200"
            >
              <UserCircleIcon className="h-6 w-6 hover:text-gray-200" />
              Login
            </Link>
          </div>
        </div>
        {/* Responsive navbar */}
        <Link to="" className="xl:hidden flex mr-6 items-center">
          <ShoppingBagIcon className="h-6 w-6 hover:text-gray-200" />
          <span className="flex absolute -mt-5 ml-4">
            <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500 place-content-center font-bold text-xs">
              {cartItems.length}
            </span>
          </span>
        </Link>
        <Link to="" className="navbar-burger self-center mr-12 xl:hidden">
          <Bars3Icon className="h-6 w-6 hover:text-gray-200" />
        </Link>
      </nav>
    </>
  );
}

export default Navbar;
