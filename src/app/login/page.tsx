"use client"

import { useState } from "react"
import { useForm, SubmitHandler } from "react-hook-form"
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid"
import Link from "next/link";


interface LoginFormType {
  email: string;
  password: string;
}

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormType>();

  const [showPassword, setShowPassword] = useState(false)

  const togglePassword = () => setShowPassword(!showPassword);


  const onSubmit: SubmitHandler<LoginFormType> = (data) => {
    console.log(data);

  };

  return (
    <div className="flex py-10  items-center justify-center bg-gray-50">
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 bg-[#dee8fe] rounded-lg shadow-lg overflow-hidden">




        <div className="hidden md:block rounded-bl-full bg-secondery p-8">
          {/* Background Image */}

          <div className=" flex flex-col items-start justify-center h-full text-textDark space-y-6 p-8  bg-opacity-50 rounded-lg">
            <h2 className="text-4xl font-extrabold mb-4 text-textDark leading-tight">
              Why Choose <br /><span className="text-primary">Doctors</span>  Schedule?
            </h2>

            <p className="text-lg">
              Your reliable healthcare management platform for effortless scheduling, secure records, and expert consultations.
            </p>

            <ul className="space-y-3 text-lg">
              <li className="flex items-center space-x-2">
                <span className="text-green-400">✔</span>
                <span>24/7 Access: Manage appointments anytime, anywhere</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-green-400">✔</span>
                <span>Secure Records: Your health data is safe with us</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-green-400">✔</span>
                <span>Quick Consultations: Get in touch with your doctor easily</span>
              </li>
            </ul>
          </div>
        </div>


        {/* Right Column - Login Form */}
        <div className="p-8 md:p-12 space-y-6  bg-white">
          <h2 className="text-center text-3xl font-bold text-textDark">
            Welcome Back to <span className="text-primary">Doctors</span> Schedule
          </h2>
          <p className="text-center text-sm text-textDark">
            Your gateway to seamless healthcare management.
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-4">
              {/* Email Field */}
              <div>
                <label htmlFor="email" className="sr-only">Email address</label>
                <input
                  id="email"
                  type="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                      message: "Invalid email address",
                    },
                  })}
                  className={`appearance-none rounded-md relative block w-full px-3 py-2 border ${errors.email ? "border-red-500" : "border-gray-300"
                    } placeholder-gray-500  focus:outline-none focus:ring-btnClr focus:border-btnClr sm:text-sm`}
                  placeholder="Email address"
                />
                {errors.email && (
                  <span className="text-red-500 text-sm">{errors.email.message}</span>
                )}
              </div>

              {/* Password Field with Toggle */}
              <div className="">
                <label htmlFor="password" className="sr-only">Password</label>
                <div className="relative">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    {...register("password", {
                      required: "Password is required",
                    })}
                    className={`appearance-none rounded-md relative block w-full px-3 py-2 border ${errors.password ? "border-red-500" : "border-gray-300"
                      } placeholder-gray-500  focus:outline-none focus:ring-btnClr focus:border-btnClr sm:text-sm`}
                    placeholder="Password"
                  />
                  <div
                    className="absolute top-1/4 right-0 pr-3 flex items-center  cursor-pointer"
                    onClick={togglePassword}
                  >
                    {showPassword ? (
                      <EyeSlashIcon className="h-5 w-5 text-textDark" />
                    ) : (
                      <EyeIcon className="h-5 w-5 text-textDark" />
                    )}
                  </div>
                </div>
                {errors.password && (
                  <span className="text-red-500 text-sm">{errors.password.message}</span>
                )}
              </div>
            </div>

            {/* Forgot Password & Submit Button */}
            <div className="flex items-center justify-between">
              <div className="text-sm">
                <a href="#" className="font-medium text-primary hover:text-btnHover duration-75">
                  Forgot Password?
                </a>
              </div>
            </div>

            <button
              type="submit"
              className=" relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-btnClr hover:bg-btnHover duration-300 focus:outline-none focus:ring-2 focus:ring-offset focus:ring-primary"
            >
              Login
            </button>
          </form>

          <div className="text-center text-sm text-textDark">
            <p>
              New Here?{" "}
              <Link href="/patient-signup" className="font-medium text-primary hover:text-btnHover duration-75">
                Create an account
              </Link>
            </p>
          </div>

          <div className="mt-6 text-center text-sm">
            <p>
              For Doctors & Admins{" "}
              <a href="#" className="font-medium text-primary hover:text-btnHover duration-75">
                Access admin portal
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}



// import Image from "next/image";
// import { SubmitHandler, useForm } from "react-hook-form";
// import img1 from "../image/bc.jpg"

// interface InputType {
//   email: string;
//   password: string;
// }
// const LoginPage = () => {

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm<InputType>();


//   const onSubmit: SubmitHandler<InputType> = (data) => {

//     console.log('Login Data: ', data);
//   };



//   return (
//     <div>

//       <div className="grid grid-cols-1 md:grid-cols-2">
//         <div>
//           <Image className="w-full" src={img1} width={500} height={100} alt="" />

//         </div>
//         <div className=" p-6 bg-secondery rounded-md shadow-md">
//           <h2 className="text-xl font-semibold text-center mb-4">Login</h2>
//           <form onSubmit={handleSubmit(onSubmit)} noValidate>
//             {/* Email Field */}
//             <div className="mb-4">
//               <label className="block mb-1 text-sm font-medium" htmlFor="email">
//                 Email
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 className={`w-full px-4 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'
//                   } rounded focus:outline-none`}
//                 {...register('email', {
//                   required: 'Email is required',
//                   pattern: {
//                     value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
//                     message: 'Invalid email address',
//                   },
//                 })}
//               />
//               {errors.email && (
//                 <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
//               )}
//             </div>

//             {/* Password Field */}
//             <div className="mb-4">
//               <label className="block mb-1 text-sm font-medium" htmlFor="password">
//                 Password
//               </label>
//               <input
//                 type="password"
//                 id="password"
//                 className={`w-full px-4 py-2 border ${errors.password ? 'border-red-500' : 'border-gray-300'
//                   } rounded focus:outline-none`}
//                 {...register('password', {
//                   required: 'Password is required',
//                   minLength: {
//                     value: 6,
//                     message: 'Password must be at least 6 characters',
//                   },
//                 })}
//               />
//               {errors.password && (
//                 <p className="text-red-500 text-sm mt-1">
//                   {errors.password.message}
//                 </p>
//               )}
//             </div>

//             {/* Submit Button */}
//             <button
//               type="submit"
//               className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200"
//             >
//               Login
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default LoginPage