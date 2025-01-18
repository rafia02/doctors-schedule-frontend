"use client"

import { useQuery } from '@tanstack/react-query'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import LoadingSpinner from '../shared/loadingSpinner'
import { Department } from '@/Types/adminDashboardType'
import { fetchSpecializations } from '@/lib/adminApi/specializationApi'


const DepartmentTypes = () => {


  const { data, isLoading, error } = useQuery<Department[]>({
    queryKey: ['departments'],
    queryFn: fetchSpecializations,
  });

  if (isLoading) return <LoadingSpinner></LoadingSpinner>;
  if (error) return <p className="text-center text-red-500">Error Something. Please try again.</p>;

  // console.log("dataaaaaaaaaaaaaaaaaaa", data)
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

      <div className='grid grid-cols-1 md:grid-cols-3 gap-x-7 gap-y-10 mt-10'>


        {
          data?.map((department, i) => <Link key={i} href={`/department/${department._id}`} className='text-textLight p-4 rounded shadow hover:bg-primary hover:text-white duration-500'>
            <div>
              <Image className='w-16 h-16 p-3 rounded-lg bg-[#e8eefb]' height={50} width={50} src={department?.iconImage} alt=''></Image>
            </div>
            <div>
              <h5 className='my-4 text-xl font-semibold'>{department?.title}</h5>
              <p className='tracking-wide leading-6 text-[16px]'>{department.subDescription.slice(0, 150)}...</p>
            </div>
          </Link>)
        }

      </div>
    </div>
  )
}

export default DepartmentTypes