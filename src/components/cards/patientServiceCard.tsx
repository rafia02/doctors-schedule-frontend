import { ArrowRightCircleIcon } from '@heroicons/react/16/solid'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const PatientServiceCard = () => {
    return (
        <div>
            <Link href="/doctors/2" className="flex">
                <div className="w-3/6 md:w-2/5 rounded-tl rounded-bl flex flex-col px-6 py-6 md:py-9 justify-between bg-primary">
                    <h3 className="text-lg md:text-2xl text-white  font-bold tracking-wide ">Dental Care</h3>
                    <div className="text-white">
                        <ArrowRightCircleIcon className="w-10 h-10"></ArrowRightCircleIcon>
                    </div>
                </div>
                <div className="w-3/6 md:w-3/5">
                    <Image className="w-full h-44 md:h-60 rounded-tr rounded-br" height={10} width={200} src='https://images.pexels.com/photos/7578803/pexels-photo-7578803.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt=""></Image>
                </div>
            </Link>
        </div>
    )
}

export default PatientServiceCard