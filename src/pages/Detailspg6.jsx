import React, { useState } from "react";
import Vector from "../assets/detailscart/Vector.png";
import Group1 from "../assets/detailscart/Group1.png";
import { useNavigate } from "react-router-dom";

const MyModal = ({ visible, onClose }) => {
  if (!visible) return null;

  const handleOnClose = (e) => {
    if (e.target.id === "container") onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div
        id="container"
        onClick={handleOnClose}
        className="absolute inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex items-center justify-center"
      >
        <div className="bg-white p-6 rounded-md w-full max-w-md">
          <h1 className="text-2xl mb-4 text-black">
            Your Seller Profile is all set.
          </h1>
          <p className="text-sm text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id
            diam et erat convallis molestie fermentum vitae dui. Praesent
            tincidunt orci justo, non interdum elit
          </p>
          <div className="mt-6">
            <button
              className="px-3 py-1 bg-gray-900 text-white rounded-md text-xs md:text-sm"
              onClick={onClose}
            >
              done
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

function Detailspg6() {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="px-4 md:px-16 py-4 md:py-16">
      <div className="mb-8">
        <h1 className="text-3xl">Account Security</h1>
        <p className="mt-2 text-lg text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id
          diam et erat convallis molestie fermentum vitae dui. Praesent
          tincidunt orci justo, non interdum elit
        </p>
      </div>
      <div className="border border-gradient p-4 md:p-8">
        <div className="mb-4 md:flex md:items-center md:justify-between">
          <div className="flex items-center mb-2 md:mb-0">
            <img src={Group1} alt="Group1" className="w-10 mr-4" />
            <p className="font-poppins">Email</p>
            <p className="text-gray-500 ml-2 ">Private</p>
          </div>
          <div>
            <button className="px-3 py-1 bg-yellow-500 text-white rounded-md text-xs md:text-sm">
              Verified
            </button>
          </div>
        </div>
        <div className="mb-4 md:flex md:items-center md:justify-between">
          <div className="flex items-center mb-2 md:mb-0">
            <img src={Vector} alt="Vector" className="w-10 mr-4 mt-4" />
            <p className="font-poppins">Mobile number</p>
            <p className="text-gray-500 ml-2">Private</p>
          </div>
          <div>
            <button className="px-3 py-1 bg-yellow-500 text-white rounded-md text-xs md:text-sm">
              Add Number
            </button>
          </div>
        </div>
        <p className="text-xs text-gray-500">
          We will never share your mobile number
        </p>
        <div className="mt-6 flex justify-end">
          <button
            className="px-3 py-1 bg-yellow-600 text-white rounded-md text-xs md:text-sm"
            onClick={() => setShowModal(true)}
          >
            Done
          </button>
        </div>
      </div>
      <MyModal onClose={() => setShowModal(false)} visible={showModal} />
    </div>
  );
}

export default Detailspg6;
