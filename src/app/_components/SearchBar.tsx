import { IoSearchOutline } from "react-icons/io5";

export default function SearchBar() {
  return (
    <div className="hidden lg:flex items-center gap-2 w-[22.3rem] bg-[#F5F5F5] rounded-lg h-[3.5rem] px-4">
      <IoSearchOutline className="text-[1.5rem] text-[#989898] hover:text-[#545454] transition-all cursor-pointer  " />
      <input
        type="text"
        placeholder="Search"
        className=" bg-inherit flex-1 placeholder:text-[#656565] placeholder:opacity-60 placeholder:text-[0.875rem] placeholder:font-medium text-xl outline-none transition-all text-gray-600 border-b border-transparent focus:border-b-[#888] py-1"
      />
    </div>
  );
}
