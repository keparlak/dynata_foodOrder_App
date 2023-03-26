import {
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
            {/* MENU BÖLÜM */}
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
            </div>
            <div className="space-y-3 ">
              <label className="px-3 text-xs text-neutral-500 uppercase dark:text-neutral-400">
                content
              </label>
              <Link
                className="flex items-center px-3 py-2 text-neutral-600 transition-colors duration-300 transform rounded-lg dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 dark:hover:text-neutral-200 hover:text-neutral-700"
                to="#"
              >
                <Square3Stack3DIcon className="w-5 h-5" />
                <span className="mx-2 text-sm font-medium">Guides</span>
              </Link>
              <Link
                className="flex items-center px-3 py-2 text-neutral-600 transition-colors duration-300 transform rounded-lg dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 dark:hover:text-neutral-200 hover:text-neutral-700"
                to="#"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3"
                  />
                </svg>
                <span className="mx-2 text-sm font-medium">Hotspots</span>
              </Link>
              <Link
                className="flex items-center px-3 py-2 text-neutral-600 transition-colors duration-300 transform rounded-lg dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 dark:hover:text-neutral-200 hover:text-neutral-700"
                to="#"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
                  />
                </svg>
                <span className="mx-2 text-sm font-medium">Checklists</span>
              </Link>
            </div>
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
