import productData from "@/app/_lib/ProductData";
import Image from "next/image";

export async function generateMetadata({
  params,
}: {
  params: { productid: string };
}) {
  const product = productData();
  const title = product[Number(params.productid)];
  return title;
}

export default function Page({ params }: { params: { productid: string } }) {
  const product = productData();
  const { image, title, price, colors, memory, specifications, description } =
    product[Number(params.productid)];
  return (
    <div className="w-full md:my-8">
      <div className="w-[21.3125rem] md:w-full md:max-w-[70rem] grid md:grid-cols-2 items-center justify-items-center  mx-auto">
        <div className="mb-8 md:mb-0">
          <Image
            src={image}
            alt="product image"
            className="w-[16.44rem] md:w-[28rem] "
          />
        </div>

        <div className="mb-4 flex flex-col md:mb-0">
          <div className="flex gap-6 items-center mb-6">
            <p className="text-[#0C0C0C] font-normal">Select color: </p>
            <ul className="flex gap-3">
              {colors?.map((color) => (
                <li key={color}>
                  <button
                    className={`rounded-full w-8 h-8 ${color} cursor-pointer text-transparent`}
                    key={color}
                  >
                    .
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="mb-6">
            <ul className="flex items-center justify-between md:gap-2">
              {memory?.map((mem) => (
                <li
                  key={mem}
                  className="text-[0.875rem] font-medium text-[#D5D5D5] hover:text-black transition-all border-2 border-[#d5d5d5] hover:border-black w-[4.89rem] md:w-full py-3 rounded-lg flex items-center justify-center"
                >
                  {mem}
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-6">
            <ul className="flex items-center justify-between flex-wrap gap-y-4">
              {specifications?.slice(0, 6).map((spec, i) => (
                <li
                  key={i}
                  className="w-[10.4rem] h-[4rem] bg-[#F4F4F4] rounded-[0.44rem]  flex items-center "
                >
                  <div className="px-[0.68rem] text-xl text-[#4E4E4E] ">#</div>
                  <div className="leading-4">
                    <p className="text-[0.875rem] font-normal text-[#C4C4C4] ">
                      {spec[0]}
                    </p>
                    <p className="text-[#4E4E4E] text-[0.875rem] ">{spec[1]}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-4">
            <p className="text-[#6C6C6C] text-[0.875rem] leading-6 font-normal tracking-wide ">
              {description}
            </p>
          </div>

          <div className="md:-order-1">
            <h1 className="font-bold text-4xl mb-6">{title}</h1>
            <p className="text-[2rem] font-medium flex items-center gap-x-4 mb-4">
              ${price[1] ? price[1] : price[0]}{" "}
              <s className="text-[#A0A0A0] text-[1.5rem] ">
                {" "}
                {price[1] ? `$${price[0]}` : ""}
              </s>
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <button className="w-full py-4 border-2 border-black text-black text-base font-medium rounded-md hover:bg-black hover:text-white hover:border-white transition-all">
              Add to Wish List
            </button>
            <button className="w-full py-4 border-2 border-white text-white bg-black text-base font-medium rounded-md hover:text-black hover:bg-white hover:border-black transition-all">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
