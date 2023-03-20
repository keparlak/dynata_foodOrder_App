import axios from "axios";
import React, { useEffect, useState } from "react";
import MenuList from "../components/MenuList";

function HomePage() {
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:4000/getFoods")
      .then((res) => setFoods(res.data))
      .then((err) => console.log(err));
  }, []);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 container mx-auto">
      {foods.map((menu, index) => (
        <div className="col-md-4" key={index}>
          <MenuList menu={menu} />
        </div>
      ))}
    </div>
  );
}

export default HomePage;
