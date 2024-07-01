import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { auth } from "@/utils/firebase";
import { signOut } from "firebase/auth";
import { USER_AVATAR_URL } from "@/utils/constants";
import Link from "next/link";

const UserNav = () => {
  const handleSignOut = () => {
    signOut(auth).then(() => {
      toast({
        title: "Sign-out Successful",
        // description: signupMessage,
        // variant: "destructive"
      })
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
  };
  return (
    <div className=" cursor-pointer ">
     
      <DropdownMenu className="hidden">
        <DropdownMenuTrigger> <img className="w-10 lg:w-16 rounded-full" src={USER_AVATAR_URL} alt="user" /></DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel className="cursor-pointer">My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <Link href="/" className="cursor-pointer"><DropdownMenuItem>Home</DropdownMenuItem></Link>
          <Link href="/browse" className="cursor-pointer"><DropdownMenuItem>Browse</DropdownMenuItem></Link>
          {/* <DropdownMenuItem>Billing</DropdownMenuItem> */}
          {/* <DropdownMenuItem>Team</DropdownMenuItem> */}
          <DropdownMenuItem onClick={handleSignOut}>Sign Out</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* <p>Username</p> */}
    </div>
  );
};

export default UserNav;
