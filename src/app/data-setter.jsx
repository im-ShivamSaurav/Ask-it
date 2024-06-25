'use client';
import React, { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "@/lib/store/userSlice";

const DataSetter = ({children}) => {

    const dispatch = useDispatch();
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              const { uid, email, displayName, photoURL } = user;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            } else {
              dispatch(removeUser());
            }
          });

    });
  

  return <div>{children}</div>;
};

export default DataSetter;
