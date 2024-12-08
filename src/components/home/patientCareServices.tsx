import { ArrowRightCircleIcon } from "@heroicons/react/16/solid"
import Image from "next/image"
import Link from "next/link"
import PatientServiceCard from "../cards/patientServiceCard"


const PatientCareServices = () => {

    const datas = [1, 2, 3, 4, ]


    return (
        <div className="mt-28  px-5 md:px-8">
            <div className='text-center'>
                <div>
                    <h2 className='text-2xl md:text-4xl font-semibold'>Patient <span className="text-primary">Care</span> Services</h2>
                    <h2 className='md:text-[17px] md:w-6/12 mx-auto mt-[3px] '>Dedicated to serving every patient with respect, understanding, and personalized care. Doctors Schedule is your trusted platform.</h2>
                </div>
                {/* <div>
                    <button className='bg-btnClr text-white px-5 py-1 hover:bg-btnHover duration-500 hover:scale-105'>View More</button>
                </div> */}
            </div>



            <div className="grid grid-cols-1 md:grid-cols-2 mt-8 md:mt-10 gap-9">
                {
                    datas.map((d, i)=> <PatientServiceCard key={i}></PatientServiceCard>)
                }
            </div>




                {/* <div className=" relative ">
                    <Image className="w-full h-auto" height={200} width={200} src='https://img.freepik.com/free-photo/woman-patient-dentist_1303-9355.jpg?ga=GA1.1.490881575.1726385807&semt=ais_hybrid' alt=""></Image>
                    <div className="absolute inset-0 flex items-end justify-center">
                        <div className="backdrop-blur-md bg-secondery/20 hover:py-10 duration-500 w-full flex items-center px-4 py-5 justify-between text-textLight ">
                            <h3 className="text-2xl font-bold tracking-wide text-center">Dental Care</h3>
                            <Link href="">
                                <ArrowRightCircleIcon  className="w-9 h-9"></ArrowRightCircleIcon>
                            </Link>
                        </div>
                    </div>
                </div> */}

        </div>
    )
}

export default PatientCareServices