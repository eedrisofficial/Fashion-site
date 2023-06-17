import React, { useState } from "react";
import { Trend } from "../../LocalDB/Trend";
import Navbar from "../Navbar";
import MiniFooter from "./MiniFooter";
// import { v4 as uuidv4 } from "uuid";
import SingleProduct from "../SingleProduct";

const Trending = () => {
  const [wears] = useState(Trend);
  // const id = uuidv4();

  return (
    <React.Fragment>
      <Navbar />
      <div
        className="max-w-[1640px] mx-auto p-4 font-serif text-center mt-20"
        // key={id}
      >
        <div>
          <h1></h1>
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

export default Trending;
