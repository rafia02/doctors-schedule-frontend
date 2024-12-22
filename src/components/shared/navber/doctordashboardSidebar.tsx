"use client"
import { CalendarIcon, ChatBubbleBottomCenterTextIcon, SquaresPlusIcon, UserIcon } from "@heroicons/react/16/solid"
import Link from "next/link"
import { usePathname } from "next/navigation";


const DoctorDashboardSidebar = () => {
  const router = usePathname();
  const isActive = (path: string) => router === path;
  const linkClasses = "flex items-center p-2 rounded transition duration-150";
  const subMenuClasses = "ml-8 px-3 py-2 rounded text-sm";


  return (
    <div className="h-full">
      <Link href="/">
        <h2 className="text-2xl text-gray-200 font-semibold p-2 mb-6">Doctors Schedule</h2>
      </Link>

      {/* Main Navigation Links */}
      <div>
        <nav className="flex text-gray-300 max-h-[75vh] overflow-y-auto  no-scrollbar flex-col gap-3 mb-6">
          <Link
            href="/dashboard/doctor/overview"
            className={`${linkClasses} ${isActive("/dashboard/doctor/overview") ? "bg-[#4967b3]" : "hover:bg-[#4967b3]"
              }`}
          >
            <SquaresPlusIcon className="w-6 h-6 mr-3" />
            Dashboard Overview
          </Link>

          <Link
            href="/dashboard/doctor/appointments"
            className={`${linkClasses} ${isActive("/dashboard/doctor/appointments") ? "bg-[#4967b3]" : "hover:bg-[#4967b3]"
              }`}
          >
            <CalendarIcon className="w-6 h-6 mr-3" />
            Appointments
          </Link>

          <Link
            href="/dashboard/patients"
            className={`${linkClasses} ${isActive("/dashboard/patients") ? "bg-[#4967b3]" : "hover:bg-[#4967b3]"
              }`}
          >
            <UserIcon className="w-6 h-6 mr-3" />
            Patients
          </Link>

          <Link
            href="/dashboard/messages"
            className={`${linkClasses} ${isActive("/dashboard/messages") ? "bg-[#4967b3]" : "hover:bg-[#4967b3]"
              }`}
          >
            <ChatBubbleBottomCenterTextIcon className="w-6 h-6 mr-3" />
            Messages
          </Link>

        </nav>
      </div>


    </div>
  )
}

export default DoctorDashboardSidebar