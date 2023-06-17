import React from "react";
import { RiRefund2Line } from "react-icons/ri";
import { MdCancelScheduleSend, MdMore } from "react-icons/md";
import { FaCcMastercard } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";

const HelpUl = () => {
  return (
    <div className="mt-10 ">
      <ul className="  md:flex justify-center lg:flex p-4 md:gap-6 lg:gap-8 hover:cursor-pointer">
        <li className="p-2 shadow shadow-red-300">
          <MdCancelScheduleSend size={20} className="text-[#E87A5D]" />
          Cancel order
        </li>
        <li className="p-2 shadow shadow-red-300">
          <RiRefund2Line size={20} className="text-[#E87A5D]" />
          Cash refund
        </li>
        <li className="p-2 shadow shadow-red-300">
          <FaCcMastercard size={20} className="text-[#E87A5D]" />
          Payment issues
        </li>
        <li className="p-2 shadow shadow-red-300">
          <TbTruckDelivery size={20} className="text-[#E87A5D]" />
          Track orders
        </li>
        <li className="p-2 shadow shadow-red-300">
          <MdMore size={20} className="text-[#E87A5D]" />
          Others..
        </li>
      </ul>
    </div>
  );
};

export default HelpUl;
