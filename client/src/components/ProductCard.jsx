import { HeartIcon, PlusSmallIcon, StarIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCartAction } from "../actions/cartActions";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ProductCard({ menu }) {
  const [ozellik, setOzellik] = useState("small");
  const [miktar, setMiktar] = useState(1);
  const adetHandler = (e) => {
    setMiktar(e.target.value);
  };
  const dispatch = useDispatch();
  const addToCart = () => {
    if (miktar > 0) {
      toast.success("Sepete Ürün Eklendi");
      dispatch(addToCartAction(menu, miktar, ozellik));
    }
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="light"
      />
      <div className="bg-white rounded-xl shadow-xl shadow-neutral-200 relative w-full bg-base-100">
        <span className="rounded-full bg-white p-1 absolute top-4 right-4 shadow-md">
          <HeartIcon className="w-6 h-6 stroke-neutral-400 hover:stroke-none text-white hover:fill-red-500 cursor-pointer" />
        </span>
        <figure>
          <img
            src={menu.img}
            alt={menu.ad}
            className="w-full h-64 object-cover rounded-t-xl"
          />
        </figure>
        <div className="mt-4 p-3">
          <h1 className="text-xl font-bold text-neutral-700">{menu.ad}</h1>
          <div className="flex p-1 items-center justify-between">
            <p className="text-sm mt-2 text-neutral-700">{menu.kategori}</p>
            <span className="text-xs flex gap-1">
              <StarIcon className="fill-orange-400 w-4 h-4" />
              4.2/5 <span className="text-neutral-400">(500+)</span>
            </span>
          </div>
          <div className="mt-3 space-x-4 flex p-1 justify-between">
            <div className="w-half space-y-0.5">
              <label
                htm-for="basic"
                className="text-xs font-medium text-neutral-500"
              >
                Type:
              </label>
              <select
                id="basic"
                name="basic"
                className="block w-full truncate rounded-md border-neutral-200 pr-8 text-sm transition focus:border-blue-600 focus:ring-blue-600 disabled:cursor-not-allowed disabled:bg-neutral-200 disabled:opacity-75"
                onChange={(e) => setOzellik(e.target.value)}
              >
                {menu.ozellik.map((size, index) => (
                  <option key={index} value={size}>
                    {size}
                  </option>
                ))}
              </select>
            </div>
            <div className="w-half space-y-0.5">
              <label
                htm-for="basic"
                className="text-xs font-medium text-neutral-500"
              >
                Quantity:
              </label>
              <select
                id="basic"
                name="basic"
                className="block w-full truncate rounded-md border-neutral-200 pr-8 text-sm transition focus:border-blue-600 focus:ring-blue-600 disabled:cursor-not-allowed disabled:bg-neutral-200 disabled:opacity-75"
                onChange={adetHandler}
              >
                {[...Array(10).keys()].map((x, index) => (
                  <option key={index} value={x + 1}>
                    {x + 1}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="mt-4 mb-2 flex justify-between items-center pl-4 pr-2">
            <span className="block text-xl font-semibold text-neutral-700">
              <span className="line-through text-sm mr-2 text-neutral-400">
                {menu.fiyat[0][ozellik] * miktar * 0.9}₺
              </span>
              {menu.fiyat[0][ozellik] * miktar}₺
            </span>
            <button
              className="text-md flex justify-center items-center font-semibold py-2 px-4 text-orange-900 hover:text-white bg-orange-400 rounded-lg shadow hover:shadow-md transition duration-300"
              onClick={addToCart}
            >
              <PlusSmallIcon className="w-5 h-5" />
              ADD CARD
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
