import productData from "../_lib/DiscountData";
import ProductCard from "./ProductCard";

export default function Discount() {
  const data = productData();
  return (
    <section className="p-4 mx-auto max-w-[70rem] mb-[5rem]">
      <h1 className="text-[1.5rem] font-medium mb-8">Discounts up to -50%</h1>

      <div className="grid grid-cols-2 items-center justify-items-center gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {data.map((d, i) => (
          <ProductCard
            id={d.id}
            key={i}
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
