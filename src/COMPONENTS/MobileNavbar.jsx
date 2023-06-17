import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import MobileNavbarLinks from "./MobileNavbarLinks";

const MobileNavbar = ({ mobileNav, setMobileNav }) => {
  return (
    // HAMBURGER MENU
    <div>
      {mobileNav ? (
        <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div>
      ) : (
        ""
      )}
      <div
        className={
          mobileNav
            ? "fixed top-0 left-0 w-[300px] h-screen bg-white/100 z-10 duration-300"
            : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white/100 z-10 duration-300"
        }
      >
        {/* close icon for hamburger */}
        <AiOutlineClose
          size={30}
          onClick={() => setMobileNav(!mobileNav)}
          className="absolute right-4 top-4 cursor-pointer text-slate-800 hover:bg-slate-100 hover:rounded "
        />
        <h1 className="text-xl p-4 bg-[#E87A5D] cursor-pointer">
          Reed's <span className="font-bold text-[#00246B]"> Fashions</span>
        </h1>
        <nav>
          <MobileNavbarLinks />
        </nav>
      </div>
    </div>
  );
};

export default MobileNavbar;
