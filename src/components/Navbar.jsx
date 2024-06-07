import React from "react";
import { ModeToggle } from "./modetoggle";
import Image from "next/image";
import { TbLogin2 } from "react-icons/tb";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex justify-between my-10 mx-2 md:mx-24 items-center">
      <Link href="./"><div className="flex items-center gap-1">
      <Image
          src="/logo.png"
          alt="logo of Think-it"
          width={30}
          height={30}
          priority
        />
        <h1 className="text-xl md:text-xl lg:text-xl font-black">
          <span className="text-transparent bg-clip-text bg-gradient-to-br gradient-radial from-blue-500 to-blue-900">
            Ask-it
          </span>
        </h1>
      </div>
      </Link>
      <div className="flex gap-2 md:gap-16 items-center">
        <p className="w-auto h-auto text-gray-800 font-bold dark:text-white hidden md:flex">OpenSource</p>
        <Link href="./login"><button className="w-32 h-9 text-white font-bold bg-gradient-to-br gradient-radial from-blue-500 to-blue-900 rounded-lg flex items-center justify-center gap-2 "><TbLogin2 className="bold font-extrabold text-xl"/>Log In</button>
        </Link>
        <div className=" items-center">
          <ModeToggle />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
