'use client'
import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/16/solid";

// Define form inputs
interface DoctorSignUpFormInputs {
  doctorTitle: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  gender: string;
  email: string;
  specialization: string;
  phoneNumber: string;
  password: string;
  confirmPassword: string;
}




const DoctorSignUpPage = () => {
  const { register, handleSubmit, formState: { errors }, watch } = useForm<DoctorSignUpFormInputs>();
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const onSubmit: SubmitHandler<DoctorSignUpFormInputs> = (data) => {
    console.log(data);
    // Handle form submission logic here (e.g., API calls)
  }





  const titles = ['Dr.', 'Prof. Dr.', 'Assoc. Prof .Dr.', 'Asst. Prof. Dr.',];

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="flex w-full max-w-6xl shadow-lg rounded-lg overflow-hidden bg-white">

        {/* Left Column - Image Section */}
        <div className="hidden md:flex w-1/2 bg-cover bg-center" style={{ backgroundImage: `url('/images/doctor-bg.jpg')` }}>
          <div className="flex flex-col justify-center px-10 bg-secondery  bg-opacity-50 text-textDark h-full">
            <h2 className="text-4xl font-bold mb-4">Join Our Medical Network</h2>
            <p className="text-lg mb-6">Sign up to manage your appointments, consult with patients, and grow your medical practice.</p>
            <ul className="space-y-4 text-lg">
              <li>✔ Manage Your Appointments Online</li>
              <li>✔ Access Patient Records Securely</li>
              <li>✔ Build Your Professional Profile</li>
              <li>✔ Network with Other Medical Professionals</li>
            </ul>
          </div>
        </div>



        {/* Right Column - Form Section */}
        <div className="w-full md:w-1/2 p-8 md:p-12 bg-white">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-2">Create Your <span className="text-primary">Doctors</span> Account</h2>
          <p className="text-gray-500 text-center mb-6">Start managing your healthcare with confidence.</p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 text-sm">




            <div>
              <label htmlFor="email" className="block mb-[1px] text-textDark font-semibold">Title</label>

              <select
                id="doctor-title"
                {...register('doctorTitle', { required: 'Title is required' })}
                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-gray-400"
              >
                <option value="" disabled selected hidden >Select a title</option>
                {titles.map((title, index) => (
                  <option key={index} value={title}>
                    {title}
                  </option>
                ))}
              </select>

              {errors.doctorTitle && (
                <span className="text-red-500 text-sm">{errors.doctorTitle.message}</span>
              )}
            </div>







            {/* Full Name */}
            <div className="flex justify-center gap-5">
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







            {/* Date of Birth  */}
            <div>
              <label htmlFor="email" className="block mb-[1px] text-textDark font-semibold">Date of Birth</label>
              <input
                id="email"
                type="date"
                {...register("dateOfBirth", {
                  required: "dateOfBirth is required",
                })}
                className={`w-full px-4 py-3 border ${errors.dateOfBirth ? "border-red-500" : "border-gray-300"
                  } rounded-md focus:outline-none focus:ring-btnClr focus:border-btnClr`}
                placeholder="Enter your email"
              />
              {errors.dateOfBirth && (
                <span className="text-red-500 text-sm">{errors.dateOfBirth.message}</span>
              )}
            </div>




          {/* Gender  */}
          <div>
              <label htmlFor="email" className="block mb-[1px] text-textDark font-semibold">Gender</label>
              <input
                id="email"
                type="text"
                {...register("gender", {
                  required: "gender is required",
                  pattern: {
                    value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                    message: "Invalid email address",
                  },
                })}
                className={`w-full px-4 py-3 border ${errors.gender ? "border-red-500" : "border-gray-300"
                  } rounded-md focus:outline-none focus:ring-btnClr focus:border-btnClr`}
                placeholder="Enter your email"
              />
              {errors.gender && (
                <span className="text-red-500 text-sm">{errors.gender.message}</span>
              )}
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
            <div className="flex justify-center gap-5">
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
              <label htmlFor="phoneNumber" className="block mb-[1px] text-textDark font-semibold">Phone Number (Optional)</label>
              <input
                id="phoneNumber"
                type="text"
                {...register("phoneNumber")}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-btnClr focus:border-btnClr"
                placeholder="Enter your phone number"
              />
            </div>

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
            <a href="#" className="text-blue-600 hover:underline">Log in</a>.
          </div>
        </div>
      </div>
    </div>
  )
}

export default DoctorSignUpPage

