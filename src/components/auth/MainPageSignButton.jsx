"use client";
import Link from "next/link";
import React from "react";
import { TbLogin2 } from "react-icons/tb";
import { useSelector } from "react-redux";

const MainPageSignButton = () => {
  const user = useSelector((store) => store.user);
  return (
    <div>
      {!user && (
        <div className="flex gap-2 md:gap-6 mt-0">
          <Link href="./login">
            <button className="w-44 h-12 p-6 text-lg text-white font-bold bg-gradient-to-br gradient-radial from-blue-500 to-blue-900 rounded-lg flex items-center justify-center gap-2 ">
              <TbLogin2 className="bold font-extrabold text-xl" />
              Log In
            </button>
          </Link>
          <Link href="./signup">
            <button className="w-44 h-12 p-6 text-lg text-white font-bold bg-gradient-to-br gradient-radial from-[#09C090] to-[#09C09099] rounded-lg flex items-center justify-center gap-2 ">
              <TbLogin2 className="bold font-extrabold text-xl" />
              Sign Up
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default MainPageSignButton;
