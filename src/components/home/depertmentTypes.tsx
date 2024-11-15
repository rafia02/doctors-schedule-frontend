import Image from 'next/image'
import React from 'react'

const DepartmentTypes = () => {
  return (
    <div className='mt-28 px-5 md:px-8'>
      <div className='flex flex-col md:flex-row text-textDark gap-5 justify-between md:items-center'>
        <div>
          <h2 className='text-lg mb-2 text-textLight tracking-widest'>Our Services</h2>
          <h2 className='text-2xl md:text-4xl font-semibold'>Our <span className='text-primary'>Specialized </span> Healthcare<br /> Departments</h2>
        </div>
        <div className='text-end md:text-start'>
          <button className='bg-btnClr text-sm md:text-[16px] text-white px-3 md:px-5 py-1 hover:bg-btnHover duration-500 hover:scale-105'>View More</button>
        </div>
      </div>


      {/* card  */}

      <div className='grid grid-cols-1 md:grid-cols-3 gap-x-7 gap-y-10 mt-14'>
        <div className='text-textLight p-4 rounded shadow hover:bg-primary hover:text-white duration-500'>
          <div>
            <Image className='w-16 h-16 p-3 rounded-lg bg-secondery' height={50} width={50} src="https://cdn.prod.website-files.com/63b3f9e2d9818851cf576a6f/63b514edd3a5520923d686a6_Cardiology.svg" alt=''></Image>
          </div>
          <div>
            <h5 className='my-4 text-xl font-semibold'>Cardiology</h5>
            <p className='tracking-wide leading-6 text-[16px]'>Offering specialized heart care, including routine check-ups, preventive care, focused on cardiovascular health.</p>
          </div>
        </div>

        <div className='text-textLight p-4 rounded shadow hover:bg-primary hover:text-white duration-500'>
          <div>
            <Image className='w-16 h-16 p-3 rounded-lg bg-secondery' height={50} width={50} src="https://cdn.prod.website-files.com/63b3f9e2d9818851cf576a6f/63b514edd3a5520923d686a6_Cardiology.svg" alt=''></Image>
          </div>
          <div>
            <h5 className='my-4 text-xl font-semibold'>Cardiology</h5>
            <p className='tracking-wide leading-6 text-[16px]'>Offering specialized heart care, including routine check-ups, preventive care, focused on cardiovascular health.</p>
          </div>
        </div>

        <div className='text-textLight p-4 rounded shadow hover:bg-primary hover:text-white duration-500'>
          <div>
            <Image className='w-16 h-16 p-3 rounded-lg bg-secondery' height={50} width={50} src="https://cdn.prod.website-files.com/63b3f9e2d9818851cf576a6f/63b514edd3a5520923d686a6_Cardiology.svg" alt=''></Image>
          </div>
          <div>
            <h5 className='my-4 text-xl font-semibold'>Cardiology</h5>
            <p className='tracking-wide leading-6 text-[16px]'>Offering specialized heart care, including routine check-ups, preventive care, focused on cardiovascular health.</p>
          </div>
        </div>

        <div className='text-textLight p-4 rounded shadow hover:bg-primary hover:text-white duration-500'>
          <div>
            <Image className='w-16 h-16 p-3 rounded-lg bg-secondery' height={50} width={50} src="https://cdn.prod.website-files.com/63b3f9e2d9818851cf576a6f/63b514edd3a5520923d686a6_Cardiology.svg" alt=''></Image>
          </div>
          <div>
            <h5 className='my-4 text-xl font-semibold'>Cardiology</h5>
            <p className='tracking-wide leading-6 text-[16px]'>Offering specialized heart care, including routine check-ups, preventive care, focused on cardiovascular health.</p>
          </div>
        </div>

        <div className='text-textLight p-4 rounded shadow hover:bg-primary hover:text-white duration-500'>
          <div>
            <Image className='w-16 h-16 p-3 rounded-lg bg-secondery' height={50} width={50} src="https://cdn.prod.website-files.com/63b3f9e2d9818851cf576a6f/63b514edd3a5520923d686a6_Cardiology.svg" alt=''></Image>
          </div>
          <div>
            <h5 className='my-4 text-xl font-semibold'>Cardiology</h5>
            <p className='tracking-wide leading-6 text-[16px]'>Offering specialized heart care, including routine check-ups, preventive care, focused on cardiovascular health.</p>
          </div>
        </div>

        <div className='text-textLight p-4 rounded shadow hover:bg-primary hover:text-white duration-500'>
          <div>
            <Image className='w-16 h-16 p-3 rounded-lg bg-secondery' height={50} width={50} src="https://cdn.prod.website-files.com/63b3f9e2d9818851cf576a6f/63b514edd3a5520923d686a6_Cardiology.svg" alt=''></Image>
          </div>
          <div>
            <h5 className='my-4 text-xl font-semibold'>Cardiology</h5>
            <p className='tracking-wide leading-6 text-[16px]'>Offering specialized heart care, including routine check-ups, preventive care, focused on cardiovascular health.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DepartmentTypes