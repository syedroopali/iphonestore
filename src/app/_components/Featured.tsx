import Image from "next/image";
import featuredImg1 from "/public/featuredImg1.png";
import featuredImg2 from "/public/featuredImg2.png";
import featuredImg3 from "/public/featuredImg3.png";
import featuredImg4 from "/public/featuredImg4.png";

export default function Featured() {
  return (
    <>
      <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-[1fr_1fr_2fr] mb-16 ">
        {/* ////////////////////////////////////// */}
        <div className="xl:order-4">
          {/* ////////////////////////////////////// */}
          <div className="h-full flex md:basis-[23.43rem] items-center justify-center flex-col xl:flex-row py-[2.5rem] xl:py-0 bg-[#EDEDED] overflow-hidden">
            <div className=" flex flex-col items-center justify-center  mb-6 lg:mb-0">
              <Image
                src={featuredImg4}
                alt="featuredImg4"
                className="w-48 xl:w-auto xl:h-[17rem] xl:-translate-x-52"
              />
            </div>
            <div className="flex items-center xl:items-start justify-center flex-col max-w-lg xl:-ml-40 xl:w-36">
              <h2 className="text-[2.125rem] xl:text-[1.813rem] xl:leading-10 font-light mb-2">
                Apple AirPods <strong className="font-medium mb-2">Max</strong>
              </h2>
              <p className="text-[#909090] text-base xl:text-sm xl:leading-6">
                Computational audio. Listen, it&apos;s powerful
              </p>
            </div>
          </div>
        </div>

        {/* ////////////////////////////////////// */}
        <div className="xl:order-5">
          {/* ////////////////////////////////////// */}
          <div className="h-full flex md:basis-[23.43rem] items-center justify-center flex-col xl:flex-row py-[2.5rem] xl:py-0 bg-[#353535] overflow-hidden">
            <div className="w-[20.31rem] flex flex-col items-center justify-center  mb-6 xl:mb-0 ">
              <Image
                src={featuredImg3}
                alt="featuredImg3"
                className="xl:-translate-x-52"
              />
            </div>
            <div className="flex items-center xl:items-start justify-center flex-col max-w-lg xl:-ml-48 xl:w-36">
              <h2 className="text-white text-[2.125rem] xl:text-[1.813rem] xl:leading-10 font-light mb-2">
                Apple Vision <strong className="font-medium mb-2">Pro</strong>
              </h2>
              <p className="text-[#909090] text-base xl:text-sm xl:leading-6">
                An immersive way to experience entertainment
              </p>
            </div>
          </div>
        </div>
        {/* ////////////////////////////////////// */}
        <div className="md:col-span-2 md:-order-1">
          {/* ////////////////////////////////////// */}

          <div className="flex md:basis-[23.43rem] xl:h-[20.5rem] items-center justify-center flex-col lg:flex-row py-[2.5rem] xl:py-0 bg-[#fff] overflow-hidden">
            <div className=" flex flex-col items-center justify-center  mb-6 lg:mb-0">
              <Image
                src={featuredImg2}
                alt="featuredImg3"
                className=" w-[12rem] lg:w-[14rem]  xl:w-[49rem] xl:translate-y-1 xl:-translate-x-24"
              />
            </div>

            <div className="flex items-center xl:items-start justify-center flex-col max-w-lg xl:-ml-20 xl:p-4">
              <h2 className="text-[2.125rem] font-light text-black lg:text-[2.5rem] lg:mb-2 xl:text-[3.06rem] xl:font-medium ">
                Playstation <strong className="font-medium">5</strong>
              </h2>
              <p className="text-[#909090] font-base xl:text-[0.875rem] xl:font-medium text-center xl:text-start px-4 xl:px-0 lg:mb-6">
                Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O
                will redefine your PlayStation experience.
              </p>
            </div>
          </div>
        </div>
        {/* ////////////////////////////////////// */}
        <div className="h-full md:col-span-2 xl:col-auto xl:row-span-2 xl:order-3 ">
          {/* ////////////////////////////////////// */}

          <div className="h-full flex items-center justify-center flex-col lg:flex-row-reverse py-[2.5rem] xl:py-0 bg-[#EDEDED] overflow-hidden">
            <div className="flex flex-col items-center justify-center mb-4 lg:mb-0 xl:-mr-96">
              <Image
                src={featuredImg1}
                alt="featuredImg3"
                className="w-[16.9375rem] lg:w-[35rem] lg:h-[20rem] xl:h-[35.75rem] xl:w-[70rem] "
              />
            </div>
            <div className="flex items-center xl:items-start justify-center flex-col max-w-[22rem] xl:ml-14">
              <h2 className="text-[2.125rem] lg:text-[2.5rem] xl:text-[4rem]  lg:mb-2 font-light text-black">
                <strong className="font-medium xl:font-thin">Macbook </strong>
                Air
              </h2>
              <p className="text-[#909090] font-base xl:text-[0.875rem] xl:leading-[1.5rem] text-center xl:text-start px-4 xl:px-0 mb-4 lg:mb-6">
                The new 15‑inch MacBook Air makes room for more of what you love
                with a spacious Liquid Retina display.
              </p>
              <button className="text-base w-[21.44rem] lg:w-[11.93rem] lg:h-[3.5rem] font-medium rounded-md border-2 py-3 border-black flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300">
                Shop Now
              </button>
            </div>
          </div>
          {/* ////////////////////////////////////// */}
        </div>
      </section>
    </>
  );
}
