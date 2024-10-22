import product1 from "/public/productImages/product1.png";
import product2 from "/public/productImages/product2.png";
import product3 from "/public/productImages/product3.png";
import product4 from "/public/productImages/product4.png";
import product5 from "/public/productImages/product5.png";
import product6 from "/public/productImages/product6.png";
import product7 from "/public/productImages/product7.png";
import product8 from "/public/productImages/product8.png";
import { IoMdHeartEmpty } from "react-icons/io";

export default function () {
  const productData = [
    {
      image: product1,
      detail: "Apple iPhone 14 Pro Max 128GB Deep Purple (MQ9T3RX/A)",
      price: "$900",
      icon: <IoMdHeartEmpty />,
    },
    {
      image: product2,
      detail: "Blackmagic Pocket Cinema Camera 6k",
      price: "$2535",
      icon: <IoMdHeartEmpty />,
    },
    {
      image: product3,
      detail: "Apple Watch Series 9 GPS 41mm Starlight Aluminium Case",
      price: "$399",
      icon: <IoMdHeartEmpty />,
    },
    {
      image: product4,
      detail: "AirPods Max Silver",
      price: "$549",
      icon: <IoMdHeartEmpty />,
    },
    {
      image: product5,
      detail: "Samsung Galaxy Watch6 Classic 47mm Black",
      price: "$369",
      icon: <IoMdHeartEmpty />,
    },
    {
      image: product6,
      detail: "Galaxy Z Fold5 Unlocked | 256GB | Phantom Black",
      price: "$1799",
      icon: <IoMdHeartEmpty />,
    },
    {
      image: product7,
      detail: "Galaxy Buds FEGraphite",
      price: "$99.99",
      icon: <IoMdHeartEmpty />,
    },
    {
      image: product8,
      detail: "Apple iPad 9 10.2 64GB Wi-Fi Silver (MK2L3) 2021",
      price: "$398",
      icon: <IoMdHeartEmpty />,
    },
  ];

  return productData;
}
