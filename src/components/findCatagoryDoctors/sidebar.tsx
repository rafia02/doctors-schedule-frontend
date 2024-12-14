import MultiRangeSlider from "multi-range-slider-react";

// Define types for props
interface SidebarProps {
    selectedDepartment: string;
    setSelectedDepartment: (dept: string) => void;
    minValue: number;
    maxValue: number;
    setMinValue: (value: number) => void;
    setMaxValue: (value: number) => void;
    selectedFilters: string[];
    handleFilterChange: (filter: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({
    selectedDepartment,
    setSelectedDepartment,
    minValue,
    maxValue,
    setMinValue,
    setMaxValue,
    selectedFilters,
    handleFilterChange,
}) => {
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

    const handleInput = (e: { minValue: number; maxValue: number }) => {
        setMinValue(e.minValue);
        setMaxValue(e.maxValue);
    };

    return (
        <div className="shadow-lg rounded-xl mb-10 bg-white sticky top-5 h-auto py-7">
            <div className="flex px-5 justify-between items-center w-full mb-4">
                <p className="font-bold text-lg">Find Doctor</p>
                <button className="text-sm text-primary font-s">Clear All</button>
            </div>

            <div className="bg-[#213567] px-5 pt-7 pb-9">
                <label htmlFor="department" className="block text-lg font-semibold mb-3 text-white">
                    Select Department
                </label>
                <select
                    id="department"
                    value={selectedDepartment}
                    onChange={(e) => setSelectedDepartment(e.target.value)}
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
                <h1 className="font-semibold">Consultation Fee :</h1>
                <MultiRangeSlider
                    min={0}
                    max={1000}
                    minValue={minValue}
                    maxValue={maxValue}
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

            <div className="px-5 border-y py-8">
                <label className="block font-semibold mb-3">Filter by</label>
                <div className="flex flex-col gap-3">
                    {["Hospital", "Location", "Department"].map((filter, index) => (
                        <select
                            key={index}
                            value={selectedDepartment}
                            onChange={(e) => setSelectedDepartment(e.target.value)}
                            className="w-full px-4 py-3 border border-gray-400 rounded shadow-sm focus:outline-none"
                        >
                            <option value="" disabled>
                                {filter}
                            </option>
                            {departments.map((dept, idx) => (
                                <option key={idx} value={dept}>
                                    {dept}
                                </option>
                            ))}
                        </select>
                    ))}
                </div>
            </div>

            <div className="mb-4 px-5 pt-8">
                {["Online Now", "Female Doctors", "Male Doctors"].map((filter, index) => (
                    <label key={index} className="flex items-center mb-4">
                        <input
                            type="checkbox"
                            value={filter}
                            checked={selectedFilters.includes(filter)}
                            onChange={() => handleFilterChange(filter)}
                            className="w-[18px] h-[18px] mr-3 accent-blue-800"
                        />
                        <span>{filter}</span>
                    </label>
                ))}
            </div>
        </div>
    );
};

export default Sidebar;




// import MultiRangeSlider from "multi-range-slider-react";

// const Sidebar = ({
//     selectedDepartment,
//     setSelectedDepartment,
//     minValue,
//     maxValue,
//     setMinValue,
//     setMaxValue,
//     selectedFilters,
//     handleFilterChange,
// }) => {
//     const departments = [
//         "Cardiology",
//         "Dermatology",
//         "Neurology",
//         "Orthopedics",
//         "Pediatrics",
//         "Psychiatry",
//         "Radiology",
//         "Surgery",
//     ];

//     const handleInput = (e: any) => {
//         setMinValue(e.minValue);
//         setMaxValue(e.maxValue);
//     };

//     return (
//         <div className="shadow-lg rounded-xl mb-10 bg-white sticky top-5 h-auto py-7">
//             <div className="flex px-5 justify-between items-center w-full mb-4">
//                 <p className="font-bold text-lg">Find Doctor</p>
//                 <button className="text-sm text-primary font-s">Clear All</button>
//             </div>
//             {/* <SelectDepartment
//                 selectedDepartment={selectedDepartment}
//                 setSelectedDepartment={setSelectedDepartment}
//                 departments={departments}
//             /> */}

//             <div className="bg-[#213567] px-5 pt-7 pb-9">
//                 <label htmlFor="department" className="block text-lg font-semibold mb-3 text-white">
//                     Select Department
//                 </label>
//                 <select
//                     id="department"
//                     value={selectedDepartment}
//                     onChange={(e) => setSelectedDepartment(e.target.value)}
//                     className="w-full px-4 py-3 border border-gray-300 rounded shadow-sm focus:outline-none"
//                 >
//                     <option value="" disabled>
//                         Choose a department
//                     </option>
//                     {departments.map((dept, index) => (
//                         <option key={index} value={dept}>
//                             {dept}
//                         </option>
//                     ))}
//                 </select>
//             </div>


//             {/* <ConsultationFeeSlider
//                 minValue={minValue}
//                 maxValue={maxValue}
//                 handleInput={handleInput}
//             /> */}


//             <div className="px-5 mt-8 mb-8">
//                 <h1 className="font-semibold">Consultation Fee :</h1>
//                 <MultiRangeSlider
//                     min={0}
//                     max={1000}
//                     minValue={minValue}
//                     maxValue={maxValue}
//                     step={1}
//                     ruler={false}
//                     label={false}
//                     barInnerColor="#415da1"
//                     className="!shadow-none !border-none"
//                     onInput={handleInput}
//                 />
//                 <div className="text-sm tracking-wider">
//                     Price : {minValue} BDT - {maxValue} BDT
//                 </div>
//             </div>



//             {/* <FilterBy selectedDepartment={selectedDepartment} departments={departments} /> */}

//             <div className="px-5 border-y py-8">
//                 <label className="block font-semibold mb-3">Filter by</label>
//                 <div className="flex flex-col gap-3">
//                     {["Hospital", "Location", "Department"].map((filter, index) => (
//                         <select
//                             key={index}
//                             value={selectedDepartment}
//                             onChange={(e) => setSelectedDepartment(e.target.value)}
//                             className="w-full px-4 py-3 border border-gray-400 rounded shadow-sm focus:outline-none"
//                         >
//                             <option value="" disabled>
//                                 {filter}
//                             </option>
//                             {departments.map((dept, idx) => (
//                                 <option key={idx} value={dept}>
//                                     {dept}
//                                 </option>
//                             ))}
//                         </select>
//                     ))}
//                 </div>
//             </div>


//             {/* <CheckboxFilters
//                 selectedFilters={selectedFilters}
//                 handleFilterChange={handleFilterChange}
//             /> */}

//             <div className="mb-4 px-5 pt-8">
//                 {["Online Now", "Female Doctors", "Male Doctors"].map((filter, index) => (
//                     <label key={index} className="flex items-center mb-4">
//                         <input
//                             type="checkbox"
//                             value={filter}
//                             checked={selectedFilters.includes(filter)}
//                             onChange={() => handleFilterChange(filter)}
//                             className="w-[18px] h-[18px] mr-3 accent-blue-800"
//                         />
//                         <span>{filter}</span>
//                     </label>
//                 ))}
//             </div>


//         </div>
//     );
// };
