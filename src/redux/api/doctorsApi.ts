import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const doctorsApi = createApi({
    reducerPath: 'doctorsApi',
    baseQuery: fetchBaseQuery({baseUrl: '/'}),
    endpoints: (builder) => ({
        userRegister : builder.mutation({
            query : (data) => {

                return {
                    url: '/',
                    method: "POST",
                    body: data
                }
            }
        })
    }) 
})




const { useUserRegisterMutation } = doctorsApi