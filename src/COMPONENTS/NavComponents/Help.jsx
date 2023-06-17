import React, { useContext } from "react";
import Navbar from "../Navbar";
import { Link } from "react-router-dom";
import MiniFooter from "./MiniFooter";
import HelpUl from "./HelpUl";

const Help = () => {
  return (
    <React.Fragment>
      <Navbar />
      <div className="max-w-[1640px] mx-auto h-screen p-4 font-serif text-center mt-16">
        <h1 className="text-start p-6 text-2xl md:text-6xl lg:text-6xl font-bold text-[#00246B]">
          How can
          <span className="text-sm md:text-2xl lg:text-2xl font-mono text-[#E87A5D] ml-2">
            we help you?
          </span>
        </h1>
        <div className="flex justify-between bg-[#00246B] items-center">
          <img
            src="https://images.pexels.com/photos/7682340/pexels-photo-7682340.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
            className="object-cover w-[120px] h-[120px] rounded-full p-2 md:w-[400px] md:p-0 md:h-[200px] md:rounded-lg lg:w-[400px] lg:h-[200px] lg:p-0 lg:rounded-md"
          />
          <h1 className="text-bold text-white text-2xl mr-10 md:mr-32 lg:mr-40 ">
            we are always available to help..
          </h1>
        </div>
        <HelpUl />
        <p className="p-8">
          You can
          <Link to="/contact" className="text-[#E87A5D] p-1 hover:underline">
            contact
          </Link>
          us for swift responds.
        </p>
        <MiniFooter />
      </div>
    </React.Fragment>
  );
};

export default Help;
