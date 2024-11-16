"use client";

import { useForm, useFieldArray } from "react-hook-form";
import { PlusCircleIcon, TrashIcon } from "@heroicons/react/24/outline";

const AddSpecializedForm = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: "",
      subDescription: "",
      longDescription: "",
      mainImage: null,
      iconImage: null,
      benefits: [{ benefit: "" }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "benefits",
  });

  const onSubmit = (data: any) => {
    console.log("Form Submitted:", data);
  };

  return (
    <div className="">
      <div className="">
        {/* Form Header */}
        <h4 className=" text-center uppercase font-semibold mb-5 tracking-wider">Add <span className="text-primary">Specialized</span> Details</h4>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Title */}
          <div>
            <label htmlFor="title" className="block text-sm font-semibold text-gray-700">
              Title
            </label>
            <div className="relative mt-2">
              <input
                id="title"
                {...register("title", { required: "Title is required" })}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 pr-12 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Enter title"
              />
            </div>
            {errors.title && (
              <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>
            )}
          </div>

          {/* Sub Description */}
          <div>
            <label htmlFor="subDescription" className="block text-sm font-semibold text-gray-700">
              Sub Description
            </label>
            <div className="relative mt-2">
              <input
                id="subDescription"
                {...register("subDescription", { required: "Sub Description is required" })}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 pr-12 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Enter sub description"
              />
            </div>
            {errors.subDescription && (
              <p className="text-red-500 text-sm mt-1">{errors.subDescription.message}</p>
            )}
          </div>

          {/* Long Description */}
          <div>
            <label htmlFor="longDescription" className="block text-sm font-semibold text-gray-700">
              Long Description
            </label>
            <textarea
              id="longDescription"
              {...register("longDescription", { required: "Long Description is required" })}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 mt-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              rows={4}
              placeholder="Enter long description"
            ></textarea>
            {errors.longDescription && (
              <p className="text-red-500 text-sm mt-1">{errors.longDescription.message}</p>
            )}
          </div>

          {/* Main Image */}
          <div>
            <label htmlFor="mainImage" className="block text-sm font-semibold text-gray-700">
              Main Image
            </label>
            <div className="mt-2 flex items-center gap-2">
              <input
                type="file"
                id="mainImage"
                {...register("mainImage", { required: "Main Image is required" })}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
            {errors.mainImage && (
              <p className="text-red-500 text-sm mt-1">{errors.mainImage.message}</p>
            )}
          </div>

          {/* Icon Image */}
          <div>
            <label htmlFor="iconImage" className="block text-sm font-semibold text-gray-700">
              Icon Image
            </label>
            <div className="mt-2 flex items-center gap-2">
              <input
                type="file"
                id="iconImage"
                {...register("iconImage", { required: "Icon Image is required" })}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
            {errors.iconImage && (
              <p className="text-red-500 text-sm mt-1">{errors.iconImage.message}</p>
            )}
          </div>

          {/* Benefits */}
          <div>
            <label htmlFor="benefits" className="block text-sm font-semibold text-gray-700">
              Benefits
            </label>
            <div className="space-y-4 mt-4">
              {fields.map((field, index) => (
                <div key={field.id} className="flex items-center gap-4 bg-gray-50 p-4 border border-gray-200 rounded-lg">
                  <input
                    {...register(`benefits.${index}.benefit`, { required: "Benefit is required" })}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    placeholder={`Benefit ${index + 1}`}
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
                onClick={() => append({ benefit: "" })}
                className="flex items-center text-blue-600 hover:text-blue-800 font-semibold mt-2"
              >
                <PlusCircleIcon className="h-5 w-5 mr-2" />
                Add Benefit
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-400 focus:outline-none font-semibold transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddSpecializedForm;

















// "use client";

// import { useForm, useFieldArray } from "react-hook-form";

// const AddSpecializedForm = () => {
//   const {
//     register,
//     control,
//     handleSubmit,
//     formState: { errors },
//   } = useForm({
//     defaultValues: {
//       title: "",
//       subDescription: "",
//       longDescription: "",
//       mainImage: null,
//       iconImage: null,
//       benefits: [{ benefit: "" }],
//     },
//   });

//   const { fields, append, remove } = useFieldArray({
//     control,
//     name: "benefits",
//   });

//   const onSubmit = (data: any) => {
//     console.log("Form Submitted:", data);
//   };

//   return (
//     <div className="">
//       <div className="">
//         {/* Form Header */}
//         <h4 className=" text-center uppercase font-semibold mb-5 tracking-wider">Add <span className="text-primary">Specialized</span> Details</h4>

//         {/* Form */}
//         <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
//           {/* Title */}
//           <div>
//             <label
//               htmlFor="title"
//               className="block text-sm font-semibold text-gray-700"
//             >
//               Title
//             </label>
//             <input
//               id="title"
//               {...register("title", { required: "Title is required" })}
//               className="w-full border border-gray-300 rounded-lg px-4 py-3 mt-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
//               placeholder="Enter title"
//             />
//             {errors.title && (
//               <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>
//             )}
//           </div>

//           {/* Sub Description */}
//           <div>
//             <label
//               htmlFor="subDescription"
//               className="block text-sm font-semibold text-gray-700"
//             >
//               Sub Description
//             </label>
//             <input
//               id="subDescription"
//               {...register("subDescription", {
//                 required: "Sub Description is required",
//               })}
//               className="w-full border border-gray-300 rounded-lg px-4 py-3 mt-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
//               placeholder="Enter sub description"
//             />
//             {errors.subDescription && (
//               <p className="text-red-500 text-sm mt-1">
//                 {errors.subDescription.message}
//               </p>
//             )}
//           </div>

//           {/* Long Description */}
//           <div>
//             <label
//               htmlFor="longDescription"
//               className="block text-sm font-semibold text-gray-700"
//             >
//               Long Description
//             </label>
//             <textarea
//               id="longDescription"
//               {...register("longDescription", {
//                 required: "Long Description is required",
//               })}
//               className="w-full border border-gray-300 rounded-lg px-4 py-3 mt-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
//               rows={4}
//               placeholder="Enter long description"
//             ></textarea>
//             {errors.longDescription && (
//               <p className="text-red-500 text-sm mt-1">
//                 {errors.longDescription.message}
//               </p>
//             )}
//           </div>

//           {/* Main Image */}
//           <div>
//             <label
//               htmlFor="mainImage"
//               className="block text-sm font-semibold text-gray-700"
//             >
//               Main Image
//             </label>
//             <input
//               type="file"
//               id="mainImage"
//               {...register("mainImage", {
//                 required: "Main Image is required",
//               })}
//               className="w-full border border-gray-300 rounded-lg px-4 py-3 mt-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
//             />
//             {errors.mainImage && (
//               <p className="text-red-500 text-sm mt-1">
//                 {errors.mainImage.message}
//               </p>
//             )}
//           </div>

//           {/* Icon Image */}
//           <div>
//             <label
//               htmlFor="iconImage"
//               className="block text-sm font-semibold text-gray-700"
//             >
//               Icon Image
//             </label>
//             <input
//               type="file"
//               id="iconImage"
//               {...register("iconImage", {
//                 required: "Icon Image is required",
//               })}
//               className="w-full border border-gray-300 rounded-lg px-4 py-3 mt-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
//             />
//             {errors.iconImage && (
//               <p className="text-red-500 text-sm mt-1">
//                 {errors.iconImage.message}
//               </p>
//             )}
//           </div>

//           {/* Benefits */}
//           <div>
//             <label
//               htmlFor="benefits"
//               className="block text-sm font-semibold text-gray-700"
//             >
//               Benefit Options
//             </label>
//             <div className="space-y-4 mt-4">
//               {fields.map((field, index) => (
//                 <div
//                   key={field.id}
//                   className="flex items-center gap-4 bg-gray-50 p-4 border border-gray-200 rounded-lg"
//                 >
//                   <input
//                     {...register(`benefits.${index}.benefit`, {
//                       required: "Benefit is required",
//                     })}
//                     className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
//                     placeholder={`Benefit ${index + 1}`}
//                   />
//                   <button
//                     type="button"
//                     className="text-red-500 hover:text-red-700"
//                     onClick={() => remove(index)}
//                   >
//                     Remove
//                   </button>
//                 </div>
//               ))}
//               <button
//                 type="button"
//                 onClick={() => append({ benefit: "" })}
//                 className="text-blue-600 hover:text-blue-800 font-semibold mt-2"
//               >
//                 + Add Benefit
//               </button>
//             </div>
//           </div>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-400 focus:outline-none font-semibold transition"
//           >
//             Submit
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AddSpecializedForm;
