"use client"

import { useState } from "react";




const SearchBar = () => {
  const [selected, setSelected] = useState("find");

  const [searchParams, setSearchParams] = useState({
    specialty: "",
    doctorName: "",
    date: "",
    availability: "",
    hospitalName: ""
  });

  const handleInputChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setSearchParams((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log("Submitted Data:", searchParams);
  };




  return (
    <div className=" px-5 md:px-8 py-16"
      style={{
        backgroundImage: `url("https://res.cloudinary.com/doctorsshedule/image/upload/v1732635877/ftks233x60q4eubrlg4s.png")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",

      }}
    >
      <div className="bg-white pb-20 rounded shadow-md">


        {/* doctor and appoinemnt button  */}
        <div className="flex items-center text-sm md:text-xl font-semibold">
          <button
            onClick={() => setSelected("find")}
            className={`w-1/2 rounded-tl  py-5 duration-500 ${selected === "find" ? "bg-primary text-white" : "bg-secondery hover:bg-[#cfdefe]"
              }`}
          >
            Find A Doctor
          </button>
          <button
            onClick={() => setSelected("schedule")}
            className={`w-1/2 rounded-tr  py-5 duration-500 ${selected === "schedule" ? "bg-primary text-white" : "bg-secondery hover:bg-[#cfdefe]"
              }`}
          >
            Schedule An Appointment
          </button>
        </div>

        {/* search form  */}

        <div className="mt-20 px-10">
          {
            selected === "find" &&
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-6 gap-5   rounded-md  ">
              {/* Search by Specialty */}
              <div>
                <select
                  id="specialty"
                  name="specialty"
                  value={searchParams.specialty}
                  onChange={handleInputChange}
                  className="w-full focus:outline-none border-btnHover border rounded px-3 py-4 "
                >
                  <option value="">Select Specialty</option>
                  <option value="cardiology">Cardiology</option>
                  <option value="neurology">Neurology</option>
                  <option value="pediatrics">Pediatrics</option>
                  {/* Add more specialties */}
                </select>
              </div>

              {/* Search by Doctor Name */}
              <div>
                <input
                  type="text"
                  id="doctorName"
                  name="doctorName"
                  value={searchParams.doctorName}
                  onChange={handleInputChange}
                  placeholder="Enter Doctor Name"
                  className="w-full focus:outline-none border-btnHover border rounded px-3 py-[13.3px] "
                />
              </div>

              {/* Search by Date & Time */}

              <div>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={searchParams.date}
                  onChange={handleInputChange}
                  className="w-full focus:outline-none border-btnHover border rounded px-3 py-3 "
                />
              </div>

              {/* <div>
                // <label htmlFor="time" className="block  font-medium">Time</label>
                <input
                  type="time"
                  id="time"
                  name="time"
                  // value={searchParams.time}
                  // onChange={handleInputChange}
                  className="w-full border rounded-md p-2 "
                />
              </div> */}


              {/* Search by Availability */}
              <div>
                <select
                  id="availability"
                  name="availability"
                  value={searchParams.availability}
                  onChange={handleInputChange}
                  className="w-full focus:outline-none border-btnHover border rounded px-3 py-4"
                >
                  <option value="">Select Availability</option>
                  <option value="available">Available</option>
                  <option value="unavailable">Unavailable</option>
                </select>
              </div>

              {/* Search by Hospital Name */}
              <div>
                <input
                  type="text"
                  id="hospitalName"
                  name="hospitalName"
                  value={searchParams.hospitalName}
                  onChange={handleInputChange}
                  placeholder="Enter Hospital Name"
                  className="w-full focus:outline-none border-btnHover border rounded px-3 py-[13.3px] "
                />
              </div>

              <div className="flex items-end">
                <button type="submit" className="w-full bg-btnClr text-white px-3 py-[13.5px] rounded hover:bg-btnHover transition">Search</button>
              </div>
            </form>
          }

        </div>









      </div>
    </div>
  )
}

export default SearchBar