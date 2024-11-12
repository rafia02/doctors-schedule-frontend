"use client"
import { EnvelopeIcon, PhoneIcon, UserIcon } from "@heroicons/react/16/solid";
import { useState } from "react";


const page = () => {

  const data = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', specialty: 'Cardiology', phone: '123-456-7890', rating: 4.8, father: 'abc', mather: 'zyx', brother: 'abdul jamal', sister: 'mitu kabir' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Editor', specialty: 'Cardiology', phone: '123-456-7890', rating: 4.8, father: 'abc', mather: 'zyx', brother: 'abdul jamal', sister: 'mitu kabir'  },
    { id: 3, name: 'Alice Johnson', email: 'alice@example.com', role: 'Viewer', specialty: 'Cardiology', phone: '123-456-7890', rating: 4.8, father: 'abc', mather: 'zyx', brother: 'abdul jamal', sister: 'mitu kabir'  },
    // Add more rows as needed
  ];


  const [doctors] = useState([
    { id: 1, name: 'Dr. John Doe', specialty: 'Cardiology', phone: '123-456-7890', email: 'johndoe@example.com', rating: 4.8 },
    { id: 2, name: 'Dr. Jane Smith', specialty: 'Pediatrics', phone: '987-654-3210', email: 'janesmith@example.com', rating: 4.9 },
    { id: 3, name: 'Dr. Alice Brown', specialty: 'Orthopedics', phone: '456-789-0123', email: 'alicebrown@example.com', rating: 4.7 },
    // Additional doctors as needed
  ]);


  return (

    <div className="">
      <div className="flex shadow-sm rounded-tl-lg flex-col overflow-x-auto">
        <div className="">
          <div className="inline-block ">
            <div className="overflow-x-auto rounded-lg">
              <table className="text-left w-full rounded-lg">
                <thead className="bg-primary text-white rounded-lg text-sm uppercase font-semibold tracking-wide">
                  <tr>
                    <th scope="col" className="px-7 py-4 ">Serial</th>
                    <th scope="col" className="px-7 py-4">Name</th>
                    <th scope="col" className="px-7 py-4">Email</th>
                    <th scope="col" className="px-7 py-4">Phone</th>
                    <th scope="col" className="px-7 py-4">Specialty</th>
                    <th scope="col" className="px-7 py-4 rounded-tr-lg">Rating</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item, index) => (
                    <tr key={item.id} className="dark:border-neutral-500">
                      <td className="whitespace-nowrap px-7 py-4 font-medium">{index + 1}</td>
                      <td className="whitespace-nowrap px-7 py-4 font-medium flex items-center">
                        <UserIcon className="w-5 h-5 text-primary" />
                        <span className="ml-2 font-medium">{item.name}</span>
                      </td>

                      <td className="whitespace-nowrap px-7 py-4 font-medium flex items-center">
                        <UserIcon className="w-5 h-5 text-primary" />
                        <span className="ml-2 font-medium">{item.name}</span>
                      </td>
                      
                      <td className="whitespace-nowrap px-7 py-4 font-medium">{item.email}</td>
                      <td className="whitespace-nowrap px-7 py-4 font-medium">{item.phone}</td>
                      <td className="whitespace-nowrap px-7 py-4 font-medium">{item.specialty}</td>
                      <td className="whitespace-nowrap px-7 py-4 font-medium">{item.rating}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>


  //   <div className=" m-5">
  //     <div className="flex flex-col overflow-x-auto">
  //   <div className="sm:-mx-6 lg:-mx-8">
  //     <div className="inline-block py-2 px-5 ">
  //       <div className="overflow-x-auto ">
  //         <table className=" text-left w-full">
  //           <thead className=" bg-primary text-white rounded-lg  text-sm uppercase font-semibold tracking-wide w-overflow-x-auto ">
  //             <tr>
  //               <th scope="col" className="px-7 py-4">Serial</th>
  //               <th scope="col" className="px-7 py-4">Name</th>
  //               <th scope="col" className="px-7 py-4">Email</th>
  //               <th scope="col" className="px-7 py-4">Phone</th>
  //               <th scope="col" className="px-7 py-4">specialty</th>
  //               <th scope="col" className="px-7 py-4">Heading</th>
  //               <th scope="col" className="px-7 py-4">Heading</th>
  //               <th scope="col" className="px-7 py-4">Heading</th>
  //               <th scope="col" className="px-7 py-4">Heading</th>

      
  //             </tr>
  //           </thead>
  //           <tbody>
  //             <tr className=" dark:border-neutral-500">
  //               <td className="whitespace-nowrap px-7 py-4 font-medium">1</td>    
  //               <td className="whitespace-nowrap px-7 py-4 font-medium flex items-center">
  //           <UserIcon className="w-5 h-5 text-primary" />
  //          <span className="font-medium">Dr. John Doe</span>
  //          </td>      
  //               <td className="whitespace-nowrap px-7 py-4 font-medium">Altab mahmud jaman</td>          
  //               <td className="whitespace-nowrap px-7 py-4 font-medium">altab"gmail.com</td>          
  //             </tr>
              
  //           </tbody>
  //         </table>
  //       </div>
  //     </div>
  //   </div>
  // </div>
  //   </div>




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
    //             <UserIcon className="w-5 h-5 text-primary" />
    //             <span className="font-medium">Dr. John Doe</span>
    //           </td>
    //           <td className="py-4 px-6 flex items-center space-x-3">
    //             <UserIcon className="w-5 h-5 text-primary" />
    //             <span className="font-medium">Dr. John Doe</span>
    //           </td>
    //           <td className="py-4 px-6 flex items-center space-x-3">
    //             <UserIcon className="w-5 h-5 text-primary" />
    //             <span className="font-medium">Dr. John Doe</span>
    //           </td>
    //           <td className="py-4 px-6 flex items-center space-x-3">
    //             <UserIcon className="w-5 h-5 text-primary" />
    //             <span className="font-medium">Dr. John Doe</span>
    //           </td>
    //           <td className="py-4 px-6 flex items-center space-x-3">
    //             <UserIcon className="w-5 h-5 text-primary" />
    //             <span className="font-medium">Dr. John Doe</span>
    //           </td>
    //         </tr>



    //         {doctors.map((doctor) => (
    //           <tr
    //             key={doctor.id}
    //             className="border-b hover:bg-gray-50 transition-colors duration-200"
    //           >
    //             <td className="py-4 px-6 flex items-center space-x-3">
    //               <UserIcon className="w-5 h-5 text-primary" />
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