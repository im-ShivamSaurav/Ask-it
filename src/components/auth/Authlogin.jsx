"use client"
import React from 'react'
import Loginoption from './Loginoption.jsx';
import Lock from '../svg/Lock';
import Atrate from '../svg/Atrate';

const Authlogin = () => {
  return (
    <div className="fixed top-40 left-1/2 translate-x-[-50%] ">

    <form noValidate className=" [ p-8 md:p-10 lg:p-10 ] glassmorphism dark:glassmorphism-dark">
      <h3 className="text-md dark:text-[#fff]/80 mb-1">Sign-in Required!</h3>
      <h1 className="text-xl md:text-2xl lg:text-2xl mb-6 uppercase font-bold">
        Login to <span className="touch-pan-up">Ask-it</span>
      </h1>
      <p className="mb-6 text-sm dark:text-[#fff]/60 text-opacity-50">
        Enter a valid email &amp; password in the fields below to get
        started.
      </p>
     
      <label className="relative dark:text-[#fff]/50 focus-within:text-[#fff]/70 block mb-4 ">
      <Atrate/>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          className="form-input transition-colors duration-200 py-3 pr-3 md:py-4 md:pr-4 lg:py-4 lg:pr-4 w-full text-black dark:bg-[#fff]/10 dark:text-white dark:focus:bg-[#fff]/20  focus:shadow-sm focus:outline-none leading-none placeholder-gray-700 dark:placeholder-gray-400 appearance-none block pl-12  rounded-lg "
        ></input>
      </label>

      <label className="relative dark:text-[#fff]/50 dark:focus-within:text-[#fff]/70 block mb-4 ">
      <Lock/>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          className="form-input transition-colors duration-200 py-3 pr-3 md:py-4 md:pr-4 lg:py-4 lg:pr-4 w-full text-black dark:bg-[#fff]/10 dark:text-white dark:focus:bg-[#fff]/20  focus:shadow-sm focus:outline-none leading-none  placeholder-gray-700 dark:placeholder-gray-400 appearance-none block pl-12  rounded-lg "
        ></input>
      </label>

      <button onSubmit={(e)=>{e.preventDefault();}} className="p-3 md:p-4 focus:outline-none lg:p-4 transition-colors duration-500 bg-gradient-to-br gradient-radial from-blue-500 to-blue-900 w-full rounded-lg font-bold text-white">
        Login to Your Account
      </button>

      <Loginoption/>
    </form>
  </div>
  )
}

export default Authlogin
