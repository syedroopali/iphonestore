import { IoMdHeartEmpty } from "react-icons/io";
import discountImg1 from "/public/discountImages/discountImg1.png";
import discountImg2 from "/public/discountImages/discountImg2.png";
import discountImg3 from "/public/discountImages/discountImg3.png";
import discountImg4 from "/public/discountImages/discountImg4.png";

export default function productData() {
  const productData = [
    {
      image: discountImg1,
      detail: "Apple iPhone 14 Pro 512GB Gold (MQ233)",
      price: "$900",
      icon: <IoMdHeartEmpty />,
    },
    {
      image: discountImg2,
      detail: "AirPods Max Silver",
      price: "$2535",
      icon: <IoMdHeartEmpty />,
    },
    {
      image: discountImg3,
      detail: "Apple Watch Series 9 GPS 41mm Starlight Aluminium Case",
      price: "$399",
      icon: <IoMdHeartEmpty />,
    },
    {
      image: discountImg4,
      detail: "Apple iPhone 14 Pro 1TB Gold (MQ2V3)",
      price: "$549",
      icon: <IoMdHeartEmpty />,
    },
  ];

  return productData;
}
