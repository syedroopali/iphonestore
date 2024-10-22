import Image from "next/image";
import iphone from "/public/iphone.png";

export default function Hero() {
  return (
    <section className="w-full h-[48.1rem] lg:h-[39.5rem] bg-gradient-to-r from-[#211C24] to-[#211C24] grid lg:grid-cols-2 items-center justify-items-center px-4 pt-[5.5rem] lg:pt-0 overflow-hidden">
      <div className="flex items-center lg:items-start justify-center flex-col lg:justify-self-end">
        <p className="text-[1.563rem] font-semibold text-white opacity-50 capitalize mb-4">
          pro.beyond.
        </p>
        <h1 className="text-7xl lg:text-[5rem] font-[100] capitalize text-white text-center tracking-tighter mb-4">
          IPhone 14
          <strong className="font-semibold capitalize"> pro</strong>
        </h1>
        <p className="font-medium text-[#909090] text-center lg:text-start text-[1.13rem]  mb-8 ">
          Created to change everything for the better. For everyone
        </p>
        <button className="capitalize font-medium text-base text-white rounded-md border border-white px-14 py-4 hover:bg-white hover:text-black transition-all duration-300">
          shop now
        </button>
      </div>

      <div className="w-[21.44rem] lg:w-[25.375rem] px-4 lg:px-0 -mt-2 lg:-mt-0">
        <Image src={iphone} alt="iphone 14 image" placeholder="blur" />
      </div>
    </section>
  );
}
