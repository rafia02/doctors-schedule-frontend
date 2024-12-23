
import axios from "axios";

export const fetchSpecializations = async () => {
  const { data } = await axios.get(
    "https://doctors-schedule-backend.vercel.app/api/v1/specialize/all"
  );
  return data.data;
};
