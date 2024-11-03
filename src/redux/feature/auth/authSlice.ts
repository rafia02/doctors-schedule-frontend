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
        loginStart(state) {
            state.loading = true;
          },
          loginSuccess(state, action) {
            state.loading = false;
            state.user = action.payload;
          },
          loginFailure(state, action) {
            state.loading = false;
            state.error = action.payload;
          },
          logout(state) {
            state.user = null;
          },
          clearUser: (state) => {
            state.user = null;
          },
    }
})



export const {loginStart, loginSuccess, loginFailure, logout, clearUser } = authSlice.actions
export default authSlice.reducer