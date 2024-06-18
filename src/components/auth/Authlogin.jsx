"use client";
import React from "react";
import Loginoption from "./Loginoption.jsx";
import Lock from "../svg/Lock";
import Atrate from "../svg/Atrate";
import { useFormik } from "formik";
import * as yup from "yup";
import { auth } from "@/utils/firebase.js";
import { useToast } from "../ui/use-toast.js";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { GoEye, GoEyeClosed } from "react-icons/go";

const Authlogin = () => {

  const [showPassword, setShowPassword] = useState(false);
  
  const { toast } = useToast();

  const handleView = () => {
    setShowPassword(!showPassword);
  };


  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = yup.object({
    email: yup.string().email("Invalid Email Address").required("Required"),
    password: yup.string().required("Required"),
  });

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      // console.log(values);
      signInWithEmailAndPassword(auth, values.email,values.password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // console.log(user);
          toast({
            title: "Sign-in Successfully",
            // description: signupMessage,
            // variant: "destructive"
          })
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // console.log(errorMessage);
          toast({
            title: "Invalid Credentials",
            // description: signupMessage,
            variant: "destructive"
          })
        });
    },
  });
  return (
    <div className="md:w-[500px] w-3/4 mx-auto mb-10  ">
      <form
        noValidate
        onSubmit={formik.handleSubmit}
        className=" [ p-8 md:p-10 lg:p-10 ] md:glassmorphism md:dark:glassmorphism-dark"
      >
        <h3 className="text-md dark:text-[#fff]/80 mb-1">Sign-in Required!</h3>
        <h1 className="text-xl md:text-2xl lg:text-2xl mb-6 uppercase font-bold">
          Login to <span className="touch-pan-up">Ask-it</span>
        </h1>
        <p className="mb-6 text-sm dark:text-[#fff]/60 text-opacity-50">
          Enter a valid email &amp; password in the fields below to get started.
        </p>

        <label className="relative dark:text-[#fff]/50 focus-within:text-[#fff]/70 block mb-1 ">
          <Atrate />
          <input
            type="email"
            name="email"
            id="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            autoComplete="email"
            onBlur={formik.handleBlur}
            placeholder="Email"
            className="form-input transition-colors duration-200 py-3 pr-3 md:py-4 md:pr-4 lg:py-4 lg:pr-4 w-full text-black dark:bg-[#fff]/10 dark:text-white dark:focus:bg-[#fff]/20  focus:shadow-sm focus:outline-none leading-none placeholder-gray-700 dark:placeholder-gray-400 appearance-none block pl-12  rounded-lg "
          ></input>
        </label>
        {formik.touched.email && formik.errors.email ? (
          <div className="text-left text-red-800 text-xs w-60 mx-12 mb-1 py-2">
            *{formik.errors.email}!
          </div>
        ) : (
          <div className="text-left text-transparent text-xs w-60 mx-12 mb-1 py-2">
            *{formik.errors.email}!
          </div>
        )}

        <label className="relative dark:text-[#fff]/50 dark:focus-within:text-[#fff]/70 block mb-1 ">
          <Lock />
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            id="password"
            autoComplete="off"
            onChange={formik.handleChange}
            value={formik.values.password}
            onBlur={formik.handleBlur}
            placeholder="Password"
            className="form-input transition-colors duration-200 py-3 pr-11 md:py-4 md:pr-4 lg:py-4 lg:pr-11 w-full text-black dark:bg-[#fff]/10 dark:text-white dark:focus:bg-[#fff]/20  focus:shadow-sm focus:outline-none leading-none placeholder-gray-700 dark:placeholder-gray-400 appearance-none block pl-12  rounded-lg "
          ></input>
          <div
            onClick={handleView}
            className="cursor-pointer text-xl transition w-6 h-6 absolute top-1/2 transform -translate-y-1/2 right-3 text-black dark:text-white"
          >
            {showPassword ? <GoEyeClosed /> : <GoEye />}
          </div>
        </label>
        
        {formik.touched.password && formik.errors.password ? (
          <div className="text-left text-red-800 text-xs w-60 mx-12 mb-1 py-1">
            *{formik.errors.password}!
          </div>
        ) : (
          <div className="text-left text-transparent text-xs w-60 mx-12 mb-1 py-1">
            *{formik.errors.password}!
          </div>
        )}
        <button
          type="submit"
          className="p-3 mt-3 md:p-4 focus:outline-none lg:p-4 transition-colors duration-500 bg-gradient-to-br gradient-radial from-blue-500 to-blue-900 w-full rounded-lg font-bold text-white"
        >
          Login to Your Account
        </button>

        <Loginoption />
      </form>
    </div>
  );
};

export default Authlogin;
