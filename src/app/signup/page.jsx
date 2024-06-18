import React from "react";
import Authnav from "@/components/auth/Authnav.jsx";
import Authsignup from "@/components/auth/Authsignup.jsx";


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