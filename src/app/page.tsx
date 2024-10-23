import Hero from "@/app/_components/Hero";
import Featured from "@/app/_components/Featured";
import Category from "@/app/_components/Category";
import Products from "@/app/_components/Products";
import Slider from "@/app/_components/Slider";
import Discount from "@/app/_components/Discount";
import Banner from "@/app/_components/Banner";
import Footer from "@/app/_components/Footer";

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
      <Footer />
    </>
  );
}
