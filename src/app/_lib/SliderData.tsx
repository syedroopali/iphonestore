import sliderImg1 from "/public/sliderImages/sliderImg1.png";
import sliderImg2 from "/public/sliderImages/sliderImg2.png";
import sliderImg3 from "/public/sliderImages/sliderImg3.png";
import sliderImg4 from "/public/sliderImages/sliderImg4.png";

export default function SliderData() {
  const data = [
    {
      title: "popularProducts",
      description:
        "iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.",
      img: sliderImg4,
      color: "bg-[#F9F9F9]",
      textColor: "text-black",
      border: "border-black",
      translate: "-translate-x-[0]",
    },
    {
      title: "ipad pro",
      description:
        "iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.",
      img: sliderImg1,
      color: "bg-[#F9F9F9]",
      textColor: "text-black",
      border: "border-black",
      translate: "-translate-x-[100%]",
    },
    {
      title: "SamsungGalaxy",
      description:
        "iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.",
      img: sliderImg2,
      color: "bg-[#EAEAEA]",
      textColor: "text-black",
      border: "border-black",
      translate: "-translate-x-[200%]",
    },
    {
      title: "Macbook Pro",
      description:
        "iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.",
      img: sliderImg3,
      color: "bg-[#2C2C2C]",
      textColor: "text-white",
      border: "border-white",
      translate: "-translate-x-[300%]",
    },
  ];

  return data;
}
