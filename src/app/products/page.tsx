import ProductCard from "../_components/ProductCard";
import productData from "../_lib/ProductData";
export default function Products() {
  const products = productData();

  return (
    <div className="flex items-center justify-between gap-4 flex-wrap">
      {products.map((product, i) => (
        <ProductCard
          key={i}
          image={product.image}
          price={product.price}
          detail={product.detail}
          id={product.id}
        />
      ))}
    </div>
  );
}
