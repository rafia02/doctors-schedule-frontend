import React from 'react'
import { EnvelopeIcon, PhoneIcon, StarIcon, UserIcon } from "@heroicons/react/16/solid";
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
                  <th scope="col" className="px-8 py-4">Name</th>
                  <th scope="col" className="px-8 py-4">Specialty</th>
                  <th scope="col" className="px-8 py-4">Email</th>
                  <th scope="col" className="px-8 py-4">Phone</th>
                  <th scope="col" className="px-8 py-4 rounded-tr-lg">Rating</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr key={item.id} className="border-b text-sm hover:bg-gray-100 duration-200">
                    <td className="whitespace-nowrap px-7 py-6">{index + 1}</td>

                    <td className="whitespace-nowrap px-8 py-6">
                      <div className="flex items-center gap-1">
                        <UserIcon className="w-4 h-4 text-primary" />
                        <p>{item.name}</p>
                      </div>
                    </td>

                    <td className="whitespace-nowrap px-8 py-6">{item.specialty}</td>

                    <td className="whitespace-nowrap px-8 py-6">
                      <div className="flex items-center gap-2">
                        <EnvelopeIcon className="w-4 h-4 text-primary" />
                        <p>{item.email}</p>
                      </div>
                    </td>


                    <td className="whitespace-nowrap px-8 py-6">
                      <div className="flex items-center gap-1">
                        <PhoneIcon className="w-4 h-4 text-primary" />
                        <p>{item.phone}</p>
                      </div>
                    </td>


                    <td className="whitespace-nowrap px-8 py-6">
                      <div className="flex items-center gap-1">
                        <StarIcon className="w-4 h-4 text-primary" />
                        <p>{item.rating}</p>
                      </div>
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