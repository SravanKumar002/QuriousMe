import { useState, useEffect } from "react";
import web from "../assets/images/popularServices/web.svg";
import content from "../assets/images/popularServices/content.svg";
import graphic from "../assets/images/popularServices/graphic.svg";
import logo from "../assets/images/popularServices/logo.svg";
import video from "../assets/images/popularServices/videoEditing.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

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

export default function PopularServices({ color }) {
  const [slidesPerView, setSlidesPerView] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setSlidesPerView(5);
      } else if (window.innerWidth >= 1024) {
        setSlidesPerView(4);
      } else if (window.innerWidth >= 768) {
        setSlidesPerView(3);
      } else if (window.innerWidth >= 640) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(1);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="mt-[14] overflow-x-hidden">
      <h1
        className={
          color === "white"
            ? "text-2xl px-[80px] text-black"
            : "text-2xl px-[80px]"
        }
      >
        Popular{" "}
        <span
          className={
            color === "white" ? "font-bold" : "text-yellow-300 font-bold"
          }
        >
          Qurios-ities based on topics
        </span>
      </h1>
      <div className="pt-10">
        <div className="bg-[#ffffff39] px-4 sm:px-8">
          <Swiper
            slidesPerView={slidesPerView}
            spaceBetween={0}
            navigation={true}
            modules={[Navigation]}
            loop={true}
            className="mySwiper"
          >
            {data.map((e, i) => (
              <SwiperSlide key={i}>
                <div className="flex py-4 flex-col gap-8 items-center relative">
                  <img
                    src={e.img}
                    className="h-[320px] w-full moveup-highlight"
                    alt=""
                  />
                  <p className={color === "white" ? "text-black" : "text-xl"}>
                    {e.name}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
