import React from 'react'
import { EnvelopeIcon, PhoneIcon, StarIcon, TrashIcon, UserIcon } from "@heroicons/react/16/solid";
import Image from 'next/image';
const AllSpecialized = () => {
    const data = [
        { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', specialty: 'Cardiology', phone: '123-456-7890', rating: 4.8, father: 'abc', mather: 'zyx', brother: 'abdul jamal', sister: 'mitu kabir' },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Editor', specialty: 'Cardiology', phone: '123-456-7890', rating: 4.8, father: 'abc', mather: 'zyx', brother: 'abdul jamal', sister: 'mitu kabir' },
        { id: 3, name: 'Alice Johnson', email: 'alice@example.com', role: 'Viewer', specialty: 'Cardiology', phone: '123-456-7890', rating: 4.8, father: 'abc', mather: 'zyx', brother: 'abdul jamal', sister: 'mitu kabir' },
        // Add more rows as needed
      ]
  return (
    <div className="bg-white py-8">
    <h4 className=" text-center uppercase font-semibold mb-5 tracking-wider">All <span className="text-primary">doctor</span> information</h4>
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
                  <th scope="col" className="px-8 py-4">Action</th>
                  {/* <th scope="col" className="px-8 py-4">Email</th>
                  <th scope="col" className="px-8 py-4">Phone</th>
                  <th scope="col" className="px-8 py-4 rounded-tr-lg">Rating</th> */}
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr key={item.id} className="border-b text-sm hover:bg-gray-100 duration-200">
                    <td className="whitespace-nowrap px-7 py-6">{index + 1}</td>

                    <td className="whitespace-nowrap px-8 py-6">
                      <Image src="https://res.cloudinary.com/doctorsshedule/image/upload/v1734892754/kdob499vtqkd1k6hmkhd.png" height={50} width={50} alt=''></Image>
                    </td>
                    <td className="whitespace-nowrap px-8 py-6">Eye Care</td>

                    <td className="whitespace-nowrap px-8 py-6">
                        <TrashIcon className='w-5 text-red-500'></TrashIcon>
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