import { CalendarIcon, CogIcon, HomeIcon, UserGroupIcon } from "@heroicons/react/16/solid"
import Link from "next/link"

const AdminDashboardSidebar = ({isSidebarOpen}: {isSidebarOpen: boolean}) => {
  return (



    <div  className={`fixed lg:static inset-y-0 left-0 transform ${
      isSidebarOpen ? "translate-x-0" : "-translate-x-full"
    } lg:translate-x-0   bg-[#435b98] text-white p-5 transition-transform duration-200 ease-in-out z-10`}>
      <h2 className="text-2xl font-semibold p-2 mb-6">Doctors Portal</h2>
      <nav className="flex flex-col gap-4">
        <Link href="/dashboard" className="flex items-center hover:bg-[#4967b3] p-2 rounded">
          <HomeIcon className="w-6 h-6 mr-2" />
          Dashboard Home
        </Link>
        <Link href="/dashboard/appointments" className="flex items-center hover:bg-[#4967b3] p-2 rounded">
          <CalendarIcon className="w-6 h-6 mr-2" />
          Appointments
        </Link>
        <Link href="/dashboard/doctors" className="flex items-center hover:bg-[#4967b3] p-2 rounded">
          <UserGroupIcon className="w-6 h-6 mr-2" />
          Doctors
        </Link>
        <Link href="/dashboard/patients" className="flex items-center hover:bg-[#4967b3] p-2 rounded">
          <UserGroupIcon className="w-6 h-6 mr-2" />
          Patients
        </Link>
        <Link href="/dashboard/settings" className="flex items-center hover:bg-[#4967b3] p-2 rounded">
          <CogIcon className="w-6 h-6 mr-2" />
          Settings
        </Link>
      </nav>
    </div>
  )
}

export default AdminDashboardSidebar