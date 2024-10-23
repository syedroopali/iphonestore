import Image from "next/image";
import bannerMobile from "/public/bannerMobile.png";
import bannerDesktop from "/public/bannerDesktop.png";

export default function Banner() {
  return (
    <section className="max-w-[90rem] max-h-[28rem] relative">
      <div className="sm:hidden w-full h-[23.44rem]">
        <Image src={bannerMobile} alt="banner" className="h-[23.44rem] " />
      </div>
      <div className="hidden sm:block">
        <Image src={bannerDesktop} alt="banner" />
      </div>
      <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] w-full text-center ">
        <h2 className="text-[3rem] xl:text-7xl font-thin text-white">
          Big Summer <strong className="font-medium">Sale</strong>
        </h2>
        <p className="text-base font-medium text-[#787878] mb-10">
          Commodo fames vitae vitae leo mauris in. Eu consequat.
        </p>
        <button className="text-base text-white font-medium py-4 px-14 border-2 border-white rounded-md hover:bg-white hover:text-black hover:border-black transition-all duration-200">
          Shop Now
        </button>
      </div>
    </section>
  );
}
