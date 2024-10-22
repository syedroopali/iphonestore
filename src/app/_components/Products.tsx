import Link from "next/link";
import productData from "@/app/_lib/ProductData";
import Image, { StaticImageData } from "next/image";
import { ReactElement } from "react";

export default function Products() {
  const data = productData();
  return (
    <section className="mb-[7rem] max-w-[70rem] mx-auto">
      <div className="flex items-center justify-center gap-6 sm:gap-8 w-[23rem] sm:w-[24.5rem] mx-auto md:mx-2 mb-8">
        <Link
          href={"/"}
          className="text-base font-medium text-[#8B8B8B] border-b-2 border-transparent  hover:border-black transition-all py-1"
        >
          New Arrival
        </Link>
        <Link
          href={"/"}
          className="text-base font-medium text-[#8B8B8B] border-b-2 border-transparent  hover:border-black transition-all py-1 "
        >
          Best Seller
        </Link>
        <Link
          href={"/"}
          className="text-base font-medium text-[#8B8B8B] border-b-2 border-transparent  hover:border-black transition-all py-1 "
        >
          Featured Porducts
        </Link>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 px-1 gap-x-1 gap-y-4 xl:gap-y-8 xl:gap-x-1 items-center justify-items-center ">
        {data.map((d) => (
          <ProductCard
            key={d.detail}
            image={d.image}
            detail={d.detail}
            price={d.price}
            icon={d.icon}
          />
        ))}
      </div>
    </section>
  );
}

function ProductCard({
  image,
  detail,
  price,
  icon,
}: {
  image: StaticImageData;
  detail: string;
  price: string;
  icon: ReactElement;
}) {
  return (
    <>
      <div className="bg-[#F6F6F6] h-[22rem] xl:h-[27rem] w-[10.28rem] sm:w-[12.2rem] md:w-[14.4rem] xl:w-[16.2rem] flex flex-col items-center justify-center px-2 xl:px-4 py-6 rounded-[0.5625rem] hover:shadow-sm hover:-translate-y-1 xl:hover:-translate-y-2 xl:hover:shadow-lg transition-all duration-300">
        <button className="ml-auto text-[2rem] xl:text-4xl text-[#909090] mb-2  cursor-pointer">
          {icon}
        </button>

        <div className="mb-2 xl:mb-3">
          <Image
            placeholder="blur"
            src={image}
            alt=""
            className="w-[6.5rem] xl:w-[10rem]"
          />
        </div>
        <div className="overflow-hidden h-12">
          <h3 className="text-base font-medium leading-6 -tracking-wide text-center">
            {detail}
          </h3>
        </div>

        <p className="text-2xl mt-3 mb-2 font-semibold">{price} </p>
        <div>
          <button className="text-sm text-white py-4 xl:py-[0.9rem] px-10 xl:px-[4rem] bg-black rounded-lg  hover:text-[#ddd] transition-all">
            Buy Now
          </button>
        </div>
      </div>
    </>
  );
}
