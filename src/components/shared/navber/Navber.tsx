"use client"
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGetRoleQuery } from "@/redux/api/roleApi";
import { RootState } from "@/redux/store";
import { logout, monitorAuthState } from "@/service/authService";
import { AuthState } from "@/Types/authTypes";
import { Bars3Icon, BellAlertIcon, XMarkIcon } from "@heroicons/react/16/solid";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import logo from "../../../app/image/logo.png"


const Navber = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const [isProductsOpen, setIsProductsOpen] = useState(false)
  const [notifications, setNotifications] = useState(null)
  const [showDropdown, setShowDropdown] = useState(false)

  const { user } = useSelector((state: RootState) => state.auth) as AuthState
  // console.log('user:', user)
  useEffect(() => {
    monitorAuthState()
  }, [])

  const email: any = user?.email
  const { data: role } = useGetRoleQuery(email, {
    skip: !email,
  });


  // console.log(role)

  const handleLogout = () => {
    console.log('logout')
    logout()
  }


  return (

    <div className="mb-16">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
        <div className="max-w-screen-2xl mx-auto px-5 md:px-8 py-6 flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold">
              <Image src={logo} className="h-10 w-56" height={10} width={200} alt=""></Image>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link href="/doctors" className="hover:text-primary">
              Find a doctor
            </Link>
            <Link href="/about" className="hover:text-primary">
              About
            </Link>


            {
              role?.result === "patient" &&
              <Link href="/dashboard/patient/overview" className="hover:text-primary">
                Dashboard
              </Link>
            }

            {
              role?.result === "doctor" &&
              <Link href="/dashboard/doctor/overview" className="hover:text-primary">
                Dashboard
              </Link>
            }



            {
              role?.result === "admin" &&
              <Link href="/dashboard/admin/overview" className="hover:text-primary">
                Dashboard
              </Link>
            }










            {/* <div>
              <div className="flex items-center">
                <div>
                  <div className="relative">
                    Notification Icon
                    <div
                      onMouseEnter={() => setShowDropdown(true)}
                    >
                      <BellAlertIcon className="text-gray-500 text-3xl cursor-pointer" />
                      {notifications > 0 || (
                        <div className="absolute top-1 right-1 bg-red-600 text-white text-[10px] font-bold rounded-full w-[.7rem] h-[.7rem] flex items-center justify-center">
                          {notifications}
                        </div>
                      )}
                    </div>

                    Notification Dropdown
                    <div
                      className={`absolute right-0 mt-2 w-72 bg-white border border-gray-300 rounded-lg shadow-lg z-10 transform transition-all duration-300 ${showDropdown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[-10px]"
                        }`}
                    >
                      <div className="p-4">
                        Header
                        <div className="flex justify-between items-center">
                          <h3 className="font-bold text-gray-700">Notifications</h3>
                          <button className="text-sm text-primary font-bold">
                            Mark all as read
                          </button>
                        </div>

                        Tabs
                        <div className="text-sm mt-2 flex gap-8">
                          <button className="focus:border-b-2 focus:border-b-primary">
                            All
                          </button>
                          <button className="focus:border-b-2 focus:border-b-primary">
                            Unread
                          </button>
                        </div>

                        Example Notifications

                        <ul className="mt-4 space-y-2 max-h-48 overflow-y-auto scrollbar-hide">
                          {showNotifications.length > 0 ? (
                            showNotifications.map((notification, index) => (
                              <li
                                key={index}
                                className={`flex items-center gap-3 p-3 rounded-md ${notification.isUnread ? "bg-gray-100 font-bold" : "bg-white"
                                  } hover:bg-gray-200 transition`}
                              >

                                <img
                                  src={notification.image}
                                  alt={notification.title}
                                  className="w-10 h-10 rounded-full object-cover"
                                />


                                <div>
                                  <h4 className="text-sm font-semibold text-gray-800">
                                    {notification.title}
                                  </h4>
                                  <p className="text-xs text-gray-600">
                                    {notification.description}
                                    <span className='text-primary'> View</span>
                                  </p>
                                  <p className="text-[10px] text-gray-500 mt-1">
                                    {notification.time}
                                  </p>
                                </div>
                              </li>
                            ))
                          ) : (
                            <p className="text-gray-500 text-center">No notifications found.</p>
                          )}
                        </ul>


                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div> */}
















            <Link href="/doctor-signup" className="hover:text-primary">
              For Doctor
            </Link>
            {user?.email ? (
              <button
                onClick={handleLogout}
                className="bg-primary text-white hover:bg-btnHover px-5 py-1 rounded"
              >
                Logout
              </button>
            ) : (
              <Link
                href="/login"
                className="bg-primary text-white hover:bg-btnHover px-5 py-1 rounded"
              >
                Login
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsDrawerOpen(!isDrawerOpen)}
            className="md:hidden focus:outline-none"
          >
            <Bars3Icon className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {isDrawerOpen && (
        <div className="fixed inset-0 z-40 bg-black bg-opacity-50">
          <div
            className="fixed top-20 right-0 w-64 h-full bg-white shadow-lg p-4"
            onClick={() => setIsDrawerOpen(false)}
          >
            <button className="absolute top-2 right-4">
              <XMarkIcon className="w-7 h-7" />
            </button>
            <nav>
              <Link href="/" className="block py-2">
                Home
              </Link>
              <button
                onClick={() => setIsProductsOpen(!isProductsOpen)}
                className="block w-full text-left py-2"
              >
                Products
              </button>
              {isProductsOpen && (
                <div className="pl-4">
                  <Link href="/product-1" className="block py-2">
                    Product 1
                  </Link>
                  <Link href="/product-2" className="block py-2">
                    Product 2
                  </Link>
                </div>
              )}
              <Link href="/about" className="block py-2">
                About
              </Link>
              <Link href="/dashboard" className="block py-2">
                Dashboard
              </Link>
              <Link href="/login" className="block py-2">
                Login
              </Link>
            </nav>
          </div>
        </div>
      )}
    </div>
    // <div className="mb-16">
    //   {/* Navbar */}
    //   <nav className="  bg-white shadow-sm  fixed w-full top-0 z-50">
    //     <div className=" px-5 md:px-8 py-6 ">
    //       <div className="flex justify-between">
    //         {/* Logo */}
    //         <div className="flex-shrink-0 flex items-center">
    //           <Link href="/" className="text-2xl">
    //           logo
    //           </Link>
    //         </div>

    //         {/* Desktop Menu */}
    //         <div className="hidden text-textLight  md:flex space-x-8 items-center">
    //           <Link href="/doctors" className=" hover:text-primary">
    //             Find a doctor
    //           </Link>
    //           {/* <div className="relative">
    //             <button
    //               onClick={() => setIsProductsOpen(!isProductsOpen)}
    //               className=" hover:text-primary"
    //             >
    //               Products
    //             </button>
    //             {isProductsOpen && (
    //               <div className="absolute w-52 top-full mt-2 py-2 bg-white shadow-lg border rounded-md">
    //                 <a
    //                   href="/product-1"
    //                   className="block px-4 py-2 text-sm  hover:bg-gray-100"
    //                 >
    //                   Product 1
    //                 </a>
    //                 <a
    //                   href="/product-2"
    //                   className="block px-4 py-2 text-sm  hover:bg-gray-100"
    //                 >
    //                   Product 2
    //                 </a>
    //               </div>
    //             )}
    //           </div> */}
    //           <Link href="/about" className=" hover:text-primary">
    //             About
    //           </Link>

    //           <Link href="/dashboard/admin/overview" className=" hover:text-primary">
    //             Dashboard
    //           </Link>
    //           <Link href="/doctor-signup" className=" hover:text-primary">
    //             For Doctor
    //           </Link>
    //           {/* <Link href="/login" className=" bg-primary text-white hover:bg-btnHover px-5 py-1 rounded">
    //             Login
    //           </Link> */}

    //           {
    //             user?.email? <Link href="/" onClick={handleLogout} className=" bg-primary text-white hover:bg-btnHover px-5 py-1 rounded">
    //             Logout
    //           </Link> : <Link href="/login" className=" bg-primary text-white hover:bg-btnHover px-5 py-1 rounded">
    //             Login
    //           </Link>
    //           }




    //           {/* <div className="relative">
    //             <button
    //               onClick={() => setIsProductsOpen(!isProductsOpen)}
    //               className=" hover:text-primary"
    //             >
    //               Sign up
    //             </button>
    //             {isProductsOpen && (
    //               <div className="absolute w-40  top-full mt-2 py-2 bg-white shadow-lg border rounded-md">
    //                 <a
    //                   href="/doctor-signup"
    //                   className="block px-4 py-2 text-sm  hover:bg-gray-100"
    //                 >
    //                   Doctor
    //                 </a>
    //                 <a
    //                   href="/patient-signup"
    //                   className="block px-4 py-2 text-sm  hover:bg-gray-100"
    //                 >
    //                   Patient
    //                 </a>
    //               </div>
    //             )}
    //           </div> */}

    //           {/* <Link href="/appointment" className=" hover:text-primary">
    //             Appointment
    //           </Link> */}
    //         </div>

    //         {/* Mobile Hamburger Menu */}
    //         <div className="md:hidden text-textLight flex items-center">
    //           <button
    //             onClick={() => setIsDrawerOpen(!isDrawerOpen)}
    //             className=" focus:outline-none"
    //           >
    //             <Bars3Icon className="w-6 h-6"></Bars3Icon>
    //           </button>
    //         </div>
    //       </div>
    //     </div>
    //   </nav>

    //   {/* Mobile Drawer */}
    //   <div
    //     className={`fixed inset-0 z-50 transform ${isDrawerOpen ? 'translate-x-0' : '-translate-x-full'
    //       } transition-transform duration-300 ease-in-out`}
    //   >
    //     {/* Drawer backdrop */}
    //     {isDrawerOpen && (
    //       <div
    //         className="fixed inset-0 bg-black bg-opacity-50"
    //         onClick={() => setIsDrawerOpen(!isDrawerOpen)}
    //       ></div>
    //     )}


    //     {/* Drawer content */}
    //     <div className="relative w-64 h-full bg-white text-textLight  shadow-lg">
    //       {/* Close button */}
    //       <button
    //         onClick={() => setIsDrawerOpen(!isDrawerOpen)}
    //         className="absolute top-4 right-4  focus:outline-none"
    //       >
    //         <XMarkIcon className="w-7 h-7"></XMarkIcon>
    //       </button>

    //       <div className="p-4">
    //         <Link href="/" className="block py-2 ">
    //           Home
    //         </Link>
    //         <button
    //           onClick={() => setIsProductsOpen(!isProductsOpen)}
    //           className="w-full text-left py-2 "
    //         >
    //           Products
    //         </button>
    //         {isProductsOpen && (
    //           <div className="pl-4">
    //             <Link href="/product-1" className="block py-2 ">
    //               Product 1
    //             </Link>
    //             <Link href="/product-2" className="block py-2 ">
    //               Product 2
    //             </Link>
    //           </div>
    //         )}
    //         <Link href="/about" className="block py-2 ">
    //           About
    //         </Link>
    //         <Link href="/dashboard" className=" hover:text-primary">
    //           Dashboard
    //         </Link>
    //         <Link href="/login" className="block py-2 ">
    //           Log in
    //         </Link>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  )
}

export default Navber