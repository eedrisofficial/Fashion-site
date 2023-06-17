import React from "react";
import Navbar from "../Navbar";
import { BiPhoneCall } from "react-icons/bi";
import { MdLocationOn } from "react-icons/md";
import MiniFooter from "./MiniFooter";
import ContactSocialMedia from "./ContactSocialMedia";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <React.Fragment>
      <Navbar />
      <div className="h-screen max-w-[1640px] mx-auto p-4 font-serif  mt-20 lg:mb-[240px]">
        <h1 className="text-2xl text-[#00246B] font-bold text-center p-4">
          Write us a message
        </h1>

        <div className="flex px-4 md:px-12 lg:px-28 lg:py-8 italic text-center ">
          <span className="hidden lg:flex text-[#E87A5D] text-xl md:text-4xl lg:text-4xl">
            NOTE:
          </span>
          <p>
            Giving the best service to our customers is one of our ultimate
            priority, please we will send our reply to your email within 24hrs
            and contact us through our number if you didn't get any feedback
            after 2hrs of your message. Thanks for your patronage.
          </p>
        </div>

        <div className=" mt-16 flex justify-evenly items-center">
          <ContactForm />
          <ContactSocialMedia />
        </div>

        <div className="lg:flex md:flex justify-evenly p-12 ">
          <div className=" p-3 shadow-lg shadow-[#E87A5D] lg:w-[25%] text-center lg:text-center lg:p-3">
            <p className="border-b-2 border-b-[#E87A5D] mb-3 font-bold">
              <BiPhoneCall size={25} className="text-[#E87A5D]" />
              Call our customer service
            </p>
            <h1>+2348132624679</h1>
            <div className=" text-[12px] py-8 font-bold italic">
              <p>9:00am - 6:00pm</p>
              <p>mon-sat</p>
            </div>
          </div>
          <div className="shadow-xl shadow-[#E87A5D] p-3 text-center mt-6 lg:w-[35%] lg:text-center lg:p-7 ">
            <p className="border-b-2 border-[#E87A5D] mb-2 font-bold">
              <MdLocationOn size={25} className="text-[#E87A5D]" />
              Visit our branch office
            </p>
            <ul className="p-2 italic">
              <li className="py-2">• Opposite GTB Wuse2, Abuja. </li>
              <li className="py-2">• Airport road, Lagos. </li>
              <li className="py-2">• Ganaja Junction, Lokoja.</li>
            </ul>
          </div>
        </div>
        <MiniFooter />
      </div>
    </React.Fragment>
  );
};

export default Contact;
