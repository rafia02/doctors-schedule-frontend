import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const doctorsApi = createApi({
    reducerPath: 'doctorsApi',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:5000'}),
    endpoints: (builder) => ({
        patientRegister : builder.mutation({
            query : (data) => {
                console.log('redux', data)
                return {
                    url: '/api/v1/userCreate/patient',
                    method: "POST",
                    body: data
                }
            }
        }),
        doctorRegister : builder.mutation({
            query: (doctorData)=> {
                console.log({doctorData})   
                return {
                    url: '/api/v1/userCreate/doctor',
                    method: 'POST',
                    body: doctorData
                }
            }
        }),


    }) 
})




export const { usePatientRegisterMutation, useDoctorRegisterMutation } = doctorsApi