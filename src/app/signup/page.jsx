import React from "react";
import Authnav from "@/components/auth/Authnav.jsx";
import Authsignup from "@/components/auth/Authsignup.jsx";
import UserExistsRedirection from "../userExistsRedirection";

const signup = () => {
  return (
    <div>
      <UserExistsRedirection>
        <Authnav />
        <Authsignup />
      </UserExistsRedirection>
    </div>
  );
};

export default signup;
