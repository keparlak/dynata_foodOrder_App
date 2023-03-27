import {
  CurrencyDollarIcon,
  EnvelopeIcon,
  PhotoIcon,
  TagIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addBurgerAction } from "../actions/burgerActions";

function AddMenu() {
  const [ad, setAd] = useState("");
  const [smallPrice, setSmallPrice] = useState("");
  const [mediumPrice, setMediumPrice] = useState("");
  const [megaPrice, setMegaPrice] = useState("");
  const [img, setImg] = useState("");
  const [desc, setDesc] = useState("");
  const [category, setCategory] = useState("et");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formHandler = (e) => {
    e.preventDefault();
    console.log("submit yapıldı");
    const menu = {
      ad: ad,
      img: img,
      desc: desc,
      fiyat: {
        small: smallPrice,
        medium: mediumPrice,
        mega: megaPrice,
      },
      kategori: category,
    };

    dispatch(addBurgerAction(menu));
    navigate("/admin/menulist");
    toast.success("Yeni Ürün Eklendi");
  };

  return (
    <div>
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
      <div className="flex items-center justify-center px-5 py-5">
        <div
          className="bg-white text-neutral-500 rounded-xl shadow-xl w-full overflow-hidden"
          style={{ maxWidth: "1000px" }}
        >
          <div className="md:flex w-full">
            <div className="w-full md:w-full py-10 px-5 md:px-10">
              <div className="text-center mb-10">
                <h1 className="font-bold text-3xl text-neutral-900">
                  ADD MENU
                </h1>
                <p>Enter information about to menu </p>
              </div>
              <form onSubmit={formHandler}>
                <div className="flex -mx-3">
                  <div className="w-full px-3 mb-5">
                    <label className="text-xs font-semibold px-1">Name</label>
                    <div className="flex">
                      <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                        <UserIcon className="text-neutral-400 w-5" />
                      </div>
                      <input
                        type="text"
                        className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-neutral-200 outline-none focus:border-indigo-500"
                        value={ad}
                        onChange={(e) => setAd(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex -mx-3">
                  <div className="w-full px-3 mb-5">
                    <label className="text-xs font-semibold px-1">
                      Description
                    </label>
                    <div className="flex">
                      <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                        <EnvelopeIcon className="text-neutral-400 w-5" />
                      </div>
                      <textarea
                        className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-neutral-200 outline-none focus:border-indigo-500"
                        value={desc}
                        onChange={(e) => setDesc(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex -mx-3">
                  <div className="w-full px-3 mb-5">
                    <label className="text-xs font-semibold px-1">
                      Small Menu Price
                    </label>
                    <div className="flex">
                      <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                        <CurrencyDollarIcon className="text-neutral-400 w-5" />
                      </div>
                      <input
                        type="number"
                        className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-neutral-200 outline-none focus:border-indigo-500"
                        value={smallPrice}
                        onChange={(e) => setSmallPrice(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="w-full px-3 mb-5">
                    <label className="text-xs font-semibold px-1">
                      Medium Menu Price
                    </label>
                    <div className="flex">
                      <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                        <CurrencyDollarIcon className="text-neutral-400 w-5" />
                      </div>
                      <input
                        type="number"
                        className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-neutral-200 outline-none focus:border-indigo-500"
                        value={mediumPrice}
                        onChange={(e) => setMediumPrice(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="w-full px-3 mb-5">
                    <label className="text-xs font-semibold px-1">
                      Mega Menu Price
                    </label>
                    <div className="flex">
                      <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                        <CurrencyDollarIcon className="text-neutral-400 w-5" />
                      </div>
                      <input
                        type="number"
                        className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-neutral-200 outline-none focus:border-indigo-500"
                        value={megaPrice}
                        onChange={(e) => setMegaPrice(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex -mx-3">
                  <div className="w-full px-3 mb-5">
                    <label className="text-xs font-semibold px-1">
                      Category
                    </label>
                    <div className="flex">
                      <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                        <TagIcon className="text-neutral-400 w-5" />
                      </div>
                      <select
                        defaultValue={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-neutral-200 outline-none focus:border-indigo-500"
                      >
                        <option value="Et Menü">Et</option>
                        <option value="Tavuk Menü">Tavuk</option>
                      </select>
                      {/* <input
                      type="url"
                      className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-neutral-200 outline-none focus:border-indigo-500"
                      placeholder="https://..."
                      value={img}
                      onChange={(e) => setImg(e.target.value)}
                    /> */}
                    </div>
                  </div>
                </div>
                <div className="flex -mx-3">
                  <div className="w-full px-3 mb-5">
                    <label className="text-xs font-semibold px-1">
                      Image URL
                    </label>
                    <div className="flex">
                      <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                        <PhotoIcon className="text-neutral-400 w-5" />
                      </div>
                      <input
                        type="url"
                        className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-neutral-200 outline-none focus:border-indigo-500"
                        placeholder="https://..."
                        value={img}
                        onChange={(e) => setImg(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                {/* <div className="grid grid-cols-1">
                <label className="text-xs font-semibold px-1 mb-1">
                  Upload Photo
                </label>
                <div className="flex items-center justify-center w-full">
                  <label className="flex flex-col border-4 border-dashed w-full h-32 hover:bg-gray-100 hover:border-purple-300 group">
                    <div className="flex flex-col items-center justify-center pt-7">
                      <PhotoIcon className="w-10 h-10 text-purple-400 group-hover:text-purple-600" />
                      <p className="lowercase text-sm text-gray-400 group-hover:text-purple-600 pt-1 tracking-wider">
                        Select a photo
                      </p>
                    </div>
                    <input type="file" className="hidden" />
                  </label>
                </div>
              </div> */}
                <div className="flex -mx-3">
                  <div className="w-full px-3 mt-5">
                    <button
                      type="submit"
                      className="block w-full max-w-xs mx-auto bg-neutral-800 hover:bg-neutral-900 focus:bg-neutral-700 text-white rounded-lg px-3 py-3 font-semibold"
                    >
                      SAVE
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddMenu;
