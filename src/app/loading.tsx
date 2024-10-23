import { CgSpinner } from "react-icons/cg";

export default function Loading() {
  return (
    <div className="flex items-center justify-center flex-col h-screen">
      <CgSpinner className="text-[8rem] text-[#909090] animate-spin" />
      <p className="text-3xl text-[#666] ">Loading Please Wait...</p>
    </div>
  );
}
