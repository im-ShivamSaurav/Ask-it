import React from "react";
import Authnav from "@/components/auth/Authnav";
import Authsignup from "@/components/auth/Authsignup";
import SignUpPage from "@/components/test/testform";

const signup = () => {

  return (
    <div>
      <Authnav/>
      {/* <SignUpPage/> */}
      <Authsignup/>
    </div>
  );
};

export default signup;