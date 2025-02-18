/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { useEffect, useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/16/solid";
import PhoneInput from "react-phone-input-2";
import { logout, userSingUp } from "@/service/authService";
import { useDoctorRegisterMutation } from "@/redux/api/doctorsApi";
import toast from "react-hot-toast";
import { useRouter } from 'next/navigation';


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
  const router = useRouter()
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, reset, formState: { errors }, watch, control } = useForm<DoctorSignUpFormInputs>();
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const [doctorRegister, { data, isSuccess, isError, error }] = useDoctorRegisterMutation()




  useEffect(() => {
    if (isSuccess) {
      // console.log('doctor succesful in backend:', data)
      toast.success('Sign-up Successfull!!')
      router.push('/')
    }
    if (isError) {
      // console.log('doctor error in backend', error)
      toast.error('Sign-up failed. Please try again!!')
      logout()
    }
  }, [isSuccess, isError])



  const onSubmit: SubmitHandler<DoctorSignUpFormInputs> = async (data) => {
    setLoading(true);
    try {
      const doctor = await userSingUp(data.email, data.password);
      // console.log("Firebase signup", doctor);

      const doctorData = {
        password: data.password,
        doctor: {
          title: data.doctorTitle,
          name: { firstName: data.firstName, lastName: data.lastName },
          email: data.email,
          gender: data.gender.toLocaleLowerCase(),
          dateOfBirth: data.dateOfBirth,
          phone: data.phoneNumber,
          specialization: data.specialization
        }
      };

      if (doctor?.email && doctor?.uid) {
        await doctorRegister({ data: doctorData });
      }
      reset();
    } catch (error) {
      toast.error('Sign-up failed. Please try again!!');
    } finally {
      setLoading(false);
    }
  };






  const titles = ['Dr.', 'Prof. Dr.', 'Assoc. Prof .Dr.', 'Asst. Prof. Dr.',];
  const genders = ['Male', 'Female', 'Others']
  return (
    <div className=" flex py-10  items-center justify-center bg-gray-100">
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 bg-[#dee8fe] rounded-lg shadow-lg overflow-hidden">

        {/* Left Column - Image Section */}

        <div className="hidden md:block bg-secondery p-8">


          <div className="backdrop-blur-xl p-8  bg-secondery/30 ">
            <h1 className="text-4xl font-bold mb-6">Are You a Qualified<span className="text-primary"> Doctor?</span> </h1>
            <h2 className="text-xl text-primary font-bold mb-6">Join the Future of Digital Healthcare!</h2>
            <p className=" mb-6">Become part of the <span className="font-semibold text-primary">Doctors Schedule</span> network and set up your virtual clinic to provide medical consultations via video calls. Expand your reach and offer your expertise to patients beyond geographical boundaries.</p>
            <ul className="space-y-4 ">
              <li>✔ Manage Your Appointments Online</li>
              <li>✔ Access Patient Records Securely</li>
              <li>✔ Build Your Professional Profile</li>
              <li>✔ Network with Other Medical Professionals</li>
            </ul>
          </div>
        </div>



        <div className="p-8 md:p-12 space-y-4 bg-white">
          <h2 className="text-3xl font-bold w-full text-gray-800 text-center ">Create Your <span className="text-primary">Doctors</span> Account</h2>
          <p className="text-gray-500 text-center">Start managing your healthcare with confidence.</p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 text-[13px]">

            {/* title  */}
            <div>
              <label htmlFor="title" className="block mb-[1px] text-textLight font-semibold">Title</label>

              <select
                id="doctor-title"
                {...register('doctorTitle', { required: 'Title is required' })}
                className=" block w-full py-2 px-4 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
                <option value="" disabled hidden >Select a title</option>
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
            <div className="flex justify-center gap-2">
              <div className="w-1/2">
                <label htmlFor="firstName" className="block mb-[1px] text-textLight font-semibold">First Name</label>
                <input
                  id="firstName"
                  type="text"
                  {...register("firstName", { required: "First name is required" })}
                  className={`w-full px-4 py-2 border ${errors.firstName ? "border-red-500" : "border-gray-300"
                    } rounded-md focus:outline-none focus:ring-btnClr focus:border-btnClr`}
                  placeholder="Enter your full name"
                />
                {errors.firstName && (
                  <span className="text-red-500 text-sm">{errors.firstName.message}</span>
                )}
              </div>

              <div className="w-1/2">
                <label htmlFor="lastName" className="block mb-[1px] text-textLight font-semibold">Last Name</label>
                <input
                  id="lastName"
                  type="text"
                  {...register("lastName", { required: "Last name is required" })}
                  className={`w-full px-4 py-2 border ${errors.lastName ? "border-red-500" : "border-gray-300"
                    } rounded-md focus:outline-none focus:ring-btnClr focus:border-btnClr`}
                  placeholder="Enter your full name"
                />
                {errors.lastName && (
                  <span className="text-red-500 text-sm">{errors.lastName.message}</span>
                )}
              </div>
            </div>

            <div className="flex justify-center gap-2">
              {/* Date of Birth  */}
              <div className="w-1/2">
                <label htmlFor="email" className="block mb-[1px] text-textLight font-semibold">Date of Birth</label>
                <input
                  id="email"
                  type="date"
                  {...register("dateOfBirth", {
                    required: "dateOfBirth is required",
                  })}
                  className={`w-full px-4 py-2 border ${errors.dateOfBirth ? "border-red-500" : "border-gray-300"
                    } rounded-md focus:outline-none focus:ring-btnClr focus:border-btnClr`}
                  placeholder="Enter your email"
                />
                {errors.dateOfBirth && (
                  <span className="text-red-500 text-sm">{errors.dateOfBirth.message}</span>
                )}
              </div>


              {/* modify gender */}

              <div className="w-1/2">
                <label htmlFor="gender" className="block mb-[1px] text-textLight font-semibold">Gender</label>

                <select
                  id="doctor-gender"
                  {...register('gender', { required: 'gender is required' })}
                  className=" block w-full py-2 px-4 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm "
                >
                  <option value="" disabled hidden >Select a gender</option>
                  {genders.map((gender, index) => (
                    <option key={index} value={gender}>
                      {gender}
                    </option>
                  ))}
                </select>

                {errors.doctorTitle && (
                  <span className="text-red-500 text-sm">{errors.doctorTitle.message}</span>
                )}
              </div>

            </div>








            <div className="flex justify-center gap-2">

              {/* Phone Number */}
              <div>
                <label htmlFor="phoneNumber" className="block mb-[1px] text-textLight font-semibold">Phone Number (Optional)</label>
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
                        padding: "18px 12px ",
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


              {/* Specialization */}
              <div className="w-1/2">
                <label htmlFor="specialization" className="block mb-[1px] text-textLight font-semibold">Specialization</label>
                <input
                  id="specialization"
                  type="text"
                  {...register("specialization", { required: "Specialization is required" })}
                  className={`w-full px-4 py-2 border ${errors.specialization ? "border-red-500" : "border-gray-300"
                    } rounded-md focus:outline-none  focus:ring-btnClr focus:border-btnClr`}
                  placeholder="Enter your specialization"
                />
                {errors.specialization && (
                  <span className="text-red-500 text-sm">{errors.specialization.message}</span>
                )}
              </div>
            </div>



            {/* Email */}
            <div>
              <label htmlFor="email" className="block mb-[1px] text-textLight font-semibold">Email</label>
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
                className={`w-full px-4 py-2 border ${errors.email ? "border-red-500" : "border-gray-300"
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
                <label htmlFor="password" className="block mb-[1px] text-textLight font-semibold"> Password</label>
                <div className="relative">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    {...register("password", { required: "Password is required" })}
                    className={`w-full px-4 py-2 border-[1px] ${errors.password ? "border-red-500" : "border-gray-300"
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
                <label htmlFor="confirmPassword" className="block mb-[1px] text-textLight font-semibold">Confirm Password</label>
                <input
                  id="confirmPassword"
                  type="password"
                  {...register("confirmPassword", {
                    required: "Please confirm your password",
                    validate: (value) => value === watch('password') || "Passwords don't match",
                  })}
                  className={`w-full px-4 py-2 border ${errors.confirmPassword ? "border-red-500" : "border-gray-300"
                    } rounded-md focus:outline-none focus:ring-btnClr focus:border-btnClr`}
                  placeholder="Confirm your password"
                />
                {errors.confirmPassword && (
                  <span className="text-red-500 text-sm">{errors.confirmPassword.message}</span>
                )}
              </div>
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



        {/* <div className="hidden md:flex  bg-cover bg-center" style={{ backgroundImage: `url('/images/doctor-bg.jpg')` }}>
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
        </div> */}
      </div>
      {/* Right Column - Form Section */}

    </div>

  )
}

export default DoctorSignUpPage

