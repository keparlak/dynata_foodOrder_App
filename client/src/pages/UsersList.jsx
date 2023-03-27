import { TrashIcon } from "@heroicons/react/24/outline";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUserAction, getAllUsersAction } from "../actions/userActions";

function UsersList() {
  const dispatch = useDispatch();

  const userState = useSelector((state) => state.getAllUsersReducer);
  const { users } = userState;

  useEffect(() => {
    dispatch(getAllUsersAction());
    console.log(users);
  }, [users]);
  return (
    <div>
      <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5">
        <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                Name
              </th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                Role
              </th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                Created Time
              </th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                Last Updated Time
              </th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900" />
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 border-t border-gray-100">
            {users.map((user, idx) => (
              <tr key={idx} className="hover:bg-gray-50">
                <th className="flex gap-3 px-6 py-4 font-normal text-gray-900">
                  <div className="relative h-10 w-10">
                    <img
                      className="h-full w-full rounded-full object-cover object-center"
                      src="https://randomuser.me/api/portraits/men/73.jpg"
                      alt=""
                    />
                    <span className="absolute right-0 bottom-0 h-2 w-2 rounded-full bg-green-400 ring ring-white" />
                  </div>
                  <div className="text-sm">
                    <div className="font-medium text-gray-700">{user.name}</div>
                    <div className="text-gray-400">{user.mail}</div>
                  </div>
                </th>
                <td className="px-6 py-4">
                  {user.isAdmin ? (
                    <span className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600">
                      <span className="h-1.5 w-1.5 rounded-full bg-green-600" />
                      Admin
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 rounded-full bg-neutral-50 px-2 py-1 text-xs font-semibold text-neutral-600">
                      <span className="h-1.5 w-1.5 rounded-full bg-neutral-600" />
                      User
                    </span>
                  )}
                </td>
                <td className="px-6 py-4">{user.createdAt.slice(0, 10)}</td>
                <td className="px-6 py-4">
                  {/* <div className="flex gap-2">
                    <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-600">
                      Small: {user.fiyat[0]["small"]}₺
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-indigo-50 px-2 py-1 text-xs font-semibold text-indigo-600">
                      Medium: {user.fiyat[0]["medium"]}₺
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-violet-50 px-2 py-1 text-xs font-semibold text-violet-600">
                      Large: {user.fiyat[0]["mega"]}₺
                    </span>
                  </div> */}
                  {user.updatedAt.slice(0, 10)}
                </td>
                <td className="px-6 py-4">
                  <div className="flex justify-end gap-4">
                    <TrashIcon
                      className="h-5 w-5 cursor-pointer"
                      onClick={() => dispatch(deleteUserAction(user._id))}
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UsersList;
