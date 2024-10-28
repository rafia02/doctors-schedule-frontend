

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
        <div className="flex items-center text-xl font-semibold">
          <button className="w-1/2 focus:bg-primary focus:text-white bg-secondery py-5 hover:bg-[#cfdefe] duration-500">Find A Doctor</button>
          <button className="w-1/2 focus:bg-primary focus:text-white bg-secondery py-5 hover:bg-[#cfdefe] duration-500">Schedule A Appointment</button>
        </div>


        




















        <form className="p-6 bg-white rounded-md shadow-md space-y-4">
      {/* Search by Specialty */}
      <div>
        <label htmlFor="specialty" className="block text-gray-700 font-medium">Specialty</label>
        <select
          id="specialty"
          name="specialty"
          // value={searchParams.specialty}
          // onChange={handleInputChange}
          className="w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500"
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
        <label htmlFor="doctorName" className="block text-gray-700 font-medium">Doctor Name</label>
        <input
          type="text"
          id="doctorName"
          name="doctorName"
          // value={searchParams.doctorName}
          // onChange={handleInputChange}
          placeholder="Enter Doctor Name"
          className="w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500"
        />
      </div>

      {/* Search by Date & Time */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="date" className="block text-gray-700 font-medium">Date</label>
          <input
            type="date"
            id="date"
            name="date"
            // value={searchParams.date}
            // onChange={handleInputChange}
            className="w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label htmlFor="time" className="block text-gray-700 font-medium">Time</label>
          <input
            type="time"
            id="time"
            name="time"
            // value={searchParams.time}
            // onChange={handleInputChange}
            className="w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Search by Availability */}
      <div>
        <label htmlFor="availability" className="block text-gray-700 font-medium">Availability</label>
        <select
          id="availability"
          name="availability"
          // value={searchParams.availability}
          // onChange={handleInputChange}
          className="w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500"
        >
          <option value="">Select Availability</option>
          <option value="available">Available</option>
          <option value="unavailable">Unavailable</option>
        </select>
      </div>

      {/* Search by Hospital Name */}
      <div>
        <label htmlFor="hospitalName" className="block text-gray-700 font-medium">Hospital Name</label>
        <input
          type="text"
          id="hospitalName"
          name="hospitalName"
          // value={searchParams.hospitalName}
          // onChange={handleInputChange}
          placeholder="Enter Hospital Name"
          className="w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500"
        />
      </div>

      <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition">Search</button>
    </form>









      </div>
    </div>
  )
}

export default SearchBar