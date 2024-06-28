"use client";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import Loader from "@/components/ui/Loader";

const UserExistsRedirection = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const user = useSelector((store) => store.user);
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

    if (loading) {
    return <Loader />;
    }

  
  if (user) {
    router.push("/");
  }

  return <div>{children}</div>;
};

export default UserExistsRedirection;
