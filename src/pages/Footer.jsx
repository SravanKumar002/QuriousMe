import React from "react";
import footerimg from "../assets/images/footer/footerimg.svg";

const links = {
  Categories: [
    "Digital Marketing",
    "Graphics & Design",
    "Writing & Translation",
    "Video & Animation",
    "Music & Audio",
    "Fiverr Logo Maker",
    "Programming & Tech",
    "Data",
    "Business",
    "Lifestyle",
    "Photography",
    "End-to-End Projects",
    "Sitemap]",
  ],
  About: [
    "Careers",
    "Press & News",
    "Partnerships",
    "Privacy Policy",
    "Terms of Service",
    "Intellectual Property Claims",
    "Investor Relations",
  ],
  "Support and Education": [
    " Trust & Safety",
    "Selling on Fiverr",
    "Buying on Fiverr",
    "QuriosMe. Guides",
    "QuriosMe. Workspace",
    "Invoice Software",
    "Learn",
    "Online Courses",
  ],
};

export default function Footer() {
  return (
    <>
      <div className="px-[30px] mx-14 my-20 md:mx-20 md:px-10 lg:mx-32 lg:px-20">
        <div className="flex flex-col md:flex-row justify-between items-center bg-[#ffffff3a] py-4 px-10 rounded-3xl">
          <div className="mb-6 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl">
              Technically! Everything feels{" "}
              <span className="font-grypen text-7xl font-semibold text-yellow-300">
                solved
              </span>
            </h1>
            <button className="my-4 md:my-10 px-4 py-2 rounded-[5px] bg-yellow-300 text-black">
              Join QuriosMe.
            </button>
          </div>
          <div>
            <img src={footerimg} className="h-48 md:h-64" alt="" />
          </div>
        </div>
        <div className="my-10 flex flex-col md:flex-row justify-between">
          <div className="mb-8 md:mb-0 md:mr-8">
            <h1 className="font-semibold text-xl md:text-2xl lg:text-3xl">
              Categories
            </h1>
            <ul className="list-disc ml-4 md:ml-6">
              {links.Categories.map((e, i) => (
                <li key={i}>
                  <p className="underline">{e}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="mb-8 md:mb-0 md:mr-8">
            <h1 className="font-semibold text-xl md:text-2xl lg:text-3xl">
              About
            </h1>
            <ul className="list-disc ml-4 md:ml-6">
              {links.About.map((e, i) => (
                <li key={i}>
                  <p className="underline">{e}</p>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h1 className="font-semibold text-xl md:text-2xl lg:text-3xl">
              Support and Education
            </h1>
            <ul className="list-disc ml-4 md:ml-6">
              {links["Support and Education"].map((e, i) => (
                <li key={i}>
                  <p className="underline">{e}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="flex px-[30px] bg-[#ffffff3a] p-4 md:p-8 justify-between">
        <h1 className="font-k2d font-bold text-xl md:text-3xl lg:text-4xl">
          QuriosMe.
        </h1>
        <div className="flex gap-4 md:gap-10 text-lg items-center">
          <i className="fab fa-instagram"></i>
          <i className="fab fa-linkedin"></i>
          <i className="fab fa-facebook"></i>
          <i className="fab fa-twitter"></i>
          <div className="flex gap-2 items-center">
            <i className="fas fa-globe"></i>
            <p>English</p>
          </div>
          <p>₹ INR</p>
        </div>
      </div>
    </>
  );
}
