import Banner from "@/app/_components/Banner";
import Category from "@/app/_components/Category";
import Discount from "@/app/_components/Discount";
import Featured from "@/app/_components/Featured";
import Hero from "@/app/_components/Hero";
import Products from "@/app/_components/Products";
import Slider from "@/app/_components/Slider";
import Heart from "./_components/Heart";

export default function Page() {
  return (
    <>
      <Hero />
      <Featured />
      <Category />
      <Products />
      <Slider />
      <Discount />
      <Banner />
      <Heart />
    </>
  );
}
