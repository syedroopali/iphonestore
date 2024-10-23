import productData from "@/app/_lib/ProductData";
import Link from "next/link";
import ProductCard from "./ProductCard";

export default function Products() {
  const data = productData();
  return (
    <section className="mb-[3.5rem] max-w-[70rem] mx-auto">
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
            id={d.id}
            icon={d.icon}
          />
        ))}
      </div>
    </section>
  );
}
