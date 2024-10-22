"use client";

import Image from "next/image";
import sliderImg1 from "/public/sliderImages/sliderImg1.png";
import sliderImg2 from "/public/sliderImages/sliderImg2.png";
import sliderImg3 from "/public/sliderImages/sliderImg3.png";
import { useState } from "react";

export default function Slider() {
  const images = [sliderImg1, sliderImg2, sliderImg3];
  const [sliderIndex, setSliderIndex] = useState(0);

  const handleSlider = function () {
    if (sliderIndex < images.length - 1) {
      setSliderIndex(sliderIndex + 1);
    } else {
      setSliderIndex(0);
    }
  };

  setInterval(() => handleSlider(), 2000);

  return (
    <section>
      <div className="flex items-center justify-center mx-auto w-[20.06rem] h-[20.7rem] ">
        <Image
          src={images[sliderIndex]}
          alt="image"
          className="transition-all duration-300"
        />
      </div>
    </section>
  );
}
