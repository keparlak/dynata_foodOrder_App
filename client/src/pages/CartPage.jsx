import { XMarkIcon } from "@heroicons/react/24/solid";
import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { addToCartAction } from "../actions/cartActions";

function CartPage() {
  const cartState = useSelector((state) => state.addToCartReducer);

  const { cartItems } = cartState;
  console.log(cartItems);

  const dispatch = useDispatch();

  return (
    <div>
      <div className="h-screen bg-gray-100 pt-20">
        <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>

        <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
          <div className="rounded-lg md:w-2/3">
            {cartItems.map((urun, index) => (
              <div
                key={index}
                className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start"
              >
                <img
                  src={urun.img}
                  alt={urun.ad}
                  className="w-full rounded-lg sm:w-40"
                />
                <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                  <div className="mt-5 sm:mt-0">
                    <h2 className="text-lg font-bold text-gray-900">
                      {urun.ad}
                    </h2>
                    <p className="mt-1 text-xs text-gray-700">
                      {urun.kategori}
                    </p>
                  </div>
                  <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                    <div className="flex items-center border-gray-100">
                      <span
                        className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"
                        onClick={() => {
                          dispatch(
                            addToCartAction(urun, urun.miktar + 1, urun.ozellik)
                          );
                        }}
                      >
                        -
                      </span>
                      <input
                        className="h-8 w-8 border bg-white text-center text-xs outline-none appearance-none"
                        type="number"
                        value={urun.miktar}
                        min={1}
                      />
                      <span
                        className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"
                        onClick={() => {
                          dispatch(
                            addToCartAction(urun, urun.miktar + 1, urun.ozellik)
                          );
                        }}
                      >
                        +
                      </span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <p className="text-sm">259.000 ₭</p>
                      <XMarkIcon className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Sub total */}
          <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
            <div className="mb-2 flex justify-between">
              <p className="text-gray-700">Subtotal</p>
              <p className="text-gray-700">$129.99</p>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-700">Shipping</p>
              <p className="text-gray-700">$4.99</p>
            </div>
            <hr className="my-4" />
            <div className="flex justify-between">
              <p className="text-lg font-bold">Total</p>
              <div className>
                <p className="mb-1 text-lg font-bold">$134.98 USD</p>
                <p className="text-sm text-gray-700">including VAT</p>
              </div>
            </div>
            <button className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">
              Check out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
