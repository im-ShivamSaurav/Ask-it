'use client';

import createStore from "@/lib/store/store";
import { useRef } from "react";

const { Provider } = require("react-redux")


const StoreProvider = ({ children }) => {
    const storeRef= useRef();
    if (!storeRef.current) {
        storeRef.current = createStore();
    }
    return (
        <Provider store  = {storeRef.current} >{children}</Provider>
    )
}

export default StoreProvider;   