"use client"
import { usePathname } from 'next/navigation';
import React from 'react'
import Footer from '../shared/footer/Footer';

const ShowFooter = () => {
    const pathname = usePathname();
    // const ab = pathname === "/dashboard" 


    const show = pathname.startsWith('/dashboard');
    return (
        <div>
            {!show && <Footer></Footer>}
        </div>
    )
}

export default ShowFooter