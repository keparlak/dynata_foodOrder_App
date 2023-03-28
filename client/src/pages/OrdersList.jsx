import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deliverOrderAction,
  getAllOrdersAction,
} from "../actions/orderActions";

function OrdersList() {
  const dispatch = useDispatch();

  const orderState = useSelector((state) => state.getAllOrdersReducer);
  const { orders } = orderState;
  useEffect(() => {
    dispatch(getAllOrdersAction());
  }, [orders]);
  return (
    <div>
      <div className="overflow-hidden rounded-xl shadow-xl shadow-neutral-200 m-5">
        <table className="w-full border-collapse bg-white text-left text-sm text-neutral-500">
          <thead className="bg-neutral-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-4 font-medium text-neutral-900"
              >
                Order ID
              </th>
              <th
                scope="col"
                className="px-6 py-4 font-medium text-neutral-900"
              >
                Delivery Mail
              </th>
              <th
                scope="col"
                className="px-6 py-4 font-medium text-neutral-900"
              >
                User ID
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
              >
                Order Delivery Date
              </th>
              <th
                scope="col"
                className="px-6 py-4 font-medium text-neutral-900"
              >
                Order Delivery Status
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-100 border-t border-neutral-100">
            {orders &&
              orders.map((order, index) => (
                <tr key={index} className="hover:bg-neutral-50">
                  <th className="flex gap-3 px-6 py-4 font-normal text-neutral-900">
                    {order._id}
                  </th>
                  <td className="px-6 py-4">
                    {order.email}
                    <span className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600">
                      <span className="h-1.5 w-1.5 rounded-full bg-green-600" />
                      Active
                    </span>
                  </td>
                  <td className="px-6 py-4">{order.userid}</td>
                  <td className="px-6 py-4">{order.orderAmount}</td>
                  <td className="px-6 py-4">
                    {order.createdAt.substring(0, 10)}
                  </td>
                  <td className="px-6 py-4">
                    {order.isDelivered ? (
                      "Teslim Edildi"
                    ) : (
                      <button
                        onClick={() => dispatch(deliverOrderAction(order._id))}
                        className="block mx-auto bg-neutral-800 hover:bg-neutral-900 focus:bg-neutral-700 text-white rounded-lg px-2 py-1 text-xs font-semibold"
                      >
                        Deliver Order
                      </button>
                    )}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default OrdersList;
