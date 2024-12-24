"use client"
import React from 'react'
import { EnvelopeIcon, PhoneIcon, StarIcon, TrashIcon, UserIcon } from "@heroicons/react/16/solid";
import Image from 'next/image';
import { QueryClient, useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { Department } from '@/Types/specalizationType';
import { fetchSpecializations, deleteSpecialization } from '@/lib/specializationApi';

const AllSpecialized = () => {

  const queryClient = useQueryClient();
  const { data, isLoading, error } = useQuery<Department[]>({
    queryKey: ['departments'],
    queryFn: fetchSpecializations,
  });

  // Delete specialization mutation
  const mutation = useMutation({
    mutationFn: deleteSpecialization,
    onSuccess: () => {
      // Invalidate the query by key
      queryClient.invalidateQueries({
        queryKey: ['departments'],
      });
    },
  });

  const handleDelete = (id: any) => {
    // Trigger delete mutation
    mutation.mutate(id);
  };


  return (
    <div className="bg-white">
      <h4 className=" text-center uppercase font-semibold mb-5 tracking-wider">All <span className="text-primary">Specialized</span> information</h4>
      <div className="flex shadow-sm rounded-tl-lg flex-col overflow-x-auto">
        <div className="">
          <div className="inline-block w-full">
            <div className="overflow-x-auto rounded-lg">
              <table className="text-left w-full rounded-lg">
                <thead className="bg-primary text-white rounded-lg text-xs uppercase ">
                  <tr>
                    <th scope="col" className="px-7 py-4">N.o</th>
                    <th scope="col" className="px-8 py-4">Image</th>
                    <th scope="col" className="px-8 py-4">Department</th>
                    <th scope="col" className="px-8 py-4">Sub Description</th>
                    <th scope="col" className="px-8 py-4">Action</th>
                    {/* <th scope="col" className="px-8 py-4">Email</th>
                  <th scope="col" className="px-8 py-4">Phone</th>
                  <th scope="col" className="px-8 py-4 rounded-tr-lg">Rating</th> */}
                  </tr>
                </thead>
                <tbody>
                  {data?.map((item, i) => (
                    <tr key={i} className="border-b text-sm hover:bg-gray-100 duration-200">
                      <td className="whitespace-nowrap px-7 py-6">{i + 1}</td>

                      <td className="whitespace-nowrap px-8 py-6">
                        <Image src="https://res.cloudinary.com/doctorsshedule/image/upload/v1734892754/kdob499vtqkd1k6hmkhd.png" height={50} width={30} alt=''></Image>
                      </td>
                      <td className="whitespace-nowrap px-8 py-6">{item?.title}</td>
                      <td className="whitespace-nowrap px-8 py-6">{item?.subDescription.slice(0, 20)}..</td>
                      <td className="whitespace-nowrap px-8 py-6">
                      <TrashIcon
                          className="w-[22px] text-red-500 cursor-pointer"
                          onClick={() => handleDelete(item._id)}  // Pass the item's ID, assuming _id is the identifier
                        />
                      </td>






                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AllSpecialized