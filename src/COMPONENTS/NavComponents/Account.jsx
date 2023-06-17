import React from "react";
import Navbar from "../Navbar";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import MiniFooter from "./MiniFooter";
import { Link } from "react-router-dom";
import AccountForm from "./AccountForm";
import Swal from "sweetalert2";

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
          <div className="flex justify-center gap-2 p-4">
            <p>
              Already have an Account?
              <Link to="/login">
                <span className=" text-[#E87A5D] cursor-pointer hover:underline ">
                  Login
                </span>
              </Link>
            </p>
          </div>
        </div>
      </div>
      <MiniFooter />
    </React.Fragment>
  );
};

export default Account;
