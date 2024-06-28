"use client";
import React, { useState } from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import { Signupoptions } from "./Signupoptions.jsx";
import { GoEye, GoEyeClosed } from "react-icons/go";
import YupPassword from "yup-password";
import Person from "../svg/Person";
import Atrate from "../svg/Atrate";
import Lock from "../svg/Lock";
import { auth } from "@/utils/firebase.js";
import { updateProfile, createUserWithEmailAndPassword } from "firebase/auth";
import { useToast } from "@/components/ui/use-toast";
import { addUser } from "@/lib/store/userSlice.js";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation.js";

const Authsignup = () => {
  YupPassword(yup);

  const { toast } = useToast();
  const router = useRouter();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [signupStatus, setSignupStatus] = useState(false);

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
      .min(8, "Must be at least 8 characters!")
      .password()
      .minUppercase(1, "Must contain at least 1 uppercase letter!")
      .minNumbers(1, "Must contain at least 1 number!")
      .minSymbols(1, "Must contain at least 1 symbol    "),
  });

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      if (formik.errors == null) return;

      // Sign up logic
      createUserWithEmailAndPassword(auth, values.email, values.password)
        .then(async (userCredential) => {
          // Signed up

          const user = userCredential.user;

          try {
            await updateProfile(auth.currentUser, {
              displayName: values.name,
              photoURL: "https://example.com/jane-q-user/profile.jpg",
            });

            const { uid, email, displayName, photoURL } = auth.currentUser;
            dispatch(
              addUser({
                uid: uid,
                email: email,
                displayName: displayName,
                photoURL: photoURL,
              })
            );
            router.push("/");
          } catch (error) {
            // router.push("/error");
            console.error("Error updating profile", error.message);
          }

          setSignupStatus(true);
          toast({
            title: "Signup Successfull",
          });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setSignupStatus(false);
          toast({
            title: "Error Signing Up",
            variant: "destructive",
          });
        });
    },
  });

  return (
    <div className="md:w-[500px] w-3/4 mx-auto mb-10 ">
      <form onSubmit={formik.handleSubmit} noValidate>
        <div className=" [ p-8 md:p-10 lg:p-10 ] md:glassmorphism md:dark:glassmorphism-dark">
          <h3 className="text-md dark:text-[#fff]/80 mb-1">Signup Required!</h3>
          <h1 className="text-xl md:text-2xl lg:text-2xl mb-6 uppercase font-bold">
            Sign Up to <span className="touch-pan-up">Ask-It</span>
          </h1>
          <p className="mb-6 text-sm dark:text-[#fff]/60 text-opacity-50">
            Enter a valid email &amp; password in the fields below to get
            started.
          </p>

          <div className="relative dark:text-[#fff]/50 focus-within:text-[#fff]/70 block ">
            <Person />
            <input
              type="text"
              id="name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
              autoComplete="name"
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
            <div className="text-left text-transparent text-xs w-60 mx-12 mb-1 py-2">
              *{formik.errors.name}!
            </div>
          )}

          <div className="relative dark:text-[#fff]/50 focus-within:text-[#fff]/70 block ">
            <Atrate />

            <input
              type="email"
              id="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              onBlur={formik.handleBlur}
              autoComplete="email"
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
            <div className="text-left text-transparent text-xs w-60 mx-12 mb-1 py-2">
              *{formik.errors.email}!
            </div>
          )}

          <div className="relative dark:text-[#fff]/50 dark:focus-within:text-[#fff]/70 block ">
            <Lock />
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              onChange={formik.handleChange}
              value={formik.values.password}
              onBlur={formik.handleBlur}
              autoComplete="off"
              required
              placeholder="Password"
              className="form-input transition-colors duration-200 py-3 pr-11 md:py-4 md:pr-4 lg:py-4 lg:pr-11 w-full text-black dark:bg-[#fff]/10 dark:text-white dark:focus:bg-[#fff]/20  focus:shadow-sm focus:outline-none leading-none  placeholder-gray-700 dark:placeholder-gray-400 appearance-none block pl-12  rounded-lg "
            ></input>
            <div
              onClick={handleView}
              className="cursor-pointer text-xl transition w-6 h-6 absolute top-1/2 transform -translate-y-1/2 right-3 text-black dark:text-white"
            >
              {showPassword ? <GoEyeClosed /> : <GoEye />}
            </div>
          </div>

          {formik.touched.password && formik.errors.password ? (
            <div className="text-left text-red-800 text-xs w-60 mx-12 mb-1 py-2">
              *{formik.errors.password}!
            </div>
          ) : (
            <div className="text-left text-transparent text-xs w-60 mx-12 mb-1 py-2">
              *{formik.errors.password}!
            </div>
          )}

          <button
            // onSubmit={e=>e.preventDefault()}
            type="submit"
            className="p-3 mt-3 md:p-4 focus:outline-none lg:p-4 transition-colors duration-500 bg-gradient-to-br gradient-radial from-blue-500 to-blue-900 w-full rounded-lg font-bold text-white"
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
