import { Services } from '@/Types/adminDashboardType'
import { ArrowRightCircleIcon } from '@heroicons/react/16/solid'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const PatientServiceCard = ({service} : {service: Services}) => {
    console.log(service)
    return (

        <div>
            <Link href="/doctors/2" className="flex group">
                <div className="w-3/6 md:w-2/5 rounded-tl rounded-bl flex flex-col px-6 py-6 md:py-9 justify-between bg-primary">
                    <h3 className="text-lg md:text-2xl text-white font-bold tracking-wide">
                        {service?.specialized}
                    </h3>
                    <div className="text-white hover:text-secondery duration-500">
                        <ArrowRightCircleIcon className="w-10 h-10"></ArrowRightCircleIcon>
                    </div>
                </div>
                <div className="w-3/6 md:w-3/5 overflow-hidden">
                    <Image
                        className="w-full h-44 md:h-60 rounded-tr rounded-br transform transition-transform duration-300 group-hover:scale-110"
                        height={10}
                        width={200}
                        src={service?.image}
                        alt=""
                    />
                </div>
            </Link>
        </div>
    )
}

export default PatientServiceCard