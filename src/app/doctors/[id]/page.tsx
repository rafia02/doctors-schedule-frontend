"use client"

import { useState } from "react";
import Image from "next/image";
import { Bars3Icon } from "@heroicons/react/16/solid";
import MultiRangeSlider from "multi-range-slider-react";


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
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const handleSelectChange = (event: any) => {
    setSelectedDepartment(event.target.value)
  }

  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(500);

  const handleInput = (e: any) => {
    setMinValue(e.minValue);
    setMaxValue(e.maxValue);
  }


  const handleFilterChange = (filter: string) => {
    setSelectedFilters((prev) =>
      prev.includes(filter)
        ? prev.filter((item) => item !== filter)
        : [...prev, filter]
    );
  }




  const doctors = [
    {
      name: "Dr. John Doe",
      image: "https://via.placeholder.com/150",
      department: "Cardiology",
      specialised: "MBBS, MD (Cardiology), FCPS (Internal Medicine)",
      hospitalName: "Dhaka Medical Center",
      location: "Dhaka, Bangladesh",
      consultationFee: 500,
      yearsOfExperience: 15,
      rating: 4.8,
      onlineNow: true,
    },
    {
      name: "Dr. Jane Smith",
      image: "https://via.placeholder.com/150",
      department: "Dermatology",
      specialised: "MBBS, FCPS (Pediatrics), MD (Neonatology)",
      hospitalName: "Chittagong Skin Care Hospital",
      location: "Chittagong, Bangladesh",
      consultationFee: 800,
      yearsOfExperience: 10,
      rating: 4.5,
      onlineNow: false,
    },
    {
      name: "Dr. Mike Johnson",
      image: "https://via.placeholder.com/150",
      department: "Neurology",
      specialised: "Brain Disorders",
      hospitalName: "Rajshahi Neurology Institute",
      location: "Rajshahi, Bangladesh",
      consultationFee: 600,
      yearsOfExperience: 12,
      rating: 4.7,
      onlineNow: true,
    },
    {
      name: "Dr. Emily Williams",
      image: "https://via.placeholder.com/150",
      department: "Pediatrics",
      specialised: "Child Healthcare",
      hospitalName: "Sylhet Children's Hospital",
      location: "Sylhet, Bangladesh",
      consultationFee: 400,
      yearsOfExperience: 8,
      rating: 4.3,
      onlineNow: false,
    },
    {
      name: "Dr. James Brown",
      image: "https://via.placeholder.com/150",
      department: "Orthopedics",
      specialised: "Bone Surgery",
      hospitalName: "Barisal Orthopedic Center",
      location: "Barisal, Bangladesh",
      consultationFee: 1000,
      yearsOfExperience: 20,
      rating: 4.9,
      onlineNow: true,
    },
    {
      name: "Dr. Sarah Taylor",
      image: "https://via.placeholder.com/150",
      department: "Psychiatry",
      specialised: "Mental Health",
      hospitalName: "Khulna Psychiatry Clinic",
      location: "Khulna, Bangladesh",
      consultationFee: 700,
      yearsOfExperience: 11,
      rating: 4.6,
      onlineNow: false,
    },
    {
      name: "Dr. Robert Harris",
      image: "https://via.placeholder.com/150",
      department: "Surgery",
      specialised: "General Surgery",
      hospitalName: "Mymensingh General Hospital",
      location: "Mymensingh, Bangladesh",
      consultationFee: 1200,
      yearsOfExperience: 18,
      rating: 4.9,
      onlineNow: true,
    },
    {
      name: "Dr. Patricia Clark",
      image: "https://via.placeholder.com/150",
      department: "Radiology",
      specialised: "Medical Imaging",
      hospitalName: "Rajshahi Diagnostic Center",
      location: "Rajshahi, Bangladesh",
      consultationFee: 750,
      yearsOfExperience: 14,
      rating: 4.7,
      onlineNow: true,
    },
    {
      name: "Dr. William Lee",
      image: "https://via.placeholder.com/150",
      department: "Gastroenterology",
      specialised: "Digestive Health",
      hospitalName: "Comilla Gastroenterology Hospital",
      location: "Comilla, Bangladesh",
      consultationFee: 850,
      yearsOfExperience: 9,
      rating: 4.4,
      onlineNow: false,
    },
    {
      name: "Dr. Jennifer Martinez",
      image: "https://via.placeholder.com/150",
      department: "Oncology",
      specialised: "Cancer Treatment",
      hospitalName: "Dhaka Oncology Center",
      location: "Dhaka, Bangladesh",
      consultationFee: 1500,
      yearsOfExperience: 22,
      rating: 5.0,
      onlineNow: true,
    },
  ];
  



  return (
    <div className="bg-[#f9f9fc] text-textDark">
      {/* Hero Section */}
      <div>
        <div className="relative h-[40vh] md:h-[250px] flex items-center">
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
            <Bars3Icon className="w-[18px] h-[18px]" />
            <span>Find Doctor</span>
          </button>

          {/* Sidebar Menu */}

          {/* <div
            className={`${isMenuOpen ? "block" : "hidden"
              } md:block shadow-lg rounded-xl bg-white sticky top-5 h-auto md:h-[calc(100vh-4rem)] py-7`}
          ></div> */}
          <div
            className={`${isMenuOpen ? "block" : "hidden"
              } md:block shadow-lg rounded-xl mb-10 bg-white sticky top-5 h-auto  py-7`}
          >
            <div className="flex px-5 justify-between items-center w-full mb-4">
              <p className="font-bold text-lg">Find Doctor</p>
              <button className="text-sm text-primary font-s">Clear All</button>
            </div>

            <div className="bg-[#213567] px-5 pt-7 pb-9">
              <label
                htmlFor="department"
                className="block text-lg font-semibold mb-3 text-white"
              >
                Select Department
              </label>
              <select
                id="department"
                value={selectedDepartment}
                onChange={handleSelectChange}
                className="w-full px-4 py-3 border border-gray-300 rounded shadow-sm focus:outline-none"
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

            </div>


            <div className="px-5 mt-8 mb-8">
              <div className="my-5">
                <h1 className="font-semibold">Consultation Fee : </h1>
                <MultiRangeSlider
                  min={0} // Minimum range of the slider
                  max={1000} // Maximum range of the slider
                  minValue={minValue} // Set default selected min value
                  maxValue={maxValue} // Set default selected max value
                  step={1}
                  ruler={false}
                  label={false}
                  barInnerColor="#415da1"
                  className="!shadow-none !border-none"
                  onInput={handleInput}
                />
                <div className="text-sm tracking-wider">
                  Price : {minValue} BDT - {maxValue} BDT
                </div>
              </div>
            </div>


            <div className="px-5 border-y py-8">
              <label
                htmlFor="department"
                className="block font-semibold mb-3"
              >
                Filter by
              </label>
              <div className="flex flex-col gap-3">
                <select
                  id="department"
                  value={selectedDepartment}
                  onChange={handleSelectChange}
                  className="w-full px-4 py-3 border border-gray-400 rounded shadow-sm focus:outline-none"
                >
                  <option value="" disabled>
                    Hospital
                  </option>
                  {departments.map((dept, index) => (
                    <option key={index} value={dept}>
                      {dept}
                    </option>
                  ))}
                </select>

                <select
                  id="department"
                  value={selectedDepartment}
                  onChange={handleSelectChange}
                  className="w-full px-4 py-3 border border-gray-400 rounded shadow-sm focus:outline-none"
                >
                  <option value="" disabled>
                    Location
                  </option>
                  {departments.map((dept, index) => (
                    <option key={index} value={dept}>
                      {dept}
                    </option>
                  ))}
                </select>

                <select
                  id="department"
                  value={selectedDepartment}
                  onChange={handleSelectChange}
                  className="w-full px-4 py-3 border border-gray-400 rounded shadow-sm focus:outline-none"
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
              </div>

            </div>

            <div className="mb-4 px-5 pt-8">
              <label className="flex items-center mb-4">
                <input
                  type="checkbox"
                  value="Online Now"
                  checked={selectedFilters.includes("Online Now")}
                  onChange={() => handleFilterChange("Online Now")}
                  className="w-[18px] h-[18px] mr-3 accent-blue-800" // Larger checkbox and color
                />
                <span className="">Online Now</span> {/* Centered Label */}
              </label>
              <label className="flex items-center mb-4">
                <input
                  type="checkbox"
                  value="Female Doctors"
                  checked={selectedFilters.includes("Female Doctors")}
                  onChange={() => handleFilterChange("Female Doctors")}
                  className="w-[18px] h-[18px] mr-3 accent-blue-800" // Larger checkbox and pink color for Female
                />
                <span className="">Female Doctors</span> {/* Centered Label */}
              </label>
              <label className="flex items-center mb-4">
                <input
                  type="checkbox"
                  value="Male Doctors"
                  checked={selectedFilters.includes("Male Doctors")}
                  onChange={() => handleFilterChange("Male Doctors")}
                  className="w-[18px] h-[18px] mr-3 accent-blue-800" // Larger checkbox and dark blue color for Male
                />
                <span className="">Male Doctors</span> {/* Centered Label */}
              </label>
            </div>


          </div>
        </div>

        {/* Scrollable 2nd Content */}
        <div className="w-full md:w-9/12 rounded-md p-4">
          <h2 className="text-xl font-bold mb-4">Available Doctors</h2>


          <div className="grid grid-cols-1  gap-6">
  {doctors.map((doctor, index) => (
    <div
      key={index}
      className="bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300 ease-in-out transform"
    >
      <div className="flex flex-col md:flex-row">
        <div>
          <img
            src={doctor.image}
            alt={doctor.name}
            className="w-full md:w-32 h-auto object-cover bg-primary"
          />
        </div>

        <div className="p-4 flex-1">
          <h2 className="text-xl font-semibold text-gray-800">{doctor.name}</h2>
          <p className="text-sm text-gray-600">{doctor.specialised}</p>
          <p className="text-sm text-gray-500">{doctor.department}</p>
          <p className="text-sm text-gray-400">{doctor.location}</p>
          <p className="text-sm text-gray-400">{doctor.hospitalName}</p>
          <div className="flex flex-wrap items-center gap-4 mt-3">
            <span className="font-semibold text-lg text-primary">{doctor.consultationFee} BDT</span>
            <span className="text-sm text-gray-500">| {doctor.yearsOfExperience} years experience</span>
            <span className="text-sm text-gray-500">| Rating: {doctor.rating.toFixed(1)}</span>
          </div>
        </div>

        <div className="mt-4 md:mt-0 md:ml-4">
          <button
            className="w-full py-2 bg-primary text-white rounded-md hover:bg-primary-dark transition"
          >
            Book Appointment
          </button>
        </div>
      </div>
    </div>
  ))}
</div>





          {/* <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {doctors.map((doctor, index) => (
              <div
                key={index}
                className="border rounded-xl shadow-lg overflow-hidden bg-white"
              >
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-64 object-cover"
                />
                <div className="px-5 py-4">
                  <h2 className="text-xl font-semibold">{doctor.name}</h2>
                  <p className="text-sm text-gray-600">{doctor.department}</p>
                  <p className="text-sm text-gray-600">{doctor.location}</p>

                  <div className="flex justify-between items-center mt-3">
                    <p className="text-lg font-semibold text-blue-700">{doctor.consultationFee} BDT</p>
                    <div
                      className={`w-3 h-3 rounded-full ${doctor.onlineNow ? "bg-green-500" : "bg-gray-500"
                        }`}
                    />
                    <span className="text-sm">{doctor.onlineNow ? "Online Now" : "Offline"}</span>
                  </div>
                </div>
              </div>
            ))}
          </div> */}

        </div>
      </div>
    </div>
  );
};

export default FindCatagoryDoctorPage;











// // import Image from "next/image";

// // const FindCatagoryDoctorPage = () => {
// //   return (
// //     <div>
// //       {/* Hero Section */}
// //       <div>
// //         <div className="relative h-[40vh] md:h-[330px] flex items-center">
// //           {/* Background Image */}
// //           <Image
// //             src="https://res.cloudinary.com/doctorsshedule/image/upload/v1732638139/diljgjhk7fgmbvv6i5f9.png"
// //             alt="Hero Background"
// //             layout="fill"
// //             objectFit="cover"
// //             className="absolute inset-0 z-0"
// //           />
// //           <div className="absolute inset-0 bg-primary bg-opacity-30 z-10" />
// //           {/* Text and Button */}
// //           <div className="relative z-20 text-center text-slate-100 px-5 md:px-8 py-4">
// //             <h1 className="text-3xl md:text-5xl font-bold mb-5">
// //               Find Your Specialized Doctor
// //             </h1>
// //             <p className="text-lg md:text-xl md:w-8/12 mx-auto">
// //               The Health Center’s team of doctors is dedicated to providing high-quality care for you and your family. Select from one of the services below to find a provider.
// //             </p>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Main Content */}
// //       <div className="flex flex-col md:flex-row px-5 md:px-8 gap-5">
// //         {/* Fixed Column */}
// //         <div className="w-full md:w-3/12 border-4 sticky top-5 h-auto md:h-[calc(100vh-2rem)] bg-white">
// //           <div>
// //             <div className="flex justify-between items-center w-full mb-4">
// //               <p>Find Doctor</p>
// //               <button className="text-sm text-blue-500">Clear All</button>
// //             </div>
// //             <p>Filter content here...</p>
// //           </div>
// //         </div>

// //         {/* Scrollable Content */}
// //         <div className="w-full md:w-9/12 h-auto md:h-[140vh] overflow-y-auto bg-gray-100 p-4 rounded-md">
// //           <p className="my-96">
// //             Add your scrollable content here. This section will scroll independently on larger screens while stacking on smaller screens.
// //           </p>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default FindCatagoryDoctorPage;
