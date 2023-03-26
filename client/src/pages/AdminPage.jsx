import {
  PencilSquareIcon,
  PlusCircleIcon,
  Square3Stack3DIcon,
  Squares2X2Icon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import AddMenu from "./AddMenu";
import EditMenu from "./EditMenu";
import MenuList from "./MenuList";
import OrdersList from "./OrdersList";
import UsersList from "./UsersList";

function AdminPage() {
  const userState = useSelector((state) => state.loginUserReducer);
  const navigate = useNavigate();
  const { currentUser } = userState;

  useEffect(() => {
    if (currentUser.isAdmin != true) {
      navigate("/");
    }
  }, [currentUser]);

  return (
    <div className="flex">
      <aside className="flex flex-col w-64 h-screen px-5 py-2 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l dark:bg-neutral-900 dark:border-neutral-700">
        <div className="flex flex-col justify-between flex-1 mt-6">
          <nav className="-mx-3 space-y-6 ">
            {/* MENU SECTION START */}
            <div className="space-y-3 ">
              <label className="px-3 text-xs text-neutral-500 uppercase dark:text-neutral-400">
                Menuler
              </label>
              <Link
                className="flex items-center px-3 py-2 text-neutral-600 transition-colors duration-300 transform rounded-lg dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 dark:hover:text-neutral-200 hover:text-neutral-700"
                to="userslist"
              >
                <UserGroupIcon className="w-5 h-5" />
                <span className="mx-2 text-sm font-medium">Users List</span>
              </Link>
              <Link
                className="flex items-center px-3 py-2 text-neutral-600 transition-colors duration-300 transform rounded-lg dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 dark:hover:text-neutral-200 hover:text-neutral-700"
                to="menulist"
              >
                <Squares2X2Icon className="w-5 h-5" />
                <span className="mx-2 text-sm font-medium">Menu List</span>
              </Link>
              <Link
                className="flex items-center px-3 py-2 text-neutral-600 transition-colors duration-300 transform rounded-lg dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 dark:hover:text-neutral-200 hover:text-neutral-700"
                to="orderslist"
              >
                <Square3Stack3DIcon className="w-5 h-5" />
                <span className="mx-2 text-sm font-medium">Orders List</span>
              </Link>
              <Link
                className="flex items-center px-3 py-2 text-neutral-600 transition-colors duration-300 transform rounded-lg dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 dark:hover:text-neutral-200 hover:text-neutral-700"
                to="addmenu"
              >
                <PlusCircleIcon className="w-5 h-5" />
                <span className="mx-2 text-sm font-medium">Add Menu</span>
              </Link>
              <Link
                className="flex items-center px-3 py-2 text-neutral-600 transition-colors duration-300 transform rounded-lg dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 dark:hover:text-neutral-200 hover:text-neutral-700"
                to="editmenu"
              >
                <PencilSquareIcon className="w-5 h-5" />
                <span className="mx-2 text-sm font-medium">Edit Menu</span>
              </Link>
            </div>
            {/* MENU SECTION END */}
          </nav>
        </div>
      </aside>
      <main className="p-4">
        <Routes>
          <Route path="userslist" element={<UsersList />} />
          <Route path="orderslist" element={<OrdersList />} />
          <Route path="menulist" element={<MenuList />} />
          <Route path="addmenu" element={<AddMenu />} />
          <Route path="editmenu/:burgerid" element={<EditMenu />} />
        </Routes>
      </main>
    </div>
  );
}

export default AdminPage;
