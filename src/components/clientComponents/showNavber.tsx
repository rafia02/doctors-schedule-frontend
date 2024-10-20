'use client'

import { usePathname } from "next/navigation"
import Navber from "../shared/Navber";


const ShowNavber = () => {
  const pathname = usePathname();

 
  const show = pathname !== '/dashboard';
  return (
    <div>
       {show && <Navber></Navber>}
    </div>
  )
}

export default ShowNavber

