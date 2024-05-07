import React from "react";
import Vector from "../assets/detailscart/Vector.png";
import Group1 from "../assets/detailscart/Group1.png";
import { useNavigate } from "react-router-dom";

function Detailspg6() {
  const navigate = useNavigate();
  return (
    <div className="px-[20px] md:px-[60px] py-[20px] md:py-[60px]">
      <div className="">
        <h1 className="text-3xl">Account Security.</h1>
        <p className="mt-4 text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id
          diam et erat convallis molestie fermentum vitae dui. Praesent
          tincidunt orci justo, non interdum elit
        </p>
      </div>
      <div className="border border-gradient mt-4">
        <div className="flex justify-between">
          <div className="flex flex-col md:flex-row m-6 md:gap-6">
            <img src={Group1} className="w-[40px]" />
            <p className="font-poppins">Email </p>
            <p className="text-[#959595]">Private</p>
          </div>
          <div>
            <div className="m-6  bg-gradient-to-r p-[3px] rounded-md from-yellow-300 to-white">
              <button className="px-3 py-1 bg-[#0D1717] rounded-md text-xs md:text-sm">
                Verified
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex flex-col md:flex-row m-6 md:gap-6">
            <img src={Group1} className="w-[40px]" />
            <p className="font-poppins">Mobile number </p>
            <p className="text-[#959595]">Private</p>
          </div>
          <div>
            <div className="m-6 bg-gradient-to-r p-[3px] rounded-md from-yellow-300 to-white">
              <button className="px-3 py-1 bg-[#0D1717] rounded-md text-xs md:text-sm">
                Add Number
              </button>
            </div>
          </div>
        </div>
        <div className="flex">
          <p className="m-6 pl-4">We will never share your mobile number</p>
        </div>
        <div className="flex flex-row justify-end">
          <div className="m-6 bg-gradient-to-r p-[3px] rounded-md from-yellow-300 to-white">
            <button
              className="px-3 py-1 bg-[#0D1717] rounded-md text-xs md:text-sm"
              onClick={() => {
                navigate("/detailspg5");
              }}
            >
              Done
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detailspg6;
