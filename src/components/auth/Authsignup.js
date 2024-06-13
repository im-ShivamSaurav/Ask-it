"use client";
import React, { useState } from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import Image from "next/image";
import lockIcon from "../../../public/lock.svg";
import atrateIcon from "../../../public/atrate.svg";
import personIcon from "../../../public/person.svg";
import { Signupoptions } from "./Signupoptions";
import { GoEye, GoEyeClosed } from "react-icons/go";
import YupPassword from "yup-password";

const Authsignup = () => {
  YupPassword(yup);

  const [showPassword, setShowPassword] = useState(false);

  const handleView = () => {
    setShowPassword(!showPassword);
  };

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };
  const validationSchema = yup.object({
    name: yup
      .string()
      .min(2, "Too Short!")
      .max(30, "Must be 30 characters or less")
      .required("Required"),
    email: yup.string().email("Invalid Email Address").required("Required"),
    password: yup
      .string()
      .required("Required")
      .min(8, "Password must be at least 8 characters!")
      .password()
      .minUppercase(1, "Password must contain at least 1 uppercase letter!")
      .minNumbers(1, "Password must contain at least 1 number!")
      .minSymbols(1, "Password must contain at least 1 symbol    "),
  });

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className="absolute top-35 left-1/2 translate-x-[-50%] mb-10 ">
      <form onSubmit={formik.handleSubmit}>
        <div className=" [ p-8 md:p-10 lg:p-10 ] glassmorphism dark:glassmorphism-dark">
          <h3 className="text-md dark:text-[#fff]/80 mb-1">Signup Required!</h3>
          <h1 className="text-xl md:text-2xl lg:text-2xl mb-6 uppercase font-bold">
            Sign Up to <span className="touch-pan-up">Ask-it</span>
          </h1>
          <p className="mb-6 text-sm dark:text-[#fff]/60 text-opacity-50">
            Enter a valid email &amp; password in the fields below to get
            started.
          </p>

          <div className="relative dark:text-[#fff]/50 focus-within:text-[#fff]/70 block ">
            <Image
              className="transition pointer-events-none w-6 h-6 absolute top-1/2 transform -translate-y-[50%] left-2 viewBox-[0 0 30 30] fill-[black] dark:fill-[white] "
              priority
              src={personIcon}
              alt="Enter your email"
            />
            <input
              type="text"
              id="name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
              required
              placeholder="Your Full Name"
              className="form-input transition-colors duration-200 py-3 pr-3 md:py-4 md:pr-4 lg:py-4 lg:pr-4 w-full text-black dark:bg-[#fff]/10 dark:text-white dark:focus:bg-[#fff]/20  focus:shadow-sm focus:outline-none leading-none placeholder-gray-700 dark:placeholder-gray-400 appearance-none block pl-12  rounded-lg "
            ></input>
          </div>
          {formik.touched.name && formik.errors.name ? (
            <div className="text-left text-red-800 text-xs w-60 mx-12 mb-1 py-2">
              *{formik.errors.name}!
            </div>
          ) : (
            <div className="h-1 w-1 mb-4 py-3"></div>
          )}

          <div className="relative dark:text-[#fff]/50 focus-within:text-[#fff]/70 block ">
            <Image
              className="transition pointer-events-none w-6 h-6 absolute top-1/2 transform -translate-y-1/2 left-3 viewBox-[0 0 20 20] fill-[black] dark:fill-[white]"
              priority
              src={atrateIcon}
              alt="email"
            />

            <input
              type="email"
              id="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              onBlur={formik.handleBlur}
              required
              placeholder="Email"
              className="form-input transition-colors duration-200 py-3 pr-3 md:py-4 md:pr-4 lg:py-4 lg:pr-4 w-full text-black dark:bg-[#fff]/10 dark:text-white dark:focus:bg-[#fff]/20  focus:shadow-sm focus:outline-none leading-none placeholder-gray-700 dark:placeholder-gray-400 appearance-none block pl-12  rounded-lg "
            ></input>
          </div>
          {formik.touched.email && formik.errors.email ? (
            <div className="text-left text-red-800 text-xs w-60 mx-12 mb-1 py-2">
              *{formik.errors.email}!
            </div>
          ) : (
            <div className="h-1 w-1 mb-4 py-3"></div>
          )}

          <div className="relative dark:text-[#fff]/50 dark:focus-within:text-[#fff]/70 block ">
            <Image
              className="transition pointer-events-none w-6 h-6 absolute top-1/2 transform -translate-y-1/2 left-3 viewBox-[0 0 20 20] fill-[black] dark:fill-[white] "
              priority
              src={lockIcon}
              alt="lock"
            />

            <input
              type={showPassword ? "text" : "password"}
              id="password"
              onChange={formik.handleChange}
              value={formik.values.password}
              onBlur={formik.handleBlur}
              required
              placeholder="Password"
              className="form-input transition-colors duration-200 py-3 pr-3 md:py-4 md:pr-4 lg:py-4 lg:pr-4 w-full text-black dark:bg-[#fff]/10 dark:text-white dark:focus:bg-[#fff]/20  focus:shadow-sm focus:outline-none leading-none  placeholder-gray-700 dark:placeholder-gray-400 appearance-none block pl-12  rounded-lg "
            ></input>
          </div>
          <div
            onClick={handleView}
            className="cursor-pointer absolute text-xl left-[84%] bottom-[44.5%] font-extrabold"
          >
            {showPassword ? <GoEyeClosed /> : <GoEye />}
          </div>
          {formik.touched.password && formik.errors.password ? (
            <div className="text-left text-red-800 text-xs w-60 mx-12 mb-1 py-2">
              *{formik.errors.password}!
            </div>
          ) : (
            <div className="h-1 w-1 mb-4 py-3"></div>
          )}

          <button
            // onSubmit={e=>e.preventDefault()}
            type="submit"
            className="p-3 md:p-4 focus:outline-none lg:p-4 transition-colors duration-500 bg-gradient-to-br gradient-radial from-blue-500 to-blue-900 w-full rounded-lg font-bold text-white"
          >
            Create Account
          </button>

          <Signupoptions />
        </div>
      </form>
    </div>
  );
};

export default Authsignup;
