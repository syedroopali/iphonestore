"use client";

import Image, { StaticImageData } from "next/image";
import dots from "/public/dots.png";
import SliderData from "../_lib/SliderData";
import { useState } from "react";

export default function Slider() {
  const data = SliderData();
  const [sliderIndex, setSliderIndex] = useState(0);

  const translate = [
    "-translate-x-[0]",
    "-translate-x-[100%]",
    "-translate-x-[200%]",
    "-translate-x-[300%]",
  ];

  const handleIndex = function () {
    if (sliderIndex < data.length - 1) {
      setSliderIndex(sliderIndex + 1);
    } else {
      setSliderIndex(0);
    }
  };

  setInterval(() => handleIndex(), 3000);

  return (
    <section className={`mb-[7rem]`}>
      <div className="flex overflow-hidden w-[21rem] mx-auto ">
        {data.map((d) => (
          <div
            className={`${d.color} ${translate[sliderIndex]} transition-all duration-500`}
          >
            {/* //////////////////////////////////// */}
            <div
              className={`flex items-center justify-center mx-auto w-[21rem] h-[20.7rem] `}
            >
              <Image
                src={d.img}
                alt="image"
                className="transition-all duration-300"
                placeholder="blur"
              />
            </div>
            <div className="flex flex-col items-center justify-center px-8">
              <h2
                className={`${d.textColor} text-[2.2rem] font-light capitalize mb-1`}
              >
                {d.title}
              </h2>
              <p className="text-[0.875rem] font-medium text-[#909090] capitalize text-center mb-3">
                {d.description}{" "}
              </p>
              <button
                className={`${d.textColor} ${d.border} border-2  rounded-md px-[3.5rem] py-[1rem] text-base font-medium capitalize hover:bg-black hover:text-white transition-all mb-12`}
              >
                shop now
              </button>
              <Image src={dots} alt="slider dots" className="w-[3.69rem] " />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
