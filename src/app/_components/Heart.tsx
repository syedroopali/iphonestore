"use client";
import { useState } from "react";
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";

export default function Heart() {
  const [clicked, setClicked] = useState(false);

  const handleClicked = function () {
    setClicked(!clicked);
  };

  return (
    <div className="text-inherit">
      {!clicked && (
        <IoMdHeartEmpty
          className="text-inherit cursor-pointer"
          onClick={handleClicked}
        />
      )}
      {clicked && (
        <IoMdHeart
          className="text-red-500 cursor-pointer"
          onClick={handleClicked}
        />
      )}
    </div>
  );
}
