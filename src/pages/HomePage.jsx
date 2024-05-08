// import React from "react";
// import Landing from "./Landing";
import Typewriter from "typewriter-effect";
import search from "../assets/icons/search.svg";
import PopularServices from "./PopularServices";
// import Union from "../assets/icons/services/union.svg";
import web from "../assets/images/popularServices/web.svg";
import content from "../assets/images/popularServices/content.svg";
import graphic from "../assets/images/popularServices/graphic.svg";
import logo from "../assets/images/popularServices/logo.svg";
import video from "../assets/images/popularServices/videoEditing.svg";
import Services from "./Services";
// Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import Footer from "./Footer";
import Queries from "./Queries";

const data = [
  {
    name: "Video Editing",
    img: video,
  },
  {
    name: "Web Development",
    img: web,
  },
  {
    name: "Content Writing",
    img: content,
  },
  {
    name: "Logo Design",
    img: logo,
  },
  {
    name: "Graphic Designing",
    img: graphic,
  },
  {
    name: "Content Writing",
    img: content,
  },
  {
    name: "Logo Design",
    img: logo,
  },
  {
    name: "Graphic Designing",
    img: graphic,
  },
];

export default function HomePage() {
  return (
    <div className="">
      <section className="flex justify-center items-center flex-col md:flex-row">
        <div className="flex w-full md:w-[500px] mb-8 md:mb-32 flex-col items-center gap-1 justify-center">
          <h1 className="text-xl md:text-4xl text-nowrap mt-8 md:mt-32 font-bold text-yellow-300 text-center">
            What are you Qurios about today?
          </h1>
          <p className="flex gap-2 text-sm md:text-3xl text-nowrap font-semibold text-center">
            Get help in any field you are{" "}
            <span>
              <Typewriter
                options={{
                  strings: [
                    " Qurios.",
                    " Stuck.",
                    " Having any trouble.",
                    " Having Problem.",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </p>
          <div className="flex items-center my-4 w-[90%] md:w-[750px] bg-[#D9D9D9] rounded-full px-2 py-1">
            <input
              type="text"
              placeholder="search for the query"
              className="outline-none px-3 bg-[#D9D9D9] text-xl w-full text-black"
            />
            <div className="flex items-center justify-center bg-black left-shadow rounded-full p-1.5">
              <img src={search} className="relative h-8 w-8 top-1" alt="" />
            </div>
          </div>
          <div className="flex w-[90%] md:w-[700px] ml-0 md:ml-1 items-center gap-2 text-base justify-center">
            <p className="text-nowrap">Widely asked:</p>
            <div className="flex gap-4 flex-wrap">
              {[
                "Photoshop",
                "Video Editing",
                "Logo Design",
                "Web Development",
              ].map((e, i) => (
                <p
                  className="text-nowrap px-2 py-0.5 hover:bg-white hover:text-black cursor-pointer rounded-lg border border-slate-200"
                  key={i}
                >
                  {e}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="bg-white">
        <section className="h-screen flex justify-center items-center">
          <PopularServices color={"white"} />
        </section>
        <section className="h-[80vh]">
          <Queries />
        </section>
        <section className="bg-[#E8F4F4] text-black my-10 min-h-[80vh]">
          <div className="flex items-center justify-center flex-col mx-4 md:mx-8 lg:mx-32 pt-8 md:pt-16 lg:pt-20">
            <h1 className="text-2xl md:text-3xl lg:text-4xl mb-8 md:mb-10">
              The <span className="font-bold">Best</span> Part about{" "}
              <span className="font-bold">QuriousMe?</span>
            </h1>
            <div className="my-4 md:my-6">
              <h2 className="text-lg md:text-xl font-semibold mb-2">
                Lorem ipsum dolor
              </h2>
              <p className="text-sm md:text-base">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod
                provident eveniet perspiciatis dignissimos possimus tenetur illo
                obcaecati amet rerum sapiente quas aliquam officiis facilis ut,
                culpa doloribus unde at saepe.
              </p>
            </div>
            <div className="my-4 md:my-6">
              <h2 className="text-lg md:text-xl font-semibold mb-2">
                Lorem ipsum dolor
              </h2>
              <p className="text-sm md:text-base">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod
                provident eveniet perspiciatis dignissimos possimus tenetur illo
                obcaecati amet rerum sapiente quas aliquam officiis facilis ut,
                culpa doloribus unde at saepe.
              </p>
            </div>
            <div className="my-4 md:my-6">
              <h2 className="text-lg md:text-xl font-semibold mb-2">
                Lorem ipsum dolor
              </h2>
              <p className="text-sm md:text-base">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod
                provident eveniet perspiciatis dignissimos possimus tenetur illo
                obcaecati amet rerum sapiente quas aliquam officiis facilis ut,
                culpa doloribus unde at saepe.
              </p>
            </div>
          </div>
        </section>

        <section className="h-[100vh] lg:h-screen flex justify-center items-center">
          <div className="max-w-screen-lg w-full">
            <Services color={"white"} />
          </div>
        </section>
      </div>
      <section className="h-screen bg-none">
        <Footer />
      </section>
    </div>
  );
}
