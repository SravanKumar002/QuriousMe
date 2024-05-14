// Import necessary libraries
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Group from "../assets/detailscart/Group.png";

// Define Detailspg5 component
function Detailspg5() {
  // Define state variables
  const navigate = useNavigate();
  const [profileImage, setProfileImage] = useState(null);

  // Handle image change
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setProfileImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  // Render component
  return (
    <div className="px-4 md:px-12 py-4 md:py-12">
      <div>
        <h1 className="text-3xl">Personal Information.</h1>
        <p className="mt-4 text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id
          diam et erat convallis molestie fermentum vitae dui. Praesent
          tincidunt orci justo, non interdum elit{" "}
        </p>
      </div>

      <div className="border border-gradient mt-4">
        <div className="flex flex-col md:flex-row m-4 md:gap-6">
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
            <div className="flex flex-row m-4 md:gap-6">
              <h1 className="text-xl pr-9">Email Id :</h1>
              <input
                type="text"
                placeholder="Enter EmailId"
                className="bg-transparent ml-2 outline-none w-full md:w-[300px] border-b border-white"
              />
            </div>
            <div className="flex flex-row m-4 md:gap-6">
              <h1 className="text-xl pr-4">Mobile No:</h1>
              <input
                type="text"
                placeholder="Number"
                className="bg-transparent ml-2 outline-none w-full md:w-[300px] border-b border-white"
              />
            </div>
            <div className="flex flex-row m-4 md:gap-6">
              <h1 className="text-xl pr-8">Country :</h1>
              <input
                type="text"
                placeholder="country"
                className="bg-transparent ml-2 outline-none w-full md:w-[300px] border-b border-white"
              />
            </div>
          </div>
          <label htmlFor="fileInput" className="cursor-pointer">
            <div className="flex bg-yellow-500 w-full md:w-[450px] ml-0 md:ml-6 mt-6 rounded-lg h-auto mb-3">
              <div className="flex flex-row items-center justify-center">
                <h1 className="ml-6 text-xl font-poppins">
                  Click here to Add your <br />
                  <span className="text-black"> profile </span>
                </h1>
                <input
                  type="file"
                  id="fileInput"
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageChange}
                />
                <img
                  src={profileImage ? profileImage : Group}
                  className="pl-6 [120px] h-[150px] rounded-lg"
                  alt="Add Profile"
                />
              </div>
            </div>
          </label>
        </div>
        {/* Render the uploaded profile image */}
        {/* {profileImage && (
          <div className="m-4">
            <img
              src={profileImage}
              alt="Selected Profile"
              className="w-[120px] h-[120px] mx-auto mt-3"
            />
          </div>
        )} */}
        {/* Render other form fields */}
        <div className="m-4 font-poppins text-xl">
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
        {/* Render the skip button */}
        <div className="flex justify-center lg:justify-end mt-6 m-4">
          <button
            className="bg-white text-black px-3 py-2"
            onClick={() => navigate("/detailspg7")}
          >
            Skip
          </button>
        </div>
      </div>
    </div>
  );
}

// Export the component
export default Detailspg5;
