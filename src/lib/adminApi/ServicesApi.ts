import axios from "axios";

export const fetchPatientServices = async () => {
    const { data } = await axios.get(
      "https://doctors-schedule-backend.vercel.app/api/v1/patientServices/all"
    );
    return data.data;
  };