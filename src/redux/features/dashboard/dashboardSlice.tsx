import { createSlice } from "@reduxjs/toolkit";

interface User {
    user: boolean
}
const initialState : User = {
    user: false
}

const dashboardSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        toggle: (state)=>{
            state =
        }
    }
})


export