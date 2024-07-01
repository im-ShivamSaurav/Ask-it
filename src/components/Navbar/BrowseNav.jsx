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
    <div className={ header?"h-[3rem] lg:h-auto bg-gradient-to-b from-black to-[#121212] flex lg:fixed z-20 max-w-[120rem] justify-between w-screen lg:px-36 px-1 pt-3  select-none items-center":"h-[3rem] lg:h-auto bg-gradient-to-b from-black to-[#121212] lg:to-transparent flex lg:fixed z-20 max-w-[120rem] justify-between w-screen lg:px-36 px-1 lg:py-5 py-2 select-none items-center"}>
      <Link href="/">
        <div className="flex items-center">
          <img className="w-6 lg:w-12" src={LOGO_URL} alt="logo of Think-it" />
          <h1 className="text-sm md:text-xl lg:text-2xl font-black">
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
