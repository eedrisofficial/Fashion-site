import React from "react";
import Navbar from "../Navbar";
import MiniFooter from "./MiniFooter";
import AccountForm from "./AccountForm";

const Account = () => {
  return (
    <React.Fragment>
      <Navbar />
      <div className="p-16 font-serif  flex justify-center items-center ">
        <div className="w-full">
          <h1 className="flex justify-center text-2xl">Sign Up </h1>
          <div className=" mt-4 flex justify-center ">
            <AccountForm />
          </div>
        </div>
      </div>
      <MiniFooter />
    </React.Fragment>
  );
};

export default Account;
