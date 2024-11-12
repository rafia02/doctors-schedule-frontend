"use client"
import AdminDashboardSidebar from "@/components/shared/admindashboardSidebar"
import { useState } from "react"
import { Bars3Icon, CalendarIcon, CogIcon, HomeIcon, UserGroupIcon, XMarkIcon } from "@heroicons/react/16/solid"
import Link from "next/link"


const layout = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState("admin")
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}


      <button
        className="md:hidden fixed top-5 left-4 z-20 bg-primary text-white p-2 rounded"
        onClick={()=>setIsSidebarOpen(!isSidebarOpen)}
      >
        {isSidebarOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
      </button>




      {
        user === "admin" ? <AdminDashboardSidebar isSidebarOpen={isSidebarOpen}></AdminDashboardSidebar> : ""
      }





      {/* Main Content */}




      <div className="md:w-9/12 w-full px-4 md:px-6 py-5 md:py-8 ">
        <header className="flex ml-12 md:ml-0 justify-between items-center mb-8">
          <h1 className="text-3xl font-semibold">Dashboard</h1>
          <button className="bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark">
            Logout
          </button>
        </header>
        <section className="bg-white px-6 overflow-hidden shadow-md rounded py-6">
          {children}
        </section>
      </div>

      {/* Overlay for Mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-10 lg:hidden"
          onClick={()=>setIsSidebarOpen(!isSidebarOpen)}
        ></div>
      )}












      {/* <main className="flex-1 p-8">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-semibold">Dashboard</h1>
          <div>
            <button className="bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark">
              Logout
            </button>
          </div>
        </header>
        <section className="bg-white shadow-md rounded p-6">
          {children}
        </section>
      </main> */}
    </div>
  )
}

export default layout