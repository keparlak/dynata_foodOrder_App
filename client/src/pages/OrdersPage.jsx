import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsersOrdersAction } from "../actions/orderActions";

function OrdersPage() {
  const dispatch = useDispatch();
  const orderState = useSelector((state) => state.getUsersOrdersReducer);
  const { orders } = orderState;
  console.log(orders);
  useEffect(() => {
    dispatch(getUsersOrdersAction());
  }, []);

  return (
    <div className="h-full min-h-screen bg-neutral-100 pt-10">
      <h1 className="mb-10 text-center text-2xl font-bold text-neutral-700">
        My Orders
      </h1>
      <div className="mx-auto max-w-5xl flex-col items-center justify-center p-6 flex">
        {orders.map((order, index) => (
          <button
            key={index}
            className="rounded-lg sm:w-full sm:mx-2 w-2/3 mb-6 bg-white shadow-lg shadow-neutral-200 p-6 transition-all duration-200 group"
          >
            {order.orderItems.map((item) => (
              <div
                key={item._id}
                className="justify-between mb-6 border-b p-6 sm:hidden sm:justify-start group-focus:flex"
              >
                <img
                  src={item.img}
                  alt={item.ad}
                  className="w-full rounded-lg sm:w-20"
                />
                <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                  <div className="mt-5 sm:mt-0">
                    <h2 className="text-lg font-bold text-neutral-700">
                      {item.ad}
                    </h2>
                    <p className="mt-1 text-xs text-neutral-700">
                      {item.kategori}
                    </p>
                    <p className="mt-1 text-xs text-neutral-700">
                      {item.createdAt}
                    </p>
                  </div>
                  <div className="mt-4 flex items-center justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                    <div className="flex items-center justify-center border-neutral-100">
                      <span className="text-orange-500 bg-red-50 rounded-lg font-semibold text-xs px-2 py-1">
                        {item.ozellik}
                      </span>
                    </div>
                    <div className="flex items-center border-neutral-100">
                      asdasd
                    </div>
                    <div className="flex items-center space-x-4">
                      <p className="text-sm">
                        {item.miktar} x {item.fiyat[0][item.ozellik]} =
                        {item.topfiyat}₺
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <div className="mt-4 flex flex-col items-center justify-between">
              <div className="w-full mx-auto rounded-lg bg-white border border-neutral-200 p-3 text-neutral-800 font-light mb-6 hidden group-focus:block">
                <div className="w-full flex mb-3 items-center">
                  <div className="w-32">
                    <span className="text-md font-semibold text-neutral-600">
                      Contact
                    </span>
                  </div>
                  <div className="flex-grow text-neutral-400 text-sm pl-3">
                    <span>{order.shippingAddress.street}, </span>
                    <span>{order.shippingAddress.city}/ </span>
                    <span>{order.shippingAddress.country}, </span>
                    <span>{order.shippingAddress.zipCode}</span>
                  </div>
                </div>
                <div className="w-full flex items-center">
                  <div className="w-32">
                    <span className="text-md font-semibold text-neutral-600">
                      Billing Address
                    </span>
                  </div>
                  <div className="flex-grow text-neutral-400 text-sm pl-3">
                    <span>123 George Street, Sydney, NSW 2000 Australia</span>
                  </div>
                </div>
              </div>

              <div className="w-full flex justify-between">
                <div className="flex items-center justify-center border-neutral-100">
                  <div className="flex -space-x-4 overflow-hidden">
                    {order.orderItems.map((orderImages) => (
                      <span className="inline-block border-2 border-neutral-50 rounded-full overflow-hidden">
                        <img
                          src={orderImages.img}
                          alt=""
                          className="w-12 h-12 bg-neutral-50"
                        />
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center">
                  {order.isDelivered ? (
                    <span className="text-slate-50 text-xs bg-yellow-500 px-2 py-1 rounded-full">
                      Bekleniyor
                    </span>
                  ) : (
                    <span className="text-slate-50 text-xs bg-green-500	 px-2 py-1 rounded-full">
                      Tamamlandı
                    </span>
                  )}
                  <div className="w-full flex items-center">
                    <div className="flex-grow">
                      <span className="text-neutral-600">Total</span>
                    </div>
                    <div className="pl-3">
                      <span className="font-semibold">
                        {order.orderAmount}₺
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full flex items-center justify-between border-t border-dashed border-neutral-200 mt-3 py-3">
                <p>İşlem Tarihi: {order.updatedAt.slice(0, 10)}</p>
                <p>İşlem No: </p>
                <p>İşlem Tarihi: </p>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

export default OrdersPage;
