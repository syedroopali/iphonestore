import Image from "next/image";
import Link from "next/link";
import { FaTiktok, FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import footerLogo from "/public/footerLogo.png";

const linkDataServices = [
  {
    text: "bonus program",
    href: "/",
  },
  {
    text: "gift cards",
    href: "/",
  },
  {
    text: "credit and payment",
    href: "/",
  },
  {
    text: "service contacts",
    href: "/",
  },
  {
    text: "non-cash account",
    href: "/",
  },
  {
    text: "payment",
    href: "/",
  },
];

const linkDataAssistance = [
  {
    text: "find and order",
    href: "/",
  },
  {
    text: "terms of delivery",
    href: "/",
  },
  {
    text: "exchange and return of goods",
    href: "/",
  },
  {
    text: "gurantee",
    href: "/",
  },
  {
    text: "frequently asked questions",
    href: "/",
  },
  {
    text: "terms of use of the site",
    href: "/",
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#181313] px-8 py-12 max-w-[90rem] ">
      <div className="grid sm:grid-cols-1 md:grid-cols-3 items-center sm:items-start justify-items-center max-w-[70rem] mx-auto">
        <div className="mb-8">
          <div className="w-[4.09rem] mx-auto md:mx-0 mb-4">
            <Image src={footerLogo} placeholder="blur" alt="cyber logo" />
          </div>

          <p className="text-[0.8125rem] font-normal text-[#CFCFCF] text-center md:text-start leading-6 max-w-[28rem]">
            We are a residential interior design firm located in Portland. Our
            boutique-studio offers more than
          </p>
        </div>

        <div className="flex flex-col items-center md:items-start justify-center mb-8 gap-2">
          <h2 className="text-white text-base font-semibold capitalize ">
            services
          </h2>
          <ul className="flex flex-col capitalize text-[#CFCFCF] text-center md:text-start text-[0.875rem] font-normal">
            {linkDataServices.map((d) => (
              <FooterLink href={d.href} text={d.text} key={d.text} />
            ))}
          </ul>
        </div>
        <div className="flex flex-col items-center md:items-start justify-center gap-2 mb-8">
          <h2 className="text-white text-base font-semibold capitalize">
            Assistance to the buyer
          </h2>
          <ul className="flex flex-col capitalize text-[#CFCFCF] text-center md:text-start text-[0.875rem] font-normal">
            {linkDataAssistance.map((d) => (
              <FooterLink href={d.href} text={d.text} key={d.text} />
            ))}{" "}
          </ul>
        </div>
        <div className="md:w-full ">
          <div className="text-white text-2xl flex items-center md:items-start justify-between w-[10.81rem]">
            <FaTwitter />
            <FaFacebookF />
            <FaTiktok />
            <RiInstagramFill />
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ href, text }: { href: string; text: string }) {
  return (
    <li>
      <Link
        href={href}
        className="inline-block p-2 hover:text-white transition-all"
      >
        {text}
      </Link>
    </li>
  );
}
