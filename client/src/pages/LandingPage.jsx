import { BellAlertIcon } from "@heroicons/react/24/solid";
import React from "react";

const LandingPage = () => {
  return (
    <div>
      {/* Hero section */}
      <section className="bg-gray-100 py-10">
        <div className="container mx-auto px-6">
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold mb-4 text-gray-800">
                Yemeklerinizi Seçin, Kapınıza Getirelim!
              </h2>
              <p className="text-gray-700 mb-8">
                Türkiye'nin en sevilen yemek siparişi platformu
                <span className="text-orange-400 italic"> dynata</span> ile
                binlerce restoran ve yüz binlerce lezzet arasından dilediğinizi
                seçin, online sipariş verin, lezzetli yemeklerinizi kapınızda
                karşılayın.
              </p>
              <button className="bg-yellow-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-yellow-400">
                Hemen Sipariş Verin
              </button>
            </div>
            <div className="lg:w-1/2 lg:mt-4 lg:h-1/2">
              <img
                src="https://source.unsplash.com/500x400/?food"
                alt="food"
                className="rounded-lg shadow-md w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Featured restaurants section */}
      <section className="py-24">
        <div className="container mx-auto px-6 mb-16">
          <h3 className="text-2xl font-bold mb-4 text-gray-800">
            Featured Restaurants
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md">
              <img
                src="https://source.unsplash.com/500x400/?restaurant"
                alt="restaurant"
                className="rounded-t-lg"
              />
              <div className="px-6 py-4">
                <h4 className="text-xl font-bold mb-2 text-gray-800">
                  Restaurant Name
                </h4>
                <p className="text-gray-700 text-base mb-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  pretium sagittis nisl, ac egestas magna eleifend et.{" "}
                </p>
                <button className="bg-yellow-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-yellow-400">
                  View Menu
                </button>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md">
              <img
                src="https://source.unsplash.com/500x400/?restaurant"
                alt="restaurant"
                className="rounded-t-lg"
              />
              <div className="px-6 py-4">
                <h4 className="text-xl font-bold mb-2 text-gray-800">
                  Restaurant Name
                </h4>
                <p className="text-gray-700 text-base mb-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  pretium sagittis nisl, ac egestas magna eleifend et.{" "}
                </p>
                <button className="bg-yellow-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-yellow-400">
                  View Menu
                </button>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md">
              <img
                src="https://source.unsplash.com/500x400/?restaurant"
                alt="restaurant"
                className="rounded-t-lg"
              />
              <div className="px-6 py-4">
                <h4 className="text-xl font-bold mb-2 text-gray-800">
                  Restaurant Name
                </h4>
                <p className="text-gray-700 text-base mb-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  pretium sagittis nisl, ac egestas magna eleifend et.{" "}
                </p>
                <button className="bg-yellow-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-yellow-400">
                  View Menu
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* How it works section */}
      <section className="bg-gray-100 py-24">
        <div className="container mx-auto px-6">
          <h3 className="text-2xl font-bold mb-4 text-gray-800">
            How it works
          </h3>
          <div className="lg:flex">
            <div className="lg:w-1/3">
              <div className="lg:flex lg:flex-col lg:justify-center">
                <div className="lg:w-10/12">
                  <img
                    src="https://cdn4.iconfinder.com/data/icons/flat-icon-set/128/delivery-512.png"
                    alt="delivery"
                    className="mb-4 mx-auto"
                  />
                  <h4 className="text-xl font-bold mb-4 text-gray-800">
                    Step 1
                  </h4>
                  <p className="text-gray-700 text-base">
                    Choose a restaurant and select items to order from their
                    menu.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3">
              <div className="lg:flex lg:flex-col lg:justify-center">
                <div className="lg:w-10/12">
                  <img
                    src="https://cdn4.iconfinder.com/data/icons/flat-icon-set/128/credit-card-512.png"
                    alt="payment"
                    className="mb-4 mx-auto"
                  />
                  <h4 className="text-xl font-bold mb-4 text-gray-800">
                    Step 2
                  </h4>
                  <p className="text-gray-700 text-base">
                    Enter your payment and delivery information.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3">
              <div className="lg:flex lg:flex-col lg:justify-center">
                <div className="lg:w-10/12">
                  <BellAlertIcon className="w-16 fill-neutral-600 mb-4 mx-auto" />
                  <h4 className="text-xl font-bold mb-4 text-gray-800">
                    Step 3
                  </h4>
                  <p className="text-gray-700 text-base">
                    Sit back and wait for your order to arrive!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonials section */}
      <section className="py-24">
        <div className="container mx-auto px-6 mb-16">
          <h3 className="text-2xl font-bold mb-4 text-gray-800">
            What people are saying
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md">
              <div className="px-6 py-4">
                <p className="text-gray-700 text-base mb-4">
                  "The food was delicious and the delivery was fast. Highly
                  recommend!"
                </p>
                <div className="flex justify-between items-center">
                  <h5 className="text-xl font-bold text-gray-800">John Doe</h5>
                  <img
                    src="https://source.unsplash.com/50x50/?person"
                    alt="person"
                    className="rounded-full"
                  />
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md">
              <div className="px-6 py-4">
                <p className="text-gray-700 text-base mb-4">
                  "Great service and amazing food. Will definitely order again!"
                </p>
                <div className="flex justify-between items-center">
                  <h5 className="text-xl font-bold text-gray-800">
                    Jane Smith
                  </h5>
                  <img
                    src="https://source.unsplash.com/50x50/?person"
                    alt="person"
                    className="rounded-full"
                  />
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md">
              <div className="px-6 py-4">
                <p className="text-gray-700 text-base mb-4">
                  "Ordering from here was so easy and the food was delicious.
                  Highly recommend!"
                </p>
                <div className="flex justify-between items-center">
                  <h5 className="text-xl font-bold text-gray-800">David Lee</h5>
                  <img
                    src="https://source.unsplash.com/50x50/?person"
                    alt="person"
                    className="rounded-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Call to action section */}
      <section className="bg-gray-800 py-8">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-white text-xl font-bold mb-2">
            Hungry? Order now!
          </h3>
          <button className="bg-yellow-500 hover:bg-yellow-400 text-white font-bold py-2 px-6 rounded-full">
            Order Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
