import React from "react";
import { BsLinkedin, BsTwitter } from "react-icons/bs";
import { FaInstagramSquare, FaFacebookSquare } from "react-icons/fa";

const ContactSocialMedia = () => {
  return (
    <div className="flex items-center flex-col gap-6 p-4 ">
      <a
        href="https://www.linkedin.com/in/haruna-idris-68aa3223a/"
        className="text-[#00246B] hover:text-[#E87A5D] hover:-translate-y-1 hover:scale-105  duration-300 border-none"
      >
        <BsLinkedin size={25} />
      </a>

      <a
        href="https://www.instagram.com/eedrisofficial/"
        className="text-[#00246B] hover:text-[#E87A5D] hover:-translate-y-1 hover:scale-105  duration-300 border-none"
      >
        <FaInstagramSquare size={25} />
      </a>

      <a
        href="https://twitter.com/I_am_eedris"
        className="text-[#00246B] hover:text-[#E87A5D] hover:-translate-y-1 hover:scale-105  duration-300 border-none"
      >
        <BsTwitter size={25} />
      </a>

      <a
        href="https://www.facebook.com/IdrisHarunaAlih"
        className="text-[#00246B] hover:text-[#E87A5D] hover:-translate-y-1 hover:scale-105  duration-300 border-none"
      >
        <FaFacebookSquare size={25} />
      </a>
    </div>
  );
};

export default ContactSocialMedia;
