import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    user: null,
    loading : false,
    error: null
}


const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers : {
        loginStart : (state) => {
            state.loading= true
        },
        loginSuccess: (state, action) => {
            state.loading = false
            state.user = action.payload
        },
        loginFilure: (state, action) => {
            state.loading = false
            state.error= action.payload
        }
    }
})



export const {loginStart, loginSuccess } = authSlice.actions
export default authSlice.reducer