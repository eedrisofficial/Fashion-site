import React from "react";
import Navbar from "../Navbar";
import MiniFooter from "./MiniFooter";

const About = () => {
  return (
    <React.Fragment>
      <Navbar />
      <div className=" max-w-[1640px] mx-auto h-screen p-4 font-serif text-center mt-20 mb-20">
        <div className="mb-20 p-4 gap-6">
          <h1 className="p-8 text-[#00246B] text-sm md:text-xl font-mono text-start font-bold ">
            <span className="text-4xl md:text-6xl text-[#E87A5D] mr-2">
              Get to know
            </span>
            little about us...
          </h1>
          <div className=" grid  gap-1 md:grid-cols-2 lg:flex justify-evenly  ">
            <img
              src="https://images.pexels.com/photos/7147852/pexels-photo-7147852.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
              className="object-cover w-[400px] h-[200px] rounded-lg"
            />
            <img
              src="https://images.pexels.com/photos/7147954/pexels-photo-7147954.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
              className="hidden md:grid object-cover w-[400px] h-[200px] rounded-lg"
            />
          </div>
          <div className="shadow-lg shadow-[#E87A5D] text-center mt-4 p-4 lg:w-full lg:p-20 ">
            <h1 className="font-bold text-2xl text-[#E87A5D]">About Us</h1>
            <p className="p-3">
              Reed's Fashion was established in 2004 at Abuja, Nigeria. Our
              mission was to incorporate global culture in to fashion. our team
              travels around the world to learn and understands different
              cultures so as to achieve our goal by giving our customers the
              best. Above all, communicating positively and uniting people
              through fashion remain one of our ultimate goal.
              <span className=" text-[#E87A5D] ml-2 font-mono font-bold">
                Just like flowers, the different in culture and our designs
                makes us special.
              </span>
            </p>
          </div>
        </div>
        <MiniFooter />
      </div>
    </React.Fragment>
  );
};

export default About;
