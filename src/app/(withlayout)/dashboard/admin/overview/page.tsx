"use client";
import { motion } from "framer-motion";
import {
  ChartBarIcon,
  CalendarIcon,
  UserGroupIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/24/solid";
import { BellIcon, ShieldCheckIcon } from "@heroicons/react/16/solid";
import { div } from "framer-motion/client";

const DashboardOverView = () => {
  return (


    // <div className="w-full bg-white max-h-screen">hdhd</div>
    <div className="p-8  bg-white">
      {/* Header */}
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-gray-800">Dashboard</h1>
        <p className="text-gray-600">Overview of recent activities and analytics</p>
      </header>

      {/* Stat Cards */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <motion.div
          className="p-6 bg-white rounded-lg shadow-lg border-l-4 border-blue-600 flex items-center justify-between"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div>
            <h3 className="text-gray-500">Total Appointments</h3>
            <p className="text-2xl font-semibold text-gray-800">120</p>
          </div>
          <CalendarIcon className="w-10 h-10 text-blue-600" />
        </motion.div>

        <motion.div
          className="p-6 bg-white rounded-lg shadow-lg border-l-4 border-green-600 flex items-center justify-between"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div>
            <h3 className="text-gray-500">Registered Doctors</h3>
            <p className="text-2xl font-semibold text-gray-800">30</p>
          </div>
          <UserGroupIcon className="w-10 h-10 text-green-600" />
        </motion.div>

        <motion.div
          className="p-6 bg-white rounded-lg shadow-lg border-l-4 border-purple-600 flex items-center justify-between"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <h3 className="text-gray-500">Registered Patients</h3>
            <p className="text-2xl font-semibold text-gray-800">320</p>
          </div>
          <UserGroupIcon className="w-10 h-10 text-purple-600" />
        </motion.div>

        <motion.div
          className="p-6 bg-white rounded-lg shadow-lg border-l-4 border-yellow-600 flex items-center justify-between"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <h3 className="text-gray-500">Monthly Revenue</h3>
            <p className="text-2xl font-semibold text-gray-800">$8,000</p>
          </div>
          <CurrencyDollarIcon className="w-10 h-10 text-yellow-600" />
        </motion.div>
      </section>

      {/* Analytics Section */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
        {/* Revenue & Engagement Chart */}
        <motion.div
          className="col-span-2 bg-white p-8 rounded-lg shadow-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Revenue & User Engagement</h2>
          <div className="h-64">[Revenue & Engagement Chart Placeholder]</div>
        </motion.div>

        {/* Appointments by Status */}
        <motion.div
          className="bg-white p-8 rounded-lg shadow-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Appointments by Status</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Pending</span>
              <span className="font-semibold text-gray-800">35%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Confirmed</span>
              <span className="font-semibold text-gray-800">45%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Completed</span>
              <span className="font-semibold text-gray-800">20%</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Recent Activity and Alerts Section */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activities */}
        <motion.div
          className="bg-white p-6 rounded-lg shadow-lg lg:col-span-2"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Recent Activities</h2>
          <ul className="space-y-3 max-h-64 overflow-y-auto">
            <li className="flex justify-between text-gray-600">
              <span>Admin approved appointment #123</span>
              <span>10 mins ago</span>
            </li>
            <li className="flex justify-between text-gray-600">
              <span>New doctor registered</span>
              <span>30 mins ago</span>
            </li>
            <li className="flex justify-between text-gray-600">
              <span>Appointment #110 completed</span>
              <span>1 hour ago</span>
            </li>
          </ul>
        </motion.div>

        {/* Notifications */}
        <motion.div
          className="bg-yellow-100 p-6 rounded-lg shadow-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center mb-4">
            <BellIcon className="w-6 h-6 text-yellow-600 mr-2" />
            <h2 className="text-2xl font-bold text-yellow-800">Alerts & Notifications</h2>
          </div>
          <ul className="space-y-2">
            <li className="flex items-center text-yellow-700">
              <ShieldCheckIcon className="w-5 h-5 mr-2" />
              System maintenance scheduled for 3rd Dec.
            </li>
            <li className="flex items-center text-yellow-700">
              <ShieldCheckIcon className="w-5 h-5 mr-2" />
              Backup completed successfully.
            </li>
          </ul>
        </motion.div>
      </section>
    </div>
  )
}

export default DashboardOverView