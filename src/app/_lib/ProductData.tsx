import product1 from "/public/productImages/product1.png";
import product2 from "/public/productImages/product2.png";
import product3 from "/public/productImages/product3.png";
import product4 from "/public/productImages/product4.png";
import product5 from "/public/productImages/product5.png";
import product6 from "/public/productImages/product6.png";
import product7 from "/public/productImages/product7.png";
import product8 from "/public/productImages/product8.png";

export default function prouductData() {
  const productData = [
    {
      id: 0,
      image: product1,
      title: "Apple iPhone 14 Pro Max",
      detail: "Apple iPhone 14 Pro Max 128GB Deep Purple (MQ9T3RX/A)",
      price: [900, 850],
      colors: [
        "bg-[#ef4444]",
        "bg-[#facc15]",
        "bg-[#4ade80]",
        "bg-[#3b82f6]",
        "bg-[#efaccd]",]
      colors: [
        "bg-[#ef4444]",
        "bg-[#facc15]",
        "bg-[#4ade80]",
        "bg-[#3b82f6]",
        "bg-[#efaccd]",
      ],
      memory: ["128GB", "256GB", "512GB", "1TB"],
      specifications: [
        ["Screen size", "6.7"],
        ["CPU", "apple a16 bionic"],
        ["Number of cores", "6"],
        ["Main camera", "48-12-12 MP"],
        ["Front camera", "12mp"],
        ["Battery capacity", "4323 mAh"],
        ["Screen resolution", "2796x1290"],
        ["Screen refresh rate", "120 Hz"],
        ["Pixel density", "460 ppi"],
        ["Screen type", "OLED"],
        [
          "Additionally",
          [
            "dynamic islan",
            "always on display",
            "HDR display",
            "ture tone",
            "wide color (p3)",
          ],
        ],
      ],
      description:
        "Enhanced capabilities thanks toan enlarged display of 6.7 inchesand work without rechargingthroughout the day. Incredible photosas in weak, yesand in bright lightusing the new systemwith two cameras",
      reviews: {
        excellent: 249,
        good: 150,
        average: 200,
        belowAverage: 100,
        poor: 5,
      },
      category: "smart phone",
    },
    {
      id: 1,
      image: product2,
      detail: "Blackmagic Pocket Cinema Camera 6k",
      price: [900, 800],
      colors: [
        "bg-[#ef4444]",
        "bg-[#facc15]",
        "bg-[#4ade80]",
        "bg-[#3b82f6]",
        "bg-[#efaccd]",]
    },
    {
      id: 2,
      image: product3,
      detail: "Apple Watch Series 9 GPS 41mm Starlight Aluminium Case",
      price: [1000, 950],
      colors: [
        "bg-[#ef4444]",
        "bg-[#facc15]",
        "bg-[#4ade80]",
        "bg-[#3b82f6]",
        "bg-[#efaccd]",0
    },
    {
      id: 3,
      image: product4,
      detail: "AirPods Max Silver",
      price: [750, 600],
      colors: [
        "bg-[#ef4444]",
        "bg-[#facc15]",
        "bg-[#4ade80]",
        "bg-[#3b82f6]",
        "bg-[#efaccd]",]
    },
    {
      id: 4,
      image: product5,
      detail: "Samsung Galaxy Watch6 Classic 47mm Black",
      price: [900, 850],
      colors: [
        "bg-[#ef4444]",
        "bg-[#facc15]",
        "bg-[#4ade80]",
        "bg-[#3b82f6]",
        "bg-[#efaccd]",]
    },
    {
      id: 5,
      image: product6,
      detail: "Galaxy Z Fold5 Unlocked | 256GB | Phantom Black",
      price: [900, 850],
      colors: [
        "bg-[#ef4444]",
        "bg-[#facc15]",
        "bg-[#4ade80]",
        "bg-[#3b82f6]",
        "bg-[#efaccd]",]
    },
    {
      id: 6,
      image: product7,
      detail: "Galaxy Buds FEGraphite",
      price: [900],
      colors: [
        "bg-[#ef4444]",
        "bg-[#facc15]",
        "bg-[#4ade80]",
        "bg-[#3b82f6]",
        "bg-[#efacc,d]",
    },
    {
      id: 7,
      image: product8,
      detail: "Apple iPad 9 10.2 64GB Wi-Fi Silver (MK2L3) 2021",
      price: [500],
      colors: [
        "bg-[#ef4444]",
        "bg-[#facc15]",
        "bg-[#4ade80]",
        "bg-[#3b82f6]",
        "bg-[#efacc,d]",
    },
  ];

  return productData;
}
