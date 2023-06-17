import React from "react";
// import "react-toastify/dist/ReactToastify.css";
// import { toast } from "react-toastify/dist/components";
import Navbar from "../Navbar";
import MiniFooter from "./MiniFooter";

const ForgotPassword = () => {
  const notification = () => {
    alert("You will receive an email shortly.");
    // toast.success("password sent successfully");
  };
  return (
    <React.Fragment>
      <Navbar />
      <div className="max-w-[1640px] mx-auto  p-4 font-serif text-center mt-20">
        <div className="mb-20 p-4 gap-6">
          <h1 className="tp-8  text-[#E87A5D] text-sm md:text-xl font-mono text-start font-bold">
            <span className="text-4xl md:text-6xl text-[#00246B] mr-2">
              Forgot Your Password ?
            </span>
            Don't worry, we gat you !!
          </h1>
          <div className=" mt-8 ">
            <form className="">
              <input
                type="text"
                placeholder="Enter email address"
                className="p-2 border-2 border-[#E87A5D] px-6  focus:border-2 focus:ring-[#E87A5D] focus:border-[#E87A5D]"
                // className="w-[100%] md:w[50%] lg:w-[60%] mt-3 p-1 bg-gray-200   shadow-[#E87A5D] shadow-lg  focus:shadow-transparent rounded-md focus:outline-none   focus:bg-white placeholder:text-slate-400 "
              />
              <button
                type="submit"
                className="border-2 bg-[#E87A5D] lg:border-2 rounded-none p-2"
                onClick={() => notification()}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <MiniFooter />
    </React.Fragment>
  );
};

export default ForgotPassword;
