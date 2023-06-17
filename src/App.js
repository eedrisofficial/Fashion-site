import Contact from "./COMPONENTS/NavComponents/Contact";
import { Route, Routes } from "react-router";
import About from "./COMPONENTS/NavComponents/About";
import Help from "./COMPONENTS/NavComponents/Help";
import Cart from "./COMPONENTS/NavComponents/Cart";
import LandingPage from "./COMPONENTS/LandingPage";
import Account from "./COMPONENTS/NavComponents/Account";
import NewArrivals from "./COMPONENTS/NavComponents/NewArrivals";
import Trending from "./COMPONENTS/NavComponents/Trending";
import Login from "./COMPONENTS/NavComponents/Login";
import ForgotPassword from "./COMPONENTS/NavComponents/ForgotPassword";
import { GlobalContext } from "./Context/GlobalState";
import { useContext, useEffect, useState } from "react";

function App() {
  const { dispatch, state } = useContext(GlobalContext);

  useEffect(() => {
    const savedItems = localStorage.getItem("cart");
    if (savedItems) {
      const cartItems = JSON.parse(savedItems);
      cartItems.map((item) => dispatch({ type: "AddToCart", payload: item }));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state.cart));
  }, [state]);

  return (
    <>
      <div className="bg-white h-screen ">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/account" element={<Account />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="contact" element={<Contact />} />
          <Route path="/help" element={<Help />} />
          <Route path="/newarrivals" element={<NewArrivals />} />
          <Route path="/trending" element={<Trending />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
