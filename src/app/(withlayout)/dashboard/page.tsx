// "use client"


import React from 'react'

const AjairaDashboard = () => {
  return (
    <div>AjairaDashboard</div>
  )
}

export default AjairaDashboard


// import { motion } from "framer-motion";

// import { LineChart, Line, BarChart, Bar, AreaChart, Area, PieChart, Pie, Cell, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';

// import { CalendarIcon, ChartBarIcon, UserPlusIcon, UsersIcon } from "@heroicons/react/16/solid";

// const pieData = [
//   { name: 'Online Appointments', value: 300 },
//   { name: 'Offline Appointments', value: 200 },
// ];
// const COLORS = ['#4CAF50', '#FF5722'];

// const barData = [
//   { name: 'Mon', appointments: 20 },
//   { name: 'Tue', appointments: 35 },
//   { name: 'Wed', appointments: 15 },
//   { name: 'Thu', appointments: 40 },
//   { name: 'Fri', appointments: 25 },
//   { name: 'Sat', appointments: 30 },
//   { name: 'Sun', appointments: 10 },
// ];

// const lineData = [
//   { name: 'Jan', patients: 120 },
//   { name: 'Feb', patients: 210 },
//   { name: 'Mar', patients: 180 },
//   { name: 'Apr', patients: 240 },
//   { name: 'May', patients: 280 },
//   { name: 'Jun', patients: 150 },
// ];

// const areaData = [
//   { name: '2021', doctors: 50 },
//   { name: '2022', doctors: 75 },
//   { name: '2023', doctors: 100 },
//   { name: '2024', doctors: 130 },
// ];

// const DashboardOverviewPage = () => {
//   return (
//     <div className="p-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      
//     {/* Statistic Cards */}
//     <div className="grid gap-4 grid-cols-2 col-span-full lg:col-span-4">
//       <motion.div
//         className="p-4 bg-white shadow-lg rounded-lg flex items-center justify-between"
//         whileHover={{ scale: 1.05 }}
//         initial={{ opacity: 0, x: -20 }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{ duration: 0.6 }}
//       >
//         <div>
//           <h2 className="text-sm font-semibold text-gray-600">Total Doctors</h2>
//           <div className="text-2xl font-bold text-blue-600">130</div>
//           <p className="text-green-500 text-sm">+8% from last month</p>
//         </div>
//         <UserPlusIcon className="text-blue-500 w-8 h-8" /> {/* Heroicon */}
//       </motion.div>

//       <motion.div
//         className="p-4 bg-white shadow-lg rounded-lg flex items-center justify-between"
//         whileHover={{ scale: 1.05 }}
//         initial={{ opacity: 0, x: 20 }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{ duration: 0.6, delay: 0.1 }}
//       >
//         <div>
//           <h2 className="text-sm font-semibold text-gray-600">Total Patients</h2>
//           <div className="text-2xl font-bold text-green-600">1,200</div>
//           <p className="text-red-500 text-sm">-3% from last month</p>
//         </div>
//         <UsersIcon className="text-green-500 w-8 h-8" /> {/* Heroicon */}
//       </motion.div>

//       <motion.div
//         className="p-4 bg-white shadow-lg rounded-lg flex items-center justify-between"
//         whileHover={{ scale: 1.05 }}
//         initial={{ opacity: 0, x: -20 }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{ duration: 0.6, delay: 0.2 }}
//       >
//         <div>
//           <h2 className="text-sm font-semibold text-gray-600">Appointments (This Week)</h2>
//           <div className="text-2xl font-bold text-orange-600">350</div>
//           <p className="text-green-500 text-sm">+5% increase</p>
//         </div>
//         <CalendarIcon className="text-orange-500 w-8 h-8" /> {/* Heroicon */}
//       </motion.div>

//       <motion.div
//         className="p-4 bg-white shadow-lg rounded-lg flex items-center justify-between"
//         whileHover={{ scale: 1.05 }}
//         initial={{ opacity: 0, x: 20 }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{ duration: 0.6, delay: 0.3 }}
//       >
//         <div>
//           <h2 className="text-sm font-semibold text-gray-600">Average Rating</h2>
//           <div className="text-2xl font-bold text-purple-600">4.8</div>
//           <p className="text-green-500 text-sm">+1% improvement</p>
//         </div>
//         <ChartBarIcon className="text-purple-500 w-8 h-8" /> {/* Heroicon */}
//       </motion.div>
//     </div>

//     {/* Line Chart for Patients */}
//     <motion.div
//       className="p-4 bg-white shadow-md rounded-lg"
//       whileHover={{ scale: 1.05 }}
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.6 }}
//     >
//       <h2 className="text-lg font-semibold text-blue-600 mb-2">Total Patients (Monthly)</h2>
//       <ResponsiveContainer width="100%" height={200}>
//         <LineChart data={lineData}>
//           <XAxis dataKey="name" />
//           <YAxis />
//           <Tooltip contentStyle={{ backgroundColor: '#fff', borderColor: '#ddd', color: '#000' }} />
//           <Line type="monotone" dataKey="patients" stroke="#8884d8" strokeWidth={2} />
//         </LineChart>
//       </ResponsiveContainer>
//     </motion.div>

//     {/* Bar Chart for Weekly Appointments */}
//     <motion.div
//       className="p-4 bg-white shadow-md rounded-lg"
//       whileHover={{ scale: 1.05 }}
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.6, delay: 0.1 }}
//     >
//       <h2 className="text-lg font-semibold text-green-600 mb-2">Appointments (Weekly)</h2>
//       <ResponsiveContainer width="100%" height={200}>
//         <BarChart data={barData}>
//           <XAxis dataKey="name" />
//           <YAxis />
//           <Tooltip contentStyle={{ backgroundColor: '#fff', borderColor: '#ddd', color: '#000' }} />
//           <CartesianGrid strokeDasharray="3 3" />
//           <Bar dataKey="appointments" fill="#82ca9d" />
//         </BarChart>
//       </ResponsiveContainer>
//     </motion.div>

//     {/* Area Chart for Doctor Growth */}
//     <motion.div
//       className="p-4 bg-white shadow-md rounded-lg"
//       whileHover={{ scale: 1.05 }}
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.6, delay: 0.2 }}
//     >
//       <h2 className="text-lg font-semibold text-purple-600 mb-2">Doctors Over Time</h2>
//       <ResponsiveContainer width="100%" height={200}>
//         <AreaChart data={areaData}>
//           <XAxis dataKey="name" />
//           <YAxis />
//           <Tooltip contentStyle={{ backgroundColor: '#fff', borderColor: '#ddd', color: '#000' }} />
//           <CartesianGrid strokeDasharray="3 3" />
//           <Area type="monotone" dataKey="doctors" stroke="#8884d8" fill="#8884d8" />
//         </AreaChart>
//       </ResponsiveContainer>
//     </motion.div>

//     {/* Pie Chart for Online vs Offline Appointments */}
//     <motion.div
//       className="p-4 bg-white shadow-md rounded-lg"
//       whileHover={{ scale: 1.05 }}
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.6, delay: 0.3 }}
//     >
//       <h2 className="text-lg font-semibold text-red-600 mb-2">Online vs Offline Appointments</h2>
//       <ResponsiveContainer width="100%" height={200}>
//         <PieChart>
//           {/* <Pie data={pieData} cx="50%" cy="50%" labelLine={false} outerRadius={80} >
//             {pieData.map((entry, index) => (
//               <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//             ))}
//           </Pie> */}
//           <Tooltip contentStyle={{ backgroundColor: '#fff', borderColor: '#ddd', color: '#000' }} />
//         </PieChart>
//       </ResponsiveContainer>
//     </motion.div>
//   </div>
//   )
// }

// export default DashboardOverviewPage