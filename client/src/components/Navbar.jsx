import React, { useRef } from "react";
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

  const btnRef = useRef(null);
  const btn2Ref = useRef(null);
  const showDropdown = () => {
    btnRef.current.classList.toggle("opacity-0");
    btnRef.current.classList.toggle("opacity-100");
    btn2Ref.current.classList.toggle("opacity-0");
    btn2Ref.current.classList.toggle("opacity-100");
  };
  return (
    <>
      {/* navbar */}
      <nav className="flex justify-between bg-neutral-900 text-neutral-100">
        <div className="px-5 xl:px-12 py-6 flex w-full items-center">
          <Link to="/" className="text-3xl font-bold font-heading">
            <img className="h-9" src="./logo.png" alt="logo" />
          </Link>
          {/* Nav Links */}
          <ul className="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
            <li>
              <Link
                to="/"
                className="px-3 py-2 hover:text-neutral-200 hover:bg-neutral-800 rounded-lg"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="px-3 py-2 hover:text-neutral-200 hover:bg-neutral-800 rounded-lg"
              >
                Categories
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="px-3 py-2 hover:text-neutral-200 hover:bg-neutral-800 rounded-lg"
              >
                Collections
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="px-3 py-2 hover:text-neutral-200 hover:bg-neutral-800 rounded-lg"
              >
                Contact Us
              </Link>
            </li>
          </ul>
          {/* Header Icons */}
          <div className="hidden xl:flex items-center space-x-5">
            <Link to="liked" className="hover:text-neutral-200">
              <HeartIcon className="h-6 w-6" />
            </Link>
            <Link
              to="/sepet"
              className="flex items-center hover:text-neutral-200"
            >
              <ShoppingBagIcon className="h-6 w-6" />
              <span className="flex absolute place-content-center -mt-5 ml-4">
                <span className="animate-ping absolute top-[2px] inline-flex h-3 w-3 rounded-full bg-orange-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-4 w-4 bg-orange-500 text-[9px] place-items-center place-content-center font-bold">
                  {cartItems.length}
                </span>
              </span>
            </Link>
            {/* Sign In / Register      */}
            {currentUser ? (
              <>
                <button
                  className="flex flex-col relative"
                  onClick={showDropdown}
                >
                  <div className="flex place-items-center">
                    <img
                      className="h-8 w-8 rounded-full"
                      src="https://randomuser.me/api/portraits/men/25.jpg"
                      alt=""
                    />
                    <div className="ml-3">
                      <p className="text-sm text-left font-medium text-neutral-100">
                        {currentUser.name}
                      </p>
                      <p className="text-sm text-slate-500 truncate">
                        {currentUser.mail}
                      </p>
                    </div>
                  </div>
                  <ul
                    ref={btnRef}
                    className="w-full opacity-0 transition-opacity  duration-300 ease-in-out absolute p-2 top-10 shadow-xl overflow-hidden rounded-lg z-10 text-neutral-900 bg-neutral-100"
                  >
                    {currentUser.isAdmin ? (
                      <li>
                        <Link
                          to="admin"
                          className="py-2 px-6 text-sm rounded block hover:bg-neutral-900 hover:text-neutral-100"
                        >
                          Admin
                        </Link>
                      </li>
                    ) : (
                      ""
                    )}
                    <Link
                      to="myorders"
                      className="p-2 text-sm rounded block hover:bg-neutral-900 hover:text-neutral-100"
                    >
                      Siparişlerim
                    </Link>

                    <span
                      className="p-2 text-sm rounded block hover:bg-neutral-900 hover:text-neutral-100"
                      onClick={logoutHandler}
                    >
                      Logout
                    </span>
                  </ul>
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="flex items-center gap-2 hover:text-neutral-200"
                >
                  <UserCircleIcon className="h-6 w-6 hover:text-neutral-200" />
                  Login
                </Link>
              </>
            )}
          </div>
        </div>
        {/* Responsive navbar */}
        <Link to="/sepet" className="xl:hidden flex mr-6 items-center">
          <ShoppingBagIcon className="h-6 w-6 hover:text-neutral-200" />
          <span className="flex absolute -mt-5 ml-4">
            <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-orange-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-3 w-3 bg-orange-500 place-content-center font-bold text-[9px]">
              {cartItems.length}
            </span>
          </span>
        </Link>
        <div className="navbar-burger self-center mr-12 xl:hidden">
          {currentUser ? (
            <>
              <button className="flex flex-col relative" onClick={showDropdown}>
                <div className="flex place-items-center">
                  <img
                    className="w-8 rounded-full"
                    src="https://randomuser.me/api/portraits/men/25.jpg"
                    alt=""
                  />
                </div>

                <ul
                  ref={btn2Ref}
                  className="opacity-0 transition-opacity duration-300 ease-in-out min-w-max absolute p-2 right-0 top-10 shadow-xl overflow-hidden rounded-lg z-10 text-neutral-900 bg-neutral-100"
                >
                  <li>
                    <div className="mb-3 py-2 px-6  rounded block bg-neutral-900 text-neutral-100">
                      <p className="text-xs text-left font-bold text-neutral-100">
                        {currentUser.name}
                      </p>
                      <p className="text-xs text-slate-500 truncate">
                        {currentUser.mail}
                      </p>
                    </div>
                  </li>
                  {currentUser.isAdmin ? (
                    <li>
                      <Link
                        to="admin"
                        className="py-2 px-6 text-sm rounded block hover:bg-neutral-900 hover:text-neutral-100"
                      >
                        Admin
                      </Link>
                    </li>
                  ) : (
                    ""
                  )}
                  <li>
                    <Link
                      to="myorders"
                      className="py-2 px-6 text-sm rounded block hover:bg-neutral-900 hover:text-neutral-100"
                    >
                      Siparişlerim
                    </Link>
                  </li>
                  <li className="py-2 px-6 text-sm rounded block hover:bg-neutral-900 hover:text-neutral-100">
                    <Link to="liked" className="hover:text-neutral-200">
                      Favoriler
                    </Link>
                  </li>
                  <li>
                    <span
                      className="p-2 px-6  text-sm rounded block hover:bg-neutral-900 hover:text-neutral-100"
                      onClick={logoutHandler}
                    >
                      Logout
                    </span>
                  </li>
                </ul>
              </button>
            </>
          ) : (
            <>
              <Bars3Icon className="h-6 w-6 hover:text-neutral-200" />
            </>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
