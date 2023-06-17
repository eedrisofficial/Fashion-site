import React from "react";
import Navbar from "../Navbar";
import { Link } from "react-router-dom";
import MiniFooter from "./MiniFooter";
import LoginForm from "./LoginForm";

const Login = () => {
  return (
    <React.Fragment>
      <Navbar />
      {/* <div className=""> */}
      <div className="p-8 w-full font-serif flex flex-col gap-4 items-center">
        <h1 className="text-start text-2xl">Login</h1>
        <LoginForm />
        <div className="flex">
          <p>Don't have an account yet ?</p>
          <Link to="/account" className="hover:underline text-[#E87A5D]">
            Register
          </Link>
        </div>
      </div>
      {/* </div> */}
      <MiniFooter />
    </React.Fragment>
  );
};

export default Login;
