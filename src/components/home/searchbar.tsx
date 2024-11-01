import TwoSearchBtn from "./twoSearchBtn"



const SearchBar = () => {
  return (
    <div className="font-jakarta px-5 md:px-8 mb-20"
    //      style={{
    //   backgroundImage: `url("https://cdn.prod.website-files.com/65525600ad11f5d8bc8c342b/65525600ad11f5d8bc8c3434_Background%20Pattern.svg")`,
    //   backgroundRepeat: "no-repeat",
    //   backgroundSize: "cover",

    // }}
    >
      <div className="">
        <TwoSearchBtn></TwoSearchBtn>
      {/* <div className="flex items-center text-sm md:text-xl font-semibold">
            <button   autoFocus  className="w-1/2 outline-none  focus:bg-primary focus:text-white bg-secondery py-5 hover:bg-[#cfdefe] duration-500">Find A Doctor</button>
            <button className="w-1/2 focus:bg-primary focus:text-white bg-secondery py-5 hover:bg-[#cfdefe] duration-500">Schedule A Appointment</button>
        </div> */}





















        {/* search form  */}

        <div className="mt-16">
          <form className="p-6 grid grid-cols-1 md:grid-cols-6 gap-5   rounded-md  ">
            {/* Search by Specialty */}
            <div>
              {/* <label htmlFor="specialty" className="block font-medium mb-1">Specialty</label> */}
              <select
                id="specialty"
                name="specialty"
                // value={searchParams.specialty}
                // onChange={handleInputChange}
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
              {/* <label htmlFor="doctorName" className="block font-medium mb-1">Doctor Name</label> */}
              <input
                type="text"
                id="doctorName"
                name="doctorName"
                // value={searchParams.doctorName}
                // onChange={handleInputChange}
                placeholder="Enter Doctor Name"
                className="w-full focus:outline-none border-btnHover border rounded px-3 py-[13.3px] "
              />
            </div>

            {/* Search by Date & Time */}

            <div>
              {/* <label htmlFor="date" className="block font-medium mb-1">Date</label> */}
              <input
                type="date"
                id="date"
                name="date"
                // value={searchParams.date}
                // onChange={handleInputChange}
                className="w-full focus:outline-none border-btnHover border rounded px-2 py-3 "
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
              {/* <label htmlFor="availability" className="block font-medium mb-1">Availability</label> */}
              <select
                id="availability"
                name="availability"
                // value={searchParams.availability}
                // onChange={handleInputChange}
                className="w-full focus:outline-none border-btnHover border rounded px-2 py-3 "
              >
                <option value="">Select Availability</option>
                <option value="available">Available</option>
                <option value="unavailable">Unavailable</option>
              </select>
            </div>

            {/* Search by Hospital Name */}
            <div>
              {/* <label htmlFor="hospitalName" className="block font-medium mb-1">Hospital Name</label> */}
              <input
                type="text"
                id="hospitalName"
                name="hospitalName"
                // value={searchParams.hospitalName}
                // onChange={handleInputChange}
                placeholder="Enter Hospital Name"
                className="w-full focus:outline-none border-btnHover border rounded px-2 py-3 "
              />
            </div>

            <div className="flex items-end">
              <button type="submit" className="w-full bg-btnClr text-white px-2 py-3 rounded hover:bg-btnHover transition">Search</button>
            </div>
          </form>
        </div>









      </div>
    </div>
  )
}

export default SearchBar