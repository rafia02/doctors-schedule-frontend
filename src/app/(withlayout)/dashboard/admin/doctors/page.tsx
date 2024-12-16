"use client"
import { EnvelopeIcon, PhoneIcon, StarIcon, UserIcon } from "@heroicons/react/16/solid";



const page = () => {

  const data = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', specialty: 'Cardiology', phone: '123-456-7890', rating: 4.8, father: 'abc', mather: 'zyx', brother: 'abdul jamal', sister: 'mitu kabir' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Editor', specialty: 'Cardiology', phone: '123-456-7890', rating: 4.8, father: 'abc', mather: 'zyx', brother: 'abdul jamal', sister: 'mitu kabir' },
    { id: 3, name: 'Alice Johnson', email: 'alice@example.com', role: 'Viewer', specialty: 'Cardiology', phone: '123-456-7890', rating: 4.8, father: 'abc', mather: 'zyx', brother: 'abdul jamal', sister: 'mitu kabir' },
    // Add more rows as needed
  ]

  return (


    <div className="bg-white p-8">
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





    // <div className="p-4">
    //   <div className="overflow-x-auto rounded-lg shadow-lg">
    //     <table className="min-w-full bg-white border border-gray-200 rounded-lg">
    //       <thead className="bg-primary text-white text-sm uppercase font-semibold tracking-wide">
    //         <tr>
    //           <th className="py-3 px-6 text-left">Doctor</th>
    //           <th className="py-3 px-6 text-left">Specialty</th>
    //           <th className="py-3 px-6 text-left">Phone</th>
    //           <th className="py-3 px-6 text-left">Email</th>
    //           <th className="py-3 px-6 text-left">Rating</th>
    //         </tr>
    //       </thead>
    //       <tbody className="text-gray-700">

    //         <tr className="border-b hover:bg-gray-50 duration-200">
    //           <td className="py-4 px-6 flex items-center space-x-3">
    //             <UserIcon className="w-4 h-4 text-primary" />
    //             <span className="font-medium">Dr. John Doe</span>
    //           </td>
    //           <td className="py-4 px-6 flex items-center space-x-3">
    //             <UserIcon className="w-4 h-4 text-primary" />
    //             <span className="font-medium">Dr. John Doe</span>
    //           </td>
    //           <td className="py-4 px-6 flex items-center space-x-3">
    //             <UserIcon className="w-4 h-4 text-primary" />
    //             <span className="font-medium">Dr. John Doe</span>
    //           </td>
    //           <td className="py-4 px-6 flex items-center space-x-3">
    //             <UserIcon className="w-4 h-4 text-primary" />
    //             <span className="font-medium">Dr. John Doe</span>
    //           </td>
    //           <td className="py-4 px-6 flex items-center space-x-3">
    //             <UserIcon className="w-4 h-4 text-primary" />
    //             <span className="font-medium">Dr. John Doe</span>
    //           </td>
    //         </tr>



    //         {doctors.map((doctor) => (
    //           <tr
    //             key={doctor.id}
    //             className="border-b hover:bg-gray-50 transition-colors duration-200"
    //           >
    //             <td className="py-4 px-6 flex items-center space-x-3">
    //               <UserIcon className="w-4 h-4 text-primary" />
    //               <span className="font-medium">{doctor.name}</span>
    //             </td>
    //             <td className="py-4 px-6">{doctor.specialty}</td>
    //             <td className="py-4 px-6 flex items-center space-x-2">
    //               <PhoneIcon className="w-4 h-4 text-primary" />
    //               <span>{doctor.phone}</span>
    //             </td>
    //             <td className="py-4 px-6 flex items-center space-x-2">
    //               {/* <MailIcon className="w-4 h-4 text-primary" /> */}
    //               <span>{doctor.email}</span>
    //             </td>
    //             {/* <td className="py-4 px-6 text-center text-gray-800 font-medium">
    //               {doctor.rating}
    //             </td> */}
    //           </tr>
    //         ))}
    //       </tbody>
    //     </table>
    //   </div>
    // </div>




  )
}

export default page