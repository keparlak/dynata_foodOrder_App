import React from "react";
import {
  ShoppingBagIcon,
  Bars3Icon,
  HeartIcon,
  UserCircleIcon,
} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutUserAction } from "../actions/userActions";

function Navbar() {
  const cartState = useSelector((state) => state.addToCartReducer);

  const userState = useSelector((state) => state.loginUserReducer);
  const { cartItems } = cartState;
  const { currentUser } = userState;

  const dispatch = useDispatch();

  const logoutHandler = async () => {
    await dispatch(logoutUserAction());
  };
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
                <span className="relative inline-flex rounded-full h-4 w-4 bg-pink-500 text-[9px] place-content-center font-bold">
                  {cartItems.length}
                </span>
              </span>
            </Link>
            {/* Sign In / Register      */}
            {currentUser ? (
              <>
                <button className="flex flex-col relative group">
                  <div className="flex">
                    <img
                      className="h-8 w-8 rounded-full"
                      src="https://randomuser.me/api/portraits/men/25.jpg"
                      alt=""
                    />
                    <div className="ml-3">
                      <p className="text-sm text-left font-medium text-gray-100">
                        {currentUser.name}
                      </p>
                      <p className="text-sm text-slate-500 truncate">
                        {currentUser.mail}
                      </p>
                    </div>
                  </div>
                  <ul className="w-full hidden absolute p-2 top-10 shadow-xl overflow-hidden rounded-lg z-10 text-gray-900 bg-white group-focus:block group-focus:transition group-focus:ease-in-out group-focus:duration-300">
                    <li>
                      <Link
                        className="p-2 m2 rounded block hover:bg-gray-400 hover:text-white"
                        to="/myorders"
                      >
                        Siparişlerim
                      </Link>
                    </li>
                    <li>
                      <a
                        className="p-2 m2 rounded block hover:bg-gray-400 hover:text-white"
                        onClick={logoutHandler}
                      >
                        Logout
                      </a>
                    </li>
                  </ul>
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="flex items-center gap-2 hover:text-gray-200"
                >
                  <UserCircleIcon className="h-6 w-6 hover:text-gray-200" />
                  Login
                </Link>
              </>
            )}
          </div>
        </div>
        {/* Responsive navbar */}
        <Link to="" className="xl:hidden flex mr-6 items-center">
          <ShoppingBagIcon className="h-6 w-6 hover:text-gray-200" />
          <span className="flex absolute -mt-5 ml-4">
            <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500 place-content-center font-bold text-[9px]">
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
