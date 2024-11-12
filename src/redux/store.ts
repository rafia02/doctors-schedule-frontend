import { configureStore } from '@reduxjs/toolkit'
import authReducerSlice from '../redux/feature/auth/authSlice'
import { doctorsApi } from './api/doctorsApi'

// use redux parsist 
// import { persistStore, persistReducer } from 'redux-persist'
// import storage from 'redux-persist/lib/storage'



// const persistConfig = {
//   key: 'root',
//   storage,
// }

// const rootReducer = combineReducers({
//   auth: authReducerSlice
// })

// // eslint-disable-next-line @typescript-eslint/no-unused-vars
// const persistedReducer = persistReducer(persistConfig, rootReducer)



// export const store = configureStore({
//   reducer: persistedReducer
// })


export const store = configureStore({
  reducer: {
    auth: authReducerSlice,
    [doctorsApi.reducerPath] : doctorsApi.reducer
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(doctorsApi.middleware),
})



// export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch