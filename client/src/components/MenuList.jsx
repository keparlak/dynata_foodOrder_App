import React, { useState } from "react";

function MenuList({ menu }) {
  const [ozellik, setOzellik] = useState("medium");
  const [miktar, setMiktar] = useState(1);
  const adetHandler = (e) => {
    setMiktar(e.target.value);
  };

  return (
    <>
      <div className="card relative card-compact w-96 bg-base-100 shadow-xl">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="absolute top-4 right-4 w-6 h-6 fill-red-500"
        >
          <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
        </svg>
        <figure>
          <img src={menu.img} alt="Shoes" />
          <label htmlFor="my-modal-6" className="btn hidden">
            open modal
          </label>
        </figure>
        <div className="card-body">
          <h2 className="card-title justify-between">{menu.ad}</h2>
          <div className="card-actions justify-between items-center">
            <div className="rating">
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                checked
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
            </div>
            <span className="text-lg font-semibold">
              <span className="line-through text-sm">
                {menu.fiyat[0][ozellik] * miktar * 0.9}₺
              </span>{" "}
              {menu.fiyat[0][ozellik] * miktar}₺
            </span>
          </div>
          <div className="card-actions justify-center">
            <select
              className="select select-bordered w-full max-w-xs"
              onChange={(e) => setOzellik(e.target.value)}
            >
              <option disabled selected>
                Özellik
              </option>
              {menu.ozellik.map((size, index) => (
                <option key={index} value={size}>
                  {size}
                </option>
              ))}
            </select>

            <select
              className="select select-bordered w-half max-w-xs"
              onChange={adetHandler}
            >
              {[...Array(10).keys()].map((x) => (
                <option value={x + 1}>{x + 1}</option>
              ))}
            </select>
          </div>

          <div className="card-actions justify-end">
            <button className="btn btn-primary w-full">Buy Now</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default MenuList;
