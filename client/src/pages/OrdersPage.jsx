import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsersOrdersAction } from "../actions/orderActions";

function OrdersPage() {
  const dispatch = useDispatch();
  const orderState = useSelector((state) => state.getUsersOrdersReducer);
  const { orders } = orderState;
  useEffect(() => {
    dispatch(getUsersOrdersAction());
  }, []);

  return (
    <div className="h-full min-h-screen bg-gray-100 pt-10">
      <h1 className="mb-10 text-center text-2xl font-bold">My Orders</h1>
      <div className="mx-auto max-w-5xl justify-center p-6 md:flex md:space-x-6 xl:px-0">
        {orders.map((order, index) => (
          <div
            key={index}
            className="rounded-lg md:w-2/3  bg-white shadow-md p-6"
          >
            {order.orderItems.map((item) => (
              <div
                key={item._id}
                className="justify-between mb-6 border-b p-6 sm:flex sm:justify-start"
              >
                <img
                  src={item.img}
                  alt={item.ad}
                  className="w-full rounded-lg sm:w-20"
                />
                <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                  <div className="mt-5 sm:mt-0">
                    <h2 className="text-lg font-bold text-gray-900">
                      {item.ad}
                    </h2>
                    <span className="text-slate-50 text-xs bg-gray-700 px-2 py-1 rounded-full">
                      {item.ozellik}
                    </span>
                    <p className="mt-1 text-xs text-gray-700">
                      {item.kategori}
                    </p>
                    <p className="mt-1 text-xs text-gray-700">
                      {item.createdAt}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            <div className="mt-4 flex flex-col items-center justify-between">
              <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-3 text-gray-800 font-light mb-6">
                <div className="w-full flex mb-3 items-center">
                  <div className="w-32">
                    <span className="text-gray-600 font-semibold">Contact</span>
                  </div>
                  <div className="flex-grow pl-3">
                    <span>Shipping Address</span>
                  </div>
                </div>
                <div className="w-full flex items-center">
                  <div className="w-32">
                    <span className="text-gray-600 font-semibold">
                      Billing Address
                    </span>
                  </div>
                  <div className="flex-grow pl-3">
                    <span>123 George Street, Sydney, NSW 2000 Australia</span>
                  </div>
                </div>
              </div>

              <div className="w-full flex justify-between">
                <div className="flex items-center justify-center border-gray-100">
                  <span className="text-slate-50 text-xs bg-gray-700 px-2 py-1 rounded-full">
                    {order.isDelivered ? "gönderilmedi" : "tamamlandı"}
                  </span>
                </div>
                <div className="flex items-center justify-center">
                  <div class="w-full flex items-center">
                    <div class="flex-grow">
                      <span class="text-gray-600">Total</span>
                    </div>
                    <div class="pl-3">
                      <span class="font-semibold">{order.orderAmount}₺</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OrdersPage;