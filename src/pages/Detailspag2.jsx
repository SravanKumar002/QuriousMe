import React from "react";
import { useNavigate } from "react-router-dom";

import image1 from "../assets/detailscart/image1.svg";
import image2 from "../assets/detailscart/image2.svg";
import image3 from "../assets/detailscart/image3.svg";

function Detailspg2() {
  const navigate = useNavigate();

  return (
    <div className="px-4 py-4 md:px-10 lg:px-16">
      <div className="mb-6">
        <h1 className="text-3xl pb-6 text-color">
          How you want to use QuriosMe?
        </h1>
        <p className="text-xl">
          Everyone will have something in mind. What’s in yours?
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-around">
        <div className="border border-gradient p-3 md:w-[258px] h-[320px]">
          <input type="checkbox" className="w-5 h-5 mb-2" />
          <div className="flex justify-center">
            <img src={image1} className="w-[180px] h-[220px]" alt="Image 1" />
          </div>
          <h1 className="text-lg mt-4 text-center">Side hustle</h1>
        </div>
        <div className="border border-gradient p-3 md:w-[258px] h-[320px] mt-6 md:mt-0">
          <input type="checkbox" className="w-5 h-5 mb-2" />
          <div className="flex justify-center">
            <img src={image2} className="w-[180px] h-[220px]" alt="Image 2" />
          </div>
          <h1 className="text-lg mt-4 text-center">Full time</h1>
        </div>
        <div className="border border-gradient p-3 md:w-[258px] h-[320px] mt-6 md:mt-0">
          <input type="checkbox" className="w-5 h-5 mb-2" />
          <div className="flex justify-center">
            <img src={image3} className="w-[180px] h-[220px]" alt="Image 3" />
          </div>
          <h1 className="text-lg mt-4 text-center">Time pass</h1>
        </div>
      </div>
      <div className="flex justify-between mt-8">
        <button
          className="bg-white text-black px-3 py-2"
          onClick={() => navigate("/detailspg3")}
        >
          Skip
        </button>
        <button
          className="bg-white text-black px-3 py-2"
          onClick={() => navigate("/detailspg3")}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Detailspg2;
