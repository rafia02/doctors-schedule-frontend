"use client";

import { useForm, useFieldArray, SubmitHandler } from "react-hook-form";
import { PlusCircleIcon, TrashIcon } from "@heroicons/react/24/outline";
import toast from "react-hot-toast";

interface Service {
  service: string;
}

interface FormData {
  title: string;
  subDescription: string;
  longDescription: string;
  mainImage: FileList | null;
  iconImage: FileList | null;
  benifit: string;
  services: Service[];
}

const AddSpecializedForm = () => {
  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      title: "",
      subDescription: "",
      longDescription: "",
      mainImage: null,
      iconImage: null,
      benifit: "",
      services: [{ service: "" }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "services",
  });

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

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      const mainImageFile = data.mainImage?.[0];
      const iconImageFile = data.iconImage?.[0];

      // Upload images if they exist
      const mainImageURL = mainImageFile
        ? await uploadToCloudinary(mainImageFile)
        : null;

      const iconImageURL = iconImageFile
        ? await uploadToCloudinary(iconImageFile)
        : null;

      // Form data with hosted image URLs
      const formDataWithImages = {
        ...data,
        mainImage: mainImageURL,
        iconImage: iconImageURL,
      };

      console.log("Form Submitted with Hosted Images:", formDataWithImages);
      fetch("https://doctors-schedule-backend.vercel.app/api/v1/specialize/create", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(formDataWithImages)
      })
        .then(res => res.json())
        .then(data => {
          console.log(data)

          toast.success("Successfully add specialized")
          reset({
            title: "",
            subDescription: "",
            longDescription: "",
            mainImage: null,
            iconImage: null,
            benifit: "",
            services: [{ service: "" }],
          });

        })
        .catch(e => {
          console.error(e)
          toast.error("Error uploading data.");
        })
    } catch (error) {
      console.error("Error uploading images:", error);
    }
  };

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
              id="title"
              {...register("title", { required: "Title is required" })}
              className="w-full bg-[#f1f5ff] mt-[2px] border rounded px-4 py-2 border-btnClr focus:outline-none"
              placeholder="Enter title"
            />
            {errors.title && (
              <p className="text-red-500 text-sm mt-[2px]">{errors.title.message}</p>
            )}
          </div>

          {/* <div>
            <label
              htmlFor="subDescription"
              className="block text-sm font-semibold"
            >
              Sub Description
            </label>
            <textarea
              id="subDescription"
              {...register("subDescription", {
                required: "Sub Description is required",
              })}
              className="w-full bg-[#f1f5ff] border mt-[2px] border-btnClr rounded px-4 py-2 focus:outline-none"
              placeholder="Enter sub description"
              rows={2}
            />
            {errors.subDescription && (
              <p className="text-red-500 text-sm">
                {errors.subDescription.message}
              </p>
            )}
          </div> */}


          <div>
            <label htmlFor="subDescription" className="block text-sm font-semibold">
              Sub Description
            </label>
            <textarea
              id="subDescription"
              {...register("subDescription", {
                required: "Sub Description is required",
                minLength: {
                  value: 450,
                  message: "Sub Description must be at least 450 characters long",
                },
              })}
              className="w-full bg-[#f1f5ff] border mt-[2px] border-btnClr rounded px-4 py-2 focus:outline-none"
              placeholder="Enter sub description"
              rows={4}
            />
            {errors.subDescription && (
              <p className="text-red-500 text-sm mt-[2px]">
                {errors.subDescription.message}
              </p>
            )}
          </div>


          {/* <div>
            <label
              htmlFor="longDescription"
              className="block text-sm font-semibold"
            >
              Long Description
            </label>
            <textarea
              id="longDescription"
              {...register("longDescription", {
                required: "Long Description is required",
              })}
              className="w-full bg-[#f1f5ff] border rounded px-4 py-2 mt-[2px] border-btnClr focus:outline-none"
              rows={4}
              placeholder="Enter long description"
            />
            {errors.longDescription && (
              <p className="text-red-500 text-sm ">
                {errors.longDescription.message}
              </p>
            )}
          </div> */}


          <div>
            <label
              htmlFor="longDescription"
              className="block text-sm font-semibold"
            >
              Long Description
            </label>
            <textarea
              id="longDescription"
              {...register("longDescription", {
                required: "Long Description is required",
                minLength: {
                  value: 800,
                  message: "Long Description must be at least 800 characters",
                },
              })}
              className="w-full bg-[#f1f5ff] border rounded px-4 py-2 mt-[2px] border-btnClr focus:outline-none"
              rows={8}
              placeholder="Enter long description"
            />
            {errors.longDescription && (
              <p className="text-red-500 text-sm mt-[2px]">
                {errors.longDescription.message}
              </p>
            )}
          </div>




          {/* 
          <div className="flex flex-col md:flex-row gap-2">
            <div className="w-full">
              <label className="block mb-[2px] text-sm font-semibold">
                Main Image
              </label>
              <input
                type="file"
                id="mainImage"
                {...register("mainImage", {
                  required: "Main Image is required",
                })}
                className="hidden"
              // className="w-full bg-[#f1f5ff] border rounded px-4 py-2 border-btnClr focus:outline-none"
              />

              <label
                htmlFor="mainImage"
                className="w-full block bg-[#f1f5ff] border rounded px-4 py-[11px] cursor-pointer border-btnClr focus:outline-none"
              >
                <span className="border border-primary bg-btnClr text-white py-[5px] px-2 rounded-[2px]">Choose File</span>
              </label>
              {errors.mainImage && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.mainImage.message}
                </p>
              )}
            </div>


            <div className="w-full">
              <label className="block text-sm font-semibold">
                Icon Image
              </label>
              <input
                type="file"
                id="iconImage"
                {...register("iconImage", {
                  required: "Icon Image is required",
                })}
                className="hidden"
              // className="w-full bg-[#f1f5ff] border rounded px-4 py-2 border-btnClr focus:outline-none"
              />

              <label
                htmlFor="iconImage"
                className="w-full block bg-[#f1f5ff] border rounded px-4 py-[11px] cursor-pointer border-btnClr focus:outline-none"
              >
                <span className="border border-primary bg-btnClr text-white py-[5px] px-2 rounded-[2px]">Choose File</span>
              </label>
              {errors.iconImage && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.iconImage.message}
                </p>
              )}
            </div>
          </div> */}




          <div className="flex flex-col md:flex-row gap-2">
            <div className="w-full">
              <label className="block text-sm mb-[2px] font-semibold">
                Main Image
              </label>
              <input
                type="file"
                id="mainImage"
                {...register("mainImage", {
                  required: "Main Image is required",
                })}
                className="w-full bg-[#f1f5ff] border rounded px-4 py-2 border-btnClr focus:outline-none"
              />
              {errors.mainImage && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.mainImage.message}
                </p>
              )}
            </div>
            <div className="w-full">
              <label className="block text-sm mb-[2px] font-semibold">
                Icon Image
              </label>
              <input
                type="file"
                id="iconImage"
                {...register("iconImage", {
                  required: "Icon Image is required",
                })}
                className="w-full bg-[#f1f5ff] border rounded px-4 py-2 border-btnClr focus:outline-none"
              />
              {errors.iconImage && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.iconImage.message}
                </p>
              )}
            </div>
          </div>

          <div>
            <label htmlFor="services" className="block text-sm font-semibold">
              Services
            </label>
            <div className="space-y-4 mt-[2px]">
              {fields.map((field, index) => (
                <div key={field.id} className="flex items-center gap-4">
                  <input
                    {...register(`services.${index}.service`, {
                      required: "Service is required",
                    })}
                    className="w-full text-sm bg-[#f1f5ff] border focus:ring-2 focus:ring-primary rounded px-3 py-2 border-btnClr focus:outline-none"
                    placeholder={`Service ${index + 1}`}
                  />
                  <button
                    type="button"
                    className="text-red-500 hover:text-red-700"
                    onClick={() => remove(index)}
                  >
                    <TrashIcon className="h-5 w-5" />
                  </button>
                </div>
              ))}
              <button
                type="button"
                onClick={() => append({ service: "" })}
                className="flex items-center hover:text-btnHover duration-300 font-semibold"
              >
                <PlusCircleIcon className="h-6 w-6 mr-2" />
                Add Service
              </button>
            </div>
          </div>

          {/* <div>
            <label htmlFor="benifit" className="block text-sm font-semibold">
              Benefit
            </label>
            <textarea
              id="benifit"
              {...register("benifit", { required: "Benefit is required" })}
              className="w-full bg-[#f1f5ff] border rounded px-4 py-2 mt-[2px] border-btnClr focus:outline-none"
              rows={4}
              placeholder="Enter benefit"
            />
            {errors.benifit && (
              <p className="text-red-500 text-sm mt-[2px]">
                {errors.benifit.message}
              </p>
            )}
          </div> */}

          <div>
            <label htmlFor="benefit" className="block text-sm font-semibold">
              Benefit
            </label>
            <textarea
              id="benifit"
              {...register("benifit", {
                required: "Benefit is required",
                minLength: {
                  value: 200,
                  message: "Benefit must be at least 200 characters long",
                },
              })}
              className="w-full bg-[#f1f5ff] border rounded px-4 py-2 mt-[2px] border-btnClr focus:outline-none"
              rows={4}
              placeholder="Enter benefits"
            />
            {errors.benifit && (
              <p className="text-red-500 text-sm mt-[2px]">
                {errors.benifit.message}
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
  );
};

export default AddSpecializedForm;

