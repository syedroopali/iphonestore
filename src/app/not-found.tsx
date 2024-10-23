import Link from "next/link";

export default function NotFount() {
  return (
    <div className="h-[85vh] flex items-center justify-center flex-col">
      <p className="text-4xl lg:text-6xl mb-6 lg:mb-8 font-semibold capitalize text-center text-[#525252] ">
        Page not found
      </p>
      <Link
        href={"/"}
        className="px-4 py-2 lg:px-6 lg:py-3 bg-black rounded-lg font-medium text-white text-lg lg:text-2xl border-2 border-black hover:border-black hover:text-black hover:bg-white transition-all duration-200"
      >
        Back to Home
      </Link>
    </div>
  );
}
