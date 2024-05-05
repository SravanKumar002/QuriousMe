import React from "react";
import { useNavigate } from "react-router-dom";
import image11 from "../assets/detailscart/image8.png";
import image12 from "../assets/detailscart/image9.png";
import image13 from "../assets/detailscart/image10.png";

function Detailspg4() {
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
        <Card image={image11} title="Developing a project." />
        <Card image={image12} title="Finding job." />
        <Card image={image13} title="Just exploring QuriosMe." />
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

export default Detailspg4;
