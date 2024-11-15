import { CheckCircleIcon, HeartIcon, InformationCircleIcon } from "@heroicons/react/16/solid"
import Image from "next/image"


const DepartmentDetailsPage = () => {

    const services = [
        "Heart Disease Consultation",
        "ECG & Stress Testing",
        "Cardiac Catheterization",
        "Interventional Cardiology",
        "Heart Surgery"
    ]



    return (
        <div className=" ">
            <div>
                <div className="relative h-[40vh] md:h-[70vh] flex items-center ">
                    {/* Background Image */}
                    <Image
                        src="https://img.freepik.com/premium-psd/medical-equipment-technology_538547-10504.jpg?w=1060"
                        alt="Hero Background"
                        layout="fill"
                        objectFit="cover"
                        className="absolute inset-0 z-0"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0  z-10" />

                    {/* Text and Button */}
                    <div className="relative z-20 text-primary px-5 md:px-8 py-5">
                        <h1 className="text-3xl md:text-5xl font-bold mb-5">
                            Cardiology
                        </h1>
                        <p className="text-lg md:text-xl md:w-2/3">
                            Cardiology focuses on the diagnosis, treatment, and prevention of heart-related diseases and disorders.
                        </p>
                        <button className='bg-primary rounded mt-6 text-white px-4 py-3 hover:bg-btnHover duration-500 text-lg'>Find A Doctor</button>
                    </div>
                </div>
            </div>


            <div className="flex my-10 text-textLight">
                <div className="w-1/12 mt-80 catagory text-textLight">
                    {/* <h6 className="text-4xl tracking-widest font-semibold uppercase -rotate-90">Cardiology</h6> */}
                    <h6 className="text-5xl tracking-widest font-semibold uppercase -rotate-90">Cardiology</h6>
                </div>
                <div className="w-11/12 text-lg leading-relaxed tracking-wide">
                    <p>Internal Medicine services provide care to patients 18 years and older with a focus on preventative care, chronic illness diagnoses and management, care coordination and referrals, and support to lead healthy lifestyles.

                        Our approach is to encourage trust and open communication to provide comprehensive care appropriate to each patient’s needs and concerns.  <br /> <br /> Whether it's diabetes, high blood pressure, or heart health, our highly skilled providers and friendly care team have the expertise to guide you towards optimal well-being.

                        Join us at the Charles B. Wang Community Health Center to start your journey to better care today at one of our internal medicine locations in Flushing, Queens or Lower Manhattan.  <br /> <br /> Whether it's diabetes, high blood pressure, or heart health, our highly skilled providers and friendly care team have the expertise to guide you towards optimal well-being. Join us at the Charles B. Wang Community Health Center to start your journey to better care today at one of our internal medicine locations in Flushing, Queens or Lower Manhattan.</p>
                </div>
            </div>





            <section className="py-12 px-4 md:px-8">
                <div className="mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-8">
                        Cardiology Treatment Process
                    </h2>
                    <p className="text-lg text-gray-600 mb-12">
                        At our Cardiology department, we prioritize delivering the best care
                        to ensure our patients lead healthier, more fulfilling lives. Our
                        treatment process is designed to provide comprehensive and personalized
                        care, focusing on accurate diagnosis, effective treatment planning, and
                        timely implementation.
                    </p>

                    {/* Treatment Steps */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="flex flex-col items-center">
                            <div className="bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center mb-4">
                                <span className="text-xl font-semibold">01</span>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">Make an Appointment</h3>
                            <p className="text-gray-700 text-center">
                                The first step is to schedule an appointment, where our specialists will gather essential details about your medical history, current symptoms, and lifestyle. This may also include a physical examination or initial diagnostic tests to assess your condition accurately.
                            </p>
                        </div>

                        <div className="flex flex-col items-center">
                            <div className="bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center mb-4">
                                <span className="text-xl font-semibold">02</span>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">Diagnosis Based on Information</h3>
                            <p className="text-gray-700 text-center">
                                After evaluating the gathered information, our healthcare team will perform a detailed diagnosis. This step may include advanced tests like ECG, stress testing, or cardiac imaging to identify the root cause of your condition.
                            </p>
                        </div>

                        <div className="flex flex-col items-center">
                            <div className="bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center mb-4">
                                <span className="text-xl font-semibold">03</span>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">Treatment Planning</h3>
                            <p className="text-gray-700 text-center">
                                Based on the diagnosis, a customized treatment plan will be developed to address your specific condition. This plan ensures the best possible outcomes, encompassing lifestyle recommendations, medications, and, if needed, interventional procedures.
                            </p>
                        </div>

                        <div className="flex flex-col items-center">
                            <div className="bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center mb-4">
                                <span className="text-xl font-semibold">04</span>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">Implementation of Treatment</h3>
                            <p className="text-gray-700 text-center">
                                The treatment plan is then put into action. This may involve administering medications, performing minimally invasive procedures, or surgeries. Throughout the process, our team ensures that you receive continuous support and monitoring for your recovery.
                            </p>
                        </div>
                    </div>
                </div>
            </section>


        </div>
    )
}

export default DepartmentDetailsPage