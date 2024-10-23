import { CiMobile4 } from "react-icons/ci";
import { FiCamera } from "react-icons/fi";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { IoWatchOutline } from "react-icons/io5";
import { LuHeadphones } from "react-icons/lu";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import { TbDeviceGamepad } from "react-icons/tb";

import Link from "next/link";
import { ReactElement } from "react";

const categoryData = [
  {
    text: "phones",
    icon: <CiMobile4 />,
    href: "/",
  },
  {
    text: "smart watches",
    icon: <IoWatchOutline />,
    href: "/",
  },
  {
    text: "cameras",
    icon: <FiCamera />,
    href: "/",
  },
  {
    text: "headphones",
    icon: <LuHeadphones />,
    href: "/",
  },
  {
    text: "computers",
    icon: <HiOutlineDesktopComputer />,
    href: "/",
  },
  {
    text: "gaming",
    icon: <TbDeviceGamepad />,
    href: "/",
  },
];

export default function Category() {
  return (
    <section className="mb-[3.5rem] max-w-[90rem] lg:h-[22rem] bg-[#FAFAFA] flex items-center justify-center py-[2rem] 2xl:py-0 ">
      <div className="lg:w-[70rem]">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-2xl font-medium">Browse By Category </h2>

          <div className="flex items-center gap-4">
            <Link href="#">
              <MdArrowBackIosNew className="text-2xl" />
            </Link>
            <Link href="#">
              <MdArrowForwardIos className="text-2xl" />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-2 items-center justify-items-center gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
          {categoryData.map((cat) => (
            <CategoryCard
              text={cat.text}
              icon={cat.icon}
              href={cat.href}
              key={cat.text}
            />
          ))}{" "}
        </div>
      </div>
    </section>
  );
}

function CategoryCard({
  text,
  icon,
  href,
}: {
  text: string;
  icon: ReactElement;
  href: string;
}) {
  return (
    <>
      <Link
        href={href}
        className="bg-[#EDEDED] w-[10.22rem] md:w-[10rem] h-[8rem] rounded-[0.94rem] flex items-center justify-center flex-col gap-2 hover:bg-[#dddddd] transition-all duration-200 hover:shadow-sm"
      >
        <div className="text-[2.5rem]">{icon} </div>

        <h3 className="text-base font-medium ">{text}</h3>
      </Link>
    </>
  );
}
