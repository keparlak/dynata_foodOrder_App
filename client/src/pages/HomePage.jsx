import React from "react";
import MenuList from "../components/MenuList";
import menuler from "../yemekData";

function HomePage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 container mx-auto">
      {menuler.map((menu, index) => (
        <div className="col-md-4" key={index}>
          <MenuList menu={menu} />
        </div>
      ))}
    </div>
  );
}

export default HomePage;
