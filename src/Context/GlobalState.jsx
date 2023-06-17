import React, { createContext, useReducer } from "react";

//creating d createContext
export const GlobalContext = createContext();

//Declaring the initial state of the Cart
const initialState = {
  cart: [],
  total: 0,
  cartItem: [],
};

//THE REDUCER FUNC
const reducer = (state, action) => {
  switch (action.type) {
    case "AddToCart":
      const newCart = [...state.cart, action.payload];
      return {
        ...state,
        cart: newCart,

        total: newCart.reduce((total, item) => {
          return total + item.price;
        }, 0),
      };
    case "RemoveFromCart":
      //Delete func for the items in cart
      const removedCart = state.cart.filter(
        (item) => item.id !== action.payload
      );
      //returning the other left after deleting
      return {
        ...state,
        cart: removedCart,
      };
    case "ClearCart":
      return { ...state, cart: [] };

    default:
      return state;
  }
};

//The global func that pass the value as children to all component
const GlobalState = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const CartValue = { state, dispatch }; //distructuring

  return (
    <GlobalContext.Provider value={CartValue}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;
