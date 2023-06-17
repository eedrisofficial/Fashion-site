import React from "react";
import { BsFillBookmarkStarFill } from "react-icons/bs";

const Showcase = () => {
  return (
    <div className="max-w-[1640px] mx-auto p-8 font-serif">
      <div className="relative max-h-[500px]">
        <div className="absolute w-full h-full text-gray-200 text-2xl p-4">
          <h1 className="flex gap-4 ">
            <span className="text-[#E87A5D]"> Reed's </span> Fashion
            <BsFillBookmarkStarFill size={25} className="text-[#E87A5D] " />
            <BsFillBookmarkStarFill size={25} className="text-[#E87A5D]" />
            <BsFillBookmarkStarFill size={25} className="text-[#E87A5D]" />
            <BsFillBookmarkStarFill size={25} className="text-[#E87A5D]" />
            <BsFillBookmarkStarFill size={25} className="text-[#E87A5D]" />
          </h1>
          <h1>
            Best <span className="text-[#E87A5D]"> Outfits </span>
          </h1>
        </div>
        <div className="grid md:grid-cols-2 gap-2 p-2">
          <img
            className="rounded w-[600px] object-cover"
            src="https://images.pexels.com/photos/264726/pexels-photo-264726.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
          <img
            className="rounded w-[600px] object-cover"
            src="https://media.istockphoto.com/id/955641488/photo/clothes-shop-costume-dress-fashion-store-style-concept.jpg?s=612x612&w=0&k=20&c=ZouECh5-XOCuBzvKBQfxgyw0RIGEUg9u5F0sJiZV86s="
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Showcase;
