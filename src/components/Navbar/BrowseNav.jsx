"use client";
import React, { useEffect, useState } from "react";
// import { ModeToggle } from "../ui/modetoggle";
import UserNav from "../UserNav/UserNav";
import Link from "next/link";
import { LOGO_URL } from "@/utils/constants";
import { useSelector } from "react-redux";
// import { TbLogin2 } from "react-icons/tb";

const BrowseNav = () => {
  const [header , setHeader] = useState(false);
  // const user = useSelector((store) => store.user);
  
  const scrollHeader = () => {
    if(window.scrollY >= 90){
      setHeader(true);
    }else{
      setHeader(false);
    }
  }

  useEffect(()=>{
    window.addEventListener('scroll', scrollHeader);

    return () => {
      window.addEventListener('scroll', scrollHeader);

    }
  },[]);

  return (
    <div className={ header?"bg-gradient-to-b to-black from-[#121212] flex fixed z-20 max-w-[120rem] justify-between w-screen px-36 pt-3  select-none ":"bg-gradient-to-b from-black flex fixed z-20 max-w-[120rem] justify-between w-screen px-36 py-5  select-none "}>
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
      
        <Link href="https://github.com/im-ShivamSaurav/Ask-it" target="_blank"><p className="w-auto h-auto font-bold text-xl text-transparent bg-clip-text bg-gradient-to-br gradient-radial from-blue-500 to-blue-900 hidden md:flex">OpenSource</p></Link>

        <UserNav />
      </div>
      </div>
  );
};

export default BrowseNav;
