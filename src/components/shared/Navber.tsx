"use client"

import { useState } from "react";

const Navber = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [isProductsOpen, setIsProductsOpen] = useState(false);
  

  return (
    <>
      {/* Navbar */}
      <nav className="bg-secondery font-jakarta sticky top-0 z-50">
        <div className=" px-5 md:px-8 py-5">
          <div className="flex justify-between">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <a href="/" className="text-2xl font-bold">
                MyLogo
              </a>
            </div>

            {/* Desktop Menu */}
            <div className="hidden text-textLight text-lg md:flex space-x-8 items-center">
              <a href="/" className=" hover:text-primary">
                Home
              </a>
              <div className="relative">
                <button
                  onClick={()=>setIsProductsOpen(!isProductsOpen)}
                  className=" hover:text-primary"
                >
                  Products
                </button>
                {isProductsOpen && (
                  <div className="absolute top-full mt-2 py-2 bg-white shadow-lg border rounded-md">
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
              </div>
              <a href="/about" className=" hover:text-primary">
                About
              </a>
            </div>

            {/* Mobile Hamburger Menu */}
            <div className="md:hidden text-textLight flex items-center">
              <button
                onClick={()=>setIsDrawerOpen(!isDrawerOpen)}
                className=" focus:outline-none"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-50 transform ${
          isDrawerOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out`}
      >
        {/* Drawer backdrop */}
        {isDrawerOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50"
            onClick={()=>setIsDrawerOpen(!isDrawerOpen)}
          ></div>
        )}

        {/* Drawer content */}
        <div className="relative w-64 h-full bg-secondery text-textLight text-lg shadow-lg">
          {/* Close button */}
          <button
             onClick={()=>setIsDrawerOpen(!isDrawerOpen)}
            className="absolute top-4 right-4  focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>

          <div className="p-4">
            <a href="/" className="block py-2 ">
              Home
            </a>
            <button
              onClick={()=>setIsProductsOpen(!isProductsOpen)}
              className="w-full text-left py-2 "
            >
              Products
            </button>
            {isProductsOpen && (
              <div className="pl-4">
                <a href="/product-1" className="block py-2 ">
                  Product 1
                </a>
                <a href="/product-2" className="block py-2 ">
                  Product 2
                </a>
              </div>
            )}
            <a href="/about" className="block py-2 ">
              About
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navber