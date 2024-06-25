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
        <DropdownMenuTrigger> <img className="w-14 rounded-full" src={USER_AVATAR_URL} alt="user" /></DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Profile</DropdownMenuItem>
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
