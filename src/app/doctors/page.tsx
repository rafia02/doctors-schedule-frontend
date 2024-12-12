import PatientServiceCard from '@/components/cards/patientServiceCard'
import Image from 'next/image'
import React from 'react'

const FindDoctorsPage = () => {
    const datas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    return (
        <div className='mb-20'>

            <div>
                <div className="relative h-[40vh] md:h-[330px] flex items-center ">
                    {/* Background Image */}
                    <Image
                        src="https://res.cloudinary.com/doctorsshedule/image/upload/v1732638139/diljgjhk7fgmbvv6i5f9.png"
                        alt="Hero Background"
                        layout="fill"
                        objectFit="cover"
                        className="absolute inset-0 z-0"
                    />
                    <div className="absolute inset-0 bg-primary bg-opacity-30 z-10" />
                    {/* Text and Button */}
                    <div className="relative z-20 text-center text-slate-100 px-5 md:px-8 py-4">
                        <h1 className="text-3xl md:text-5xl font-bold mb-5">
                            Find Your Specialized Doctor
                        </h1>
                        <p className="text-lg md:text-xl md:w-8/12 mx-auto">
                            The Health Center’s team of doctors is dedicated to providing high-quality care for you and your family. Select from one of the services below to find a provider
                        </p>
                    </div>
                </div>
            </div>



            {/* cards  */}
            <div className="grid grid-cols-1 px-5 md:px-8 md:grid-cols-2 mt-20 gap-6">
                {
                    datas.map((d, i) => <PatientServiceCard key={i}></PatientServiceCard>)
                }
            </div>
        </div>
    )
}

export default FindDoctorsPage