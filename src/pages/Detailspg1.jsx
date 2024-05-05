import React from "react";
import image4 from "../assets/detailscart/image4.png";
import image5 from "../assets/detailscart/image5.png";
import { useNavigate } from "react-router-dom";

function Detailspg1() {
  const navigate = useNavigate();

  return (
    <div className="px-6 py-6 md:px-10 lg:px-16">
      <div className="mb-6">
        <h1 className="text-3xl pb-6 text-color">What brings you here?</h1>
        <p className="text-xl">
          Your Account has been created, what are you looking for here in
          QuriosMe?
        </p>
      </div>
      <div className="flex flex-col lg:flex-row gap-6 justify-center">
        <div className="border border-gradient p-4 w-full  md:w-[450px] lg:w-[500px] lg:h-[320px]">
          <input type="checkbox" className="w-5 h-5 mb-2" />
          <div className="flex justify-center">
            <img src={image5} className="w-[150px] h-[150px]" alt="Image 5" />
          </div>
          <div className="flex flex-col mt-2">
            <h1 className="text-lg text-center">Buying freelance services</h1>
            <p className="text-sm mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              id diam et erat convallis molestie fermentum vitae dui. Praesent
              tincidunt orci justo, non interdum elit
            </p>
          </div>
        </div>
        <div className="border border-gradient p-4 w-full md:w-[450px] lg:w-[500px] mt-6 lg:mt-0">
          <input type="checkbox" className="w-5 h-5 mb-2" />
          <div className="flex justify-center">
            <img src={image4} className="w-[150px] h-[150px]" alt="Image 4" />
          </div>
          <div className="flex flex-col mt-2">
            <h1 className="text-lg text-center">Selling freelance services</h1>
            <p className="text-sm mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              id diam et erat convallis molestie fermentum vitae dui. Praesent
              tincidunt orci justo, non interdum elit
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center lg:justify-end mt-6">
        <button
          className="bg-white text-black px-3 py-2"
          onClick={() => navigate("/detailspg2")}
        >
          Skip
        </button>
      </div>
    </div>
  );
}

export default Detailspg1;
