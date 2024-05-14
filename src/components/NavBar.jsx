import { useState } from "react";
import { useNavigate } from "react-router-dom";
import dropdown from "../assets/icons/dropdown.svg";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="flex px-4 md:px-8 lg:px-16 justify-between items-center">
      <div>
        <h1 className="font-k2d font-bold text-2xl md:text-3xl">
          <a href="/">QuriosMe.</a>
        </h1>
      </div>
      <div className="md:hidden">
        <img
          src={dropdown}
          alt=""
          className="h-6 w-6 cursor-pointer"
          onClick={toggleDropdown}
        />
      </div>
      <div
        className={`${
          showDropdown ? "block" : "hidden"
        } md:hidden absolute right-0 mt-2 w-40 bg-traparent shadow-md rounded-md`}
      >
        <NavLink to="/devdetails" className="block py-2 px-4 hover:bg-gray-100">
          Become a Seller
        </NavLink>
      </div>
      <div className="hidden md:flex justify-between gap-6 items-center text-sm md:text-base">
        <div className="flex items-center gap-2">
          <p>Explore</p>
          <img src={dropdown} alt="" className="h-2" />
        </div>
        <NavLink to="/devdetails">
          <p>Become a Seller</p>
        </NavLink>
        <div className="bg-gradient-to-r p-[3px] rounded-md from-yellow-300 to-white">
          <NavLink to="/login">
            <button className="px-3 py-1 bg-[#0D1717] rounded-md text-xs md:text-sm">
              Sign in
            </button>
          </NavLink>
        </div>
        <div
          onClick={() => {
            navigate("/searchresults");
          }}
          className="hidden md:block"
        >
          <img
            src="https://t3.ftcdn.net/jpg/06/50/24/56/360_F_650245616_WUPkDzObkPLVyegasDCeNhQXvFVVJoKn.jpg"
            alt=""
            className="h-12 w-12 rounded-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
