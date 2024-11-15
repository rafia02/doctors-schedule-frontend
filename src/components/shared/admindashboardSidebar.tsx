"use client"
import { CalendarIcon, ChartBarIcon, CogIcon, DocumentTextIcon, HomeIcon, InboxIcon, UserGroupIcon } from "@heroicons/react/16/solid"
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import Link from "next/link"
import { usePathname } from "next/navigation";

const AdminDashboardSidebar = ({ isSidebarOpen }: { isSidebarOpen: boolean }) => {
  const router = usePathname();
  const isActive = (path: string) => router === path;

  const linkClasses = "flex items-center p-2 rounded transition duration-150";

  return (


    <div
    className={`fixed lg:static inset-y-0 left-0 transform ${
      isSidebarOpen ? "translate-x-0" : "-translate-x-full"
    } lg:translate-x-0 w-72 bg-[#435b98] text-white p-5 transition-transform duration-200 ease-in-out z-10 shadow-lg`}
  >
    <h2 className="text-2xl font-semibold p-2 mb-6">Doctors Portal</h2>

    {/* Main Navigation Links */}
    <nav className="flex flex-col gap-4 mb-6">
      <Link
        href="/dashboard"
        className={`${linkClasses} ${
          isActive("/dashboard") ? "bg-[#4967b3]" : "hover:bg-[#4967b3]"
        }`}
      >
        <HomeIcon className="w-6 h-6 mr-3" />
        Dashboard Overview
      </Link>

      <Link
        href="/dashboard/appointments"
        className={`${linkClasses} ${
          isActive("/dashboard/appointments") ? "bg-[#4967b3]" : "hover:bg-[#4967b3]"
        }`}
      >
        <CalendarIcon className="w-6 h-6 mr-3" />
        Appointments
      </Link>

      <Link
        href="/dashboard/admin/doctors"
        className={`${linkClasses} ${
          isActive("/dashboard/doctors") ? "bg-[#4967b3]" : "hover:bg-[#4967b3]"
        }`}
      >
        <UserGroupIcon className="w-6 h-6 mr-3" />
        Doctors
      </Link>

      <Link
        href="/dashboard/patients"
        className={`${linkClasses} ${
          isActive("/dashboard/patients") ? "bg-[#4967b3]" : "hover:bg-[#4967b3]"
        }`}
      >
        <UserGroupIcon className="w-6 h-6 mr-3" />
        Patients
      </Link>

      <Link
        href="/dashboard/reports"
        className={`${linkClasses} ${
          isActive("/dashboard/reports") ? "bg-[#4967b3]" : "hover:bg-[#4967b3]"
        }`}
      >
        <ChartBarIcon className="w-6 h-6 mr-3" />
        Reports & Analytics
      </Link>

      <Link
        href="/dashboard/messages"
        className={`${linkClasses} ${
          isActive("/dashboard/messages") ? "bg-[#4967b3]" : "hover:bg-[#4967b3]"
        }`}
      >
        <InboxIcon className="w-6 h-6 mr-3" />
        Messages
      </Link>

      <Link
        href="/dashboard/documents"
        className={`${linkClasses} ${
          isActive("/dashboard/documents") ? "bg-[#4967b3]" : "hover:bg-[#4967b3]"
        }`}
      >
        <DocumentTextIcon className="w-6 h-6 mr-3" />
        Documents
      </Link>

      <Link
        href="/dashboard/settings"
        className={`${linkClasses} ${
          isActive("/dashboard/settings") ? "bg-[#4967b3]" : "hover:bg-[#4967b3]"
        }`}
      >
        <CogIcon className="w-6 h-6 mr-3" />
        Settings
      </Link>
    </nav>

    {/* Logout Button */}
    {/* <button
      onClick={() => alert("Logging out...")}
      className="flex items-center mt-auto p-2 w-full text-left rounded bg-red-600 hover:bg-red-700 transition duration-150"
    >
      <ArrowLeftIcon className="w-6 h-6 mr-3" />
      Logout
    </button> */}
  </div>



    // <div
    //   className={`fixed lg:static inset-y-0 left-0 transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
    //     } lg:translate-x-0 w-72 bg-[#435b98] text-white p-5 transition-transform duration-200 ease-in-out z-10`}
    // >
    //   <h2 className="text-2xl font-semibold p-2 mb-6">Doctors Portal</h2>
    //   <nav className="flex flex-col gap-4">
    //     <Link
    //       href="/dashboard"
    //       className={`flex items-center p-2 rounded ${isActive("/dashboard") ? "bg-[#4967b3]" : "hover:bg-[#4967b3]"
    //         }`}
    //     >
    //       <HomeIcon className="w-6 h-6 mr-2" />
    //       Dashboard overview
    //     </Link>
    //     <Link
    //       href="/dashboard/appointments"
    //       className={`flex items-center p-2 rounded ${isActive("/dashboard/appointments") ? "bg-[#4967b3]" : "hover:bg-[#4967b3]"
    //         }`}
    //     >
    //       <CalendarIcon className="w-6 h-6 mr-2" />
    //       Appointments
    //     </Link>
    //     <Link
    //       href="/dashboard/doctors"
    //       className={`flex items-center p-2 rounded ${isActive("/dashboard/doctors") ? "bg-[#4967b3]" : "hover:bg-[#4967b3]"
    //         }`}
    //     >
    //       <UserGroupIcon className="w-6 h-6 mr-2" />
    //       Doctors
    //     </Link>
    //     <Link
    //       href="/dashboard/patients"
    //       className={`flex items-center p-2 rounded ${isActive("/dashboard/patients") ? "bg-[#4967b3]" : "hover:bg-[#4967b3]"
    //         }`}
    //     >
    //       <UserGroupIcon className="w-6 h-6 mr-2" />
    //       Patients
    //     </Link>
    //     <Link
    //       href="/dashboard/settings"
    //       className={`flex items-center p-2 rounded ${isActive("/dashboard/settings") ? "bg-[#4967b3]" : "hover:bg-[#4967b3]"
    //         }`}
    //     >
    //       <CogIcon className="w-6 h-6 mr-2" />
    //       Settings
    //     </Link>
    //   </nav>
    // </div>

    // <div  className={`fixed lg:static inset-y-0 left-0 transform ${
    //   isSidebarOpen ? "translate-x-0" : "-translate-x-full"
    // } lg:translate-x-0 w-72  bg-[#435b98] text-white p-5 transition-transform duration-200 ease-in-out z-10`}>
    //   <h2 className="text-2xl font-semibold p-2 mb-6">Doctors Portal</h2>
    //   <nav className="flex flex-col gap-4">
    //     <Link href="/dashboard" className="flex items-center hover:bg-[#4967b3] p-2 rounded">
    //       <HomeIcon className="w-6 h-6 mr-2" />
    //       Dashboard overview
    //     </Link>
    //     <Link href="/dashboard/appointments" className="flex items-center hover:bg-[#4967b3] p-2 rounded">
    //       <CalendarIcon className="w-6 h-6 mr-2" />
    //       Appointments
    //     </Link>
    //     <Link href="/dashboard/doctors" className="flex items-center hover:bg-[#4967b3] p-2 rounded">
    //       <UserGroupIcon className="w-6 h-6 mr-2" />
    //       Doctors
    //     </Link>
    //     <Link href="/dashboard/patients" className="flex items-center hover:bg-[#4967b3] p-2 rounded">
    //       <UserGroupIcon className="w-6 h-6 mr-2" />
    //       Patients
    //     </Link>
    //     <Link href="/dashboard/settings" className="flex items-center hover:bg-[#4967b3] p-2 rounded">
    //       <CogIcon className="w-6 h-6 mr-2" />
    //       Settings
    //     </Link>
    //   </nav>
    // </div>
  )
}

export default AdminDashboardSidebar