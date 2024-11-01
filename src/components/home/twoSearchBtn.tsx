"use client"
import { useState } from "react";

const TwoSearchBtn = () => {
    const [selected, setSelected] = useState("find");

    return (
        <div className="flex items-center text-sm md:text-xl font-semibold">
            <button
                onClick={() => setSelected("find")}
                className={`w-1/2 py-5 duration-500 ${
                    selected === "find" ? "bg-primary text-white" : "bg-secondery hover:bg-[#cfdefe]"
                }`}
            >
                Find A Doctor
            </button>
            <button
                onClick={() => setSelected("schedule")}
                className={`w-1/2 py-5 duration-500 ${
                    selected === "schedule" ? "bg-primary text-white" : "bg-secondery hover:bg-[#cfdefe]"
                }`}
            >
                Schedule An Appointment
            </button>
        </div>
    );
};

export default TwoSearchBtn;
