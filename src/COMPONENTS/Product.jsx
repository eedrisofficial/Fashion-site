import React, { useState } from "react";
import { data } from "../LocalDB/data.js";
import ProductButtons from "./ProductButtons.jsx";
import SingleProduct from "./SingleProduct.jsx";
// import { v4 as uuidv4 } from "uuid";

const Product = () => {
  // const id = uuidv4();

  //setting state To map the data from LocalDB
  const [wears, setWears] = useState(data);

  //Category function for filter buttons
  const choice = (category) => {
    setWears(
      data.filter((cloth) => {
        return cloth.category === category;
      })
    );
  };

  return (
    <div className="max-w-[1640px] mx-auto px-4 py-12 font-serif">
      <h1 className="text-center font-bold text-2xl lg:text-3xl mt-10">
        Shop <span className="text-[#E87A5D]"> Now </span>
      </h1>

      <div className="flex lg:flex-row justify-center">
        <div>
          <p className="text-center font-bold p-6">Categories</p>
          <ProductButtons choice={choice} setWears={setWears} data={data} />
        </div>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 pt-5">
        {/* mapping of the data from LocalDB for search func */}
        {wears.map((cloth) => (
          <SingleProduct cloth={cloth} />
        ))}
      </div>
    </div>
  );
};

export default Product;
