import React, { useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { GlobalContext } from "../Context/GlobalState";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SingleProduct = ({ cloth }) => {
  const id = uuidv4();
  const { dispatch } = useContext(GlobalContext);

  //add func for moving cloth from product to cart onClick
  const addItem = () => {
    dispatch({ type: "AddToCart", payload: { ...cloth, id } });
    toast.success("added");
  };

  return (
    <div>
      <ToastContainer />
      <div
        key={id}
        className="border-2 border-slate-100 shadow-lg hover:scale-105 duration-300 rounded-lg cursor-pointer"
      >
        <img
          src={cloth.image}
          alt={cloth.name}
          className="object-cover w-full h-[200px] lg:h-[200px] rounded-none"
        />
        <div className="flex flex-col gap-2 p-2">
          <div className="flex justify-between px-2">
            <p className="font-bold"> {cloth.category}</p>
            <p className="font-italic">
              <span>${cloth.price}</span>
            </p>
          </div>

          <button
            className="p-1 hover:bg-black/10 hover:text-[#E87A5D] rounded-none"
            onClick={addItem}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
