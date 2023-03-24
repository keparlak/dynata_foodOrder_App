import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllBurgers } from "../actions/burgerActions";
import ProductCard from "../components/ProductCard";
import Spinner from "../components/Spinner";

function HomePage() {
  const burgerState = useSelector((state) => state.getAllBurgersReducer);
  const { burgers, loading } = burgerState;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllBurgers());
  }, []);
  return (
    <div className="container px-6 py-10 mx-auto">
      <div className="grid grid-cols-1 gap-8 xl:gap-12 sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3 relative">
        {loading ? (
          <Spinner />
        ) : (
          burgers.map((menu, index) => (
            <div className="w-full" key={index}>
              <ProductCard menu={menu} />
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default HomePage;
