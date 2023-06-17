import React from "react";

const ProductButtons = ({ choice, setWears, data }) => {
  return (
    <div className="p-3  ">
      <button
        //   TO RETURN ALL THE DATA IN DATABASE
        onClick={() => setWears(data)}
        className="mr-6 hover:scale-105 duration-300"
      >
        All
      </button>
      <button
        onClick={() => choice("Jacket")}
        className="mr-6 hover:scale-105 duration-300"
      >
        Jackets
      </button>
      <button
        onClick={() => choice("Gown")}
        className="mr-6 hover:scale-105 duration-300"
      >
        Gown
      </button>
      <button
        onClick={() => choice("Top")}
        className="mr-6 hover:scale-105 duration-300"
      >
        Tops
      </button>
      <button
        onClick={() => choice("Jeans")}
        className="mr-6 hover:scale-105 duration-300"
      >
        Jeans
      </button>
      <button
        onClick={() => choice("Skirt")}
        className="mr-6 hover:scale-105 duration-300"
      >
        Skirt
      </button>
      <button
        onClick={() => choice("Suit")}
        className="mr-6 hover:scale-105 duration-300"
      >
        Suit
      </button>
      <button
        onClick={() => choice("Trouser")}
        className="mr-6 hover:scale-105 duration-300"
      >
        Trousers
      </button>
      <button
        onClick={() => choice("Jersey")}
        className="mr-6 hover:scale-105 duration-300"
      >
        Jersey
      </button>
    </div>
  );
};

export default ProductButtons;
