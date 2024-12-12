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


  return (
    <div className="bg-[#f9f9fc]">
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
          <div
            className={`${isMenuOpen ? "block" : "hidden"
              } md:block shadow-lg rounded-xl bg-white sticky top-5 h-auto md:h-[calc(100vh-4rem)] py-7`}
          >
            <div className="flex px-5 justify-between items-center w-full mb-4">
              <p className="font-bold text-lg">Find Doctor</p>
              <button className="text-sm text-blue-500">Clear All</button>
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


            <div className="px-5 mt-8">
              <div className="my-5">
                <h1 className="text-lg font-semibold">Consultation Fee</h1>
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
                <div>
                  Price: {minValue} $ - {maxValue} $
                </div>
              </div>
            </div>

            <div className="mb-4 px-5">
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
