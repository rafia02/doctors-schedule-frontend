"use client"
import AdminDashboardSidebar from "@/components/shared/admindashboardSidebar"
import { useState } from "react"
import { Bars3Icon, CalendarIcon, CogIcon, HomeIcon, UserGroupIcon, XMarkIcon } from "@heroicons/react/16/solid"
import Link from "next/link"


const layout = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState("admin")
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (

    //   <div className="flex h-screen">
    //   {/* Sidebar */}
    //   <AdminDashboardSidebar isSidebarOpen={isSidebarOpen}></AdminDashboardSidebar>

    //   {/* Main Content */}
    //   <div className="flex-1 p-6 bg-gray-100 overflow-y-auto">
    //     <header className="flex justify-between items-center mb-4">
    //       <h1 className="text-2xl font-bold text-primary">Dashboard</h1>
    //       <button className="bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark">
    //         Logout
    //       </button>
    //     </header>

    //     <main className="bg-white p-6 rounded shadow">{children}</main>
    //   </div>
    // </div>



    <div className="flex max-h-screen bg-gray-100">
      {/* Sidebar */}


      <button
        className="md:hidden fixed top-5 left-4 z-20 bg-primary text-white p-2 rounded"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        {isSidebarOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
      </button>




      <div

        className={`fixed lg:static inset-y-0 left-0 transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } lg:translate-x-0 w-80  bg-[#435b98] text-white p-5 transition-transform duration-200 ease-in-out z-10 shadow-lg`}
      // className={` transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      //   } lg:translate-x-0 md:w-96 h-full bg-[#435b98]  text-white p-5 transition-transform duration-200 ease-in-out z-10 shadow-lg`}
      >
        <div className="">
          {
            user === "admin" ? <AdminDashboardSidebar isSidebarOpen={isSidebarOpen}></AdminDashboardSidebar> : ""
          }
        </div>

      </div>




      {/* Main Content */}


      {/* className=" flex-wrap  px-4 md:p-6 py-5 md:py-6 " */}

      <div className=" w-full md:ml-2 ">

        {/* <header className="flex ml-12 md:ml-0 justify-between items-center mb-6">
            <h1 className="text-3xl text-primary font-semibold">Dashboard</h1>
            <button className="bg-primary text-white px-4 py-2 rounded ">
              Logout
            </button>
          </header> */}

        <section className=" w-full overflow-y-auto max-h-screen px-4 rounded">

          <div className="flex  mt-5 justify-end items-center mb-6">
            {/* <h1 className="text-3xl text-primary font-semibold">Dashboard</h1> */}
            <button className="bg-primary text-white px-5 py-2 rounded ">
              Logout
            </button>
          </div>

          <div className="bg-white max-h-screen w-full">
            {children}
          </div>
        </section>
      </div>

      {/* Overlay for Mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-10 lg:hidden"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
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