import React from "react";
import FancyText from "@carefully-coded/react-text-gradient";

// Importing images
import a from "../assets/icons/services/a.png";
import b from "../assets/icons/services/b.png";
import c from "../assets/icons/services/c.png";
import d from "../assets/icons/services/d.png";
import e from "../assets/icons/services/e.png";
import f from "../assets/icons/services/f.png";
import g from "../assets/icons/services/g.png";
import h from "../assets/icons/services/h.png";
import i from "../assets/icons/services/i.png";
import j from "../assets/icons/services/j.png";

const data = [
  {
    name: "Graphic Design",
    img: a,
  },
  {
    name: "Digital Marketing",
    img: b,
  },
  {
    name: "Writing and Translating",
    img: c,
  },
  {
    name: "Video and Animation",
    img: d,
  },
  {
    name: "Music and Audio",
    img: e,
  },
  {
    name: "Graphic Design",
    img: f,
  },
  {
    name: "Digital Marketing",
    img: g,
  },
  {
    name: "Writing and Translating",
    img: h,
  },
  {
    name: "Video and Animation",
    img: i,
  },
  {
    name: "Music and Audio",
    img: j,
  },
];

export default function Services({ color }) {
  return (
    <div
      className={
        color === "white" ? "mx-auto my-10 text-black" : "mx-auto my-10"
      }
    >
      <div>
        <h1 className="text-3xl font-semibold text-center">
          {color !== "white" ? (
            <FancyText
              gradient={{ from: "yellow", to: "white", type: "linear" }}
            >
              Qurios about something ?
            </FancyText>
          ) : (
            <p>Qurios about something ?</p>
          )}
          <span className="block text-center font-medium">
            Feel free to reach out, we’re here to help !!
          </span>
        </h1>
      </div>
      <div className="mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 my-8 sm:mx-4">
        {data.map((e, i) => (
          <div
            key={i}
            className="cursor-pointer mt-6 flex items-center flex-col justify-center gap-6"
          >
            <img
              src={e.img}
              alt=""
              className="h-auto w-[60px] lg:w-[80px] max-h-[80px]"
            />
            <p className="text-center whitespace-nowrap">{e.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
