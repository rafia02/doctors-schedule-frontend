'use client'
import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";

// Define form inputs
interface DoctorSignUpFormInputs {
  fullName: string;
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
  };
  
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
    <div className="flex w-full max-w-6xl shadow-lg rounded-lg overflow-hidden bg-white">
      
      {/* Left Column - Image Section */}
      <div className="hidden md:flex w-1/2 bg-cover bg-center" style={{ backgroundImage: `url('/images/doctor-bg.jpg')` }}>
        <div className="flex flex-col justify-center p-10 bg-black bg-opacity-50 text-white h-full">
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
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Doctor Sign-Up</h2>
        <p className="text-gray-500 text-center mb-6">Join our trusted platform to manage your medical practice efficiently.</p>
        
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          
          {/* Full Name */}
          <div>
            <label htmlFor="fullName" className="block text-gray-700 font-semibold">Full Name</label>
            <input
              id="fullName"
              type="text"
              {...register("fullName", { required: "Full name is required" })}
              className={`w-full px-4 py-3 border ${
                errors.fullName ? "border-red-500" : "border-gray-300"
              } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
              placeholder="Enter your full name"
            />
            {errors.fullName && (
              <span className="text-red-500 text-sm">{errors.fullName.message}</span>
            )}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-gray-700 font-semibold">Email</label>
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
              className={`w-full px-4 py-3 border ${
                errors.email ? "border-red-500" : "border-gray-300"
              } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
              placeholder="Enter your email"
            />
            {errors.email && (
              <span className="text-red-500 text-sm">{errors.email.message}</span>
            )}
          </div>

          {/* Specialization */}
          <div>
            <label htmlFor="specialization" className="block text-gray-700 font-semibold">Specialization</label>
            <input
              id="specialization"
              type="text"
              {...register("specialization", { required: "Specialization is required" })}
              className={`w-full px-4 py-3 border ${
                errors.specialization ? "border-red-500" : "border-gray-300"
              } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
              placeholder="Enter your specialization"
            />
            {errors.specialization && (
              <span className="text-red-500 text-sm">{errors.specialization.message}</span>
            )}
          </div>

          {/* Phone Number */}
          <div>
            <label htmlFor="phoneNumber" className="block text-gray-700 font-semibold">Phone Number</label>
            <input
              id="phoneNumber"
              type="text"
              {...register("phoneNumber", { required: "Phone number is required" })}
              className={`w-full px-4 py-3 border ${
                errors.phoneNumber ? "border-red-500" : "border-gray-300"
              } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
              placeholder="Enter your phone number"
            />
            {errors.phoneNumber && (
              <span className="text-red-500 text-sm">{errors.phoneNumber.message}</span>
            )}
          </div>

          {/* Password */}
          <div className="relative">
            <label htmlFor="password" className="block text-gray-700 font-semibold">Password</label>
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              {...register("password", { required: "Password is required" })}
              className={`w-full px-4 py-3 border ${
                errors.password ? "border-red-500" : "border-gray-300"
              } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
              placeholder="Enter your password"
            />
            <div
              className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? "🙈" : "👁️"} {/* Toggle icon */}
            </div>
            {errors.password && (
              <span className="text-red-500 text-sm">{errors.password.message}</span>
            )}
          </div>

          {/* Confirm Password */}
          <div>
            <label htmlFor="confirmPassword" className="block text-gray-700 font-semibold">Confirm Password</label>
            <input
              id="confirmPassword"
              type="password"
              {...register("confirmPassword", {
                required: "Please confirm your password",
                validate: (value) => value === watch('password') || "Passwords don't match",
              })}
              className={`w-full px-4 py-3 border ${
                errors.confirmPassword ? "border-red-500" : "border-gray-300"
              } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
              placeholder="Confirm your password"
            />
            {errors.confirmPassword && (
              <span className="text-red-500 text-sm">{errors.confirmPassword.message}</span>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Sign Up as Doctor
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

