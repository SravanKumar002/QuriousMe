import React from "react";
import { useNavigate } from "react-router-dom";
import image6 from "../assets/detailscart/image6.png";
import image7 from "../assets/detailscart/image7.png";
import image8 from "../assets/detailscart/image8.png";
import image9 from "../assets/detailscart/image9.png";
import image10 from "../assets/detailscart/image10.png";

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
      <div className="flex flex-col md:flex-row gap-4 justify-around">
        <Card image={image6} title="Only me." />
        <Card image={image7} title="2-8" />
        <Card image={image8} title="10-15" />
        <Card image={image9} title="15-30" />
        <Card image={image10} title="30-50" />
      </div>
      <div className="flex justify-between mt-8">
        <button
          className="bg-white text-black px-3 py-2"
          onClick={() => navigate("/detailspg4")}
        >
          Skip
        </button>
        <button
          className="bg-white text-black px-3 py-2"
          onClick={() => navigate("/detailspg4")}
        >
          Next
        </button>
      </div>
    </div>
  );
}

function Card({ image, title }) {
  return (
    <div className="flex flex-col border border-gradient p-3 md:w-[258px] h-[320px]">
      <input type="checkbox" className="w-5 h-5 mb-2" />
      <div className="flex justify-center">
        <img src={image} className="w-[180px] h-[220px]" alt={title} />
      </div>
      <h1 className="text-lg mt-4 text-center">{title}</h1>
    </div>
  );
}

export default Detailspg2;
