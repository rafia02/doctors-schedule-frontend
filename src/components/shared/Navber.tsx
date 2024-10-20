"use client"

import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
import Link from "next/link";
import { useState } from "react";

const Navber = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);


  return (
    <div className="">
      {/* Navbar */}
      <nav className="  bg-secondery  font-jakarta fixed w-full top-0 z-50">
        <div className=" px-5 md:px-8 py-5 ">
          <div className="flex justify-between">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="text-2xl font-bold">
                MyLogo
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden text-textLight  md:flex space-x-8 items-center">
              <Link href="/" className=" hover:text-primary">
                Find a doctor
              </Link>
              {/* <div className="relative">
                <button
                  onClick={() => setIsProductsOpen(!isProductsOpen)}
                  className=" hover:text-primary"
                >
                  Products
                </button>
                {isProductsOpen && (
                  <div className="absolute w-52 top-full mt-2 py-2 bg-white shadow-lg border rounded-md">
                    <a
                      href="/product-1"
                      className="block px-4 py-2 text-sm  hover:bg-gray-100"
                    >
                      Product 1
                    </a>
                    <a
                      href="/product-2"
                      className="block px-4 py-2 text-sm  hover:bg-gray-100"
                    >
                      Product 2
                    </a>
                  </div>
                )}
              </div> */}
              <Link href="/about" className=" hover:text-primary">
                About
              </Link>

              <Link href="/dashboard" className=" hover:text-primary">
                Dashboard
              </Link>
              <Link href="/login" className=" hover:text-primary">
                Login
              </Link>

              <div className="relative">
                <button
                  onClick={() => setIsProductsOpen(!isProductsOpen)}
                  className=" hover:text-primary"
                >
                  Sign up
                </button>
                {isProductsOpen && (
                  <div className="absolute w-40  top-full mt-2 py-2 bg-white shadow-lg border rounded-md">
                    <a
                      href="/doctor-signup"
                      className="block px-4 py-2 text-sm  hover:bg-gray-100"
                    >
                      Doctor
                    </a>
                    <a
                      href="/patient-signup"
                      className="block px-4 py-2 text-sm  hover:bg-gray-100"
                    >
                      Patient
                    </a>
                  </div>
                )}
              </div>

              <Link href="/appointment" className=" hover:text-primary">
                Appointment
              </Link>
            </div>

            {/* Mobile Hamburger Menu */}
            <div className="md:hidden text-textLight flex items-center">
              <button
                onClick={() => setIsDrawerOpen(!isDrawerOpen)}
                className=" focus:outline-none"
              >
                <Bars3Icon className="w-6 h-6"></Bars3Icon>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-50 transform ${isDrawerOpen ? 'translate-x-0' : '-translate-x-full'
          } transition-transform duration-300 ease-in-out`}
      >
        {/* Drawer backdrop */}
        {isDrawerOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50"
            onClick={() => setIsDrawerOpen(!isDrawerOpen)}
          ></div>
        )}


        {/* Drawer content */}
        <div className="relative w-64 h-full bg-white text-textLight  shadow-lg">
          {/* Close button */}
          <button
            onClick={() => setIsDrawerOpen(!isDrawerOpen)}
            className="absolute top-4 right-4  focus:outline-none"
          >
            <XMarkIcon className="w-7 h-7"></XMarkIcon>
          </button>

          <div className="p-4">
            <Link href="/" className="block py-2 ">
              Home
            </Link>
            <button
              onClick={() => setIsProductsOpen(!isProductsOpen)}
              className="w-full text-left py-2 "
            >
              Products
            </button>
            {isProductsOpen && (
              <div className="pl-4">
                <Link href="/product-1" className="block py-2 ">
                  Product 1
                </Link>
                <Link href="/product-2" className="block py-2 ">
                  Product 2
                </Link>
              </div>
            )}
            <Link href="/about" className="block py-2 ">
              About
            </Link>
            <Link href="/dashboard" className=" hover:text-primary">
              Dashboard
            </Link>
            <Link href="/login" className="block py-2 ">
              Log in
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navber