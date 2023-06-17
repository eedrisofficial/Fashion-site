import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { BsFillCartCheckFill } from "react-icons/bs";
import MobileNavbar from "./MobileNavbar";
import { Link } from "react-router-dom";

const Navbar = () => {
  // HAMBURGER DISPLAY FUNCTION SET
  const [mobileNav, setMobileNav] = useState(false);

  return (
    <div className=" flex justify-between items-center p-14 font-serif bg-[#F3F3F3]">
      <div className="flex items-center">
        <div
          onClick={() => setMobileNav(!mobileNav)}
          className="cursor-pointer"
        >
          {/* HAMBURGER OUTLINE ICON */}
          <AiOutlineMenu size={30} className="" />
        </div>
        <h1 className="text-xl p-2 ">
          Reed's
          <span className="font-bold text-[#E87A5D] text-2xl"> Fashions </span>
        </h1>
      </div>

      {/* SEARCH  section*/}
      <div className="hidden lg:flex bg-slate-300 rounded-full items-center w-[200px] sm:w-[300px] lg:w-[400px] border-2 border-[#E87A5D]">
        <CiSearch size={26} className="text-[#E87A5D] font-bold" />
        <input
          className="bg-transparent focus:outline-none w-full focus:bg-slate-50 focus:rounded-full p-1"
          type="text"
          placeholder="search dress"
          // onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* CART Icon section */}
      <div>
        <Link to="/cart">
          <button className="hidden md:flex items-center py-2 hover:scale-110 duration-200 ">
            <BsFillCartCheckFill size={20} className="mr-1" /> Cart
          </button>
        </Link>
        <MobileNavbar mobileNav={mobileNav} setMobileNav={setMobileNav} />
      </div>
    </div>
  );
};

export default Navbar;
