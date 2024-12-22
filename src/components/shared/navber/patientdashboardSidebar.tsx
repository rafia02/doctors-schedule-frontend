"use client"
import { CalendarIcon, ChatBubbleBottomCenterTextIcon, CogIcon, SquaresPlusIcon, UsersIcon } from '@heroicons/react/16/solid';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const PatientDashboardSidebar = () => {
  // const [isDepartmentOpen, setIsDepartmentOpen] = useState(false)
  const router = usePathname();
  const isActive = (path: string) => router === path;

  const linkClasses = "flex items-center p-2 rounded transition duration-150";
  // const subMenuClasses = "ml-8 px-3 py-2 rounded text-sm";
  return (
    <div className="h-full">
    <h2 className="text-2xl font-semibold p-2 mb-6">Doctors Portal</h2>

    {/* Main Navigation Links */}
    <div className="">
      <nav className="flex text-gray-200 max-h-[75vh] overflow-y-auto  no-scrollbar flex-col gap-4 mb-6">
        <Link
          href="/dashboard/patient/overview"
          className={`${linkClasses} ${isActive("/dashboard/patient/overview") ? "bg-[#4967b3]" : "hover:bg-[#4967b3]"
            }`}
        >
          <SquaresPlusIcon className="w-6 h-6 mr-3" />
          Dashboard Overview
        </Link>

        <Link
          href="/dashboard/appointments"
          className={`${linkClasses} ${isActive("/dashboard/appointments") ? "bg-[#4967b3]" : "hover:bg-[#4967b3]"
            }`}
        >
          <CalendarIcon className="w-6 h-6 mr-3" />
          Appointments
        </Link>

        <Link
          href="/dashboard/admin/doctors"
          className={`${linkClasses} ${isActive("/dashboard/doctors") ? "bg-[#4967b3]" : "hover:bg-[#4967b3]"
            }`}
        >
          <UsersIcon className="w-6 h-6 mr-3" />
          Doctors
        </Link>

        <Link
          href="/dashboard/messages"
          className={`${linkClasses} ${isActive("/dashboard/messages") ? "bg-[#4967b3]" : "hover:bg-[#4967b3]"
            }`}
        >
          <ChatBubbleBottomCenterTextIcon className="w-6 h-6 mr-3" />
          Messages
        </Link>

        <Link
          href="/dashboard/settings"
          className={`${linkClasses} ${isActive("/dashboard/settings") ? "bg-[#4967b3]" : "hover:bg-[#4967b3]"
            }`}
        >
          <CogIcon className="w-6 h-6 mr-3" />
          Settings
        </Link>
      </nav>
    </div>


  </div>
  )
}

export default PatientDashboardSidebar