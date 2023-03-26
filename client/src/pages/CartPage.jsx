import { TrashIcon } from "@heroicons/react/24/solid";
import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addToCartAction, deleteFromCartAction } from "../actions/cartActions";
import CheckoutPage from "./CheckoutPage";

function CartPage() {
  const cartState = useSelector((state) => state.addToCartReducer);
  const userState = useSelector((state) => state.loginUserReducer);

  const { cartItems } = cartState;
  const { currentUser } = userState;

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const totalPrice = cartItems.reduce((x, urun) => x + urun.topfiyat, 0);

  const checkOutHandler = () => {
    if (!currentUser) {
      navigate("/login");
    }
  };
  return (
    <div>
      <div className="h-full min-h-screen bg-neutral-100 py-10">
        {cartItems.length === 0 ? (
          <h1 className="mb-10 text-center text-2xl font-bold">Cart Empty</h1>
        ) : (
          <>
            <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
            <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
              <div className="rounded-lg md:w-2/3">
                {cartItems.map((urun, index) => (
                  <div
                    key={index}
                    className="justify-between mb-6 rounded-lg bg-white p-6 shadow-lg shadow-neutral-200 sm:flex sm:justify-start"
                  >
                    <img
                      src={urun.img}
                      alt={urun.ad}
                      className="w-full rounded-lg sm:w-40"
                    />
                    <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                      <div className="mt-5 sm:mt-0">
                        <h2 className="text-lg font-bold text-neutral-900">
                          {urun.ad}
                        </h2>
                        <p className="mt-1 text-xs text-neutral-700">
                          {urun.kategori}
                        </p>
                        <p className="mt-1 text-xs text-neutral-700">
                          {urun.desc}
                        </p>
                      </div>
                      <div className="mt-4 flex justify-end sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                        <div className="flex items-center justify-end border-neutral-100">
                          <span className="text-orange-500 bg-red-50 rounded-lg font-semibold text-xs px-2 py-1">
                            {urun.ozellik}
                          </span>
                        </div>
                        <div className="flex items-center border-neutral-100">
                          <span
                            className="cursor-pointer rounded-l bg-neutral-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"
                            onClick={() => {
                              dispatch(
                                addToCartAction(
                                  urun,
                                  urun.miktar - 1,
                                  urun.ozellik
                                )
                              );
                            }}
                          >
                            -
                          </span>
                          <input
                            className="h-8 w-8 border bg-white text-center text-xs outline-none appearance-none"
                            type="number"
                            defaultValue={urun.miktar}
                            min="1"
                          />
                          <span
                            className="cursor-pointer rounded-r bg-neutral-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"
                            onClick={() => {
                              dispatch(
                                addToCartAction(
                                  urun,
                                  urun.miktar + 1,
                                  urun.ozellik
                                )
                              );
                            }}
                          >
                            +
                          </span>
                        </div>
                        <div className="flex items-center justify-end space-x-4">
                          <p className="text-sm">{urun.topfiyat}₺</p>
                          <TrashIcon
                            className="w-5 h-5 text-neutral-800 hover:cursor-pointer"
                            onClick={() => dispatch(deleteFromCartAction(urun))}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {/* Sub total */}
              <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-lg shadow-neutral-200 md:mt-0 md:w-1/3">
                <div className="mb-2 flex justify-between">
                  <p className="text-neutral-700">Subtotal</p>
                  <p className="text-neutral-700">129.99₺</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-neutral-700">Shipping</p>
                  <p className="text-neutral-700">4.99₺</p>
                </div>
                <hr className="my-4" />
                <div className="flex justify-between">
                  <p className="text-lg font-bold">Total</p>
                  <div className="flex flex-col items-end">
                    <p className="mb-1 text-lg font-bold">{totalPrice}₺</p>
                    <p className="text-sm text-neutral-700">including VAT</p>
                  </div>
                </div>
                <CheckoutPage toplamfiyat={totalPrice} />
                <p className="mt-3 text-center text-base text-neutral-500">
                  or
                  <Link
                    to="/"
                    className="inline-flex items-center ml-1 text-center text-sm text-indigo-500 hover:text-indigo-600 font-semibold"
                  >
                    Continue Shopping
                    <span className="ml-2" aria-hidden="true">
                      &rarr;
                    </span>
                  </Link>
                </p>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default CartPage;
