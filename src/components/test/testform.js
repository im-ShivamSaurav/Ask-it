"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
// import YupPassword from "yup-password";
import { IoEye } from "react-icons/io5";
import { IoMdEyeOff } from "react-icons/io";
// YupPassword(yup); // extend yup
// import {
//   createUserWithEmailAndPassword,
//   sendEmailVerification,
//   updateProfile,
// } from "firebase/auth";
// import { auth } from "@/utils/firebase";
// import { useToast } from "@/components/ui/use-toast";
// import { useRouter } from "next/navigation";
// import { useAppDispatch } from "@/lib/hooks";
// import { TiTick } from "react-icons/ti";
// import toast from "react-hot-toast";

export const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState("password");
  const [errorMessage, setErrorMessage] = useState(null);
//   const router = useRouter();
//   const dispatch = useAppDispatch();
//   const {toast}=useToast();
  // const [sentEmail, setSentEmail] = useState();
  
  const handleShowPassword = () => {
    if (showPassword === "password") {
      setShowPassword("text");
    } else {
      setShowPassword("password");
    }
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
    password: yup.string().required("Required"),
  });

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      

      }})
    
  return (
    <div className="flex justify-center items-center h-full w-full">
      {/* <Toaster/> */}
      <div className=" h-[510px] w-80 sm:w-96 mx-auto my-auto rounded-xl border border-gray-200 dark:border-white/15 bg-white/25 dark:bg-black/20 shadow-[inset_10px_-50px_94px_0_rgb(199,199,199,0.2)] backdrop-blur p-5">
        <div className="text-lg text-black dark:text-white font-bold text-center my-5 font-santoshi tracking-wide">
          Sign Up
        </div>
        <form onSubmit={formik.handleSubmit}>
          <div className="gap-y-3">
            <div className="flex flex-col items-center justify-center mb-4">
              <div className="font-popins text-sm w-64">Name</div>
              <input
                type="text"
                id="name"
                placeholder="Enter Full Name"
                required
                onChange={formik.handleChange}
                value={formik.values.name}
                onBlur={formik.handleBlur}
                className="w-64 py-2 px-1 m-1 bg-transparent text-sm font-popins border-b-2 border-black dark:border-white/30 outline-none"
              ></input>
              {formik.touched.name && formik.errors.name ? (
                <div className="text-left text-red-500 text-xs w-60 mx-2">
                  *{formik.errors.name}!
                </div>
              ) : null}
            </div>
            <div className="flex flex-col items-center justify-center mb-4">
              <div className="font-popins text-sm w-64">Email Id</div>
              <input
                type="text"
                id="email"
                placeholder="Enter Email Id"
                required
                onChange={formik.handleChange}
                value={formik.values.email}
                onBlur={formik.handleBlur}
                className="w-64 py-2 px-1 m-1 bg-transparent text-sm font-popins border-b-2 border-black dark:border-white/30 outline-none"
              ></input>
              {formik.touched.email && formik.errors.email ? (
                <div className="text-left text-red-600 text-xs w-60 mx-2">
                  *{formik.errors.email}!
                </div>
              ) : null}
            </div>
            <div className="flex flex-col items-center justify-center mb-4">
              <div className="font-popins text-sm w-64">Password</div>
              <div className="flex w-64 justify-center items-center mx-auto">
                <input
                  id="password"
                  type={showPassword}
                  placeholder="Enter Password"
                  required
                  onChange={formik.handleChange}
                  value={formik.values.password}
                  onBlur={formik.handleBlur}
                  className="w-64 py-2 px-1 m-1 bg-transparent text-sm font-popins border-b-2 border-black dark:border-white/30 outline-none"
                ></input>
                <div
                  className="absolute right-[35px] sm:right-[67px] cursor-pointer"
                  onClick={handleShowPassword}
                >
                  {showPassword === "password" ? <IoEye /> : <IoMdEyeOff />}
                </div>
              </div>
              {formik.touched.password && formik.errors.password ? (
                <div className="text-left text-red-600 text-xs w-60 mx-2 h-2 mb-2">
                  *{formik.errors.password}!
                </div>
              ) : null}
            </div>
            {
              <div className="text-center flex h-3 mb-2 justify-center mx-auto text-red-600 text-xs w-60">
                {errorMessage}
              </div>
            }
            <button
              type="submit"
              className="flex justify-center items-center mx-auto my-6 w-64 h-12 rounded-md bg-gradient-to-r from-amber-500 via-orange-600 to-yellow-500  text-white text-md font-popins font-bold cursor-pointer"
            >
              SIGN UP
            </button>
            <div className="w-64 flex justify-start text-xs font-light mx-auto text-black/80 dark:text-white/80">
              Already a member?{" "}
              <Link href="/login">
                <div className="mx-1 font-bold hover:underline cursor-pointer">
                  Login
                </div>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
