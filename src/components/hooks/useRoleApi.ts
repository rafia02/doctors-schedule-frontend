"use client"

import axios from "axios";
import { useEffect, useState } from "react";

interface RoleApiResponse {
  role: string; // Update this based on the actual API response
  [key: string]: any; // For any additional fields in the API response
}

interface UseRoleApiResult {
  data: RoleApiResponse | null;
  loading: boolean;
  error: string | null;
}



const useRoleApi = (email: string | null): UseRoleApiResult => {
  const [data, setData] = useState<RoleApiResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);





  const BASE_URL = "http://localhost:5000/api/v1/";

  useEffect(() => {
    if (!email) {
      setData(null);
      setError("Email is required to fetch role data.");
      return;
    }

    const fetchRole = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await axios.get<RoleApiResponse>(
          `${BASE_URL}userCreate/check-rule/${email}`
        );
        setData(response.data);
      } catch (err: any) {
        setError(err.response?.data?.message || "An error occurred");
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchRole();
  }, [email]);

  return { data, loading, error };
};


export default useRoleApi;

// import { useState, useEffect } from "react";
// import axios from "axios";

// const BASE_URL = "http://localhost:5000/api/v1/";

// // Define types for the API response and hook states
// interface RoleApiResponse {
//   role: string; // Update this based on the actual API response
//   [key: string]: any; // For any additional fields in the API response
// }

// interface UseRoleApiResult {
//   data: RoleApiResponse | null;
//   loading: boolean;
//   error: string | null;
// }


// const useRoleApi = (email: string): UseRoleApiResult => {
//   const [data, setData] = useState<RoleApiResponse | null>(null);
//   const [loading, setLoading] = useState<boolean>(false);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     if (!email) {
//       setData(null);
//       setError(null);
//       return;
//     }

//     const fetchRole = async () => {
//       setLoading(true);
//       setError(null);

//       try {
//         const response = await axios.get<RoleApiResponse>(
//           `${BASE_URL}userCreate/check-rule/${email}`
//         );
//         setData(response.data);
//       } catch (err: any) {
//         setError(err.response?.data?.message || "An error occurred");
//         setData(null);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchRole();
//   }, [email]);

//   return { data, loading, error };
// };

// export default useRoleApi;
