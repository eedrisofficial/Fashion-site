import React from "react";
import { Link } from "react-router-dom";

const MiniFooter = () => {
  const today = new Date();
  return (
    <div className=" bg-black/10 p-8  md:flex md:flex-col lg:flex lg:flex-row items-center justify-evenly  lg:p-4 font-serif bottom-0">
      <div>
        <ul className="flex justify-center gap-1 p-1 md:gap-12 lg:gap-6 ">
          <Link to="/">
            <li className="p-2 hover:text-[#E87A5D]">Home</li>
          </Link>
          <Link to="/about">
            <li className="p-2 hover:text-[#E87A5D]">About</li>
          </Link>
          <Link to="/contact">
            <li className=" p-2 hover:text-[#E87A5D]">Contact</li>
          </Link>
          <Link to="/account">
            <li className=" p-2 hover:text-[#E87A5D]">Account</li>
          </Link>
          <Link to="/help">
            <li className=" p-2 hover:text-[#E87A5D]">Help</li>
          </Link>
        </ul>
      </div>
      <div className=" text-center p-2 text-[#00246B] text-[15px]  font-bold">
        &copy; {today.getFullYear()} @I_am_eedris | All Rights Reserved
      </div>
    </div>
  );
};

export default MiniFooter;
