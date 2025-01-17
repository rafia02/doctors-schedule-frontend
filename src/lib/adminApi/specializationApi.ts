
import axios from "axios";

export const fetchSpecializations = async () => {
  const { data } = await axios.get(
    "https://doctors-schedule-backend.vercel.app/api/v1/specialize/all"
  );
  return data.data;
};



export const deleteSpecialization = async (id: string) => {
  await axios.delete(`https://doctors-schedule-backend.vercel.app/api/v1/specialize/delete/${id}`);
};



export const fetchDepartmentDetails = async (id: string) => {
  const { data } = await axios.get(
    `https://doctors-schedule-backend.vercel.app/api/v1/specialize/single/${id}`
  );
  return data.data; // Adjust if your API structure differs
};