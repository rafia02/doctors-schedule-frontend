'use client'

import { usePathname } from "next/navigation"
import Navber from "../shared/Navber";


const ShowNavber = () => {
  const pathname = usePathname();
  // const ab = pathname === "/dashboard" 

 
  const show = pathname.startsWith('/dashboard');
  return (
    <div>

       {!show && <Navber></Navber>}
    </div>
  )
}

export default ShowNavber

