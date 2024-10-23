import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import Heart from "./Heart";

export default function ProductCard({
  image,
  detail,
  price,
  id,
}: {
  image: StaticImageData;
  detail: string;
  price: string | number[];
  id: number;
}) {
  return (
    <>
      <div className="bg-[#F6F6F6] h-[22rem] xl:h-[27rem] w-[10.28rem] sm:w-[12.2rem] md:w-[14.4rem] xl:w-[16.2rem] flex flex-col items-center justify-center px-2 xl:px-4 py-6 rounded-[0.5625rem] hover:shadow-sm hover:-translate-y-1 xl:hover:-translate-y-2 xl:hover:shadow-lg transition-all duration-300">
        <div className="ml-auto text-[2rem] xl:text-4xl text-[#909090] mb-2  cursor-pointer">
          <Heart />
        </div>

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

        <p className="text-2xl mt-3 mb-4 font-semibold">${price[0]} </p>
        <div>
          <Link
            href={`/products/${id}`}
            className="text-sm text-white py-4 xl:py-[0.9rem] px-10 xl:px-[4rem] bg-black rounded-lg  hover:text-[#ddd] transition-all"
          >
            Buy Now
          </Link>
        </div>
      </div>
    </>
  );
}
