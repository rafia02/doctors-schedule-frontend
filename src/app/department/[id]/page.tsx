
import { fetchDepartmentDetails } from "@/lib/adminApi/specializationApi";
import axios from "axios";
// import { Metadata } from "next";
import Image from "next/image"


interface DepartmentDetailsPageProps {
    params: { id: string };
}



//   export async function generateMetadata({ params }: DepartmentDetailsPageProps): Promise<Metadata> {
//     const data = await fetchDepartmentDetails(params.id);
//     return {
//       title: `${data.title || 'Department Details'} - Specialized Healthcare`,
//       description: `${data.description || 'Details about the department'}`,
//     };
//   }

// Fetch department details
//   async function getDepartmentDetails(id: string) {
//     return fetchDepartmentDetails(id);
//   }





const DepartmentDetailsPage = async ({ params }: DepartmentDetailsPageProps) => {

    const { id } = params;
    const data = await fetchDepartmentDetails(id);


    const { title, subDescription, longDescription, mainImage } = data


    const services = [
        'General examination and personalized treatment plans',
        'Teeth cleaning and x-rays',
        'Dental fillings and crowns',
        'Tooth extraction',
        'Root canals',
        'Basic periodontal treatment',
        'Denture and bridge care',
        'Referrals to specialty care',
        'Health education to promote dental health',
    ];



    return (
        <div className=" text-textLight">
            {/* hero  */}
            <div>
                <div className="relative h-[40vh] md:h-[70vh] flex items-center ">
                    {/* Background Image */}
                    <Image
                        src="https://res.cloudinary.com/doctorsshedule/image/upload/v1732634912/z1nbxwtv9akal5fjvsaz.png"
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
                            {title}
                        </h1>
                        <p className="text-lg md:text-xl md:w-2/3">
                            {subDescription.split('.')[0]}.
                        </p>
                        <button className='bg-primary rounded mt-6 text-white px-4 py-3 hover:bg-btnHover duration-500 text-lg'>Find A Doctor</button>
                    </div>
                </div>
            </div>

            {/* description */}
            <div className="flex mt-10 px-5 md:mr-10 md:px-0">
                <div className="md:w-1/12 hidden md:block mt-[215px] catagory ">
                    {/* <h6 className="text-4xl tracking-widest font-semibold uppercase -rotate-90">Cardiology</h6> */}
                    <h6 className="text-4xl tracking-widest font-semibold uppercase -rotate-90 text-gray-600">Specialized</h6>
                </div>
                <div className="md:w-11/12 text-lg leading-relaxed tracking-wide">
                    <p>
                        {longDescription.split('.').slice(0, 4).join('.')}. <br /> <br />
                        {longDescription.split('.').slice(4, 7).join('.')}. <br /> <br />
                        {longDescription.split('.').slice(7).join('.')}.
                    </p>
                </div>
            </div>





            <section className=" px-5 md:px-24">



                <div className="mt-10 grid grid-cols-1 md:grid-cols-2  gap-8">
                    <div className="flex items-center">
                        <Image className="w-full h-auto" src={mainImage} height={500} width={500} alt=""></Image>
                    </div>
                    <p className="text-lg leading-relaxed">
                        {subDescription}
                    </p>
                </div>




                <div className="mt-14">
                    <h2 className="text-3xl md:text-4xl font-semibold mb-5">Dental Care Services We Offer</h2>
                    <ul className="space-y-4">
                        {services.map((service, index) => (
                            <li
                                key={index}
                                className="text-lg text-gray-700 leading-relaxed"
                            >
                                &bull; {service}
                            </li>
                        ))}
                    </ul>
                </div>



                <div className="mt-14">
                    <h2 className="text-3xl leading-relaxed md:text-4xl font-semibold mb-5">
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
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 leading-relaxed">
                        <div className="flex flex-col">
                            <h3 className="text-xl font-semibold mb-3">01. Make an Appointment</h3>
                            <p className="text-lg">
                                The first step is to schedule an appointment, where our specialists will gather essential details about your medical history, current symptoms, and lifestyle. This may also include a physical examination or initial diagnostic tests to assess your condition accurately.
                            </p>
                        </div>

                        <div className="flex flex-col ">
                            <h3 className="text-xl font-semibold mb-3">02. Diagnosis Based on Information</h3>
                            <p className="text-lg">
                                After evaluating the gathered information, our healthcare team will perform a detailed diagnosis. This step may include advanced tests like ECG, stress testing, or cardiac imaging to identify the root cause of your condition.
                            </p>
                        </div>

                        <div className="flex flex-col">
                            <h3 className="text-xl font-semibold mb-3">03. Treatment Planning</h3>
                            <p className="text-lg">
                                Based on the diagnosis, a customized treatment plan will be developed to address your specific condition. This plan ensures the best possible outcomes, encompassing lifestyle recommendations, medications, and, if needed, interventional procedures.
                            </p>
                        </div>

                        <div className="flex flex-col">
                            <h3 className="text-xl font-semibold mb-3">04. Implementation of Treatment</h3>
                            <p className="text-lg">
                                The treatment plan is then put into action. This may involve administering medications, performing minimally invasive procedures, or surgeries. Throughout the process, our team ensures that you receive continuous support and monitoring for your recovery.
                            </p>
                        </div>
                    </div>
                </div>



                <div className="leading-relaxed py-24">
                    <h2 className="text-3xl md:text-4xl font-semibold mb-5">Benefits of Gynecology Treatment</h2>
                    <p className="text-lg">
                        Gynecology treatments ensure women reproductive health through early detection of issues, management of chronic conditions like PCOS and fibroids, and personalized care for all life stages. Regular check-ups prevent serious diseases, enhance quality of life, and address menstrual, fertility, and menopause concerns for overall well-being.
                    </p>
                </div>


            </section>


        </div>
    )
}

export default DepartmentDetailsPage