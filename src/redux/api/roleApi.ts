import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const roleApi = createApi({
  reducerPath: 'api', // Unique name for this slice
  baseQuery: fetchBaseQuery({ baseUrl: 'https://doctors-schedule-backend.vercel.app/api/v1/' }),
  endpoints: (builder) => ({
    getRole: builder.query({
      query: (email) => `userCreate/check-rule/${email}`,
    }),
  }),
});

export const { useGetRoleQuery } = roleApi; // Automatically generated hooks
