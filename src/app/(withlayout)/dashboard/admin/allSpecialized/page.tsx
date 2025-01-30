"use client"
import React from 'react'
import { TrashIcon } from "@heroicons/react/16/solid";
import Image from 'next/image';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { Department } from '@/Types/adminDashboardType';
import { fetchSpecializations, deleteSpecialization } from '@/lib/specializationApi';
import LoadingSpinner from '@/components/shared/loadingSpinner';

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


  if (isLoading) return <LoadingSpinner></LoadingSpinner>;
  if (error) return <p className="text-center text-red-500">Error Something. Please try again.</p>;

  const handleDelete = (id: string) => {
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
                        <Image src={item?.iconImage} height={50} width={30} alt=''></Image>
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