import React from 'react';
import Link from "next/link";
import Image from "next/image";
import facebookIcon from "../../../public/facebook.svg";
import twitterIcon from "../../../public/twitter.svg";
import googleIcon from "../../../public/google.svg";

const Loginoption = () => {
  return (
    <div>
      <p className="mt-8 text-center text-xs">or Sign-in with</p>

<ul className="mt-4 flex justify-center">
  <li className="mx-1">
    <a
      href="#"
      className="hover:shadow-lg transform transition hover:-translate-y-1 w-10 h-10 flex justify-center items-center bg-[#DB4437] rounded-full"
    >
      <Image className="w-3 h-3 fill-white" priority src={googleIcon} alt="google" />
    </a>
  </li>
  <li className="mx-1">
    <a
      href="#"
      className="hover:shadow-lg transform transition hover:-translate-y-1 w-10 h-10 flex justify-center items-center bg-[#1DA1F2] rounded-full"
    >
      <Image className="w-3 h-3 fill-white" priority src={twitterIcon} alt="twitter" />
    </a>
  </li>
  <li className="mx-1">
    <a
      href="#"
      className="hover:shadow-lg transform transition hover:-translate-y-1 w-10 h-10 flex justify-center items-center bg-[#4267B2] rounded-full"
    >
      <Image className="w-3 h-3 fill-white" priority src={facebookIcon} alt="Facebook" />
    </a>
  </li>
</ul>
<p className="mt-8 text-center text-s">
  Don&apos;t have an account?{" "}
  <Link className="text-blue-700 underline" href="./signup">
    Sign up
  </Link>
</p>
    </div>
  )
}

export default Loginoption
