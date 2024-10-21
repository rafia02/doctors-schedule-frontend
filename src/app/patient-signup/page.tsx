"use client"

import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/16/solid";
import Link from "next/link";
import PhoneInput from 'react-phone-input-2'

// Define form inputs
interface SignUpFormInputs {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  phoneNumber?: string;
}




const PatientSignUpPage = () => {
  const { register, handleSubmit, formState: { errors }, watch, control } = useForm<SignUpFormInputs>();
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const onSubmit: SubmitHandler<SignUpFormInputs> = (data) => {
    console.log(data);
    // Handle form submission logic here (e.g., API calls)
  };
  return (
    <div className=" flex py-10  items-center justify-center bg-gray-100">
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 bg-[#dee8fe] rounded-lg shadow-lg overflow-hidden">

        {/* Left Column - Image Section */}
        <div className="hidden md:block    bg-secondery p-8">


          <div className="backdrop-blur-xl p-8  bg-secondery/30 ">
            <h2 className="text-4xl font-bold mb-4">Join Our Healthcare Community</h2>
            <p className="text-lg mb-6">Sign up to manage appointments, access medical records, and consult with doctors—anytime, anywhere.</p>
            <ul className="space-y-4 text-lg">
              <li>✔ Secure Access to Health Data</li>
              <li>✔ 24/7 Online Appointment Booking</li>
              <li>✔ Trusted by Thousands of Patients</li>
              <li>✔Diagnostics at your doorstep</li>
              <li>✔ Instant Electronic Prescription</li>
              <li>✔ Medicine Reminder</li>
              <li>✔ Easy Payment Options</li>
            </ul>
          </div>
        </div>




        {/* Right Column - Form Section */}
        <div className="p-8 md:p-12 space-y-4  bg-white">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-2">Create Your <span className="text-primary">Patient</span> Account</h2>
          <p className="text-gray-500 text-center mb-6">Start managing your healthcare with confidence.</p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 text-[13px]">

            {/* Full Name */}
            <div className="flex justify-center gap-2">
              <div className="w-1/2">
                <label htmlFor="firstName" className="block mb-[1px] text-textDark font-semibold">First Name</label>
                <input
                  id="firstName"
                  type="text"
                  {...register("firstName", { required: "First name is required" })}
                  className={`w-full px-4 py-3 border ${errors.firstName ? "border-red-500" : "border-gray-300"
                    } rounded-md focus:outline-none focus:ring-btnClr focus:border-btnClr`}
                  placeholder="Enter your full name"
                />
                {errors.firstName && (
                  <span className="text-red-500 text-sm">{errors.firstName.message}</span>
                )}
              </div>

              <div className="w-1/2">
                <label htmlFor="lastName" className="block mb-[1px] text-textDark font-semibold">Last Name</label>
                <input
                  id="lastName"
                  type="text"
                  {...register("lastName", { required: "Last name is required" })}
                  className={`w-full px-4 py-3 border ${errors.lastName ? "border-red-500" : "border-gray-300"
                    } rounded-md focus:outline-none focus:ring-btnClr focus:border-btnClr`}
                  placeholder="Enter your full name"
                />
                {errors.lastName && (
                  <span className="text-red-500 text-sm">{errors.lastName.message}</span>
                )}
              </div>
            </div>


            {/* Email */}
            <div>
              <label htmlFor="email" className="block mb-[1px] text-textDark font-semibold">Email</label>
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
                className={`w-full px-4 py-3 border ${errors.email ? "border-red-500" : "border-gray-300"
                  } rounded-md focus:outline-none focus:ring-btnClr focus:border-btnClr`}
                placeholder="Enter your email"
              />
              {errors.email && (
                <span className="text-red-500 text-sm">{errors.email.message}</span>
              )}
            </div>

            {/* Password */}
            <div className="flex justify-center gap-2">
              <div className="w-1/2">
                <label htmlFor="password" className="block mb-[1px] text-textDark font-semibold"> Password</label>
                <div className="relative">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    {...register("password", { required: "Password is required" })}
                    className={`w-full px-4 py-3 border-[1px] ${errors.password ? "border-red-500" : "border-gray-300"
                      } rounded-md focus:outline-none focus:ring-btnClr focus:border-btnClr`}
                    placeholder="Enter your password"
                  />
                  <div
                    className="absolute top-1/4 right-0 pr-3 flex items-center  cursor-pointer"
                    onClick={togglePasswordVisibility}
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
              {/* Confirm Password */}
              <div className="w-1/2">
                <label htmlFor="confirmPassword" className="block mb-[1px] text-textDark font-semibold">Confirm Password</label>
                <input
                  id="confirmPassword"
                  type="password"
                  {...register("confirmPassword", {
                    required: "Please confirm your password",
                    validate: (value) => value === watch('password') || "Passwords don't match",
                  })}
                  className={`w-full px-4 py-3 border ${errors.confirmPassword ? "border-red-500" : "border-gray-300"
                    } rounded-md focus:outline-none focus:ring-btnClr focus:border-btnClr`}
                  placeholder="Confirm your password"
                />
                {errors.confirmPassword && (
                  <span className="text-red-500 text-sm">{errors.confirmPassword.message}</span>
                )}
              </div>
            </div>





            {/* Phone Number */}


            <div>
              <label htmlFor="phoneNumber" className="block text-gray-700 font-semibold">Phone Number (Optional)</label>
              <Controller
                control={control}
                name="phoneNumber"
                render={({ field: { onChange, value } }) => (
                  <PhoneInput
                    country={'bd'}
                    value={value}
                    onChange={onChange}
                    inputStyle={{
                      width: "100%",
                      padding: "12px",
                      border: "1px solid #D1D5DB",
                      borderRadius: "0.375rem",
                      outline: "none",
                      fontSize: "16px",
                      color: "#4A5568"
                    }}
                  />
                )}
              />
            </div>


            {/* <div>
              <label htmlFor="phoneNumber" className="block mb-[1px] text-textDark font-semibold">Phone Number (Optional)</label>
              <input
                id="phoneNumber"
                type="text"
                {...register("phoneNumber")}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-btnClr focus:border-btnClr"
                placeholder="Enter your phone number"
              />
            </div> */}

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 px-4 bg-btnClr text-white font-semibold rounded-md hover:bg-btnHover focus:outline-none focus:ring-2 focus:ring-offset duration-300 focus:ring-btnHover"
            >
              Sign Up Now
            </button>

          </form>

          {/* Already have an account? */}
          <div className="text-center text-sm text-gray-500 mt-6">
            Already have an account?{" "}
            <Link href="/login" className="text-btnHover duration-300 hover:underline">Log in</Link>.
          </div>
        </div>
      </div>
    </div>
  )
}

export default PatientSignUpPage

