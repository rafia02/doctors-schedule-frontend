"use client"

import { useState } from "react";
import Image from "next/image";
import { Bars3Icon } from "@heroicons/react/16/solid";



const departments = [
  "Cardiology",
  "Dermatology",
  "Neurology",
  "Orthopedics",
  "Pediatrics",
  "Psychiatry",
  "Radiology",
  "Surgery",
];


const FindCatagoryDoctorPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [selectedDepartment, setSelectedDepartment] = useState("")


  const handleSelectChange = (event) => {
    setSelectedDepartment(event.target.value)
  };


  return (
    <div className="bg-[#fafaff]">
      {/* Hero Section */}
      <div>
        <div className="relative h-[40vh] md:h-[330px] flex items-center">
          {/* Background Image */}
          <Image
            src="https://res.cloudinary.com/doctorsshedule/image/upload/v1732638139/diljgjhk7fgmbvv6i5f9.png"
            alt="Hero Background"
            layout="fill"
            objectFit="cover"
            className="absolute inset-0 z-0"
          />
          <div className="absolute inset-0 bg-primary bg-opacity-30 z-10" />
          {/* Text and Button */}
          <div className="relative z-20 text-center text-slate-100 px-5 md:px-8 py-4">
            <h1 className="text-3xl md:text-5xl font-bold mb-5">
              Find Your Specialized Doctor
            </h1>
            <p className="text-lg md:text-xl md:w-8/12 mx-auto">
              The Health Center’s team of doctors is dedicated to providing high-quality care for you and your family. Select from one of the services below to find a provider.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col mt-16 md:flex-row px-5 md:px-8 gap-5">
        {/* Sidebar fst with Menu Icon */}
        <div className="w-full md:w-3/12">
          {/* Menu Icon for Mobile */}
          <button
            className="flex items-center gap-2 text-lg font-medium md:hidden mb-4"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Bars3Icon className="w-6 h-6" />
            <span>Find Doctor</span>
          </button>

          {/* Sidebar Menu */}
          <div
            className={`${isMenuOpen ? "block" : "hidden"
              } md:block shadow-lg rounded-md bg-white sticky top-5 h-auto md:h-[calc(100vh-4rem)] p-4`}
          >
            <div className="flex justify-between items-center w-full mb-4">
              <p className="font-bold text-lg">Find Doctor</p>
              <button className="text-sm text-blue-500">Clear All</button>
            </div>

            <div>
              <label
                htmlFor="department"
                className="block text-gray-700 font-semibold mb-2"
              >
                Select Department
              </label>
              <select
                id="department"
                value={selectedDepartment}
                onChange={handleSelectChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="" disabled>
                  Choose a department
                </option>
                {departments.map((dept, index) => (
                  <option key={index} value={dept}>
                    {dept}
                  </option>
                ))}
              </select>
              {selectedDepartment && (
                <p className="mt-3 text-sm text-gray-600">
                  You selected:{" "}
                  <span className="font-medium text-blue-500">
                    {selectedDepartment}
                  </span>
                </p>
              )}
            </div>
            <p className="text-gray-700 text-sm">
              Use filters to find doctors based on specialty, location, and more.
            </p>
          </div>
        </div>

        {/* Scrollable 2nd Content */}
        <div className="w-full md:w-9/12 rounded-md p-4">
          <h2 className="text-xl font-bold mb-4">Available Doctors</h2>
          <div className="space-y-4">
            <p>
              Add your scrollable content here. This section will stack on smaller screens but allow scrolling on larger devices while the left column remains fixed.
            </p>
            <p>Example doctor listing...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindCatagoryDoctorPage;











// import Image from "next/image";

// const FindCatagoryDoctorPage = () => {
//   return (
//     <div>
//       {/* Hero Section */}
//       <div>
//         <div className="relative h-[40vh] md:h-[330px] flex items-center">
//           {/* Background Image */}
//           <Image
//             src="https://res.cloudinary.com/doctorsshedule/image/upload/v1732638139/diljgjhk7fgmbvv6i5f9.png"
//             alt="Hero Background"
//             layout="fill"
//             objectFit="cover"
//             className="absolute inset-0 z-0"
//           />
//           <div className="absolute inset-0 bg-primary bg-opacity-30 z-10" />
//           {/* Text and Button */}
//           <div className="relative z-20 text-center text-slate-100 px-5 md:px-8 py-4">
//             <h1 className="text-3xl md:text-5xl font-bold mb-5">
//               Find Your Specialized Doctor
//             </h1>
//             <p className="text-lg md:text-xl md:w-8/12 mx-auto">
//               The Health Center’s team of doctors is dedicated to providing high-quality care for you and your family. Select from one of the services below to find a provider.
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="flex flex-col md:flex-row px-5 md:px-8 gap-5">
//         {/* Fixed Column */}
//         <div className="w-full md:w-3/12 border-4 sticky top-5 h-auto md:h-[calc(100vh-2rem)] bg-white">
//           <div>
//             <div className="flex justify-between items-center w-full mb-4">
//               <p>Find Doctor</p>
//               <button className="text-sm text-blue-500">Clear All</button>
//             </div>
//             <p>Filter content here...</p>
//           </div>
//         </div>

//         {/* Scrollable Content */}
//         <div className="w-full md:w-9/12 h-auto md:h-[140vh] overflow-y-auto bg-gray-100 p-4 rounded-md">
//           <p className="my-96">
//             Add your scrollable content here. This section will scroll independently on larger screens while stacking on smaller screens.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FindCatagoryDoctorPage;
