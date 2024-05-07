import React from "react";
import Group from "../assets/detailscart/Group.png";
import { useNavigate } from "react-router-dom";

function Detailspg5() {
  const navigate = useNavigate();
  return (
    <div className="px-[20px] md:px-[60px] py-[20px] md:py-[60px]">
      <div className="">
        <h1 className="text-3xl">Personal Information.</h1>
        <p className="mt-4 text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id
          diam et erat convallis molestie fermentum vitae dui. Praesent
          tincidunt orci justo, non interdum elit{" "}
        </p>
      </div>

      <div className="border border-gradient mt-4">
        <div className="flex flex-col md:flex-row m-6 md:gap-6">
          <h1 className="text-xl">Enter Name :</h1>
          <input
            type="text"
            placeholder="Enter First name"
            className="bg-transparent ml-2 outline-none w-full md:w-[300px] border-b border-white mt-3"
          />

          <input
            type="text"
            placeholder="Enter lastName"
            className="bg-transparent ml-2 outline-none w-full md:w-[300px] mt-2 md:mt-0 border-b border-white"
          />
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="flex flex-col">
            <div className="flex flex-row m-6 md:gap-6">
              <h1 className="text-xl pr-9">Email Id :</h1>
              <input
                type="text"
                placeholder="Enter EmailId"
                className="bg-transparent ml-2 outline-none w-full md:w-[300px] border-b border-white"
              />
            </div>
            <div className="flex flex-row m-6 md:gap-6">
              <h1 className="text-xl pr-4">Mobile No:</h1>
              <input
                type="text"
                placeholder="Number"
                className="bg-transparent ml-2 outline-none w-full md:w-[300px] border-b border-white"
              />
            </div>
            <div className="flex flex-row m-6 md:gap-6">
              <h1 className="text-xl pr-8">Country :</h1>
              <input
                type="text"
                placeholder="country"
                className="bg-transparent ml-2 outline-none w-full md:w-[300px] border-b border-white"
              />
            </div>
          </div>
          <div className="flex bg-yellow-500 w-full md:w-[450px] ml-0 md:ml-6 mt-6 rounded-lg h-auto mb-3">
            <div className="flex flex-row items-center justify-center">
              <h1 className="ml-6 text-xl font-poppins">
                Click here to Add your <br />
                <span className="text-black"> profile </span>
              </h1>
              <img src={Group} className="pl-6" />
            </div>
          </div>
        </div>
        <div className="m-6 font-poppins text-xl">
          <h1>Describe about yourself and your hobbies :</h1>
          <div className="bg-[#C0C0C0] rounded-lg mt-6">
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              className="pl-6 w-full rounded-lg h-40 mt-2 outline-none text-black bg-transparent"
            ></textarea>
          </div>
        </div>
        <div className="flex justify-center lg:justify-end mt-6 m-6">
          <button
            className="bg-white text-black px-3 py-2"
            onClick={() => navigate("/detailspg6")}
          >
            Skip
          </button>
        </div>
      </div>
    </div>
  );
}

export default Detailspg5;
