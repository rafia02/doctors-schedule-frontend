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
        <div className=" text-textLight">
            {/* hero  */}
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

            {/* description */}
            <div className="flex mt-10 px-5 md:px-0">
                <div className="md:w-1/12 hidden md:block mt-[215px] catagory ">
                    {/* <h6 className="text-4xl tracking-widest font-semibold uppercase -rotate-90">Cardiology</h6> */}
                    <h6 className="text-4xl tracking-widest font-semibold uppercase -rotate-90">Cardiology</h6>
                </div>
                <div className="md:w-11/12 text-lg leading-relaxed tracking-wide">
                    <p>Internal Medicine services provide care to patients 18 years and older with a focus on preventative care, chronic illness diagnoses and management, care coordination and referrals, and support to lead healthy lifestyles.
                        Our approach is to encourage trust and open communication to provide comprehensive care appropriate to each patient’s needs and concerns.
                        <br /> <br />
                        Whether it's diabetes, high blood pressure, or heart health, our highly skilled providers and friendly care team have the expertise to guide you towards optimal well-being.
                        Join us at the Charles B. Wang Community Health Center to start your journey to better care today at one of our internal medicine locations in Flushing, Queens or Lower Manhattan.
                        <br /> <br />
                        Whether it's diabetes, high blood pressure, or heart health, our highly skilled providers and friendly care team have the expertise to guide you towards optimal well-being. Join us at the Charles B. Wang Community Health Center to start your journey to better care today at one of our internal medicine locations in Flushing, Queens or Lower Manhattan.</p>
                </div>
            </div>





            <section className=" px-5 md:px-24">

                <div className="mt-5 grid grid-cols-1 md:grid-cols-2  gap-8">
                    <div className="flex items-center">
                        <Image className="w-full h-auto" src="https://img.freepik.com/premium-photo/male-medicine-doctor-holding-red-heart-putting-stethoscope-head-close-it-closeup-medical-help-cardiology-care-health-prophylaxis-prevention-insurance-surgery-resuscitation-concept_151013-14369.jpg?w=900" height={500} width={500} alt=""></Image>
                    </div>
                    <p className="text-lg leading-relaxed">
                        Internal Medicine services provide care to patients 18 years and older with a focus on preventative care, chronic illness diagnoses and management, care coordination and referrals, and support to lead healthy lifestyles. Our approach is to encourage trust and open communication to provide comprehensive care appropriate to each patient’s needs and concerns.
                        Whether it's diabetes, high blood pressure, or heart health, our highly skilled providers and friendly care team have the expertise to guide you towards optimal well-being. Join us at the Charles B. Wang Community Health Center to start your journey to better care today at one of our internal medicine locations in Flushing, Queens or Lower Manhattan.
                    </p>
                </div>
                <div className="mt-24">
                    <h2 className="text-3xl leading-relaxed md:text-4xl font-semibold mb-8">
                        Cardiology Treatment Process
                    </h2>
                    <p className="text-lg leading-relaxed mb-12">
                        At our Cardiology department, we prioritize delivering the best care
                        to ensure our patients lead healthier, more fulfilling lives. Our
                        treatment process is designed to provide comprehensive and personalized
                        care, focusing on accurate diagnosis, effective treatment planning, and
                        timely implementation.
                    </p>

                    {/* Treatment Steps */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="flex flex-col">
                            <h3 className="text-xl font-semibold mb-3">01. Make an Appointment</h3>
                            <p>
                                The first step is to schedule an appointment, where our specialists will gather essential details about your medical history, current symptoms, and lifestyle. This may also include a physical examination or initial diagnostic tests to assess your condition accurately.
                            </p>
                        </div>

                        <div className="flex flex-col ">
                            <h3 className="text-xl font-semibold mb-3">02. Diagnosis Based on Information</h3>
                            <p>
                                After evaluating the gathered information, our healthcare team will perform a detailed diagnosis. This step may include advanced tests like ECG, stress testing, or cardiac imaging to identify the root cause of your condition.
                            </p>
                        </div>

                        <div className="flex flex-col">
                            <h3 className="text-xl font-semibold mb-3">03. Treatment Planning</h3>
                            <p>
                                Based on the diagnosis, a customized treatment plan will be developed to address your specific condition. This plan ensures the best possible outcomes, encompassing lifestyle recommendations, medications, and, if needed, interventional procedures.
                            </p>
                        </div>

                        <div className="flex flex-col">
                            <h3 className="text-xl font-semibold mb-3">04. Implementation of Treatment</h3>
                            <p>
                                The treatment plan is then put into action. This may involve administering medications, performing minimally invasive procedures, or surgeries. Throughout the process, our team ensures that you receive continuous support and monitoring for your recovery.
                            </p>
                        </div>
                    </div>
                </div>



                <div className="leading-relaxed py-24">
                    <h2 className="text-3xl md:text-4xl font-semibold mb-8">Benefits of Gynecology Treatment</h2>
                    <p className="text-lg">
                        Gynecology treatments ensure women's reproductive health through early detection of issues, management of chronic conditions like PCOS and fibroids, and personalized care for all life stages. Regular check-ups prevent serious diseases, enhance quality of life, and address menstrual, fertility, and menopause concerns for overall well-being.
                    </p>
                </div>


            </section>


        </div>
    )
}

export default DepartmentDetailsPage