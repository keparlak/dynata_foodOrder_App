import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteBurgerAction, getAllBurgers } from "../actions/burgerActions";

function MenuList() {
  const burgerState = useSelector((state) => state.getAllBurgersReducer);

  const { burgers } = burgerState;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllBurgers());
  }, [burgers]);

  return (
    <>
      <div className="overflow-hidden rounded-xl shadow-xl shadow-neutral-200 m-5">
        <table className="w-full border-collapse bg-white text-left text-sm text-neutral-500">
          <thead className="bg-neutral-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-4 font-medium text-neutral-900"
              >
                Name
              </th>
              <th
                scope="col"
                className="px-6 py-4 font-medium text-neutral-900"
              >
                Desc
              </th>
              <th
                scope="col"
                className="px-6 py-4 font-medium text-neutral-900"
              >
                Categories
              </th>
              <th
                scope="col"
                className="px-6 py-4 font-medium text-neutral-900"
              >
                Price
              </th>
              <th
                scope="col"
                className="px-6 py-4 font-medium text-neutral-900"
              />
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-100 border-t border-neutral-100">
            {burgers.map((burger, index) => (
              <tr key={index} className="hover:bg-neutral-50">
                <th className="flex gap-3 px-6 py-4 font-normal text-neutral-900">
                  <div className="relative h-10 w-10">
                    <img
                      className="h-full w-full rounded-full object-cover object-center"
                      src={burger.img}
                      alt={burger.ad}
                    />
                    <span className="absolute right-0 bottom-0 h-2 w-2 rounded-full bg-green-400 ring ring-white" />
                  </div>
                  <div className="text-sm">
                    <div className="font-medium text-neutral-700">
                      {burger.ad}
                    </div>
                    <div className="text-neutral-400">-----</div>
                  </div>
                </th>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600">
                    <span className="h-1.5 w-1.5 rounded-full bg-green-600" />
                    Active
                  </span>
                </td>
                <td className="px-6 py-4">{burger.kategori}</td>
                <td className="px-6 py-4">
                  <div className="flex gap-2">
                    <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-600">
                      Small: {burger.fiyat[0]["small"]}₺
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-indigo-50 px-2 py-1 text-xs font-semibold text-indigo-600">
                      Medium: {burger.fiyat[0]["medium"]}₺
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-violet-50 px-2 py-1 text-xs font-semibold text-violet-600">
                      Large: {burger.fiyat[0]["mega"]}₺
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex justify-end gap-4">
                    <TrashIcon
                      className="h-5 w-5 cursor-pointer"
                      onClick={() => dispatch(deleteBurgerAction(burger._id))}
                    />
                    <Link to={`/admin/editmenu/${burger._id}`}>
                      <PencilIcon className="h-5 w-5" />
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default MenuList;
