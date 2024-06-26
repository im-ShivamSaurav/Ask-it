'use client';
import React, { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/utils/firebase";
// import { useDispatch } from "react-redux";
import { addUser, removeUser } from "@/lib/store/userSlice";
import { useRouter } from "next/navigation.js";
import { useAppDispatch } from "@/hooks/hooks";

const DataSetter = ({children}) => {
  const router = useRouter();

    const dispatch = useAppDispatch();
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (user) => {
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
              router.push("/browse");
            } else {
              dispatch(removeUser());
              router.push("/");
            }
          });
        
          return() => unsubscribe();
    }, [dispatch, router]);
  

  return <div>{children}</div>;
};

export default DataSetter;
