import React, { useContext } from "react";
import Navbar from "../Navbar";
import MiniFooter from "./MiniFooter";
import { GlobalContext } from "../../Context/GlobalState";
import CartItem from "../CartItem";
import FlutterPay from "./FlutterPay";

const Cart = () => {
  const { dispatch, state } = useContext(GlobalContext);

  const clearCart = () => {
    dispatch({ type: "ClearCart" });
  };

  return (
    <React.Fragment>
      <Navbar />
      {state.cart.length > 0 ? (
        <div className="p-4 font-serif flex flex-col items-center justify-center  gap-4 mt-20">
          <div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 pt-5 items-center text-center">
              {state.cart.map((item) => (
                <CartItem item={item} />
              ))}
            </div>
          </div>
          <button
            className="rounded-none font-bold bg-gray-200 hover:bg-[#E87A5D] border-[#E87A5D] mt-5 "
            onClick={clearCart}
          >
            Clear cart
          </button>
          <div className="p-6 mt-4 w-[300px] lg:w-[400px] flex flex-col gap-4 bg-[#f4f4f4] border border-[#E87A5D]">
            <h2 className="mt-6 text-xl">Total: ${state.total}</h2>
            <h1 className="text-2xl">Sub Total: ${state.total}</h1>

            <FlutterPay />
          </div>
        </div>
      ) : (
        <p className="h-screen  text-center p-20 font-bold text-2xl">
          You have not add any product to the cart.
        </p>
      )}

      <MiniFooter />
    </React.Fragment>
  );
};

export default Cart;
