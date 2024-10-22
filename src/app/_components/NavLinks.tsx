import Link from "next/link";
import { RiMenuFill } from "react-icons/ri";

const links = [
  {
    text: "home",
    href: "/",
  },
  {
    text: "about",
    href: "/",
  },
  {
    text: "contact us",
    href: "/",
  },
  {
    text: "blog",
    href: "/",
  },
];

export default function NavLinks() {
  return (
    <>
      <div className="sm:hidden flex items-center justify-center">
        <RiMenuFill className="text-[#080341] text-[1.6rem]  " />
      </div>
      <ul className="hidden sm:flex sm:items-center sm:justify-between w-[23.06rem] h-[1.2rem] ">
        {links.map((link) => (
          <NavLink href={link.href} text={link.text} key={link.text} />
        ))}
      </ul>
    </>
  );
}

function NavLink({ href, text }: { text: string; href: string }) {
  return (
    <li>
      <Link
        href={href}
        className="text-base text-black opacity-40 capitalize 
        hover:opacity-100 font-medium transition-all duration-200"
      >
        {text}
      </Link>
    </li>
  );
}
