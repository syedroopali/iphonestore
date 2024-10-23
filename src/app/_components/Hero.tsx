import Image from "next/image";
import iphone from "/public/iphone.png";

export default function Hero() {
  return (
    <section className="w-full h-[48.1rem] lg:h-[39.5rem] bg-gradient-to-r from-[#211C24] to-[#211C24]  pt-[5.5rem] lg:pt-0 ">
      <div className="max-w-[70rem] grid lg:grid-cols-2 items-center justify-items- overflow-hidden mx-auto">
        {/* /////////////////// text //////////////////////////////// */}
        <div className="flex items-center lg:items-start justify-center flex-col lg:justify-self-start">
          <p className="text-[1.563rem] font-semibold text-white opacity-40 capitalize mb-4">
            pro.beyond.
          </p>
          <h1 className="text-7xl lg:text-[5.5rem] xl:text-[6rem] font-thin capitalize text-white text-center tracking-tighter mb-4">
            IPhone 14
            <strong className="font-semibold capitalize"> pro</strong>
          </h1>
          <p className="font-medium text-[#909090] text-center lg:text-start text-base  mb-8 ">
            Created to change everything for the better. For everyone
          </p>
          <button className="capitalize font-medium text-base text-white rounded-md border border-white px-[3.2rem] py-4 hover:bg-white hover:text-black transition-all duration-300">
            shop now
          </button>
        </div>
        {/* ////////////////////////////image///////////////////////// */}
        <div className=" w-full px-4 lg:px-0 -mt-2 lg:-mt-0 flex justify-center">
          <Image
            src={iphone}
            alt="iphone 14 image"
            placeholder="blur"
            className="w-[21.44rem] lg:w-[25.375rem] lg:ml-36"
          />
        </div>
      </div>
    </section>
  );
}
