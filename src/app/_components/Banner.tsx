import Image from "next/image";
import bannerMobile from "/public/bannerMobile.png";

export default function Banner() {
  return (
    <section className="max-w-[70rem] mx-auto  ">
      <div className="w-[23.43rem] h-[32rem] relative">
        <Image
          src={bannerMobile}
          alt="banner"
          fill
          className="object-cover object-center"
        />
      </div>
    </section>
  );
}
