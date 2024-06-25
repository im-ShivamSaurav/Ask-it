'use client'
import React, { useEffect, useState } from 'react'
import Loader from '@/components/ui/Loader';

const AppLoader = ({children}) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(()=>{
            setLoading(false);
        },2000)
        return clearTimeout(timer);
    }, [])
    
    if(loading){
        <Loader/>
    }
  return (
    <div>
      {children}
    </div>
  )
}

export default AppLoader
