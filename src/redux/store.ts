import { configureStore } from '@reduxjs/toolkit'
import authReducerSlice from '../redux/feature/auth/authSlice'
import { doctorsApi } from './api/doctorsApi'
import { roleApi } from './api/roleApi'



export const store = configureStore({
  reducer: {
    auth: authReducerSlice,
    [doctorsApi.reducerPath] : doctorsApi.reducer,
    [roleApi.reducerPath]: roleApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    // getDefaultMiddleware().concat(doctorsApi.middleware),

  getDefaultMiddleware().concat(doctorsApi.middleware, roleApi.middleware),
})




// export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch