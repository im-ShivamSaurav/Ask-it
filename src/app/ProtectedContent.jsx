'use client'
import Loader from '@/components/ui/Loader';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const ProtectedContent = ({children}) => {
    const user = useSelector(state => state.user);
    const router = useRouter();

    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const timeOut = setTimeout(() => {
            setLoading(false);
        }, 2000);
        return () => clearTimeout(timeOut);
    }, []);

    if(loading) return <Loader/>;
    
    if(user){
        return <div>{children}</div>
    }
    else{
        router.push('/login');
    }

}

export default ProtectedContent
