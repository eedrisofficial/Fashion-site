import React from "react";
import { BsLinkedin, BsTwitter } from "react-icons/bs";
import { RiUserFollowFill } from "react-icons/ri";
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const today = new Date();
  return (
    <div className="bg-[#F3F3F3] mt-10">
      <div className="bottom-0 h-[200px] text-black/100 font-bold grid grid-row-2  gap-6 lg:flex justify-around  items-center p-6  font-serif cursor-pointer">
        <div className="mt-5 ">
          <ul className="flex gap-4 md:gap-16 lg:gap-8 justify-center">
            <Link to="/about">
              <li className="hover:text-[#E87A5D] hover:scale-105 duration-300">
                About
              </li>
            </Link>
            <Link to="/contact">
              <li className="hover:text-[#E87A5D] hover:scale-105 duration-300">
                Contact
              </li>
            </Link>
            <Link to="/help">
              <li className="hover:text-[#E87A5D] hover:scale-105 duration-300">
                Help
              </li>
            </Link>
            <Link to="/account">
              <li className="hover:text-[#E87A5D] hover:scale-105 duration-300">
                Account
              </li>
            </Link>
          </ul>
        </div>

        <div className="">
          <h1 className="justify-center mt-4 flex">
            Follow us
            <span className="text-[#00246B] ml-2">
              <RiUserFollowFill size={25} />
            </span>
          </h1>
          <div className="flex justify-center flex-row gap-6 p-4 md:gap-16 lg:gap-14">
            <a
              href="https://www.linkedin.com/in/haruna-idris-68aa3223a/"
              className="text-[#E87A5D] hover:-translate-y-1 hover:scale-105  duration-300 "
            >
              <BsLinkedin size={25} />
            </a>
            <a
              href="https://twitter.com/I_am_eedris"
              className=" text-[#E87A5D] hover:-translate-y-1 hover:scale-105  duration-300 "
            >
              <BsTwitter size={28} />
            </a>
            <a
              href="https://www.instagram.com/eedrisofficial/"
              className=" text-[#E87A5D] hover:-translate-y-1 hover:scale-105  duration-300"
            >
              <FaInstagramSquare size={28} />
            </a>
            <a
              href="https://www.facebook.com/IdrisHarunaAlih"
              className="text-[#E87A5D] hover:-translate-y-1 hover:scale-105  duration-300 "
            >
              <FaFacebookSquare size={28} />
            </a>
          </div>
        </div>
      </div>
      <p className=" text-center p-6 text-black/100 text-[18px]">
        &copy; {today.getFullYear()} @I_am_eedris || All Rights Reserved
      </p>
    </div>
  );
};

export default Footer;
