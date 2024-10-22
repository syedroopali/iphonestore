import Image from "next/image";
import logo from "/public/logo.png";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href={"/"} className="w-[4.087rem] h-[1.43rem]">
      <Image src={logo} alt="logo of cyber" placeholder="blur" />
    </Link>
  );
}
