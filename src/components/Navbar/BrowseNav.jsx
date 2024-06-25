"use client";
import React from "react";
// import { ModeToggle } from "../ui/modetoggle";
import UserNav from "../UserNav/UserNav";
import Link from "next/link";
import { LOGO_URL } from "@/utils/constants";
import { useSelector } from "react-redux";
// import { TbLogin2 } from "react-icons/tb";

const BrowseNav = () => {
  const user = useSelector((store) => store.user);
  return (
    <div className="flex fixed z-20 max-w-[120rem] justify-between w-screen px-36 py-5 bg-gradient-to-b from-black select-none">
      <Link href="./">
        <div className="flex items-center">
          <img className="w-12" src={LOGO_URL} alt="logo of Think-it" />
          <h1 className="text-xl md:text-xl lg:text-2xl font-black">
            <span className="text-transparent bg-clip-text bg-gradient-to-br gradient-radial from-blue-500 to-blue-900">
              Ask-it
            </span>
          </h1>
        </div>
      </Link>
      
      <div className="relative flex gap-2 md:gap-10 items-center">
      
        <p className="w-auto h-auto text-gray-800 font-bold dark:text-white hidden md:flex">OpenSource</p>


      <div className="">
        <UserNav />
      </div>
      </div>
    </div>
  );
};

export default BrowseNav;
