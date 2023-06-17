import React, { useState } from "react";
import MiniFooter from "./MiniFooter";
import Navbar from "../Navbar";
import { New } from "../../LocalDB/New.js";
import SingleProduct from "../SingleProduct";

const NewArrivals = () => {
  const [wears] = useState(New);

  return (
    <React.Fragment>
      <Navbar />
      <div className=" max-w-[1640px] mx-auto p-4 font-serif text-center mt-20">
        <div>
          <h1 className="font-bold text-2xl ">
            Check out the new wears in store.
          </h1>
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 pt-5 p-8">
            {wears.map((cloth) => (
              <SingleProduct cloth={cloth} />
            ))}
          </div>
        </div>
      </div>
      <MiniFooter />
    </React.Fragment>
  );
};

export default NewArrivals;
