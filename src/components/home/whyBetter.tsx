import React from 'react'
import BenifitCountup from '../clientComponents/benifitCountup'

const WhyBetter = () => {
    return (
        <div className='px-5 md:px-8 my-40 '>
            <div className='flex flex-col-reverse md:flex-row items-center gap-9 md:gap-32 text-textLight'>
                {/* <div className='w-1/2 pt-14 shadow-md rounded'>
                    <div className='flex flex-col'>
                        <div className='text-center border-b pb-10'>
                            <h1 className='text-5xl text-primary mb-2 font-semibold'>8566+</h1>
                            <p className='text-lg tracking-wide text-textLight'>Happy Patients</p>
                        </div>
                        <div className='grid grid-cols-2'>
                            <div className='text-center border-r px-8 pt-10 pb-14'>
                                <h1 className='text-5xl text-primary mb-2 font-semibold'>135+</h1>
                                <p className='text-lg tracking-wide text-textLight'>Expert Doctors</p>
                            </div>
                            <div className='text-center px-8 pt-10'>
                                <h1 className='text-5xl text-primary mb-2 font-semibold'>4.9</h1>
                                <p className='text-lg tracking-wide text-textLight'>Average Rating</p>
                            </div>
                        </div>
                    </div>
                </div> */}


                <div className="md:w-1/2 pt-14 border bg-secondery rounded">
                    <BenifitCountup></BenifitCountup>
                </div>




                <div className='md:w-1/2'>
                    <p className='tracking-widest text-primary font-semibold uppercase'>Our benefits</p>
                    <h1 className='text-5xl my-5 font-bold'>Why we are better</h1>
                    <p className='text-lg'>
                        The healthcare industry is dynamic and highly competitive, requiring dedicated care and continuous innovation. We’re excited to introduce you to our company—a leader in raising standards and driving meaningful change at an exceptional pace.</p>
                </div>
            </div>
        </div>
    )
}

export default WhyBetter