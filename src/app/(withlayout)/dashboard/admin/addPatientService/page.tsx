"use client";

import { AddPatientServiceForm } from "@/Types/adminDashboardType";
import { useForm, SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";



// interface FormData {
//   title: string;
//   mainImage: FileList | null;
// }

const AddPatientService = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<AddPatientServiceForm>();

  // const onSubmit: SubmitHandler<AddPatientServiceForm> = (data) => {
  //   console.log("Form Data:", data);
  //   reset();
  // };











  const uploadToCloudinary = async (file: File): Promise<string> => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "your_upload_preset"); // Replace with actual Cloudinary upload preset
    const url = `https://api.cloudinary.com/v1_1/doctorsShedule/image/upload`; // Replace with your Cloudinary cloud name

    try {
      const response = await fetch(url, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Cloudinary Error Response:", errorData);
        throw new Error("Failed to upload image");
      }

      const data = await response.json();
      return data.secure_url; // The URL of the uploaded image
    } catch (error) {
      console.error("Error uploading images:", error);
      throw error;
    }
  };




  const onSubmit: SubmitHandler<AddPatientServiceForm> = async (data) => {
    console.log("Form Data:", data);

    try {
      const imageFile = data.image?.[0];

      // Upload images if they exist
      const imageURL = imageFile
        ? await uploadToCloudinary(imageFile)
        : null;

      // Form data with hosted image URLs
      const formDataWithImages = {
        ...data,
        image: imageURL,
      };

      console.log("Form Submitted with Hosted Images:", formDataWithImages);
      fetch("https://doctors-schedule-backend.vercel.app/api/v1/patientServices/create", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(formDataWithImages)
      })
        .then(res => res.json())
        .then(data => {
          console.log(data)

          toast.success("Successfully Add Patient Service")
          reset({
            specialized: "",
            image: null,

          });

        })
        .catch(e => {
          console.error(e)
          toast.error("Error uploading data.");
        })
    } catch (error) {
      console.error("Error uploading images:", error);
    }



    // reset();
  };






  // const onSubmit: SubmitHandler<AddPatientServiceForm> = async (data) => {
  //   try {
  //     const mainImageFile = data.mainImage?.[0];

  //     // Upload images if they exist
  //     const mainImageURL = mainImageFile
  //       ? await uploadToCloudinary(mainImageFile)
  //       : null;

  //     // Form data with hosted image URLs
  //     const formDataWithImages = {
  //       ...data,
  //       mainImage: mainImageURL,
  //     };

  //     console.log("Form Submitted with Hosted Images:", formDataWithImages);
  //     fetch("https://doctors-schedule-backend.vercel.app/api/v1/specialize/create", {
  //       method: "POST",
  //       headers: {
  //         "Content-type": "application/json",
  //       },
  //       body: JSON.stringify(formDataWithImages)
  //     })
  //       .then(res => res.json())
  //       .then(data => {
  //         console.log(data)

  //         toast.success("Successfully add specialized")
  //         reset({
  //           title: "",
  //           mainImage: null,

  //         });

  //       })
  //       .catch(e => {
  //         console.error(e)
  //         toast.error("Error uploading data.");
  //       })
  //   } catch (error) {
  //     console.error("Error uploading images:", error);
  //   }
  // }







  return (
    <div className="text-sm">
      <div className="text-textLight">
        <h4 className="text-center text-lg uppercase font-semibold mb-2 tracking-wider">
          Add <span className="text-primary">Specialized</span> Details
        </h4>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-[#fafbfe] px-6 py-4 space-y-5 text-primary"
        >
          <div>
            <label htmlFor="title" className="block text-sm font-semibold">
              Title
            </label>
            <input
              id="specialized"
              {...register("specialized", { required: "Specialized is required" })}
              className="w-full bg-[#f1f5ff] mt-[2px] border rounded px-4 py-2 border-btnClr focus:outline-none"
              placeholder="Enter title"
            />
            {errors.specialized && (
              <p className="text-red-500 text-sm mt-[2px]">{errors.specialized.message}</p>
            )}
          </div>




          <div className="w-full">
            <label className="block text-sm mb-[2px] font-semibold">
              Main Image
            </label>
            <input
              type="file"
              id="mainImage"
              {...register("image", {
                required: " Image is required",
              })}
              className="w-full bg-[#f1f5ff] border rounded px-4 py-2 border-btnClr focus:outline-none"
            />
            {errors.image && (
              <p className="text-red-500 text-sm mt-1">
                {errors.image.message}
              </p>
            )}
          </div>








          <button
            type="submit"
            className="w-full text-white py-[10px] rounded border-btnClr bg-primary hover:bg-btnHover focus:outline-none uppercase duration-500"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default AddPatientService

