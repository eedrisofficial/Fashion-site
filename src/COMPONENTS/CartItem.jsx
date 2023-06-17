import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";
import { v4 as uuidv4 } from "uuid";
import { toast } from "react-toastify";
import { MdDelete } from "react-icons/md";

const CartItem = ({ item }) => {
  const id = uuidv4();
  const { dispatch } = useContext(GlobalContext);

  const removeFromCart = () => {
    dispatch({ type: "RemoveFromCart", payload: item.id });
  };

  return (
    <div className="border-2  flex flex-col items-center gap-2" key={id}>
      <img
        src={item.image}
        className="object-cover w-full h-[200px] rounded-none"
      />
      <p>${item.price}</p>
      <button
        onClick={removeFromCart}
        className=" hover:bg-[#E87A5D] rounded-none w-full hover:scale-105
        "
      >
        Delete
      </button>
    </div>
  );
};

export default CartItem;
