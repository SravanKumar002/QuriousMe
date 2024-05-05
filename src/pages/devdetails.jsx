import React from "react";
import Rectangle from "../assets/images/queries/rectangle.png";
import { useNavigate } from "react-router-dom";

function DevDetails() {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex flex-col lg:flex-row w-full">
        <div className="w-full lg:w-[700px] flex flex-col ml-10 mt-10 lg:mt-40">
          <h1 className="text-4xl mb-8 lg:text-3xl font-bold bg-gradient-to-r from-yellow-500 to-yellow-500 bg-clip-text text-transparent">
            Let's get started
          </h1>
          <p className="mt-8 lg:mt-4 text-2xl lg:text-xl font-poppins">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id
            diam et erat convallis molestie fermentum vitae dui. Praesent
            tincidunt orci justo, non interdum elit
          </p>

          <div className="mt-8">
            <h1 className="text-xl">
              Choose a username for
              <br /> your account
            </h1>

            <div className="mt-4">
              <input
                type="text"
                placeholder="Enter Username"
                className="outline-none w-full h-10 border-2 text-[#AB8000] rounded-lg mt-4 border-none bg-transparent"
              />
              <div className="self-stretch h-[3px] relative rounded-[5px] bg-white z-[5]" />
            </div>
            <button
              className="bg-[#AB8000] text-white w-[200px] h-8 rounded-lg mt-8 "
              onClick={() => {
                navigate("/detailspg1");
              }}
            >
              Next Step
            </button>
          </div>
        </div>
        <div className="hidden lg:block w-1/2">
          <img
            src={Rectangle}
            alt=""
            className="w-[380px] h-[500px] ml-32 mt-20"
          />
        </div>
      </div>
    </>
  );
}

export default DevDetails;
