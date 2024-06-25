import React from "react";
import Authnav from "@/components/auth/Authnav.jsx";
import Authlogin from "@/components/auth/Authlogin.jsx";
import UserExistsRedirection from "@/app/userExistsRedirection.jsx";

const login = () => {
  return (
    <div>
      <UserExistsRedirection>
        <Authnav />
        <Authlogin />
      </UserExistsRedirection>
    </div>
  );
};

export default login;
