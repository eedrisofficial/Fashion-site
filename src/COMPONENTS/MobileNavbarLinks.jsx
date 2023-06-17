import React from "react";
import { AiFillCarryOut, AiFillContacts, AiFillHome } from "react-icons/ai";
import { MdFavorite, MdHelp } from "react-icons/md";
import {
  BsBookmarksFill,
  BsFillCartCheckFill,
  BsFillPersonFill,
} from "react-icons/bs";
import { Link } from "react-router-dom";

const MobileNavbarLinks = () => {
  return (
    <ul className="flex flex-col p-2 text-gray-700 hover:cursor-pointer  ">
      <Link to="/">
        <li className="text-xl py-2 flex hover:text-[#E87A5D] hover:translate-x-3 duration-200">
          <AiFillHome size={20} className="mr-2 text-center" />
          Home
        </li>
      </Link>
      <Link to="/trending">
        <li className="text-xl py-2 flex hover:text-[#E87A5D] hover:translate-x-3 duration-200">
          <AiFillCarryOut size={20} className="mr-2 text-center" />
          Trending
        </li>
      </Link>
      <Link to="/newarrivals">
        <li className="text-xl py-2 flex hover:text-[#E87A5D] hover:translate-x-3 duration-200">
          <MdFavorite size={20} className="mr-2" />
          New Arrivals
        </li>
      </Link>
      <Link to="/account">
        <li className="text-xl py-2 flex hover:text-[#E87A5D] hover:translate-x-3 duration-200">
          <BsFillPersonFill size={20} className="mr-2" />
          Account
        </li>
      </Link>
      <Link to="/help">
        <li className="text-xl py-2 flex hover:text-[#E87A5D] hover:translate-x-3 duration-200">
          <MdHelp size={20} className="mr-2" />
          Help
        </li>
      </Link>
      <Link to="/contact">
        <li className="text-xl py-2 flex hover:text-[#E87A5D] hover:translate-x-3 duration-200">
          <AiFillContacts size={20} className="mr-2 " />
          Contact Us
        </li>
      </Link>
      <Link to="/about">
        <li className="text-xl py-2 flex hover:text-[#E87A5D] hover:translate-x-3 duration-200">
          <BsBookmarksFill size={20} className="mr-2 " />
          About Us
        </li>
      </Link>
      <Link to="/cart">
        <li className="text-xl py-2 flex hover:text-[#E87A5D] hover:translate-x-3 duration-200">
          <BsFillCartCheckFill size={20} className="mr-2 " />
          Cart
        </li>
      </Link>
    </ul>
  );
};

export default MobileNavbarLinks;
