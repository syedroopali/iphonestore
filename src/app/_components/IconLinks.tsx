import Link from "next/link";
import { GoHeart } from "react-icons/go";
import { IoCartOutline } from "react-icons/io5";
import { RxPerson } from "react-icons/rx";

export default function IconLinks() {
  return (
    <ul className="hidden md:flex md:items-center md:justify-between w-36 h-8 p-2">
      <li>
        <Link href="/" className="">
          <GoHeart className="text-[1.5rem] hover:-translate-y-[0.125rem] transition-all duration-200" />
        </Link>
      </li>
      <li>
        <Link href="/">
          <IoCartOutline className="text-[1.5rem] hover:-translate-y-[0.125rem] transition-all" />
        </Link>
      </li>
      <li>
        <Link href="/">
          <RxPerson className="text-[1.5rem] hover:-translate-y-[0.125rem] transition-all" />
        </Link>
      </li>
    </ul>
  );
}
